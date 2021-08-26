import React from "react";

import AppProps from "../index.types";

const App: React.FC<AppProps> = ({ children }) => {
  return <>
    {children}
  </>;
};

export default App