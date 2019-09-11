<template>
  <div id="app">
    <router-view :data="data" :metadata="metadata" />
  </div>
</template>

<script>
import metadataObj from "@/metadata";

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
          forside: {
            overskrift: "Bestikkshoppen",
            tekst: "Velkommen til Bestikkshoppen AS. Vi håper du får mange flotte handleopplevelser!",
            info: {
              telefon: '987 65 432',
              slagord: 'Vi bestikker deg!'
            }
          },
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
      metadata: metadataObj
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
