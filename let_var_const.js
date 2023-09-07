console.log("let var const\n\n");
// ES6
// var

var a = 'Hiren';
var b = 53;

{
  var a = 'Khut';
  console.log(a);
}

console.log(a); //' <- Here print value of block variable 

// var is globally scoped'
// var can be update and re-declare'

// Example 

var a = 15;  // re-declare
a = 20;  //update

console.log("\n");
//let

let c = 'Hp';
let d = 53;

{
  let c = "HP"
  console.log(c);
}

console.log(c); // it can execute local variable value

// var is block scoped'
// var can be update but not re-declare

// example 

// let c = "Hiren K" // throw  Syntax error - already declare
c = "Hiren Khut" // update value

console.log("\n");

//const

// const is a read only varibale declaration
// const is block scoped'
// const can be not update or not re-declare

  const x = "JavaScript"
  // let x = "Java"; // throw  Syntax error 'x' has been already declared

  console.log(x);

// it can't support only variable name it can specify value

// exmple

// const a1 ; here assign the value 