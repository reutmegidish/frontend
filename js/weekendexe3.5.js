// 1.1
function isBolean(boleanValue) {
  return typeof boleanValue === "boolean" ? "Yes" : "No";
}

console.log("exe: 1.1: :");
console.log(isBolean(true));
console.log(isBolean(false));
console.log(isBolean(3 > 5));

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

// console.log("k", sum(lowestNumArr));
// console.log(sum(lowestNumArr1));

//
//
//
// 2.1

const numArray = [19, 5, 42, 2, 77];
const numArray1 = [10, 343445353, 3453445, 3453545353453];

function findTwoLowesNum1(arr) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, 2);
}

function sum(arr) {
  return arr.reduce((total, num) => (total += num), 0);
}

console.log("\n exe: 2.1: :");
console.log(sum(findTwoLowesNum1(numArray)));
console.log(sum(findTwoLowesNum1(numArray1)));

//
//
//
// 2.2
