// Snack Array Methods 02

// Fase di preparazione

// Strutture Dati
const studentList = [
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
const studentList01 = studentList.map(element => element["name"].toUpperCase());

// Creo una lista con gli studenti che hanno un totale di voti superiore a 70 
const studentList02 = studentList.filter(element => element["grades"] > 70);

// Creo una lista con gli studenti che hanno un totale di voti superiore a 70 e un id superiore a 120
const studentList03 = studentList.filter(element => element["grades"] > 70 && element["id"] > 120);

// Fase di produzione

// Stampo tutte le liste
console.table(studentList);
console.table(studentList01);
console.table(studentList02);
console.table(studentList03);