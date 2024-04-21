// 14 - Loops;

console.log("exe14.1");
// // 1. Calculate Total Player Experience
// for loops
const experiencePoints1 = [100, 150, 75];
let totalPoints = 0;
for (let i = 0; i < experiencePoints1.length; i++) {
  totalPoints += experiencePoints1[i];
}
console.log(totalPoints);

// for in loops
const experiencePoints2 = [100, 150, 75];
let totalPoints2 = 0;
for (let points in experiencePoints2) {
  totalPoints2 += experiencePoints1[points];
}
console.log(`for in -totalPoints2: ${totalPoints2}`);

// forEach
const experiencePoints3 = [100, 150, 75];
let totalPoints3 = 0;

experiencePoints3.forEach(sum);

function sum(num) {
  totalPoints3 += num;
}
console.log(`forEach: " ${totalPoints3}`);

// for of loop
const experiencePoints4 = [100, 150, 75];
let totalPoints4 = 0;
for (let num of experiencePoints4) {
  totalPoints4 += num;
}
console.log(`for of loop : " ${totalPoints4}`);

// while loop
const experiencePoints5 = [100, 150, 75];
let totalPoints5 = 0;
let i = 0;

while (i < experiencePoints5.length) {
  totalPoints5 += experiencePoints5[i];
  i++;
}
console.log(`while loop : " ${totalPoints5}`);

console.log("exe14.2");
const questTitles2 = ["Quest 1", "Quest 2", "Quest 3"];
for (let i = 0; i < questTitles2.length; i++) {
  if (questTitles2[i] === "Quest 2") {
    console.log(`index ${i}`);
  }
}

console.log("exe14.3");
// // 3. List Enemies Above Health Threshold
const enemyHealths3 = [80, 120, 65];
for (let i = 0; i < enemyHealths3.length; i++) {
  if (enemyHealths3[i] > 100) console.log(enemyHealths3[i]);
}

console.log("exe14.4");
// // 4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];
let increaseRewarsd = [];
for (let i = 0; i < questRewards4.length; i++) {
  increaseRewarsd.push(questRewards4[i] + 20);
}
console.log(increaseRewarsd);

console.log("exe14.5");
// // 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
let count = 0;
for (let i = 0; i < questRewards5.length; i++) {
  if (questRewards5[i] === specificReward5) {
    count++;
  }
}
console.log(count);

console.log("exe14.6");
// // 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 75];
const threshold = 100;
for (let i = 0; i < questChallenges6.length; i++) {
  console.log(questChallenges6[i] > 100);
}

// // 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75];
let highestIndex = [0, ,];
for (let i = 0; i < questRewards7.length; i++) {
  highestIndex =
    highestIndex[0] < questRewards7[i] ? [questRewards7[i], i] : highestIndex;
}
console.log(highestIndex);

// // 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];

// // 9. Calculate Total Experience from Quest Matrix
// const questExperienceMatrix9 = [
//   [100, 200],
//   [150, 175],
//   [120, 250],
// ];

// // 10. Find the Quest with Highest Experience in Each Category
// const questExperienceMatrix10 = [
//   [100, 200],
//   [150, 175],
//   [120, 250],
// ];

// // 11. Count High-Difficulty Quests in Each Category
// const questDifficultyMatrix11 = [
//   [5, 7],
//   [8, 6],
//   [9, 7],
// ];

// // 12. Sum of Rewards for High-Reward Quests by Category
// const questRewardsMatrix12 = [
//   [50, 200],
//   [300, 175],
//   [120, 500],
// ];

// // 13. Average Health of Enemies by Type
// const enemyHealthMatrix13 = [
//   [80, 120],
//   [60, 90],
//   [200, 150],
// ];
