// eslint-disable
import Ipfs from "ipfs"
// ipfs is the core API, a CLI and a HTTP server that functions as a HTTP to IPFS bridge
// and an RPC endpoint. See https://www.npmjs.com/package/ipfs
import { useEffect, useState } from "react"

let ipfs = null

export default function useIpfsFactory() {
    // initialise state variables, React hooks
    const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
    const [ipfsInitError, setIpfsInitError] = useState(null)

    useEffect(() => {
        startIpfs()
        // ... add here any other init fn as required by an application
        return function cleanup() {
            if (ipfs && ipfs.stop) {
                console.log("Stopping IPFS")
                ipfs.stop().catch(err => console.error(err))
                ipfs = null
                setIpfsReady(false)
            }
        }
    }, [])

    async function startIpfs() {
        // initialise IPFS daemon
        if (ipfs) {
            console.log("IPFS already started")
        } else {
            try {
                console.log("%cIPFS Started", "color: green")    // start timer
                ipfs = await Ipfs.create()

                const list = [
                    "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
                    "/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
                    "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
                    "/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
                    "/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
                    "/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
                    "/ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
                    "/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
                    "/ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
                    "/ip4/147.75.77.187/tcp/4001/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
                    "/ip4/185.26.156.72/tcp/48240/ipfs/QmRn3gU6pmWjcSyYmNnC1ZQ1WGiSYh6c7M4Mp6CSMmFLhK"
                ]

                list.forEach(addr => {
                    ipfs.bootstrap.add(addr)
                })
            } catch (error) {
                //console.error("IPFS init error:", error)
                ipfs = null
                setIpfsInitError(error)
            }
        }

        setIpfsReady(Boolean(ipfs))
    }

    return { ipfs, isIpfsReady, ipfsInitError }
}
