"use strict";
// DEFAULT PARAMETERS IN FUNCTIONS.

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES6 method of giving default values to parameters in a function. This is more modern. This works only where there are no values specified for these parameters. default values can accept expression eg 199 * 2 or even paramters that were calculated BEFORE it. or even 199 * numPassengers.

  // ES5 way of giving default value.
  // numPassengers = numPassengers || 1; // Using the Or Operator to give default values to parameters in a function (numPassengers, price.). this is the old way of doing this.
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("CH202", 5);

// note that you can't skip a prameter. eg, giving flightNum, price without numPassenger. this way, the computer will see the second value as numPassenger even though it is price. see below.

createBooking("Lhig", 10000);

// The only trick to skiping a parameter is setting it as undefined, when it has a default value, it will take up the default value. see below.

createBooking("hdid", undefined, 485); //setting a prameter to undefined is just same as setting it to nothing.

// NEXT TOPIC : HOW PASSING ARGUMENTS WORKD: VALUE VS REFERENCE.

const flight1 = "LH234";
const jonas = {
  passengerName: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  // This function will take the flight number and the passenger OBJECT.
  flightNum = "Lh999"; //changing parameters of a function.
  passenger.passengerName = "Mr. " + passenger.passengerName; //trying to add Mr. to the passenger name.

  if (passenger.passport === 24739479284) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};
checkIn(flight1, jonas);
console.log(flight1);
console.log(jonas); // After running this, you will notice that the jonas object which was initially created before the function has its passengers name changed (adding Mr.). this is because of the fact that directly giving a new value to an object or property of an object does not create an entirely new object. it directly points to the original object so if you make any change will affect the old one too. REMEMBER, THIS CAN BE TACKELED USING THE Object.assign() function or with using the spread operator(...nameOfOriginalObject) in creating a new object entirely.

// in other words, flightNumber = flightDigits creates new entirely different memory space in the case of just variables. while flightDetails = flightInfo in the case of object does not create entirely new object, but points to the same object and memory.

// A FUNCTION THAT WILL CHANGE THE PASSPORT NUMBER OF AN OBJECT.
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
  console.log(person);
};

newPassport(jonas);
checkIn(flight1, jonas); // when you call this, you will notice that the passenger passport number changed because, I called the newPassport function first, which changed the passport number, before calling checkIn. and the alert will pring wrong password, because the password does not match the one hard coded/inputed in the checkIn function, since its changed.

// FIRST-CLASS VS HIGHER-ORDER FUNCTIONS.

// FIRST-CLASS FUNCTIONS
// 1) javaScript treats functions as first-class citizens.
// 2) This means that functions are simply values
// 3) functions are just

// Because functions are objects, there are bunch of things we can do with them. like storing them in variables. eg const add = (a,b) => a + b; or making them properties of an object eg const counter = {value: 23, inc: function(){this.value++;}};

// You can also pass function argument to other functions. eg. const greet = () => console.log('Hey Jonas'); btnClose.addEventListener('click',greet); This is a case of passing a function into the event listener function.

// we can return a function from a function.

// You remember that functions are objects. so we could call a method on a function. eg counter.inc.bind(someOtherObject);

// HIGHER-ORDER FUNCTIONS This is a function that recieves another function as an argumnent, that returns a new function or both. This is only possible because of first-class function.

// example, const greet = () => console.log('Hey Jonas'); btnClose.addEventListener('click',greet); Here, the addEventListener is the Higher-order function because it recieves another function as an input. in this case the greet function. This greet function is usually called the callback function. in this situation, the addEventListener will call thr greet function, as soon as a click happens.

// There are casses of a function, returning another function. eg. function count(){let counter = 0; return function(){counter++}}. Here, the Higher-Order-funtion is the count which returns anoter function within as we can see.

// NEXT VIDEO
// creating a function that accept other function as an input
// The first two funtions here will be inside another function.

// FIRST FUNCTION
const oneWord = function (str) {
  // This cuntion will replace all spaces ('/ /g' which means space global we are just assuming that the replace all method does not exist) to one word and make them a lower case.
  return str.replace(/ /g, "").toLowerCase();
};

// SECOND FUNCTION
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

// HIGER-ORDER FUNCTION which can recieve but first and second function.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`); // just printing the original string
  console.log(`Transform string: ${fn(str)}`); // Here I am putting the str into the upperFirstWord function. which will turn the first word to uppercase.

  console.log(`Transformed by: ${fn.name}`); // you remember that I said functions are objects and that they have properties. one of its properties is name which prints the name of the function that is the second arguement of the tranformer function which is equally a function.(upperFirstWord)
};

// Trying it out on the second function.

transformer("JavaScript is the best!", upperFirstWord); //Here we can see the Higher-Order Function, taking the upperFirstWord function as a value. please note that we are only passing the function name as a parameter. we are not calling it. its only the transformer function that will call it.

// Trying it out on the first function
transformer("JavaScript is the best!", oneWord);

// Note that both upperFirstWord and oneWord are called callback funtions because they are called by a higher-order function.

// TRYING OUT HIGHER-ORDER FUNCTION ON THE HTML FILE
// creating a high5 function that will print ✋ to the console
const high5 = function () {
  console.log("✋");
};

document.querySelector("body").addEventListener("click", high5); //Here, I am saying, if someone clicks on the body of the website, print ✋ to the console. so here, the high5 is the callback function. while the addeventListener is the Higher-order function

// MORE USAGE OF CALLBACK FUNCTIONS. FOR EXAMPLE, IN THE FOREACH FUNTION USED IN ARRAYS (You will learn this better later.)

["Jonas", "Martha", "Adam"].forEach(high5); // All I am saying her is that for each value of the array, give me a high5 so I expect 3 ✋ on the console.

// WHY ARE CALLBACK FUNCTIONS VALUABLE?

// 1) it makes it easier for us to split our code into smaller reuseable parts.
// 2) call back functions allow us to crate abstractions. which is the act of hidiing the detail of some code implementation because we don't really care about that detail. and this allow us to think about probles in a higher more abstract level.

// NEXT VIDEO. creating a function that returns another function. An Opposite of the earlier video.

const greet = function (greeting) {
  return function (names) {
    console.log(`${greeting} ${names}`);
  };
};

const greeterHey = greet("Hey"); // Explanation: when we call the greet function, with a value just as we can see here 'Hey' it will return a function as declared above, then we now strored it in the greeterHey variable. the greeterHey variable can now serve as a function because if we call it with a value as you can see below, it will print both the parameter of the greet function and its own as declared above in the console. let me try it for both Jonas and Steven

greeterHey("Jonas");
greeterHey("Steven");

// We can also do the whole process above in one line.

greet("Hey")("Jonas");
greet("Hey")("Steven");

// CHALLENGE: Rewrite the function that returned a function using Arrow function.

// Creating the Arrow function

const greetArr = (greeting) => (names) => console.log(`${greeting} ${names}`);

// Calling the Arrow function

greetArr("Hi")("Jonas");

// NEXT VIDEO: The Call and Apply Methods. We will look at how to set the this keyword manually and why we would want to do that.

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function(){}     This is old style of writing a function within an object
  book(flightNum, passengerName) {
    //The new way of defining a function within an object
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa.bookings);

// Assuming the lufthansa group created a new airline after some years.

const eurowings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; //Here I am created a new function from the book method in lufthansa Object. but this will not work outised the method because of the 'THIS' keyword. Remember the the Book variable here is now a new FUNCTION. But Why will this book function not work? see below.

//DOES NOT WORK
// book(23, "Sarah Williams");
// The book method will not work here because the book here is a new function containing the key word. hence it will be pointing to the widow fuction. which do not contain the properties it is applied to when it was originally created.

// HOW TO TACKLE THIS PROBLEM. How do we tell the computer that we want to apply a method that contains the 'THIS' keyword to a particular object. See below.

// We do so with
// 1) Call
// 2) apply
// 3) bind.

book.call(eurowings, 23, "Sarah Williams"); // Here, I simply enter the particular object I want to represent the 'THIS' Keyword then inputed other parameters. The Object that will represent the this keyword must be first.

console.log(eurowings.bookings); // Checking the eurowings bookings array and Sarah Williams was added

book.call(lufthansa, 239, "Mary Cooper");

console.log(lufthansa.bookings); // checking lufthansa booking array. and Mary Cooper was added

// Let me create another airline and call the book method on it

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Oguedoihu Chigozirim"); //setting the 'THIS' Keyword to the swiss object.
console.log(swiss.bookings); // And Oguedoihu Chigozirim was added.

// APPLY METHOD
// to manually set the 'THIS' keyword using apply method, arguements are inputed as an array and not like when using call. The apply will noe take the elements in that arry and pass it into the function.

// Example

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData); // The first arguement here is the object for the this keyword. while the second arguement is an array of all the variables needed by the function/method.
console.log(swiss.bookings); //checking the bookings array in swiss to see if George Cooper was added.

// These Days, the apply method is rarely used because the spread operator can be used in the call method. see the alternative below.

book.call(swiss, ...flightData); //This is just same as using the apply method.
console.log(swiss.bookings);

// NEXT VIDEO

// USING BIND TO MANUALLY SET THE THIS KEYWORD INSTEAD OF CALL OR APPLY.
// The key difference here is that bind does not dirrectly call the function with the this keyword. it will first create a function, setting the this keyword to a particular object, then we put it into a variable, and then call it. SEE BELOW:

// setting the this keyword in the book method/function to eurowings using bind.
const bookEW = book.bind(eurowings); //This is the new function created with bind specifically for eurowings.
bookEW(23, "Steven Williams"); //calling the new function created by bind after setting the this keyword to eurowings.
console.log(eurowings.bookings); //Checking the booking array in the eurowings object.

// Setting the this statement with other Airline using bind.

const bookKLH = book.bind(lufthansa); // For lufthansa
const bookLX = book.bind(swiss); // For Swiss

// WITH THE BIND METHOD, we can set the new function for a specific flight and all we need to do is to add the second parameter/arguement which is name. SEE BELOW!

const bookEW23 = book.bind(eurowings, 23); //setting the this word to eurowings and for flight 23. so all we need next is the second parameter/arguement for this function to work which is name. see below.

bookEW23("Jonas Schmedtmann");
bookEW23("Oguedoihu Chigozirim");

// The act of specifying part of functions argurement like we did in 'const bookEW23 = book.bind(eurowings, 23);' above is called partial application and it is really common in programming.

// THERE ARE OTHER IMPORTANT USE OF THE BIND METHOD AND THAT IS WITH EVENT LISTENERS.
lufthansa.planes = 300; // adding a new property to the lufthansa object.
lufthansa.buyPlane = function () {
  //creating a new method for the lufthansa object to increase the lufthansa.plane property each time it is called.

  console.log(this); // This is Just to see what the this keyword will be.

  this.planes++;
  console.log(this.planes); //Just to see if the lufthansa.plane property increases.
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // This is a situation where the bind method plays a very important role. in this situation, the lufthansa.buyPlane 'This' keyword will be pointing direnctly to the .buy button which it is attached to. but we want a situation where it will point to the lufthasa object and make changes on the plane property as the function is supposed to do so I had to use bind to say specifically that the this keyword should be the lufthansa object. if we don't do so, we will have NaN.

// USING THE BIND WORD FOR PARTIAL APPLICATION.

const addTax = (rate, value) => value + value * rate; //This is a general function for calculating tax.

console.log(addTax(0.1, 20));

// but we can preset the rate of the tax so since it could be fixed using bind method while the value changes. lets do do below.

const addVAT = addTax.bind(null, 0.23); //Because there is no 'THIS' keyword in the addTax function, we will set the 'THIS' Keyword to null. with this bind, we are creating a new function called addVAT from addTax which has the tax rate preset to 23% from addTax. so right now, addVAT will only take the value arguement wich is coming grom the addTax function. see below.

// PEOPLE COULD SAY "WHY DIDNT YOU SET THIS RATE DIRECT ON THE ADDTAX FUNCTION?" well, the addVAT function is entirely a new function from the addTax function.
console.log(addVAT(100));
console.log(addVAT(23));

// A SMALL CHALLENGE
// REWRITING THE FUNCTIONS ABOVE USING THE TECHNQUE OF ONE FUNCTION RETURNING ANOTHER FUNCTION.

const addTax1 = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

// I got the challenge perferctly💯💥

const addVAT1 = addTax1(0.23); // here I created a new function that returned the function within where the original function was created, then put it into a variable.
addVAT1(100); // here I called the new function I created which is a returned function from the one above.

// NEXT VIDEO IS A CHALLENGE IN THE CHALLENGE SCRIPT ..please check it out.

// NEXT VIDEO: Immediately invoked functions expression. (IIFE)

// This are functions that disappear right after running them.

const runMultiple = function () {
  console.log(`This will run again`);
};

// I can run the function above multiple times.

runMultiple();
runMultiple();
// but thats not what we are talking about here. we are talking about functions that run only once. see below

// THIS IS A GOOD EXAMPLE OF IIFE (A function that runs only once.)
(function () {
  console.log(`This will never run again`);
})(); //Here you will notice that there is a bracket covering the function, if you create this function without the covering bracket, javaScript will request that you give the function a name. so I had to put it into a bracket to make it appear as an expression thereby tricking JavaScript. the second bracket after the function covering bracket, which has no content is just calling the function. without it, the function won't be called.

// WE CAN ALSO HAVE AN IMMEDIATELY INVOKED FUNCTION EXPRESSION FOR ARROW FUNCTION.

(() => console.log("This will ALSO NEVER run"))();

// NEXT VIDEO CLOSURES:

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // calling sercureBooking and storing it in booker. hence, creating a closure.

booker(); //calling booker function
booker();
booker();

// Now lets look at this,  You might be wondering how the booker function was able to access he passenger variable in the securebooing function when the secureBooking function has already done his job. well this is because closures make a fuction remember all the variables that were created at its birth place. in this situation, the secureBooking is the birth Place of the booker function. it even considers variable within its birthplace (closure) before checking the global variable.

// MORE DEFINITIONS OF CLOSURE

/* 
A closure is the closed-over variablie environment of the execution context in which a function was created, even after that execution context is gone.

A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope throughout time.

A closure make sure that a function does not loose connection to variables that existed at the function's birth place.

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the envirionment where the function was created.

*/

// NOTE: closures are not manually created. JavaCript automatically does that. and we cannot directly access these variables but we can take a look at the internal properties of the booker function using console.dir(booker) (this is not really necessary shaa. you will just see the scopes internal property that contain the passengerCount. the scopes is in double hard brackets. it is also important to know that whatever in double hard bracktet is not accessible from our code. )

console.dir(booker); // this will show that a closer is coming from secure booking. when you expand the function on the console and also expand the [[scopes]]

// NEXT VIDEO
// Situations where closures are going to appear.

// EXAMPLE 1
let f; // Creating a variable that will be given a value later.

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }; // Reassigning the f variable.
};

g(); // Calling on the g function.
f(); // the value of this is 46 on the console which is what is supposed to be outputed. this shows that the f function was able to access the a variable which is inside where it was created (or given value). even though the g function has finished its work. earlier

// Let me create a new function call 'h' and reassign the 'f' value.

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f(); // The output here was 1554 which is the value of 777 * 2 showing that reassingning the f variable within the h function closed the variable enviroment. so it had to assess the b variable first.
console.dir(f); // to be certain, printing this on the console showed that the [[scopes]] have the variable b in the closure. instead of the value of a.

// EXAMPLE 2 with a timmer

// Testing the timmer function so you can understand how it works.

setTimeout(function () {
  console.log("Timer");
}, 1000); // Here I am using setTimeout function which comes with javaScript. its first argument is a function and the second is time in miliseconds(here, 1000 millisecond is equal to 1 second). the time out function decides when the function which is one of its argument will run. so here I am just saying the the word 'Timer' should be printed to the console after a second.

// Now Lets do the main work

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now bording all ${n} passengers`);
    console.log(`there are 3 groups each with ${perGroup} passengers.`);
  }, wait * 1000); // here I am telling the timeer to print two things to the console after wait * 1000 milisecond. Remember that 1000 milisecond is equal to one second. the wait will be in seconds

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3); // You can see that the last console.log value in the boardPassengers function ran before that of the set timer even though in the document, the setTimeout function came first. this is because the timer was used to delay output.

// In Summary, we are still on closures, we can now see that the setTimeout function was able to access all variables and arguement of where it was created.

// LET ME SHOW THAT THE CLOSURE HAS MORE PRIORITY OVER GLOBAL ENVIRONMENT BY CREATIND A NEW perGroup variable and setting it to 1000 and see if the setTimeout function will use the value of 1000. see below.

const perGroup = 1000;
boardPassengers(180, 3); // we can see that it used the perGroup variable created within the boardPassenger variable environment. if I comment the one within the boardPassenger variable environment, then it will use the one in the global environment.
