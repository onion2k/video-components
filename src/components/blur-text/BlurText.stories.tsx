import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { BlurText } from './BlurText';

export default {
  title: 'BlurText',
  component: BlurText,
};

const Template: Story<ComponentProps<typeof BlurText>> = (args) => <BlurText {...args} />;

export const Left = Template.bind({});
Left.args = {
  text: "Hello World",
  direction: "left",
  color: "black"
};

export const Right = Template.bind({});
Right.args = {
  text: "Hello World",
  direction: "right",
  color: "red"
};
