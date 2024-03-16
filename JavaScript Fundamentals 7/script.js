"use strict";

// SELECTING ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");

/* Using the getElementID to get ID instead of query selector*/
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");
// // diceEl.classList.remove("hidden");

// const scores = [0, 0]; // This contains the two bigscores of the players
// let currentScore = 0;
// let activePlayer = 0; // This is used to determine active player which is the one playing
// let playing = true; // This is used to stop the game as well as the hold, display of dice and the rolling of dice button when someone has won.

// creating initial variables for init function
let scores, currentScore, activePlayer, playing;

// INITIALIZATION FUNCTION FOR RESETING THE GAME
// This is needed when we reload the page and when the new game button is clicked.
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// RUNNING THE INITIALIZATION FUNCTION TO ALLOW RESET WHEN WE RELOAD THE PAGE

init();

// function for switching player since it will be repeated.
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling Dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    //here I am checking if someone has won already and if no one has, then clicking on this button will give the desired action. remember that if accepts boolean and playing is already a boolean value so we don't need to do playing === true.

    //1. Generating a random dice row.
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display the dice.
    diceEl.classList.remove("hidden");
    // ....using source attribue in html to manipulate images to show
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1 and if true, switch to next player
    if (dice !== 1) {
      // add dice to current score.
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player

      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");

      // the above has a function called switchPlayer created above since it will be repeated in the eventListener below. see the function.

      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to score of active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    console.log(scores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if score is already atleast 100

    if (scores[activePlayer] >= 100) {
      //finish
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Else, switch to the next player.
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
