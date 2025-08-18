var once = function (fn) {
    return function (...args) {
        console.log(args)
        return fn.apply(this, args)
    }
};

var once = function (fn) {
    let num = 0
    return function (...args) {
        if (num === 0) {
            num++;
            return fn(...args)
        }
    }
};
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
// once(fn)
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn
