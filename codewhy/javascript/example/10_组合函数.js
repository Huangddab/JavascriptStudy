function compose(...funcs) {
  return function (initialValue) {
    return funcs.reduceRight((acc, func) => func(acc), initialValue);
  };
}

// Example usage:
const add = (x) => x + 1;
const multiply = (x) => x * 2;

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // Output: 12
