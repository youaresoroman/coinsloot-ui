const { useEffect } = require('react');
import { useStore } from 'react-context-hook'
import { useDeviceTypeDetectTypes } from './index.types';

export const getDeviceType = (userAgent: string) => {
    const isAndroid = Boolean(userAgent.match(/Android/i));
    const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = Boolean(userAgent.match(/IEMobile/i));
    const isSSR = Boolean(userAgent.match(/SSR/i));

    const isMobile = Boolean(isAndroid || isIos || isOpera || isWindows);
    const isDesktop = Boolean(!isMobile && !isSSR);

    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR
    };
};

const useDeviceTypeDetect = () => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    const [deviceType, setDeviceType] = useStore('displayType') as useDeviceTypeDetectTypes;

    useEffect(()=>{
        setDeviceType(getDeviceType(userAgent))
    },[userAgent])

    return deviceType;
};

export default useDeviceTypeDetect;
