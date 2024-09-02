// Snack Array Methods 04

// Fase di preparazione

// Strutture dati
const teamsList = [
    {
        name: "Italia",
        score: 0,
        fail: 0
    },

    {
        name: "Francia",
        score: 0,
        fail: 0
    },

    {
        name: "Spagna",
        score: 0,
        fail: 0
    }
];

// Funzioni

// Funzione da utilizzare per generare numeri casuali da 0 a 100 (escluso)
const getRandomNumbers = () => Math.floor(Math.random() * 100);

// Fase di elaborazione

teamsList.forEach(team => {
    team["score"] = getRandomNumbers();
    team["fail"] = getRandomNumbers();
});

// Creo una nuova lista
const newTeamsList = teamsList.map(({ name, fail }) => ({ name, fail }));

// Fase di produzione

// Stampo le liste in console
console.table(teamsList);
console.table(newTeamsList);