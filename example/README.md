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

Tämä esimerkkiprojekti käyttää `@opetushallitus/oph-design-system`-riippuvuutta ylätason hakemistosta. Riippuvuutta ei kohdisteta Github-sailöön, jotta käytetään tämän kehityshaaran versiota komponenttikirjastosta.
NPM-pakettienhallinalla riippuvuuden asetaminen toimii kuitenkin samalla tavalla olipa riippuvuutena polku tai github-säilö.
Tämän ansiosta esimerkkiprojektia voidaan käyttää myös komponenttikirjaston jakeluversion E2E-testaukseen. Tällä voidaan siis varmistua että komponenttikirjaston jakeluversio ei ole rikkoutunut muutosten seurauksena.

Testin voi suorittaa komennolla:
```
npm run start-and-test
```
Kyseinen komento asentaa riippuvuudet, käynnistää esimerkkiprojektin ja suorittaa esimerkkiprojektille [yksinkertaisen Playwright-testin](./test/smoke-test.spec.ts).
Testi ajetaan myös komponenttikirjaston CI-putkessa.

