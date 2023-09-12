// function



//  function  

function fun1 (){
  alert ("This is simple function");
}

fun1();


// function with parameter

function sum (x, y){
  let c = x+y;
  console.log(c);
}

sum (10,20);


console.log("\n");

//  exercise - Average using function 

function Avg(x,y){
  return (x+y)/2;
  
}

let a = 10;
let b = 20;
let c = 30;

console.log("Average of A & B is", Avg(a,b))
console.log("Average of B & C is", Avg(b,c))


console.log("\n");

//  Arrow function

const mul = (x,y) =>{
  return x*y
}

console.log(mul(10,20));
console.log(mul(b,c));