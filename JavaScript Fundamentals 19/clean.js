'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Object.freeze is only effective for first level data. Deep ones can be mutated.

budget[0].value = 1000;

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // Using Object.freeze will make an object immutable in JavaScript.

// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure Function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  //   if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  //   let lim;
  //   if (spendingLimits[user]) {
  //     lim = spendingLimits[user];
  //   } else {
  //     lim = 0;
  //   }

  //   const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  //   const limit = spendingLimits?.[user] ?? 0; // what we commented above is same as this.

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10000, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state, limits) {
//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of newBudget3) {
//   //   if (entry.value < -getLimit(limits, entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
// };
const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const el of budget) {
  //   output +=
  //     el.value <= -bigLimit
  //       ? (output += `${el.description.slice(-2)} +  / ;`)
  //       : '';
  //   // if (el.value <= -bigLimit) {
  //   //   output += `${el.description.slice(-2)} +  / ;`; // Emojis are 2 chars
  //   // }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 100);

// MAKING OUR CODE CLEANER WITH FUNCTIONAL PROGRAMING
