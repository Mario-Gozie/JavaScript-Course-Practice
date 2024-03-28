/*
This is more of a thinking challenge than a coding challenge.

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do NOT  select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think and WHEN exactly the callback function is executed, and what that means for the variable involved n this example. 

GOOD LUCK😍
*/

// SOLUTION

(function () {
  const header = document.querySelector("h1"); // selecting the h1 element.
  header.style.color = "red"; //changing the h1 element to blue

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue"; // Here I am simply saying that on click, the h1 element color should be changed to Blue
  });
})(); // You mighy be wondering how the callback funtion(function within the eventListener) got access to the header variable even after the first function (IIFE) ran. The ansewer is because of CLOSURE. in other words, the function within the event handler was able to access the header variable created in its (the function) birth place even after the function were the variable was created ran. so the addEventListener function can remember all variables at its birth place.
