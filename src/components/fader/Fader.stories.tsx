import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Fader } from './Fader';

export default {
  title: 'Fader',
  component: Fader,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
};

const Template: Story<ComponentProps<typeof Fader>> = (args) => <Fader {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black"
};
