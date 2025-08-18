// 创建类继承内置
class Student extends Array {
    firstItem() {
        return this[0]
    }
    lastItem() {
        return this[this.length - 1]
    }
}

var arr = new Student(1, 2, 3)


console.log(arr.firstItem());
console.log(arr.lastItem());


// 类的混入
// 。。。