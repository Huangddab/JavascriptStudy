// 2 借用构造函数继承：解决了原型链继承三个问题

// 父类
function Person(name, age, friends) {
  // 此处的this指向的是子类的实例对象
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.say = function () {
  console.log(this.name, "Person say()");
};

// 子类

function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = sno;
}

// 验证第一个弊端：继承的属性是看不到的
var stu = new Student("kobe", 18, ["james"], 111);
console.log("stu:", stu); // Student { name: 'kobe', age: 18, friends: [ 'james' ], sno: 111 }

// 验证第二个弊端：继承的属性是共享的
var stu11 = new Student("kobe", 18, ["james"], 111);
var stu22 = new Student("curry", 20, ["harden"], 222);
console.log("stu11 friends:", stu11.friends); // [ 'james' ]
console.log("stu22 friends:", stu22.friends); // [ 'harden' ]

// 验证第三个弊端：无法向父类传递参数

// 借用构造函数继承也有弊端
// 1 Person 父类至少调用了两次
// 2 stu 子类的原型对象上会多出一些没有必要存在的属性

// 借用构造函数继承的优点
// 1. 解决了原型链继承三个问题
