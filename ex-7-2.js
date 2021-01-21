// MISSION
//
//      Make a program that asks for an integer n and generates the n first Fibonacci numbers.

const readlineSync = require("readline-sync");

// The function FibonacciNumbers(n) returns the n first Fibonacci numbers (array)
// n parameter is given by user
function FibonacciNumbers(n){
    let arrayFibonacciNb = [0,1];
    let beforeLastNb = 0;
    let lastNb = 1;
    let nextNb = 1;
    if(n>0){
        for(let i=0; i<n; i++){
            beforeLastNb = arrayFibonacciNb[arrayFibonacciNb.length-2];
            lastNb = arrayFibonacciNb[arrayFibonacciNb.length-1];
            nextNb = beforeLastNb + lastNb;
            arrayFibonacciNb.push(nextNb);
        }
    }
    return arrayFibonacciNb;
}

console.log("======================================");
console.log("       n FIBONACCI NUMBERS")
console.log("======================================");
let n = readlineSync.questionInt("PLEASE CONFIRM HOW MANY FIRST NUMBERS YOU WANT TO SEE (n) > ");
console.log("======================================");
console.log(" RESULT >> " + JSON.stringify(FibonacciNumbers(n)));