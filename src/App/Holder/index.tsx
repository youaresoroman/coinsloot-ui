import React from "react";

import AppProps from "../index.types";

import Toast from "../../Feedback/Toast";
import { useStore } from 'react-context-hook'
import useDeviceDisplayType from "../../Hooks/useDeviceDisplayType";

const App: React.FC<AppProps> = ({ children }) => {
  useDeviceDisplayType();

  const [notifications] = useStore('notifications') as [typeof Toast[], (value: unknown) => void, () => void]

  return (
    <>
      {notifications.map((notification: any) => <Toast key={notifications.toString()} {...notification} />)}
      {children}
    </>
  )
};

export default App