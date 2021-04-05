import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { BlurText } from './BlurText';

export default {
  title: 'BlurText',
  component: BlurText,
  argTypes: {
    leftOffset: {
      control: {
        type: 'range',
        min: -1000,
        max: 1000
      }
    }
  }
};

const Template: Story<ComponentProps<typeof BlurText>> = (args) => <BlurText {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  text: "Hello World"
};
