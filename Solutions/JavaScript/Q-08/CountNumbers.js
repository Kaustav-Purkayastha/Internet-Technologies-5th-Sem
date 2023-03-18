// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 8. Write a JavaScript program to read N numbers and count the number of positive numbers, negative numbers and zeroes in the list.


const prompt = require('prompt-sync')();

// Ask user for input
const input = prompt("Enter a list of numbers separated by commas: ");

// Convert input to an array of numbers
const numbers = input.split(",").map(Number);

// Initialize counters
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Iterate over numbers array and update counters
numbers.forEach(number => {
  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
});

// Output results
console.log(`\nPositive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeroes: ${zeroCount}`);
