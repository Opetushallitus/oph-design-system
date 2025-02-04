import { OPTIONS } from '../story-common';
import { OphSelect } from './OphSelect';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphSelect,
} satisfies Meta<typeof OphSelect>;

export default meta;

type Story = StoryObj<typeof OphSelect>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    options: OPTIONS,
    placeholder: 'Select',
    inputProps: {
      'aria-label': 'Select',
    },
  },
};
