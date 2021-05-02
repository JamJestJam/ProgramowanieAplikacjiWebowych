import Role from "./Users/Role";
import watch from "./Watch/watch";
import { forAdmin } from "./Access/admin";
import { forModerator } from "./Access/moderator";
import { blockStandard, forStandard } from "./Access/user";
import { User } from "./Users/user";
import { useAccess } from "./Access/useAccess";

class Resource {
    private resourceValue: string;
    constructor() {
        this.resourceValue = "resource value";
    }

    @watch
    @forAdmin
    @forModerator
    @forStandard
    @blockStandard
    @useAccess
    public read(user: User) {
        console.log('read: ' + this.resourceValue);
    }

    @watch
    @forStandard
    @useAccess
    public change(user: User) {
        console.log("changed resource value");
    }
}

export default Resource;
