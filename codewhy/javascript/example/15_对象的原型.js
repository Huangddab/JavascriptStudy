// 对象的原型
// 1 每个对象中都有一个[[prototype]]，这个属性介意称之为对象的原型（隐式原型）
var obj = {
    name: "why"
}
var foo = {
}

// 这是浏览器提供
console.log(obj.__proto__)
console.log(foo.__proto__)
// [Object: null prototype] {}
// [Object: null prototype] {}

// es5提供的获取__proto__
console.log(Object.getPrototypeOf(foo))
// {}

// 2 原型有什么用？
// 当我们从一个对象中获取某个属性时，他会被触发[[get]]操作
// (1) 在当前对象中查找对应的属性，如果找到就直接使用
// (2) 如果没有找到就沿着他的原型去查找[[prototype]]
// 
// 找不到打印undefined
// obj.age = 18
// 能找到 打印18 是在当前对象中找到的
// obj.__proto__.age = 18
// 在当前对象没找到 到原型上找到了
console.log(obj.age)
