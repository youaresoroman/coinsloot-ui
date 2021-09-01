import React from "react";
import LinkProps from "./index.types";

const Link: React.FC<LinkProps> = ({ className, style, children, url, target, rel, color="default" }) => {
  const colorToggle = `cl-link-color-${color}`
  const classes = `cl-link ${colorToggle}${className ? " " + className : ""}`
  
  return <a href={url} target={target} rel={rel} className={classes} style={style}>{children}</a>
};

export default Link;
