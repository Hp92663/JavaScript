// call back 

function display(result) {
  console.log(result)
}

function add(a, b, callback) {
  let x = a + b;
  callback(x);
}

(10, 20, display)







//  Anonymous Function 

let x = function (x, y) {
  return x+y
}

console.log(x(1,2))

// Ex - 2

//   (
//   function () {
//     console.log("Another example of anonymous function");
//   }
// )();

// Ex - 3

setTimeout(
  function(){
     console.log("Another example of anonymous function with setTimeout")
}, 3000);


//  Recursive function
/* 
// error - infinite loop 

function countDown(num) {
  console.log(num);
  num--;

  if(num>=0);
  {
    countDown(num);
  }
}
countDown(10);
*/