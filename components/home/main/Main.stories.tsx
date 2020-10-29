import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Main, { Props } from './Main';

export default {
  title: 'Home/Main',
  component: Main,

} as Meta;

const Template: Story<Props> = (args) => <Main {...args} />;

export const MainComponent = Template.bind({});
MainComponent.args = { text: 'Welcome to NextJs App' };

