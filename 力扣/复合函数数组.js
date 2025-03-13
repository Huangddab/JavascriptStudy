var compose = function (functions) {
    return function (x) {
        let input = x
        if (functions.length === 0) { return x }
        for (let i = functions.length - 1; i >= 0; i--) {
            const currentFun = functions[i];
            input = currentFun(input)
        }
        return input
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))// 9

//  compose([x => x + 1, x => 2 * x])(4)