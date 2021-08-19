import React from "react";

import ButtonProps from "./index.types";

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  url,
  disabled = false,
  round = true,
  width = "",
  onClick = () => null,
  className = 'cl-button'
}) => {
  const buttonType = `${className}-${type}${disabled ? "-disabled" : ""}`
  const buttonSize = `${className}-${size}`
  const buttonShape = round ? `${className}-round` : ''

  const classes = `${className} ${[buttonSize, buttonType, buttonShape].join(' ')}`
  return type !== "link" ? <button
    type='button'
    className={classes}
    style={ width ? { width } : {}}
    onClick={() => {
      !disabled ? onClick() : null
    }}
  >
    {children}
  </button> : <a href={url} className={classes}>{children}</a>
}

export default Button;
