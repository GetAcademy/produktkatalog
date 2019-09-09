<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: {
        kategorier: ["kniv", "skje", "gaffel"],
        produkter: [
          { navn: "Gullskje 22cm", pris: 990, kategori: "skje" },
          { navn: "Sølvskje 22cm", pris: 190, kategori: "skje" },
          { navn: "Stålskje 22cm", pris: 19, kategori: "skje" },
          { navn: "Gullkniv 22cm", pris: 990, kategori: "kniv" },
          { navn: "Sølvkniv 22cm", pris: 190, kategori: "kniv" },
          { navn: "Stålkniv 22cm", pris: 19, kategori: "kniv" },
          { navn: "Gullgaffel 22cm", pris: 990, kategori: "gaffel" },
          { navn: "Sølvgaffel 22cm", pris: 190, kategori: "gaffel" },
          { navn: "Stålgaffel 22cm", pris: 19, kategori: "gaffel" }
        ],
        tekster: {
          overskrift: 'Bestikkshoppen',
          velkommen: "Velkommen til Bestikkshoppen AS. Vi håper du får mange flotte handleopplevelser!",
          kontaktOss: {
            navn: "Bestikkshoppen AS",
            adresse: "Melkeveien 1",
            postnr: "0123",
            posted: "Oslo",
            epost: "post@bestikkshoppen.no",
            web: "www.bestikkshoppen.no"
          }
        }
      },
      metadata: {
        sider: {
          forside: { mal: "infoSide" },
          kategoriListe: { mal: "listeSide" },
          produktListe: { mal: "listeSide" },
          enkeltProdukt: { mal: "infoSide" },
          kontaktOss: { mal: "infoSide" }
        },
        maler: {
          infoSide: {
            komponenter: ["overskrift", "skjema-visning"],
            layout: {
              rader: "200px auto",
              kolonner: "auto",
              mal: ["overskrift", "skjema-visning"]
            }
          },
          listeSide: {
            komponenter: ["overskrift", "liste-visning"],
            layout: {
              rader: "200px auto",
              kolonner: "auto",
              mal: ["overskrift", "skjema-visning"]
            }
          }
        }
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
