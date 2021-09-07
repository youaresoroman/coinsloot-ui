import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlaceContent from "./";
import Container from "../Container"

export default {
  title: 'Layout/PlaceContent',
  component: PlaceContent
} as ComponentMeta<typeof PlaceContent>;

const children = <div>Text</div>

const Template: ComponentStory<typeof PlaceContent> = (args) => {
  return <Container padding="large" style={{minHeight: 300}} elevation={3}><PlaceContent {...args} style={{ minHeight: "inherit"}}/></Container>
}

export const TopLeft = Template.bind({});
TopLeft.args = {
  children,
  verticalDirection: "top",
  horizontalDirection: "left"
};

export const BottonLeft = Template.bind({});
BottonLeft.args = {
  children,
  verticalDirection: "bottom",
  horizontalDirection: "left"
};

export const TopRight = Template.bind({});
TopRight.args = {
  children,
  verticalDirection: "top",
  horizontalDirection: "right"
};

export const BottonRight = Template.bind({});
BottonRight.args = {
  children,
  verticalDirection: "bottom",
  horizontalDirection: "right"
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  children,
  verticalDirection: "top",
  horizontalDirection: "center"
};

export const CenterCenter = Template.bind({});
CenterCenter.args = {
  children,
  verticalDirection: "center",
  horizontalDirection: "center"
};

export const BottonCenter = Template.bind({});
BottonCenter.args = {
  children,
  verticalDirection: "bottom",
  horizontalDirection: "center"
};