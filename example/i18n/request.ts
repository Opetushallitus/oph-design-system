import type { OphLanguage } from '@opetushallitus/oph-design-system';
import fi from '../messages/fi.json';
import sv from '../messages/sv.json';
import en from '../messages/en.json';

export type Messages = typeof fi;

const messagesByLocale = { fi, sv, en };

function getCookie(name: string): string | undefined {
  const prefix = `${name}=`;
  for (const cookie of document.cookie.split(';')) {
    const entry = cookie.trim();
    if (entry.startsWith(prefix)) return entry.slice(prefix.length);
  }
}

export function getLocaleConfig() {
  const requestedLocale = getCookie('lang');
  const locale: OphLanguage =
    requestedLocale === 'sv' || requestedLocale === 'en'
      ? requestedLocale
      : 'fi';

  return { locale, messages: messagesByLocale[locale] };
}
