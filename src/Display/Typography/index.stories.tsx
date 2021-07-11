import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from "./";

export default {
  title: 'Display/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Template_Example = Template.bind({});
Template_Example.args = {
  foo: "bar"
};

