import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from ".";

export default {
  title: 'Inputs/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <>Some text <Button onClick={() => {
    console.log("click")
  }} {...args} /> around</>
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: 'Secondary button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "ghost",
  children: 'Ghost button',
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  children: 'Link button',
};
