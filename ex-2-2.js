// MISSION
//      Ask the user to enter three numbers: min, max and current. 
//      Display if current is between min and max.
//
// Bonus 1: if min is greater than max, display an error message to explain the user he's doesn't understand anything 
//          then exit the program. (It must not ask any other question.)
//
// Bonus 2: be polite in the error messages. (facultative)

const readlineSync = require("readline-sync");

// Asking 3 numbers to user (min, max and current)
    console.log("=============================================================================");
    console.log("DETERMINING 'min', 'max' AND 'current' values SUCH AS  : min <= current <= max");
    console.log("=============================================================================");
    let min = readlineSync.questionInt("Please enter your 'min' value > ");
    let max = readlineSync.questionInt("Please enter your 'max' value > ");
    if(min<=max){
        let current = readlineSync.questionInt("Please enter your 'current' value > ");
        console.log("=============================================================================");
        if((current>=min)&&(current<=max)){
            console.log("CORRECT : 'Current' value is well between 'min' and 'max' values [" + min + " <= " + current + " <= " + max + "]");
        }else{
            console.log("ERROR : 'current' value is not between 'min' and 'max' values[" + min + " <= " + current + " <= " + max + "]");
        }
    }else{
        console.log("=============================================================================");
        console.log("ERROR : 'min' value can't be greater than 'max' value");
    }
    