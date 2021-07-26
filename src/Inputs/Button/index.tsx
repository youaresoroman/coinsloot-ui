import React from "react";

import ButtonProps from "./index.types";
import useTheme from "../../Hooks/useTheme";
import { useStore } from 'react-context-hook'
import ipfsInstance from "../../Hooks/useIPFS/index.type";

//import useToast from "../../Feedback/Toast/Hooks/useToast";

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  url,
  disabled = false,
  round = true,
  onClick = () => null,
  className = 'cl-button'
}) => {
  //const setToast = useToast()
  //const { toggleTheme } = useTheme();
  //const [instance] = useStore("ipfsInstance") as ipfsInstance;

  const buttonType = `${className}-${type}`
  const buttonSize = `${className}-${size}`
  const buttonShape = round ? `${className}-round` : ''
  const buttonActive = disabled ? `${className}-disabled` : ''

  const classes = `${className} ${[buttonSize, buttonType, buttonShape, buttonActive].join(' ')}`
  return type !== "link" ? <button
    type='button'
    className={classes}
    onClick={() => {
      // instance.ipfs.config.getAll().
      //   then((data: any) => {
      //     console.log(data)
      //   })
      //   instance.ipfs.swarm.peers()
      //   .then((data: any) => {
      //     console.log(data)
      //   })
      // //toggleTheme()
      // // setToast({
      // //   message: "title",
      // //   closeable: true
      // // })
      onClick()
    }}
  >
    {children}
  </button> : <a href={url} className={classes}>{children}</a>
}

export default Button;
