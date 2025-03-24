// 字面量增强的写法
var name = "why"
var age = 18

var obj = {
    // 1 属性的简写
    name,
    age,
    // 2 方法的简写 第一第二个是一样的
    foo: function () {
        console.log(this);
    },
    foo1() {
        console.log(this);

    },
    bar: () => {
        console.log(this);
    },
    // 3 计算属性名
    [name + 123]: "hahahah"
}

obj.foo()
obj.foo1()
obj.bar()

// obj[name + 123] = "hahahah"

// console.log(obj);
// {
//     name: 'why',
//     age: 18,
//     foo: [Function: foo],
//     foo1: [Function: foo1],
//     bar: [Function: bar],
//     why123: 'hahahah'
//   }



// 解构
// 数组的解构
var names = ["abc", "csa", "sda"]
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]
var [item1, item2, item3] = names
console.log(item1, item2, item3);

// 对象的解构


var obj2 = {
    name: '11',
    age: 18,
    height: 12
}

var { name, height, age } = obj2

