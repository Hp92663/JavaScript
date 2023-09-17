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
// but don't affect array size, it means if any delete element so array size can't decrease

let newarr = [1, 2, 3, 4, 5];
console.log(newarr, "size of array is ", newarr.length)
delete newarr[2];
console.log(newarr, "size of arrayn is ", newarr.length)
console.log("\n");

// 8. concat() - used to join array to tche given array , in other word it can join two or more array 

// it return new array and does not change existing array
let series = [1, 2, 3, 4, 5];
let series_2 = [6, 7, 8, 9, 10]
let series_3 = [11, 12, 13, 14, 15];

let new_arr = series.concat(series_2); // join 'series' and 'series_2' array 
console.log(new_arr)
console.log("\n");

let new_arr2 = series.concat(series_2, series_3); // join 'series', 'series_2' and 'series_3' array 
console.log(new_arr2)
console.log("\n");

// 9. sort() - used to sort an array alphabetically
// it can modify the original array

let x = [1, 8, 20, 9, 75, 38]
x.sort() // it can sort in alpha so that consider as string and sort alphabetically
console.log(x)
console.log("\n");

let y = ["x", "h", "k", "d", "l", "k", "s"]
y.sort // sort alphabet order
console.log(y)
console.log("\n");

/* 
// ------------------------------

// sort array in ascending order in number

let compare = (a, b) =>{
  return a - b; // for ascending order
  // return b - a; // for descending order
}

x.sort(compare)
console.log(x)
console.log("\n");
 
// ------------------------------ */

// 10. splice() -  it can be used to add new item to an array

const number = [1, 4, 8, 12, 16, 20]
number.splice(1, 4, 5, 9, 15, 18)
//  here    '1' user for to start add new array element.
//  '4' use for the delete how many element from index '1'
//  '5, 9, 15, 18' is a new array element
 console.log(number)
console.log("\n");


//  show which element is delete
const number1 = [1, 4, 8, 12, 16, 20]
let z = number1.splice(1, 4, 5, 9, 15, 18)
console.log(z, typeof z);
console.log("\n");

// 11. slice() - slice out a piece an array, it can create a new array
// let ex_slice = number1.slice(3)
let ex_slice = number1.slice(1, 4)
console.log(ex_slice)
console.log("\n");

// 12. reverse() - reverse the array element

x.reverse()
console.log(x)
console.log("\n");
 