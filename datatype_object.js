console.log('Datatype and Object');

// Primitive Datatypes

// In JavaScript there are 7 Primitive Datatypes

//Integer | String | Boolean | BigInt | Null | Undefined | Symbol

let a = 53;  // Integer
let b = "Hiren"; //String
let c = true; // Boolean, it can be either 'true' or 'false'
let d = BigInt(345) + BigInt(321);
let e = null;
let f = undefined // it also write 'let f;'
let g = Symbol("This is symbol");

console.log(a, b, c, d, e, f, g);

// 'typeof' keyword user for the check which type datatype is

console.log(typeof e);

console.log("\n");

// Object

const person = {
  firstname : "hiren",
  age  : 22,

  // some other example with primitive datatypes
   x : null, // null
  'y' : undefined, // Undefined
  'z' : true  // boolean
}

console.log(person['firstname'])