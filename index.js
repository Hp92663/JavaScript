console.log("hiren")
alert("Hey good\n")


//Arithmetic Operation
var a = 10
var b = 20
var c = a + b
const d = a - b;
const e = a * b;
const f = a / b;
console.log("sum of two number", c)
console.log("sub of two number", d)
console.log("mul of two number", e)
console.log("div of two number", f)

//Given number is Positive, Negative or Zero  --- if else if

const n = parseInt(prompt("\nEnter the number"))
if (n > 0) {
  console.log("Number is positive")
}
else if (n < 0) {
  console.log("Number is Negative")


}
else {
  console.log("Number is zero")
}

// Switch case
console.log("\nExample of Switch Case")
var n1 = parseInt(prompt("Enter the number"))

switch (n1) {
  case 1:
    n1 = "You Press 1";
    break;

  case 2:
    n1 = "You Press 1";
    break;

  case 3:
    n1 = "You Press 3";
    break;

default:
  n1= "Enter Valid Number";

}
console.log(n1)

// loop

