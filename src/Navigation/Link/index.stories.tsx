import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from "./";

export default {
  title: 'Navigation/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const children = "Link"

const Template: ComponentStory<typeof Link> = (args) => { 
  return <>Some text <Link {...args} /> around</>
};

export const Template_Example = Template.bind({});
Template_Example.args = {
  children
}

