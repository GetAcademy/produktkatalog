export default
  {
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
        kategorier: {
          overskrift: "Kategorier",
          tekst: "Denne siden viser alle våre produktkategorier. Velg en av dem for å se våre produkter. "
        },
        produkt: {
          overskrift: "{{ obj.navn }}",
          tekst: "Se detaljer om dette produktet under:"
        },
        kontaktOss: {
          navn: "Bestikkshoppen AS",
          adresse: "Melkeveien 1",
          postnr: "0123",
          poststed: "Oslo",
          epost: "post@bestikkshoppen.no",
          web: "www.bestikkshoppen.no"
        }
      }
    },
    metadata: {
      felt:{
        produkt: [
          { navn: 'navn' },
          { navn: 'pris', type: 'kroner' },
          { navn: 'kategori' },
        ],
        kontaktOss:[
          { navn: 'navn' },
          { navn: 'adresse' },
          { navn: 'postnr' },
          { navn: 'poststed' },
          { navn: 'epost' },
          { navn: 'web' },
        ]
      },
      sideoppsett: {
        "forside": {
          data: { "overskrift": "tekster.forside", "skjema-visning": "tekster.info" }
        },
        "kategori-liste": {
          data: { "overskrift": "tekster.kategorier", "liste-visning": "kategorier" }
        },
        "produkt-liste": {
          data: { "overskrift": "tekster.produkt", "liste-visning": "kategorier" },
          metadata: {"liste-visning": "produktFelt"}
        },
        "enkelt-produkt": {
          data: { "overskrift": "tekster.produkt", "skjema-visning": "produkter[i]" },
          metadata: {"liste-visning": "produktFelt"}
        },
        "kontakt-oss": {
          data: { "overskrift": "tekster.forside", "skjema-visning": "tekster.kontaktOss" },
          metadata: {"skjema-visning": "produktFelt"}
        }
      },
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
  }
