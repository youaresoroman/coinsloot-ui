import React from "react";
import PlaceContentProps from "./index.types";

const PlaceContent: React.FC<PlaceContentProps> = ({ children, className, style, verticalDirection, horizontalDirection }) => {
  const directionHorizontalToggle = ` cl-place-content-horizontal-${horizontalDirection}`
  const directionVerticalToggle = ` cl-place-content-vertical-${verticalDirection}`

  const classes = `cl-place-content${directionVerticalToggle}${directionHorizontalToggle}${className ? " " + className : ""}`

  return <div className={classes} style={style}>
    {children}
  </div>
};

export default PlaceContent;
