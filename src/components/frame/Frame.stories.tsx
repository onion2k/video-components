import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Frame } from './Frame';

export default {
  title: 'Frame',
  component: Frame,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
};

const Template: Story<ComponentProps<typeof Frame>> = (args) => <Frame {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black"
};
