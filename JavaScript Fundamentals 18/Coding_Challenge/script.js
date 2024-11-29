/*
PART1
 In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. for that, you will use a second API to geocode cordinates.

 Here are your tasks:

 PART 1

 1. Create a fucntion 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (These are GPS coordinates, examples are below).

 2. Do 'reverse geocoding' of the provided coodinates. Reverse geocoding means to convert to a meaningful location, like a city and country name. Use this API to do reverse geocoding https://geocode.xyz/api.
 The AJAX call will be done to a URL with this format:
 http://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the getJSon function we created, that is cheating. 
 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data log a message like this to the console: 'You are in kBerlin, Germany'
 4. Chain a .catch method to the end of the promise chain and log errors to the console
 5. The API allows you to make only 3 requests for second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise in this case. So create an error to reject the promise yourself with a meaningful error.
*/

/*
part 2
6. Now it is time to use the recieved data to render a country. so take the relevant attributes from the geocoding API result to plg it into the countries API that we have been using. 
7. Render the Country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 3: -33.933, 18.474 

GOODLUCK 😊🎉
*/

//SOLUTION

const whrerAmI = function (lat, lng) {
  fetch(`http://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.country);
    });
};

whrerAmI(52.508, 13.381);
