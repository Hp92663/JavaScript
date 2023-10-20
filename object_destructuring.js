//  object destructuring


// before ES6
const person = {
  firstName : "Hiren",
  lastName : "Khut"
}

// let fName = person.firstName;
// let lName = person.lastName;


//  after ES6


// Syntax

// let { Property1 : Variable1, Property2 : Variable2} = Object_name;


// Example
let { firstName : fName, lastName : lName} = person;

console.log(fName);





//  object literal syntax extension in ES6

let fName = "Hiren";
let lName = "Khut";

const person = {
  fName,
  lName
}

console.log(person);

