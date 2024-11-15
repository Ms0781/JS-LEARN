//Number 

// 64 - bit number double preciesion IEEE754 format

//four types of number literals

// binary,decimal,octal,hexadecimal

//decimal numbers :

// 123, 4567813556 this is decimal numbers

// Decimal literals can start with a zero (0) followed by another decimal digit, but if all digits after the leading 0 are smaller than 8, the number is interpreted as an octal number. This is considered a legacy syntax, and number literals prefixed with 0, whether interpreted as octal or decimal, cause a syntax error in strict mode — so, use the 0o prefix instead.

// 0888 // 888 parsed as decimal
// 0777 // parsed as octal, 511 in decimal

//Binary Numbers

// Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B). If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown: "Missing binary digits after 0b".

// 0b10000000000000000000000000000000 // 2147483648
// 0b01111111100000000000000000000000 // 2139095040
// 0B00000000011111111111111111111111 // 8388607


//Octal Numbers

// The standard syntax for octal numbers is to prefix them with 0o. For example:

// 0O755 // 493
// 0o644 // 420

// There's also a legacy syntax for octal numbers — by prefixing the octal number with a zero: 0644 === 420 and "\045" === "%". If the digits after the 0 are outside the range 0 through 7, the number will be interpreted as a decimal number.

// const n = 0755; // 493
// const m = 0644; // 420


//Hexadecimal Numbers

// Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X). If the digits after 0x are outside the range (0123456789ABCDEF), the following SyntaxError is thrown: "Identifier starts immediately after numeric literal".

// 0xFFFFFFFFFFFFFFFFF // 295147905179352830000
// 0x123456789ABCDEF   // 81985529216486900
// 0XA                 // 10

//Exponentiation

// 0e-5   // 0
// 0e+5   // 0
// 5e1    // 50
// 175e-2 // 1.75
// 1e3    // 1000
// 1e-3   // 0.001
// 1E3    // 1000


//Number Objects

//some predefined constant of Number objects

const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log(biggestNum);
console.log(smallestNum);
console.log(infiniteNum);
console.log(negInfiniteNum);
console.log(notANum);


//Big Int

//Number have 64 bit so maximum it can represents number is 2^53 - 1
// A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.

//i.e.
const previouslyMaxSafeInteger = 9007199254740991n;
 const alsoHuge = BigInt(9007199254740991);

//  A BigInt value can also be wrapped in an Object:
typeof Object(1n) === "object"; // true

// A BigInt value is not strictly equal to a Number value, but it is loosely so:
0n === 0; // false //data type not same
0n == 0; // true  // value same 