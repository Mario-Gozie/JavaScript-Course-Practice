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

const getLimit = (user) => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  //   if (!user) user = 'jonas';
  user = user.toLowerCase();

  //   let lim;
  //   if (spendingLimits[user]) {
  //     lim = spendingLimits[user];
  //   } else {
  //     lim = 0;
  //   }

  //   const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  //   const limit = spendingLimits?.[user] ?? 0; // what we commented above is same as this.

  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user }); // you dont need to do description: description or user : user if the parameter and variable name are the same for an object. just use one.
  }
};
// addExpense(10, 'Pizza 🍕');
// addExpense(100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }

    const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const el of budget) {
    output +=
      el.value <= -bigLimit
        ? (output += `${el.description.slice(-2)} +  / ;`)
        : '';
    // if (el.value <= -bigLimit) {
    //   output += `${el.description.slice(-2)} +  / ;`; // Emojis are 2 chars
    // }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(100);

// MAKING OUR CODE CLEANER WITH FUNCTIONAL PROGRAMING
