# OPH Design System

[![Build](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml/badge.svg)](https://github.com/Opetushallitus/oph-design-system/actions/workflows/build.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Opetushallitus_oph-design-system&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Opetushallitus_oph-design-system)

OPH Design System (ODS) on Opetushallituksen verkkopalveluiden käyttöön tarkoitettu muotoilujärjestelmä.
Tämä Git-säilö sisältää muotoilujärjestelmän mukaan rakennetun React-komponenttikirjaston.

## Käytetyt teknologiat

- [React](https://react.dev/) v18
- [Material-UI](https://mui.com/material-ui/getting-started/) v6
- [Next.js](https://nextjs.org/) v14 (App router)
- [Storybook](https://storybook.js.org/) v8

## Asentaminen

Versiosta 0.2.0 lähtien komponenttikirjasto on julkaistu Github Packagesiin.

Asentamista varten tarvitaan todennustoken, jonka luontiohjeet löytyvät [täältä](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Kun token on luotu, se täytyy ottaa vielä käyttöön npm-paketeille. Lisää kotihakemistoosi `.npmrc`-tiedostoon seuraavanlainen rivi:

```
//npm.pkg.github.com/:_authToken=todennustoken
```

Korvaa "todennustoken" luomasi tokenin merkkijonolla.

Tämän jälkeen täytyy vielä konfiguroida npm käyttämään Github Packagesin pakettivarastoa `@opetushallitus`-skoopin paketeille. Lisää projektisi `.npmrc`-tiedostoon rivi:

```
@opetushallitus:registry=https://npm.pkg.github.com
```

Asenna komponenttikirjasto samaan tapaan kuin mikä tahansa riippuvuus:

```
npm i "@opetushallitus/oph-design-system"
```

Varmista myös, että vertaisriippuvuudet (peer dependency) on asennettu:

```json
{
  "peerDependencies": {
    "@mui/material": "^6 || ^7",
    "next": "^14 || ^15", // Pakollinen vain, jos käytät Next.js:ää
    "react": "^18 || ^19"
  }
}
```

### Asentaminen Github Actions -workflowssa

Lisää build workflowssa AWS:n salaisuuksista valmiiksi löytyvä todennustoken ympäristömuuttujiin:

```
env:
  NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Määrittele `setup-node`-actionille tarvittavat asetukset:

```
  - uses: actions/setup-node@v4
    with:
      registry-url: 'https://npm.pkg.github.com'
      scope: '@opetushallitus'
```

Jos toteutat Github Actionsilla esimerkiksi paketin lähettämisen S3-buckettiin ja olet määrittänyt sitä varten lisäoikeuksia, täytyy sinun lisätä myös tarvittavat lukuoikeudet permissions-osioon:

```
permissions:
  contents: read
  packages: read
```

## Komponenttikirjaston käyttöönotto

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
  );
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

Komento muodostaa EcmaScript-moduulit `/dist`-hakemistoon käyttäen [tsup-työkalua](https://tsup.egoist.dev/). [Package.json-tiedoston](./package.json) export-kentässä on määritelty moduulit, jotka jakeluversio tarjoaa. Jakeluversiot julkaistaan [Opetushallituksen Github Packages -pakettivarastoon](https://github.com/orgs/Opetushallitus/packages). Versioimisessa käytetään [semanttista versiointia](https://semver.org/).

Kun haluat julkaista uuden version, nosta ensin versionumeroa komennolla

`npm run bump-version <versionumero>`

Jos versionumeron jättää tyhjäksi, oletuksena nostetaan patch-versiota yhdellä. Lisää muuttuneet tiedostot Git:iin. Kun muutokset lisätään main-haaraan, julkaistaan paketista automaattisesti uusi versio.

## Esimerkkiprojekti

Hakemistosta `example` löytyy lisäksi Next.js-esimerkkiprojekti, josta voi katsoa mallia komponenttikirjaston käyttöönottoon omassa projektissaan. Esimerkkiprojektilla voi myös testata että komponenttikirjaston jakeluversion käyttöönotto toimii.
Katso lisätietoja [Esimerkkiprojektin README:sta](./example/README.md).
