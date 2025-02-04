import { type Meta, type StoryObj } from '@storybook/react';
import { OphFormFieldWrapper } from './OphFormFieldWrapper';
import { OphInput } from './OphInput';

const meta = {
  title: 'utils/OphFormFieldWrapper',
  component: OphFormFieldWrapper,
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} satisfies Meta<typeof OphFormFieldWrapper>;

export default meta;

type Story = StoryObj<typeof OphFormFieldWrapper>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    label: 'Label',
    required: true,
    renderInput: ({ labelId }) => (
      <OphInput
        aria-labelledby={labelId}
        placeholder="Your custom input here!"
      />
    ),
  },
};
