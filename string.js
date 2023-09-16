//  string -   collection of characterics
//  string is immutable so that it can't change

//  In string that can 2 way to create a string 
// 1. Single quotes  ->  ''
// 2. Double quotes  ->  ""

let sname = 'Khut'
let name = "Hiren";

console.log(sname); // print 'Khut'
console.log(name); // print 'Hiren'
console.log(name.length); // print the variable length - here '5'
console.log(name[0]); // print the first character of 'Hiren' - 'H'
console.log(name[1]); // print the first character of 'Hiren' - 'i'

console.log("\n");


// Template literals
// it can use backtick  -> ``  insted of quotes to define string

// here can be use multiple 'quotes' in between 'backtick'
// for exmaple

let ex =  ` this is "a" backtick example`;


//  here directly print variable using '${}' method
// it's also called "string interpolation"

let s = "CPPGICA"
let example =  `${name} is a student of ${s}`

console.log(example); // print 'Hiren'


console.log("\n");


// Escape Sequence  -> \, \n, \t, \r

let a = "Hello \" World"  // '\'  - for describe symbol & quote
console.log(a); // print Hello " world

console.log("\n");


let b = "Hello \n World"  // '\n'  - for new line
console.log(b); // print Hello " world



let c = "Hello \t World"  // '\t'  - for tab
console.log(c); 

let d = "Hello \r World"  // '\r'  - carriage return
console.log(d); 



