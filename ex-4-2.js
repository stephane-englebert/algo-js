// MISSION
//      Create a function named rand10() that returns a random integer between 1 and 10. 
//      Create a program that will display the result of that function each time it is run.
//      Write a documentation for the rand10() function.

// The function rand10 returns an integer between 1 and 10
// This random number is obtained thanks to the Math API function Math.random()
function rand10(){
    let randomValue = Math.floor(Math.random()*10);
    return randomValue;
}

console.log("FUNCTION RAND(10) RETURNS A RANDOM INTEGER BETWEEN 1 AND 10 > " + rand10());