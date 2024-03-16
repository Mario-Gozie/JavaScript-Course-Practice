// Activating strict mode. This helps to have a more secured code and avoid errors. it forbids us to do certain things and it creates visible errors instead of failing silently. strict also lets you know when you are using reserved Javascript words as variable or value. This is to avoid using them as variables.

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest)hasDriversLicense = true;
// if(hasDriversLicense)console.log(`I can drive`)

// FUNCTIONS
// A function is a piece of code that can be reused over and over again in our code. its like variable but variable hold values but function holds chunks of codes.

// function logger(){
//     console.log(`My name is Jonas`);
// }
// // calling/ running /invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice)

// // calling the fruitProcessor agind

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// // There are two ways of creating a function which are by DECLARATION and by EXPRESSION.
// // BY DECLARATION

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);

// console.log(age1)

// // BY EXPRESSION
// // here, by expresion, we didn't give the function a name. I wrote it as an expression and put it into a variable. so it is an expression and remember an expresson produces a value.

// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// // Calling the expression function is just the same way.

// const age2 = calcAge2(1996);

// console.log(age2);

// // The main difference between function declaration and function expression is that in function declaration, you can call the function before they are even declared and it will work. but with expression, it will not work.

// // ARROW FUNCTION (This was introdused in ES6)

// const calcAge3 = birthYear => 2037 - birthYear; // The arrow (=>) is simply why this is called an arrow function. what we want to return is before the arrow which is the birthYear and we are putting it into a variable called calcAge3. This is quite easier to write and understand. 

// // calling the arrow function

// const age3 = calcAge3(1996);

// console.log(age3)

// // More complex arrow funtion
// // calculating years until retirement.

// const yearsUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1996));

// // More complex functions

// const yearsUntilRetirementName = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirementName(1996, 'Chigozirim'));


// // CALLING A FUNCTION FROM ANOTHER FUNCTION

// // imagine a situation you are making a juice and there is need for a machine to cut the fruits into chuncks before processing it. Thats the senero we want to create using the previous function we created for food processor.

// function cutFruitPieces(fruit){
//     return fruit * 4;  // so in this senero, if i am given 2 apples, this function will return 8 pieces of it. if given 2 oranges, it will return 8 pieces
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples); // so here I am calling on the fruit cutter function to cut the apples before processing.
//     const orangePieces = cutFruitPieces(oranges); // so here I am calling on the fruit cutter function to cut the oranges before processing.

//     const juice = `Juice with ${applePieces} pieces of and ${orangePieces} pieces of oranges.`
//     return juice;
// }

// // calling the fruitProcessor function

// console.log(fruitProcessor(2,3)); //This calls the fruit processor funtion, which will first call the cutfruitPieces function to cut the fruits before procesiing

// More Review on Functions
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const yearsUntilRetirementName = function (birthYear, firstName) { // Practicing calling a function inside a function. please know that the birthYear parameter in the calcAge function is seen to be different from the one in yearsUntilRetirement in JavaScript. they are seen like in the case of local variables.  
//         const age = calcAge(birthYear)
//          const retirement = 65 - age;
//          return `${firstName} retires in ${retirement} years`;
//      }

// console.log(yearsUntilRetirementName(1996, "Chigozirim"))

// Making the function more complicated using if statement within.


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const yearsUntilRetirementName = function (birthYear, firstName) { 
//         const age = calcAge(birthYear)
//          const retirement = 65 - age;
//          if(retirement > 0){return `${firstName} retires in ${retirement} years`;
//         }else{
//             return `${firstName} is no longer with us` // Note that the return statement ends the action of a function. in other words, whatever that comes after the return statement cannot be executed.
//         }
         
//      }

// console.log(yearsUntilRetirementName(1996, "Chigozirim"))
// console.log(yearsUntilRetirementName(1962, "Joe"))

// CODING CHALLENGE


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins.

//1) create an arrow function 'calcAverage' to calculate the average of 3 scores.
//2) Use the function to calculate the average of both teams
//3) create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the ponts, according to the rule above. Example: "Koalas wins (30 vs.13)".
//4) Use the 'checkWinner' function to determine the winner of both DATA 1 and DATA 2

//TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49;

//TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27;


// GOOD LUCK.

// SOLUTION

// const calcAverage = (a,b,c) => (a + b + c)/3;
// console.log(calcAverage(44,23,71));

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){console.log(`Dolphins win 🏆! (${avgDolphins} vs ${avgKoalas})`)} 
//     else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas wins 🏆! (${avgKoalas} vs ${avgDolphins})`)
//     } else{
//         console.log(`No one wins .....`)
//     }
// }

// // CALLING THE FUNCTION

// checkWinner(scoreDolphins, scoreKoalas)

// // USING TEST DATA 2

// // Because we used let in creating these variables, we can reassign it here for the second test data
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);

// console.log(scoreDolphins, scoreKoalas);

// // CALLING THE FUNCTION AGAIN

// checkWinner(scoreDolphins,scoreKoalas);


// ARRAYS DATA STRUCTURE

// Assuming you want to store names of your friends, you will store them in one variable each which doesn't really make sence and wastes time. that's why we have data structures like arrays. which is more like a big container that stores data.

// so instead of 

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // we use an Array

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// // if I need to get the first person in my friends array, this is how below.
// console.log(friends[0]); //This is because arrays are Zero based.
// //If I need to see the third person on the friend array, see below
// console.log(friends[2]);

// //To know how many data in an array, we use length property.
// console.log(friends.length);
// // getting the last data in an array using length property.
// console.log(friends[friends.length-1]);

// // Another way of creating an array is by using new Array and a bracket. This is also called an array function because it uses a bracket.

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Arrays can be mutated or changed using the square bracket. eg. let me change peter to jay
// friends[2] = 'Jay';
// console.log(friends);

// // you might be wondering why I was apple to change the content of an array for an array variable created with const when its already said that const variables can't be reassigned. well, this is because arrays are not primitive values, so they can be mutated. what you cant do is changing the whole friends array. see example below.

// //friends = ['Bob', 'IK', 'Fred'];

// // An array can hold values of different types, variables, expressions and even arrays (like the Jonas array) at the same time. see example below.

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991]

// const firstName = 'Chigozirim'

// const Chigozirim = new Array(firstName, jonas, 'Teacher' );

// console.log(Chigozirim);

// // checking the length of the array

// console.log(Chigozirim.length)

// EXCERCISE ON ARRAYS using the calc age function.

// const calcAge = function(birthYear){
//          return 2037 - birthYear;
//      }


// const years = [1990, 1967, 2002, 2010, 2018]; // here I am trying to calculate age for people having this ages in an array. but if I use the variable name for the array which is years, it won't work. I will get NaN which means not a number. but I could calculate for individual contents of the array. see below.

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);

// console.log(age1, age2, age3);
// // Putting everything into a new array

// const ages = new Array(age1, age2, age3)

// console.log(ages)

// // Alternative of the ages array using the expression directly.

// const agess = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]

// console.log(agess);

// BASIC ARRAY OPERATIONS (METHODS)

// const friends = ['Micheal', 'Steven', 'Peter'];

// // Push method. it adds elements to the end of an array. so let me push/put Jay to the end of the friends array.

// friends.push('Jay');
// console.log(friends);

// // unshift method adds elements to the begining of an array. lets see below

// friends.unshift('John');
// console.log(friends);

// // To remove elements from an array we use the pop method. which removes the last element of an array. so let me remove jay.

// friends.pop(); // I don't need anything to be in the function bracket before I remove the last element. pop does the job perfectly

// console.log(friends);

// // To remove the first element from an array, we use shift. so let me remove John.

// friends.shift();
// console.log(friends);

// // To know the position of an element in an array, we use indexOf() function.

// console.log(friends.indexOf('Steven'));

// // if you try the indexOf() method on an element that does not exist in an array, you will get an index of -1. see below

// console.log(friends.indexOf('Bob'));

// // To know if an element is part of an array, we use includes() method which will return a boolean of true or false.
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// // includes also uses a strict equality (you remember === ?) so if you add 23 Number and search for 23 string, you will get the false boolean. see below.

// friends.push(23);
// console.log(friends.includes('23'));

// // Using the includes() method to write conditionals for checking the Number 23

// if(friends.includes('23')){
//     console.log(`Yes the number 23 is here`);
// } else {
//     console.log(`There is no number 23 here maybe you should try the string value if you feel it is here`);
// }

// CODE CHALLENGE 


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill value is between 50 to 300. and if the value is different, the tip is 20%.


//1.) write a function 'calcTip' that takes any bill value as an input and retrns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the funtion type you like the most. Test the function using a bill value of 100.

//2.) And now let's use arrays! so create an array 'bills' containing the test data below.

//3) Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

//4) BONUS: Create an array 'total' containing the total values, so the bill + tip.



//TEST DATA: Test for bill value is 125, 555 and 44;

// SOLUTION

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2 
// }
// An alternative to the function above.

// function calcTip(bill){
//     if(bill >= 50 && bill <= 300){
//         return bill * 0.15;
//     } else{
//         return bill * 0.20;
//     }
// }

// console.log(calcTip(100));


// const bills = new Array(125, 555, 44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

// console.log(bills, tips);

// const total = new Array(bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), calcTip(bills[2]) + bills[2] );

// console.log(total);


// OBJECTS (Another type of Data structure) The main difference between an array and an object is that you can't give elements in an array name. in other words, you can't reference those elements by name. This is a problem that the data structure called objects solve. in Objects, there is key value pairs.


// Example of an Object.
// To name create an object, you use curly braces instead of hard brackets like in arrays.
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     age:2037-1991,
//     job:'Teacher',
//     friends: ['Micheal','Peter','Steven']
// }

// Here you can see that naming of elements is possible. This is called the key value pair. where the name of the element is known as the key or property while the element is also known as the value.

// another important thing about objects is that the order of the values does not matter when you want to retrieve them. unlike in arrays where their order is necessary to retrieve them. This means that we should use an array for an ordered data and objects for unstructured data or data we want to name and retrieve based on the name.

// HOW TO RETRIEVE DATA FROM AN OBJECT. (DOT AND BRACKET NOTATION)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     age:2037-1991,
//     job:'Teacher',
//     friends: ['Micheal','Peter','Steven']
// }

// console.log(jonas);

// //USING THE DOT NOTATION TO GET PROPERTIES

// console.log(jonas.lastName);

// //USING THE BRACKET here, you make the property appear as a string in other words, you put it into a quotation mark. the big difference is that with the bracket, you can put an expression within the bracket.
// console.log(jonas['lastName']);

// //Let me use an expression within.

// const nameKey = 'Name'; //(this is the last part of the firstName and lastName properties in the jonas object)

// console.log(jonas['first'+ nameKey]); // so here I am basically saying concat the first part of firstName which is first, with then nameKey variabe that contains Name. so the computer will be having firstName. then it will go in search of firstName in the jonas object. this is how to use expression in the hard brackets.
// console.log(jonas['last'+ nameKey]); // so here I am basically saying concat the first part of lastName which is last, with then nameKey variabe that contains Name. so the computer will be having lastName. then it will go in search of lastName in the jonas object. this is how to use expression in the hard brackets.

// // MORE USE OF THE DOT NOTATION

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'); // This is used to get an input value from the window prompt and store it in the interestedIn variable.

// console.log(jonas[interestedIn]); //This will give you the job of jonas because its in the bracket and the bracket contains expression and expressions contain values but when you use the dot, you wont see anything. so basically, the expression was used to asses similar property of jonas object. remember that variable contains expression. see that it won't work in the expression below.
// // console.log(jonas.interestedIn)

// // USING OBJECTS WITH HARD BRACKET AND IF STATEMENT

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log(`I dont have such info! Choose between firstName, lastName, age, job, and friends`);
// }

// // USING DOT NOTATION TO ADD MORE VALUES TO AN OBJECT

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend called is ${jonas.friends[0]}`);

// OBJECT METHODS

// Objects can hold any value which includes, numbers, strings, arrays, objects and even functions. yes functions because functions give a value.

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     birthYear:1991,
//     job:'Teacher',
//     friends: ['Micheal','Peter','Steven'],
//     hasDriversLicense: true,

//     calcAge: function(birthYear){ // Adding a function to an object. any function attached to an object is called a method.
//         return 2037 - birthYear;
//     }
// }

// const calcAge = function(birthYear){ // This is a function written as an expressson. ther is no much difernce between it and what I have written in the method. if I use the fuction method that has a function name af after the function, it wont work. it needs an expression. which is something that gives a value. only such can stay within an object.
//     return 2037 -birthYear;
// }

// console.log(jonas.calcAge(jonas['birthYear']));

// USING THIS STATEMENT

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     birthYear:1991,
//     job:'Teacher',
//     friends: ['Micheal','Peter','Steven'],
//     hasDriversLicense: true,
// // In the commented method, we passed a parameter which represent a value in the same object. we could avoid this with the 'this' method. This refers to the object calling the function, it prevents using the parameter which is a property of the same object over and over again within a functin in the object. lets see below.
//     // calcAge: function(birthYear){ 
//     //     return 2037 - birthYear;
//     // }
//     calcAge: function(){ 
//         console.log(this) //This is just to make it clearer that this refers to the object. so it will display all content of the object
//         return 2037 - this.birthYear;
//         //You might wonder why use this.birthYear instead jonas.birthYear when it is that this refers to jonas well, if you use jonas.birthYear instead of this.birthYear, and you later decide to change the objects name from jonas to fred, it means you will also come inside the function to change the jonas.birthYear to fred.birthYear.
//     }
// }

// //To now calculate age, using the calc age function, I dont need to use the jonas['birthYear'] expression I used within the jonas object function just like the commented one directly below because I have used this method. all I need to do is just call the funciton.

// //console.log(jonas.calcAge(jonas['birthYear'])); 

// console.log(jonas.calcAge());

// CREATING A NEW PROPERTY FOR AN OBJECT WITHIN A FUNCTION IN AN OBJECT 
// In other words, let me put the calculated age into an age property in jonas object, using the calcAge function within the object. this is to make reference to it as jonas.age in subsequent times after calling it up with the calcAge function for the first time.
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     birthYear:1991,
//     job:'Teacher',
//     friends: ['Micheal','Peter','Steven'],
//     hasDriversLicense: true,

//     calcAge: function(){ 
//         this.age = 2037 - this.birthYear
//         return this.age;
//     }
// }

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);

// CHALLENGE

// write a  method that will say "James is a 46-year old teacher and he has a/no drivers lisence"

// const James = {
//     firstName: 'James',
//     birthYear: 1991,
//     hasDriversLicense: true,
//     job:'teacher',

//     details: function(){
//         this.age = 2037 - this.birthYear;
//         if(this.hasDriversLicense){
//             return `${this.firstName} is a ${this.age}-year old ${this.job} and he has a drivers liscence`
//         }else{
//             return `${this.firstName} is a ${this.age}-year old ${this.job} and he has no drivers liscence`
//         }
//     },
// // Doing the same task with tenary operator.
//     detailsWithTenaryOperator: function(){
//             this.age = 2037 - 1991;
//         return `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`}

// }


// console.log(James.details());
// console.log(James.detailsWithTenaryOperator());

// CODING CHALLENGE

// lets go to Mark and John comparing their BMIs! This TimeRanges, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 =mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass and height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). store the BMI value to a property and also return it from the method.

// 3. Log to the console who has the higher BMI, together with the respective BMI. 
// Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


// TEST DATA: Mark's weights 78kg and 1.69 m tall. John weights 92kg and is 1.95 m tall.

// GOOD LUCK 😊

// SOLUTION
// FOR MARK

// const mark = {
//     fullName: 'Mark Miller',
//     mass:78,
//     height:1.69,

//     calcBMI: function(){
//         this.BMI = this.mass/ (this.height **2);
//         return this.BMI;
//     }
// }


// // FOR JOHN
// const john = {
//     fullName: 'John Smith',
//     mass:92,
//     height:1.95,

//     calcBMI: function(){
//         this.BMI = this.mass/ (this.height **2);
//         return this.BMI;
//     }
// }

// john.calcBMI()
// mark.calcBMI()

// console.log(mark.BMI,john.BMI)

// // Function to compare
// // const compareBMI = function(markBMI, johnBMI){
// //     markBMI > johnBMI ? `Mark's BMI (${markBMI}) is higher than John's ${johnBMI}!` :
// //     `John's BMI (${johnBMI}) is higher than Mark's ${markBMI}!`
// // }


//     if (mark.BMI > john.BMI){console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`)
//     } else{
//     console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`)
//     }

// LOOPS (ITERATION)
// This helps us to automate repeatative tasks.

// FOR LOOP
// Here I initially declared the rep variable and its initial value as 1(let rep=1(I used let coz the rep value will definitely change at different points)), then said provided rep is < or equal to 10 (rep <= 10), the loop should run. then I also said that the rep should be increased by 1 each time the condition is met (rep++)
// for(let rep = 1; rep <= 10; rep++){ //remember that rep++ means add 1 to rep. 
//     console.log(`Lifting weight repetation ${rep} 🏋️‍♀️`)
// }

// FOR LOOP IN ARRAY. For loops are commonly used in arrays.

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Micheal','Peter','Steven']
// ]

// Parts of this loop below
// let i = 0; This is the traditional counter and I have to start it at zero because arrays are zero based when it comes to reading elements out of the array.
// i < jonas.length; This is the condition which simply says, provided the counter is less than the total length of the array, run the loop.
// i++ This updates the counter and it simply means add one after each loop.
// jonas[i] This is using the counter as an index to make refference to the contents of the jonas array, remember we interntionally started the counter at 0 because arrays are zero based.

// for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]) // You know an array is an object thats why the array of friends within the jonas array will will have an object type.
// }

// creating a new Array that will contain types of each element in jonas.

// const typeofJonas = new Array();

// for(let i = 0; i < jonas.length ; i++){

//     //filling the empty array
//     typeofJonas[i] = typeof jonas[i];
// }

// console.log(typeofJonas);

// Alternatively you can use the push method to move elements to the end of an array. Lets try to add elemets to of types of Jonas to an array.

// const typesofjon = []

// for(let i = 0; i < jonas.length; i++){
//     typesofjon.push(typeof jonas[i])
// }

// console.log(typesofjon);

// MORE PRACTICAL EXAMPLES
// calculating the ages for years in an Array.

// const years = [1991,2007,1969,2020];
// let currentYear = 2037;
// const ages = new Array()

// for(let i = 0; i < years.length ; i++){
//     ages[i] = currentYear - years[i];
// }

// console.log(ages);

// Alternatively with push

// const years = [1991,2007,1969,2020];
// let currentYear = 2037;
// const ages = new Array()

// for(let i = 0; i < years.length ; i++){
//     ages.push(currentYear - years[i]);
// }

// console.log(ages);

// CONTINUE AND BREAK STATEMENTS IN LOOPS

// break is to completely terminate the loop process, continue skips the process based on condition specified.

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Micheal','Peter','Steven']
// ]


// console.log('--ONLY STRINGS--')

// for (let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue; // here I am basically saying that if the type of jonas is not a string continue. in other words, I want to skip everything that is not a string and print only strings. so other elements like the age which is a number and the friends array within (['Micheal' , 'Peter' , 'Steven']) will be skipped.
//          console.log(jonas[i], typeof jonas[i]) // You know an array is an object thats why the array of friends within the jonas array will will have an object type.

//      }


// BREAK. (This completely stops the process)
// So what we will do now is to stop the process immidiately we find a number.

// console.log('--BREAK WITH NUMBER--')

// for (let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') break; //This stops the process immidiately ti founds a number. it won't even print the number.
//          console.log(jonas[i], typeof jonas[i]) 

//      }

// LOOPING BACKWARDS AND LOOP IN LOOPS

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Micheal','Peter','Steven']
// ]
// // In the loop below, let i = (jonas.length -1); 5imply means that let the first value of i be the last positional value of jonas. this is because array is zero based and the position for the last value of jonas is given by (jonas.length - 1).
// //i >= 0; this simply means that the loop should run provided its greater or equal to zero. remember that arrays are zero based.
// // i-- This simply means that we decrease by 1 after each loop. This is because its a backward loop in the forward loop, we increase.

// for(let i = (jonas.length -1); i >= 0; i--){
//     console.log(i, jonas[i])
// }

// // LOOP INSIDE A LOOP

// for(let excercise = 1; excercise < 4; excercise++){
//     console.log(`----------Starting exercise ${excercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${excercise}: Lifting weight repetation ${rep} 🏋️‍♀️`)
//     }

// }

// WHILE LOOP
// The main difference between a while loop, and a for loop is that a for loop need, an initial value, a condition and an increaser or decreaser as the case may be within its bracket while a while loop needs only a condition inside its bracket and its first value outside with its increaser or decreaser within the loop.
// let rep = 1;


// while(rep <= 10){
//     console.log(`WHILE: lifting weights repeatation ${rep}`);
//     rep++
// }

// Please note that a while loop is not dependent on an counter(A number increasing or decreasing). sometimes, that is what we need to solve a problem. lets look at a scenero below of rolling a dice.

// IN SUMMARY, A WHILE LOOP IS USED PERFECTLY WHEN THER IS NO NEED FOR A COUNTER (a value that increases and decreases.). BUT IT IS NEEDED WHEN THERE IS NEED FOR RANDOM VARIABLE VALUES.

// let dice = Math.trunc(Math.random() * 6) + 1; //here I am simply saying, pick a random number which should be between 0 and 1 using Math.random(), multiply it by 6 which is the maximum number a dice can have. Then remove the decimal part with Math.trunc then add 1

// while(dice !== 6){ // if we were using a counter, maybe we would have considered a >,<, <=,>= sign.
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1; // reassigning a new number to the dice to run the loop again.

//     if (dice === 6){
//         console.log(`The loop has to end because we got a ${dice}`) // This can only run when the loop meets a 6.
//     }
// }


// CODE CHALLENGE 


// Let's improve Stephen's tip calculator even more. this time using loop!

// 1) Create an array 'bills' containing all 10 bill values.

// 2) Create empty array for the tips and the totals ('tips' and 'total')

// 3) Use the 'calcTip' funtion we wrote before (no need to repeat) to calculate tip and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations.

//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals array.

// 4 BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an arguement. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:

function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else{
        return bill * 0.20;
    }
}

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const total = [];
console.log(bills);


    for(let i = 0; i < bills.length ; i++){
        const tip = calcTip(bills[i]);
            tips.push(tip);
            total.push(tip + bills[i]);
    }

console.log(bills, tips, total)

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length
}

// console.log(calcAverage([2,3,7])); //testing the function

console.log(calcAverage(total))
console.log(calcAverage(tips))

console.log(`write the question for the task above`)












