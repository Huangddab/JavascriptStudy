// function foo() {
//   console.log("foo函数被调用了");
// }

// 就是一个普通函数调用
// foo();

// 换一种方式调用函数：通过new关键字调用，就是构造函数

// new foo();
// new foo // 依然可以调用

// 区别：
// 1. 调用方式不同
// 2. 执行过程不同
// 3. 返回值不同
// 普通函数调用执行过程：
// 1. 依次读取代码
// 2. 执行代码
// 3. 返回值
// 构造函数调用执行过程：
// p1. 在内存中创建一个新的对象（空对象）；
// p2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；（后面详细讲）；
// p3. 构造函数内部的this，会指向创建出来的新对象；
// p4. 执行函数的内部代码（函数体代码）；
// p5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；
// 普通函数调用返回值：函数执行的结果
// 构造函数调用返回值：构造函数中的this指向的对象

// 规范 构造函数的首字母是大写
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi", this.name);
  };
}

var p1 = new Person("why", 18);
// console.log(p1);

// console.log(p1.__proto__.constructor);
// [Function: Person]
// console.log(p1.__proto__.constructor.name);
// Person

// 构造函数的缺点

function foo() {
  return function () {
    console.log("foo函数被调用了");
  };
}

var p1 = foo();
var p2 = foo();
// 两次执行创建了两个函数对象 两个函数对象不相等
console.log(p1 === p2); // false



