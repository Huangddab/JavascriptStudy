var obj = {
  name: "what",
  age: 18,
};

// 禁止对象继续添加新的属性
Object.preventExtensions(obj);
// ，未禁止时打印{ name: 'what', age: 18, height: 1.88, width: 2.33 }
obj.height = 1.88;
obj.width = 2.33;

console.log(obj);
