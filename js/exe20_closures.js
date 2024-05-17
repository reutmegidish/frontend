// 20 - closures

// 20.1
// function createPlayerCharacter(name, initialLevel) {
//   return () => {
//     name, initialLevel;
//   };
// }

//
//
//

// let x = 1;

// const parentFunction = () => {
//   let myValue = 2;

//   console.log(x); // Outputs: 1
//   console.log(myValue); // Outputs: 2

//   const childFunction = () => {
//     x += 5; // 1 + 5 = 6
//     myValue += 1; // 2 + 1 = 3

//     console.log(x); // 6
//     console.log(myValue); // 3
//   };

//   return childFunction;
// };

// console.log("---1---");
// const result = parentFunction();
// console.dir(result);
// // Outputs: 1, 2; `result` is now a reference to `childFunction`

// console.log("---2---");
// result();
// // Outputs: 6, 3; `childFunction` has access to the `myValue` and `x` even after parentFunction` has closed

// console.log("---3---");
// result();
// // Outputs: 11, 4; `childFunction` maintains the changes to `x` and `myValue` across calls

//

const addTo = (outer) => {
  let x = 0;
  console.log("first_outer", outer);
  const add = (inner) => {
    x += 1;
    console.log(x);
    console.log(x, " outer, :", outer);
    console.log(x, " inner, :", inner);
    // Here we return NOT AN ASSIGNMENT - WE RETURN A RESULT OF THE ACTION 'OUTER + INNER'
    return outer + inner;
  }; // NaN
  //   console.log("*********");
  //   console.log(`---${(x += 1)}---`);
  //   console.log("add", add);
  //   console.log("\\\\\\\\");
  //   console.log("add()", add()); // x= 1, outer = 3
  //   console.log("\\\\\\\\");
  //   console.log("*********");

  return add;
};

console.log("-------1------");
console.log(addTo(5)); //// outer 5
console.log("-------2------");
const addThree = addTo(3); /////////////////// outer = 3
console.log(addThree);
// console.log(addThree);
// console.log(typeof addThree);
// console.log("-------3------");
// console.dir(addTo());
console.log("-------4------");
const addTwo = addTo(2); //////////////////// outer = 2
// console.log("addThree", addThree(2));
console.log("-------5------");
console.log(addThree(10)); //////// 13
console.log("-------6------");

console.log(addTwo(2)); // 2+2 = // 4
console.log("-------7------");
console.log(addThree(11)); //////// 14
console.log("-------8------");
addTwo();

console.log(addThree(20)); //////// 23

console.log("-------9------");
console.log(addTwo(4)); // 2+4 = // 6
