import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from ".";
import Empty from "../Empty";
import Elevation from "../../Display/Elevation";

export default {
  title: 'Layout/Container',
  component: Container
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Elevation height={4} round={args.round}><Container {...args} /></Elevation>;

export const Small_Padding = Template.bind({});
Small_Padding.args = {
  children: <Empty border={true} />,
  padding: "small"
};

export const Medium_Padding = Template.bind({});
Medium_Padding.args = {
  children: <Empty border={true} />,
  padding: "medium"
};

export const Large_Padding = Template.bind({});
Large_Padding.args = {
  children: <Empty border={true} />,
  padding: "large"
};

export const Small_Margin = Template.bind({});
Small_Margin.args = {
  children: <Empty border={true} />,
  margin: "small"
};

export const Medium_Margin = Template.bind({});
Medium_Margin.args = {
  children: <Empty border={true} />,
  margin: "medium"
};

export const Large_Margin = Template.bind({});
Large_Margin.args = {
  children: <Empty border={true} />,
  margin: "large"
};

export const Square = Template.bind({});
Square.args = {
  children: <Empty round={false} border={true} />,
  round: false
};
