import Role from "../Users/Role";

export default class AccessData {
    Allow: Role[];
    Denny: Role[];

    constructor() {
        this.Allow = [];
        this.Denny = [];
    }

    addAllow(role: Role): void {
        this.Allow.push(role);
    }

    addDenny(role: Role): void {
        this.Denny.push(role);
    }
}
