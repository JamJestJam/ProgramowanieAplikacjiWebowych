import { AdminAccess } from '../Access/admin';
import { User } from './user';

@AdminAccess
export class AdminUser extends User {
    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;                
    }
}