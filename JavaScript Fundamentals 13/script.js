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

// STYLES ATTRIBUTES AND CLASSES

//changing styles of message/cookies

message.style.backgroundColor = "#37383d";

message.style.width = "120%"; // changing width

// Trying to log to the console styles that were not created on the Javascript sheet (eg. Those created on css sheet) will not print any thing. This is because they are not inline style. see below!
console.log(message.style.height);

// only inline styles can be logged to the console (stlyes created on the javascript sheet) see below!

console.log(message.style.backgroundColor);

// Styles that are not inline styles can still be gotten with the use of getComputedStyle. even if the style wasnt defined in the CSS, it can be gotten see below!

console.log(getComputedStyle(message).color);

// Let me now increase the height of the cookie using getComputedStyle. I am using this because I don't know what the actual height is. it wasnt defined in the CSS

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + "px"; // why did I use parse Float here? well, this is because parseFloat will select numbers part of a value first, compute it before adding the string part of it. please note that while using the parseFloat function, you need to specify that you want to work in base 10. That is why we have 10 here. so in summary what happened here is that parse float first summed numbers, before adding the unit for the height which is px so the height property will make sense of the value

// CHANGING VARIABLES
// Variables in the Css are created in the root element, which is the documentElement in Javascript. so we need to select the document, then select documentElement, say we what to change style, and then call on the set property method before making a change

// let me now change a color variable below!
document.documentElement.style.setProperty(`--color-primary`, `orangered`); // please note that setproperty method is not only used for variable. it can also be used for other properties like background color, height. just that for such properties that are  not variables, it is easier to make change directly without the set property method.

// ATTRIBUTES
// Remeber that class too is an attribute

// STANDARD ATTRIBUTE. These are attributes an Element must have. see below on how to get values for standard attributes of an element

const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // getting the file alt text for the logo
console.log(logo.src); // getting the file source for the logo
console.log(logo.className); // getting the classname for the logo

logo.alt = `Beautiful minimalist logo`; //Aside getting the attribute, you can also set the value.

// Non- STANDARD ATTRIBUTES these are attributes that are not part of the standard attributes an element must have. for example, let me add designer to the logo element.

console.log(logo.designer); // we can see that this does not print to the console. because designer attribute is not a standard attribute of an image element

// To print non-standard attributes, we use getAttribute method and pass on the attribute in string format. see below !

console.log(logo.getAttribute("designer"));

// Setting a non-standard attribute using the setAtribute method. eg here, we will create a company attribute and call it bankist.

logo.setAttribute("company", "bankist");

// Two ways of getting source attribute

console.log(logo.src); // relative link
console.log(logo.getAttribute("src")); // Absolute link

// Using the getAttribute method on href in twitter link. see below!

const link = document.querySelector(".twitter-link");

console.log(link.href); // Absolute link
console.log(link.getAttribute("href")); // Absolute link

// using the getAttribute method on href in doc link

const linkss = document.querySelector(".nav__link--btn");

console.log(linkss.href); // relative link
console.log(linkss.getAttribute("href")); // Absolute link

// DATA ATTRIBUTES. These attributes have to start with data then "-" and then what ever we want. see the HTML file to understand better.

console.log(logo.dataset.versionNumber); //You remember that I commented above that data attributes in the HTML file must start with data, then hyphen "-" then any other thing. but when when you want to use it like here, you select the element that has it, call the dataset object on it because the data will be stored in the dataset obeject. then anyother name that come afer the Data and hyphen in the HTML file has to be in CAMMEL CASE.

// CLASSES

logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// you can add and remove multiple classes

logo.classList.add(c, t);
logo.classList.rempve(c, t);

// You can also use className to set a value see below!
// Jowever, Dont use because it will overwrite all existing classes
logo.className = "Jonas"; 
