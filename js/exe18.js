// 18.1
const character = {
  name: "ran",
  class: "Warrior",
  level: 5,
  abilities: ["Slash", "Block", "Charge"],
  stats: {
    strength: 15,
    dexterity: 10,
    intelligence: 8,
  },
  getOverallStrength() {
    return this.stats.strength + this.stats.dexterity + this.stats.intelligence;
  },
};

// 18.2

// const character2 = Object.assign({}, character, {
//   equipment: {
//     weapon: "uzi",
//     armor: "jjj",
//     accessories: ["a", "b", "c"],
//   },
// });

character.equipment = {
  weapon: "Staff",
  accessories: ["Ring of Power", "Amulet of Wisdom"],
};

// console.log(character2);
// console.log(character);
// console.log(character2.abilities);
// console.log(character2["abilities"]);

// console.log(typeof character2.equipment.armor);
// console.log(typeof character2["equipment"]["armor"]);

// 18.2
console.log(character.abilities);
console.log(character["abilities"]);
console.log(typeof character.equipment);
console.log(typeof character["equipment"]["weapon"]);
// 18.3
character.level = 10;

character.abilities.push("new ability");
console.log("18.3", character);
delete character.class;
console.log("18.3", character);
console.log(character.equipment.weapon);
console.log(character["equipment"]["weapon"]);
console.log(character.stats ? "contains" : "not cpnteint");

// 4
const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];

console.log("\nexe 18.4: ");
console.log(characters[0].attributes.health);

characters.averageHealth = function () {
  let totalHealth = 0;
  this.forEach((character) => {
    totalHealth += character.attributes.health;
  });
  return totalHealth / this.length;
};
console.log(characters);
console.log(characters.averageHealth());

// 18.5

const mergedCharacter = Object.assign({}, characters[0], characters[1]);

console.log(mergedCharacter);
mergedCharacter.name = "mo";
console.log(mergedCharacter);
Object.freeze(mergedCharacter);
mergedCharacter.name = "ll";
mergedCharacter.attributes.health = 70; // change
console.log(mergedCharacter);
// console.log("charA", charA);
Object.seal(mergedCharacter);
console.log(
  "Is the merged character object sealed?",
  Object.isSealed(mergedCharacter)
);
console.log(
  "Is the merged character object frozen?",
  Object.isFrozen(mergedCharacter)
);

// 6
const characterStats = {
  name: "Eldrin",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};

const keyChar = [];
const valueChar = [];
for (const [key, value] of Object.entries(characterStats)) {
  keyChar.push(key);
  valueChar.push(value);
}
console.log(...keyChar);
console.log(...valueChar);

const keyChar1 = Object.keys(characterStats);
console.log(...keyChar1);
const valueChar1 = Object.values(characterStats);
console.log(...valueChar1);

function logPropertyNamesAndValues(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
  });
}
logPropertyNamesAndValues(characterStats);

// // 7
const gameScores = {
  Eldrin: 950,
  Mira: 1200,
  Thorn: 800,
};

function increaseExperience(gameScores, pointsToAdd) {
  const entries = Object.entries(gameScores);
  for (const [name, points] of entries)
    if (points < 1000) {
      gameScores[name] += pointsToAdd;
    }
  console.log(gameScores);
}
increaseExperience(gameScores, 100);

// // 8
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" },
};

function findHardQuests(quests) {
  const hardQuests = [];
  const entries = Object.entries(quests);
  for (const [questID, quest] of entries) {
    if (quest.difficulty === "Hard") {
      // quest.isHard = true;
      // hardQuests.push(quest);
      const questWithIsHard = { ...quest, isHard: true };
      hardQuests.push(questWithIsHard);
    }
  }
  // console.log(hardQuests);
  console.log(hardQuests);
}
findHardQuests(quests);

// // 9
const skillLevels = {
  Ranger: [8, 9, 7, 10, 8.5],
  Mage: [8.5, 8, 9, 9.5, 7.5],
  Warrior: [7, 7.5, 8, 8.5, 9],
};
function average(skillLevels) {
  const summery = {};
  const classes = Object.keys(skillLevels);
  console.log(classes);
  for (const classSkill of classes) {
    const sum = skillLevels[classSkill].reduce(
      (total, level) => total + level,
      0
    );
    const avg = sum / skillLevels[classSkill].length;
    summery[classSkill] = avg;
  }
  console.log("s", summery);
}
average(skillLevels);

// // 10
const questRewards = {
  "Find the Lost Sword": "Legendary Weapon",
  "Defeat the Dragon": "Epic Armor",
  "Escort the Merchant": "Gold",
  "Discover the Ancient Ruins": "Legendary Weapon",
};
function groupQuestsByRewardType(questRewards) {
  const rewardTypes = {};

  // Iterate over each quest and its reward type
  for (const [quest, reward] of Object.entries(questRewards)) {
    // Check if the reward type already exists in the rewardTypes object
    if (rewardTypes[reward]) {
      // If it exists, push the quest to the array of quests for that reward type
      rewardTypes[reward].push(quest);
    } else {
      // If it doesn't exist, create a new array with the quest and set it as the value for the reward type
      rewardTypes[reward] = [quest];
    }
  }

  return rewardTypes;
}
const groupedQuests = groupQuestsByRewardType(questRewards);
console.log(groupedQuests);
