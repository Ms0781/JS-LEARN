//string primitive
var variable1 = "First String";

//string object 
var variable2 = new String("First String");

console.log(variable1);
console.log(variable2);

// console.log("Datetype of variable1 is :" + typeof variable1);
// console.log("Datetype of variable1 is :" + typeof variable2);


// console.log(variable1 === variable2)
// console.log(variable1 == variable2);

// var variable3 = variable1;

// console.log(variable3 === variable1);

//access string character
console.log("Character at index 1 in string : " + variable1[1]);
console.log("Character at index 1 in string :" + "Hello"[1])

//String object converting into string primitive
console.log(variable2.valueOf());
console.log(typeof variable2.valueOf());
console.log(typeof variable2);

//string length
console.log(variable1.length);

//string concatination
console.log(variable1.concat(variable2));

//get character index
//index where character occur first time
console.log(variable1.indexOf("s"));

//return index where character occur last time in string
console.log(variable1.lastIndexOf("S"));

//is case sensitivie
console.log("s" == "S"); //this will give false