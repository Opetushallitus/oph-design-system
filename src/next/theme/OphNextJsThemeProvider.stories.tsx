import { type Meta, type StoryObj } from '@storybook/react';
import { OphNextJsThemeProvider } from './OphNextJsThemeProvider';
import { OphLink } from '@/src/components/OphLink';

const meta = {
  title: 'theme/OphNextJsThemeProvider',
  component: OphNextJsThemeProvider,
} satisfies Meta<typeof OphNextJsThemeProvider>;

export default meta;

type Story = StoryObj<typeof OphNextJsThemeProvider>;

export const Default: Story = {
  tags: ['!dev', '!test'],
  args: {
    variant: 'oph',
    lang: 'fi',
    children: <OphLink href="https://opintopolku.fi">Themed Link</OphLink>,
  },
};
