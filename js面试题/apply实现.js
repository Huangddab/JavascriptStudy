Function.prototype.hyApply = function (content, args) {
    const ctx = content === undefined || content === null ? (typeof window !== 'undefined' ? window : global) : Object(content)
    const fnKey = Symbol('temKey')
    ctx[fnKey] = this
    const result = ctx[fnKey](...args)
    delete ctx[fnKey]
    return result
}


const obj = {
    a: '1'
}


function foo(name, age) {
    console.log(">>>>", this.a, "name", name, "age", age)
}

foo.hyApply(obj, ["hyapply", 19])