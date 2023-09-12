//  if ... else statement & types

//  1. if statement
let  a=20;  
  if(a>10){  
    console.log("value of a is greater than 10");  
}  

console.log("\n");

//  2. if...else statement
let b = 15;

if(b>=18){
    console.log(a,"age eligible for vote")
  }
else{
    console.log(a, "age not eligible for vote")
  }

console.log("\n");

// odd & even using 

let c = 22;

if(c%2==0){
  console.log(c," is even number");
}
else{
  console.log(c," is odd number");
}

console.log("\n");


//  3. if...else .. if statement

let d =  59;

if (d >= 90) {
  console.log("Distriction");
}
else if (d>=75) {
  console.log("First class");    
}
else if (d>=60) {
  console.log("Second class");
}
else if (d>=33) {
  console.log("Pass Class");      
}
else{
  console.log("enter valid number");

}

console.log("\n");


//  switch case

const marks = 80;

switch(marks/10){
  case 9:
  case 8:
    console.log("Distriction with first ");
    break;
    
  case 7:
    console.log("Distriction");
    break;

    case 6:
    console.log("First");
    break;

    case 5:
    console.log("Second ");
    break;

    case 4:
    console.log("fail");
    break;

    default :
    console.log("Enter valid number");
}

console.log("\n");


//  Ternary operator 

let age = 22;
console.log("You can", age>18 ? "drive" : "not drive");