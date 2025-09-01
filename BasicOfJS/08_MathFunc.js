// Math Functions

console.log(Math.round(10.6)); // round off krdega
console.log(Math.ceil(10.1)); // ceil mtlb ek no. upar le jayga,  11

console.log(Math.floor(10.8)); // ek no. niche le ayga is case mein 10 krdega mtln floor pe le ayga

console.log(Math.trunc(18.98)); // ye point k baad wali values ko remove krdega, unlike floor and ceil they only take up or down the value by rounding up

console.log(Math.pow(2, 5)); // 2^5,  2 ki power 5 gives 32

console.log(Math.sqrt(25)); // square root bata hai kisi ka bhi like 25 ka hoga 5

console.log(Math.cbrt(27)); // cube root batata hai

console.log(Math.abs(-15)); // Absoulte krega, mtlb negative value ko positive mein kr dega, but postive ko negative mein nhi krta

console.log(Math.max(78, 65, 12)); // return max. values

console.log(Math.min(78, 65, 12)); // returns min value

console.log(Math.random()); // gives random value between 0 to 1

// making random Otp log

console.log(Math.trunc(Math.random() * 9000 + 1000)); // 1000 or 10000 k bich mein 4 digit numbers aynge

let app = 89.098324;
console.log(app.toFixed(2)); // gives 2 values after decimal

// Q1: Calculate area and perimeter of rectangle

let a = 5;
let b = 7;

console.log("Area of rectangle " + a * b); // area of rectangle l*b

console.log("Parimeter of rectangle " + 2 * a * b); // parimeter of rectangle 2*l*b

// Q2: Generate OTP
console.log(Math.trunc(Math.random() * 9000 + 1000)); // 1000 or 10000 k bich mein 4 digit numbers aynge

// Q3: Area of Triangle by heron's formula

// formula: sqrt of s *(s-a)*(s-b) *(s-c)

let c = 5;
let d = 4;
let e = 3;

let s = (c + d + e) / 2;

console.log(Math.sqrt(s * (s - c) * (s - d) * (s - e)));

// Q 4: Circumference of circle

let r = 12;

console.log(Number((2 * Math.PI * r).toFixed(2)));
