// 模拟实现
// call

// 给所有的函数添加一个htcall方法
Function.prototype.hycall = function (thisArg, ...args) {
  console.log("hycall");
  //   1 获取需要被执行的函数
  // 想办法调用hycall时是执行foo
  // 那么就要知道是谁调用hycall
  // 调用时是隐式绑定 所以this就是那个谁
  console.log(this);
  //  拿到了，需要传入参数指向传入的参数
  var fn = this;

  //   2 对thisArg转成对象类型（防止传入的是数字/字符串/布尔值）
  //   thisArg = Object(thisArg);
  //   3 当传入underfind null指向window
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  //  调用需要被执行的函数
  thisArg.fn(...args);
  //  调用完成删除
  delete thisArg.fn;
};

function foo() {
  console.log(this);
}

foo.hycall(null);

function sum(num1, num2) {
  console.log(num1, num2, this);
  return num1 + num2;
}

sum.hycall("123", 1, 2);
