import React from "react";

import AppProps from "../index.types";
import { useIPFS, useIPFSInstance } from "react-ipfs";
import { useEffect } from "react";
import useTheme from "../../Hooks/useTheme";
import { useNotifications } from "../../Feedback/Toast";
import withNotifications from "../../Hooks/withNotifications";

const App: React.FC<AppProps> = ({ children }) => {
  useTheme()
  const notification = withNotifications()
  
  return <>
    {notification}
    {children}
  </>;
};

export default App