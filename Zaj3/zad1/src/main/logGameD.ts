export function logGame(target: object, propKey: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;
  descriptor.value = function (gameName: string) {
    console.log("próba uruchomienia gry: " + gameName);
    return originalFn.apply(this, [gameName]);
  };
  return descriptor;
}
