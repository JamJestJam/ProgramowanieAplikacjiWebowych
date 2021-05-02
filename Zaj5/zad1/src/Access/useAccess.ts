export function useAccess(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...param) {
        const args = [param[0]];

        if (param[1] === undefined) return;
        if (param[1].Denny.includes(param[0].role)) return;
        if (param[1].Allow.includes(param[0].role))
            return originalFn.apply(this, args);
        return;
    };
    return descriptor;
}
