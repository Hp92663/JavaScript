//  String Method

//  length - it return length of string
let name = "Hiren"; // here start with array format .. -> '0,1,2,3,4'
console.log(name.length)  // return 'name' variable length - 5
console.log("\n");

// 1. toUppercase() - - convert string into uppercase

console.log(name.toUpperCase());  // return whole string into uppercase
console.log("\n");

// 2. toLowercase() - convert string into lowercase

console.log(name.toLowerCase());  // return whole string into lowercase
console.log("\n");

// 3. slice - slice the string as per value

// Method 1
console.log(name.slice(2,4)); // from 2 to 4,  4 not include -- 're'
console.log("\n");

// Method 2 
console.log(name.slice(2)); // from 2 to end of string  --  'ren'
console.log("\n");

//  method 3

let str = "We have rupees 1000" // here return only '1000 '
let newstr = str.slice("We have rupees ".length);
console.log(newstr);
console.log(typeof newstr); // string
console.log("\n");

//  if return '1000' in 'number' format
let str2 = Number.parseInt(str.slice("We have rupees ".length));
console.log(str2);
console.log(typeof str2); // number
console.log("\n");


// 4. replace - replace string exchange of new string 

console.log(name.replace("Hir", "Dhi")); // replace 'Hir' to 'Dhi'
console.log("\n");

// 5. concat - joint two or more strings

// method 1
let subject = "JavaScript " + "TypeScript " + "React"
console.log(subject);
console.log("\n");

// method 2
let course = "MCA";
console.log(name.concat(" student of ", course, " in CPPGICA"));
console.log("\n");


// 6. trim - remove the space from the string

let space ="    Space     ";
console.log(space.trim());
console.log("\n");


//  7. includes - returns 'true' if a string contains a specified string otherwise 'false'

const sentence = " Separate ideas generally require separate sentences."
const word = "generally"; 
const word1 = "hello"; 
console.log(sentence.includes(word)) // return 'true'
console.log(sentence.includes(word1)) // return 'false'
console.log("\n");


//  using Ternary Operator
console.log(`This word "${word}" ${sentence.includes(word) ? "is" : "is not "} in the sentence`)
console.log("\n");



// string also access using array method

let lname = "Khut";

console.log(lname[0]);
console.log(lname[1]);
console.log(lname[2]);
console.log(lname[3]);
console.log(lname[4]);
console.log("\n");


// using for loop
let fname = "Hiren";

for(let i=0;i<fname.length;i++)
  {
    console.log(fname[i]);
  }