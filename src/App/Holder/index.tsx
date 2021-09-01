import React from "react";

import AppProps from "../index.types";
import { useIPFS, useIPFSInstance } from "react-ipfs";
import { useEffect } from "react";
import useTheme from "../../Hooks/useTheme";

const App: React.FC<AppProps> = ({ children }) => {
  useTheme()
  return <>
    {children}
  </>;
};

export default App