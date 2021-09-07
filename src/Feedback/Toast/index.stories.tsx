import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast, { useNotifications } from ".";
import { useEffect } from "react";

export default {
  title: 'Feedback/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const openNotification = useNotifications()

  useEffect(()=>{
    openNotification(args)
  },[])
  

  return <></>
};

const timeout = 4;
const onAction = () => console.log("action")
//const onAction = null
//const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."

export const Top_Left = Template.bind({});
Top_Left.args = {
  timeout,
  show: true,
  closeable: true,
  placeVertical: "top",
  message,
  placeHorizontal: "left",
  onClose: () => {
    console.log("close")
  },
  onAction
};

export const Top_Right = Template.bind({});
Top_Right.args = {
  timeout,
  show: true,
  closeable: true,
  placeVertical: "top",
  message,
  placeHorizontal: "right",
  onClose: () => {
    console.log("close")
  },
  onAction
};


export const Top_Center = Template.bind({});
Top_Center.args = {
  show: true,
  timeout,
  closeable: true,
  placeVertical: "top",
  message,
  placeHorizontal: "center",
  onClose: () => {
    console.log("close")
  },
  onAction
};

export const Bottom_Left = Template.bind({});
Bottom_Left.args = {
  timeout,
  show: true,
  closeable: true,
  message,
  placeVertical: "bottom",
  placeHorizontal: "left",
  onClose: () => {
    console.log("close")
  },
  onAction
};

export const Bottom_Right = Template.bind({});
Bottom_Right.args = {
  timeout,
  show: true,
  closeable: true,
  message,
  placeVertical: "bottom",
  placeHorizontal: "right",
  onClose: () => {
    console.log("close")
  },
  onAction
};

export const Bottom_Center = Template.bind({});
Bottom_Center.args = {
  timeout,
  show: true,
  closeable: true,
  message,
  placeVertical: "bottom",
  placeHorizontal: "center",
  onClose: () => {
    console.log("close")
  },
  onAction
};
