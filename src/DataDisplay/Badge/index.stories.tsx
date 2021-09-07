import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from "./";
import Container from "../../Layout/Container"

export default {
  title: 'DataDisplay/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const badgeContent = 9999;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}><Container padding="large" elevation={3} style={{ minHeight: 100, minWidth: 200, maxWidth: 200, maxHeight: 200 }}></Container></Badge>;

export const Anchor_Top_Left = Template.bind({});
Anchor_Top_Left.args = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "top"
  },
  badgeContent
};

export const Anchor_Top_Right = Template.bind({});
Anchor_Top_Right.args = {
  anchorOrigin: {
    horizontal: "right",
    vertical: "top"
  },
  badgeContent
};


export const Anchor_Bottom_Left = Template.bind({});
Anchor_Bottom_Left.args = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "bottom"
  },
  badgeContent
};

export const Anchor_Bottom_Right = Template.bind({});
Anchor_Bottom_Right.args = {
  anchorOrigin: {
    horizontal: "right",
    vertical: "bottom"
  },
  badgeContent
};

export const Color_Default = Template.bind({});
Color_Default.args = {
  color: "default",
  badgeContent
};

export const Color_Error = Template.bind({});
Color_Error.args = {
  color: "error",
  badgeContent
};

export const Color_Primary = Template.bind({});
Color_Primary.args = {
  color: "primary",
  badgeContent
};

export const Color_Secondary = Template.bind({});
Color_Secondary.args = {
  color: "secondary",
  badgeContent
};

export const Max_Number = Template.bind({});
Max_Number.args = {
  max: 9,
  badgeContent
};

export const Show_Zero_False = Template.bind({});
Show_Zero_False.args = {
  showZero: false,
  badgeContent: 0
};

export const Show_Zero_True = Template.bind({});
Show_Zero_True.args = {
  showZero: true,
  badgeContent: 0
};

export const Variant_Dot = Template.bind({});
Variant_Dot.args = {
  variant: "dot",
  badgeContent
};

export const Variant_Standart = Template.bind({});
Variant_Standart.args = {
  variant: "standart",
  badgeContent
};

export const Overlap_Circle = Template.bind({});
Overlap_Circle.args = {
  overlap: "circle",
  badgeContent
};

export const Overlap_Standart = Template.bind({});
Overlap_Standart.args = {
  overlap: "standart",
  badgeContent
};