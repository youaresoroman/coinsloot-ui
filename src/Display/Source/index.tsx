import React from "react";
import { loadImage } from "../..";
import SourceProps from "./index.types";

const Source: React.FC<SourceProps> = ({ srcset, media, type, style }) => {
  const imgSrc = loadImage(srcset)
  return <source media={media} srcSet={imgSrc} type={type} style={style} />
};

export default Source;
