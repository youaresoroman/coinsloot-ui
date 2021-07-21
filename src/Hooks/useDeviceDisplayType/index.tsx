import { useCallback, useEffect, useState } from 'react';
import { useStore } from 'react-context-hook'
import { debounce } from '../../utils';

const useDeviceDisplayType = () => {

  const [displayType, setDisplayType] = useStore('displayType') as ["extrasmall" | "small" | "medium" | "large" | "extralarge", (value: string) => void, () => void];
  const [width, setWidth] = useState(window.innerWidth);

  const getDisplayType = (width: number) => {
    /* Extra small devices (phones, 600px and down) */
    if (width <= 600) {
      return "extrasmall"
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    else if (width > 600 && width <= 768) {
      return "small"
    }
    /* Medium devices (landscape tablets, 768px and up) */
    else if (width > 768 && width <= 992) {
      return "medium"
    }
    /* Large devices (laptops/desktops, 992px and up) */
    else if (width > 992 && width <= 1200) {
      return "large"
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    else {
      return "extralarge"
    }
  }

  const updateWindowDimensions = useCallback(
    debounce(() => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    }, 500),
    []
  );

  useEffect(() => {
    //setWidth(window.innerWidth)
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, []);

  useEffect(() => {
    const deviceType = getDisplayType(width)
    console.log(`%cCurrent device display type is "${deviceType}"`, "color: green");
    setDisplayType(deviceType)
  }, [width])

  return { displayType }
}

export default useDeviceDisplayType