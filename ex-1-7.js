// MISSION
// Ask to the user its shoe size and its birth year. Then make the following calculation:
//      Multiply the shoe size by 2
//      Add 5 to the result
//      Multiply that by 50
//      Subtract the birth year
//      Add 1766
// Test with your own birth year and your shoe size.

const readlineSync = require("readline-sync");

// Asking user's shoe size and birth year
    let userShoeSize = readlineSync.questionInt("Please enter your shoe size: : ");
    let userBirthYear = readlineSync.questionInt("Please enter your birth year : ");

// Operations
    let result = ((((userShoeSize*2)+5)*50)-userBirthYear)+1766;

// Printing result in terminal
    console.log("Result of operations [((((Size*2)+5)*50)-Year)+1766] : " + result);