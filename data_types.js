//Undefined data type

//undefined value in variable

// When a variable is declared or not initialized but not assigned with any value then JavaScript automatically assigns it to an “undefined” value.


let variable;
console.log(variable);

//undefined value in functions

// A method or statement also returns undefined. If a variable was assigned with a function that does not return any value, then the JavaScript assigns an undefined value to that variable.

function sayHi(name){
    console.log(`Function name passed : ${name}`);
}

x = sayHi("MS");
console.log(x);

// 3. undefined value in Object Properties
// Accessing a property that doesn’t exist in an object returns undefined

const person = {
    name : "MS"
}

console.log(person.age);

// check if variable store undefined value or not
let y;
if(typeof y === 'undefined'){
    console.log("Yes! y is undefined");
}else{
    console.log("Y is already defined");
}