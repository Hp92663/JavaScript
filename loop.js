//  loops


// 1. for loop

for (let i=1; i<=8; i++)
  {
    console.log(i);
  }

console.log("\n");


// sum of n number 
let sum = 0;
let n = prompt("Enter number");
n = Number.parseInt(n); // because n is by default string so that convert into number

for (let i=1; i<=n; i++)
  {
    sum+=i;
  }

console.log(sum)
// console.log(i); // print error i is not defined because let & const block scoped so that 

// if we declare 'var' so it cana be global so that print the output


console.log("\n");


//  2. for in
// for in work with object, strings & array

// here first create object 

let mathMarks = {
  hiren:80,
  nikunj:90,
  jayraj:100
}
// now can access the above 'mathMarks' object

for ( let a in mathMarks)
  {
    // console.log(a); // it can print only key
    
    // console.log(mathMarks[a]); // it can print only value
    
    console.log(a + " : " + mathMarks[a]); // it can print key and value
  }

console.log("\n");

//  3. for of

// it can only return  key  & it can't return value

for (let b of "hiren")
{
  console.log(b);
}



//  4. while loop

// print n number 
// n is declare in for loop
let j = 0;
while (j<=n)
  {
    console.log(j)
    j++;
  }


console.log("\n");

//  5. do..while
//  it can be execute 1 time because 'do while' loop first execute block so that can be execute atleast one time

// print n number 
// n is declare in for loop

let z = 0
do{
  console.log(z);
  z++
  } while (z<=n);