import { ModeratorAccess } from "../access/moderator";
import { User } from "./user";

@ModeratorAccess
export class ModeratorUser extends User {
    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}
