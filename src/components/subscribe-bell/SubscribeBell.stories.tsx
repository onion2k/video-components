import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { SubscribeBell } from './SubscribeBell';

export default {
  title: 'SubscribeBell',
  component: SubscribeBell,
};

const Template: Story<ComponentProps<typeof SubscribeBell>> = (args) => <SubscribeBell {...args} />;

export const Defaults = Template.bind({});
