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

// ANOTHER VIDEO (VIDEO 138) A CHALLENGE

/*
Julia and kate are doing a study on dogs. so each of them asked 5 dog owners about theeir dog's age and stored the data into an array (one array for each) for now, they are just interested in knowing whether the dog is an adult or a puppy. A dog is an adult of it is at least 3 years old, and it is a puppy if it is less than 3 years old.

Create a funcion 'checkDogs', which accept two arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things.

1. Julia found out that the owners of the FIRST  and LAST TWO dogs actually have cats, not dogs! so create a shallow copy of julia's array, and remove the cat ages from that copied array (because it's is a bad practice to mutate function parameters.)

2. Create an array with both Julia's (corrected) and Kate's data.

3. For each remaining dog, log to the console whether it's adult ('Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐕‍🦺")

4. Run the function for both test datasets.

HINT: Use tools from all lectures in this section so far.😊

TEST DATA 1: Julia's data [3,5,2,12,7], Kate's data [4,1,15,8,3]
TEST DATA 2: Julia's data [9,16,6,8,3], Kate's data [10,5,6,1,4]

GOOD LUCK 😊
*/

// NB: I DID THIS TASK WITH THREE TYPES OF FOR LOOP WHICH ARE FOREACH, FOR OF, AND THE NORMAL FOR LOOP.

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedJuliaDogs = dogsJulia.slice(); //This creates a new copy of the dogsJulia

  //Alternatively, you can use the spread operator. see below!
  // const corectedJuliaDogs = [...dogsJulia];

  //Remember that it was found out that the dogsJulia was wrong because the first and last 2 were cats. so let me correct it better. using the splice method. remember that it mutates the original array.

  correctedJuliaDogs.splice(0, 1); // Here I am saying I want to remove element at position 0 and just only one element in total.
  correctedJuliaDogs.splice(-2, 2); // Here I am saying I want to remove element at position -2 and just only tw0 elements in total.

  // ALTERNATIVE.
  // the whole splice process of creating a new correct dog age array of dogsJulia would have be done using slice method in one step and put into a new variable. see below!

  // const correctJuliaDogs = dogsJulia.slice(1, -2) // this simply says I want to slice from the second element to the last two. remember that arrays are zero based and that the last value in a slice is not always selected.

  //Joining the dogsJulia and dogsKate

  const dogs = correctedJuliaDogs.concat(dogsKate);

  // Alternatively, I can join all these with the spread operator. see below!

  // const dogs = [...correctedJuliaDogs, ...dogsKate];

  // LOOPING USING FOREACH METHOD.

  console.log("---------WITH FOREACH-----------");

  dogs.forEach(function (dog, index, wholeArray) {
    dog >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${dog} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy 🐕‍🦺`);
  });

  // ALTERNATIVE

  console.log("---------WITH FOR OF-----------");

  // LOOPING USING THE FOR OF LOOP

  for (const [i, dog] of dogs.entries()) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐕‍🦺`);
    }
  }
  // ANOTHER ALTERNATIVE
  // LOOPING WITH NORMAL FOR

  console.log("---------WITH NORMAL FOR LOOP-----------");

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i] >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogs[i]} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐕‍🦺`);
    }
  }
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// SOME BIG ARRAY METHODS USED IN JAVASCRIPT. (THESE METHODS ARE VERY IMPORTANT.)
// THEY ARE MAP FILTER AND REDUCE

// MAP: Map is another method that can be used to loop over arrays. it is similar to the FOREACH Method but it creates a brand new array based on the original array. in other words, it takes an array, loops over it, apply a callback function specified in our code, and then return an array. A good example is multiplying each element by 2 and returning an array  of all the values.

// FILTER: This is used to filter for elements in the original array which satisfy a particular condition eg, looking for elements greater than 2.

// REDUCE: This is used to boil down all elemetns of the original array into one single value. an example of this is to add all elements of an array together. for the example of adding all numbers in an array, This requires specifying an operation that has an accumulator variable. so as the reduce method loop over the array, it keeps adding the current method onto the accumulator until the end of the loop, you have the total sum of the elements.

// MAP METHOD IN PRACTICE. converting the movement data to dollars. we area assuming that it is in Euro and that 1 Euro = 1.1 dollars.
// Remember that this will give a new array.

const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementssUsd = movementss.map(function (movs) {
  // once you understand the FOREACH method, both map, filter and reduce will be easier to uncerstand because all takes a callback function.
  return movs * euroToUsd;
});

console.log(movementssUsd);

// simplifying the Map method with Arrow function

console.log(`------------With Arrow Function-------------`);

const moveUsd = movementss.map((movs) => movs * euroToUsd); // removing the function keyword, the curly bracketas and the return keyword has gone a log way in reducing the code.

console.log(movementssUsd);

// ALTERNATIVELY, I CAN DO THE SAME JOB THE MAP DID, USING A FOR LOOP
console.log(`------------With Normal For loop-------------`);

let usdArr = [];

for (const movs of movementss) {
  usdArr.push(movs * euroToUsd);
}

console.log(usdArr);

// JUST LIKE FOREACH METHOD, THE MAP METHOD CAN SHOW VALUES INDEX AND ARRAYS see below!
// remember that with maps, you return an array and store it into a variable. it is completely accpetable to have two return statements in one function as long as only one is executed at a time

const movesMapArray = movements.map((movs, index, array) => {
  // THE ARRAY ARGUMENT IS NOT NECESSARY HERE SO I CAN EQUALLY REMOVE IT.
  if (movs > 0) {
    return `movement ${index + 1}: You deposited ${movs}`; // Here, we won't log to the console, we have to return the string so we can get an array of strings. remember maps, return array.
  } else {
    return `movement ${index + 1}: You withdrew ${Math.abs(movs)}`;
  }
});

console.log(movesMapArray);

// THE WHOLE IF STATEMENT WITHIN THE APOVE MAP FUNCTION CAN BE MAKDE SHORTER BECAUSE THE TWO IF STRING ARE SAME EXCEPT FOR FEW THIS, WHICH IS WITHDREW AND DEPOSITED. SEE ABOVE!

console.log("----------- Making thing simpler-------------");

const movesMapArr = movements.map((movs, index, array) => {
  // THE ARRAY ARGUMENT IS NOT NECESSARY HERE SO I CAN EQUALLY REMOVE IT.
  return `movement ${index + 1}: You ${
    movs > 0 ? "deposit" : "withdrew"
  } ${Math.abs(movs)}`; // The Math.abs() will remove any negative sign or positive sign (positive sign won't show anyway)
});

console.log(movesMapArr);

// NEXT VIDEO FILTER METHOD.

// FILTER METHOD. This selects elements based on specified conditions and return an array.

console.log(`-------FILTER IN AN ARROW FUNCTION---------`);

const deposit = movements.filter((mov) => mov > 0); // I am saying retrun only values that are greater than 0

console.log(deposit);

// PUTTING THE ABOVE FILTER IN A MORE EXPLICIT FUNCTION  see below!

console.log("-------FILTER IN EXPLICIT FUNCTION---------");

const depo = movements.filter(function (mov) {
  return mov > 0;
});

console.log(depo);

// FILTERING WITH FOR OF LOOP

const deposs = function (movs) {
  let depos = [];

  for (const depo of movs) if (depo > 0) depos.push(depo);
  console.log(depos);
};

deposs(movements);

// CREATING AN ARRAY OF WITHDRAWALS.

console.log(`---WITHDRAWAL WITH TRADITIONAL FOR LOOP-----`);

const getWitdrawals = function (wtdl) {
  let withdrawals = [];

  for (let i = 0; i < wtdl.length; i++) {
    if (wtdl[i] < 0) withdrawals.push(wtdl[i]);
  }
  console.log(withdrawals);
};

getWitdrawals(movements);

// GETTING WITHDRAWAL WITH THE FILTER METHOD.

console.log(`---WITHDRAWAL WITH FILTER-----`);

const gettingWitdraws = movements.filter((mov) => mov < 0);

console.log(gettingWitdraws);

// GETTING WITHDRAWAL WITH FOR OF LOOP.

console.log(`------WITHDRAWAL WITH FOR OF LOOP ------`);

const arrWithdrawal = function (movs) {
  const withdrawals = [];

  for (const mov of movs) if (mov < 0) withdrawals.push(mov);
  console.log(withdrawals);
};

arrWithdrawal(movements);

// NEXT VIDEO.
// REDUCE METHOD. Trying the reduce method with the movements array. You remember that reduce method reduce the content of an array to a single value. see below!

console.log(`-----------REDUCE METHOD-------------`);

console.log(movements);

//NOTE it is important to note that the first argument of the reduce funtion is known as the accumulator. while as in the ForEach, Filter and Map, it is usually the current value or the individual value of the array. in other word, reduce function can have 4 arguments because of the accumulator while ForEach, Filter and Map can only have 3

// here, the accumulator (acc) is the sum of previous values. which is the value we will keep adding the current (curr) value to. in other words, we will keep adding the current value to the accumulator.
const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc + curr; // returning updataed accumulator plus the current value
}, 0); // The Zero (0) here states that the accumulator should start from 0. in otherwords, the starting value of the accumulatot should be 0.

console.log(balance);

console.log(`--------REDUCE WITH ARROW FUNCTION-------`);

const balan = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

console.log(balan);
// REDUCE WITH THE TRADIIONAL FOR LOOP
console.log(`-----REDUCE ALTERNATIVE WITH FOR LOOP----`);

const totalBalance = function (movs) {
  let bal = 0;

  for (let i = 0; i < movs.length; i++) {
    bal += movs[i];
  }
  console.log(bal);
};

totalBalance(movements);

// REDUCE WITH NORMAL FOR OF LOOP

console.log(`------REDUCE WITH FOR OF LOOP---------`);
const total = function (movs) {
  let bal = 0;

  for (const mov of movs) {
    bal += mov;
  }
  console.log(bal);
};

total(movements);

// OTHER THINGS THAT CAN BE DONE WITH THE MOVEMENT METHOD.
// GETTING MAXIMUM VALUE WITH REDUCE.
console.log(`------MAXIMUM VALUE------`);

console.log(movements);

const maxMovement = movements.reduce((accm, curr) => {
  if (accm > curr) {
    return accm;
  } else {
    return curr;
  }
}, movements[0]); // remember that there must be an initial value which is the first value of the array.

console.log(maxMovement);

console.log(`------MINIMUM VALUE------`);

const minMovement = movements.reduce((accm, curr) => {
  if (accm < curr) {
    return accm;
  } else {
    return curr;
  }
}, movements.at(0));

console.log(minMovement); // remember that there must be an initial value which is the first value of the array.

// MAGIC CHAINING.
// LET US ASSUME THAT WE WANT TO TAKE ALL DEPOSIT MOVEMENT, CONVERT THEM FROM EURO TO DOLLARS, AND ADD THEM UP.
// You can chain a these methods to the other if the first one returns an array.
// to know if you are using the write array while chaining methods, you can log the array arugument to the console. you remember that array is one of the arguements when working with these methods.
const convertToDollars = function () {
  const eurToUsd = 1.1;
  const dollarEqi = movements
    .filter((mov) => mov > 0)
    .map((depo) => depo * eurToUsd)
    .reduce((acc, usdval) => acc + usdval, 0);
  console.log(dollarEqi);
};

convertToDollars(movements);

// NEXT VIDEO. FIND METHOD.
// This takes a callback function returns the FIRST element of an array that meets a condition. see below!
// Finding the first withdrawal
const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(firstWithdrawal);

// Please note that filter returns all the element that met a condition while find method retruns the first one. and that filter retruns an array while find returns an element

// BETTER USE OF THE FIND METHOD
// finding the contents of an array based on some properties of the object.
// finding account with owner name as Jessica Davis
// This is more like a situation when you just know only the name of a person and you want to see other properties of the person. you use the find method to loop over the array and print to the console only account that contains the matching name.
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// TRYING THE ABOVE PROCESS WITH FOR OF LOOP

const firstwithdrl = function () {
  for (const acc of accounts) {
    if (acc.owner === "Jessica Davis") {
      console.log(acc);
    }
  }
};

firstwithdrl(accounts);

// NEXT VIDEO: FINDINDEX check the backist project that is where it was used.

// NEXT VIDEO: SOME AND EVERY METHODS.

// let us first look at the includes methos in the past.
console.log(movements);
console.log(movements.includes(-130)); // Here we can see that include returns  a bulean for exactly equal value.
// You can rewrite the -130 condition above with some. see below!
const movInc = movements.some((mov) => mov === -130);
console.log(movInc);

const anyDeposits = movements.some((mov) => mov > 0); // checkinig there are some deposits.
console.log(anyDeposits); // in other words, some means any.

// checking for deposites above 500
const depoabove500 = movements.some((mov) => mov > 500);
console.log(depoabove500);

// THE EVERY METHOD. This returns a boolean when all values meet the specified conditon. see below.
console.log(movements.every((mov) => mov > 0)); // This will return a false because all values in the movement array are not positive.

// But there is an account that has only positive values. see below!
console.log(account4.movements);

// let me now use the every method on it.

console.log(account4.movements.every((mov) => mov > 0)); //This is true.

// NOTE: so far, we have written our callback functions directly. we could put them into a variable and they will call when needed. see below.
const deposits = (mov) => mov > 0;
console.log(movements.every(deposits));
console.log(movements.filter(deposits));
console.log(movements.some(deposits));

// NEXT VIDEO (FLAT AND FLATMAP)
// assuming we have an array with arrays in it and we want to make it just one array in the same level. this is where vlat comes to play. in other words nested array.

const arrs = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrs.flat()); // This makes the nested array, one single array without a callback function.

// what if you have a deeper level array. see below!
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]; // So here we have an array of 2 levels. thats an array inside an array, inside another array

// Lets try to flat it
console.log(arrDeep.flat()); // This only flattens for one level. This shows that flat method goes only deep for one level How do we solve this problem?
// we need to specify depth arguement or how many level of flattening we want in the flat method to solve this problem. see below!

console.log(arrDeep.flat(2));

// How useful is the flat method? well, assuming the bank wants to calculate the overall balance of all the movement of all the whole account, and there is an array of acccount called accounts, which has a movement property representing transactions. how do wee use this info to get the total transaction by the bank? see below!

// let me do this with a function

const calcTotalTransaction = function (accs) {
  // so basically all I am saying here is go into each account (loop) of the accounts array, get all its movement array into a single array (remember map creates an array) then flat it, ad reduce to give me the total balance by the bank.
  const total = accs
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
  return total;
};

console.log(calcTotalTransaction(accounts));

// USING THE FLATMAP METHOD TO CARRY OUT SAM TASK ABOVE
// But these things can be done with a new method known as flatmap see beloq!
const calcTotalMovement = function (accs) {
  // so basically all I am saying here is go into each account (loop) of the accounts array, get all its movement array into a single array (remember map creates an array) then flat it, ad reduce to give me the total balance by the bank.
  const total = accs
    .flatMap((acc) => acc.movements) // please note that flatMap uses camel case which is the right case used in Javascript. not FLATMAP OR flatmap (uppercase or lowercase.) also note that flatmap does not go beyond one level of array. if you need to go beyond one level, use flat() method
    .reduce((acc, mov) => acc + mov, 0);
  return total;
};

calcTotalMovement(accounts);
// NEXT VIDEO: The sort Method. This is used to sort values in an array. it equally mutate the original array.

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // The sort method perfectly works on strings.
console.log(owners); // This shows that the original array was mutated so we have to be very careful this method.

// Here is the problem with numbers.

console.log(movements);
console.log(movements.sort()); // the sort method does not sort numbers with ease like in the case of string. what happened here is that the method converted the numbers to string and ordered them like the ones that start with 1 will be before the ones that start with two and the one that starts with 2 will be before the one that starts with 3. so this is how it works by default.

// LET US TACKLE THIS.

// Think about A and be arguements in the below sort method as two consecutive numbers.
// return < 0, A, B. here, I am saying if a value < 0 is returned, then A will be sorted before B
// return > 0,  B,A. here I am saying if a value > 0 is returned, then B will be sorted befor A
// so in gerneral, we are sorting in acending order see below
// in general, all we are doing is to switch orders.

// ASSCENDING ORDER.
movements.sort((a, b) => {
  if (a > b) return 1; // code implimentation of if a is greater that b return a first. mind you, the 1 can be any positive number.
  if (a < b) return -1; // if a is less than b, return b first. mind you, the -1 can be any negative number
});

console.log(movements);

// ALTERNATIVELY
movements.sort((a, b) => a - b); // Here is the trick. we know that if a is greater than b, we will return a positive number. remember the positive number does not need to be 1. it can be any number. just something greater than b

//SORTING IN DECENDING ORDER.
// This is just abount changing what should be returned in each case.
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(movements);

// DECENDING ALTERNATIVE.

movements.sort((a, b) => b - a);
console.log(movements);

// NEXT VIDEO
// WORKING WITH ARRAYS
// Previous ways we created arrays

const arrsr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // this will create a new array with 7 empty spaces. This shows that when we use the new Array function with only one value inside, it creates spaces of that value that could be filled later. this can be done with the fill method
console.log(x);

// x.fill(1); //  This fills the x arry with 1 seven times
// You can also specify where you want the fill method to start filling. i could be from index 3 see below.

// x.fill(1, 3); // here 3 is the begin parameter

// You can also specify the end parameter but know that just like in slice, there wont be value for that positon of the end parameter. lets use index 5 as an example
x.fill(1, 3, 5);

console.log(x);

// the fill method mutates the original array

arrsr.fill(23, 4, 6); // here I am saying, put 23 at position 4 - 6. remember that position 6 wont be filled.
console.log(arrsr);

// What if we want to create this array [1, 2, 3, 4, 5, 6, 7] Progamatically? we use the Array.from. The Array.from() takes a callback function
const y = Array.from({ length: 7 }, () => 1); // so here, I a saying create an array of length 7 and then, using an arrow function, I said put only 1 into the indexes.
console.log(y); // This shows the arry of 1

const z = Array.from({ length: 7 }, (curr, i) => i + 1); //Remember that the Array.from takes a callback function. and it is just like that in map funtion. here I am simply saying, take the current and index, then return index + 1

// You can still remove that "curr" argument because it is not need here. in such case, you replace it with an underscore. "_" see below!
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// MORE USE CASES OF THE ARRAY.FROM() FUNCTION.
// array.from is very valuable when creating arrays from other things. eg, maps and sets. Provided they are iterable.
// see the App code file for very good examples.

// LETS PRACTICE WITH ARRAY METHODS A BIT FIRST.

// Exercise 1 We want to calculate how much deposited in all the accounts in the bank

const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((deposit) => deposit > 0)
  .reduce((acc, deposit) => acc + deposit, 0);
console.log(bankDepositSum);

// The above can be done alternatively with flatmap

const AllBankDeposit = accounts
  .flatMap((acc) => acc.movements)
  .filter((deposit) => deposit > 0)
  .reduce((acc, deposit) => acc + deposit, 0);

console.log(AllBankDeposit);

// Execise 2: How many deposit of atleast 1000 dollars

const NumDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((deposit) => deposit >= 1000)
  .reduce((acc, curr, i, arr) => i + 1, 0); // Here, I am basically increasing the index to get the total transactions that were up to 1000. remember that the index starts at 0 for arrays. and that reduce method takes an index as an arguement.

console.log(NumDeposits1000);

// Alternative

const NumDepo1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((deposit) => deposit >= 1000).length;

console.log(NumDepo1000);

// Another Alternative

const NumDep1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0); // Here, I am saying if the count is greater than 1000, add 1 to the count. if not return count. Remember count is starting at 0

console.log(NumDep1000);

// EXERCISE 3: Creating a new object with the reduce method.
// create an object that contains all deposit and all withdrawal.

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, curr) => {
      curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr); //here I am saying if the current value is > than 0, add it to the deposits property of the sum arguement. if it is not, add it to the withdrawal property of the sum arguement.
      return sum; // when working with a function that has curly braces, you must explicitly use the return statement. but when you are not like in the tasks above, using an arrow function, it will be done automatically.
    },
    { deposits: 0, withdrawals: 0 }
  );

// in the above code, we can see that the object created is sum. whicih is the sums as a reduce argument. that is why we have sum.deposits and  sum.withdrawal.

console.log(sums);

// YOU CAN EVEN DISTRUCTURE THEM SEE BELOW.

const { depositss, withdrawalss } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, curr) => {
      curr > 0 ? (sum.depositss += curr) : (sum.withdrawalss += curr); //here I am saying if the current value is > than 0, add it to the deposits property of the sum arguement. if it is not, add it to the withdrawal property of the sum arguement.
      return sum; // when working with a function that has curly braces, you must explicitly use the return statement. but when you are not like in the tasks above, using an arrow function, it will be done automatically.
    },
    { depositss: 0, withdrawalss: 0 }
  );

console.log(depositss, withdrawalss);

// EXECISE 4: CREATING A FUNCTION THAT WOULD CAPITALIZE THE FIRST LETTER OF EVERY WORD, EXCEPT FOR SOME EXEPTIONS. see below!

// this is a nice title => This Is a Nice title.

const convertTitleCase = function (title) {
  const exceptions = [`a`, `an`, `the`, `and`, `but`, `or`, `on`, `in`, `with`];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map(
      (word) =>
        exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1) //Here I am simply saying. while looping over each word, if the word is included in the exception (remember the include method returns a boolean), dont capitalize else. capitalize the first letter and join others which starts from index 1.
    )
    .join(" "); // Here I am joining the array back with the space.

  return titleCase;
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
