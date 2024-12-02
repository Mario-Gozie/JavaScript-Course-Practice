"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const borderContainer = document.querySelector(".border");

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

// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/name/portugal");
// request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);

//   const html = `
//     <article class="country">
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
// });

// // PUTTING THE WHOLE PROCESS ABOVE INTO A FUNCTION
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

// getCountryData("Nigeria");
// getCountryData("Usa");
// getCountryData("France");

// IMPLEMENTING AJAX CALL FOR COUNTRY IN SEQUENCE. IN OTHER WORDS, BASED ON NEIGHBOURING COUNTRIES. SO IF THE FIRS COUNTRY DOES NOT RUN, THE NEIGHBOURING WONT RUN

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)} people</p>
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
    console.log(data);
    // Render Country 1
    renderCountry(data);

    // Render Neighbouring country
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    //AJAX CALL COUNTRY 2
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`); //searching by code because neighboring countries are stored by code and not name. so name in the url is replaced with alpha
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText); // No need for destructuring here because we are accessing by country code and it is not an array jsut a value.
      console.log(data2);

      renderCountry(data2[0], "neighbour");
    });
  });
};

getCountryAndNeighbour("portugal");

// ME AND RICHES PART ...///

const renderCountryRiches = function (data, className = "") {
  // console.log(data.flags.svg)
  if (className == "country") {
    const html = `
    <article class="${className}">
      <img class="country__img" src="${data.flags?.png}" alt="Flag of ${
      data.name?.common
    }" />
      <div class="country__data">
        <h3 class="country__name">${data.name?.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0] || ""
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;

    // countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.innerHTML = html;
    countriesContainer.style.opacity = 1;
  }
  if (className == "neighbour") {
    console.log(data);
    const html = `
    <article class="${className}">
      <img class="country__img" src="${data[0].flags?.png}" alt="Flag of ${
      data[0].name?.common
    }" />
      <div class="country__data">
        <h3 class="country__name">${data[0].name?.common}</h3>
                <h4 class="country__region">${data[0].region}</h4>
        <p class="country__row"><span>👫</span>${(
          data[0].population / 1_000_000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data[0].languages)[0] || ""
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data[0].currencies)[0].name
        }</p>

      </div>
    </article>
  `;

    // countriesContainer.insertAdjacentHTML("beforeend", html);
    borderContainer.innerHTML = html;
    // borderContainer.style.opacity = 1;
  }
};

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

// getCountryDataPromise("india");

// HOW TO CHAIN PROMISES. chaining two sequential ajax calls.

const getCountryAndNeighbourDataPromise = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
    return response
      .json() // jason method happens asynchronously so it needs to return a PROMISE. which we will call the then method on to access the data. remember that the json method converts response to jason so they can be accessible.
      .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if (!neighbour) return;
        // Country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      }) // Then methods always returns a promise
      .then((response) => response.json()) // The response here is the neighboring country details.it is the returned promise above. because "then" method always return a promise, we need to change the result of that promise to a javascript object and then use the value gotten
      .then((data) => renderCountry(data, "neigbour"));
  });
};

// getCountryAndNeighbourDataPromise("nigeria");

// HANDLING REJECTIONS.

// There are two ways to handle rejection. The first one is to add a function that will be called if there is a rejection in the "Then" Method. so the first callback function is always called when when the promise is fulfilled/successful. The second function is called when the promise is rejected.

// Creatting a method that will create an error message if something goes wrong.

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// Please not that while doing this task, I had to off my network from the developer tool of google chrome to create a senerio where theree is no network so there could be an error if the data is not fetched. This was done after the page must have loaded for the first time. So that the button to be clicked will be displayed and when it is clcked, it will throw an error because there is no network.

const getCountryAndNeighbourDataPromiseWithRejection = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      return response.json();
      // (err) => alert(err)
    }) // THIS IS WHERE THE ERROR IS HANDLED but it is better to handle errors with catch method
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    }) // Then methods always returns a promise
    .then((response) => response.json()) // The response here is the neighboring country details.it is the returned promise above. because "then" method always return a promise, we need to change the result of that promise to a javascript object and then use the value gotten
    .then((data) => renderCountry(data, "neigbour"))
    .catch((err) => {
      console.error(`${err} 😒😒😒💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`); // Every error object created in JavaScript has a message property that is why we had to do err.messag. so we can print the message of that error, not the whole error object.
      // This catch method will handle all errors in in this software or function. so, errors will propagate down the chain until they are called.
    })
    .finally(() => {
      borderContainer.style.opacity = 1;
    }); // Finally method is always called whether there is a sucess or rejection. op good use of this is to hide loading spinner. which is what you see in applications while data fetching is loading, in other to hide it after the process.

  // Here, whether the process was successful or not the opacity of the the border containter will have to show. that is why I had to put the process in the finally method.
};

// getCountryAndNeighbourDataPromiseWithRejection("nigeria");
// getCountryAndNeighbourDataPromiseWithRejection("fjhdja");

btn.addEventListener("click", function () {
  getCountryAndNeighbourDataPromiseWithRejection("portugal");
});

// THROWING AN ERROR MANUALLY.
// We will first do for a country that do not exist.

const getCountryAndNeighbourDataPromiseWithRejectionCatchingErrors = function (
  country
) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      // when we log the response to the console, and we call a country that do not exist, we will see that the "ok" property is false, and the "status" property will be 404, which represents 404 error. Now we want to handle that 404 error such that when it comes, we will specifically know that the country was not found.

      if (!response.ok) throw new Error(`country not found ${response.status}`); // so basically, I am saying here that when we try to fetch data, and the object returned does has its ok property to be false, it means the country is not found. in such situation too, the status will also be 404. so here we are saying in summary, if there response ok property of the response returned is false, plesa throw this error of "country not found the 404" (remember 404 is value of the status property.)
      return response.json();
      // (err) => alert(err)
    }) // THIS IS WHERE THE ERROR IS HANDLED but it is better to handle errors with catch method
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    }) // Then methods always returns a promise
    .then((response) => response.json()) // The response here is the neighboring country details.it is the returned promise above. because "then" method always return a promise, we need to change the result of that promise to a javascript object and then use the value gotten
    .then((data) => renderCountry(data, "neigbour"))
    .catch((err) => {
      console.error(`${err} 😒😒😒💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`); // Every error object created in JavaScript has a message property that is why we had to do err.messag. so we can print the message of that error, not the whole error object.
      // This catch method will handle all errors in in this software or function. so, errors will propagate down the chain until they are called.
    })
    .finally(() => {
      borderContainer.style.opacity = 1;
    }); // Finally method is always called whether there is a sucess or rejection. op good use of this is to hide loading spinner. which is what you see in applications while data fetching is loading, in other to hide it after the process.

  // Here, whether the process was successful or not the opacity of the the border containter will have to show. that is why I had to put the process in the finally method.
};

// getCountryAndNeighbourDataPromiseWithRejection("nigeria");

btn.addEventListener("click", function () {
  getCountryAndNeighbourDataPromiseWithRejectionCatchingErrors("fjhdja");
});

// TRYING TO THROW ERROR WITH THE SECOND OR NEIGHBOURING COUNTRY WHILE THE FIRST COUNTRY IS CORRECT.

// const getCountryAndNeighbourDataPromiseWithRejectionCatchingErrorsWithHelperFunctionAndRejecionInSecondFetch =
//   function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then((response) => {
//         console.log(response);
//         // when we log the response to the console, and we call a country that do not exist, we will see that the "ok" property is false, and the "status" property will be 404, which represents 404 error. Now we want to handle that 404 error such that when it comes, we will specifically know that the country was not found.

//         if (!response.ok)
//           throw new Error(`country not found ${response.status}`); // so basically, I am saying here that when we try to fetch data, and the object returned does has its ok property to be false, it means the country is not found. in such situation too, the status will also be 404. so here we are saying in summary, if there response ok property of the response returned is false, plesa throw this error of "country not found the 404" (remember 404 is value of the status property.)
//         return response.json();
//         // (err) => alert(err)
//       }) // THIS IS WHERE THE ERROR IS HANDLED but it is better to handle errors with catch method
//       .then((data) => {
//         renderCountry(data[0]);
//         const neighbour = "kdkaljdi";

//         if (!neighbour) return;
//         // Country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       }) // Then methods always returns a promise
//       .then((response) => {
//         if (!response.ok)
//           throw new Error(`country not found ${response.status}`);
//         return response.json();
//       }) // The response here is the neighboring country details.it is the returned promise above. because "then" method always return a promise, we need to change the result of that promise to a javascript object and then use the value gotten
//       .then((data) => renderCountry(data, "neigbour"))
//       .catch((err) => {
//         console.error(`${err} 😒😒😒💥💥💥`);
//         renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`); // Every error object created in JavaScript has a message property that is why we had to do err.messag. so we can print the message of that error, not the whole error object.
//         // This catch method will handle all errors in in this software or function. so, errors will propagate down the chain until they are called.
//       })
//       .finally(() => {
//         borderContainer.style.opacity = 1;
//       }); // Finally method is always called whether there is a sucess or rejection. op good use of this is to hide loading spinner. which is what you see in applications while data fetching is loading, in other to hide it after the process.

//     // Here, whether the process was successful or not the opacity of the the border containter will have to show. that is why I had to put the process in the finally method.
//   };

// REFACTORING THE CODE ABOVE

// There will be repeatation of codes while doing this so I will have to put everything into one nice function.

const getJson = function (url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);
    return response.json();
  });
};

// The Main function
const getCountryAndNeighbourDataPromiseWithRejectionCatchingErrorsWithHelperFunctionAndRejecionInSecondFetch =
  function (country) {
    // Country 1

    getJson(
      `https://restcountries.com/v3.1/name/${country}`,
      "country not found"
    )
      .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];

        if (!neighbour) {
          console.log(`No neighbours found`);
          throw new Error("No Neighbour found!");
        }

        // Country 2
        return getJson(
          `https://restcountries.com/v3.1/alpha/${neighbour}`,
          "country not found"
        );
      })
      .then((data) => renderCountry(data, "neigbour"))
      .catch((err) => {
        console.error(`${err} 😒😒😒💥💥💥`);
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`); // Every error object created in JavaScript has a message property that is why we had to do err.messag. so we can print the message of that error, not the whole error object.
        // This catch method will handle all errors in in this software or function. so, errors will propagate down the chain until they are called.
      })
      .finally(() => {
        borderContainer.style.opacity = 1;
      }); // Finally method is always called whether there is a sucess or rejection. op good use of this is to hide loading spinner. which is what you see in applications while data fetching is loading, in other to hide it after the process.

    // Here, whether the process was successful or not the opacity of the the border containter will have to show. that is why I had to put the process in the finally method.
  };

btn.addEventListener("click", function () {
  getCountryAndNeighbourDataPromiseWithRejectionCatchingErrorsWithHelperFunctionAndRejecionInSecondFetch(
    "australia"
  );
});

// REMEMBER THAT AUSTRALIA HAS NO NEIGHBOUR

// EVENT LOOP PRACTICE
// Checking order at which tasks will be executed

// Important Thing to note here is that, The event loop controls tasks in JavaScript. and that There is a call-back which handles all call back function according to their order in the queue. Before the Call back queue is the Micro-Task queue. This is where all promises are handled. Now here is the thing, Micro-task queue handle promises and Micro tasks are considered or executed first before content of the call-back queue. in other words, promises are given priority for execution.

console.log("Test start");
setTimeout(() => console.log("0 second timer"), 0);
// Promise.resolve helps us to create a promise that will resolve immediately. Then the "then" method is used to handle the resolved value.
Promise.resolve("Resolve Promise 1").then((res) => console.log(res));
console.log("Test end");

// So in theses four tasks above, the Test start and Test End will run first, then the promise will run next before the setTimmer even though it is before the promise and is set at 0 seconds. this is because Promises are micro-tasks and are being put in the micro-task queue so they have to be executed first.

// This Means that if a Micro task is delayed, then the timmer will be delayed and wont run after the specified time.

// LETS CREATE THE SENERIO I TALKED ABOUT ABOVE AND KNOW HOW TO HANDLE IT.

console.log("Test start");
setTimeout(() => console.log("0 second timer"), 0);
Promise.resolve("Resolve Promise 1").then((res) => console.log(res));
Promise.resolve("Resolved Promise 2").then((res) => {
  // The for loop here is to make the task last longer. You can make the 1000000 number longer so that the micro-task (for loop) can be longer
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});
console.log("Test end");

// When You ron the set of codes above, you will see that all callbacks will run after the promise micro-tasks (the for loop) has been executed. this delays even the setTimeout callback that is set at 0 seconds.

// BUILDING A SIMPLE PROMISE

// New promise constructor which will take an execution function. This is because promise is a kind of special object in Javascript. The function will contain the Asynchronous behaviour we want to carry out with the promise. The promise will pass in the resolve and the reject functions as parameters.  Based on the condition met, the resolve function or reject function passed into the execution function will be called. Whatever that is the outcome of the promise (whether resolve, or reject) will be consumed by the "Then" method.

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve(`You Win 🎉`);
  } else {
    reject(`You lost your money 😒`);
  }
});

// Calling the then method on LotteryPromise

lotteryPromise
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });

// To make my New Promise Asynchronous, let me put the main task into a setTimeout so as to delay it a bit by two seconds and make it take time but I will print something to the console before that. I will also create a new error object with "new Error" in the rejection area instead of loging in a string to the console.

const lotteryPromiseAsync = new Promise(function (resolve, reject) {
  console.log(`lottery draw is happening ✋`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You Win 🎉`);
    } else {
      reject(new Error(`You lost your money 😒`)); //Creating a New error Object
    }
  }, 2000); // Delaying by two seconds
});

// I am Calling the then method on LotteryPromiseAsync

lotteryPromiseAsync
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });

// PROMISIFYING A CALBACK FUNCTION. This is converting callback based Asynchronous behaviour to to promise based.

// Promisifying a function is esentially what the fetch function does. its a function that returns a promise. here we are creating a function that will hold the promise. so the promise will be within the function.

//Promisifying SetTimeout
const wait = function (seconds) {
  // in this promise, I didn't input the reject parmeter into the execution fuction for the promise. this is because it is practically imposible for the setTimeOut function to fail.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000); // it is not mandatory to put a task within the resolve method. we just want the code to work. so basicaly, the plan is to pass a number of seconds into the wait method which will produce a result after the product (multiplication) of the seconds and 1000 milisecond. also remember that you can make this shorter with arrow functions.
  });
};

// Calling the wait function

wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`)); //This will create a promise that would wait for 2 seconds and after 2 seconds, it will resolve. Now remember that nothind whas passed into the resolve function while creating the wait function. so there is no need to pass a parameter into the then method. hence I had to leave it empty and print that I waited for 2 seconds in the console. and after the two seconds task, I returned another promise for 1 second. which I consumeed with another then method.

// MAKING MORE CHAINS OF PROMISES INSTEAD OF CALL BACK HELL
// I created a chain of setTimeout earlier, let me now create with with a chain of promises which looks nicer.
wait(1)
  .then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 2 second`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 3 second`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 4 second`);
  });

// SHORTCUT FOR CREATING A RESOLVED (FULLFILLED) OR REJECTED PROMISE
// This is actually a static method.

// QUICIK RESOLVE PROMISE. This needs a then method to resolve the promise.
Promise.resolve("abc").then((x) => console.log(x));

// QUICK REJECT PROMISE. This does not need a then method but a catch because it is a rejection.
Promise.reject(new Error(`problem!`)).catch((x) => console.error(x));

// PROMISIFYING THE GEOLOCATION API
// we are getting the current position with navigator.geolocation.getCurrentPosition to get the location and the function will accept two callbacks, which one is for resolved promise. the other is for error, incase they dont user does not allow getting access to the current location.

// This is an Asyncronous behavior because it does not block what is happening below it. for example, console.log('Getting position')
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.error(err)
);

console.log("Getting position");

// MAKING THE CODE ABOVE BETTER AND UNDERSTANDABLE

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    // Every thing commented just above here looks a bit complicated so let me make it simpler.
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

geoPosition().then((pos) => console.log(pos));
