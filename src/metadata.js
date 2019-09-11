export default 
{
  sider: {
    'forside': { mal: "infoSide" },
    'kategori-liste': { mal: "listeSide" },
    'produkt-liste': { mal: "listeSide" },
    'enkelt-produkt': { mal: "infoSide" },
    'kontakt-oss': { mal: "infoSide" }
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
