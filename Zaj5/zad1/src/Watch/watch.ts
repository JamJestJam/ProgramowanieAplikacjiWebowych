function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;
  descriptor.value = function(param) {
    const args = [];
    args.push(param);
    console.log(`User: ${param} wants ${propKey}`);
    return originalFn.apply(this, args);
  };  
  return descriptor;  
}

export default watch;
