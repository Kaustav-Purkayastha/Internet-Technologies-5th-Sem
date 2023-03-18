// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 7. Write a JavaScript program to enter a list of positive numbers, terminated by 0. Find the sum and average of these numbers.


const prompt = require('prompt-sync')();

// Initialize variables
let sum = 0;
let count = 0;

// Ask user for input
let number = prompt("Enter a positive number (enter 0 to stop): ");

// Loop until the user enters 0
while (number !== "0") {
  // Convert input to a number
  number = Number(number);

  // Check if the number is positive
  if (number > 0) {
    // Add the number to the sum and increment the count
    sum += number;
    count++;
  }

  // Ask user for the next number
  number = prompt("Enter a positive number (enter 0 to stop): ");
}

// Calculate the average
const average = sum / count;

// Output results
console.log(`\nSum: ${sum}`);
console.log(`Average: ${average}`);
