import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Speaker } from './Speaker';

export default {
  title: 'Speaker',
  component: Speaker,
};

const Template: Story<ComponentProps<typeof Speaker>> = (args) => <Speaker {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  text: "Hello World",
};
