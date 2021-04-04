import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Arid } from './Arid';

export default {
  title: 'Arid',
  component: Arid,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
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

const Template: Story<ComponentProps<typeof Arid>> = (args) => <Arid {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black"
};
