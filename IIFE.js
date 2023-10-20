
// IIFE

// Normal Function
function da (){
  console.log("Hello Darshil");
}

da();

// IIFE Function - Immediately invoked function expression

(
  function(){
  console.log("Hello ");
  }
)();


	// Declaring the parameter required.
	(function(dt) {
		console.log(dt.toLocaleTimeString());
		// Passing the Parameter.
	})(new Date());



function Stu (name, age){
  this.name  =  name;
  this.age = 22;
}

Stu("Datshil")
console.log(Stu)