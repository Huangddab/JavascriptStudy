var obj = {
  name: "why",
  age: 18,
  sayHi: function () {
    console.log("Hi");
  },
};

// 原型式继承函数
// 第一种
// 1. 创建一个新对象
// 2. 将传入的对象作为新对象的原型
// 3. 返回新对象
function createObj1(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// 第二种
// 1. 创建一个新对象
// 2. 设置新对象的原型对象为传入的对象
// 3. 返回新对象
function createObj2(obj) {
  var newObj = {};
  Object.setPrototypeOf(newObj, obj);
  return newObj;
}

// 第三种
// 创建一个新对象，将obj作为新对象的原型对象
var info = Object.create(obj);
console.log(info);
console.log(info.__proto__ === obj); // true
