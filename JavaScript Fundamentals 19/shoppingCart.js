// EXPORTING MODULE
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// first code to be exported.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Multiple things can be exported using named export

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq }; // Renameing the totalQuantity to tq

// Default exports
// In Default import, you don't give a name to what you are exporting you give it a name in the import module.
// Here I am basically exporting the addToCart function we declared earlier. In the import module, I will give it the name add.
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
