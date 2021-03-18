//Zad 1)

const personName = "John";
document.body.innerHTML = `<h1>Hello ${personName}</h1>`;

//Zad 1_rozbudowane)

class Person {
    firstName: string;
    familyName: string;
    age: number;

    constructor(firstName: string, familyName: string, age: number) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.age = age;
    }

    Show() {
        document.body.innerHTML += `<p>Witaj ${this.firstName} ${this.familyName} mam ${this.age} lat</p>`;
    }
}

let p = new Person("John", "Blake", 11);
p.Show();