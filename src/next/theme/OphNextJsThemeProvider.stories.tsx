import { type Meta, type StoryObj } from '@storybook/react';
import { OphNextJsThemeProvider } from './OphNextJsThemeProvider';
import {
  ArgTypes,
  Description,
  Source,
  Subtitle,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Theme/OphNextJsThemeProvider',
  component: OphNextJsThemeProvider,
} satisfies Meta<typeof OphNextJsThemeProvider>;

export default meta;

type Story = StoryObj<typeof OphNextJsThemeProvider>;

const example = `import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
 // or 'v1X-appRouter' if you are using Next.js v1X
import { OphNextJsThemeProvider } from '@opetushallitus/next/theme';

export default async function RootLayout({
  children,
}) {
  return (
    <html lang="fi">
      <body>
        <AppRouterCacheProvider>
          <OphNextJsThemeProvider variant="oph">
            {children}
          </OphNextJsThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
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
          <ArgTypes />
        </>
      ),
    },
  },
};
