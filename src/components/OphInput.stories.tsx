import { OphInput } from './OphInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphInput,
} satisfies Meta<typeof OphInput>;

export default meta;

type Story = StoryObj<typeof OphInput>;

const LABEL = 'Label';

export const Default: Story = {
  tags: ['!dev'],
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    inputProps: {
      'aria-label': LABEL,
    },
  },
};
