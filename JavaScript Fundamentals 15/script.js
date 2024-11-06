"use strict";

// OOP
// Object can contain data, which we call property and it can also contain code or sets of code which we call methods.
// So we can put Data and corresponding behaviour in one object. this makes it easy to act directly on the data.
// Objects can be seen as small pieces of code, they are building blocks of applications, and interact with one another.
// This interaction happen through a public interface called API: methodds that the code outside of an object can access and use to communicate with the object.
// OOP was developed with the goal to organize code and make it more flexible and easier to maintian (avoiding spaghetti code)
// Objects can be created with a class. the class serves as a blueprint for creating objects.
// All object created through a class is called instances of the class and the class itself is not an object. so the class can be used to create many intances needed for a project.

// since we now know what a class is (object creater) and what instances are (object created from a class), HOW ARE CLASSES CREATED?

// There is no specifice way to create a class. but there are four things that will guide you in creating a class which are,
// ABSTRACTION, ENCAPSULATION, INHERITANCE AND POLYMORPHISM

// ABSTRACTION: Abstraction is simply, hide details that don't matter.
// ENCAPSULATION: Encapsulation simply means keeping properties and methods private inside the class so they are not accessible from outside the class. Some methods can be opposed as a public interface (API)
// INHERITANCE: In OOP when there are two classes that are closely related, we can have one class inherit some methods or properties from the other. so we will have on parent lass and one child class. The child class then extends the parents class. in other words, the child class may have more features than the parent class.
// POLYMORPHISIM: Polymorphism means a child element can overwrite a method it inherited from its parent. assuming in a company, there staff are in three groups, Employee, Admin and Authurs, These three group of individuals are all employees, so in OOP there will be three classes, one for Employees, another for Admin and Another for Authors, Both Admin and Author will inherit some properties from the Employee class which include name, username, password (which should be encapsulated), and maybe login method. now, if the admin needs maybe an extra feature to login, which is different from the one he inherited from the employee class, the Admin method is usually created to modify automatically the login method for the Admin during object creation with the Admin Class.

// HOW TO IMPLEMENT OOP IN JAVASCRIPT
// The process of creating an instances (object) is known as instantiation.
// In javascript, there is what is called prototype which contains methods. all objects are linked to this prototype. Hence, these objects can use methods in that prototype this is called prototypal inheritance. This is different from the inheritance we talked about initially which is class inheriting from a class. this is a case of an instance (object) inheriting from inheriting from a class. Object delgate behaviour(method) to linked prototype object which is another way of saying prototype inheritance.

// THERE ARE THREE WAYS OF DOING OBJECT ORIENTED PROGRAMING IN JAVASCRIPT WHICH ARE:

// a) Constructor Functions: In this Technique, objects are created from function;              This is how built-in objects like Arrays, Maps or Sets are actually implemented.

// b) ES6 Classes: Modern alternative to constructor function syntax; "Syntactic sugar". behind the scenes, it works exactly as the constructor functions. ES6 class do not behave like classes in "classical OOP" (last lecture). it is more like a layer over the constructor function classes.

// c) Object.create()  This is the easiest and the most straight forward way of linking an objet to a prototype object. however, it is rarely used unlike the two others.

// OOP BEGINS WITH CONSTRUCTOR FUCTION
// A constructor function is the same thing as the normal function just that in the constructor function we call the function with the new operator.

// it is usually advisable to start constructor function with a capital letter and other built in constructors like array and map also start with a capital letter.

// Also note that function declaration and fuction expression (what I am using right now) works for constructor function but arrow function does not work and that is because it doesnt have its own this keyword.

// The function below will create an object which in this will be for a person
const Person = function (firstName, birthYear) {
  //   console.log(this);

  // instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // CREATING METHOD WITHIN CONSTRUCTOR FUNCTION.

  // This is wrong and you should never do this. I mean creating a method in a constructor function. this is because if we do so, in a situation that we are supposed to create thousands of persons, it means we will have thousands of the calcAge function created this will really be terrible for the performance of our code.

  // This problem can be solved with prototype and prototype inheritance.

  //   this.calcAge = function () {
  //     2037 - this.birthYear;
  //   };
};

// constructor function is called with the new keyword, next to it.

const Jonas = new Person("Jonas", 1991);
console.log(Jonas);

// behind the scenes, the "new" added to the constructor function does Four (4) things
// 1. A new {} is created
// 2. The function is called, the this keyword will now be set to the newly created object. so the this keyword will be the empty object. this = {}
// 3. {} linked to prtotype (I will explain int the next lecture.)
// 4. Object created from the begining is now automatically returned from the constructor function.

const Matilda = new Person("Matilda", 2017);
const Jack = new Person("Jack", 1975);
console.log(Matilda, Jack);

// You remember that instances are objects created from a class constructor function are not classes actually like in other programing language like python. constructor function has been in existence since the creation of JavaScript. with the constructor function, we can say that Jonas Matilda and Jack are instances of the Person constructor function

// THRE IS AN OPERATOR FOR CHECKING IF AN OBJECT IS AN INSTANCE OF A CONSTRUCTOR FUNCTION, it returns a boolean. see below.

console.log(Jonas instanceof Person);

// CREATING STATIC METHODS IN CONSTRUCTIVE FUNCTIONS
// Methods created inside the constructors. objects created by the constructor do not inherit it.

Person.hey = function () {
  console.log("Hey there ✋");
  console.log(this); // the this keyword here is the whole Person constructor method which shows that it is the one calling the hey function and since the hey function is not in its prototype, objects created by it cant inherit it. hence, it is static.
};

Person.hey(); //Calling static methods

// Trying the static Method on object created by the Peron constructor function

// Jonas.hey(); //This will give an error because objects created by a constructor function do not inherit static function. only functions in the prototype can be inherited by objects.

// NEXT IS PROTOTYPE INHERITANCE.
// PROTOTYPE
// Every Function in JavaScript has a property called prototype including constructor functions.
// Every object created by a constructor funtion will get access to all the methods and properties defined on the constructor prototype property.

// To Visualize prototype

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// so now, All object of the constructor function will have access to functions declared in the prototype of that function.

// Lets use an object in the Person constructor function on its calcAge Prototype

Jonas.calcAge(); //So here, the CalcAge function/method was not created inside the Jonas object but it had access to the CalcAge function because of Prototype inheritance

// This same method will work for other objects like mathilda and Jack.
// This simply means that the this keyword is set to the object that is calling the method.

Matilda.calcAge();
Jack.calcAge();

// Objects will always have acess to the methods in its prototype and the prototype of the of all objects created by the person constructor function is known as "Person.prototype"

// To confirm prototype for objects created by Person constructor function, we use the code below.

// "__proto__" is the proto a property of the Person constructor function. it it is being set to the proto property object that is created by the Person constructor function.
console.log(Jonas.__proto__);
console.log(Jonas.__proto__ === Person.prototype); // This will give the boolean True. This also shows that the __proto__ property is a propety of the Person constructor function while the Person.prototype is the prototype of the objects created by the person constructor function.

// Another way for checking the Prototype of Jonas
console.log(Person.prototype.isPrototypeOf(Jonas));
console.log(Person.prototype.isPrototypeOf(Matilda));

// Just to show that Person.prototype is not a prototype of person but objects created by it.
console.log(Person.prototype.isPrototypeOf(Person));

// PROPERTIES CAN ALSO BE SET ON PROTOTYPES NOT JUST ONLY METHODS.

Person.prototype.species = "Homo Sapiens";
console.log(Jonas, Matilda); //This will be see in the prototype of these objects

console.log(Jonas.species, Matilda.species); // This will show it clearer

// Remember that species is not a direct property of Objects created by Person constructor function.
// ANOTHER WAY TO KNOW IF A PROPERTY IS A DIRECT PROPERTY OF AN OBJECT OR NOT.

console.log(Jonas.hasOwnProperty("firstName")); // Direct property will print the boolean true
console.log(Jonas.hasOwnProperty("species")); // Indirect property will print the boolean false.

// NEXT LECTURE: PROTOTYPE CHAIN.

// NOW YOU KNOW THAT THE PROTOTYPE OF PERSON CONSTRUCTOR IS __proto__
// You also know that the prototype for objects created by the Person constructor function is Person.prototype.
// There is another inner level of Prototype inside the Objects created by person which is known as "Object.prototype"

// lets see theses things in practice

console.log(Jonas.__proto__); // This will show us that the deeper level of Objects created by the Person constructor function has a prototype of Object.prototype
console.log(Jonas.__proto__.__proto__); // This will show us the "hasOwnProperty" and all other properties within the deeper level of Jonas Prototype. This is why we can call the hasOwnProperty on Jonas.

// All these steps above explain the prototype chaining

// What if we decide to go deeper?

console.log(Jonas.__proto__.__proto__.__proto__); // This will give null becuse after getting to the object.prototype level, there is no other prototype

// Person.prototype itself has a constructor property, which will still point back to the Peron constructor function.
// we can use console.dir to inspect the function
console.dir(Person.prototype.constructor);

// EVERY OBJECT INCLUDING FUNCTION HAS A PROTOTYPE.
// So we now know that functions too has a prototype.
// Let us look at the Prototype of an Array.

const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9]; // Creating a new Array. Remember that new Array() === []
console.log(arr.__proto__); //This contains all the methods that we have been using in Javascript on arrays. This is the reason why all array get access to this method. Every array does not have this method. but every array will inherit this from its prototype.

// CHECKING IF THE PROTOTYPE FOR OBJECTS CREATED BY ARRAY CONSTRUCTOR FUNCTION IS ARRAY.PROTOTYPE

console.log(arr.__proto__ === Array.prototype); // This will print true

// we can also go deeper where we can see the Object.prototype. which is in a deeper level i.e after Array.prototype

console.log(arr.__proto__.__proto__); // This is the prototype affter Array.prototype. it is also accessible by all arrays created. This simply works as a Chain.

// Now Let us use the Knowledge we have already.
// Since we know that all arrays inherit Methods in its prototype, let us try to create a method in the Array.prototype and use it.

// Let us create a method that will return all unique methods of an array.

Array.prototype.unique = function () {
  return [...new Set(this)]; //so here, I am saying, get the unique values of an array (That is why I used set) then put it in an an array and return it (that is why I useed the spread operator). Remember that the This keword is the object it is attached to
};

// Using the new method we created
console.log(arr.unique()); // Now all arrays will inherit this method, so we can call this method on any array

// HOWEVER, IT IS NOT NICE TO EXTEND THE PROTOTYPE OF A BUILT IN OBJECT. YOU CAN ALWAY DO THIS ON YOUR OWN TO SUIT THE PROJECT YOU WANT TO CARRY OUT. IT IS GENERALLY NOT A GOOD IDEA.

// Why do I say so? The reason is that subsequent versions of Javascript may add methods that have the same name as we used, which might work in a different way and that may break your code. The second reason is that when you work with a team of developers, this will be a bad idea.

// JUST FOR FUN, LETS DO LITTLE OOP ON OUR DOM DOCUMENT.
const h1 = document.querySelector("h1");
console.dir(h1); // this will give us the h1 element object. including the prototype which is the HTMLHeadingElement, which contains a lot of diffent things.

// let us show tha a function is an object and would have a prototype. see below, I will use a random function

console.dir((x) => x + 1); //this will show the prototype of fuctions that could be inherited by all function. Do you remember the call, bind and apply we learnt back then, they all can be found in prototype of functions.

// CODDING CHALLENGE ON CONSTRUCTOR FUNCTION.

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in Km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple time on each of them.
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Creating the accelerate method on the car prototype which should be accessible by all objects created by the Car constructor function.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}Km/hr`);
};

// Creating the accelerate method on the car prototype which should be accessible by all objects created by the Car constructor function.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}Km/hr`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

// Calling the acceleration mathod and brake method on bmw. we can see the speed increasing with acceleration and decelaration happening with brakes.
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

// NEXT VIDEO OF ANOTHER METHOD OF DOING OBJECT ORIENTED PROGRAMMING
// OBJECT ORIENTED PROGRAMMING WITH ES6
// This method of object oriented programming is just a way of sugar coating what we already know before in function constructor method of Object oriented programming. in this method, Classes are used so that OOP will look more like what we have in other programming languages like Javascript.

// There are two methods of creating classes/ class expression and class declaration. This is because classes are still functions. that is why we have class Expression and class declaration.

// Class Expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  // add a constructor method. this acts like the construction function, but infact, it is a method of a class.
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const Jessica = new PersonCl("Jessica", 1996); //creating a new object. Just like while using a constructor function in earlier lesson, we use new while calling a constructor function to create a new object.

// so basically, when we create a new instance, it is the constructor that is called which will return a new object. which will be stored into Jessica in this case

console.log(Jessica);

// We can see that the method is created below, which is the prototype of the object. so all the objects created by the constructor will have access or can use the methods in the prototype. This is just prototype inheritance.

Jessica.calcAge();

// checking if Personcl.prototype is the prototype of Jessica. which is a method created by PersonCL
console.log(Jessica.__proto__ === PersonCl.prototype);

// CREATING A METHOD OUTSIDE THE CLASS.
// You can still add Methods manually to a prototype and it will still work fine. see below!

//////////////////////////////////////
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

Jessica.greet();
///////////////////////////////////////////

// SOME THINGS TO KNOW ABOUT CLASSES

// 1. Classes are not Hoisted which means You cant use them before they are created, unlike in function Declaration.
// 2. Just like functions, Classes are first-class citizens which means, you can pass them into functions and return them into functions. remember I told you that classes are special type of functions behind the scenes.
// Body of classess are always executed in strict mode.

// WHICH SHOULD ONE USE BETWEEN CONSTRUCTOR FUNCTION AND CLASSES?
// I would say it all depends on preference.

// SETTERS AND GETTERS
// This is a feature common in all objects in JavaScript
// Every objet in JavaScrip has a property called getter and another called setter. These are properties that get and set a value.
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  // getting the last value of the movement array of the account object. the slice(-1) returns an array of the last value. using pop() brings it out of the array
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Creating a setter. a setter must take in a parameter

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //getters are not called with brackets. thats the difference between it an normal methods. This is very usesful when you want to read something as a property, but you want to do some calculations before returning the value.

// USING SETTERS

account.latest = 50; // if it was a normal method, we would have done account.latest(5) but here, as a setter, it is seen as a property so we had to equate it to a value which in this case is 5

console.log(account.movements);

// CLASSES DO HAVE GETTERS AND SETTERS, AND THEY ALL WORK IN THE SAME WAY. LET US SEE BELOW.
// Please go up to the PersonCL class to see getters and setters.

// calling the age getter in the PersonCl class

// class declaration
class PersonClGS {
  // add a constructor method. this acts like the construction function, but infact, it is a method of a class.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // This setter is used to check if a fullname value given is a full name. in the sence that it will fist confirm if there is a space between the name given and if there is a space it will set the name parameter to the fullname. if not, it will pop up an alert

  // so Each time we fill in a try creating an objet with this class, after inputing the name, the full name setter will be called.
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    //here, I am trying to set the fullname to name if there is a space. I added an underscore, so that the fullName property in the constructor function will be different from the one in the setter. if they are the same, there will be conflict, the code will run multiple times and produce an error.
    else alert(`${name} is not a full name!`);
  }

  // To fix The fullName issue after working comparing with the setter, we have to use a getter, to get/return the value from the setter.

  // in all, we will have two properties for full name, 1 will be _fullName from the setter, the other will be fullName returned by the getter below.

  //the full name returned by the getter will make it easy to run a code like Jessica.fullname instead of Jessica._fullname.

  // This pattern is important when we try to set a property that already exist.
  get fullName() {
    return this._fullName;
  }

  // CREATING STATIC METHOD
  // In creating static function in ES6, you use the word static.
  // remember that this method is not accessible by objects created by this class because it is not added to the class prototype
  static hey() {
    console.log("Hey there ✋");
    console.log(this);
  }
}

// Testing getters and setters
const JessicaDav = new PersonClGS("Jessica Davis", 1996);
console.log(JessicaDav.age);

// trying to create an object without full name. in other words, withous space between two names.

const walter = new PersonClGS("Walter", 1965); // This will Pop up an alert on the window.

// Calling the static function

PersonClGS.hey();

// NEXT VIDEO WILL BE ON STATIC METHODS
// static methods are methods attached to the constructor. they dont work on objects created on the prototype. so they are functions attached to the constructor. it only woek on the constructor function. an example is Array.from. it only works on the Array constructor but does not work on arrays.

// Let us now implement it for our constructor function and class functions above

// OOP WITH OBJECT CREATE
// there is a third way of implementing prototyping or prototype inheritance which is object.create. and it works in a bit different way.

// this does not require constructor function and it also does not require the new keyword.

// so we basically use object.create to set prototype of an object to any other function we want.

//let us recreate the person class from earlier.

// creating the prototype
const PersonProto = {
  // so basically, this is more like creating a prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // This function or method, will be the method that will create new objects that will have name and birthyear as properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// creating the object

const steven = Object.create(PersonProto); // Here, steven is an object and it will inherit the PersonProto prototype. in otherwords, it will be linked to PersonProto

// Just to see the steven object if it has the PersonProto prototype

console.log(steven);

// Creating properties for the steven Object.

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // this will definitely give a boolean which would be true

// Let us create another person

const sarah = Object.create(PersonProto);

// Even though this function creates the object, it does not use the 'new' keyword like when using  constructor function. This is an important thing to note.
sarah.init("Sarah", 1979);
sarah.calcAge();

// CODDING CHALLENGE

/*
1. Re-create challenge 1, but this time, using ES6 class;
2. Add a getter called 'speedUs' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUs' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the imput by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter. 

DATA CAR 1: 'Ford' going at 120 km/h
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}Km/hr`);
  }

  // Creating the accelerate method on the car prototype which should be accessible by all objects created by the Car constructor function.
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}Km/hr`);
  }

  get speedUs() {
    // so basically getters transform a method to a property and return a value when this is used when you want to perform some calculation before provideing a value.
    return this.speed / 1.6; // converting kilometers to miles
  }

  set speedUs(speed) {
    //This set sets the speed to m
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
// setting the speed value
ford.speedUs = 50; // this setter converts 50mile/hr to Km/h and sets it to the speed value.

console.log(ford); // This will print the new ford features which will contain the converted 50km to 80miles/hr and set as the new value for the speed property.

// INHERITANCE BETWEEN CLASSES

const PErson = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PErson.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// LINKING THE PERSON (PRIMARY FUNCTIONM) CONSTRUCTOR FUNTION TO THE STUDENT FUNCTION (SECONDARY FUNCTION). T
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // Instead of writing the above. call the person method here, we can set the "this" and set the this statement using call. So I am literally saying that let the this keyword in the PErson constructor be the this keyword in student constructor function. see below
  PErson.call(this, firstName, birthYear);
  this.course = course;
};

// we have been able to linke the constructor function of the student with the constructor function of the person. BUT WE NEED TO LINK THEIR PROTOTYPES, SO THAT THE PERSON CLASS CAN INHERIT THE STUDENT CLASS METHODS. This can be done using the object.create() method. This is because the main function of object. create is to link prototypes.

// LINKING PROTOTYPES. This must be done because you before adding creating methods in secondary classes. and in this case, the secondary class is Student. if you do this below after creating method in the secondary class, the linking process will overwrite the method you have created already.

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// CREATING A NEW OBJECT.

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// setting the constructor part of student to student.

Student.prototype.constructor = Student;

// checking to see that constructors are set right. Because of the above code both mike which is created with the student constructor function will be an instance of both student and Object constructor. HOWEVER, THE CODE ABOVE IS NOT MANDATORY BUT MAY BE IMPORTANT SOMETIME.

console.log(mike instanceof Student);
console.log(mike instanceof PErson);
console.dir(Student.prototype.constructor);

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car Besides a make and current speed, the EV also has current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: ;Tesla going at 140km/h, with a charge of 22%;

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINt: Review the definition of polymorphism 😊

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}Km/hr`);
};

Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}Km/hr`);
};

const Ev = function (make, speed, charge) {
  Cars.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Cars.prototype); //linking prototypes

//creating the chargeTo method

Ev.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

// creating another accelerate method for electric cars.
// A child class can overwrite element it inherited from the parent class.
// THE CODE BELOW HELPS TO EXPLAIN POLYMORPHISM SO WELL.

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Ev("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();

// OOP AND CREATION OF SECONDARY CLASSES WITH ES6 FUNCTIONS.

class PersonClGSuPDATED {
  // add a constructor method. this acts like the construction function, but infact, it is a method of a class.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // This setter is used to check if a fullname value given is a full name. in the sence that it will fist confirm if there is a space between the name given and if there is a space it will set the name parameter to the fullname. if not, it will pop up an alert

  // so Each time we fill in a try creating an objet with this class, after inputing the name, the full name setter will be called.
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    //here, I am trying to set the fullname to name if there is a space. I added an underscore, so that the fullName property in the constructor function will be different from the one in the setter. if they are the same, there will be conflict, the code will run multiple times and produce an error.
    else alert(`${name} is not a full name!`);
  }

  // To fix The fullName issue after working comparing with the setter, we have to use a getter, to get/return the value from the setter.

  // in all, we will have two properties for full name, 1 will be _fullName from the setter, the other will be fullName returned by the getter below.

  //the full name returned by the getter will make it easy to run a code like Jessica.fullname instead of Jessica._fullname.

  // This pattern is important when we try to set a property that already exist.
  get fullName() {
    return this._fullName;
  }

  // CREATING STATIC METHOD
  // In creating static function in ES6, you use the word static.
  // remember that this method is not accessible by objects created by this class because it is not added to the class prototype
  static hey() {
    console.log("Hey there ✋");
    console.log(this);
  }
}

// Student class to make student object inherit functions of the PersonCIGSUPDATED we need the extends keyword and use the word super() which will call the constructor function. so instead of using call, we use super.

// The extends keyword links the prototype chain.

// In summary Extends and Super is very important

class StudentUpdated extends PersonClGSuPDATED {
  constructor(fullName, birthYear, course) {
    // This super need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };

  // Overwriting the calcAge method in the parent class. this shows polymorphism
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like I am ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentUpdated("Marth Jones", 2012, "Computer Science");

martha.introduce();

martha.calcAge();

// USING OBJECT.CREATE TO IMPLEMENT CLASS INHERITANCE.

// Creating the Person Proto
const PersonProto1 = {
  // so basically, this is more like creating a prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // This function or method, will be the method that will create new objects that will have name and birthyear as properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Stephen = Object.create(PersonProto1); //Creating Stephen object and linking it to personProto Prototype

const StudentProto = Object.create(PersonProto); //creating another a student proto and linking it to peron proto, so that students can inherit the person proto.

//  Creating an initializer for the student proto, which is different from person proto by only course.
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// Introduce method for only students liked to the student prototype only.

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); //creating the jay Object

jay.init("Jay", 2010, "Computer Science"); // calling the initializer to input values into the jay object.
jay.introduce(); //calling introduce from the StudentPrototype.

jay.calcAge(); // calling the calcAge from the person prototype

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an acount, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    // this.movements.push(-val)
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);

acc1.deposit(250);
acc1.withdrawal(150);
acc1.requestLoan(1000);
acc1.approveLoan(1000); // This type of Data should not be accessible. This is why we will look at data Encapsulation soon.

console.log(acc1);

// NEXT VIDEO IS ON DATA PRIVACY AND ENCAPSULATION
// Encapsulation simply means keeping some data or functions private, such that they are not accessible outside the object. in otherwords, they are supposed to be private API and not public API

class AccountX {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // private property ADDING _ in front it doesn't really make it private, it is just something agreed on by developers. there is a better way.
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an acount, ${owner}`);
  }

  // since you now have the movement array encapsulated, we can create a method to access it.

  getMovement() {
    this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdrawal(val) {
    // this.movements.push(-val)
    this.deposit(-val);
  }

  // Encapsulated or protected approved loan method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const accX = new Account("Gozie", "EUR", 2222);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-150);

accX.deposit(250);
accX.withdrawal(150);
accX.requestLoan(1000);
accX.approveLoan(1000); // This type of Data should not be accessible. This is why we will look at data Encapsulation soon.

console.log(accX);
console.log(this.getMovement()); // with this, the movement can be accessed, but they can't be set. unless they use _movement to access the property to change values. but atleast, developers will know it is not supposed to be accessed.
