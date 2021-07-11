import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toast from "../../Feedback/Toast";
import useToast from ".";
import App from "../../App";
import Button from "../../Inputs/Button";

export default {
  title: 'Feedback/Toast/Hook',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  //const {Snackbar, onOpen} = useToast({...args})
return <App></App>
};

export const Top_Left = Template.bind({});
Top_Left.args = {
  closeable: true,
  placeVertical: "top",
  actionText: "Undo",
  placeHorizontal: "left",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};

export const Top_Right = Template.bind({});
Top_Right.args = {
  closeable: true,
  placeVertical: "top",
  actionText: "Undo",
  placeHorizontal: "right",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};


export const Top_Center = Template.bind({});
Top_Center.args = {
  closeable: true,
  placeVertical: "top",
  actionText: "Undo",
  placeHorizontal: "center",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};

export const Bottom_Left = Template.bind({});
Bottom_Left.args = {
  closeable: true,
  placeVertical: "bottom",
  actionText: "Undo",
  placeHorizontal: "left",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};

export const Bottom_Right = Template.bind({});
Bottom_Right.args = {
  closeable: true,
  placeVertical: "bottom",
  actionText: "Undo",
  placeHorizontal: "right",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};

export const Bottom_Center = Template.bind({});
Bottom_Center.args = {
  closeable: true,
  placeVertical: "bottom",
  actionText: "Undo",
  placeHorizontal: "center",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};
