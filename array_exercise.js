//  1. create am array of number, take input from user and add number in array

/*
let arr = [1, 2, 3, 4, 5]
let n = prompt("Enter array element");
n = Number.parseInt(n) // it can convert user value in number
arr.push(n);
console.log(arr);
*/

//  2. create an number array, and take user input where not insert 0

/*
let arr = [1, 2, 3, 4, 5]
let n;
do {
  n = prompt("Enter array element");
  n = Number.parseInt(n) // it can convert user value in number
  arr.push(n);
} while (n != 0);
console.log(arr);
*/



//  3. filter to number divisible by 10 from a given array
/*
let arr = [10, 15, 20, 25, 30, 35, 40]

let x = arr.filter((n) =>{
  return n%10 == 0
})
console.log(x)
*/

//  4.  square of array element 
/*
let arr = [10, 15, 20, 25, 30, 35, 40]

let x = arr.map((n) =>{
  return n*n
})
console.log(x)
*/

//  5. factorial  of n  array 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let x = arr.reduce((x,y)=>{
  return x*y
})

console.log(x);