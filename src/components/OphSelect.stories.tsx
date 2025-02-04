import { OphSelectFormField } from './OphSelect';
import { userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphSelectFormField,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1',
    },
  },
} satisfies Meta<typeof OphSelectFormField>;

export default meta;

const OPTIONS = [
  { value: '1', label: 'ensimmäinen vaihtoehto' },
  { value: '2', label: 'toinen vaihtoehto' },
];

type Story = StoryObj<typeof OphSelectFormField>;

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

export const DefaultDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DefaultError: Story = {
  args: {
    ...Default.args,
    error: true,
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

export const Labeled: Story = {
  ...Default,
  args: {
    label: 'Otsikko',
    ...Default.args,
  },
};

export const LabeledRequired: Story = {
  ...Labeled,
  args: {
    ...Labeled.args,
    required: true,
  },
};

export const LabeledHelperText: Story = {
  ...Labeled,
  args: {
    ...Labeled.args,
    helperText: 'Aputeksti',
  },
};

export const LabeledWithError: Story = {
  ...Labeled,
  args: {
    ...Labeled.args,
    label: 'Otsikko',
    errorMessage: 'Virheviesti',
  },
};
