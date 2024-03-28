"use strict";

/* Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in  the starter object below.

Here are your tasks:

1. Create a method called 'resisterNewAnswer' on the 'poll' object. The method does 2 things:

1.1 Disply the prompt window for the user to input the number of the selected option. The prompt should look like this:
    What is your favorite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Wrtie option number)

1.2 Based on the input number, update the answers array. for Example, if the option is 3, increase the value at position 3  of the array by 1. Make sure to check if the input is a number and if the number makes sense ( e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. if the type is array, simply display the result array as it is,  using console.log(). This should be the defaualt option. if type is 'string', display a string like "Pool results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section.

BONUS: Use the 'displayResults' Method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! so what should the this key word look like in this situation ?

BONUS TEST DATA 1: [5,2,3]
BONUS TEST DATA 2: [1,5,3,9,6,1]

GOOD LUCK😊
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

// SOLUTON:
// QUESTION 1
poll.registerNewAnswer = function () {
  // Get the answer.
  const answer = Number(
    prompt(
      `${this.question}\n${this.options.join("\n")}\n (Wrtie option number)`
    )
  );
  typeof answer === "number" &&
    answer < this.answers.length &&
    this.answers[answer]++;
  console.log(this.answers); // Here I am using the and operator to check for conditons. just like if statement
};

// QUESTION 2, MAKING IT WORK AT THE CLICK OF A BUTTON.

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll)); // i am using the bind operator here because naturally, the 'THIS' keyword in the poll.registerNewAnswer will point dirrectly to the pool class in the document which is where it is attach. to explitly say it should be attached to the pool object, I had to use bind.

// QUESTION 3 THE METHOD TO DISPLAY RESULT.

poll.displayResult = function (type = "array") {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(`poll results are ${this.answers.join(", ")}`);
  }
};

//SAMPLE DATA FOR TESTING
//BONUS TEST DATA 1: [5,2,3]
//BONUS TEST DATA 2: [1,5,3,9,6,1]
// Now understand what will happen bellow. the method in question (displayResult) is a property of the pull fuction which contains 'this.answers'. but we don't want to use the answers array in the pool method, we want to use the bonus sample data given in this task. so all we need to do here is to use the call method to specify a new value for 'THIS' keyword, which in this case is an object, that will contain an answer property whose value will be the sample data we have already. call({answers: [5,2,3]}). remember that curly brackets create a new object and gthat the answers there is a property of the object. see below.

poll.displayResult.call({ answers: [5, 2, 3] });
poll.displayResult.call({ answers: [5, 2, 3] }, "string"); //converting to strings.

// Trying with the second sample data.

poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
