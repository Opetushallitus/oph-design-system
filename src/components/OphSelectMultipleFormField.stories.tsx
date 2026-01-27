import { OphSelectMultipleFormField } from '@/src';
import type { Meta, StoryObj } from '@storybook/react';
import { OPTIONS } from '../story-common';
import { useState } from 'react';
import type { OphSelectMultipleFormFieldProps } from '@/src/components/OphSelectMultipleFormField';

const meta = {
  component: OphSelectMultipleFormField,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1',
    },
  },
} satisfies Meta<typeof OphSelectMultipleFormField>;

export default meta;

type Story = StoryObj<typeof OphSelectMultipleFormField>;

function StoryRender(props: OphSelectMultipleFormFieldProps<string>) {
  const [value, setValue] = useState(['1', '2']);

  return (
    <OphSelectMultipleFormField
      {...props}
      label={'OPH Select Multiple'}
      value={value}
      onChange={(event) => {
        setValue(event.target.value as Array<string>);
      }}
    />
  );
}

function StoryRenderUncontrolled(
  props: OphSelectMultipleFormFieldProps<string>,
) {
  return (
    <OphSelectMultipleFormField
      {...props}
      label={'OPH Select Multiple Uncontrolled'}
    />
  );
}

export const Default: Story = {
  args: {
    options: OPTIONS,
    placeholder: 'Select',
    inputProps: {
      'aria-label': 'select',
    },
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const ValuesSelected: Story = {
  ...Default,
  args: {
    clearable: true,
    ...Default.args,
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const Uncontrolled: Story = {
  ...ValuesSelected,
  render: (args) => {
    return <StoryRenderUncontrolled {...args} />;
  },
};
