// 没有使用属性描述符定义的对象
// 默认是
// value:赋值的value
// configurable:true
// enumerable:true
// writable:true

var obj = {
  name: 'why',
  age: 18,
  _phone: "123"
}


// Object.defineProperty()
// 直接子一个对象上定义一个新属性，绘制修改一个对象的现有属性，并返回此对象
// Object.defineProperty(属性名,值,属性描述符) 
// Object.defineProperty(obj, prompt, descriptor)

// Object.defineProperty(obj, "height", {
//     value: 1.88
// })
// console.log(obj) // 并没有打印height属性，因为这里默认是不可枚举的


// 属性描述符分为：数据属性和存取属性


/**
* 
* 数据属性描述符：
  configurable ：可配置的
  enumerable：是否可以通过for in 或者 Object.keys()
  value ：读取属性会返回该值
  writable ：是否可修改属性的值
* 存取属性描述符：
  configurable
  enumerable
  get
  set
* 
*/


// 数据属性描述符
Object.defineProperty(obj, "address", {
  value: "北京市",  // 默认值underfined
  // false是不可删除的/也不可以再重新定义属性描述符
  configurable: false,// 默认值false
  // 不可枚举的,false时下列的打印都没有address属性
  // enumerable: false // 默认值false
  enumerable: true,
  // 是否可以修改值（写入值）
  writable: false, // 默认值false
})
// 测试configurable
// delete obj.address
// console.log(obj.address) //北京市

// 测试enumerable
// console.log("1", obj)
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log("2", element)
//     }
// }

// console.log("3", Object.keys(obj))

// 测试writable
// obj.address = "上海"
// console.log(obj.address); // 北京市




// 存取属性描述符
// 场景：1 隐藏某一个私有属性不希望直接被外界使用和赋值
//      2 如果我们希望截获某一个属性他访问和设置值的过程，也会使用存取属性属性描述符（vue2 响应式的原理）
Object.defineProperty(obj, "phone", {
  enumerable: true,
  configurable: true,
  get: function () {
    foo()
    return this._phone
  },
  set: function (value) {
    bar()
    this._phone = value
  }
})

// console.log('obj', obj)
// obj { name: 'why', age: 18, address: '北京市', phone: [Getter / Setter] }

// 这样访问时就能够直接拿到get返回的数据
console.log(obj.phone) // 123


obj.phone = "456"
console.log(obj.phone) // 456

function foo() {
  console.log("获取一次")
}

function bar() {
  console.log("设置一次")
}

// 获取一次
// 123
// 设置一次
// 获取一次
// 456



// Object.defineProperties 一次性可以定义多个属性

// 还有另外一种写法
var obj2 = {
  _age: 18,
  _name: "name",
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  }
}

Object.defineProperties(obj2, {
  name: {
    enumerable: true,
    configurable: true,
    get: function () {
      this._name
    },
    set: function (value) {
      this._name = value
    }
  }
})
obj2.age = 20
console.log(obj2)