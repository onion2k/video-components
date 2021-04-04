import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Squares } from './Squares';

export default {
  title: 'Squares',
  component: Squares,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'col', 'tl']
      }
    }
  }
};

const Template: Story<ComponentProps<typeof Squares>> = (args) => <Squares {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  color: "white"
};
