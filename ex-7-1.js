// MISSION
//
//      Make a program that generates an integer between 1 and 100 (don't display it to the user).
//      Then the program should display "Guess the number" and ask the user to guess. 
//      - If the user enters a number which is too low it should display "Too low" and re-ask the question. 
//      - If the user enters a number which is too high it should display "Too high" and re-ask the question. 
//      - If the user guess correctly it should display "Well guessed!" and exit.

const readlineSync = require("readline-sync");

// The function randN(n1,2) returns a random number between n1 and n2
function randN(n1,n2){
    let randomValue = n1 + Math.floor(Math.random()*n2);
    return randomValue;
}

let finished = false;
let lastProposition = 0;
let resultMsg = "";
let numberToGuess = randN(1,100);
while(!finished){
    if((lastProposition>1)&&(lastProposition<100)){
        if(lastProposition < numberToGuess){resultMsg = "Too low...";}else{resultMsg = "Too high...";}
    }else{
        resultMsg = "No, 1 <= number <= 100";
    }    
    console.clear();
    console.log("=========================================");
    console.log("      ***  GUESS THE NUMBER  ***");
    console.log("=========================================");
    console.log(" NUMBER FOUND? >> " + resultMsg);
    console.log("=========================================");
    let userNumber = readlineSync.questionInt(" PLEASE ENTER A NUMBER BETWEEN 1 AND 100 > ");
    lastProposition = userNumber;
    if(userNumber==numberToGuess){
        finished = true; 
        console.clear();
        console.log("=========================================");
        console.log("      ***  GUESS THE NUMBER  ***");
        console.log("=========================================");
        console.log(" NUMBER FOUND? >> Well guessed!!! [" + numberToGuess + "]");
        console.log("=========================================");
    }
}