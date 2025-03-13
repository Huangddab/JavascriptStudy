function hyCurrrying(fn) {
  return function currend(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return currend.apply(this, args.concat(args2));
      };
    }
  };
}
function add1(a, b, c) {
  return a + b + c;
}
var curryAdd = hyCurrrying(add1);

// ad1(10, 20, 30);
console.log(curryAdd(10)(20)(30));
