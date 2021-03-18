//Zad 1)
var personName = "John";
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
//Zad 1_rozbudowane)
var Person = /** @class */ (function () {
    function Person(firstName, familyName, age) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.age = age;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML += "<p>Witaj " + this.firstName + " " + this.familyName + " mam " + this.age + " lat</p>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
