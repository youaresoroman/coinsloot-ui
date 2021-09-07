import React, { Children } from "react";
import BadgeProps from "./index.types";

const Badge: React.FC<BadgeProps> = ({
  className,
  style,
  children,
  anchorOrigin = {
    horizontal: "right",
    vertical: "top"
  },
  color = "default",
  invisible = false,
  max = 99,
  overlap = "standart",
  showZero = true,
  variant = "standart",
  badgeContent
}) => {
  const anchor = ` cl-badge-content-anchor-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`
  const colorType = ` cl-badge-content-color-${color}`
  const isVisible = `${invisible ? " cl-badge-content-invisible" : ""}`
  const overlapType = ` cl-badge-content-overlap-${overlap}`
  const variantType = ` cl-badge-content-variant-${variant}`
  const classes = `cl-badge-content${anchor}${colorType}${isVisible}${overlapType}${variantType}${className ? " " + className : ""}`

  return <div className="cl-badge" style={style}>
    {children}
    <span className={classes}>
      { typeof badgeContent == "number" ?
          badgeContent > max ? max :
            badgeContent == 0 && showZero ? badgeContent : <></> : badgeContent}
    </span>
  </div>
};

export default Badge;
