// Snack Array Methods 03

// Fase di preparazione

// Strutture Dati
const bikeList = [
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

const weightList = bikeList.map(({ weight }) => weight);

const minWeight = Math.min(...weightList);

const lighterBike = bikeList.find(({ weight }) => weight === minWeight);

const { name, weight } = lighterBike;

const result = `La ${name} è la più leggera (Peso: ${weight}kg).`;

// Fase di produzione

// Stampo la lista
console.table(bikeList);

// Stampo il risultato
console.log(result);