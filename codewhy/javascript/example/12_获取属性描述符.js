var obj = {
  name: "what",
  age: 18,
};

// 1 禁止对象继续添加新的属性
Object.preventExtensions(obj);
// ，未禁止时打印{ name: 'what', age: 18, height: 1.88, width: 2.33 }
obj.height = 1.88;
obj.width = 2.33;

console.log(obj);
// { name: 'what', age: 18 }

// 2 禁止对象配置、删除属性
// 复杂做法
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key],
//   });
// }

// 简单做法
Object.seal(obj);

// 测试
delete obj.name;
console.log(obj);
// { name: 'what', age: 18 }

// 3 让属性不可以修改(writable:false)
Object.freeze(obj);
obj.name = "why";
console.log(obj);
