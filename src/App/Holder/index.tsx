import React, { useEffect } from "react";

import AppProps from "../index.types";
import { startIPFSInstance } from "react-ipfs";
import { useTheme } from "../..";
import { withNotifications } from "../..";
import { useDeviceTypeDetect } from "../..";

const App: React.FC<AppProps> = ({ children }) => {
  const notification = withNotifications()
  useTheme()
  startIPFSInstance("full")
  useDeviceTypeDetect()

  return <>
    {notification}
    {children}
  </>;
};

export default App