import Role from "../Users/Role";
import AccessData from "./accessData";

export function AdminAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.admin;
}

export function forAdmin(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        if(param[1] === undefined) param.push(new AccessData());
        param[1].addAllow(Role.admin);

        return originalFn.apply(this, param);
    };
    return descriptor;
}

export function blockAdmin(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        if(param[1] === undefined) param.push(new AccessData());
        param[1].addDenny(Role.admin);

        return originalFn.apply(this, param);
    };
    return descriptor;
}