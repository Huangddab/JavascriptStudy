// super 关键字称之为子类（派生类）
// super使用的位置：子类的构造函数、实例方法、静态方法；
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    running() {
        console.log(this.name + ",running")
    }
    eating() {
        console.log(this.name + ",eating")
    }
    personMethod() {
        console.log('处理逻辑1');
        console.log('处理逻辑2');
        console.log('处理逻辑3');

    }

    static personStatic() {
        console.log('static func');

    }
}

class Student extends Person {
    // 子类的构造函数
    constructor(name, age, sno) {
        super(name, age)
        // super()
        // this.name = name
        // this.age = age
        this.sno = sno
    }
    // 子类对父类方法的重写
    running() {
        console.log('student running');
    }
    // 重写personMethod方法
    personMethod() {
        // 调用父类上的方法
        // 此处的super相当于父类的类
        super.personMethod()
        console.log('处理逻辑4');
        console.log('处理逻辑5');
        console.log('处理逻辑6');

    }

    // 重写静态方法
    static personStatic() {
        super.personStatic()
        console.log('student static');
    }
}


var stu = new Student("ehu", 18, 198)

console.log(stu);
// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// super必须调用父类的方法之前使用
// Student { name: 'ehu', age: 18, sno: 198 }

stu.eating()
stu.running()
// ehu,eating
// ehu,running
// 可以直接调用
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__))
// {
//   constructor: {
//     value: [class Student extends Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
// 并没有继承的两个方法


stu.personMethod()
// 处理逻辑1
// 处理逻辑2
// 处理逻辑3
// 处理逻辑4
// 处理逻辑5
// 处理逻辑6


Student.personStatic()