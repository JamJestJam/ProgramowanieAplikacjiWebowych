import { StandardAccess } from '../Access/user';
import Role from './Role';
import { User } from './user';

@StandardAccess
export class StandardUser extends User {
    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}