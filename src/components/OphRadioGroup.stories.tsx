import type { Meta, StoryObj } from '@storybook/react';
import { OPTIONS } from '../story-common';
import { OphRadioGroup } from './OphRadioGroup';
import { within } from '@storybook/test';

const meta = {
  component: OphRadioGroup,
} satisfies Meta<typeof OphRadioGroup>;

export default meta;

type Story = StoryObj<typeof OphRadioGroup>;

export const Default: Story = {
  args: {
    options: OPTIONS,
  },
};

export const DefaultRow: Story = {
  args: { ...Default.args, row: true },
};

export const DefaultValue: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: '1' },
};

export const DefaultSelected: Story = {
  ...Default,
  args: { ...Default.args, value: '2' },
};

export const DefaultRowFocused: Story = {
  ...DefaultRow,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radiobutton = canvas.findByLabelText('First option');
    (await radiobutton).focus();
  },
};

export const DefaultError: Story = {
  ...Default,
  args: { ...Default.args, error: true },
};

export const DefaultDisabled: Story = {
  ...Default,
  args: { ...Default.args, formControlLabelProps: { disabled: true } },
};
