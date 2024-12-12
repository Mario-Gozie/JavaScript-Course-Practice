// IMPORTING MODULE
// import { addToCart, totalPrice as price, tq } from './shopingCart.js'; // I changed totalPrice to price while importing. I also renamed totalQuantity to tq in the exporting file.

console.log('Importing module');

// The code below will display the shippingCost variable in the console because in the module where it is created, the word export was not used to give permision to export it.
// console.log(shippingCost);

// addToCart('bread', 5); // when you run this imported function, it will run perfetly and print what you want on the console because it was exported.

// console.log(price, tq);

// You can also Import all everything you want to expeort in a module. see below.
import * as shoppingCart from './shoppingCart.js'; // This process is more like creating an object during the importation process which we called shoppingCart. so before we use anything in the imported module, we have to attach the object to it.

shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);

// Importing Default export in the export module.

import add, { cart } from './shoppingCart.js';
add('pizza', 2); // that function I made default export in the export module, I now called it add here and used it.
add('bread', 5);
add('apples', 4);

console.log(cart);

// TOP  LEVEL AWAIT
// This is the process of using the await keyword, oustside of the async function. (TOP LEVEL AWAIT). However it can slow down the code because it runs synchronously. especially task that takes time.

// const res = await fetch('https://jsonplaceholder.typicode.com/albums');

// const data = await res.json();
// console.log(data);

// console.log('Something');

// The best way to use an await keyword is after the Async function.
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).id }; // This will return a promise. remember that whatever returned within an async function will always be a promise.
};

const lastPost = getLastPost();

console.log(lastPost);

// Not very clean with then  so let us use await
lastPost.then((last) => console.log(last));

// Using await to resolve what is returned by getLastPost async function
// Thi is where top level Await makes sense.
const lastPost2 = await lastPost;
console.log(lastPost2);

// OLD MODULE PATTERN USED BEFORE NOW

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} ordered from supplier (shipping cost is ${shippingCost})`
    );
  };

  return {
    // Every thing we want to make public. or accessible from outside, we have to return it. Here we are returning it as an object.
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// Remember a function will always have access to all the variables in its birth place.
console.log(shoppingCart2.addToCart('apple', 4));
console.log(shoppingCart2.addToCart('pizza', 2));
console.log(shoppingCart2);

// Understanding NPM
// NPM  stands for node package manager and it is both a software on our computer and a package repository
// Initializing npm file is done with npm init and clicking enter till the end where you will be asked is this Ok? and you will say, Yes. This wiil finally create a package file.

// it is in the package.json file that all configuration of our project is stored.

// let us install the leaflet library using npm. (npm install leaflet)
// installing the leaflet library, just like installing any other library created a new property/field which is called dependencies. it is there that all the external libraries I use will be stored. it also created a folder called node modules. and it contains the leaflet libraries.

// Yes we have installed the leaflet library, but we can't use it without module bondler

// let us now import one of the most popular JavaScript library, which is loadash. it contains useful functions for arrays, objects, etc. but we need to use the Es version which does not require an bondler in cases of Old Javascript.

// we can also see that in the packages, the loadash is one of the dependencies there. we can also find the lodash-es folder in the node module folder.

// LET ME USE ONE OF THE METHODS IN LODASH TO FIND CLONE AN OBJECT.

// This is known as CLONEDEEP it is used for cloning object perfectly instead of using object.assign(). Remember that if you just copy an object that is not a primitive object, when you change anything in the parent object, it will also change in the child vice versa. this is because they are pointing to the same memory. so but if you use object.asign() it doesn't work perfectly for deep objects.

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

// Assigning false to the original object property
state.user.loggedIn = false;

// Checking the two objects to see if Deepclode did the job better than Object.assign

console.log(stateClone);

console.log(stateDeepClone);

// NOTE when you want to send your work to another developer, do not send the node moodle. it is a lot of data and would take a lot of time.You jut need to send other files alongside with the package file. if the other developer recieves it, all he needs to do is to install npm on his system and because of the dependencies in the package file already, hw will get all the node_modules file and all the libraries dependent on the project. I deleted my node_modules folder and intalled npm again and all the dependecies/libraries came back.

// the code is "npm install" dont put any package name. it will figure out packages needed for the dependencies object within the package.json file.

// How to use Parcel in for bundling (Parcel can be found as Npm Package)
// to download parcel, we use npm install parce --save-dev because parcel is a dev dependency which is needed for our application but not directly for our code. that is whay it has "--save-dev" when this is downloaded, it appear

// to run parcel, we use  npx parcel index.html we used index.html because that is where we included our script file.

// The goal of using parcel is to bundle modules together.

// BABEL AND POLYFILLING
// This is used to convert files to ES5

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find((item) => item.quantity >= 2));

Promise.resolve('Test').then((x) => console.log(x));

// Because of Promises and some new ES6 codes, that Bable cannot convert to ES5, we need to download a new library to do that.
