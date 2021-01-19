// MISSION
// Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");

// Asking numbers to user
    let number1 = readlineSync.questionInt("Please enter first number (integer) : ");
    let number2 = readlineSync.questionInt("Please enter second number (integer) : ");

// Division
    let result = number1 % number2;

// Printing result in terminal
    console.log("Rest of integer division [ number1 % number2 ] : " + result);