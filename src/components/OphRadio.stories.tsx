import type { Meta, StoryObj } from '@storybook/react';
import { OphRadio } from './OphRadioGroup';
import { within } from '@storybook/test';

const meta = {
  component: OphRadio,
} satisfies Meta<typeof OphRadio>;

export default meta;

type Story = StoryObj<typeof OphRadio>;

export const Default: Story = {
  args: { label: 'Otsake', value: '1' },
};

export const DefaultHovered: Story = {
  args: Default.args,
  parameters: {
    pseudo: { hover: true },
  },
};

export const DefaultFocused: Story = {
  args: Default.args,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radiobuttons = canvas.getAllByRole('radio');
    for (const radio of radiobuttons) {
      radio.focus();
    }
  },
};

export const DefaultDisabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const DefaultError: Story = {
  args: { ...Default.args, error: true },
};

export const DefaultErrorDisabled: Story = {
  args: { ...Default.args, error: true, disabled: true },
};

export const Checked: Story = {
  args: { ...Default.args, checked: true },
};

export const CheckedFocused: Story = {
  ...DefaultFocused,
  args: Checked.args,
};

export const CheckedHovered: Story = {
  ...DefaultHovered,
  args: Checked.args,
};

export const CheckedDisabled: Story = {
  ...Checked,
  args: { ...Checked.args, disabled: true },
};

export const CheckedError: Story = {
  ...Checked,
  args: { ...Checked.args, error: true },
};

export const CheckedErrorDisabled: Story = {
  ...Checked,
  args: { ...Checked.args, error: true, disabled: true },
};
