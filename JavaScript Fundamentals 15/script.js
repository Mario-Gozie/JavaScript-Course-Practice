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
