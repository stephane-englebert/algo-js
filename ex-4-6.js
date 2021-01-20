// MISSION
//
//      Create a function factorial(a) that returns the factorial of a number.
//      That function must be recursive.

const readlineSync = require("readline-sync");

// The function factorial() returns recursively the factorial of a number
// This function stops to call herself when number = 0 because factorial(0) = 1
function factorial(num){
    if(num===0){return 1;}else{return num * factorial(num-1);}
}

let num = -1;
console.log("FUNCTION factorial()");
while(num<0){
    num = readlineSync.questionInt("Please enter a positive number > ");
    if(num<0){console.log("ERROR : this number must be greater or equal to 0");}
}
console.log("FACTORIAL(" + num + ") > " + factorial(num));