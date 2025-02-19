import { OphButton } from './OphButton';
import OpenInNew from '@mui/icons-material/OpenInNew';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

const meta = {
  component: OphButton,
} satisfies Meta<typeof OphButton>;

export default meta;

type Story = StoryObj<typeof OphButton>;

export const Filled: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
  render({ variant, children, startIcon, disabled }) {
    return (
      <OphButton
        aria-label="Button"
        variant={variant}
        disabled={disabled}
        startIcon={startIcon}
      >
        {children}
      </OphButton>
    );
  },
};

export const FilledFocused: Story = {
  ...Filled,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('button');
    for (const checkbox of checkboxes) {
      checkbox.focus();
    }
  },
};

export const FilledDisabled: Story = {
  ...Filled,
  args: {
    ...Filled.args,
    disabled: true,
  },
};

export const FilledWithIcon: Story = {
  ...Filled,
  args: {
    ...Filled.args,
    startIcon: <OpenInNew />,
  },
};

export const FilledIconOnly: Story = {
  ...Filled,
  args: {
    ...Filled.args,
    children: undefined,
    startIcon: <OpenInNew />,
  },
};

export const FilledWithIconDisabled: Story = {
  ...FilledDisabled,
  args: {
    ...FilledWithIcon.args,
    disabled: true,
  },
};

export const Outlined: Story = {
  ...Filled,
  args: {
    ...Filled.args,
    variant: 'outlined',
  },
};

export const OutlinedFocused: Story = {
  ...FilledFocused,
  args: {
    ...Filled.args,
    variant: 'outlined',
  },
};

export const OutlinedDisabled: Story = {
  ...Outlined,
  args: {
    ...Outlined.args,
    disabled: true,
  },
};

export const OutlinedWithIcon: Story = {
  ...Outlined,
  args: {
    ...Outlined.args,
    startIcon: <OpenInNew />,
  },
};

export const OutlinedIconOnly: Story = {
  ...Outlined,
  args: {
    ...Outlined.args,
    children: undefined,
    startIcon: <OpenInNew />,
  },
};

export const OutlinedWithIconDisabled: Story = {
  ...FilledDisabled,
  args: {
    ...OutlinedWithIcon.args,
    startIcon: <OpenInNew />,
    disabled: true,
  },
};

export const Text: Story = {
  ...Filled,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  args: {
    ...Filled.args,
    variant: 'text',
  },
};

export const TextFocused: Story = {
  ...FilledFocused,
  ...Text,
};

export const TextDisabled: Story = {
  ...Text,
  args: {
    ...Text.args,
    disabled: true,
  },
};

export const TextWithIcon: Story = {
  ...Text,
  args: {
    ...Text.args,
    startIcon: <OpenInNew />,
  },
};

export const TextIconOnly: Story = {
  ...Text,
  args: {
    ...Text.args,
    children: undefined,
    startIcon: <OpenInNew />,
  },
};

export const TextWithIconDisabled: Story = {
  ...Text,
  args: {
    ...TextWithIcon.args,
    disabled: true,
  },
};
