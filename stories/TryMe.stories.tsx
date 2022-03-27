import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

const TryMe = ({ children, onClick }): JSX.Element => {
  return (
    <button
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'TryMe',
  component: TryMe,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof TryMe>;

const Template = (args) => <TryMe {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Try Me',
};

export const Interaction = Template.bind({});
Interaction.args = {
  children: 'Interact with Me',
};

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
