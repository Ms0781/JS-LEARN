//functional hoisting
myFunction();

function myFunction() {
  console.log("My Name is MS");
}

//var

//var hoist in js so this will goes on top.
//this will print undefined because we have assign value to variable
console.log(variable1);
var variable1;

//Here variable will goes on top but will print undefined because variable declaration can only hoist not
console.log(variable2);
var variable2 = 10;
var variable3;
variable3 = 10;

//let variable can not be hoisted in js
//below will give Reference Error because we are accessing varaible before it's declare
try {
  console.log(variable1);
  let variable1 = 1;
} catch (exception) {
  console.log("====================================");
  console.log("let variable can not be hoisted.");
  console.log("====================================");
}

try {
  console.log(MY_CONSTANT);
  const MY_CONSTANT = 1.24;
} catch (exception) {
  console.log("====================================");
  console.log("Constant Variable Can not be hoisted");
  console.log("====================================");
}

try {
  console.log(person.name);
  const person = {
    name: "MS",
    age: 24,
  };
} catch (Exception) {
  console.log("====================================");
  console.log("Object can not be hoisted");
  console.log("====================================");
}

//class declaration can not be hoisted

//Unlike function declarations, class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction), which means you cannot use a class before it is declared. This behavior is similar to variables declared with let and const
try {
  const person = new Person("MS", 24);
  console.log(person.name);
} catch (Exception) {
  console.log('====================================');
  console.log("class Declaration can not be hoisted");
  console.log('====================================');
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
