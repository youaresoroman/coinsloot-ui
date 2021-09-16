import React, { useEffect, useState } from "react";
import { useIPFS } from "react-ipfs";
import ImageProps from "./index.types";

export const loadImage = (src: string) => {
  const { ipfs, isIpfsReady } = useIPFS()
  const [imgSrc, setImgSrc] = useState<string>("")

  useEffect(() => {
    if (isIpfsReady && ipfs) {
      if (src && src.includes("ipfs://")) {
        ipfs.read(src.slice(7)).then(([file]) => {
          if (file) {
            const fileData = file.toFile()
            setImgSrc(URL.createObjectURL(fileData));
          }
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

const Image: React.FC<ImageProps> = ({ className, style, alt, src }) => {
  const imgSrc = loadImage(src)
  const classes = `${className ? " " + className : ""}`

  return <img className={classes} src={imgSrc} alt={alt} style={style} />
};

export default Image;
