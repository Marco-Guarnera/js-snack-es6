// Snack Array Methods 02

// Fase di preparazione

// Strutture dati
const studentsList = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },

    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },

    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },

    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },

    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },

    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },

    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
];

// Fase di elaborazione

// Creo una lista con i nomi degli studenti in maiuscolo
const studentsList01 = studentsList.map(student => student["name"].toUpperCase());

// Creo una lista con gli studenti che hanno un totale di voti superiore a 70 
const studentsList02 = studentsList.filter(student => student["grades"] > 70);

// Creo una lista con gli studenti che hanno un totale di voti superiore a 70 e un id superiore a 120
const studentsList03 = studentsList02.filter(student => student["id"] > 120);

// Fase di produzione

// Stampo tutte le liste
console.table(studentsList);
console.table(studentsList01);
console.table(studentsList02);
console.table(studentsList03);