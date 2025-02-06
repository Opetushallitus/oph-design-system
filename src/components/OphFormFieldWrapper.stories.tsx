import { type Meta, type StoryObj } from '@storybook/react';
import { OphFormFieldWrapper } from './OphFormFieldWrapper';
import {
  Controls,
  Description,
  Source,
  Subtitle,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Utils/OphFormFieldWrapper',
  component: OphFormFieldWrapper,
} satisfies Meta<typeof OphFormFieldWrapper>;

export default meta;

type Story = StoryObj<typeof OphFormFieldWrapper>;

const example = `import { OphFormFieldWrapper } from '@opetushallitus/oph-design-system';

const CustomInputComponent = ({value, onChange}) => {
  return (
    <OphFormFieldWrapper 
      label="Label"
      renderInput={({labelId}) => 
        <input value={value} onChange={onChange} aria-labelledby={labelId} />
      } 
    />
  );
}`;

export const Default: Story = {
  tags: ['!dev', '!test'],

  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Source code={example} />
          <Controls />
        </>
      ),
    },
  },
};
