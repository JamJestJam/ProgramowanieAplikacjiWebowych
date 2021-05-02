import Role from "./Role";

export class User {
    name:string;
    surname:string;
    role:Role;

    toString(): string {
        return `${this.name} ${this.surname} ${this.role}`;
    }
}
