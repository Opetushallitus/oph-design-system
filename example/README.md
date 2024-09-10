# OPH Design System - Next.js esimerkkiprojekti

Yksinkertainen Next.js-esimerkkiprojekti, joka käyttää `@opetushallitus/oph-design-system`-komponenttikirjastoa.
Luotu komennolla `npx create-next-app@latest` ja karsittu pois tarpeettomat tiedostot.

## Esimerkkiprojektin käynnistäminen

Asenna ensin riippuvuudet komennolla

```
npm ci
```

Käynnistä esimerkkiprojekti kehitys-moodissa komennolla:

```
npm run dev
```

Esimerkkiprojektia pääsee katselemaan selaimella osoitteessa http://localhost:3000.

## Testaus

Tämä esimerkkiprojekti käyttää `@opetushallitus/oph-design-system`-kirjastosta luotua tar-pakettia.
Riippuvuutta ei kohdisteta Github-sailöön, jotta käytetään nykyisen kehityshaaran versiota komponenttikirjastosta.
Tämän ansiosta esimerkkiprojektia voidaan käyttää myös komponenttikirjaston jakeluversion E2E-testaukseen. Tällä voidaan siis varmistua että komponenttikirjaston jakeluversio ei ole rikkoutunut muutosten seurauksena.

Testit voi suorittaa komennolla:

```
npm run start-and-test
```

Kyseinen komento luo kirjastosta tar-paketin, asentaa riippuvuudet, käynnistää esimerkkiprojektin ja suorittaa esimerkkiprojektille [Playwright-testejä](./playwright/example.spec.ts).
Testit ajetaan myös komponenttikirjaston CI-putkessa.
