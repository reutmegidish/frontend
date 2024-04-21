// 11.1
const playerHealth = 9;
playerHealth > 10
  ? console.log("player is strong")
  : console.log("player is weak");

if (playerHealth > 10) console.log("player is strong");
else console.log("player is weak");

// 11.2
const playerGold = 10;
playerGold >= 1 && playerGold <= 100
  ? console.log("Rich player")
  : console.log("Poor player");

if (playerGold >= 1 && playerGold <= 100) console.log("Rich player");
else console.log("Poor player");

//   11.3
const weather = "rainy";
const timeOfDay = "morning";
timeOfDay === "morning" && weather !== "rainy"
  ? console.log("Continue adventure")
  : console.log("Seek shelter");

// if (timeOfDay === "morning") {
//   if (weather !== "rainy") console.log("Continue adventure");
//   else {
//     console.log("Seek shelter");
//   }
// } else {
//   console.log("Seek shelter");
// }

// 11.4
const playerWeapon = "uzi";
const enemyWeapon = "Kalashnikov";

playerWeapon === enemyWeapon
  ? console.log("weapons clashing!")
  : console.log("Advantage");

//   11.5
const plaeraAge = 18;
isPlayrAgeBetween13to19 =
  plaeraAge >= 13 && plaeraAge <= 19 ? console.log(true) : console.log(false);

isAgeAloowToPlay = plaeraAge >= 13 && plaeraAge <= 19;
console.log(isAgeAloowToPlay);

// 11.6
const gameScore = 15;
gameScore >= 50 ? console.log("Hige score") : console.log("Low score");

// 11.7
const numOfEnemies = 3;
numOfEnemies % 2 === 0
  ? console.log("Even number of enemies")
  : console.log("Odd number of enemies");

//   11.8
const playerAge = 13;
const characterAge =
  plaeraAge < 12
    ? "Yungling"
    : playerAge >= 13 && playerAge <= 19
    ? "Adolscent"
    : playerAge > 20
    ? "Adult"
    : undefined;

console.log(characterAge);

// 11.9
const battleSkill = 5;
battleSkill > 70 ? console.log("Skilled warrior") : console.log("Train harder");

// 11.10
const seaeeionDuration = 151;
if (seaeeionDuration > 150) console.log("Maraton");
else if (seaeeionDuration <= 150 && seaeeionDuration >= 90)
  console.log("Modrate");
else if (seaeeionDuration < 90) console.log("Short");

// 11.11
const totalPoints = 45;
const usePoints = 30;
if (totalPoints - usePoints > 0) {
  console.log("Poinnts available");
} else console.log("Out of points");

// 11.12
const playerAge1 = 15;
const questAgeRestriction = 18;
if (playerAge1 < questAgeRestriction) {
  console.log("Not alowed to play");
} else console.log("Alowed to play");

// 11.13
const dayOfTheWeek = "sunday";
if (dayOfTheWeek === "sunday" || dayOfTheWeek === "saturday")
  console.log("Specisl event happening!");
else console.log("Regular gameplay");

// 11.14
const gameSettingYear = 1200;
if (gameSettingYear >= 900 && gameSettingYear <= 1500)
  console.log("Medival era settings");
else console.log("Different historical era");

// 11.15
const charcterClass = "Warrior";
const characteLevel = 15;
if (charcterClass === "Warrior" && characteLevel >= 10)
  console.log("Powerful warrior");
else console.log("Average charcter");

// 11.16
const playerHealth1 = 70;
const enemyCount = 2;
if (playerHealth1 > 50 && enemyCount < 3) console.log("ready for battle");
else console.log("Proceed with caution");

// 11.17
const questProgress = 100;
const questDifficulty = 3;
if (questProgress === 100 && questDifficulty <= 5)
  console.log("Quest completed");
else console.log("Quest in progress");

// 11.18
const inventorySize = 80;
if (inventorySize >= 90) console.log("Invenoiry akmost full");
else console.log("Planty of space in the inventory");

// 12.1
const dayOfTheWeek2 = 3;

switch (dayOfTheWeek2) {
  case 1:
    console.log("start your week with a game ");
    break;
  case 2:
    console.log("your second day! nice!");
    break;
  case 3:
    console.log("3.Good work!");
    break;
  case 4:
    console.log("Contunue, youre on the right way!");
    break;
  case 5:
    console.log("Good work!");
    break;
  case 6:
    console.log("Exelent!");
    break;
  case 7:
    console.log("Good job!");
    break;
  default:
    console.log("start to play");
}

// 12.2
const themeColor = "light";
switch (themeColor) {
  case "light":
    console.log("light");
    break;
  case "dark":
    console.log("dark");
    break;
  case "dungeon":
    console.log("dungeon");
    break;
  default:
    console.log("Unsupported color theme. Using default theme.");
    break;
}

// 12.3
const questStatus = "new";
switch (questStatus) {
  case "new":
    console.log("You have new quests awaiting!");
    break;
  case "unread":
    console.log("You have unread quests awaiting!");
    break;
  case "unopend":
    console.log("You have unopend quests awaiting!");
    break;
}

// 12.4
const playerLevel = "Intermedate";

switch (playerLevel) {
  case "Beginner":
    console.log("Beginner");
    break;
  case "Intermedate":
    console.log("Intermedate");
    break;
  case "Advanced":
    console.log("Advanced");
    break;
}

// 12.5
const inventoryItem = "sword";
switch (inventoryItem) {
  case "potin":
    console.log("potin");
  case "sword":
    console.log("sword");
  case "shield":
    console.log("shield");
}

// 12.6
const playerScore = 69;
switch (true) {
  case playerScore >= 90:
    console.log("Legend");
    break;
  case playerScore >= 70 && playerScore <= 89:
    console.log("Champion");
    break;
  default:
    console.log("Rookie");
    break;
}

// 12.7
const questMonth = 7;
switch (questMonth) {
  case 1:
    console.log("Ice Kingdom Adventure");
    break;
  case 2:
    console.log("Valentine's Day Special");
    break;
  case 3:
    console.log("Spring Blossom Hunt");
    break;
  case 4:
    console.log("Easter Egg Hunt");
    break;
  case 5:
    console.log("Flower Festival Celebration");
    break;
  case 6:
    console.log("Summer Solstice Quest");
    break;
  case 7:
    console.log("Beach Party Bonanza");
    break;
  case 8:
    console.log("Underwater Expedition");
    break;
  case 9:
    console.log("Harvest Festival Quest");
    break;
  case 10:
    console.log("Haunted Mansion Mystery");
    break;
  case 11:
    console.log("Turkey Trot Adventure");
    break;
  case 12:
    console.log("Frosty Festivities");
    break;
  default:
    console.log("invalid month");
}

// 12.8
const playerInput = 5;
switch (typeof playerInput) {
  case "string":
    console.log("The input is a string.");
    break;
  case "number":
    console.log("The input is a number.");
    break;
  case "boolean":
    console.log("The input is a boolean.");
    break;
  default:
    console.log("The input is of an unknown type.");
    break;
}

// 12.9
const updateMonth = 6;
switch (updateMonth / 3) {
  case 1:
    console.log("Q1");
    break;
  case 2:
    console.log("Q2");
    break;
  case 3:
    console.log("Q3");
    break;
  case 4:
    console.log("Q4");
    break;
  default:
    console.log("Invalid month for update");
}
