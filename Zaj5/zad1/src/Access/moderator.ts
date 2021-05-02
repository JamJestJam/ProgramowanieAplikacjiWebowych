import Role from '../Users/Role';
import AccessData from './accessData';

export function ModeratorAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.moderator;
}

export function forModerator(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        if(param[1] === undefined) param.push(new AccessData());
        param[1].addAllow(Role.moderator);

        return originalFn.apply(this, param);
    };
    return descriptor;
}

export function blockModerator(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        if(param[1] === undefined) param.push(new AccessData());
        param[1].addDenny(Role.moderator);

        return originalFn.apply(this, param);
    };
    return descriptor;
}