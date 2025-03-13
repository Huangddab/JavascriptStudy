// 数据属性描述符

var obj = {
  name: "why",
  age: 18,
};

Object.defineProperty(obj, "name", {
  // 很多配置
  value: "kobe",
  //   该属性不可删除
  configurable: false,
});

delete obj.name;
console.log(obj.name); // kobe

// 存取属性描述符
