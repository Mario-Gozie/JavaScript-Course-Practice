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
