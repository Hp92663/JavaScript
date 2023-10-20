/*
// Syntax

class ClassName {
  constructor (){
    
  }
}

------------

class Person{
  constructor(){
    
  }
}
*/

/*
//  class with parameters & nake object

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


const person1 = new Person("Hiren", 22);
console.log(person1);

*/

/*
// We can add any number of method in JS so that add one more method

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){  // We can add any number of method in JS
    return "Hello " + this.name
  }
}


const person1 = new Person("Hiren", 22);
console.log(person1.greet());
console.log(person1);


-------------------------------------------------------


class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){  // We can add any number of method in JS
    return "Hello " + this.name
  }
  changeName (newName){
    this.name = newName;
  }
}


const person1 = new Person("Hiren", 22); // assign argument of Person class

console.log(person1.greet());  // show greet() method

person1.changeName("Nik"); // change the value using this method

console.log(person1);

*/


//-----------------------------------------------------------
/*
//new error 
// getter - get method

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){  
    return "Hello " + this.name
  }

const person1 = new Person("Hiren", 22); 

console.log(person1.greet());  // no need to write paranthesis
*/
  

/*
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  get greet(){  // We can add any number of method in JS
    return "Hello " + this.name
  }
}


const person1 = new Person("Hiren", 22); 
console.log(person1.greet);   // no need to write paranthesis
*/

//----------------------------------------------------------------

/*
//  setter - set method 
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  set changeName(newName){  // We can add any number of method in JS
    this.name = newName;
  }
}


const person1 = new Person("Hiren", 22); 

person1.changeName = "NIK"; // no need put value in paranthesis

console.log(person1);


*/


class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
   get greet(){  
    return "Hello " + this.name
  }
  set changeName(newName){  
    this.name = newName;
  }
}

const person1 = new Person("Hiren", 22); 

console.log(person1.greet);   // no need to write paranthesis

person1.changeName = "NIK"; // no need put value in paranthesis

console.log(person1);


//  class expresion


let Student = class{
  constructor(name){
    this.name = name;
  }
  get display (){
    return this.name;
  }
}

const stu_1 = new Student("Hiren K.");
console.log(stu_1);

