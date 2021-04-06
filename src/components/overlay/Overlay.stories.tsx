import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
  title: 'Overlay',
  component: Overlay,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px' }}><Story /></div>],
};

const Template: Story<ComponentProps<typeof Overlay>> = (args) => <Overlay {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black"
};
