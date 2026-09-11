import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/open-sans/latin-700.css';
import { OphThemeProvider } from '@opetushallitus/oph-design-system/theme';
import { App } from './App';
import { getLocaleConfig } from '../i18n/request';

const { locale, messages } = getLocaleConfig();

document.documentElement.lang = locale;
const root = document.getElementById('root');
if (!root) throw new Error('Missing application root');
createRoot(root).render(
  <StrictMode>
    <OphThemeProvider variant="oph" lang={locale}>
      <App messages={messages} />
    </OphThemeProvider>
  </StrictMode>,
);
