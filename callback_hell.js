//  call back hell - like a nested callback

//  it is also called pyramid of domm



//---------------------------------------------------
//  Example of PIZZA

//  pizza -> base -> cheese
/*
function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is cheese", cheese);
    callback(cheese);
  }, 2000);
}

function makeBase(cheese, callback) {
  setTimeout(() => {
    const base = cheese + "🍪";
    console.log("here is base", base);
    callback(base);
  }, 2000);
}

function readyPizza(base, callback) {
  setTimeout(() => {
    const pizza = base + "🍕";
    console.log("here is Pizza", pizza)
    callback(pizza);
  }, 2000);
}


getCheese((cheese) => {
  makeBase(cheese, (base) => {
    readyPizza(base, (pizza) => {
      console.log("complete the pizza", pizza)
    })
  })
});

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
      resolve(pizza)
       //reject("pizza is not ready");
      
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


