const readlineSync = require("readline-sync");
// MISSION :
// Launch node in interactive mode and use it to make an addition. 
// Then repeat the same step until you have tested all five arithmetic operators we presented before.

// Addition: +
    console.log("ADDITION (Number 1 + Number 2)");
    let number1 = readlineSync.questionInt('Number 1 > ');
    let number2 = readlineSync.questionInt('Number 2 > ');
    let result = number1 + number2;
    console.log("RESULT => " + result);
// Soustraction: -
    console.log("=================================");
    console.log("SUBSTRACTION (Number 1 - Number 2)");
    number1 = readlineSync.questionInt('Number 1 > ');
    number2 = readlineSync.questionInt('Number 2 > ');
    result = number1 - number2;
    console.log("RESULT => " + result);
// Multiplication: *
    console.log("=================================");
    console.log("MULTIPLICATION (Number 1 * Number 2)");
    number1 = readlineSync.questionInt('Number 1 > ');
    number2 = readlineSync.questionInt('Number 2 > ');
    result = number1 * number2;
    console.log("RESULT => " + result);
// Division: /
    console.log("=================================");
    console.log("DIVISION (Number 1 / Number 2)");
    number1 = readlineSync.questionInt('Number 1 > ');
    number2 = readlineSync.questionInt('Number 2 > ');
    result = number1 / number2;
    if(number2!=0){
        let result = number1 / number2;
        console.log("RESULT => " + result);
    }else{console.log("DIVISION BY ZERO IMPOSSIBLE!");}    
// Modulo: %
    console.log("=================================");
    console.log("MODULO (Number 1 % Number 2)");
    number1 = readlineSync.questionInt('Number 1 > ');
    number2 = readlineSync.questionInt('Number 2 > ');
    result = number1 % number2;
    console.log("RESULT => " + result);