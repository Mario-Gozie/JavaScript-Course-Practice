"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// CODE BEFORE THE FOREACH LOOP

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// CODE WITH FOREACH LOOP

btnsOpenModal.forEach((btnmodal) =>
  btnmodal.addEventListener("click", openModal)
);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// HOW THE DOM WORKS BEHIND THE SCENES.

// The DOM is the interface between the JavaScript code and the browser it allows us interact with the browser. we can write JavaScript to create, modify and delete HTML elements; set styles, chasses, and attributes; and listen and respond to events; DOM trees are generated from an HTML document, which we can then interact with. DOM is a very complex API (Application Programming Interface) that contains lots of methods and properties to interact with the DOM tree.

// SELECTING, CREATING AND DELETING ELEMENTS OF A DOM

console.log(document.documentElement); // Selecting and pushing entire html document to the console.

console.log(document.head); // selecting head
console.log(document.body); // selecting body

const header = document.querySelector(".header"); // This selects the first element with the class Header
const allSelections = document.querySelectorAll(".section"); // This selects all elements with the class section. we have used this earlier in creating the modal window.

console.log(allSelections); //This will print all elements with the class of section to the console.

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button"); //getting all elemets by the tag name of button.

console.log(allButtons); //printing this to the console shows that getElementsByTagname is a HTMLcollection and a HTMLcollection is a live collction. so if any of the tagname changes, it updates automatically. This is helpful because it updates automatically. The same does not happen for node lists for example, if we delete a section from the allsections, and print to the console, we will notice that the deleted section will not delet automatically.

document.getElementsByClassName("Btn"); // This returns a HTML collections. which is a live collection and automatically updates.

// CREATING AND INSERTING ELEMENTS

//.insertAdjacentHTML

const message = document.createElement("div"); // This will create a DOM element and stored it in message but yet to put it on the page.

// ADDING A CLASS THE MESSAGE ELEMENT
message.classList.add("cookie-message");

// // ADDING TEXT CONTENT
// message.textContent(`We use cookies for improved functionality and analytics.`)

// ADDING THE TEXT WITH INNERHTML METHOD

message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// WE CAN INSERT/APPEND THE MESSAGE INTO THE WEBPAGE

// header.prepend(message); // prepending adds element as the first child of an element.

header.append(message); // append puts it as the last chald of an element

// Note that Prepend and append cannot work simulteneously, the last in the doc overrider the old one. for example, in this case, append overides. so append basically moved the element from up to down. so in other words, the append method can be used to move elements.

// WHAT IF WE WANT TO INSERT MULTIPLE ELEMENTS AT THE SAME TIME SINCE APPEND AND PREPEND CANT WORK SIMULTENEOUSLY.

// Well if I also want to append the message below, instead of passing it directly, I will clone it. see below.

// header.append(message.cloneNode(true)); //Here, I am basicalling cloneing the HTML element before appending it.

//BEFORE AND AFTER METHOD. They do the same thing as append and prepend

// header.before(message);
// header.after(message);

// DELETING ELEMENTS
// Here I am saying if I click on the cookie button, please remove the cookie.

document
  .querySelector(`.btn--close-cookie`)
  .addEventListener("click", function () {
    // old way of removing elements. see directly below

    // message.parentElement.removeChild(message);

    // New method of removing elements

    message.remove();
  });
