// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 3. Write a JavaScript program to calculate the sum and product of two numbers.


const prompt = require('prompt-sync')();

// Ask user for input
const number1 = prompt("Enter the first number: ");
const number2 = prompt("Enter the second number: ");

// Convert input to numbers
const n1 = parseFloat(number1);
const n2 = parseFloat(number2);

// Calculate sum and product
const sum = n1 + n2;
const product = n1 * n2;

// Output result
console.log(`\nThe sum of ${n1} and ${n2} is ${sum}.`);
console.log(`The product of ${n1} and ${n2} is ${product}.`);
