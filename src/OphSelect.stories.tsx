import { OphSelect } from './OphSelect';
import { userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphSelect,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1',
    },
  },
} satisfies Meta<typeof OphSelect>;

export default meta;

const OPTIONS = [
  { value: '1', label: 'eka' },
  { value: '2', label: 'toka' },
];

type Story = StoryObj<typeof OphSelect>;

export const Default: Story = {
  args: {
    options: OPTIONS,
    placeholder: 'Valitse',
    inputProps: {
      'aria-label': 'valitse',
    },
  },
};

export const DefaultFocused: Story = {
  args: Default.args,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selects = canvas.getAllByRole('combobox');
    for (const select of selects) {
      select.focus();
    }
  },
};

export const DefaultOpen: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selects = canvas.getAllByRole('combobox');
    for (const select of selects) {
      await userEvent.hover(select);
      await userEvent.click(select);
    }
  },
};

export const Clearable: Story = {
  args: {
    ...Default.args,
    clearable: true,
  },
};

export const ClearableOpen: Story = {
  ...DefaultOpen,
  args: {
    ...Default.args,
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
