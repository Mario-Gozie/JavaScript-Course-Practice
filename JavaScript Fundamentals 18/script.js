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
getCountryData("Usa");
getCountryData("France");

// HOW THE WEB WORKS BEHIND THE SCENES.
