const arr = [5, 4, 3];

const sum = arr.reduce((a, c) => {
  console.log(a); // Log the accumulator

  return a + c; // Return the updated accumulator
}, 0);

console.log(sum); // Log the final sum after reduce

// const fruits = ["banana", "watermelon", "apple, banana"];

// const fruitObj = fruits.reduce((obj, fruit) => {
//   console.log("obj: ", obj);
//   console.log("fruit: ", fruit);
//   obj[fruit] = obj[fruit]++ || obj[fruit] + 1;
//   return obj;
// }, {});

// console.log(sum); // Log the final sum after red

// const fruits = ["banana", "watermelon", "apple", "banana"];

// const fruitObj = fruits.reduce(
//   (obj, fruit) => {
//     console.log("obj: ", obj);
//     console.log("fruit: ", fruit);

//     obj[fruit] = (obj[fruit] || 0) + 1;

//     return obj;
//   },
//   { pil: 1 }
// );

// console.log(fruitObj); //
