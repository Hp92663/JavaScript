//  Array Method

let num = [1, 3, 5, 8, 13];
console.log(num, typeof num); // here num is 'object'
console.log("\n");

// 1. toString() - it can convert array into 'string'

let a = num.toString(); // a is now string
console.log(a, typeof a);
console.log("\n");

// 2. join() - join whole array element using separator 

let b = num.join("-");
console.log(b, typeof b);
console.log("\n");

// 3. pop() - remove last element from the array
//  pop return popped element
let c = num.pop();
console.log(num, c); // here 'c' indicate popped value
console.log("\n");

// 4. push() -  add new element at the end of the array

let d = num.push(15);
console.log(num, d); // here 'd' add new array element, push return the new array length
console.log("\n");


// 5. shift() - remove first element from the array and return it
let e = num.shift();
console.log(e, num); // here 'a' indicate popped value, remove '1'
console.log("\n");

// 6. unshift() - add new element to the begining and return array length
let f = num.unshift(78);
console.log(f, num); // here 'e' add new array element at begining, push return the new array length
console.log("\n");

// 7. delete - array element can be deleted using 'delete'

console.log("\n");

// 8. concat() - used to join array to tche given array , in other word it can join two or more array 

console.log("\n");

// 9. sort() - used to sort an array alphabetically
console.log("\n");

// 10. splice() -  it can be used to add new item to an array
console.log("\n");

// 11. slice() - slice out a piece an array, it can create a new array
console.log("\n");

// 12. reverse() - reverse the array element
console.log("\n");
