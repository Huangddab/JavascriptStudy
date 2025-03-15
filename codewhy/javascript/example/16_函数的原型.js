function Foo() {

}
// 函数也是一个对象，所以他也有[[prototype]] 隐式原型
// console.log(Foo.__proto__)  // {}

// 函数 还会多出来一个显示原型属性：prototype
// console.log(Foo.prototype)  // {}


var f1 = new Foo()
var f2 = new Foo()

// console.log(f1.__proto__ === foo.prototype)
// console.log(f2.__proto__ === foo.prototype)
// true
// true


// foo函数的prototype也指向 foo函数的原型对象
// f1对象__proto__和f2对象__proto__都是指向 foo函数的原型对象


// f1.__proto__.name = "kkk"
// console.log(f2.name) // kkk

// foo.prototype.name = "bbb"
// console.log(f2.name) // bbb



// 函数原型上的属性
// console.log(Foo.prototype) // {}
// 获取所有属性
// console.log(Object.getOwnPropertyDescriptors(Foo.prototype))

// {
//     constructor: {
//       value: [Function: Foo],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     }
//   }

// Object.defineProperty(Foo.prototype, "constructor", {
//     enumerable: true,
//     configurable: true,
//     writable: true,
//     value: '哈哈哈'
// })
// console.log(Foo.prototype);

// { constructor: '哈哈哈' }

// Foo.prototype 这个对象中有一个constructor属性
// prototypr.constructor === 构造函数本身
console.log(Foo.prototype.constructor)
// [Function: Foo]

// 批量赋值新的对象
Foo.prototype = {
    name: 'name',
    age: 18
}
// 在内存里面会多一个对象 原本指向Foo函数的原型对象没有引用就会被销毁
console.log(Foo.prototype)
// { name: 'name', age: 18 }

// 再创建一个f3也会指向这个新对象
var f3 = new Foo()
console.log(f3.name, f3.age);
// 但是新对象是没有constructor
console.log(f3.constructor.name)
// 通过defineProperty添加constructor
Object.defineProperty(Foo.prototype, "constructor", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '哈哈哈'
})
console.log(f3.constructor)



// 创建对象的最佳实现--原型加构造函数

function Person(name, age, height, width) {
    this.name = name
    this.age = age
    this.height = height
    this.width = width
}


Person.prototype.eating = function () {
    console.log(this.name, "在吃东西~")
}


Person.prototype.running = function () {
    console.log(this.name, "在跑步")
}

var p1 = new Person("why", 18, 1.88, 78) // 构造函数--习惯上称之为类
var p2 = new Person("what", 18, 1.88, 78)


p1.eating()
p2.eating()