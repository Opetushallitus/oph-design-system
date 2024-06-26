import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { virkailijaTheme } from '@opetushallitus/oph-design-system/next/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={virkailijaTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
