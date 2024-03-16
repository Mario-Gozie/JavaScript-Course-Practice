// let js = 'amazing';

//     console.log("Jonas");
//     console.log(23);

//     let firstName = "Jonas";
//     console.log(firstName);


//let javascriptIsFun = true;
//console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

// Changing the value of JavaScript to string from boolean. This is called dynamic typing.
//javascriptIsFun = 'YES!';
//console.log(typeof javascriptIsFun);

// Undefined data types is seen when a variable is created without a value.

//let year;
//console.log(year);
//console.log(typeof year);

// changing the content of the year variable from undefined to number.

//year=1991;
//console.log(typeof year);

//checking on the null data type it usually shows object on the console which is considered as a bug in javascript and one that can't be changed.
//console.log(typeof null);

// THREE DIFFERENT WAYS OF DEFINING VARIABLES IN JAVASCRIPT (CONST, VAR, LET)

//variables that can change later in the code are defined with "Let"

//let age = 30;
//age = 31; //(reassingning or mutating the age variable)

// CONST is for Variables that can't change later in the code.

//const birthYear = 1991;
//birthYear = 1090; //(const variables are immutable. in otherwords, it can't be changed.)

// An empty value can't be declared using const.

//const job;

// USING VAR Never use var

//var me = 'programmer';
//me = 'teacher';


// OPERATORS IN JAVASCRIPT. operators basically allows us transform values or combine values and do all kinds of works with values.
// There are many categories of operators. mathematical operators, comparison operators, logical operators assignment operators.

// Mathematical Operators

//const now = 2037;
//const ageJonas = now - 1991;
//const ageSarah = now - 2018;
//console.log(ageJonas, ageSarah);

//console.log(ageJonas * 2, ageJonas / 10 ,2**3);

// 2 ** 3 is 2 exponential 3 or 2 to the power of 3 = 2 * 2 * 2

// USING THE PLUS OPERATOR TO JOIN STRINGS OR CONCATENATE STRINGS

//const firsName = 'Jonas';
//const lastName = 'Shmedtman';

//console.log(firsName + ' ' + lastName);

// Assignment operator

//let x = 10 + 5; // 15
//x += 10; //x = x+10
//x *= 4; //x = x*4
//x ++; // x = x + 1
//x --; // x = x -1
//console.log(x);

// Comparison Operators

//console.log(ageJonas > ageSarah); // >, <, >=, <=

//console.log(ageSarah >= 18);

//const isFullAge = ageSarah >= 18;

//console.log(now - 1991 > now - 2018);

// OPERATOR PRECEDENCE

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018); // This code worked perfectly (subtraction first before greater than sign) because mathematical operators have higher precedence than comparison operators.

// let x, y;

// x = y = 25 - 10 - 5; // also know that mathematical operators have higher precedence than assignment operators. mathematical operations move from left to right while assingnment operations move from right to left that's why in this case, both x and y will be equal to 10.
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah)/2; // calculations that are group i.e in a bracket has the highest preceedings and will be executed first just like in mathematics.
// console.log(ageJonas, ageSarah, averageAge);

// // MY FIRST TASK

// const marksFirstMass = 78;
// const marksFirstHeight = 1.69;

// const johnFirstMass = 92;
// const johnFirstHeight = 1.95;

// const markFirstBmi = marksFirstMass/(marksFirstHeight * marksFirstHeight);

// const johnFirstBmi = johnFirstMass/(johnFirstHeight * johnFirstHeight);

// const markHigherBMI = markFirstBmi > johnFirstBmi;

// console.log(markFirstBmi, johnFirstBmi, markHigherBMI);




// const marksSecondMass = 95;
// const marksSecondHeight = 1.88;

// const johnSecondMass = 85;
// const johnSecondHeight = 1.76;

// const markSecondBmi = marksSecondMass/(marksSecondHeight * marksSecondHeight);

// const johnSecondBmi = johnSecondMass/(johnSecondHeight * johnSecondHeight);


// const marksecondHigherBMI = markSecondBmi > johnSecondBmi


// console.log (markSecondBmi, johnSecondBmi, marksecondHigherBMI)

// STRINGS

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(jonas);

// // Template literals are used to assemble multiply strings into one organized sets of strings. template literals are written with back ticks found above the tab key. this makes writing strings a bit easier. while using the template literals, variables and calculations are put into a curly bracket which has a dollar sign in front of it. it is easier because you think less about spaces between strings as well as stop the use of plus sign.

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(jonasNew);

// console.log(`Just a regular string ....`)

// // Using Template literals to write multi-line strings

// console.log('string with \n\
// multiple \n\
// lines') // Before template literals

// // with template literals

// console.log(`string
// multiple
// lines`)


// TALING DECISIONS: IF/ELSE STATEMENTS.

// writing a program to check if someone has gotten to the age of having a drivers liscence or not if the person is, it will print that to the console and if the person is not, it will print how many years left.

// const age = 19;
// const isOldEnough = age >= 18;


// // below you are saying if isOldEnough is true, run the code, else, it shouldnt run.
// if(isOldEnough) {
// console.log(`sarah can start driving 🚗`) // Emoji sign is given by pressing windows plus the period sign (.)
// }

// // WITH ELSE STATEMENT

// const newAge = 15;


// if(newAge >= 18) {
//     console.log(`sarah can start driving 🚗`)
// } else{
//     const yearsLeft = 18 - newAge;
//     console.log(`Sarah is too young. wait another ${yearsLeft} years 🙏`);
// }

// const birthYear = 2012;
// let century; // assingning an empty value to century.

// if(birthYear <= 2000){
//     century = 20; // conditionally reassingning century because if assigned here using let, we cant see the output when called outside.
// } else{
//     century = 21;
// }

// console.log(century);

// // PRACTICING IF/ELSE STATEMENT MORE

// // First BMI

//  const marksFirstMass = 78;
//  const marksFirstHeight = 1.69;

//  const johnFirstMass = 92;
//  const johnFirstHeight = 1.95;

//  const markFirstBmi = marksFirstMass/(marksFirstHeight * marksFirstHeight);

//  const johnFirstBmi = johnFirstMass/(johnFirstHeight * johnFirstHeight);


//  console.log(markFirstBmi, johnFirstBmi);


//  if (markFirstBmi > johnFirstBmi){
//     console.log(`Mark's BMI (${markFirstBmi}) is higher than John's!`)
//  } else{
//     console.log(`John's BMI (${johnFirstBmi}) is higher than Mark's!`)
//  };

// // Second BMI

//  const marksSecondMass = 95;
//  const marksSecondHeight = 1.88;

//  const johnSecondMass = 85;
//  const johnSecondHeight = 1.76;

//  const markSecondBmi = marksSecondMass/(marksSecondHeight * marksSecondHeight);

//  const johnSecondBmi = johnSecondMass/(johnSecondHeight * johnSecondHeight);

//  console.log(markSecondBmi, johnSecondBmi);

//  if (markSecondBmi > johnSecondBmi){
//     console.log(`Mark's BMI (${markSecondBmi}) is higher than John's!`)
//  } else{
//     console.log(`John's BMI (${johnSecondBmi}) is higher than Mark's!`)
//  };

// // TYPE CONVERSION AND COERCION.

// // Type conversion is when we convert values manually. Type Coercion, is when JavaScript converts by itself without us knowing.

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); // This gives NaN which means Not a Number.

// console.log(String(23)); // converting numbers to string.

// // Type coercion

// console.log('I am ' + 23 + ' years old'); //here 23 is automatically converted to a string.
// console.log('23' - '10' - 3) //Here because we have minus sign, the 23 and 10 strings are converted to numbers.
// console.log('23' + '10' + 3) //Here the 23 and 10 are seen as string because of the plus sign.
// console.log('23' * '2'); //Here it will be converted to a number.
// console.log('23' / '2'); //Here these strings will be converted to Numbers.

// let n = '1' + 1; // here when you sum 1 string adds the number 1, you have 11 string;
// n = n - 1; // here, the 11 strings is converted to a number because of the negative sign;
// console.log(n);

// TRUTHY AND FALSY VALUES

//falsy values are values that are not false but will be false when you try to convert them to a boolean.

// There are 5 falsy values: 0,'', undefined, null, NaN
// Every other thing or values will be converted to a truthy value eg all values that are not zero, strings that are not empty, defined strings, non null values and non NaN values.

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({})); // {} This represents empty object.
// console.log(Boolean(''));

// const money = 0;

// if(money){
//     console.log("Don't spend it all ;)");
// } else{
//     console.log('You should get a job!');
// } // this comparison gave us the else statement because money had the value of 0 and javascript tries to convert every condition to a boolean and because all 0 value while trying to convert to a boolean will give a falsy value, that's why the else statement was executed.

// // REPLACING 0 VALUE WITH 100

// const bigMoney = 100;

// if(bigMoney){
//     console.log("Don't spend it all ;)");
// } else{
//     console.log('You should get a job!');
// } //This will give the if value because the money value is greater than 0, so its a Truthy value.

// // TESTING TRUTHY AND FALSY VALUE WITH UNDEFINED

// let height;

// if(height){
//     console.log('YAY! Height is defined');
// } else{
//     console.log('Height is UNDEFINED');
// } // The else statement got executed because undefined variables are falsy values.

//EQUALITY OPERATORS

// There is a double equal sign and there is triple equal sign. the triple equal sign is called the strict quality operator because it only returns a true boolean value when two values are the same. while the two equal sign (==) could return true for a string equivalent of a number. eg '18' and 18. This is also knon as type coercion which I learnt earlier where the computer makes conversion for you automatically.

// const age = 18;

// if(age === 18) console.log('You just became an adult! (strict)'); // You dont need to have curly brackets whrn working with only one condition.


// const ages = '18';

// if(ages == 18) console.log('You just became an adult! (loose)');

// const favorite = prompt("what's your favorite number?"); //This gave a prompt in a browser and I imputed a value which was stored in the favorite variable. remember inputed values are usually strings unless converted.
// console.log(favorite);
// console.log(typeof favorite); //Here I was checking type for the number I chose.

// if(favorite == 28) console.log(`Cool ${favorite} is an amazing number`)  //Because the computer does type coversion and this is a double equal sign, this will do a loose comparison which says that the string value I inputed from the prompt which is 28 is the same as the number 28.

// // USING THE STRICT EQUALITY SIGN

// const favoriteday = prompt("what's your favorite day?"); 
// console.log(favoriteday);
// console.log(typeof favoriteday); //Here I was checking type for the number I chose.

// if(favoriteday === 28) console.log(`Cool ${favoriteday} is an amazing day`);  //Using strict equality operator. hence the prompt will not run because the number 28 is not the same as the string value of 28 I imputed.

// // CONVERTING INPUT TO NUMBER

// const favoriteMon = Number(prompt("what's your favorite Month?")); //Converting input values to number
// console.log(favoriteMon);
// console.log(typeof favoriteMon); //Here I was checking type for the number I chose.

// if(favoriteMon === 2) console.log(`Cool ${favoriteMon} is an amazing Month`);

// // uSING THE ELSE IF STATEMENT

// const favoritePosition = Number(prompt("what's your favorite Position?")); //Converting input values to number
// console.log(favoritePosition);
// console.log(typeof favoritePosition); //Here I was checking type for the number I chose.

// if(favoritePosition === 1) 
// {console.log(`Cool ${favoritePosition} is an amazing Position`)}
// else if(favoritePosition === 2){
//     console.log(`${favoritePosition} is also a good position`)
// }else if(favoritePosition === 3){
//     console.log(`${favoritePosition} is also not a bad one`)} 
// else{
//     console.log(`The position is neither 1 or 2`)
// };

// // USING THE Not Equal to SIGN
// // This equally has two versions the strict version (!==) and the loose version (!=);

// const JoeFavPosition = prompt(`what's joe favorite position`);

// if(JoeFavPosition !== 1){console.log(`why not 1?`)};

// // IN SUMMARY ALWAYS USE STRICT OPERATORS.

// // BOOLEAN LOGIC: AND, OR & NOT OPERATORS


// HOW LOGICAL OPERATORS WORK IN JAVASCRIPT

// const hasDriversLisence = true;
// const hasGoodVision = true;

// console.log(hasDriversLisence && hasGoodVision); // and is represented with double && in Javascript.

// //Using OR operator

// console.log(hasDriversLisence || hasGoodVision); // Or Operator

// // Using the Not (!) Operator.

// console.log(!hasDriversLisence); // This will give a false value because originally, its true.

// // Using it with conditions

// if(hasDriversLisence && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone else should drive...');
// }

// // Trying out with NOTand a new boolean Variable isTired

// const isTired = false; //This is set to false

// if(hasDriversLisence && hasGoodVision && !isTired){ // here I am simply saying that sarah should drive if she has a liscence, good vision, and when the value of isTired is false/Not True.
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone else should drive...');
// }

// // making changes (using false and addding one to name of variabe to test for cases where AND logical operator can give a false value.)
// const hasDriversLisence1 = true;
// const hasGoodVision1 = false;

// console.log(hasDriversLisence1 && hasGoodVision1); // one false while using and will be false. remember that the two conditions must be met.

// // Creating a condition to know if sarah can drive


// CODING CHALLENGE

// 1) Calculate the average score for each team, using the test data below.
// 2) Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same score).
// 3)  BONUS 1: Include a requirement for a minimum score of 100. with this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test minimum score, as well as multiple else-if blocks 😊.
// 4) BONUS 2: Minimum score also applies to a draw! so a draw only happens when both teams have the same score and both teams have the same score and both have a score greater or equal to 100 points. otherwise, no team wins the trophy.

//TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110;

//TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123;

//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106;

// GOOD LUCK.



// const dolphinsTestData1Average = (96 + 108 + 89)/3;
// const koalasTestData1Average = (88 + 91 + 110)/3;
// console.log(dolphinsTestData1Average,koalasTestData1Average)


// if(dolphinsTestData1Average > koalasTestData1Average){
//     console.log(`The Dolphins won! 🏆`)
// }else if(koalasTestData1Average > dolphinsTestData1Average){
//     console.log(`The Koalas won!🏆`)
// } else if(dolphinsTestData1Average === koalasTestData1Average){
//     console.log(`Both won the trophy!`)
// }

// // BONUS 1
// const dolphinsTestData2Average = (97 + 112 + 101)/3;
// const koalasTestData2Average = (109 + 95 + 123)/3;
// console.log(dolphinsTestData2Average,koalasTestData2Average)


// if(dolphinsTestData2Average > koalasTestData2Average && (dolphinsTestData2Average >= 100)){
//     console.log(`The Dolphins won! 🏆`)
// }else if(koalasTestData2Average > dolphinsTestData2Average && (koalasTestData2Average >= 100)){
//     console.log(`The Koalas won!🏆`)
// } else if(dolphinsTestData2Average === koalasTestData2Average){
//     console.log(`Both won the trophy!`)
// }



// //BONUS 2

// const dolphinsTestData3Average = (97 + 112 + 101)/3;
// const koalasTestData3Average = (109 + 95 + 106)/3;
// console.log(dolphinsTestData3Average,koalasTestData3Average)


// if(dolphinsTestData3Average > koalasTestData3Average && (dolphinsTestData3Average >= 100)){
//     console.log(`The Dolphins won! 🏆`)
// }else if(koalasTestData3Average > dolphinsTestData3Average && (koalasTestData3Average >= 100)){
//     console.log(`The Koalas won!🏆`)
// } else if(dolphinsTestData3Average === koalasTestData3Average && dolphinsTestData3Average >= 100 && koalasTestData3Average >= 100){
//     console.log(`Both won the trophy!`)
// } else{
//     console.log(`No one won the trophy! 😒`)
// }


// SWITCH STATEMENT (ALTERNATIVE TO IF ELSE STATEMENT)
// const day = 'Thursday';

// switch(day){
//     case 'monday': // day === 'Monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednessday':
//     case 'Thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default: // This is more like the else block in if statement
//         console.log('Not a valid day');
// }
// // the break here is very important to tell the computer to stop after a code works so it won't continue running.

// // writing the switch statement with if

// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if(day === 'tuesday'){
//     console.log('Prepare theory videos');
// } else if(day === 'wednesday' || day === 'Thursday'){
//     console.log('Write code examples');
// } else if(day === 'friday'){
//     console.log('Record videos');
// } else if(day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend');
// } else{
//     console.log('Not a valid day');
// }

// EXPRESSION AND STATEMENTS
// Expression
// An Expression is a piece of code that produces a value. eg 3 + 4, 1991, true && false && !false

// Statement is a bigger piece of code which does not produce value on itself. eg if else statement and a switch statement. so statements are make up of expressions. they perform some set of actions. another way of knowing statements is that they end with a semi-colon. its important to know this because sometimes in javaScript, statements and expression can't be put in the same place for example in template literals below, expressions go into the curly bracket. this expression gives a value. in that curly bracket, you can't put an if statement there because it is not an expression. however, a variable can be there because its simply an expression

// const me = 'Jonas'
// console.log(`I am ${2024 - 1996} years old ${me}!`)

// ANOTHER ALTERNATIVE TO IF ELSE STATEMENT IS THE CONDITIONAL TENARY OPERATOR

// const age = 23;

// age >= 18 ? console.log('I like to drink wine 🍷') : // the question mark there is simply saying if the statement is true, run the code after it and the semicolon means, if not it, run the other.
//         console.log('I like to drink water 💧');

// // This is an operator which gives a value, this simply means that this is an expression and we can assign the value into a variable
// // Lets see below.

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// // This is simply if else statment in a single line. so without the conditional operator, I would have used an if else statement.
// console.log(drink)

// // Lets define a variable outside and and reassign it inside an if else statement.

// let drink2;

// if(age >= 18){
//     drink2 = 'wine 🍷';
// } else{
//     drink2 = 'water 💧';
// }

// console.log(drink2);

// // its obvious that the tenary operator make the if statment simple and shorter.

// // remember that the tenary operator is an expression which gives a value. so it can go into the curly brackets of a template literal while if statement cant. lets give it a try.

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// CODING CHALLENGE FOR THIS SECTION

// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. in his country, it's usual to tip 15% if the bill value is between 50 to 300. if the value is different, the tip is 20%.


//1.) Your task is to calculate the tip, depending on the bill value. create a variable called tip for this. it's not allowed to use an if/else statemen. (if it's easier for you, you can start with an if /else statement and then try convert it to a tenary operator!)

//2.) Print a string to the console containing the bill value, the tip and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'


//TEST DATA: Test for bill value is 275, 40 and 430;


// MY SOLUTION.

// let bill = 430;
// let tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;


// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip} 😍😊! `);


// VERSIONS OF JAVASCRIPTS

// The very first Java script was in the done in 10 days (1995), the second was in the year 1996 and it was called LiveScrpt and later called Java Script to attract Java developers because Java was trending then. JavaScript was standardized in 1997 and was called ECMAScript 1 (ES1), later ES5 was relaeased in 2009 and then ES6 which is also known as ES2015 or ECMAScript 2015 was released in 2015. since then they have be a new release every year.

// java script is backward compactible which means, old javascript works on old browsers and new browsers. This is because old features are not removed when making new features, it's just an incremental update. on the other hand it is not forward compactible. which means that new javascript dont work on old browsers. to takle this, we convert all new Javascript to ES5 using Babel this is called transpiling and polyfilling your code. This is because ES5 is supported on all browsers.  Another way is to use the latest browser while developing to know if its compactible. From ES6 or ES 2015 to ES 2020 are not supported by old browses so we use transpilling and polyfilling process to get it working but the release from 2021 i.e ES2021 can already use some features in production with transpiling and polyfiling. 









