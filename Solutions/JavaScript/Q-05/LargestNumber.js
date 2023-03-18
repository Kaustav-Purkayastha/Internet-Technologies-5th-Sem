// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 5. Write a JavaScript program to find the largest of three numbers.


const prompt = require('prompt-sync')();

// Ask user for input
const number1 = prompt("Enter the first number: ");
const number2 = prompt("Enter the second number: ");
const number3 = prompt("Enter the third number: ");

// Convert input to numbers
const n1 = parseFloat(number1);
const n2 = parseFloat(number2);
const n3 = parseFloat(number3);

// Find the largest number
let largest = n1;
if (n2 > largest) {
  largest = n2;
}
if (n3 > largest) {
  largest = n3;
}

// Output result
console.log(`\nThe largest number is ${largest}.`);
