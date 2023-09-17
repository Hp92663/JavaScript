let arr = [4, 15, 23, 45, 65]

// map()  - create new array by performing task on each array element
// here 3 main attribute - 'index', 'value' & 'array'
// 'index' - it show key of array
// 'value' - it show value of array
// 'array' - it show array

let a = arr.map((index, value, array)=>{
  console.log(index, value, array)
  return value + index
})
console.log("\n")
console.log(a) // ite return sum of 'value' & 'index'
console.log("\n")

// filter() - it perform task with the values and create new array

let b =arr.filter((element)=>{ // element - is a function
  return element < 25 // print smaller value than 25
  // return element > 25 // print bigger value than 25
})
console.log(b)
console.log("\n")


// reduce() - reduce an array to a single value, it can task perfome and return single value   

let c = arr.reduce((x,y) =>{
  return x+y // sum of whole array
  
})
console.log(c)
console.log("\n")



