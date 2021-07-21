// eslint-disable
import Ipfs from "ipfs"
// ipfs is the core API, a CLI and a HTTP server that functions as a HTTP to IPFS bridge
// and an RPC endpoint. See https://www.npmjs.com/package/ipfs
import { useEffect, useState } from "react"

let ipfs = null

export default function useIpfsFactory () {
    // initialise state variables, React hooks
    const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
    const [ipfsInitError, setIpfsInitError] = useState(null)

    useEffect(() => {
        startIpfs()
        // ... add here any other init fn as required by an application
        return function cleanup () {
            if (ipfs && ipfs.stop) {
                console.log("Stopping IPFS")
                ipfs.stop().catch(err => console.error(err))
                ipfs = null
                setIpfsReady(false)
            }
        }
    }, [])

    async function startIpfs () {
        // initialise IPFS daemon
        if (ipfs) {
            console.log("IPFS already started")
        } else {
            try {
                console.log("%cIPFS Started", "color: green")    // start timer
                ipfs = await Ipfs.create()
                //console.timeEnd("IPFS Started") // stop timer and log duration in console
            } catch (error) {
                console.error("IPFS init error:", error)
                ipfs = null
                setIpfsInitError(error)
            }
        }

        setIpfsReady(Boolean(ipfs))
    }

    return { ipfs, isIpfsReady, ipfsInitError }
}
