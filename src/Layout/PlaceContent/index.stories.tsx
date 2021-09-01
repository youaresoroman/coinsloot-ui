import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlaceContent from "./";

export default {
  title: 'Layout/PlaceContent',
  component: PlaceContent
} as ComponentMeta<typeof PlaceContent>;

const Template: ComponentStory<typeof PlaceContent> = (args) => <PlaceContent {...args} />;

export const Template_Example = Template.bind({});
Template_Example.args = {
  foo: "bar"
};

