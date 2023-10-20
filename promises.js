
// Promises - .then()  & .catch()

/*
//  resolve
let x = new Promise((resolve, reject) => {
  console.log("Promises pending ")
  setTimeout(() => {
    console.log("Hello I am Promises")
    resolve(true);
  }, 3000);
});



console.log(x);
*/


/*
// rejected

let x = new Promise((resolve, reject) => {
  console.log("Promises pending ")
  setTimeout(() => {
    console.log("Hello I am Promises")
    reject(new Error("Some error occupied"));
  }, 3000);
})

console.log(x);

*/


/*
// .then() method  


let x = new Promise((resolve, reject) => {
  console.log("Promises pending ")
  setTimeout(() => {
    console.log("Hello I am Promises")
    resolve(true);
  }, 3000);
});

x
.then((value) =>{
  console.log(value);
})

.catch((Error) =>{
  console.log(Error + "Some Error Occupied")
})

*/


/*
//  .catch()

let x = new Promise((resolve, reject) => {
  console.log("Promises pending ")
  setTimeout(() => {
    console.log("Hello I am Promises")
    reject(new Error("Some error occupied"));
  }, 3000);
})


x
.catch((error) =>{
  console.log("some error occupied")
})
*/


//  .then() & catch()


let x = new Promise((resolve, reject) => {
  console.log("Promises pending ")
  setTimeout(() => {
    console.log("Hello I am Promises")
    reject(new Error("Some error occupied"));
  }, 3000);
})


x
.then((value) =>{
  console.log(value)
})
.catch((error) =>{
  console.log(error)
})
