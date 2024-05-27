import { Button } from './Button';
import { OpenInNew } from '@mui/icons-material';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn, within } from '@storybook/test';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: (
      <span
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Painike
      </span>
    ),
    onClick: fn(),
  },
  render({ variant, children, onClick }) {
    return (
      <Box display="flex" gap={2}>
        <Button variant={variant} onClick={onClick}>
          {children}
        </Button>
        <Button variant={variant} disabled>
          {children}
        </Button>
        <Button variant={variant} startIcon={<OpenInNew />} onClick={onClick}>
          {children}
        </Button>
        <Button variant={variant} startIcon={<OpenInNew />} disabled>
          {children}
        </Button>
      </Box>
    );
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    await expect(buttons).toHaveLength(8);

    for (const button of buttons) {
      if (!(button as HTMLButtonElement).disabled) {
        await userEvent.hover(button);
        await userEvent.click(button);
      }
    }
    // Siirretään fokus pois viimeisestä napista
    await userEvent.tab();
    await expect(args.onClick).toBeCalledTimes(4);
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'outlined',
    onClick: fn(),
  },
};

export const Text: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'text',
    onClick: fn(),
  },
};
