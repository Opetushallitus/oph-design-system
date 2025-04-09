import type { Meta, StoryObj } from '@storybook/react';
import { OPTIONS } from '../story-common';
import { OphRadioGroup } from './OphRadioGroup';

const meta = {
  component: OphRadioGroup,
} satisfies Meta<typeof OphRadioGroup>;

export default meta;

type Story = StoryObj<typeof OphRadioGroup>;

export const Default: Story = {
  tags: ['!dev', '!test'],
  args: {
    options: OPTIONS,
  },
};
