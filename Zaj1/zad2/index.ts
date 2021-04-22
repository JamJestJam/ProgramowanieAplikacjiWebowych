//zad 2)

interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
}

const users: Person[] = [
    { name: "John", surname: "Smith", age: 25, role: "user" },
    { name: "Adam", surname: "Johnson", age: 35, role: "user" },
    { name: "Andy", surname: "Cole", age: 18, role: "user" },
];

const admins: Person[] = [
    { name: "Matthew", surname: "Ryan", age: 43, role: "admin" },
    { name: "Adam", surname: "Terry", age: 24, role: "admin" },
];

function logPerson(person: Person) {
    console.log(
        `imie: ${person.name}, nazwisko: ${person.surname}, wiek: ${person.age}, rola: ${person.role}`
    );
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}

function filterPersons(persons: Person[], criteria: any): Person[] {
    return persons.filter((person) =>
        Object.keys(criteria).every((key) =>{
            person[key] === criteria[key]
        })
    );
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}

// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
users.forEach((element) => {
    logPerson(element);
});
admins.forEach((element) => {
    logPerson(element);
});

// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
const persons = users;
persons.push(...admins);
console.log(persons);

// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log(persons.filter((a) => a.age >= 25));

// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log(filterPersons(persons, { name: "Adam" }));
