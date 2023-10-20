//  object constructor

function Person(){
  this.firstName = "Hiren",
  this.lastName = "Khut"
}

const person1 = new Person();
const person2 = new Person();

console.log(person1);
console.log(person2);

//  using paramers funtion make diffrent object using single function


function Student(fName, lName){
  this.firstName = fName,
  this.lastName = lName
}

const stu1 = new Student("Hiren", "Khut");
const stu2 = new Student("Jayraj", "Thummar");

console.log(stu1);
console.log(stu2);

//  add property in exising object

stu1.age = 22;
console.log(stu1);

stu2.rno = 53;
console.log(stu2);


//  declare method in object

stu1.college = function (){
  console.log("CPPGICA");
}

stu1.college();
//  console.log(stu1);


