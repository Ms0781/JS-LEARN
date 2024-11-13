//scope means where we can access variable
// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

//three types of scope :
// block scope,function scope,global scope

//block scope :
//variable declared inside {} can not be access outside it.
//this introduce into ES6 - 2015
//let and const varible have block scope
//var doesn't have block scope

{
  var x = 25;
  let xy = 30;
  const Z_XY = 35;
}

//you can access var data type out side block
try {
  console.log("====================================");
  console.log("value of type var variable is :" + x);
  console.log("====================================");
} catch (Exception) {
  console.log("====================================");
  console.log("You cannot acccess var variable.");
  console.log("====================================");
}

//you can not access let data type variable out side block
try {
  console.log("====================================");
  console.log("value of type let variable is :" + xy);
  console.log("====================================");
} catch (Exception) {
  console.log("====================================");
  console.log("You cannot acccess var variable.");
  console.log("====================================");
}

//you can not access const data type variable out side block
try {
  console.log("====================================");
  console.log("value of type let variable is :" + xy);
  console.log("====================================");
} catch (Exception) {
  console.log("====================================");
  console.log("You cannot acccess var variable.");
  console.log("====================================");
}

//local variables
// function defined inside function called  local variables
//Local variables are created when a function starts, and deleted when the function is completed.

//local variables have function scope.

//variable created inside can not be accessed outside function.
//let, var,const have function scope,

function myFunction() {
  var carName = "Volvo"; // Function Scope
}
function myFunction() {
  let carName = "Volvo"; // Function Scope
}
function myFunction() {
  const carName = "Volvo"; // Function Scope
}


//Global Variables :
// variable declared outside function and block is known as global variables
// A global variable has Global Scope:
// All scripts and functions on a web page can access it. 
//variable declare with var,let,const work similar for global scope.
 
let variable = 1;
var variable2 = 2;
const variable3 = 3;


//automatically global

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo"; //this will automatically global
}


//note : 
// The Lifetime of JavaScript Variables
// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

//Function Arguments
// Function arguments (parameters) work as local variables inside functions.