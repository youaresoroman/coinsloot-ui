import React, { useEffect, useState } from "react";
import { useIPFS } from "react-ipfs";
import ImageProps from "./index.types";

const Image: React.FC<ImageProps> = ({ className, style, alt, src }) => {
  const { ipfs, isIpfsReady } = useIPFS()
  const [imgSrc, setImgSrc] = useState<string>("")
  const classes = `${className ? " " + className : ""}`

  useEffect(() => {
    if (isIpfsReady && ipfs) {
      if (src && src.includes("ipfs://")) {
        ipfs.read(src.slice(7)).then(([file]) => {
          setImgSrc(file?.toObjectURL() || "")
        })
      }
    } else {
      if (src && !src.includes("ipfs://")) {
        setImgSrc(src)
      }
    }
  }, [ipfs, isIpfsReady, src])

  return <img className={classes} src={imgSrc} alt={alt} style={style} />
};

export const loadImage = (src: string) => {
  const { ipfs, isIpfsReady } = useIPFS()
  const [imgSrc, setImgSrc] = useState<string>("")

  useEffect(() => {
    if (isIpfsReady && ipfs) {
      if (src && src.includes("ipfs://")) {
        ipfs.read(src.slice(7)).then(([file]) => {
          setImgSrc(file?.toObjectURL() || "")
        })
      }
    } else {
      if (src && !src.includes("ipfs://")) {
        setImgSrc(src)
      }
    }
  }, [ipfs, isIpfsReady, src])

  return imgSrc
}

export default Image;
