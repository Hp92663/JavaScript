//  Hoisting  --  Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.



// a=10;
// console.log(a)
// var a;

hello()
console.log(x); // it can return 'undefined'   


function hello() {
  console.log("Example of Hoisting")
}

var x = 10;
console.log(x) // it can print 10