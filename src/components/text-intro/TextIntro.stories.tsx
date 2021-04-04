import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { TextIntro } from './TextIntro';

export default {
  title: 'TextIntro',
  component: TextIntro,
};

const Template: Story<ComponentProps<typeof TextIntro>> = (args) => <TextIntro {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  text: "Hello World",
  color: "white"
};

export const HelloWorld2 = Template.bind({});
HelloWorld2.args = {
  text: "Hello There",
  color: "white"
};
