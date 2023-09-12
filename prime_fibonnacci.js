// let a = 0, b = 1, n = 10, c ;

// for(i=1; i<=n; i++)
//   {
//     console.log(a)
//     c=a+b;
//     a=b;
//     b=c;
//   }


let n1 = 1;
let count = 0;
let x;

for (let i = 1; i <= n1; i++) {
  if (n1 % i == 0) {
    count++;
  }
}

if (count === x) {
  console.log("Prime number");
}
else {
  console.log("not Prime number");
}
