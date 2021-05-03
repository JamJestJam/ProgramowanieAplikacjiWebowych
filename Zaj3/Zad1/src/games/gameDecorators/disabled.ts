import { Game } from "../game.model";

export function disabledFunction(target: Game, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function () {
        if(target.disabled)
            return document.createElement('div');
        return originalFn.apply(this);
    };
    return descriptor;
}

export function disabled(constructorFn: Function): void {
    constructorFn.prototype.disabled = true;
    constructorFn.prototype.name = "disabled";
}