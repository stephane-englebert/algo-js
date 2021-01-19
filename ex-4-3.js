// MISSION
//      By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that 
//      returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.
//      Write a documentation for the multiRand(n) function.
//      Use that function to create a program that will ask the number of random numbers to generate then display 
//      that same number of random numbers.

const readlineSync = require("readline-sync");

function rand10(){
    let randomValue = 1 + Math.floor(Math.random()*10);
    return randomValue;
}

// The function multirand() returns an array of n random numbers between 1 and 10
// Each random number is obtained thanks to rand10() function and stored in an array
// After n calls to rand10() function, the result array is returned
function multiRand(n){
    let resultArray = [];
    for(let i=0; i<n; i++){resultArray.push(rand10());}
    return resultArray;
}

console.log("FUNCTION MULTIRAND() RETURNS n RANDOM NUMBERS (1-10)");
console.log("=====================================================");
let n = readlineSync.questionInt("How many random numbers would you like this function to return? > ");
console.log("RESULT : " + n + " RANDOM NUMBERS > " + multiRand(n).toString());