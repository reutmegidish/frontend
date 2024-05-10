// 1
const heroData = {
  heroName: "Aragorn",
  heroLevel: 20,
  heroClass: "Ranger",
  race: "Human",
};

const { heroName, heroLevel, heroClass } = heroData;
console.log(heroName, heroLevel, heroClass);

// 2
let topHeroNames = ["Gandalf", "Legolas", "Frodo", "Samwise"];
[topHeroNames[0], topHeroNames[1]] = [topHeroNames[1], topHeroNames[0]];
console.log(topHeroNames);

// 3
const heroLevels = {
  Aragorn: 20,
  Legolas: 19,
};

const levelUpdates = {
  Aragorn: 21,
  Legolas: 20,
};

function updateHeroLevels(originalLevels, updates) {
  return { ...originalLevels, ...updates };
}
console.log(updateHeroLevels(heroLevels, levelUpdates));

// 4
console.log("exe 19.4: ");
const questList1 = ["Find the ring", "Save the king", "Protect the realm"];
const questList2 = ["Destroy the ring", "Find the lost city", "Save the king"];
console.log([...new Set([...questList1, ...questList2])]);

// 5
const heroInfo = {
  name: "Legolas",
  equipment: {
    first: "Bow of the Galadhrim",
    second: "Elven dagger",
    third: "Cloak of Lothlórien",
  },
};

const {
  equipment: { first, second },
} = heroInfo;
console.log(first, second);

// 6
const baseDetails = {
  name: "Gandalf",
  class: "Wizard",
};

const extraDetails = {
  level: 25,
  power: 100,
};

console.log({ ...baseDetails, ...extraDetails });

// 7
const heroStats = {
  name: "Legolas",
  level: 20,
  skills: ["Archery", "Sneaking", "Hand-to-hand combat"],
};

function addSkills(hero, ...newSkills) {
  const uniqueSkills = [...new Set([...hero.skills, ...newSkills])];
  return { ...hero, skills: uniqueSkills };
}
console.log("exe 19.7: ");
const updatedHeroDetails = addSkills(
  heroStats,
  "Archery",
  "Stealth",
  "Eagle Eye"
);
console.log(updatedHeroDetails);

// 8
const questLog = [
  ["Defeat the dragon", "Rescue the princess"],
  ["Rescue the princess", "Explore the ancient ruins"],
  ["Explore the ancient ruins", "Discover the hidden treasure"],
];

console.log([...new Set(questLog.flat())]);

// 9
const adventurers = [
  { name: "Bilbo", favorites: ["Find the ring", "Join the dwarves"] },
  { name: "Frodo", favorites: ["Destroy the ring", "Visit Rivendell"] },
  { name: "Aragorn", favorites: ["Protect the hobbits", "Serve the king"] },
];

function extractFirstFavoriteQuests(adventurers) {
  return adventurers.map(({ name, favorites }) => ({
    name,
    firstFavoriteQuest: favorites[0],
  }));
}
console.log(extractFirstFavoriteQuests(adventurers));

// 10
const quests = [
  { name: "Defeat the dragon", difficulty: 8 },
  { name: "Rescue the princess", difficulty: 5 },
];
