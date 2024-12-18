import { Search } from '@mui/icons-material';
import { OphInput } from './OphInput';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { InputAdornment } from '@mui/material';

const meta = {
  component: OphInput,
} satisfies Meta<typeof OphInput>;

export default meta;

type Story = StoryObj<typeof OphInput>;

export const Default: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    inputProps: {
      'aria-label': 'Otsikko',
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
