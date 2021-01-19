// MISSION
//      Create a function named average(arr) that takes an array of numbers as argument and returns the average.
//      Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
//      Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
//      Create a program that asks a number to the user then generate that same amount of random numbers but 
//      also displays their average, min and max. 
//      To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.
//      Write a documentation for all the functions you created.

const readlineSync = require("readline-sync");

// The function averageOfArrayItems() returns the average value of myArray
// Average value is obtained by dividing the sum of values by the number of items included in myArray
// If empty array, the function returns a zero value
function averageOfArrayItems(myArray){
    let sumArray = 0;
    let averageArray = 0;
    for(let item of myArray){
        sumArray += item;
    }
    if(myArray.length>0){
        averageArray = sumArray / myArray.length;
    }
    return averageArray;
}

// The function min() returns the min value of myArray thanks to the Math API function Math.min()
function min(myArray){
    return Math.min(...myArray);
}

// The function max() returns the max value of myArray thanks to the Math API function Math.max()
function max(myArray){
    return Math.max(...myArray);
}

// The function rand10() returns an integer between 1 and 10
// This random number is obtained thanks to the Math API function Math.random()
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
let myArray = multiRand(n);
console.log("RESULT : " + n + " RANDOM NUMBERS > " + myArray.toString());
console.log("AVERAGE > " + averageOfArrayItems(myArray));
console.log("MIN > " + min(myArray));
console.log("MAX > " + max(myArray));