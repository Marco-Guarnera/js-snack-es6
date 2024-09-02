// Snack Array Methods 03

// Fase di preparazione

// Strutture dati
const bikesList = [
    {
        name: "SuperSix Evo 1",
        weight: 5
    },

    {
        name: "SuperSix Evo 2",
        weight: 7.5
    },

    {
        name: "SuperSix Evo 3",
        weight: 12.5
    }
];

// Fase di elaborazione

const weightsList = bikesList.map(({ weight }) => weight);

const minWeight = Math.min(...weightsList);

const lighterBike = bikesList.find(({ weight }) => weight === minWeight);

const { name, weight } = lighterBike;

const result = `La ${name} è la più leggera (Peso: ${weight}kg).`;

// Fase di produzione

// Stampo la lista
console.table(bikesList);

// Stampo il risultato
console.log(result);