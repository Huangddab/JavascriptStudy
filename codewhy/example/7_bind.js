Function.prototype.hybind = function (thisArgs, ...ArgsArray) {
  // 拿到是谁调用的
  var fun = this;

  // 绑定this 不等于undefined且不等于underfind时，this指向传入的对象，否则指向window
  thisArgs = thisArgs !== null && thisArgs !== undefined ? Object(thisArgs) : window;

  function poxyArgs(...args) {
    // 将函数放到thisArgs中管理
    thisArgs.fun = fun;
    // 对两个传入的参数进行合并
    var finalArgs = [...ArgsArray, ...args];
    var result = thisArgs.fun(...finalArgs);
    delete thisArgs.fun;

    return result;
  }
  return poxyArgs;
};

var tar = sum.hybind("222", 1, 2);
tar(5, 6);

var bar = sum.bind("111", 1, 2);
bar(5, 6);
// sum 1 2 5 6
// sum 1 2 5 6
function foo() {
  console.log("foo被执行", this);
}

function sum(num1, num2, num3, num4) {
  console.log("sum", num1, num2, num3, num4);
}
