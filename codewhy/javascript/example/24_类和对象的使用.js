// // 类的声明
// class Person { }

// // 类的表达式
// var Animal = class {

// }

// // 类的特点：
// console.log(Person.prototype); // {}
// console.log(Person.__proto__); // {}
// console.log(Person.prototype.__proto__); // [Object: null prototype] {}
// console.log(Person.prototype.constructor); // [class Person]
// console.log(typeof Person); // function

// var p = new Person()
// console.log(p.__proto__ === Person.prototype); // true



// // class中的构造方法
// class Person {
//     // 接收参数 
//     // 类的构造方法,一个类中只能有一个
//     // 和function中一致
//     // p1.在内存中创建一个新的对象（空对象）；
//     // p2.这个对象内部的[[prototype]]属性会被赋值为该类的prototype属性；
//     // p3.构造函数内部的this，会指向创建出来的新对象；
//     // p4.执行构造函数的内部代码（函数体代码）；
//     // p5.如果构造函数没有返回非空对象，则返回创建出来的新对象；
//     constructor(name, age) {
//         console.log(name, age);
//         this.name = name
//         this.age = age
//     }
// }



// var p1 = new Person("why", 18)
// var p2 = new Person("what", 18)
// console.log(p1, p2)
// // Person { name: 'why', age: 18 } Person { name: 'what', age: 18 }

var names = ['as', 'sd', 'dfg', 'fgfhg']


// 类中的实例方法
class Person {
    constructor(name, age) {
        console.log(name, age);
        this.name = name
        this.age = age
    }
    // 这两个方法会被放到Person类原型上面,是共享的
    eating() {
        console.log(this.name + "eating");
    }
    running() {
        console.log(this.name + "running");
    }
    // 类的访问器方法
    get address() {
        return this.__address
    }
    set address(address) {
        this.__address = address
    }

    // 类的静态方法
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]
        var age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
}

var p = new Person("why", 18)
p.eating()
p.running()


console.log(Object.getOwnPropertyDescriptors(Person.prototype))

// why 18
// whyeating
// whyrunning
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eating: {
//     value: [Function: eating],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   running: {
//     value: [Function: running],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

console.log(p.address);
p.address = "北京市";
console.log(p.address);
// undefined
// 北京市

// // 随机创建一个Person对象
// Person.randomPerson()


// 随机创建多个
for (let i = 0; i < 50; i++) {
    console.log(Person.randomPerson());
}