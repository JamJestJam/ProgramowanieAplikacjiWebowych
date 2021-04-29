import Role from '../Users/Role';
import AccessData from './accessData';

export function StandardAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.user;
}

export function forStandard(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        if(param[1] === undefined) param.push(new AccessData());
        param[1].addAllow(Role.user);

        return originalFn.apply(this, param);
    };
    return descriptor;
}
