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
    label: 'Otsikko',
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

export const DefaultFocused: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radiobutton = canvas.findByLabelText('First option');
    (await radiobutton).focus();
  },
};

export const DefaultValue: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: '1' },
};

export const DefaultSelected: Story = {
  ...Default,
  args: { ...Default.args, value: '2' },
};

export const DefaultError: Story = {
  ...Default,
  args: { ...Default.args, error: true },
};

export const DefaultDisabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const DefaultHelperText: Story = {
  ...Default,
  args: {
    ...Default.args,
    helperText: 'Aputeksti',
  },
};

export const DefaultWithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Virheviesti',
  },
};
