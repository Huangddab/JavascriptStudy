// 父类：公共属性和方法

function Person() {
  this.name = "why";
  this.age = 18;
  this.friends = ["kobe", "james"];
}

Person.prototype.say = function () {
  console.log(this.name, "Person say()");
};

// 子类：私有属性和方法
function Student() {
  this.sno = 111;
}
Student.prototype.studing = function () {
  console.log(this.name, "Student studing()");
};

// 1. 原型链继承
Student.prototype = new Person();
var stu = new Student();

// console.log(stu.name); // undefined

// console.log(stu.say()); // stu.say is not a function

stu.say(); // why Person say()

// 原型链继承的弊端
// (1) 继承的属性是看不到的
console.log("stu:", stu);
// stu: Person { sno: 111 }
// 居然事Person的实例对象，而不是Student的实例对象，name属性看不到

// (2) 继承的属性是共享的
// 创建两个stu对象
var stu11 = new Student();
var stu22 = new Student();
console.log("stu11 friend:", stu11.friends); // [ 'kobe', 'james' ]
console.log("stu11 friend:", stu22.friends); // [ 'kobe', 'james' ]
stu11.friends.push("curry");
console.log("stu11 friend:", stu11.friends); // [ 'kobe', 'james', 'curry' ]
// 他们的friends属性是共享的，stu11修改了，stu22也会受到影响，这是不合理的
// 但是name属性是私有的，是在stu11对象中添加name属性，父类不会受到影响
stu11.name = "kobe";
console.log("stu11 name:", stu11.name); // kobe
// (3) 无法向父类传递参数：在前面的例子中，父类的name属性是固定的，无法向父类传递参数
// var stu33 = new Student("curry"); // 无法向父类传递参数 只能在子类中传递参数

// 原型链继承的优点
// (1) 子类可以继承父类的属性和方法
// (2) 可以实现多继承
