function makeAdd(count) {
  return function add(num) {
    return count + num;
  };
}

var add5 = makeAdd(5);
console.log("====================================");
console.log(add5(6)); // 11
console.log(add5(10)); /// 15
console.log("====================================");

