// 'prompt' use for this ask the value
// it can return as string value by default

let a = prompt("What is your age");

// 'alert' use for the show message
console.log(typeof a); // string
console.log(a);

// here convert string into number -- types conversions (type casting)

a = Number.parseInt(a);
console.log(typeof a); // here convert string into number
