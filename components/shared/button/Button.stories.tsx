import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { createUseStyles } from 'react-jss';

import Button, { Props } from './Button';

export default {
  title: 'Home/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const useStyles = createUseStyles({
  blueButton: { 
    backgroundColor: 'blue',
  },
  redButton: { 
    backgroundColor: 'red',
  },
  customizedButton: { 
    backgroundColor: '#000',
    border: 'none',
    borderRadius: 3,
    padding: [10, 30],
    color: '#fff',
  },

});

const Template: Story<Props> = (args) => {
  const classes = useStyles();
  return (
    <Button {...args} className={(classes as any)[(args as any)?.className]} />
  );
};

export const DefaultButton = Template.bind({});
DefaultButton.args = { text: 'My Button' };

export const BlueButton = Template.bind({});
BlueButton.args = { text: 'My Button', className: 'blueButton' };

export const RedButton = Template.bind({});
RedButton.args = { text: 'My Button', className: 'redButton' };

export const FullCustomButton = Template.bind({});
FullCustomButton.args = { text: 'My Button', className: 'customizedButton' };

