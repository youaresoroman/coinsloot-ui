import React from "react";

import ButtonProps from "./index.types";
import useTheme from "../../Hooks/useTheme";
//import { useStore } from 'react-context-hook'

//import useToast from "../../Feedback/Toast/Hooks/useToast";

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  url,
  round = true,
  onClick = () => null,
  className = 'cl-button'
}) => {
  //const setToast = useToast()
  const {toggleTheme} = useTheme();

  const mode = `${className}-${type}`
  const classes = `${className} ${[`${className}-${size}`, mode].join(' ')}${round ? ` ${className}-round` : ''}`
  return type !== "link" ? <button
    type='button'
    className={classes}
    onClick={()=>{
      toggleTheme()
      // setToast({
      //   message: "title",
      //   closeable: true
      // })
      onClick()
    }}
  >
    {children}
  </button> : <a href={url} className={classes}>{children}</a>
}

export default Button;
