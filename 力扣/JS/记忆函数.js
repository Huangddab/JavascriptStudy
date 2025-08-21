/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // 使用map记录曾经输入过的入参以及入参对应的结果。
    const map = new Map()
    return function (...args) {
        const item = args.join(',')
        if (!map.has(item)) {
            map.set(item, fn(...args))
        }
        // 后续相同入参能够在map中找到并直接返回结果，不需要再次调用fn，达到记忆的效果。
        return map.get(item)
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));

// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
console.log(callCount) // 1 
