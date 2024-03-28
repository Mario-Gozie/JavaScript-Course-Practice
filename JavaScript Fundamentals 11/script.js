"use strict";

///////////////////////////////////////////////////BANKIST APP.

// Data

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, -8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Elements

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimmer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTranfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginusername = document.querySelector("login__input--user");
const inputLogininpin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

///////////////////////////////////////////////////////////////// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////////////////////

// We know that methods are simply functions attached to objects and for arrays to have methods, it means they are objects.

let arr = ["a", "b", "c", "d", "e"];

// Slice Method: this takes part of an array without changing the original array.

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // this has the begining index as 2 aned the ending index as 4. but it will not print the value ant index 4.
console.log(arr.slice(-2)); // this will take the last two values of an array.
console.log(arr.slice(-1)); // this will take the last value of an array.
console.log(arr.slice(1, -2)); // this will take values from position 1 and ignore the last two values of an array.

// createing a shallow copy of an array using slice(). This will create the exact copy of the array. see below!
console.log(arr.slice());

// alternatively, this can be done using the spread operator.
console.log(...arr);

// SPLICE METHOD NB: this is different from slice.
// This works like slice but it changes the original array or mutate the array. see below!

console.log(arr.splice(2)); // this will remove all values from index 2 in the original array. see below to confirm. This shows that splice actually mutate the original array.
console.log(arr);
// splice plays an important role when you want to remove the last element/value of an array. see below!
console.log(arr.splice(-1));

// Redefining the array agiain

arr = ["a", "b", "c", "d", "e"];

// splice also takes a second arguement which is number of element or values you want to delete.

arr.splice(1, 3); //All I am saying here is start from positon 1 and remove 3 values from the original array. see result below!
console.log(arr);

// REVERSE METHOD

// reassigning the arr variable.
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"]; // Just assuming that we are working with this array and we need to reverse it.
console.log(arr2.reverse()); // this puts array in the right order, while mutating the original array. run the code below to see that arr2 was really changed.
console.log(arr2);

// CONCAT METHOD. This is used to concatenate two arrays. it does not mutate any of the original arrays.

const letters = arr.concat(arr2);
console.log(letters);

// Alternatively as done earlier, a spread operator can be used to concat two arrays as above. this does not mutate any of the original arrays. see below!
console.log([...arr, ...arr2]);

// JOIN METHOD

console.log(letters.join(" - "));

// THE NEW AT METHOD.

const arr3 = [23, 11, 64]; // creating a new array

console.log(arr3[0]); // selecting the value at position 0
//Alternatively, the above can be done with the at method.

console.log(arr3.at(0)); // here we are equally getting the value at postion 0.

// But why is the at method peculiar? Let us look at ways to get the last value of an array.

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); // the [0] takes the value of arr.slice(-1) out of the array. it is like saying, give me the first value after slicing.
console.log(arr.at(-1));

// The at method also works on strings. see below!

console.log("jonas".at(0));
console.log("jonas".at(-1));

// NEXT VIDEO. LOOPING OVER AN ARRAY WITH FOR EACH METHOD.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); // We use the Math.abs() here to take the absolute value. i.e removing the negative sign.
  }
}

// Ofcourse, teh solution above works perfectly. but let us yse the forEach method to achieve the same thing in an easier way.
console.log("---------FOREACH---------");
movements.forEach(function (moves) {
  // forEach method is a higher other function, that requires a callback function that tell it what to do. the forEach iterates over the content of the movements array, which are in this case the moves arguement in the callback function. and for each value, it executes the callback function it accepts.
  if (moves > 0) {
    console.log(`You deposited ${moves}`);
  } else {
    console.log(`You withdrew ${Math.abs(moves)}`);
  }
});

// WHAT IF WE NEED A COUNTER WHILE USING THE FOREACH METHOD.

// here is for the normal for loop.

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // We use the Math.abs() here to take the absolute value. i.e removing the negative sign.
  }
}

// TRYING IT OUT IN THE FOREACH METHOD. Now here, it is easier. the for each method can return the value, index and the array. what matters most is the order. The first arguement of the call back function is the element, the second arguement is the index while the last one is the entire array we are looping over.

movements.forEach(function (move, index, arr) {
  //these arguements can be given any name but the order is what really matters.
  if (move > 0) {
    console.log(`movement ${index + 1}: You deposited ${move}`);
  } else {
    console.log(`movement ${index + 1}: You withdrew ${Math.abs(move)}`);
  }
});

// WHEN SHOULD YOU USE ANY OF THE TWO (FOREACH AND FOR)? Well the continue and break does not work on the forEach at all. It will loop over the entire array and there is nothing that can be done about it.

// FOR EACH METHOD IN MAPS AND SETS.

// with a MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pounds sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// with a SET

const currenciesUnique = new Set(["USD", "GDP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique); // Remember that set takes only unique values.

// calling forEach on the set
currenciesUnique.forEach(function (value, key, whole) {
  console.log(`${key}: ${value}`); //This will print USD: USD, GDP: GDP, EUR: EUR. this is because a set has no key and its not ordered, so it equally has no index.
});
