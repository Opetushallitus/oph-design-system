[![Build](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml/badge.svg)](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Opetushallitus_oph-design-system&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Opetushallitus_oph-design-system)

# OPH Design System

OPH Design System (ODS) on Opetushallituksen verkkopalveluiden käyttöön tarkoitettu muotoilujärjestelmä.
Tämä Git-säilö sisältää muotoilujärjestelmän mukaan rakennetun React-komponenttikirjaston.

**Huom! Tällä hetkellä komponenttikirjasto on vielä varhaisella kehitysasteella. Käyttöönottoa ei suositella ennen versiota 1.0.0!**

## Käytetyt teknologiat

- [React](https://react.dev/) v18
- [Material-UI](https://mui.com/material-ui/getting-started/) v5
- [Next.js](https://nextjs.org/) v14 (App router)
- [Storybook](https://storybook.js.org/) v8

## Komponenttikirjaston käyttöönotto

Asenna komponenttikirjasto riippuvuutena suoraan Githubista:

```
npm i "github:opetushallitus/oph-design-system"
```

Varmista myös, että vertaisriippuvuudet (peer dependency) on asennettu:

```json
{
  "peerDependencies": {
    "@mui/material": "^5",
    "next": "^14", // Pakollinen vain, jos käytät Next.js:ää
    "react": "^18"
  }
}
```

Kirjasto sisältää kaksi teema-varianttia: "oph" (sininen) ja "opintopolku" (vihreä).
Next.js:ää käytettäessä voit ottaa teeman käyttöön juuritason layoutissa seuraavasti:

```js
import { OphNextJsThemeProvider } from '@opetushallitus/oph-design-system/next/theme';
import { getLocale } from 'next-intl/server';

export async function RootLayout() {

  // Voit noutaa käyttäjän kielen millä tavalla haluat, esim. next-intl-kirjastolla
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>
        <OphNextJsThemeProvider variant="oph" lang={locale}>
          {children}
        </OphNextJsThemeProvider>
      </body>
    </html>
}
```

Voit noutaa kielen millä tavalla haluat, esimerkiksi [next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing)-kirjastolla, kunhan sen arvo on "fi", "sv" tai "en".

Voit myös käyttää teemaa ilman NextJs:ää, pelkällä Reactilla:

```js
import { OphThemeProvider } from '@opetushallitus/oph-design-system/theme';

export function App() {
  // Hae käyttäjän kieli esim. selaimen asetuksista, URL:stä tai keksistä
  const lang = ['fi', 'sv', 'en'].includes(navigator.language)
    ? navigator.language
    : 'fi';

  return (
    <OphThemeProvider variant="oph" /* tai "opintopolku" */ lang={lang}>
      {/*Tähän teemaa käyttävät komponentit*/}
    </OphThemeProvider>
  );
}
```

Jos haluat kustomoida teemaa, voit antaa ThemeProviderille Material-UI:n teeman konfiguraatio-objektin osan `overrides`-parametrina, joka ylikirjoittaa teeman asetuksia.
Teeman initialisointia voi kustomoida luomalla teeman `createOphTheme`-funktiolla tai `useOphTheme`-hookilla, joka löytyvät moduulista `@opetushallitus/oph-design-system/theme` ([./src/next/theme/theme.tsx](./src/next/theme/theme.tsx)).

Kun teema on otettu käyttöön, voit käyttää ODS:n komponentteja omassa koodissasi:

```js
import { OpenInNew } from '@mui/icons-material';
import { OphButton } from '@opetushallitus/oph-design-system';

export const OmaKomponentti = () => {
  return (
    <div>
      <OphButton startIcon={<OpenInNew />} href="https://opintopolku.fi">
        Opintopolku
      </OphButton>
    </div>
  );
};
```

## Kehittäminen ja Storybook

UI-komponenttien dokumentointiin ja testaukseen käytetään [Storybook](https://storybook.js.org/)-työkalua.

Main-haarasta muodostettu storybook on nähtävillä osoitteessa:
https://dev-files.ops.opintopolku.fi/storybooks/oph-design-system/main/index.html

Jos haluat kehittää ODS:ää tai ajaa Storybookia lokaalisti, sinun täytyy asentaa ensin riippuvuudet:

```
npm ci
```

Tämän jälkeen voi käynnistää storybookin lokaalisti kehitys-moodissa:

```
npm run storybook
```

Storybook käynnistyy osoitteeseen http://localhost:6006. Muutokset ladataan automaattisesti, kun koodi muuttuu.

Voit myös tehdä tuotanto-buildin komennolla (oletuksena hakemistoon `storybook-static`):

```
npm run build-storybook
```

## Yksikkötestaus

Moduulin yksikkötestit ovat moduulin kanssa samassa hakemistossa vastaavalla nimellä, mutta tiedostopäätteellä `.test.ts(x)`.

[Vitest](https://vitest.dev):llä toteutetut yksikkötestit voi ajaa komennolla:

```
npm run test
```

## Storybook-testit (Playwright)

Storybookin visualiset ja saavutettavuustestit on toteutettu [Playwright:lla](https://playwright.dev). Jokaiselle storylle tehdään seuraavat tarkistukset:

- **Saavutettavuusongelmat** [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md)-työkalulla.
- **Visuaalinen testaus** eli kuvakaappausten vertailu, jolla varmistutaan että komponenttien visuaalinen ilme säilyy.

Jotta testit voi suorittaa, täytyy Storybook-palvelimen olla käynnissä osoitteessa http://localhost:6006.

### Testien ajaminen kehityspalvelinta vasten

Helpoin tapa ajaa testit on käynnistää Storybookin kehityspalvelin. Tässä on myös se etu, että koodimuutokset ladataan automaattisesti (hot reload).

1. Käynnistä storybook-kehityspalvelin: `npm run storybook`
2. Aja testit toisessa terminaalissa joko

- Oman koneen ympäristössä: `npm run test-storybook` tai...
- Docker-kontissa Ubuntulla: `npm run test-storybook-docker`

### Testien ajaminen muodostettua tuotantoversiota vasten

Testit voi ajaa myös dev-palvelimen sijaan Storybookin tuotantoversiota vasten. Tätä tapaa käytetään CI:ssä, koska testien ajaminen on nopeampaa.

1. Muodosta tuotantoversio `--test`-optiolla (optio ei pakollinen, mutta nopeuttaa testejä): `npm run build-storybook -- --test`
2. Käynnistä muodostettu versio ja aja testit joko

- Oman koneen ympräristössä `npm run start-and-test-storybook` tai...
- Docker-kontissa Ubuntulla: `npm run start-and-test-storybook-docker`

## Jakeluversion muodostaminen

Komponenttikirjaston jakeluversio muodostetaan komennolla:

```
npm run build
```

Komento muodostaa EcmaScript-moduulit `/dist`-hakemistoon käyttäen [tsup-työkalua](https://tsup.egoist.dev/). Kyseinen komento ajetaan myös aina kun tämän projektin riippuvuudet asennetaan (prepare-skripti package.json-tiedostossa). Tämä on välttämätöntä, että komponenttikirjastoa voi käyttää riippuvuutena. [Package.json-tiedoston](./package.json) export-kentässä on määritelty moduulit, jotka jakeluversio tarjoaa.

## Esimerkkiprojekti

Hakemistosta `example` löytyy lisäksi Next.js-esimerkkiprojekti, josta voi katsoa mallia komponenttikirjaston käyttöönottoon omassa projektissaan. Esimerkkiprojektilla voi myös testata että komponenttikirjaston jakeluversion käyttöönotto toimii.
Katso lisätietoja [Esimerkkiprojektin README:sta](./example/README.md).
