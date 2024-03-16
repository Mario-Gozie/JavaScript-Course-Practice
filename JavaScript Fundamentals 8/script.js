"use strict";

// // THE THIS KEYWORD

// console.log(this); // This keyword in the global scope is a window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // In a regular function call, the  this keyword will be undefined. provided you are in strict mode
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1998); // This will give a window object becaue the arrow function does not get its own this keyword so it uses the lexical this keyword which is the this keyword of its parent funtion and in this case it is the this keyword is that of the global scope which is window.

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // The this keyword in this case will be the jonas object.
//   },
// };

// jonas.calcAge(); //this will show the whole object because the function prints the this in the jonas object. remember that a function is a value.

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // This is called method borrowing. which is copying one method from one object to the other instead of writing it in a duplicate way.

// matilda.calcAge(); //This simply shows that the this keyword always point to the object that calls the method. because it will present the content of the matilda object. remember that a function is a value. so even thoug matilda object and jonas object has the this keyword, it only points to the one that calls the method.

// const f = jonas.calcAge; // copying the function value to a variable, without calling it.
// f(); //calling the f function after inputing the calcAge method for jonas in f will give undefined this if because calling the f fuction is just calling a regular function and not directly calling a function within an object. it just like loggind this to the console.

// THIS IS AN OBJECT.

var firstName = "Matilda"; // Creating variables with var creates properties on the global object.

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(this); // The this keyword in this case will be the jonas object.
    console.log(2037 - this.year);

    // const ismillenial = function () {
    //   // creating a function within a method.
    //   console.log(this.year >= 1981 && this.year <= 1996); // Here the this Keyword will not work because this is just a regular function. This is just like a function outside the property of an object. its as if its outside the method. so a regular function call has its this keyword set to undefined.
    // };

    // SOLUTIONS TO ALLOW USING THIS KEYWORD IN A FUNCTION WITHIN A METHOD.

    // FIRST SOLUTION

    // const self = this; //creating a new variable and equating it to the this keyword allows us to use the this keyword in a function within a method.

    // const ismillenial = function () {
    //   // creating a function within a method.
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // ALTERNATIVE SOLUTION ARROW FUNCTION this will be a good solution because the arrow fuction does not have its own this keyword. it only considers this keyword from its parrent scope.

    const ismillenial = () => {
      // creating a function within a method.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    ismillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // This will give Hey Undefined. This is because an arrow function do not get its own this keyword. it will simply use the this keyword from its sorroundings or parents. and in this case, its the global scope.

console.log(this); // this will give a window object.
console.log(this.firstName); // this will give undefined because in the window object, there is no property like firstname. so because arrow functions make use of the global this word, thats why we get undefined when we call on methods that have this keyword in an arrow function. This can be dangerous in cases where a var is used to create a variable. this is because var creates a property in the global object. so just like in the var variable above (firstName), if we run this " console.log(this.firstName)", we will get "Hey Matilda"

jonas.calcAge(); // if you call this after creating a function within this method using the this keyword, you will get undefined. this is because the function created within a method is a stand alone function. and not directly linked to the property of the object. just like using this keyword in a stand alone function, you will get undefined when you call the method. in other words, if you want to create a function within a method, avoid using the this keyword within the function. This can be solved by creating a variable, call it self and equate it to this while in the scope of the this key word. see above.

// SUMMARY

// NEVER USE AN ARROW FUNCTION AS A METHOD TO PREVENT IRREGULARITIES WITH THIS KEYWORD.
// NEVER CREATE VARIABLES WITH VAR.

// HOW PRIMITIVE TYPES AND OBJECTS ARE STORED IN MEMORY.

let age = 30;
let oldAge = age; // giving the same value as age to the oldAge variable
age = 31; // reassingning a new value to the age variable.
console.log(age);
console.log(oldAge);

const me = {
  name: "jonas",
  age: 30,
};

const friend = me;
friend.age = 27; // Here I changed the age of friend object.
console.log("Friend:", friend);
console.log("Me", me); // when I logged both friend and me objects in the console, I found out that both ages where 27 when I only changed that of friend.

// WHY IS THIS SO? WHY DO WE HAVE SAME AGE FOR BOTH PROPERTIES IN DIFFERENT OBJECTS.

// There are primitive  types which are numbers, strings, boolean, undefined, null, symbol, bigint. while there are reference types which are object literal, arrays, functions and many more. The javascript engine has two parts, the call stack, where functions are executed and the heap where objects are stored in memory. so all reference types or objects are stored in the memory heap, while primitive types are stored in the call stack. please watch the  video to understand more. if you create an object from an existing one as above and try to change properties within the object, it will change a both objects because the both names will point to the same address in the heap which is where objects are stored.

// MORE EXAMPLES
// PRIMITIVE TYPES
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);

// REFERENCE TYPES

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = "Davis"; //remaming the marriedjessical lastname to Davis

console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// The changing of the last name in the marriedJessica object after its creation from the jessica object changed the lastName in both objects. This is so because both before and after marriage point to the same object address in the heap.

// SOLUTION

//Copying Objects to create an entirely new object using object.assign() function

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); // creating a new object which is entirely a new copy of jessica2 object so that if I change the value of a property in either jessica2 or jessicaCopy, it won't affect the other. it will only change the specific one because it is entirely a diffferent object. BUT THERE IS A LIMITATION WHICH WE WILL SEE AFTER THIS.

jessicaCopy.lastName = "Davis"; // changing lastname in the lastName property in the jessica object.

// calling the two new seperate objects to see if there is a difference in lastName.

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy); // YES THERE IS A DIFFERENCE. THEY DIDNT POINT TO THE SAME ADDRESS💯

// THE LIMITATION TO USIING object.assign() is that it only works  on first level object. in other words, if there is an object within the object inside the object, then the inner object will still be the same. it will still point to the samw place in memory.

// TO ILLUSTRATE THIS, lets add an array of family. remember an array is an object behing the scenes.
const jessica3 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy3 = Object.assign({}, jessica3);
jessicaCopy3.family.push("Mary"); //Trying to manipulate an object within an object
jessicaCopy3.family.push("John");

console.log("Before marriage:", jessica3);
console.log("After marriage:", jessicaCopy3); // Here we can see that both object has family with four members when we only tried mutating only one object which is JessicaCopy3. the best solution for this is deep cloning with an external library but it is not for this section.
