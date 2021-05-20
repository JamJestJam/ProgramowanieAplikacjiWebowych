export function min(value: number) {
    return function (target: any, propKey: string, descriptor: PropertyDescriptor) {
        const originalFn = descriptor.value;
        descriptor.value = function (val1: number, val2: number) {
            if(val1 < value || val2 < value){
                alert(`Wartości nie mogą być mniejsze od ${value}`);
                return;
            }
            return originalFn.apply(this, [val1,val2]);
        };
        return descriptor;
    }
}

export function max(value: number) {
    return function (target: any, propKey: string, descriptor: PropertyDescriptor) {
        const originalFn = descriptor.value;
        descriptor.value = function (val1: number, val2: number) {
            if(val1 > value || val2 > value){
                alert(`Wartości nie mogą być większe od ${value}`);
                return;
            }
            return originalFn.apply(this, [val1,val2]);
        };
        return descriptor;
    }
}

export function check(target: any, propKey: string, descriptor: PropertyDescriptor){
    const originalFn = descriptor.value;
    descriptor.value = function (val1: number, val2: number) {
        if(val2 > val1){
            alert(`Wartości wygrywająca nie może być większa od rozmiaru planszy`);
            return;
        }
        return originalFn.apply(this, [val1,val2]);
    };
    return descriptor;
}