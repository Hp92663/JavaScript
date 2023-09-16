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