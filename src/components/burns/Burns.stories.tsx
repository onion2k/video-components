import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Burns } from './Burns';

export default {
  title: 'Burns',
  component: Burns,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
  argTypes: {
    frame: {
      control: {
        type: 'range',
        min: 0,
        max: 1000
      }
    }
  }
};

const Template: Story<ComponentProps<typeof Burns>> = (args) => <Burns {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "black",
  frame: 0
};
