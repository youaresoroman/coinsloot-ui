import React, { useEffect, useState } from "react";
import { useIPFS } from "react-ipfs";
import ImageProps from "./index.types";

export function getMime(extension: string) {
  return (
    ({
      "svg": "image/svg+xml",
      "webp": "image/webp",
      "png": "image/png",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "jfif": "image/jpeg",
      "pjpeg": "image/jpeg",
      "pjp": "image/jpeg",
      "gif": "image/gif",
      "avif": "image/avif",
      "apng": "image/apng"
    } as any)[extension] || "")
}

export function getExtension(url: string) {
  return url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2)
}

const Image: React.FC<ImageProps> = ({ className, style, alt, src }) => {
  const { ipfs, isIpfsReady } = useIPFS()
  const [imgSrc, setImgSrc] = useState<string>("")
  const classes = `${className ? " " + className : ""}`

  useEffect(() => {
    if (isIpfsReady && ipfs) {
      if (src && src.includes("ipfs://")) {
        ipfs.read(src.slice(7)).then(([file]) => {
          if (file) {
            const fileData = file.toFile()
            setImgSrc(URL.createObjectURL(fileData));
          }
        })
      } else {
        setImgSrc(src)
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

export default Image;
