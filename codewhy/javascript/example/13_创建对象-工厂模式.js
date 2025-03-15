function createPerson(name, age) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sayHi = function () {
    console.log("Hi");
  };
  return obj;
}

var p1 = createPerson("why", 18);
var p2 = createPerson("kobe", 40);
var p3 = createPerson("james", 35);

// 工厂模式的缺点
// 1. 对象无法识别，因为所有的实例都指向一个原型
// 2. 无法知道对象的类型
console.log(p1 instanceof Object); // true
console.log(p1 instanceof createPerson); // false
console.log(p1, p2, p3);
