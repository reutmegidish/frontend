// // 1.1
// function isBolean(boleanValue) {
//   return typeof boleanValue === "boolean" ? "Yes" : "No";
// }

// console.log("exe: 1.1: :");
// console.log(isBolean(true));
// console.log(isBolean(false));
// console.log(isBolean(3 > 5));

//
//

// 2.1 ------------------------------------------------------

// function findTwoLowesNum(numArr) {
//   const twoLowestNum = [];
//   let bigestNum, smallestNum;
//   for (let i = 2; i < numArr.length; i++) {
//     if (bigestNum === undefined && smallestNum === undefined) {
//       numArr[0] > numArr[1]
//         ? ([bigestNum, smallestNum] = [numArr[0], numArr[1]])
//         : ([smallestNum, bigestNum] = [numArr[1], numArr[0]]);
//     } else {
//       if (numArr[i] < smallestNum) {
//         [smallestNum, bigestNum] = [numArr[i], smallestNum];
//       } else if (numArr[i] < bigestNum) {
//         bigestNum = numArr[i];
//       }
//     }
//   }
//   twoLowestNum.push(smallestNum, bigestNum);

//   return twoLowestNum;
// }

// const lowestNumArr = findTwoLowesNum([19, 5, 42, 2, 77]);
// const lowestNumArr1 = findTwoLowesNum([10, 343445353, 3453445, 3453545353453]);

// console.log(sum(lowestNumArr));
// console.log(sum(lowestNumArr1));

//
//
//
// 2.1

// const numArray = [19, 5, 42, 2, 77];
// const numArray1 = [10, 343445353, 3453445, 3453545353453];

// function findTwoLowesNum1(arr) {
//   arr.sort((a, b) => a - b);
//   return arr.slice(0, 2);
// }

// function sum(arr) {
//   return arr.reduce((total, num) => (total += num), 0);
// }

// console.log("\n exe: 2.1: :");
// console.log(sum(findTwoLowesNum1(numArray)));
// console.log(sum(findTwoLowesNum1(numArray1)));

//
//
//
// 2.2

// function findTwoLowesNum(numArr) {
//   let secondSmallestNum, smallestNum;
//   const arr = [];
//   numArr[0] > numArr[1]
//     ? ([secondSmallestNum, smallestNum] = [numArr[0], numArr[1]])
//     : ([smallestNum, secondSmallestNum] = [numArr[0], numArr[1]]);

//   for (let i = 2; i < numArr.length; i++) {
//     if (numArr[i] === smallestNum || numArr[i] === secondSmallestNum) {
//       continue;
//     }
//     if (numArr[i] < smallestNum) {
//       [secondSmallestNum, smallestNum] = [smallestNum, numArr[i]];
//     } else if (numArr[i] < secondSmallestNum) secondSmallestNum = numArr[i];
//   }
//   arr.push(smallestNum, secondSmallestNum);
//   return arr;
// }

// function sum(arr) {
//   return arr.reduce((total, num) => (total += num), 0);
// }

// const lowestNumArr = findTwoLowesNum([5, 5, 2, 2, 42, 2, 77]);
// const lowestNumArr1 = findTwoLowesNum([10, 343445353, 3453445, 3453545353453]);

// console.log(sum(lowestNumArr));
// console.log(sum(lowestNumArr1));

// const array = [19, 2, 5, 42, 2, 77];
// const array2 = [10, 343445353, 3453445, 3453545353453];

// function findTwoLowestNum(array) {
//   let firstNum = array[0];
//   let secondNum = array[1];
//   const twoLowestNum = [];

//   array.forEach((num) => {
//     if (
//       (num < firstNum && num !== secondNum) ||
//       (num < secondNum && num !== firstNum)
//     ) {
//       num < firstNum ? (firstNum = num) : (secondNum = num);
//     }
//   });

//   twoLowestNum.push(firstNum, secondNum);
//   return twoLowestNum;
// }

// function sum(arr) {
//   return arr.reduce((total, num) => (total += num), 0);
// }

// console.log(sum(findTwoLowestNum(array)));
// console.log(sum(findTwoLowestNum(array2)));

function findTwoLowestNum3(array) {
  //   let lowestNum = Infinity;
  //   let secondNum = Infinity;
  let lowestNum;
  let secondNum;
  array[0] < array[1]
    ? ([lowestNum, secondNum] = [array[0], array[1]])
    : [array[1], array[0]];

  array.forEach((num) => {
    if (num < lowestNum || num < secondNum)
      num < lowestNum
        ? ([lowestNum, secondNum] = [num, lowestNum])
        : (secondNum = num);
  });

  return lowestNum + secondNum;
}
const array = [19, 5, 42, 2, 77];
const array2 = [10, 343445353, 3453445, 3453545353453];

// function sum(arr) {
//   return arr.reduce((total, num) => (total += num), 0);
// }
console.log(findTwoLowestNum3(array));
console.log(findTwoLowestNum3(array2));

// [19, 5, 42, 2, 77];

//       infinity, infinity
// 19 => Infinity, 19
// 5  => 5, 19
// 42 =>
