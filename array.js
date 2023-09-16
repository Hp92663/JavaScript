//  Array - user for the store multiple value in single variable with diffrent type datatypes
//  array is muttable so that it can be update & change

let marks = [80, 50, 81, 37, 65];
console.log(marks); // print all array
console.log("\n");

// print individual array

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]); 
console.log(marks[5]);  // it return 'undefined' because here no more data in given array
console.log("\n");

//  find lenght of array

console.log("there are mark of", marks.length, "subjects")
console.log("\n");

//  add value in existing array 

marks[5] = 53;
console.log(marks); 
console.log("\n");

//  update  value in existing array 

marks[3] = 73;
console.log(marks); 
console.log("\n");

// type of array

console.log(typeof marks);


