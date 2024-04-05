"use strict";

/* Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate teh average age of the dogs in their study

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1) Calculate the dog age in human years using the following formula: if the dog is <= 2 yeears old, humanAge = 2 * dogAge. if the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2) Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3) Calculate the average human age of all adult dogs (you should already know from other challenges how to calculate averages 😍)
4) Run the function for the both test datasets.

TEST DATA 1: [5,2,4,1,15,8,3]
TEST DATA 2: [16,6,10,5,6,1,4]

GOOD LUCK 😊*/

const calcAverageHumanAge = function (dogArr) {
  // First task
  const humanAge = dogArr.map((dogAge) => {
    if (dogAge <= 2) {
      return dogAge * 2;
    } else {
      return 16 + dogAge * 4;
    }
  });

  // Second task
  const excludeDog = humanAge.filter((humAge) => humAge >= 18);

  //Third task
  const averageExclDogs =
    excludeDog.reduce((acc, exdog, i, arr) => acc + exdog, 0) /
    excludeDog.length;
  return averageExclDogs;
  // Task three alternative a nore complex way.

  //   const averageExclDogs = excludeDog.reduce(
  //     (acc, exdog, i, arr) => acc + exdog / arr.length,
  //     0
  //   );
  //   return averageExclDogs;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// CALCULATING AVERAGE WITH ARROW FUNCTIONS AND CHAINING.

const arrowAverage = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); //dividing age by length of current array will give you average.
const av1 = arrowAverage([5, 2, 4, 1, 15, 8, 3]);
const av2 = arrowAverage([16, 6, 10, 5, 6, 1, 4]);
console.log(av1, av2);
