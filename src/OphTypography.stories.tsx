import { OphTypography } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: OphTypography,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1',
    },
  },
} satisfies Meta<typeof OphTypography>;

export default meta;

type Story = StoryObj<typeof OphTypography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Heading1_mobile: Story = {
  ...Heading1,
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const Heading2: Story = {
  args: {
    ...Heading1.args,
    variant: 'h2',
  },
};

export const Heading2_mobile: Story = {
  ...Heading2,
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const Heading3: Story = {
  args: {
    ...Heading1.args,
    variant: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    ...Heading1.args,
    variant: 'h4',
  },
};

export const Heading5: Story = {
  args: {
    ...Heading1.args,
    variant: 'h5',
  },
};

export const Body1: Story = {
  args: {
    ...Heading1.args,
    variant: 'body1',
  },
};

export const Body2: Story = {
  args: {
    ...Heading1.args,
    variant: 'body2',
  },
};

export const Label: Story = {
  args: {
    ...Heading1.args,
    variant: 'label',
  },
};
