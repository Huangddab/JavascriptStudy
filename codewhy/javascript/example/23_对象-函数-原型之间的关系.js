var obj = {
  name: "why",
  age: 18,
};

console.log(obj.__proto__);
// [Object: null prototype] {}
// 对象里面有隐式原型__proto__属性，指向构造函数的原型对象prototype

function Foo() {}
// Foo是一个函数，函数里面会有一个显式原型Foo.prototype = {constructor: Foo}
// Foo函数也是一个对象，那么他就有一个隐式原型Foo.__proto__
// 来自 new Function() Foo.__proto__ === Function.prototype
// Function.prototype = { constructor: Function, __proto__: Object.prototype }
// Object.prototype = { constructor: Object, __proto__: null }

console.log(Foo.prototype === Foo.__proto__); // false
console.log(Foo.prototype.constructor === Foo); // true
console.log(Foo.__proto__);
