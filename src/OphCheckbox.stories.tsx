import { within } from '@storybook/test';
import { OphCheckbox } from './OphCheckbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphCheckbox,
} satisfies Meta<typeof OphCheckbox>;

export default meta;

type Story = StoryObj<typeof OphCheckbox>;

export const Default: Story = {
  args: {
    label: 'Otsake',
  },
};

export const DefaultRequired: Story = {
  args: { ...Default.args, required: true },
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
    const checkboxes = canvas.getAllByRole('checkbox');
    for (const checkbox of checkboxes) {
      checkbox.focus();
    }
  },
};

export const DefaultDisabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const DefaultError: Story = {
  args: { ...Default.args, error: true },
};

export const Indeterminate: Story = {
  args: { ...Default.args, indeterminate: true },
};

export const IndeterminateRequired: Story = {
  args: { ...Indeterminate.args, required: true },
};

export const IndeterminateFocused: Story = {
  ...DefaultFocused,
  args: Indeterminate.args,
};

export const IndeterminateHovered: Story = {
  ...DefaultHovered,
  args: Indeterminate.args,
};

export const IndeterminateDisabled: Story = {
  args: { ...Indeterminate.args, disabled: true },
};

export const IndeterminateError: Story = {
  ...Indeterminate,
  args: { ...Indeterminate.args, error: true },
};

export const Checked: Story = {
  args: { ...Default.args, checked: true },
};

export const CheckedRequired: Story = {
  args: { ...Checked.args, required: true },
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
  args: { ...Checked.args, disabled: true },
};

export const CheckedError: Story = {
  args: { ...Checked.args, error: true },
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    label: undefined,
    inputProps: { 'aria-label': 'Otsake' },
  },
};

export const WithoutLabelFocused: Story = {
  ...DefaultFocused,
  args: WithoutLabel.args,
};

export const WithoutLabelHovered: Story = {
  ...DefaultHovered,
  args: WithoutLabel.args,
};

export const WithoutLabelDisabled: Story = {
  ...DefaultDisabled,
  args: { ...WithoutLabel.args, disabled: true },
};

export const WithoutLabelError: Story = {
  ...DefaultError,
  args: { ...WithoutLabel.args, error: true },
};
