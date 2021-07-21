import { useEffect } from 'react';
import { useStore } from 'react-context-hook'
import useIpfsFactory from "../useIpfsFactory";
import ipfsInstance from './index.type';

const useIPFS = () => {
    const { ipfs, ipfsInitError, isIpfsReady } = useIpfsFactory()
    const [instance, setInstance] = useStore('ipfsInstance') as ipfsInstance;

    useEffect(()=>{
        setInstance({ ipfs, ipfsInitError, isIpfsReady })
    },[isIpfsReady])

    return 
}

export default useIPFS