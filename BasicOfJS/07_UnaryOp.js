// Unary Operator ++ --
// Increment: Pre Increment, Post Increment

// Decrement: Pre Decrement, Pst Decrement

// Pre : Pre. Inc./Dec. means, you add/sub first then update the value and use it.

// Post: Post Inc. / Dec. Means, you first use the value then add/sub the value and then update it.

// Q1: let i =11;
//    i = i++ + ++i;
//    console.log(i)

// Logic: i++ means still 11 right now and  ++i means 12 after calc. final answer is 24 becuase  post increament also added after cal.

// let i = 11;
// i = i++ + ++i;
// console.log(i); //24

// Q2:

// let a = 11,
//   b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);

// Q3:
// let b = true;
// b++;
// console.log(b); // 2

// In javascript only we consider true as a number 1. it converts true into 1 then do post increment

// 1. error

// u dont use unary operator on constant value

// let a = 11++
// console.log(a);

//2. error
//  let i = 11;
// let j = --(i++);
