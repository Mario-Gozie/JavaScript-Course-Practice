'use strict';

const x = '23';

//PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."

const temparature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// what is an amplitude? Answer: it's the difference between the highest and lowest temperatures in an array.
// -How to compute the max and min temperatures?
// -What's a sensor error? And what to do when one occurs?

// 2) Breaking up into sub-problems;
// - How to ignore errors?
// - Find Max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0]; //Here we are saying that the maximum element will be the first element
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    // Here we are saying that the loop starts at the first value. Then provided its is less than the length of the array.
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue; // I am simply saying that provided the currentTemp is not a number, skip and start the loop again.
    if (currentTemp > max) max = currentTemp; //Here i am checking if the current value is greater than the initial value which is contained in the max variable
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]); test data used to check if the function works
const amplitude = calcTempAmplitude(temparature);
console.log(amplitude);

// Problem 2
// The function should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functinality? NO! Just merge two arrays at the begining.

// 2) Breaking up into sub-problems;
// - How to merge 2 arrays?
// -----  HOW TO MERGE ARRAYS  -----
// This is done using the concat method
// const array1 = ['a','b','c'];
// const array1 = ['d','e','f'];

// const array3 = array1.const(array2);

// const calcTempAmplitudeNew = function (t1, t2) {
//   // creating array by merging

//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0]; //Here we are saying that the maximum element will be the first element
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     // Here we are saying that the loop starts at the first value. Then provided its is less than the length of the array.
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue; // I am simply saying that provided the currentTemp is not a number, skip and start the loop again.
//     if (currentTemp > max) max = currentTemp; //Here i am checking if the current value is greater than the initial value which is contained in the max variable
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]); // Using two arrays in the new function
// console.log(amplitudeNew);

// DEBURGING --- This simply means finding and fixing errors.

// A software bug: is a defect in a computer program. Basically an unexpected or unintended behaviour of a computer program is a software bug. Bugs are completely normal in software development. bugs that are in simple code can be easily detected using the developer console. while complex code bug are detected with debugger. fixing a bug is easier in most cases than finding it. fixing a bug involves replacing wrong solution with new correct solution. then we can prevent the bug grom hapening again by searching the bug in similar code and writing tests using testing softwares.

// STEPS IN DEBBUGING

// * Identify the bug.
// * Find the bug.
// * Fix the bug.
// * Prevent the bug.

// --- DEBUGGING WITH THE CONSOLE AND BREAKPOINTS ---

// Assuming we are creating a function that will convert celcius to kelvin. it will recieve the celcius value from the prompt. then converts the value to kelvin by adding 273 to it. see below

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celcius',
//     // FIXING THE BUG
//     value: Number(prompt('degreec celcius:')), // The Problem was that the value of the prompt is usually recieved as a string which gave us a bu of 10273 instead of 283 when we input 10 degree celcius. to fix this, I had to add the Number function which will convert the prompt value to number and perform calculation.
//   };
//   console.log(measurement); // this was used to disply the content of the object and its data types.
//   // console.table(measurement);
//   // console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY THE BUG
// console.log(measureKelvin());

// CREATING A BIGGER BUG AND FIXING IT WITH DEVELOPER TOOL

// CODING CHALLENGE

// Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17,21.23] will print "... 17@C in 1 days ...21@C in 2days ...23@C in 3days..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a sring like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17,21,23]
// TEST DATA 2: [12,5,-5, 0, 4]

// Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the Xdays? Answer: index + 1;

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string @C
// - Srrings need o contain day (index + 1)
// - Add ... between elements and start and end of string

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = ''; // creating a string variable that will concatenate the values of the loop.
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}@C in ${i + 1} days ... `; // where concatenation of the loop values take place
//   }
//   console.log(`... ` + str); // Adding dots to the front of the final output.
// };

// printForecast(data1);
