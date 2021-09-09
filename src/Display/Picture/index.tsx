import React, { useEffect, useState } from "react";
import { useIPFS } from "react-ipfs";
import PictureProps from "./index.types";
import Image from "../Image"

const Picture: React.FC<PictureProps> = ({ style, source, src, alt, className, onClick }) => {
  const { ipfs, isIpfsReady } = useIPFS()
  const classes = `${className ? className : ""}`
  const [sources, setSources] = useState<{
    media: string,
    srcset: string,
    type?: string
  }[]>([])

  useEffect(() => {
    if (isIpfsReady && ipfs) {
      Promise.all(source?.map(async (data) => {
        const { srcset, media, type } = data
        let newSrcSet = srcset || ""

        if (newSrcSet.includes("ipfs://")) {
          await ipfs.read(newSrcSet.slice(7)).then(([file]) => {
            newSrcSet = file?.toObjectURL() || ""
          })
        }

        return {
          media,
          type,
          srcset: newSrcSet
        }
      }) || []).then((list: {
        media: string,
        srcset: string,
        type?: string
      }[]) => {
        setSources(list)
      }).catch(() => {
        setSources([])
      })
    }
  }, [ipfs, isIpfsReady, src, source])

  return <picture className={classes} onClick={onClick}>
    {sources?.map(({ media, srcset, type }, index) => {
      return <source key={index} media={media} srcSet={srcset} type={type} />
    })}
    <Image src={src} alt={alt} style={style} />
  </picture>
};

export default Picture;
