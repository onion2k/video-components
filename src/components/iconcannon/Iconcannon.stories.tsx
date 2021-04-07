import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Iconcannon } from './Iconcannon';

export default {
  title: 'Iconcannon',
  component: Iconcannon,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px' }}><Story /></div>],
};

const Template: Story<ComponentProps<typeof Iconcannon>> = (args) => <Iconcannon {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black"
};
