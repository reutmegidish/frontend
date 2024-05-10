// 1:

// console.log(a); // undefined
// var a = 5;

// console.log(b); //Cannot access 'b' before initialization
// let b = 5;

// console.log(c);
// const c = 5;

//

// 2
// console.log(myFuncDec1()); // What will be the output?
// function myFuncDec1() {
//   return "Hello from function declaration! ";
// } // Hello from function declaration!

// console.log(myFuncExpr()); // What will be the output?
// var myFuncExpr = function () {
//   return "Hello from function expression! ";
// }; // is not a function

//

// 3

// const x = " global ";

// function outerFunc() {
//   let y = "outer";

//   function innerFunc() {
//     var z = " inner";

//     console.log(x); // global
//     console.log(y); // outer
//   }
//   innerFunc();
//   console.log(z); // z is not defined
// }
// outerFunc();

// 4

const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log("a", a); // 10
  }
}

b();
console.log("a(B)", a); // 1

foo();

function foo() {
  console.log("x", x); // undefined
  var x = "Hello, world!";

  bar();
  function bar() {
    console.log("x bar()", x); // Cannot access 'x' before initialization
    let x = "hello, scope1";
  }
}
//
