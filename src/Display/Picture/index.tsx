import React from "react";
import PictureProps from "./index.types";
import Image from "../Image"
import Source from "../Source";

const Picture: React.FC<PictureProps> = ({ style, source, src, alt, className, onClick }) => {
  const classes = `${className ? className : ""}`

  return <picture  onClick={onClick} style={style}>
    {source.map(({ media, srcset, type }, index) => {
      return <Source key={index} media={media} srcset={srcset} type={type} style={style} />
    })}
    <Image src={src} className={classes} alt={alt} style={style} />
  </picture>
};

export default Picture;
