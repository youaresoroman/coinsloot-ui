import React, { useEffect, useState } from "react";

import ToastProps from "./index.types";
import Button from "../../Inputs/Button";

const Toast: React.FC<ToastProps> = (
  {
    placeVertical = 'top',
    placeHorizontal = 'right',
    closeable = false,
    className = "cl-toast",
    animate = true,
    actionText = "Action",
    round = true,
    timeout = 6,
    show = false,
    zIndex = 1000,
    message,
    onAction = () => null,
    onClose = () => null
  }
) => {
  const [open, setOpen] = useState<boolean>(show)
  const position = `${className}-position-${placeVertical}-${placeHorizontal}`
  const roundToggle = round ? ` ${className}-round` : ''
  const animateToggle = animate ? ` ${className}-animate` : ''
  const closeableToggle = closeable ? ` ${className}-closeable` : ''
  const timeoutSeconds = timeout * 1000;

  const closeAction = () => {
    onClose()
    setOpen(false)
  }

  const optionalAction = () => {
    onAction()
    setOpen(false)
    
  }

  useEffect(() => {
    setOpen(show)
    if (show && timeout > 0) {
      const timer = setInterval(() => {
        setOpen(false)
      }, timeoutSeconds);
      return () => clearInterval(timer);
    }
    return
  }, [show])

  const closeButton = (closeable ? <div className={`${className}-close`} onClick={closeAction}>
    <Button type="primary">x</Button>
  </div> : null)

  return open ? (
    <div
      style={{ zIndex }}
      className={`${className} ${position}${closeableToggle}${roundToggle}${animateToggle}`}
    >
      <div className={`${className}-message`}>{message}</div>
      <div className={`${className}-action`} onClick={optionalAction}><Button type="link">{actionText}</Button></div>
      {closeButton}
    </div>
  ) : null
};

export default Toast;