import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Picture from "./";
import { Container } from "../..";

export default {
  title: 'Display/Picture',
  component: Picture
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => <Container padding="large" margin="large" elevation={4} style={{ maxWidth: "max-content" }}>
  <Picture {...args} />
</Container>;

export const Default = Template.bind({});
Default.args = {
  src: "ipfs://Qmb6NcrQ5baEjRF26fc1emavobRM8W2UZPYGtJyxbWs7w2/giga_images/3.png",
  source: [
    {
      media: "(min-width:650px)",
      srcset: "ipfs://QmVPBcKjrbG1VfR3Qru55HfuBKm8k6G1dSEFcpRdJftJrJ/1.png"
    },
    {
      media: "(max-width:649px)",
      srcset: "ipfs://Qmb6NcrQ5baEjRF26fc1emavobRM8W2UZPYGtJyxbWs7w2/giga_images/2.png"
    }
  ]
};

export const Styled = Template.bind({});
Styled.args = {
  style: { maxWidth: 300 },
  src: "ipfs://Qmb6NcrQ5baEjRF26fc1emavobRM8W2UZPYGtJyxbWs7w2/giga_images/3.png",
  source: [
    {
      media: "(min-width:650px)",
      srcset: "ipfs://QmVPBcKjrbG1VfR3Qru55HfuBKm8k6G1dSEFcpRdJftJrJ/1.png"
    },
    {
      media: "(max-width:649px)",
      srcset: "ipfs://Qmb6NcrQ5baEjRF26fc1emavobRM8W2UZPYGtJyxbWs7w2/giga_images/2.png"
    }
  ]
};

