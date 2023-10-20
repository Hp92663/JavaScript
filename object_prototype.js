
//  prototype in object

/*
function Student (name, age){
  this.name = name;
  this.age = age;
}

// we can not add directly method in constructor so that use prototype

Student.prototype.rno = 53;

const stud = new Student("Hiren", 22);
const stud2 = new Student("Nik", 22);

console.log(stud);
*/

//--------------------------------------------------
// Add method

function Student(name, age) {
  this.name = name;
  this.age = age;
}

// we can add method in constructor function

Student.prototype.getDetail = function() {
  return this.name + " is a " + this.age + " year old";
}

const stud = new Student("Hiren", 22);

console.log(stud.getDetail());

//--------------------------------------------------


//  change prototype value

function Person(name) {
  this.name = name;
}

Person.prototype.age = 22;

const person1 = new Person("Hiren");

Person.prototype = { age: 21 } // change the value

const person2 = new Person("Hiren");

console.log(person1);
console.log(person2);