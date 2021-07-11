import React from "react";

import Toast from "../../Feedback/Toast";
import { useToastProps } from "./index.types";
import { useGetAndSet } from 'react-context-hook'

const useToast = () => {
  const [notifications, setNotifications] = useGetAndSet('notifications') as [typeof Toast[], (value: unknown) => void]

  const setToast = ({
    placeVertical = 'top',
    placeHorizontal = 'left',
    closeable = false,
    actionText = "Action",
    children = <></>,
    message = "Message",
    className = "cl-toast",
    timeout = 6,
    round = true,
    onAction = () => null,
    onClose = () => null
  }: useToastProps) => {
    setNotifications([...notifications, { 
      show:true,
      placeHorizontal,
      placeVertical,
      closeable,
      actionText,
      children,
      key: `toast-${Date.now()}`,
      message,
      className,
      timeout,
      round,
      onAction,
      onClose
    }])
  };
  
  return {
    notifications,
    setToast
  };
}

export default useToast;
