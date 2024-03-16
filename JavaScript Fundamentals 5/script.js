// 'use strict';
// // GETTING TEXT CONTENT OF AN ELEMENT
// console.log(document.querySelector('.message').textContent);
// /*Please note that document.query selector is used to select html elements such as class, ID etc. such that for class, a dot comes before the element and for ID, a Hash comes before the element. document. query selector is a method of the document object. also note that the text content method is used to get the text content of a HTML element. */

// /* DOM Document Object Model: Structured representation of HTML Documents allows Javascrpt to Access HTML elements and styles to manipulate them. so it could be said that a DOM is a connection between HTML document and JavaScript code. its automatically created by the browser as soon as HTML document logs. */

// /* DOM and DOM methods are not part of javaScript but they are part of web APIs which are libraries the the browser implement which we can access using javaScript codes. API mean Application Programming interface.*/

// // CHANGING TEXT CONTENT WITH JAVASCRIPT
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// // MANIPULATING THE VALUE OF AN INPUT ELEMENT IN HTML. (VALUE)
// document.querySelector('.guess').value = 23;

// // TO EFFECT CHANGES WHEN WE CLICK ON SOMETHING ON OUR SITE, WE USE AN EVENT LISTENER. WHATEVER THAT HAPPENS ON A PAGE IS KNOWN AS AN EVENT. EG. MOUSE CLICK, MOUSE MOVING, KEY PRESS. OR MANY OTHER EVENTS.

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  // so here I am saying that this function should retrun repalace whatever message that is passed into it with the content of the message class.
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //here I am asking the computer to listen for a click on the element that has the check class and when it notices a click, it should store the value inputed into the input box in a variable called guess.
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // WHEN PLAYER WINS
  } else if (guess === secreteNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '10rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   // using the tenary operator.
      //   guess > secreteNumber ? '📈 Too high!' : '📉 Too low!';

      displayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});
//    // WHEN GUESS IS TOO HIGH
//   else if (guess > secreteNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';

//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // WHEN GUESS IS TOO LOW
//   } else if (guess < secreteNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';

//       document.querySelector('.score').textContent = 0;
//     }

//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// ACTIVATING THE AGAIN BUTTON TO RESET THE GAME

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '0';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = 'rgb(20, 19, 19)';

  document.querySelector('.number').style.width = '6rem';
});
