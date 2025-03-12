// 测试函数
function sum(a, b, c, d) {
    return a + b + c + d
}

// 柯里化包装
const bar = hyCurring(sum)

// 测试用例
// console.log(bar(10, 20, 30, 40))    // 100 
console.log(bar(10)(20, 30, 40))    // 100  
console.log(bar(10, 20)(30, 40))    // 100 
console.log(bar(10)(20)(30)(40))    // 100 


// function hyCurring(fn) {
//     console.log("1", fn);

//     return function curried(...args) {
//         console.log("2", ...args);
//         if (args.length >= fn.length) {
//             console.log('3');
//             return fn.apply(this, args)
//         } else {
//             console.log('4');
//             return function (...args2) {
//                 console.log('5', ...args, ">>", ...args2);
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }




function hyCurring(fn) {
    return function curried(...args1) {
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            return function (...args2) {
                return curried.apply(this, args1.concat(args2))
            }
        }
    }

}
