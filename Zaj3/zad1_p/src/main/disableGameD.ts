import IGame from "./IGame";

export function disabled(constructorFn: Function): void {
    constructorFn.prototype.disabled = true;
    constructorFn.prototype.name = "disabled";
}