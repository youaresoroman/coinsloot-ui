import React from "react";

import AppProps from "../index.types";
import { startIPFSInstance } from "react-ipfs";
import useTheme from "../../Hooks/useTheme";
import withNotifications from "../../Hooks/withNotifications";

const App: React.FC<AppProps> = ({ children }) => {
  useTheme()
  startIPFSInstance()
  const notification = withNotifications()
  
  return <>
    {notification}
    {children}
  </>;
};

export default App