module.exports = (componentName, groupName) => ({
  content: `import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ${componentName} from "./";

export default {
  title: '${groupName}/${componentName}',
  component: ${componentName}
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Template_Example = Template.bind({});
Template_Example.args = {
  foo: "bar"
};

`,
  extension: `.stories.tsx`
});
