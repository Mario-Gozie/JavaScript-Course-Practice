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
