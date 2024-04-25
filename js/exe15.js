// 15 - String Methods

// 1. Character Name Capitalization
// Input: "iron warrior"
const str = "iron warrior";
const words = str.split(" ");
const arr = [];
for (let word of words) {
  arr.push(word[0].toUpperCase() + word.slice(1));
}
console.log(arr.join(" "));

// 2. Item Search
// Input: ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"] and query "Iron"
const arr1 = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"];
const query = "Iron";
const includesQuery = [];

for (let word of arr1) {
  if (word.includes(query)) {
    includesQuery.push(word);
  }
}
console.log(includesQuery);

// 3. NPC Name Format
// Input: "Goblin, Grunty"
const str3 = "Goblin, Grunty";
const arr3 = str3.split(", ");
const reverseArr = [];

for (let i = arr3.length - 1; i >= 0; i--) {
  reverseArr.push(arr3[i]);
}
console.log(reverseArr.join(" "));

console.log(arr3.reverse().join(" "));

// 4. Quest Duration
// Input: "3h 45min"
console.log("exe15.4: ");

const str4 = "3h 45min";
const [hoursStr, minStr] = str4.split(" ");

const hours = parseInt(hoursStr.slice(0, hoursStr.indexOf("h")));
const min = parseInt(minStr.slice(0, minStr.indexOf("min")));

console.log(`${hours} hours and ${min} minutes`);

// 5. Game Title Acronym
console.log("exe15.5: ");
// Input: "Epic Fantasy Battle"
const str5 = "Epic Fantasy Battle";
const words5 = str5.split(" ");
let acronym = "";
for (let word of words5) {
  acronym += word[0];
}
console.log(acronym);

// 6. Concatenate Character Details
console.log("exe15.6: ");
// Input: 'Iron Warrior;Warrior;10'
const str6 = "Iron Warrior;Warrior;10";
const [name, class6, level6] = str6.split(";");

console.log(`${name}, class: ${class6}, level: ${level6}`);

// 7. Location Slug
console.log("exe15.7: ");
// Input: "Dark Forest"
const location = "Dark Forest";
const slug = location.toLowerCase().trim().replace(" ", "-");
console.log(slug);

// 8. Quest Description
console.log("exe15.8: ");
const [str8, length] = [
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.",
  50,
];
const trimStr = str8.substring(0, length + 1);
console.log(`${trimStr}...`);
// Input: "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.", 50

// 9. Monster List
// Input: "Goblin, Orc, Dragon"
const monster = "Goblin, Orc, Dragon";
console.log(monster.split(" "));
