// 13.1
const weaponlnventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";
console.log(weaponlnventory.includes(weaponToCheck));

// 13.2
const questNames = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the princess",
];
console.log(questNames);

const questNamesReverse = questNames.reverse();
console.log(questNames);

// 13.3
const monsterTypes = ["Dragon", "Goblin", "Orc"];
console.log(monsterTypes.join(","));

// 13.4
const monsterTypes1 = ["Dragon", "Goblin", "Orc"];
const monsterToCheck = "Orc";
console.log(monsterTypes1.includes(monsterToCheck));

// 13.5
console.log("exe 13.5: ");
const questNames1 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the princess",
];
const specificQuest = "Rescue the princess";
const rescueThePrincessIndex = questNames1.indexOf(specificQuest);

if (rescueThePrincessIndex !== -1) {
  console.log(`"Rescue the princess" faound at ${rescueThePrincessIndex} `);
} else console.log("Quest not found");

// 13.6
console.log("exe 13.6: ");
const monsterList = ["Dragon", "Goblin", "Orc"];
const monsterListSlice = monsterList.slice(0, -1); // shallow copy
// console.log(`slice: ${monsterListSlice}`);
// console.log(`slice: ${[monsterListSlice]}`);
console.log(monsterListSlice);
console.log(monsterList);

console.log("13.6 - splice");
const monsterListSplice = monsterList.splice(-1, 1); // deep
// console.log(`monsterListSplice: ${monsterListSplice}`);
console.log(monsterListSplice);
console.log(monsterList);

// 13.7
console.log("exe 13.7: ");
const monsterList2 = ["Orc", "Goblin"];
const newMonster = "Dragon";
monsterList2.unshift(newMonster);
console.log(monsterList2);

// 13.8
console.log("exe 13.8: ");
const monsterList3 = ["Dragon", "Goblin", "Orc"];
const unshiftMonsterList3 = monsterList3.shift();
console.log(unshiftMonsterList3);

// 13.9
console.log("exe 13.9: ");
const heroList1 = ["Archer", "Maga"];
const heroList2 = ["Warrior", "Healer"];
const allHeros = heroList1.concat(heroList2);
console.log(allHeros);

// 13.10
console.log("exe 13.10: ");
const questNames2 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the princess",
];
console.log(questNames2.sort());

// 13.11
console.log("exe 13.11: ");
// 11. Create Array from Magic Spells
const spellsString11 = "Fireball,Heal,Ice Lance";
console.log(spellsString11.split(","));

// // 12. Slice Array to Get Upcoming Quests
console.log("exe 13.12: ");
const questNames12 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const n12 = 2;
console.log(questNames12.slice(0, n12));

// // 13. Empty the Monster Array
console.log("exe 13.13: ");
const monsterList13 = ["Dragon", "Orc", "Goblin"];
console.log(monsterList13.splice(0, -1));

const monsterList133 = ["Dragon", "Orc", "Goblin"];
monsterList133.length = 0;
console.log(monsterList133);

// // 14. Equip a New Weapon
console.log("exe 13.14: ");
const inventory14 = ["Sword", "Shield"];
const newWeapon14 = "Bow";
const newinventory14 = inventory14.push(newWeapon14);
console.log(inventory14);

// // 15. Sell the Last Item
console.log("exe 13.15: ");
const inventory15 = ["Gold", "Magic Potion", "Shield"];
const removeInventory15 = inventory15.pop();
console.log(removeInventory15);
console.log(inventory15);

// // 16. Insert a New Quest at the Beginning
console.log("exe 13.16: ");
const quests16 = ["Dragon's Lair", "Rescue the Princess"];
const newQuest16 = "Defeat the Goblin King";
quests16.unshift(newQuest16);
console.log(quests16);

// // 17. List All Quests Alphabetically
console.log("exe 13.17: ");
const quests17 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
console.log(quests17.sort());

// // 18. Check If Quest Exists
console.log("exe 13.18: ");
const quests18 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
const questToCheck18 = "Rescue the Princess";
const questToCheck18Index = quests18.indexOf(questToCheck18);
questToCheck18Index !== -1
  ? console.log(`index ${questToCheck18Index}`)
  : console.log("index not found");

// // 19. Sort Scores
console.log("exe 13.19: ");
const scores19 = [30, 80, 60, 90];
console.log(scores19.sort((a, b) => a - b));
