import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from "./";

export default {
  title: 'Display/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Template_Example = Template.bind({});
Template_Example.args = {
  src: "ipfs://Qmb6NcrQ5baEjRF26fc1emavobRM8W2UZPYGtJyxbWs7w2/giga_images/3.png"
};

