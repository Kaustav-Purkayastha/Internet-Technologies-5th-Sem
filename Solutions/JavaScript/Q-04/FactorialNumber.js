// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 4. Write a JavaScript program to find the factorial of a number using function.


const prompt = require('prompt-sync')();

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Ask user for input
  const number = prompt("Enter a number: ");
  
  // Convert input to a number
  const n = parseInt(number);
  
  // Check if input is valid
  if (Number.isNaN(n)) {
    console.log("Invalid input.");
  } else {
    // Calculate the factorial using the function
    const fact = factorial(n);
  
    // Output result
    console.log(`\nThe factorial of ${n} is ${fact}.`);
  }
  