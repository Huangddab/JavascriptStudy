var obj = {
    name: "why"
}

// obj.__proto__ = {

// }


// obj.__proto__.__proto__ = {
//     address: "beijingshi"
// }

// 在obj中找address 没有就会要沿着原型链 往上找__proto__没有再往上找
// console.log(obj.address)


// 默认情况下字面量的原型
// console.log(obj.__proto__); // [Object: null prototype] {} Object的原型对象，这也就是顶层原型
// console.log(obj.__proto__.__proto__); // null


function Person() {

}

var p1 = new Person()
// new 一个构造函数的时候
// 1 在内存中创建一个对象
// var moni={}
// 2 this的赋值
// this = moni
// 3 将Person函数的显式原型prototype赋值给前面创建出来的对象的隐式原型
// moni.__proto__ = Person.prototype

console.log(Object.prototype)
console.log(Object.prototype.constructor)
// [Object: null prototype] {}
// [Function: Object]
// 打印prototype的所有属性
console.log(Object.getOwnPropertyDescriptors(Object.prototype))


// Object是所有类的一个父类