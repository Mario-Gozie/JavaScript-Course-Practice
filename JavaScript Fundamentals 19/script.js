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
