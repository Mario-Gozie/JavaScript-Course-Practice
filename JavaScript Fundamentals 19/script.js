// IMPORTING MODULE
import { addToCart, totalPrice as price, tq } from './shopingCart.js'; // I changed totalPrice to price while importing. I also renamed totalQuantity to tq in the exporting file.

console.log('Importing module');

// The code below will display the shippingCost variable in the console because in the module where it is created, the word export was not used to give permision to export it.
// console.log(shippingCost);

addToCart('bread', 5); // when you run this imported function, it will run perfetly and print what you want on the console because it was exported.

console.log(price, tq);
