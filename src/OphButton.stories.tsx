import { OphButton } from './OphButton';
import { OpenInNew } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn, within } from '@storybook/test';

const meta = {
  component: OphButton,
} satisfies Meta<typeof OphButton>;

export default meta;

type Story = StoryObj<typeof OphButton>;

export const Filled: Story = {
  args: {
    variant: 'contained',
    children: 'Painike',
    onClick: fn(),
  },
  render({ variant, children, onClick, startIcon, disabled }) {
    return (
      <OphButton
        aria-label="Painike"
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
      >
        {children}
      </OphButton>
    );
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button', { name: 'Painike' });

    for (const button of buttons) {
      await userEvent.click(button);
    }

    // Siirretään fokus pois viimeisestä napista
    await userEvent.tab();
    await expect(args.onClick).toHaveBeenCalledTimes(buttons.length);
  },
};

export const FilledDisabled: Story = {
  ...Filled,
  args: {
    ...Filled.args,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button', { name: 'Painike' });

    for (const button of buttons) {
      await expect(button).toBeDisabled();
    }
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

export const OutlinedDisabled: Story = {
  ...FilledDisabled,
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
  args: {
    ...Filled.args,
    variant: 'text',
  },
};

export const TextDisabled: Story = {
  ...FilledDisabled,
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
  ...FilledDisabled,
  args: {
    ...TextWithIcon.args,
    disabled: true,
  },
};
