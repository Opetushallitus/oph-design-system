import type { Meta, StoryObj } from '@storybook/react';
import { OphRadio } from './OphRadioGroup';

const meta = {
  component: OphRadio,
} satisfies Meta<typeof OphRadio>;

export default meta;

type Story = StoryObj<typeof OphRadio>;

export const Default: Story = {
  tags: ['!dev', '!test'],
  args: { label: 'Label', value: '1' },
};
