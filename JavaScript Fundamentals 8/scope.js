"use strict";

// The scope of a variable is the entire region where the variable is accessible.

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`; // firstName, Age and birthYear is accessible because variables of outer scopes are accessible.
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven"; // This variable name (firstName) is the same name as that the one I have on the global variable. but the values are different. so javaScript will consider first the variable within the scope first before looking for the global variable.
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "New Output"; // reassinging the output variable in an inner scope will make javaScript considers the value of the inner variable before that of the global or outer variable
      console.log(output);
    }
    // console.log(str); // This is will give undefined because the variable is called outside its scope. another reason is that const and let variables are block scoped so the are valid only within the block which they are created.

    // console.log(millenial); // This is a Var variable, called outside its scope works becase var variables are function scoped and not block scoped. they can work efficiently outside its scope.

    //add(2,3); // This will equally give undefined because functions are block scoped. remember they are equally values, so when called outside their scope, they will give undefined. and this is for only strict mode. if we remove this from strict mode, it will work outside its code. but we need to always be in strict mode.
  }
  printAge();

  return age;
}

const firstName = "jonas";
calcAge(1991); // This is a global variable so it will be detected or used anywhere in this script when javascript does look-up.

// console.log(age); // The age variable here will not be accessible because variables of inner scope are not accessible outside. you will get that the variable is not defined.

// printAge(); // This is  equally not accessible outside because it is in an inner scope.
