const obj = {
  name: "John",
  age: 30,
};

const objProxy = new Proxy(obj, {});
console.log(objProxy.name); // John
console.log(objProxy.age); // 30
console.log(objProxy); // { name: 'John', age: 30 }

// 捕捉器
const obj1 = {
  name: "John",
  age: 30,
};
const handler = {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
  },
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    delete target[prop];
  },

  //   监听in捕获器
  has: function (target, prop) {
    console.log(`Checking if ${prop} exists`);
    return prop in target;
  },
};
const objProxy1 = new Proxy(obj1, handler);

console.log(objProxy1); // { name: 'John', age: 30 }
console.log("name" in objProxy1);
// Checking if name exists
//  true
