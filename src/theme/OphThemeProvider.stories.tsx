import { type Meta, type StoryObj } from '@storybook/react';
import { OphThemeProvider } from './OphThemeProvider';
import { OphLink } from '@/src/components/OphLink';

const meta = {
  title: 'theme/OphThemeProvider',
  component: OphThemeProvider,
} satisfies Meta<typeof OphThemeProvider>;

export default meta;

type Story = StoryObj<typeof OphThemeProvider>;

export const Default: Story = {
  tags: ['!dev', '!test'],
  args: {
    variant: 'oph',
    lang: 'fi',
    children: <OphLink href="https://opintopolku.fi">Themed Link</OphLink>,
  },
};
