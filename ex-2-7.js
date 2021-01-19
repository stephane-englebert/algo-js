// MISSION
//      Make a program that ask the user to enter a number named n. 
//      Then ask him n time to enter a new number. 
//      At the end display the sum of all the numbers collected this way.

const readlineSync = require("readline-sync");

console.log("ADDITION of n NUMBERS");
console.log("======================");
let n = readlineSync.questionInt("How many numbers would you like to add? > ");
let somme = 0;

for(let i=1; i<=n; i++){
    let userNumber = readlineSync.questionInt("Number " + i + "/" + n + " > ");
    somme += userNumber;
}
console.log("SUM OF THESE " + n + " NUMBERS = " + somme);