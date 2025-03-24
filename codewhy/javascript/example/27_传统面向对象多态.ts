// 面向对象的三大属性：封装 继承 多态

// 多态 为不同数据类型的实体提供统一的接口

// 传统面向对象的多态有三个前提：
//  1> 必须有继承（是多态的前提）
//  2> 必须有重写（子类重写父类的方法）
//  3> 必须有父类引用指向子类对象 

class Shape {
    getArea() {

    }
}

class Rectangle extends Shape {
    getArea() {
        return 100
    }
}

class Cricle extends Shape {
    getArea() {
        return 200
    }
}

var r = new Rectangle()
var c = new Cricle()
// 多态：当对不同的数据类型执行同一个操作时，如果 表现出来的行为（形态）不一样，就是多态的体现
function calcArea1(Shape: Shape) {
    console.log(Shape.getArea());
}

// var Shape:Shape = Rectangle()

calcArea1(r)
calcArea1(c)