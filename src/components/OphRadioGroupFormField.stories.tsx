import type { Meta, StoryObj } from '@storybook/react';
import { OPTIONS } from '../story-common';
import { within } from '@storybook/test';
import { OphRadioGroupFormField } from './OphRadioGroupFormField';

const meta = {
  component: OphRadioGroupFormField,
} satisfies Meta<typeof OphRadioGroupFormField>;

export default meta;

type Story = StoryObj<typeof OphRadioGroupFormField>;

export const Default: Story = {
  args: {
    options: OPTIONS,
    label: 'Label',
  },
};

export const DefaultRequired: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};

export const DefaultRow: Story = {
  args: { ...Default.args, row: true },
};

export const DefaultHovered: Story = {
  ...Default,
  args: Default.args,
  parameters: {
    pseudo: { hover: true }, // both options will be hovered, but it's ok, this is just to verify the hover style
  },
};

export const DefaultFocused: Story = {
  ...Default,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    for (const radio of radios) {
      radio.focus();
    }
  },
};

export const DefaultRowFocused: Story = {
  ...DefaultFocused,
  args: { ...DefaultFocused.args, row: true },
};

export const DefaultValue: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: '1' },
};

export const DefaultError: Story = {
  ...Default,
  args: { ...Default.args, error: true },
};

export const DefaultDisabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const DefaultErrorDisabled: Story = {
  ...DefaultError,
  args: { ...DefaultError.args, disabled: true },
};

export const DefaultHelperText: Story = {
  ...Default,
  args: {
    ...Default.args,
    helperText: 'Helper text',
  },
};

export const DefaultErrorMessage: Story = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Error message',
  },
};

export const Checked: Story = {
  ...Default,
  args: { ...Default.args, value: '2' },
};

export const CheckedError: Story = {
  ...Checked,
  args: { ...Checked.args, error: true },
};

export const CheckedDisabled: Story = {
  ...Checked,
  args: { ...Checked.args, disabled: true },
};

export const CheckedHovered: Story = {
  ...DefaultHovered,
  args: { ...DefaultHovered.args, value: '2' }, // both options will be hovered, but it's ok, this is just to verify the hover style
};

export const CheckedFocused: Story = {
  ...DefaultFocused,
  args: { ...DefaultFocused.args, value: '2' },
};
export const CheckedErrorDisabled: Story = {
  ...Checked,
  args: { ...Checked.args, error: true, disabled: true },
};
