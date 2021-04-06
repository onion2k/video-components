import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Credits } from './Credits';

export default {
  title: 'Credits',
  component: Credits,
  decorators: [(Story: any) => <div style={{ width: '1200px', height: '675px', backgroundColor: '#dddddd' }}><Story /></div>],
};

const Template: Story<ComponentProps<typeof Credits>> = (args) => <Credits {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  credits: ["Components by Chris Neale", " For use in Remotion", "Powered by React", "Some other things"],
  color: "white",
  backgroundColor: "black"
};
