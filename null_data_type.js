// null 

// Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value. Undefined, on the other hand, means the variable has been declared, but its value has not been assigned

// When defining a variable that is meant to later hold an object, it is advisable to initialize the variable to null as opposed to anything else. That way, you can explicitly check for the value null to determine if the variable has been filled with an object reference at a later time


// Null is not Undefined
// Consider undefined as an empty plot of land where nothing has been built yet. On the other hand, null is like a plot where a building was planned but never built. The foundation was laid, but there's no building there.

//variable declar but value not assign then it is undefined

let variable1;
console.log(variable1); // undefined


//variable declare and value assign in null then it is null
let variable = null;
console.log(variable); // null


// The typeof Null Quirk
// JavaScript has a quirky behavior when it comes to checking the type of null. When you use the typeof operator on null, it returns "object". This might seem strange since we said null represents the absence of an object.

console.log(typeof null); // object
// Despite this oddity, always remember that null is not an object; it's a special value representing the absence of an object.

// How to Check for Null
// To check if a variable is null, use the strict equality (===) or inequality (!==) operator.

let variable3 = null;

if (variable3 === null) {
  console.log("variable is null");
}