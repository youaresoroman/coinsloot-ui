import React from "react";
import GridProps from "./index.types";

const Grid: React.FC<GridProps> = ({ className, style, children }) => {
  const classes = `cl-grid${className ? " " + className : ""}`
  
  return <div className={classes} style={style}>
    {children}
  </div>
};

export default Grid;
