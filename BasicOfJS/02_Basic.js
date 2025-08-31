let a = 10;
let b = 20;

// case 1
console.log("sum of 10 and 20 is " + (a + b)); //Result: sum of 10 and 20 30 and it give priority to brackets  and solve that first after that it concincatinate

// case 2
console.log(a + b + " is sum of 10 and 20");

// typecurson
console.log("1" + 1); // result: 11 concatenante krdeg
console.log("1" - 1); // result: 0 , internpreter string ko number mein convert krdega and then us no. se subrtact kr dega.

// Q: Accept and print the answer
let age = prompt("What is ur age:");
console.log(typeof age);

// let age = Number(prompt("What is ur age:"));
// console.log(typeof age);

// this give u a pop up which ask ur age  and also it type is string autommatically and if check by type of then it return string data type, and we also convert it into Number by using number function

// aap jb ek type se dusre type mein convert krte ho to aap usko typecasting/typeconversion khete ho
