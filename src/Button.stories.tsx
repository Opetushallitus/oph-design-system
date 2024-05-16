import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Painike',
  },
  render({ variant, children }) {
    return (
      <Box display="flex" gap={2}>
        <Button variant={variant}>{children}</Button>
        <Button variant={variant} disabled>
          {children}
        </Button>
        <Button variant={variant} icon={<OpenInNew />}>
          {children}
        </Button>
        <Button variant={variant} icon={<OpenInNew />} disabled>
          {children}
        </Button>
      </Box>
    );
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    variant: 'outlined',
    children: 'Painike',
  },
};

export const Text: Story = {
  ...Primary,
  args: {
    variant: 'text',
    children: 'Painike',
  },
};
