// 模拟实现
// apply
Function.prototype.hyapply = function (thisArg, args) {
  console.log("apply");
  // 获取到执行的函数
  var fn = this;
  // 处理绑定的thisArg
  // 有问题传0的时候会是window
  // apply("123",20) //报错不被允许的
  // thisArg = thisArg ? Object(thisArg) : window;
  // thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  // 执行函数
  thisArg.fn = fn;
  // 解决underfind null时报错
  var argArray = args || [];

  var result = thisArg.fn(...argArray);
  console.log();
  delete this.thisArg;
  return result;
};

function sum(num1, num2) {
  console.log(this);
  return num1 + num2;
}

// apply("123",20) //报错不被允许的
// apply("123",[20]) //被允许的

var sumData = sum.hyapply("123", 20);
console.log("====================================");
console.log(sumData);
console.log("====================================");
