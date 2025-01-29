import { Search } from '@mui/icons-material';
import { OphInputFormField } from './OphInput';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { InputAdornment } from '@mui/material';

const meta = {
  component: OphInputFormField,
} satisfies Meta<typeof OphInputFormField>;

export default meta;

type Story = StoryObj<typeof OphInputFormField>;

const LABEL = 'Label';

export const Default: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    inputProps: {
      'aria-label': LABEL,
    },
  },
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
    const inputs = canvas.getAllByRole('textbox');
    for (const input of inputs) {
      input.focus();
    }
  },
};

export const DefaultDisabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const DefaultError: Story = {
  args: { ...Default.args, error: true },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    multiline: true,
    rows: 10,
  },
};

export const WithEndAdornment: Story = {
  args: {
    ...Default.args,
    endAdornment: (
      <InputAdornment position="end">
        <Search />
      </InputAdornment>
    ),
  },
};

export const Labeled: Story = {
  args: {
    label: LABEL,
    ...Default.args,
  },
};

export const LabeledRequired: Story = {
  args: {
    ...Labeled.args,
    required: true,
  },
};

export const LabeledWithError: Story = {
  args: {
    ...Labeled.args,
    errorMessage: 'Input is invalid!',
  },
};

export const LabeledWithHelperText: Story = {
  args: {
    ...Labeled.args,
    helperText: 'Please enter a number',
  },
};
