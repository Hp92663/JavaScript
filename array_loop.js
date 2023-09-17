let num = [1, 2, 3, 4, 5]

//  1. forEach()

num.forEach((element) =>{
  console.log(element*element)
})
console.log("\n");

//  2. Array.from
// used for the create array from the 'string' and 'object'

let name = "Hiren"
let arr = Array.from(name)
console.log(arr, typeof arr)
console.log("\n");

//  3. for..of  - print the array in sequence

for(let k of num){
  console.log(k)
}
console.log("\n");

// 4. for..in - it used for the get 'key' from the array

for(let j in num){
  console.log(j)
}
console.log("\n");

// 5. for loop - print the array in sequence

for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
console.log("\n");