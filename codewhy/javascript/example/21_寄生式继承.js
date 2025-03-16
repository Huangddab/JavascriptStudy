var obj = {
  name: "why",
  age: 18,
  sayHi: function () {
    console.log("Hi");
  },
};

var stu1 = Object.create(obj);
// 以上也实现了继承，但是有弊端
//  要给stu1 扩展属性时要这么写
stu1.sno = 111;
stu1.studing = function () {
  console.log("studing");
};

var stu2 = Object.create(obj);
stu2.sno = 222;
stu2.studing = function () {
  console.log("studing");
};

// ...stu100 一百个学生要写一百次

// 寄生式继承(理解为工厂模式+原型式继承)
function createStudent(obj, sno) {
  var stu = Object.create(obj);
  stu.sno = sno;
  stu.studing = function () {
    console.log("studing");
  };
  return stu;
}

var stu11 = createStudent(obj, 111);
var stu22 = createStudent(obj, 222);
