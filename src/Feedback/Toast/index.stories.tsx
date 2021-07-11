import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from ".";
import App from "../../App";

export default {
  title: 'Feedback/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Top_Left = Template.bind({});
Top_Left.args = {
  show:true,
  closeable: true,
  placeVertical: "top",
  message: "Message",
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
  show:true,
  closeable: true,
  placeVertical: "top",
  message: "Message",
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
  show:true,
  closeable: true,
  placeVertical: "top",
  message: "Message",
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
  show:true,
  closeable: true,
  message: "Message",
  placeVertical: "bottom",
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
  show:true,
  closeable: true,
  message: "Message",
  placeVertical: "bottom",
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
  show:true,
  closeable: true,
  message: "Message",
  placeVertical: "bottom",
  placeHorizontal: "center",
  onClose: () => {
    console.log("close")
  },
  onAction: () => {
    console.log("action")
  }
};
