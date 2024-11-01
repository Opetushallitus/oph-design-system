import { within } from '@storybook/test';
import { OphLink } from './OphLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphLink,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} satisfies Meta<typeof OphLink>;

export default meta;

type Story = StoryObj<typeof OphLink>;

export const External: Story = {
  args: {
    href: 'https://opintopolku.fi',
    children: 'Opintopolku',
  },
};

export const ExternalHovered: Story = {
  ...External,
  parameters: {
    pseudo: { hover: true },
  },
};

export const ExternalFocused: Story = {
  ...External,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    for (const link of links) {
      link.focus();
    }
  },
};

export const ExternalFocusedSmall: Story = {
  ...External,
  args: {
    ...External.args,
    variant: 'body2',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    for (const link of links) {
      link.focus();
    }
  },
};

export const Internal: Story = {
  args: {
    href: '#',
    children: 'Linkki',
  },
};

export const InternalHovered: Story = {
  ...Internal,
  parameters: {
    pseudo: { hover: true },
  },
};

export const InternalFocused: Story = {
  ...ExternalFocused,
  ...Internal,
};
