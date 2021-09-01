import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkComponent from "./";

export default {
  title: 'Navigation/Link',
  component: LinkComponent
} as ComponentMeta<typeof LinkComponent>;

const children = "Link"

const Template: ComponentStory<typeof LinkComponent> = (args) => { 
  return <>Some text <LinkComponent {...args} /> around</>
};

export const Link = Template.bind({});
Link.args = {
  children
}

