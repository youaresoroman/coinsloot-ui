import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from "./";

export default {
  title: 'Layout/Grid',
  component: Grid
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Template_Example = Template.bind({});
Template_Example.args = {
  foo: "bar"
};

