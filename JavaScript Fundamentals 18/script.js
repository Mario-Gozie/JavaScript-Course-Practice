"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// Understanding Synchronous and Asynchronous JavaScript

// Synchronous Javascript is a group of JavaScript codes that are executed line by line. and when this is the case, all code has to wait for code before it to finish running before it can run. A very good example is the alert popup. it will stop other codes from running unless we press ok, then it can allow other codes below it to run.

// In Asynchronous codes, the codes that take shorter time to run would not have to wait for codes that take longer time to run. A very good exaqmple is the setTimeout function which run after a particular time. it doesn't stop synchronous JavaScript codes from running. Asynchronous Javascript does not block other codes from running even if it takes a longer time.

// A callback function is in most cases needed to implement Asynchronous behaviour but that does not mean call back functions automatically make a code asynchronous.

// Please note that adding an event listener to an element does not make it asynchronous.

// Asynchronous Javascript is used in AJAX which means Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web services dynamically.

// What is a web API?
// API stands for Application Programming Interface: in general, it simply means a piece of software that can be used by another software, in other to allow aplication talk to each other.

// an online API is an application running on a webserver, that recieves requests for data, and sends data back as response.

// XML is a data format used to be widely used to transfer data on the web. these days, XML are not used. Instead, most use the JASON format. Jason is more like a javaScript object converted to a string.

// WRITTING MY FIRST AJAX (Asynchronous) CODE

// Below is the old method of making Ajax Request.

// METHOD USED BY MY TEACHER.

// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/name/portugal");
// // Take the request object created above, and open it Pass in the type of request which is GET because we want to get data. then pass in a string of the url for the data we want to get. I will now use the Rest countries API to get the data I need.

// // sending the request to the url above
// request.send(); // we didn't save the result of this request I sent to a variable because it will slow down the process and make codes below wait.

// request.addEventListener("load", function () {
//   //Here, as soon as the value of the send method of request comes, the request will listen for the load event, and the call back function after it will run.
//   //   console.log(this.responseText); // the response of the request is usually in the responseText property

//   // The result in of the above in the console is usually JASON and I need to convert it to object. JASON is a big string of text.

//   const [data] = JSON.parse(this.responseText); // destructurng the array after conversion with JASON.parse
//   console.log(data);
//   const html = `        <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 100000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// });

// METHOD USED BY CHATGPT. THIS IS THE LATEST WAY WHICH WORKED. MY TUTORS WAY DIDN'T WORK BECAUSE IT IS OUTDATED SO I USED THE METHOD I GOT FROM CHATGPT BUT THE CONCEPT IS SAME.

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/name/portugal");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);

  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.svg}" alt="Flag of ${
    data.name.common
  }" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
});

// PUTTING THE WHOLE PROCESS ABOVE INTO A FUNCTION
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.svg}" alt="Flag of ${
      data.name.common
    }" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("Nigeria");
// getCountryData("Usa");
// getCountryData("France");

// IMPLEMENTING AJAX CALL FOR COUNTRY IN SEQUENCE. IN OTHER WORDS, BASED ON NEIGHBOURING COUNTRIES. SO IF THE FIRS COUNTRY DOES NOT RUN, THE NEIGHBOURING WONT RUN

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" alt="Flag of ${
    data.name.common
  }" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    // Render Country 1
    renderCountry(data);

    // Render Neighbouring country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX CALL COUNTRY 2
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`); //searching by code because neighboring countries are stored by code and not name. so name in the url is replaced with alpha
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText); // No need for destructuring here because we are accessing by country code and it is not an array jsut a value.
      //   console.log(data2);

      renderCountry(data2);
    });
  });
};

getCountryAndNeighbour("Nigeria");

// when you need an Asynchronous task to run in sequence, that is, you want a series of callback functions to run one after the other. in otherwords, having a series of nested callbacks running one after the other. The special name for this type of situation is CALLBACK HELL. This is a situtation when there are nested callbacks to carry out an asynchronous tasks which are handled by callbacks.

// see example below

// Example of Callback Hell.
// Callback hell can be difficult to understand which is why promises are used. so now, we are going to use promises
setTimeout(() => {
  console.log(`1 second passed`);
  setTimeout(() => {
    console.log(`2 second passed`);
    setTimeout(() => {
      console.log(`3 second passed`);
      setTimeout(() => {
        console.log(`4 second passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// PROMISES AND API

// We will now replace the call back hell with Promises, then instead of the xmlHttpRequest (used earlier and commented below) in the last lecture, we can now use fetch keyword.

// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/name/portugal");
// request.send();

// Using a Fetch API to build a promise.
const fetchRequest = fetch("https://restcountries.com/v3.1/name/portugal"); // in other words, to make a get request, all we need is to pass the url into fetch and that is all.

// when you log the fetch request to the console, you will get a promise. see below!

// console.log(fetchRequest);

// Now, What is a promise and what can we do with it?

// Initally, A promise is defined as a placeholder for the future result of an Asynchronous operation.

// A promise is a container for an Asynchronous delivered value.

// You can also say that a promis is a container for a future value and an example of this future value is the result of an asynchronous call.

// ADVANTAGES OF USING A PROMISE.

// 1) with a promise, we no longer rely on events and callbacks passed into asynchronous function to handle asynchronous results. Events and callback functions can sometimes cause an unpredictable results.

// 2) instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: ESCAPING CALLBACK HELL🎉🎉

// Promises is an ES6 feature, they becam available in 2015

// Promises can be in different states. because they work with asynchronous operations, they are time sensitive. they change overtime. This is what is called the LIFECYCLE of a promise.

// a) In the very begining, a promise is said to be pending. This is the time before value from an asychronous task is available. during this time, the Asynchronous task is still doing it's work in the background.

// b) When the Task is finished, we say that the task is settled. There are two types of settled tasks it is either FULLFILLED or REJECTED. A fulfilled promise is one that has successfully gotten a value and it is now available to use, while a rejected one is one that there has been an error during the asynchronous tasks.  These stages are important to understand because while using promises, we will be able to control these stages.

// One more thing to understand is that a promise is only settled once and from there the status will remain unchanged forever. so it is either fulfilled or rejected and it is impossible to change that state.

// These steps are important when we use a promise to get a result which is also called to CONSUME A PROMISE. A promise can only be consumed when you have it already

// CONSUMING A PROMISE

// so what I did here basically is to create a function that will fetch then data. then I called the then method, which takes a value. it works after the data promise has settled. Maybe that is why it is called then. The function in the then method will take a parameter. here I called it response then I will call the JASON method on the response.

// the jason method is an asynchronous method. so it will return a promise. so we need to return that promise so we can consume it.

// A then method is always called on a promise to see its content.

// THE MAIN CODE

// const getCountryDataPromise = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
//     response
//   ) {
//     console.log(response);
//     return response.json().then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
//   });
// };

// getCountryDataPromise("portugal");

// CODE SIMPLIFIED USING ARROW FUNCTIONS UNLIKE WHAT WE HAVE ABOVE.

const getCountryDataPromise = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
    return response.json().then((data) => {
      renderCountry(data[0]);
    });
  });
};

getCountryDataPromise("india");

// HOW TO CHAIN PROMISES. chaining two sequential ajax calls.

const getCountryAndNeighbourDataPromise = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
    return response
      .json()
      .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if (!neighbour) return;
        // Country 2
        return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
      }) // Then methods always returns a promise
      .then((response) => response.json()) // The response here is the neighboring country details.it is the returned promise above. because "then" method always return a promise, we need to change the result of that promise to a javascript object and then use the value gotten
      .then((data) => renderCountry(data, "neigbour"));
  });
};

getCountryAndNeighbourDataPromise("nigeria");

// CHATGPT SECTION. I NEED TO REVIEW

// "use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// // Function to render the country HTML
// const renderCountry = function (data, className = "") {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" alt="Flag of ${
//     data.name.common
//   }" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1_000_000
//         ).toFixed(1)} million people</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// // Function to fetch country data by name
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);

//       // Check if country has neighbors
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error("No neighboring country found!");

//       // Fetch neighbor country data
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       countriesContainer.insertAdjacentText(
//         "beforeend",
//         `Error: ${err.message}`
//       );
//       countriesContainer.style.opacity = 1;
//     });
// };

// // Example usage
// getCountryData("Nigeria");
