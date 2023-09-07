// operators

// 1. Arithmetic operator
// +, -, *, /, %, **, ++, --

let a = 10;
let b = 5;

console.log("a / b", a/b); // here get accurate answer without dividor
console.log("a ** b", a**b); // b is power ofa
console.log("a ++", a++); // here first time print as it  value  10
console.log("a ++", a++); // now increment 10+1
console.log("a --", a--); // here first time print as it  value 12
console.log("a --", a--); // now decrement 12-1

console.log("\n");


//-------------------------------------------
// 2.Assignment operator
// =, +=, -=, *=, /=, %=


//-------------------------------------------
// 3. Comparison operator
// == equal to , === equal value & type , != not equal, !== not equal value & type, 
// > greter than , < less than <= less than and eual to, >= greter than and equal to , ? ternary operator

let x = 10;
let y = 15;
let z = "10"; // here z is a string datatype
console.log("x == y is", x==y); // false
console.log("x == z is", x==z); // true
console.log("x != y is", x!=y); // true

console.log("x === z is", x===z); // show 'false' because value is match but type is not match' -> but z is number than show 'true'
console.log("x !== z is", x!==z); // show 'true' because value is match but type is not match' -> but z is number than show 'false'

console.log("\n");


//-------------------------------------------
// 4. Logical operator
// && -> AND, || -> OR, ! -> NOT

console.log(x<y && x == 10); // it check both condition if both true then true otherwise false
console.log(x>y || x == 10); // if any condition is true than true otherwise false
console.log(!false); // is true than false
console.log(!true); // is false then true


//-------------------------------------------
// 5. Bitwise operator


//-------------------------------------------
// Comment

// single line comment using '//'

/*
  this is multiline comment
*/