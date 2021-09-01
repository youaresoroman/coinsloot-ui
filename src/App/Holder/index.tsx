import React from "react";

import AppProps from "../index.types";
import { useIPFS, useIPFSInstance } from "react-ipfs";
import { useEffect } from "react";

const App: React.FC<AppProps> = ({ children }) => {

  return <>
    {children}
  </>;
};

export default App