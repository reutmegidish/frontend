// 1;
// hello world
/*hello world
hello world
hello world
hello world*/

// 2
const num = 10;
const str = "hello";
const bool = true;
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

// 2.2
const firstVar = 42;
const secondVar = "42";
console.log("2.2");
console.log(typeof firstVar);
console.log(typeof secondVar);

// 2.3
const noValue = undefined;
const emptyValue = null;
console.log("2.3");
console.log(typeof noValue);
console.log(typeof emptyValue);

// 2.4
const age = 8;
const FirstName = "sedrik";
const isHeInLove = true;
console.log("2.4");
console.log(age);
console.log(FirstName);
console.log(isHeInLove);
console.log(typeof age);
console.log(typeof FirstName);
console.log(typeof isHeInLove);
console.log("the value of age is " + age + " and is typeof is " + typeof age);

// 3.1 - 3.4
const myName = "reut";
const x = 5;
const y = 15;
console.log(x + y);
const isTrue = true;
let nothing;
console.log(nothing);
const nullVal = null;
console.log(nullVal);

// 4
const parisTemprature = 25;
const isLogin = true;
const emailInput = "@email";
const basketballScore = 5;

// 5
const firstName1 = "reut";
console.log(firstName1);
const age1 = 25;
console.log("i am " + firstName1 + " and i am " + age1 + " years old");

const favoriteColor = "blue";
const favoriteMovie = "toy story";
const favoriteFood = "rice";
console.log(
  "my favorite color is " +
    favoriteColor +
    ", i love the movie " +
    favoriteMovie +
    " and i enjoy eating " +
    favoriteFood
);
const a = 5;
const b = 3;
const result = a + b;
console.log("the sum of " + a + " and " + b + " is " + result);

const today = "sunday";
console.log("today is " + today);

// 6
const myName1 = "reut";
const age2 = 25;
console.log(`my name is ${myName} and i am ${age2} years old`);

const length = 5;
const width = 3;
const rectangle = length * 2 + width * 2;
console.log(rectangle);
console.log(`the area of rectangle is ${rectangle}`);

const today1 = "monday";
const task1 = "learn";
const task2 = "walk";
console.log(`on ${today}, i will ${task1} and ${task2}`);

const numOfPets = 3;
console.log(` i have ${numOfPets} pets`);

const base = 5;
const height = 3;
const areaTriangle = (base * height) / 2;
console.log(
  `the area of trinagle with ${height} height and ${width} width is ${areaTriangle}`
);

var num2 = 3;
console.log(num2);
var num2 = 4;
console.log(num2);
num2 = 5;
console.log(num2);

let flower = "rose";
console.log(flower);
flower = "hh";
console.log(flower);
// let flower = "rose";
// console.log(flower);

// const flower2 = "rose";
// console.log(flower2);
// const flower2 = "rose";
// flower2 = "hh";

// 8
const num11 = 8;
const num22 = 15;
const sum = num11 + num22;
console.log(sum);
const subtracts = num11 - num22;
console.log(subtracts);

const x1 = 7;
const y1 = 3;
const multiply = x1 * y1;
console.log(multiply);

const dividend = 20;
const divisor = 4;
const divide = dividend / divisor;
console.log(divide);
console.log(dividend / divide);

const num21 = 15;
const num23 = 25;
const num24 = 10;
const average = (num21 + num23 + num24) / 3;
console.log(average);

const num3 = 6;
const num31 = 7;
console.log(6 % num3 === 0);
console.log(7 % num3 === 0);

if (num3 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

if (num31 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 8.8
const num32 = 10;
if (num32 % 5 === 0 && num32 % 7 === 0) {
  console.log("both divided");
} else {
  console.log("cant divide both");
}
const num33 = 35;
if (num33 % 5 === 0 && num33 % 7 === 0) {
  console.log("both divided");
} else {
  console.log("cant divide both");
}
//  8.9
for (let i = 0; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

const num34 = 15;
// 8.10
if (num34 > 10 && num34 < 20) {
  console.log(`num34 > 10 && num34  < 20`);
} else {
  ("not in the term");
}

const num35 = 20;
if (num35 > 10 && num35 < 20) {
  console.log(`num34 > 10 && num34  < 20`);
} else {
  console.log("not in the term");
}

// 8.11
const num12 = 20;
if (num12 < -5 || num12 > 10) {
  console.log(`8.11 in the term`);
} else {
  console.log("8.11 not in the term");
}

const num13 = 6;
if (num13 < -5 || num13 > 10) {
  console.log(`8.11 in the term`);
} else {
  console.log("8.11 not in the term");
}

// 8.12
const isLogin1 = true;
console.log(!isLogin1);

// 8.13
const num14 = 21; // 31 not in the term
if ((num14 > 5 && num14 < 10) || (num14 > 20 && num14 < 30)) {
  console.log(`8.13 in the term`);
} else {
  console.log("8.13 not in the term");
}

// 9.1
const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend);

// 9.2
const age3 = 20;
const isLicence = true;
if (age3 > 18 && isLicence) {
  console.log("can drive");
} else {
  console.log("canwt drive");
}

// 9.3
const isKnowJs = true;
const isKnowPythoon = false;
if (isKnowJs === true || isKnowPythoon === true) {
  console.log("know at least js or python");
} else {
  console.log("dint know nither");
}

// 9.4
const isRaining = true;
console.log(!isRaining);

//  9.5
const isLikeMusic = true;
const isPlayGuitar = true;
const isHasTime = true;
if ((isLikeMusic && isPlayGuitar) || isHasTime) {
  console.log(`9.5 in the term`);
} else {
  console.log(`9.5 in the term`);
}

// 9.6
const personAge = 25;
if (personAge > 18) {
  console.log("greater than 18");
} else {
  console.log("smaller than 18");
}

// 9.7
const currentTemp = 30;
if (currentTemp < 20 || currentTemp > 30) {
  console.log("check temp");
} else {
  console.log("good temp");
}

// 9.8
const firstNumber = 10;
const secondNumber = "10";
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);

// 9.9
const budget = 500;
const expense = 450;
if (expense <= budget) {
  console.log("expense <= budget");
}
console.log("9.9" + (expense <= budget));

const perason1height = 170;
const perason1height2 = 165;
if (perason1height > perason1height2) {
  console.log("perason1height > perason1height2");
}
if (perason1height < perason1height2) {
  console.log("perason1height < perason1height2");
} else {
  console.log("same height");
}

// 10.1 -19
// 10.2 -6
// 10.3 -6
// 10.4 -20
// 10.5 -16

// 10.9
const num111 = 2;
const str111 = "3";
console.log("10.9", num111 + str111 * 4);

// 10.10
const a1 = 10;
const b1 = 20;
const c = "30";
console.log(a1 + b1 + c);
console.log("10.10", c + a1 + b1);

// 10.11
const numStr = "3";
const num112 = 10;
console.log(numStr + num112);

// 10.12 - 22
// 10.13
const r = 10;
console.log(r / 0);

const d = 15;
const e = 4;
console.log(d % e);

// 11.1 to do

// 12.1
const num113 = 123;
const strNum = num113.toString();
console.log(num113, typeof num113);
console.log(strNum, typeof strNum);

const number = 123;
const stringNumber = number + "";
console.log(typeof stringNumber);

// 12.2
const str12 = "123";
const f = parseInt(str12);
console.log(str12, typeof str12, f, typeof f);

let strr = "123";
let numm = +strr;
console.log(typeof numm); // Output: number
console.log(numm); // Output: 123

// 12.3
let strb = "3.14";
let floatValue = parseFloat(strb);
console.log(typeof floatValue); // Output: number
console.log(floatValue); // Output: 3.14

// 12.4
console.log(5 + "3");

// 12.5
const num1 = 10;
const numb = 0;

console.log(Boolean(num1)); // Output: true
console.log(Boolean(numb)); // Output: false

const numa = 20;

if (numa) {
  console.log("Number is truthy");
} else {
  console.log("Number is falsy");
}

// 12.6
// let str = "123";
// let num = +str;
// console.log(typeof num); // Output: number
// console.log(num); // Output: 123

// let str = "3.14";
// let floatNum = +str;
// console.log(typeof floatNum); // Output: number
// console.log(floatNum); // Output: 3.14

// 12.7
// let boolTrue = true;
// let boolFalse = false;

// let numTrue = Number(boolTrue); // Convert true to number
// let numFalse = Number(boolFalse); // Convert false to number

// console.log(numTrue); // Output: 1
// console.log(numFalse); // Output: 0
//
let boolTrue = true;
let boolFalse = false;

let numTrue = boolTrue * 1; // Convert true to number implicitly
let numFalse = boolFalse * 1; // Convert false to number implicitly

console.log(numTrue); // Output: 1
console.log(numFalse); // Output: 0

// 12.8
let nullValue = null;
let numc = Number(nullValue);
console.log(numc); // Output: 0
