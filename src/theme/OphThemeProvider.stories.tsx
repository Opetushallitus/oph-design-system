import { type Meta, type StoryObj } from '@storybook/react';
import { OphThemeProvider } from './OphThemeProvider';
import {
  Controls,
  Description,
  Source,
  Subtitle,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Theme/OphThemeProvider',
  component: OphThemeProvider,
} satisfies Meta<typeof OphThemeProvider>;

export default meta;

type Story = StoryObj<typeof OphThemeProvider>;

const example = `import React from 'react';
import { OphThemeProvider } from '@opetushallitus/oph-design-system/theme';
import { OphButton } from '@opetushallitus/oph-design-system';

export const App = () => {
  return (
    <OphThemeProvider lang="fi" variant="oph">
      <OphButton variant="contained">Button</OphButton>
    </Theme>
  );
};
`;

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
