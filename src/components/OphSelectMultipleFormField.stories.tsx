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
  const [value, setValue] = useState(props.value ?? ['1', '2']);

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

export const Clearable: Story = {
  ...Default,
  args: {
    clearable: true,
    ...Default.args,
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const ManyOptions: Story = {
  ...Default,
  args: {
    clearable: true,
    options: [
      { value: '1', label: 'First option' },
      { value: '2', label: 'Second option' },
      { value: '3', label: 'Third option' },
      { value: '4', label: 'Fourth option' },
      { value: '5', label: 'Fifth option' },
      { value: '6', label: 'Sixth option' },
      { value: '7', label: 'Seventh option' },
      { value: '8', label: 'Eight option' },
      { value: '9', label: 'Ninth option' },
      { value: '10', label: '10th option' },
      { value: '11', label: '11th option' },
      { value: '12', label: '12th option' },
      { value: '13', label: '13th option' },
      { value: '14', label: '14th option' },
      { value: '15', label: '15th option' },
      { value: '16', label: '16th option' },
      { value: '17', label: '17th option' },
      { value: '18', label: '18th option' },
      { value: '19', label: '19th option' },
      { value: '20', label: '20th option' },
      { value: '21', label: '21th option' },
      { value: '22', label: '22th option' },
      { value: '23', label: '23th option' },
      { value: '24', label: '24th option' },
      { value: '25', label: '25th option' },
      { value: '26', label: '26th option' },
      { value: '27', label: '27th option' },
      { value: '28', label: '28th option' },
      { value: '29', label: '29th option' },
      { value: '30', label: '30th option' },
      { value: '31', label: '31th option' },
      { value: '32', label: '32th option' },
      { value: '33', label: '33th option' },
      { value: '34', label: '34th option' },
    ],
    value: ['1', '2', '5', '7', '8', '10', '11', '15', '24', '28', '30'],
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const Uncontrolled: Story = {
  ...Clearable,
  render: (args) => {
    return <StoryRenderUncontrolled {...args} />;
  },
};
