// MISSION
//      Ask the user to enter its age. 
//      If its age is at least 18 display "You are an adult". 
//      If it's not the case display "You are not yet an adult".

const readlineSync = require("readline-sync");

// Asking user's age
    let userAge = readlineSync.questionInt("Please enter your age > ");

// Determining if user is an adult or not
    let result = "";
    if(userAge >= 18){
        result = "You are an adult";
    }else{
        result = "You are not yet an adult";
    }

// Printing in terminal
    console.log(result);
