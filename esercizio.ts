class CapoAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }

  getsaldocapo(): number {
    return this.prezzoivainclusa - this.saldo;
  }

  getacquistocapo(): number {
    return this.prezzoivainclusa;
  }
}

const jsonData = [
  {
    id: 1,
    codprod: 2121,
    collezione: "primavera",
    capo: "cardigan",
    modello: 1231,
    quantita: 5,
    colore: "nero",
    prezzoivaesclusa: 18.5,
    prezzoivainclusa: 22.57,
    disponibile: "negozio",
    saldo: 45
  },

  {
    id: 2,
    codprod: 4111,
    collezione: "estate",
    capo: "t-shirt",
    modello: 1251,
    quantita: 6,
    colore: "rosso",
    prezzoivaesclusa: 5.5,
    prezzoivainclusa: 6.71,
    disponibile: "magazzino",
    saldo: 30
  },

  {
    id: 3,
    codprod: 1181,
    collezione: "inverno",
    capo: "felpa",
    modello: 1229,
    quantita: 8,
    colore: "beige",
    prezzoivaesclusa: 17.5,
    prezzoivainclusa: 21.35,
    disponibile: "negozio",
    saldo: 50
  },

  {
    id: 4,
    codprod: 1111,
    collezione: "estate",
    capo: "maglione",
    modello: 1221,
    quantita: 4,
    colore: "verde",
    prezzoivaesclusa: 20,
    prezzoivainclusa: 24.4,
    disponibile: "negozio",
    saldo: 50
  },

  {
    id: 5,
    codprod: 6111,
    collezione: "primavera",
    capo: "maglia",
    modello: 1021,
    quantita: 5,
    colore: "blu",
    prezzoivaesclusa: 11,
    prezzoivainclusa: 13.42,
    disponibile: "magazzino",
    saldo: 60
  }
];

const capiAbbigliamento: CapoAbbigliamento[] = jsonData.map(
  (item: any) =>
    new CapoAbbigliamento(
      item.id,
      item.codprod,
      item.collezione,
      item.capo,
      item.modello,
      item.quantita,
      item.colore,
      item.prezzoivaesclusa,
      item.prezzoivainclusa,
      item.disponibile,
      item.saldo
    )
);

// Esempio di utilizzo dei metodi
capiAbbigliamento.forEach((capo) => {
  console.log(`${capo.capo}`);
  console.log(`Saldo applicato: ${capo.getsaldocapo()}`);
  console.log(`Costo totale: ${capo.getacquistocapo()}`);
});
