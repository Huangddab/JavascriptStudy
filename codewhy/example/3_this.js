// function foo() {
//   console.log(this);
// }

// var obj1 = {
//   name: "obj1",
//   foo: foo,
// };

// var obj2 = {
//   name: "obj2",
//   obj1: obj1,
// };

// obj2.obj1.foo();
// { name: 'obj1', foo: [Function: foo] }

function foo() {
  console.log(this);
}

var obj1 = {
  name: "obj1",
  foo: foo,
};

var bar = obj1.foo;
bar();
