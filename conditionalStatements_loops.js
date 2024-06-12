/*Exercise 1: Temperature check

1. Write a code using if else statements to check the 
temperature and print a message based on the following 
conditions:
• Ifthe temperature is below 0, print"It's freezing!"
• Ifthe temperature is between 0 and 15, print"It's cold."
• Ifthe temperature is between 16 and 25, print"It's mild."
• Ifthe temperature is above 25, print"It's warm."*/

let temp=10;

if(temp <0)
{
    console.log("It's freezing");
}
else if(temp <=0 && temp >=15)
{
    console.log("It's cold");
}
else if(temp <=16 && temp >=25)
{
    console.log("It's mild");
}
else if(temp >25)
{
    console.log("It's warm");
}

//2. Re-write the code using switch statements. 
let temperature =16;

switch(true)
{
    case (temperature <0):
        console.log("It's freezing");
    break;
    case (temperature <=0 && temperature >=15):
        console.log("It's cold");
    break;
    case (temperature <=16 && temperature >=25):
        console.log("It's mild");
    break;
    case (temperature >25):
        console.log("It's warm");
    break;
    default:
        console.log("temperature not found");
}

/*Exercise 2: Divisibility Check

1. Write a code using if else statements to check if a number is 
divisible by 2, 3, or both:
• Ifthe numberis divisible both by 2 and 3, print"Divisible 
by both."
• If the number is divisible by only 2, print "Divisible by 2."
• If the number is divisible by only 3, print "Divisible by 3."
• If the number is not divisible by either, print "Not 
divisible by 2 or 3." */
let num=5;

if(num%2===0 && num%3===0)
    {
        console.log("Divisible by both");
    }
else if(num%2===0)
    {
        console.log("Divisible by 2");
    }
else if(num%3===0)
    {
        console.log("Divisible by 3");
    }
else 
    {
        console.log("Not divisible by 2 or 3");
    }

//2. Re-write the code using switch statements. 

let number = 12;

switch(true)
{
    case (number%2===0 && number%3===0):
        console.log("Divisible by both");
        break;
    case (number%2===0 && number%3===0):
        console.log("Divisible by 2");
        break;   
    case (number%2===0 && number%3===0):
        console.log("Divisible by 3");
        break;
    default:
        console.log("Not divisible by 2 or 3");
}
      
//Exercise 3: For loops
// 1.Print numbers from 1 to 10.

for(let numb =1; numb <=10; numb++)
    {
        console.log(numb);
    }

// 2. Print all even numbers between 1 and 20.
for(let i=1; i<=20; i++)
    {
        if(i%2 === 0)
            {
                console.log(i);
            }
    }
//3. Calculate the sum of all numbers from 1 to 100 and print the 
//result. Hint:‘+=’
let sum =0;
for(let x =1; x <=100; x++)
    {
        sum+=x;
    }
console.log(sum);

/* 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, 
print each element to the console. */
const numbers = [1, 2, 3, 4, 5];
console.log("Array elements:")
for(let y=0; y < numbers.length; y++)
    {
        console.log(numbers[y]);
    }

/* 5. const numbers = [3, 7, 2, 5, 10, 6].Giventhe array of numbers, 
find and print the largest number.
#Hint: current value and previous value. */
const nums = [3, 7, 2, 5, 10, 6];
let largest = nums[0];
for (let z = 1; z < nums.length; z++) {
    if (nums[z] > largest) {
        largest = nums[z];
    }
}
console.log("Largest number is:", largest);

/*
Exercise 5: Do While loops

1. Print numbers from 1 to 10 */
console.log("Numbers from 1 to 10:");
let nm=1;
while(nm<=10)
    {
        console.log(nm);
        nm++;
    }

// 2. Print all even numbers between 1 and 20
let nms=1;
console.log("All even numbers between 1 and 20:");
while(nms<=20)
    {
        if(nms%2===0)
            {
                console.log(nms);
            }
        nms++;
    }

/*3. Calculate the sum of all numbers from 1 to 100 and print the 
result. */
let sum1 =0;
let c =1;
while(c <=100)
    {
        sum1 += c;
        c++;
    }
    console.log("Sum is: ",sum1); 

//4. Print all multiples of 5 less than 50.... Hint: ‘%’
let multiples =1
console.log("All multiples of 5 less than 50");
while(multiples<50)
    {
        if(multiples%5===0)
            {
                console.log(multiples);
            }
        multiples++;
    }

/* Exercise 5: Do While loops

1. Print numbers from 1 to 10 */
console.log("Numbers from 1 to 10:");
let nm1 = 1;
do {
    console.log(nm1);
    nm1++;
} while (nm1 <= 10);

/* 2. Calculate the sum of all numbers from 1 to 100 and print the 
result. */
let sum2=0;
let nmb1=1;
do{
    sum2+=nmb1;
    nmb1++;
   } while (nmb1<=100)
   console.log("Sum of numbers from 1 to 100:", sum2);

/* 3. Prompt the user to enter a number greater than 10. Keep 
asking untilthey enter a valid number */
let value;
do {
    value = prompt("Enter a number greater than 10");
} while (value <= 10);
console.log("Valid number entered:", value);

/*.4. Create a simple guessing game where the user must guess a 
number between 1 and 10. The game continues until the user 
guesses the correct number. */

let correctNum = 7; 
let guessing;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10"), 10);
} while (guessing !== correctNum);

console.log("You guessed the correct number:", correctNum);


        
    


