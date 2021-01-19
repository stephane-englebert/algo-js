// MISSION
//      Make a program that ask the user to enter a number between 1 and 7. 
//      Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");
let posDayWeek = 1;
let dayWeek = "";
let finished = false;
let daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

while (!finished){
    let posDayWeek = readlineSync.questionInt("Please enter a number between 1 and 7 > ");
    if ((posDayWeek>=1)&&(posDayWeek<=7)){
        finished = true;
        dayWeek = daysOfWeek[posDayWeek-1];
        console.log("Day of the week >> " + dayWeek);
    }
}