"use strict";

///////////////////////////////////////////////////BANKIST APP.

// THIS IS NOT SUPPOSED TO BE HERE BUT I NEED IT TO BE HERE BECAUSE IT IS A REAL CHALLENGE.

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

// CREATING A USER NAME (STW) WITH "Steven Thomas Williams"

const user = "Steven Thomas Williams";

const createUsername = function (user) {
  const userArr = user.toLowerCase().split(" ");
  //   console.log(userArr); // Not necessay. I just used it to check my code.
  const arrayFirstLetters = userArr
    .map((eachName) => eachName[0])
    .join("") //the Join here desolves the array. you remember a map gives an array right?. note that this join has to come after the closing of the map method. the map method has to finish its job and return an array before you can join
    .toUpperCase(); // the upper case here keeps the username in upper case.
  console.log(arrayFirstLetters);
};

createUsername(user);

// ALTERNATIVE
console.log(`-------IN A CLENER FORMAT---------`);

const username = user
  .toLowerCase()
  .split(" ")
  .map(function (name) {
    return name.at(0); // Using the at method here for index.
  })
  .join("") // note that this join has to come after the closing of the map method. the map method has to finish its job and return an array before you can join
  .toUpperCase();

console.log(username);

console.log(`-------ALTERNATIVE WITH ARROW FUNCTION ---------`);

const usernam = user
  .toLowerCase()
  .split(" ")
  .map(
    (name) => name.at(0) // Using the at method here for index.
  )
  .join("") // note that this join has to come after the closing of the map method. the map method has to finish its job and return an array before you can join
  .toUpperCase();

console.log(usernam);

// LET ME NOW MAKE IT MORE COMPLEX AND CREATE A USERNAME FOR EACH ACCOUNT IN THE ACCOUNT ARRAY. IN OTHER WORDS, CREATE A USERNAME PROPERTY FOR EACH OBJECT IN THE ACCOUNTS ARRAY.

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner // this is the point where the new property is created.
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("") // note that this join has to come after the closing of the map method. the map method has to finish its job and return an array before you can join
      .toUpperCase();
  });
};

createUsernames(accounts);

// TO SEE IF WE ACTUALLY CREATED A USERNAME FOR EACH ACCOUT, LET US LOG THE ACCOUNTS TO THE CONSOLE

console.log(accounts); // This will create username as a property for each account. if you expand the array of objects on the console.
