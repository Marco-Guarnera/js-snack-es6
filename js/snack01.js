// Snack Array Methods 01

// Fase di preparazione

// Variabili
const tableName = "Tavolo Vip";

// Strutture dati
const guestList = ["Brad Pitt", "Johnny Depp", "Lady Gaga", "Cristiano Ronaldo", "Georgina Rodriguez", "Chiara Ferragni", "George Clooney", "Amal Clooney", "Fedez", "Amadeus", "Fiorello"];

// Fase di elaborazione

// Creo la lista
const placeholderList = guestList.map((guest, i) => ({ tableName, guest, place: i + 1 }));

// Fase di produzione

// Stampo la lista in console
console.table(placeholderList);