const players = [
  {
    name: "Hero",
    health: 100,
    level: 1,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
  {
    name: "Warrior",
    health: 120,
    level: 2,
    location: "mountain",
    inventory: ["axe", "shield"],
  },
  {
    name: "Mage",
    health: 80,
    level: 3,
    location: "castle",
    inventory: ["staff", "spell book"],
  },
  {
    name: "Ranger",
    health: 90,
    level: 2,
    location: "forest",
    inventory: ["bow", "arrows"],
  },
  {
    name: "Thief",
    health: 70,
    level: 1,
    location: "cave",
    inventory: ["dagger", "lockpick"],
  },
];

// 18.1
const playersNames = players.reduce((playersName, player) => {
  playersName.push(player.name);
  return playersName;
}, []);

console.log(playersNames);

// 18.2
function getPlayerStage(playerObjects, minStage) {
  return playerObjects.reduce((stageArr, player) => {
    if (player.level > minStage) {
      stageArr.push({ level: player.level });
    }
    return stageArr;
  }, []);
}
console.log(getPlayerStage(players, 2));

// 18.3
function totalHealth(playerObjects) {
  return playerObjects.reduce((total, player) => {
    return (total += player.health);
  }, 0);
}
console.log(totalHealth(players));

// 18.4
function getNameLevel(playerObjects) {
  return playerObjects.reduce((arr, player) => {
    arr.push({ name: player.name, level: player.level });
    return arr;
  }, []);
}
console.log(getNameLevel(players));

// 18.5
function updatePlayerHealth(playerObjects, newHealth, playerName) {
  playerObjects.forEach((player) => {
    if (playerName === player.name) {
      player.name = playerName;
      player.health = newHealth;
    }
  });
  return playerObjects;
}
console.log(updatePlayerHealth(players, 150, "Hero"));

// 18.6
function filterByLocation(playerObjects, location) {
  return playerObjects.filter((player) => {
    return player.location === location;
  });
}
console.log("18.6: ");
console.log(filterByLocation(players, "forest"));

//  18.7
function getAveragePlayerLevel(playerObjects) {
  const { totalLevels, count } = playerObjects.reduce(
    (accumulator, player) => {
      if (typeof player.level === "number") {
        accumulator.totalLevels += player.level;
        accumulator.count++;
      }
      return accumulator;
    },
    { totalLevels: 0, count: 0 }
  );

  return count > 0 ? totalLevels / count : 0;
}

console.log(getAveragePlayerLevel(players));

// 18.8
console.log("18.8: ");
function sortByHealth(playerObjects) {
  const sortedHealth = playerObjects.sort((a, b) => b.health - a.health);
  return sortedHealth;
}

console.log(sortByHealth(players));

// 18.9
function getPlayersInventory(playerObjects) {
  return playerObjects.reduce((arr, player) => {
    if (player.inventory.length > 0) arr.push(player.inventory);
    return arr;
  }, []);
}
console.log(getPlayersInventory(players));
