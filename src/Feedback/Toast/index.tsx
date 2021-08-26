import React, { useEffect, useState } from "react";

import ToastProps from "./index.types";
import Button from "../../Inputs/Button";
import Container from "../../Layout/Container";
import { useStore } from "react-context-hook";

const Toast: React.FC<ToastProps> = (
  {
    placeVertical = 'top',
    placeHorizontal = 'right',
    className = "",
    animate = true,
    actionText = "Action",
    round = true,
    timeout = 6,
    show = false,
    zIndex = 1000,
    message,
    onAction,
    onClose
  }
) => {
  const toastClassname = "cl-toast"
  const longread = message.split(" ").length > 10
  const [open, setOpen] = useState<boolean>(show)
  const position = `${toastClassname}-position-${placeVertical}-${placeHorizontal}`
  const animateToggle = animate ? ` ${toastClassname}-animate` : ''
  const withActionOrLongread = onAction && longread ? ` ${toastClassname}-withAction-longread` : onAction && !longread ? ` ${toastClassname}-withAction` : !onAction && longread ? ` ${toastClassname}-longread` : ''
  const timeoutSeconds = timeout * 1000;

  const closeAction = () => {
    onClose ? onClose() : null
    setOpen(false)
  }

  const optionalAction = () => {
    onAction ? onAction() : null
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

  return open ? <Container
    style={{ zIndex }}
    className={`${toastClassname} ${position}${withActionOrLongread}${animateToggle}${className ? " " + className : ""}`}
    padding="medium"
    margin="none"
    animated={false}
    round={round}
  >
    <div className={`${toastClassname}-message`}>{message}</div>
    {onAction ? <div className={`${toastClassname}-action`} onClick={optionalAction}>
      <Button type="text">{actionText}</Button>
    </div> : <></>}
    <div className={`${toastClassname}-close`} onClick={closeAction}>
      <Button type="ghost">Close</Button>
    </div>
  </Container> : <></>
};

export const useNotifications = () => {
  const [, setNotification] = useStore('notifications') as unknown as [typeof Toast, (value: unknown) => void, () => void]
  
  const openNotification = (props: ToastProps) => {
    setNotification(<Toast {...props} />)
    return
  }

  return openNotification
}

export default Toast;