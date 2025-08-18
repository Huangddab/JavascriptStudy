function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.say = function () {
  console.log(this.name, "Person say()");
};

Person.prototype.eat = function () {
  console.log(this.name, "Person eat()");
};

function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends); // !!!!
  this.sno = sno;
}

function inheritPrototype(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Object.defineProperty(Student.prototype, "constructor", {
    value: Child,
    enumerable: false,
    configurable: true,
    writable: true,
  });
}

// 将这部分封装成一个工具函数inheritPrototype
inheritPrototype(Student, Person); // !!!!
//【

// Studebt创建时会有一个constructor属性指向Person，所以要重新指定Student的原型对象

// Student.prototype = Object.create(Person.prototype);
// // Object是没有constructor属性的,会找到Person.prototype.constructor 但是Person.prototype.constructor指向Object
// // 所以要重新指定Student的原型对象
// // Student.prototype.constructor = Student;
// // 或者完整写法
// Object.defineProperty(Student.prototype, "constructor", {
//   value: Student,
//   enumerable: false,
//   configurable: true,
//   writable: true,
// });

// 】
Student.prototype.studing = function () {
  console.log(this.name, "Student studing()");
};

var stu1 = new Student("kobe", 18, ["james"], 111);
console.log(stu1);

stu1.say();
stu1.eat();
// Person { name: 'kobe', age: 18, friends: [ 'james' ], sno: 111 }
// Person是
// kobe Person say()
// kobe Person eat()
console.log(stu1.constructor.name); // Student
