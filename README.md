[![Build](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml/badge.svg)](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml)

# OPH Design System

OPH Design System (ODS) on Opetushallituksen verkkopalveluiden käyttöön tarkoitettu muotoilujärjestelmä.

Huom! Tällä hetkellä muotoilujärjestelmä on vielä varhaisella kehitysasteella. Varaudu rikkoviin muutoksiin ennen versiota 1.0.0!

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

Kirjasto sisältää kaksi teemaa: `virkailijaTheme` (sininen) ja `oppijaTheme` (vihreä).
Käytä sovelluksessasi Material-UI:n ThemeProvider-käärettä, jolle annat komponenttikirjastosta löytyvän teeman.
Next.js:ää käytettäessä voit importoida teeman suoraan seuraavasti:

```js
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {
  virkailijaTheme,
  oppijaTheme,
} from '@opetushallitus/oph-design-system/next/theme';

export function App() {
  return (
    <ThemeProvider theme={virkailijaTheme /*... tai oppijaTheme */}>
      <CssBaseline /> {/* Suositeltu, että css-tyylit asetetaan järkeviin oletusarvoihin teeman mukaisesti */}
      {/*Tähän teemaa käyttävät komponentit*/}
    </ThemeProvider>
  );
}
```

Muissa tapauksissa voit luoda oman teemasi `createODSTheme`-funktiolla, joka löytyy moduulista `@opetushallitus/oph-design-system/theme`.
Kustomointi onnistuu ylikirjoittamalla Material-UI:n teemalle annettuja asetuksia. Next.js teemaan on lisätty kyseisellä funktiolla muutama Next.js-spesifi asetus.
Voit katsoa mallia oman teeman luomiseen tiedostosta [./src/next/theme/theme-nextjs.tsx](./src/next/theme/theme-nextjs.tsx).

Kun teema on otettu käyttöön, voit käyttää ODS:n komponentteja omassa koodissasi:

```js
import { OpenInNew } from '@mui/icons-material';
import { Button } from '@opetushallitus/oph-design-system';

export const OmaKomponentti = () => {
  return (
    <div>
      <Button startIcon={<OpenInNew />}>Klikkaa tästä!</Button>
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
npm run ci
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

## Testaus

UI-komponenttien testit ajetaan Storybookin testaustyökalulla:

```
npm run test-storybook
```

Kun komento ajetaan, tehdään seuraavat tarkistukset:

- **Saavutettavuusvirheet** tarkistetaan jokaiselle "Storylle" [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright)-työkalulla.
- **Komponenttien toiminnallisuus** testataan `@storybook/addon-interactions`-lisäosalla, jolloin testit kirjoitetaan komponentin "Story":n `play`-funktioilla. https://storybook.js.org/docs/writing-tests/interaction-testing
- **Visuaalinen testaus** tehdään jokaiselle storylle `test-runner.ts`-tiedostossa. Screenshotit tallennetaan `jest-image-snapshot`-työkalulla hakemistoon `__snapshots__`. Jos komponenttien ulkoasu on muuttunut, testi feilaa ja tallentaa kuvien diffit hakemistoon `__snapshots__/__diff_output__`.
