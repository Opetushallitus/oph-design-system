import { OphSelectMultipleFormField } from '@/src';
import type { Meta, StoryObj } from '@storybook/react';
import { OPTIONS } from '../story-common';

const meta = {
  component: OphSelectMultipleFormField,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1',
    },
  },
} satisfies Meta<typeof OphSelectMultipleFormField>;

export default meta;

type Story = StoryObj<typeof OphSelectMultipleFormField>;

export const Default: Story = {
  args: {
    options: OPTIONS,
    placeholder: 'Select',
    inputProps: {
      'aria-label': 'select',
    },
  },
};

export const ValuesSelected: Story = {
  ...Default,
  args: {
    value: ['1', '2'],
    clearable: true,
    ...Default.args,
  },
};
