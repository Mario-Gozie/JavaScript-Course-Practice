"use strict";

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint)

1. Loop over the array containing the dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. ( The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose).

3. Create an array containing all owners of dogs who eat too much (`ownersEatTooMuch`) and an array with all owners of dogs who eat too little (`ownersEatTooLittle`).

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Micheal's dogs eat too little"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether ther is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (Keep in mind that the portion inside the array's object.)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them
HINT 2: Being wirhin a range of 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

const dogs = [{weight:22, curFood: 250, owners: [`Alice`, `Bob`]},{weight:8, curFood: 200, owners: [`Matilda`]},{weight:13, curFood: 275, owners: [`Sarah`, `John`]},{weight:32, curFood: 340, owners: [`Micheal`]}]

GOOD LUCK

*/

// SOLUTION

// TASK 1
// CREATING THE RECOMMMENDED FOOD PROPERTY FOR EACH OF THE DOGS.

const dogs = [
  { weight: 22, curFood: 250, owners: [`Alice`, `Bob`] },
  { weight: 8, curFood: 200, owners: [`Matilda`] },
  { weight: 13, curFood: 275, owners: [`Sarah`, `John`] },
  { weight: 32, curFood: 340, owners: [`Micheal`] },
];

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

// TASK 2
// FINDING SARAH'S DOG TO FIND OUT IF IT IS EATING THE RECOMMENDED FOOD.

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah")); // this will return tha arry that containds sarah

console.log(dogSarah);

// Logging to the console if sarah's dog is eating too much

console.log(
  `sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// TASK 3
// Here I first fitered for dogs that have eaten more than the recomended. then I used map to get an array of the owners. then finally used map to get a one level array. Remember that a flatMap can also be used in this situation.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .map((dog) => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

// AN ARRAY OF DOGS THAT EAT TOO LITTLE, I WILL USE FLATMAP THIS TIME

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
//   .flat();

console.log(ownersEatTooLittle);

// TASK 4
// Creating a sting based on the arry we created.

// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Micheal's dogs eat too little"

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// TASK 5

// checking for dog eting exact amount of food.

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// TASK 6

// To check for dogs eating Okay food.

const checkEatingOkay = (
  dog // arrow function created for checking eating Ok.
) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// Checking for dogs eating an OKAY amount of food.
console.log(dogs.some(checkEatingOkay));

// TASK 7

// Presenting an arary of the dog eating an Okay food
console.log(dogs.filter(checkEatingOkay));

// TASK 8
// Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood); // remember that slice method is used to create a new array of existing array. so in this case, we have a new array from the original array so we can sort based on recommended food to prevent the original array from being affected. Remember that sort method affects original array.

console.log(dogsSorted);
