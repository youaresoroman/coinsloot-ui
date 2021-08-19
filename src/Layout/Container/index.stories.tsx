import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from ".";
import Empty from "../Empty";
//import Elevation from "../../Display/Elevation";

export default {
  title: 'Layout/Container',
  component: Container
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} >
  <Empty border={true} />
</Container>;

export const Small_Padding = Template.bind({});
Small_Padding.args = {
  elevation: 3,
  padding: "small"
};

export const Medium_Padding = Template.bind({});
Medium_Padding.args = {
  elevation: 3,
  padding: "medium"
};

export const Large_Padding = Template.bind({});
Large_Padding.args = {
  elevation: 3,
  padding: "large"
};

export const Small_Margin = Template.bind({});
Small_Margin.args = {
  elevation: 3,
  margin: "small"
};

export const Medium_Margin = Template.bind({});
Medium_Margin.args = {
  elevation: 3,
  margin: "medium"
};

export const Large_Margin = Template.bind({});
Large_Margin.args = {
  elevation: 3,
  margin: "large"
};

export const Square = Template.bind({});
Square.args = {
  children: <Empty round={false} border={true} />,
  elevation: 3,
  round: false
};

export const Large_Margin_Padding = Template.bind({});
Large_Margin_Padding.args = {
  elevation: 3,
  margin: "large",
  padding: "large"
}
