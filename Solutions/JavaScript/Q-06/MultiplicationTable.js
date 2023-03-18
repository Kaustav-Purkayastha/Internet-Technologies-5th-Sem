// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 6. Write a JavaScript program to print the multiplication table of an integer number.


const prompt = require('prompt-sync')();

// Ask user for input
const number = prompt("Enter an integer number: ");

// Convert input to a number
const n = parseInt(number);

// Check if input is valid
if (Number.isNaN(n)) {
  console.log("Invalid input.");
} else {
  // Print multiplication table
  console.log(`\nThe Multiplication Table of ${n}: `);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
