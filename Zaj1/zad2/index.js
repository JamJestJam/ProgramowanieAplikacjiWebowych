//zad 2)
var users = [
    { name: "John", surname: "Smith", age: 25, role: "user" },
    { name: "Adam", surname: "Johnson", age: 35, role: "user" },
    { name: "Andy", surname: "Cole", age: 18, role: "user" },
];
var admins = [
    { name: "Matthew", surname: "Ryan", age: 43, role: "admin" },
    { name: "Adam", surname: "Terry", age: 24, role: "admin" },
];
function logPerson(person) {
    console.log("imie: " + person.name + ", nazwisko: " + person.surname + ", wiek: " + person.age + ", rola: " + person.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}
function filterPersons(persons, criteria) {
    return persons.filter(function (person) {
        return Object.keys(criteria).every(function (key) {
            person[key] === criteria[key];
        });
    });
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
users.forEach(function (element) {
    logPerson(element);
});
admins.forEach(function (element) {
    logPerson(element);
});
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var persons = users;
persons.push.apply(persons, admins);
console.log(persons);
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log(persons.filter(function (a) { return a.age >= 25; }));
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log(filterPersons(persons, { name: "Adam" }));
