
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

/*
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

*/





function getChesse(){
  return new Promise((resolve, reject) =>{
   setTimeout(() =>{
      const chesse = "🧀"
      // console.log("here is chesse", chesse);
      resolve(chesse);
   }, 2000);
  })
}

function makeBase(chesse){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      const base = chesse + "🍪"
      // console.log("here is base", base);
      resolve(base); 
      // reject("cheese is not good")
    },2000);
  })
}

function readyPizza(base){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const pizza = base + "🍕";
      // console.log("Here is pizza", pizza);
      // resolve(pizza)
       reject("pizza is not ready");
      
    }, 2000);
  })
}

getChesse()
.then((chesse) =>{
  console.log("here is chesse", chesse);
  return makeBase(chesse);
})
.then((base) =>{
  console.log("here is base", base);
  return readyPizza(base);
})
.then((pizza) =>{
  console.log("Here is pizza", pizza);
})

.catch((error) =>{
  console.log("Some Error occupied", error);
})

.finally(() =>{
    console.log("Process is End");
})


