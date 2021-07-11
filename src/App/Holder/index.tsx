import React from "react";

import { AppProps } from "../index.types";

import Toast from "../../Feedback/Toast";
import { useStore } from 'react-context-hook'
import useTheme from "../../Hooks/useTheme";

const App: React.FC<AppProps> = ({ children, className = "cl-app" }) => {
  const { actualTheme } = useTheme();
  const [notifications] = useStore('notifications') as [typeof Toast[], (value: unknown) => void, () => void]

  return (
    <div className={`${className}${actualTheme !== "darkTheme" ? ` ${actualTheme}` : ""}`}>
      {notifications.map((notification: any) => <Toast key={notifications.toString()} {...notification} />)}
      {children}
    </div>
  )
};

export default App