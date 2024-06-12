/*Exercise 1: Numbers

1. Declare a number variable and assign it a value.
2. Declare a number variable and assign it a floating number.
3. Perform addition, subtraction, multiplication, division, 
   modulus and exponentiation with number variable and 
   another number.
4. Print all your variables.
*/
let num1 = 12;
let num2 = 10.5;

sum = num1 + num2;
difference = num1 - num2;
product = num1 * num2;
quotient = num1 / num2;

console.log("Sum is:", sum);
console.log("Difference is:", difference);
console.log("Product is:", product);
console.log("Quotient is:", quotient);

/*Exercise 2: Boolean and Operators

1. Use comparison operators to compare two numbers and
store the results in boolean variables. */
let numb1 = 5;
let numb2 = 10;

let isGreater = numb1 > numb2;
let isLessOrEqual = numb1 <= numb2;
let isEqual = numb1 === numb2;
let isNotEqual = numb1 !== numb2;

/*2. Declare two variables x and y with the values 8 and 12 
respectively.
Use comparison operators to check and print the following:
• If x is greater than y.
• If x is less than or equalto y.
• If x is equalto y.
• If x is not equalto y. */
let x = 8;
let y = 12;
console.log(x > y);
console.log( x <= y);
console.log( x === y);
console.log( x !== y);

/*3. Declare the variables a and b with values true and false, 
determine and print the result of the following logical 
operations:
• a AND b
• a OR b
• NOT a */
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", a | b);

/*4. Declare variable p and assign it a value of 10. Use the 
following assignment operators to modify the value of p with 
any number and print the result each time:
• +=
• -=
• *=
• /=
• %= */
let p =10;
p += 5;
console.log(p);
p -= 8;
console.log(p);
p *= 5;
console.log(p);
p /= 10;
console.log(p);
p %= 3;
console.log(p);

