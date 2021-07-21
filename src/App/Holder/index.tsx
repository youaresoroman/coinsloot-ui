import React from "react";

import AppProps from "../index.types";

import Toast from "../../Feedback/Toast";
import { useStore } from 'react-context-hook'
import useTheme from "../../Hooks/useTheme";
import useDeviceDisplayType from "../../Hooks/useDeviceDisplayType";
import useIPFS from "../../Hooks/useIPFS";
import ipfsInstance from "../../Hooks/useIPFS/index.type";

const App: React.FC<AppProps> = ({ children }) => {
  useTheme();
  useDeviceDisplayType();
  //useIPFS();
  const [notifications] = useStore('notifications') as [typeof Toast[], (value: unknown) => void, () => void]
  const [instance] = useStore('ipfsInstance') as ipfsInstance;

  return (
    <>
      {notifications.map((notification: any) => <Toast key={notifications.toString()} {...notification} />)}
      {children}
    </>
  )
};

export default App