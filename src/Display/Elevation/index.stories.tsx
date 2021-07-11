import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Elevation from ".";
import Empty from "../../Layout/Empty";

export default {
  title: 'Display/Elevation',
  component: Elevation
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = (args) => <Elevation {...args} />;

export const One = Template.bind({});
One.args = {
  children: <Empty />,
  height: 1
};

export const Two = Template.bind({});
Two.args = {
  children: <Empty />,
  height: 2
};

export const Three = Template.bind({});
Three.args = {
  children: <Empty />,
  height: 3
};

export const Four = Template.bind({});
Four.args = {
  children: <Empty />,
  height: 4
};

export const Five = Template.bind({});
Five.args = {
  children: <Empty />,
  height: 5
};
