"use strict";
// We will continue working on our bankist app

// DIFFERENT DATA! Contians movement dates, currency and locale.

const account1 = {
  owner: `Jonas Schmedtmann`,
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, //%
  pin: 1111,

  movementsDates: [
    `2019-11-18T21:31:17.178Z`,
    `2019-12-23T07:42:02.383Z`,
    `2020-01-28T09:15:04.904Z`,
    `2020-04-01T10:17:24.185Z`,
    `2020-05-08T14:11:59.604Z`,
    `2020-05-27T17:01:17.194Z`,
    `2020-07-11T23:36:17.929Z`,
    `2019-07-12T10:51:36.790Z`,
  ],

  currency: `EUR`,
  locale: `pt-PT`, //de-DE
};

const account2 = {
  owner: `Jessica Davis`,
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    `2019-11-01T13:15:33.035Z`,
    `2019-11-30T09:48:16.867Z`,
    `2019-12-25T06:04:23.907Z`,
    `2019-11-01T13:15:33.035Z`,
    `2019-11-01T13:15:33.035Z`,
    `2019-11-01T13:15:33.035Z`,
    `2019-11-01T13:15:33.035Z`,
    `2019-11-01T13:15:33.035Z`,
  ],
};

// NOW LET'S LEATN ABOUT NUMBERS.
// The first thing to note is that in JavaScript all numbers are represented as float whether we write them as integers or decimals. to show that, see the code below!

console.log(23 === 23.0); // so we can see that 23 is the same as 23.0

// Numbers are represented in a 64 base 2 format. which means that numbers are always stored in a binary form. this means they are only stored in 1 nd 0. in this binary form, it is difficult to represent some fractions that are easy to represent in the base 10 system that we are used to.

// base 10 = 0 - 9
// base 2 = 0-1

console.log(0.1 + 0.2); // this is an example of a fraction diggicult to represent in base 2. it will give 0.300000000000000000000004 instead of simple 0.3 we could get if it is in base 10.

console.log(0.1 + 0.2 === 0.3); // This will result to false instead of true. This is simply an error in javascript.

// CONVERTING STRINGS TO NUMBERS.

console.log(Number("23")); // This is the one we started with. but there is a simpler one.

// The simpler way of converting strings to numbers. see below!
console.log(+"23"); // This works because immidiately javascript sees the plus (+) sign, it will do type coasion and convert all to numbers.

// Another way is parsing. This is done using the number function with the parswInr method. JavaScrpt uses this to pick only the number part of a string. BUT FOR THIS TO WORK, THE STRING HAS TO START WITH A NUMBER. this makes sence when you get a unit from css and you want to get rid of it.
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e23"));

// the parseInt function accepts a second arguement which is the so called Radix and the Reddix is the base of the normal system we are using here we are using the normal base 10 but we can make it explicit sometimes to prevent bugs.

console.log(Number.parseInt("30px", 10));

// There is also parseFloat
console.log(Number.parseFloat("2.5rem")); // This will give both the integer part and the part after the decimal point or float as it is called.
console.log(Number.parseInt("2.5rem")); // This will only give the integer part

// THERE IS A FUNCTION USED TO CHECK IF A VALUE IS A NUMBER. IT IS CALLED isNaN. which means is Not a Number. if a value is not a number, it will return true. if it is a number, it will return false.

console.log(Number.isNaN(20)); //this will give false
console.log(Number.isNaN("20")); //This will give false
console.log(Number.isNaN(+"20X")); //This will give True. because trying to convert it to a number shows it is originally not a number
console.log(Number.isNaN(23 / 0)); // Dividing by 0 gives us infinity. and infinity is a not a NaN so it will give a false

// NOTE isNaN IS NOT A GOOD WAY TO CHEK IF A VALUE IS NOT A NUMBER.

// There is a better way called isFinite.

// This is the best way for checkin ig a value is a number.

console.log(Number.isFinite(20)); //This will give true because it is a number so it is finite.
console.log(Number.isFinite("20")); // This will give a false because it is not a number so it is not finite
console.log(Number.isFinite(+"20X")); // This will give a false because it is not a number so it is not finite
console.log(Number.isFinite(23 / 0)); // ofcourse infinity is not finite.

// YOU CAN ALSO CHECK IF A VALUE IS AN INTEGER. see below!

console.log(Number.isInteger(23)); //This will equally to give a true
console.log(Number.isInteger(23.0)); // this will give true
console.log(Number.isInteger(23.5)); // this will give False.

// NEXT VIDEO: More Mathematical operation and rounding up numbers.

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // Alternative to square root. please put the exponential value in a bracket.

console.log(8 ** (1 / 3)); //calculating cubic root.
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2)); //Max does type coasion. so here, it will still give us 23 as the maximum number even though it is a string here.

// However, max does not do parsing
console.log(Math.max(5, 18, "23px", 11, 2)); // it will give Not a number NaN

// There is also MIN just as there is MAX
console.log(Math.min(5, 18, 23, 11, 2));

// calculating the area of a circle with radius of 10px

console.log(Math.PI * Number.parseFloat("10px") ** 2);

// THE RANDOM FUNCTION
// Random method gives values between 0 and 1
console.log(Math.trunc(Math.random() * 6) + 1); // Because the highest number would be 5, we added one to offset the truncation so that 6 could be accomodated. so the values will be between 1 and 6

// creating a function that will always generate random numbers between two values

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

//Trying the function above out

console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.trunc(23.3)); // This simply remove any decimal part

//round
console.log(Math.round(23.3)); // here we will have 23 because the number after the decimal point is not up to 5.
console.log(Math.round(23.9)); // This will give 24. it rounds to the nearest whole number

//Ceil This ceils to the nearest top value. so here, the both will be 24
console.log(Math.ceil(23.4));
console.log(Math.ceil(23.9));

// Floor. This moves the number to the nerest lower value. whether the value after the decimal point is up to 5 or not. it doesn't care. so we will have 23
console.log(Math.floor(23.9));
console.log(Math.floor(23.9));

// These functions also do type coasion
console.log(Math.floor("23.9"));

// Floor and trunc basically do the same thing when we are dealing with positive numbers. However, for Negative numbers, it works differently.

console.log(Math.trunc(-23.9)); // This will simply remove the decimal part.

console.log(Math.floor(-23.9)); // This will give -24 because -24 is less than -23

// Generally, Floor works better than  trunc so its advisable to use it in most cases than trunc.

// ROUNDING DECIMALS WITH toFixed. // but note that toFixed will always return a string. not a number. Remember that any value that is white in color on the console is a string.

console.log((2.7).toFixed(0)); // This will round to 3.
console.log((2.7).toFixed(3)); // This will return the string 2.700. this simply means that we want 3 plaes after the decimal point
console.log(+(2.345).toFixed(2)); // This will return the string 2.25. this simply means that we want 2 plaes after the decimal point. The plus (+) sign in front will covert the string to number.

// THE REMAINDER OPERATOR

// This oprerator (%) returns the remainder of a division.

console.log(5 % 2);

console.log(8 % 3);

// This Plays a very important role when checking if a number is even or odd.

// Checking if 6 is an even number. if it is, the remainder should be 0

console.log(6 % 2);

// Checking for odd number

console.log(7 % 2);

// Creating a simple function for checking for even number

const isEven = (n) => n % 2 === 0;

console.log(isEven(8)); // True
console.log(isEven(21)); // false
console.log(isEven(514)); //true

// NUMERIC SEPERATORS
// 287,460,000,000 this is easy to read right? what about the diameter below?

const diameter = 287460000000;

// Numeric seperators are underscores that are used in Javascript to make reading numbers a bit easy to understand.

const diamet = 287_460_000_000;

console.log(diamet); // logging this to the console shows that javaScript do ignore the underscores.

//More Examples.
const priceCents = 345_99; // This makes more sence when saying the values before the underscore or seperator is in Euro while the later is in cents.
console.log(priceCents);

// so with this underscore, we could give meaning to ceraiain parts of our numbers.

// Another example

const transferFee1 = 15_00; //This looks more like 15 dollars
const transferFee2 = 1_500; //This looks more like 1 thousand 500 dollars

// so the underscore gives them different meanings

const PI = 3.14_5; // This works fine

// THE RESTRICTION TO UNDERSCORE
// const PIs = 3._145; // This definitely will give an error because its not allowed around the decimal point.
// const PIis = _3.145; //it is not also allowed at the begining of a number

// const PIiis = 3.145_; // it is not allowed at the end of a number.
// const PIoss = 3.1__45; //Two uncerscores are not allowed together too

// ALSO NOTE THAT WHEN YOU TRY TO CONVERT A STRING WITH AN UNDERSCORE TO A NUMBER, IT WILL NOT WORK.

console.log(Number(`230000`)); //This works
console.log(Number(`230_000`)); // This does not work
console.log(Number.parseInt(`230_000`)); // This will just pull the numbers before the underscore as integers. so we will get only the 230. everyother thing will be ignored.

// WORKING WITH BIGINT

console.log(Number.MAX_SAFE_INTEGER); // This Max_safe_integer gives us the maximum value JavaScript can contain back in the days.

// Now bigINt allows for more numbers

console.log(23456789034567890356789035678903567890); // These numbers will be printed in exponential format.

// printing the number above with bigint to show all numbers instead of in exponential format
// if I add n to the end of the numbers, it will be printed in  the right format.
console.log(23456789034567890356789035678903567890n);

// Alternatively, we can use the bigint function.

console.log(BigInt(234567890345));

// Operations with big int

console.log(10000n + 10000n);

console.log(7800007928000364849937394012345672567n * 123456789034567823567n); // multiplication of a bigint is possible.

// However, you can't multiply bigint and regular number. see below!

const huge = 34567892533839393847n;
const num = 23;

console.log(huge * BigInt(num)); // This will not work unless the big it function is used with the num

// bigint works with comparison operators and other numbers. see below!

console.log(20n > 5); // This will give a ture
console.log(20n === 20); // This will give a false because 20n can't be equal to 20. 20n is a bigint while 20 is a regular number.

// showing type
console.log(typeof 20n);

console.log(20n == 20); //This will give true here because javaScript will do type coasion in a case of two equality signs.

console.log(20n == "20"); //This will also give true due to type coasion

console.log(huge + " is REALLY HUGE");

// Math Operations too don't work on bigint

// console.log(Math.sqrt(16n)); // This won't wprk

// Divions with bigint

console.log(12n / 3n); // This works
console.log(11n / 3n); // This works but the decimal part is removed

// FUNDAMENTALS OF DATE AND TIME.
// CREATING A DATE ON JAVASCRIPT
// THERE ARE 4 WAYS OF CREATING A DATE IN JAVASCRIPT

// 1) CREATING DATE WITH THE NEW DATE FUNCTION
const now = new Date();

console.log(now); // logging now to the console shows the current date and time

// 2) PARSING A DATE FROM A DATE STRING
console.log(new Date(`Aug 02 2020 18:05:41`)); // This will form a complete date based on the value you gave it.
console.log(new Date(`December 24, 2015`)); // However, in practice, it is not advisable to parse a string if the value is generated by javaScript, then it is safe.

// parsing account1 date
console.log(new Date(account1.movements[0]));

// You can even parse in year, month, day, hour minute and second. see below!

console.log(new Date(2037, 10, 19, 15, 23, 5)); // The date will be printed in the normal JavaScript format. if you look at the console, you will notice that what was printed on the console is november instead of october which is the 10 month. This shows that the month in JavaScript is zero based.

// one interesting thing about javaScript is that it corrects dates. lets use November 31 which does not even exist. we will see that javascript will mobe the date to the next day

console.log(new Date(2037, 10, 31, 15, 23, 5)); // This moves the date to december 1st

console.log(new Date(2037, 10, 33, 15, 23, 5)); // if I try November 33, it will move the date to december 3rd.

// getting the begining of unix time

console.log(new Date(0));

// getting the date 3 days after the unix time.

// TIMESTAMP: This is the number of miliseconds that has passed since the 1st of january 1970

// getting the timestamp for that 3rd day  YOU WILL SEE WHY THIS IS USEFUL LATER.
console.log(3 * 24 * 60 * 60 * 1000); // This is simply multiplication of 3 Days, 24 hours, 60 minutes, 60 seconds and 1000 milisecond. This will give you the date of 3 days after the unix time.

// JUST LIKE ARRAYS AND OBJECTS, DATES ARE OBJECTS TOO AND HAVE THEIR METHODS.

// WORKING WITH DATES

const future = new Date(2037, 10, 19, 15, 23); // Date without seconds coz its not necessary now.
console.log(future);

console.log(future.getFullYear()); //Please always use getFullYear(). avoid getYear()

console.log(future.getMonth()); // Remember that month is Zero based.

console.log(future.getDate()); // This will give you the figure day.

console.log(future.getDay()); // This gives you the day of the week. 4 means, Thursday and 1 means Monday.

console.log(future.getHours());

console.log(future.getMinutes());

console.log(future.getSeconds());

// You can even get the international standard format for the date string. see below!

console.log(future.toISOString()); // YOu can see that this is similar to the property in account1. so those dates were generated with this method.

// Getting timestamp. rember that this is the number of miliseconds that has passed since 1st of january 1970. This is done with getTume method.

console.log(future.getTime()); //This will print the timestamp for the date which is, how many miliseconds that has passed since january 1st 1970

// if we convert this Timestamp to date using the new Date function, we will get the exact date for that timestamp

console.log(new Date(future.getTime())); // we can see the date is the same

// You vsn get the current time stamp for today using date.now()

console.log(Date.now());

// There are set methods used to set parts of date, eg month, year, day etc to a particular value

future.setFullYear(2040);

console.log(future); // with this, we can see that the year is changed to 2040
