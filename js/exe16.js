// 16 - Functions;
//  impure functions
// 16.1
let characterStats = [];
function initializeCharactersStats() {
  characterStats = [];
}

// 16.2
function addCharacterStat(characterName, strength) {
  const stat = [characterName, strength];
  characterStats.push(stat);
}

// 16.3
function findCharacterStrength(characterName) {
  let isCharacterStats = false;
  for (const stat of characterStats) {
    if (stat[0] === characterName) {
      isCharacterStats = true;
      console.log(stat[1]);
    }
  }
  if (!isCharacterStats) console.log("charcter was not found");
}

// 16.4
function updateCharacterStrength(characterName, newStrength) {
  let isCharacterStats = false;
  for (const stat of characterStats) {
    if (stat[0] === characterName) {
      isCharacterStats = true;
      stat[1] = newStrength;
    }
  }
  if (!isCharacterStats) console.log("charcter was not found");
}

// 16.5;

function removeCharacterStat(characterName) {
  let isCharacterStats = false;
  for (const stat of characterStats) {
    if (stat[0] === characterName) {
      isCharacterStats = true;
      characterStats.splice(characterStats.indexOf(stat), 1);
      console.log(characterStats);
    }
  }
  if (!isCharacterStats) console.log("charcter was not found");
}

function removeCharacterStat2(characterName) {
  const index = characterStats.findIndex((el) => el[0] === characterName);

  if (index !== -1) {
    characterStats.splice(index, 1);
  } else console.log("charcter was not found");
}

// 16.6
function lisrCharacters() {
  for (const stat of characterStats) {
    console.log(`${stat[0]} - ${stat[1]}`);
  }
}

// 16.7
function strongestCharacter() {
  console.log(characterStats);
  let strongestChar;
  for (let i = 0; i < characterStats.length; i++) {
    if (i === 0) {
      strongestChar = characterStats[i][1];
    } else {
      strongestChar =
        characterStats[i][1] > strongestChar
          ? characterStats[i][1]
          : strongestChar;
    }
    console.log(strongestChar);
  }
}

console.log(`initial state: `);
console.log(`characterStats = `, characterStats);

console.log(`exe 16.1: `);
initializeCharactersStats();
console.log(`characterStats = `, characterStats);

console.log(`exe 16.2: `);
addCharacterStat("ran", 5);
console.log(`characterStats = `, characterStats);
addCharacterStat("roi", 7);
console.log(`characterStats = `, characterStats);
addCharacterStat("ron", 5);
console.log(`characterStats = `, characterStats);
addCharacterStat("rani", 3);
console.log(`characterStats = `, characterStats);

console.log(`exe 16.3: `);
findCharacterStrength("roi");
console.log(`characterStats = `, characterStats);

console.log(`exe 16.4: `);
updateCharacterStrength("roi", 8);
console.log(`characterStats = `, characterStats);

console.log(`exe 16.5: `);
console.log(`characterStats = `, characterStats);
removeCharacterStat("roi");
console.log(`characterStats = `, characterStats);
console.log(`exe 16.5 -findIndex: `);
removeCharacterStat2("roi");
console.log(`characterStats = `, characterStats);
removeCharacterStat2("rani");
console.log(`characterStats = `, characterStats);

console.log(`exe 16.6: `);
lisrCharacters();

console.log(`exe 16.7: `);
strongestCharacter();

////////////////////////////////////////////////////////////

// Pure Functions
console.log(`\nPure Functions: `);

// 1. Determine the Average Rating of Games
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]
console.log(`\nexe 1: `);
//  with reduce()
console.log(`1. with reduce() : `);

const gameRatings = [8.5, 7.9, 6.3, 9.2, 8.1];
function calculateAverageRating(gameRatings) {
  const sumRating = gameRatings.reduce((a, c) => a + c, 0);
  const average = sumRating / gameRatings.length;
  return average.toFixed(1);
}
console.log(calculateAverageRating(gameRatings));

// with for loop
console.log(`1. with for loop : `);

function calculateAverageRating1(gameRatings) {
  let sumRating1 = 0;
  for (const rating of gameRatings) {
    sumRating1 += rating;
  }
  const average = sumRating1 / gameRatings.length;
  return average.toFixed(1);
}
console.log(calculateAverageRating1(gameRatings));

// 2. Extract Developer Names from Game Titles
console.log(`\nexe 2: `);
// Input Example: ['The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo', 'Final Fantasy VII (1997) - Developed by Square Enix', 'Halo: Combat Evolved (2001) - Developed by Bungie']

const gameTitles = [
  "The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo",
  "Final Fantasy VII (1997) - Developed by Square Enix",
  "Halo: Combat Evolved (2001) - Developed by Bungie",
];

const develpotName = [];

function extractDeveloperNames(gameTitles) {
  for (const title of gameTitles) {
    const searchWord = "developed by ";
    const searchWordILength = searchWord.length;
    const developedByIndex = title.toLowerCase().indexOf(searchWord);
    develpotName.push(title.slice(developedByIndex + searchWordILength));
  }
  console.log(develpotName);
}
extractDeveloperNames(gameTitles);

// 3. Check if a Game Title Contains a Specific Word
// Input: ('Final Fantasy VII', 'Fantasy')
console.log(`\nexe 3: `);

function containsWordInTitle(gameTitle, keyWords) {
  console.log(gameTitle.includes(keyWords));
}

containsWordInTitle("Final Fantasy VII", "Fantasy");

// wth loop
console.log("with loops");
function containsWordInTitle1(gameTitle, keyWords) {
  const words = gameTitle.split(" ");
  for (const word of words) {
    if (word === keyWords) {
      console.log(gameTitle.includes(keyWords));
      return;
    }
  }
  console.log(`key words dosent match`);
}

containsWordInTitle1("Final Fantasy VII", "Fantasya");

// 4. Check if All Game Titles Start with the Same Letter
// Input: ['Assassin's Creed', 'Age of Empires', 'Animal Crossing']

// 5. Concatenate All Game Genres into a Single String
// Input: ['RPG', 'Action', 'Adventure']

// 6. Count Battles in XP Range
// Input: ([50, 75, 100, 30, 20, 100], 75, 100)

// 7. Find Games Developed by a Specific Developer
// Input Example: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'

// 8. Capitalize the First Letter of Each Game Title
// Input: ['the legend of zelda', 'final fantasy', 'halo: combat evolved']

// 9. Filter Unique XP Values
// Input: [100, 50, 75, 50, 100, 75, 100]

// 10. Sort Game Titles Alphabetically
// Input: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']

// 11. Filter XP by Multiple Criteria
// Input: ([10, 20, 30, 40, 50], greaterThan=20, lessThan=50)

// Bonus Exercises

// 1. Sort Experience Points
// Input: [100, 50, 75, 25, 10]

// 2. Average XP of Top N Battles
// Input: ([50, 10, 100, 75, 25], 3)

// 3. Normalize Experience Points
// Input: ([0, 25, 50, 75, 100], 0, 10)
