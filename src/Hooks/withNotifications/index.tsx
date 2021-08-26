import React, { ReactChild } from "react";

import Toast from "../../Feedback/Toast";
import { useStore } from 'react-context-hook'

const withNotifications = () => {
  const [notification] = useStore("notifications") as [typeof Toast, (value: typeof Toast) => void, () => void]

  return notification
}

export default withNotifications;
