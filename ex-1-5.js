// MISSION
// Ask two numbers with decimal part to the user. For the first one only keep the integer part. 
// Then multiply them and display the result.
// You will have to perform a search on Google to know how to only keep the integer part of a number.

const readlineSync = require("readline-sync");

// Asking numbers to user
    let number1 = readlineSync.questionFloat("Please enter first decimal number : ");
    let number2 = readlineSync.questionFloat("Please enter second decimal number : ");

// Multiplication
    let result = Math.trunc(number1) * number2;

// Printing result in terminal
    console.log("Result of multiplication : " + result);