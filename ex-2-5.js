// MISSION
//      Make a program that asks the favorite number of the user. 
//      If that number is anything other than 42 display "Are you sure?" and ask again. 
//      (This program should never end as long as the user didn't chose 42).

const readlineSync = require("readline-sync");

let isIt42 = false;
while(!isIt42){
    let userNumber = readlineSync.questionInt("What's your favorite number? > ");
    if(userNumber!=42){
        console.log("Are you sure?");
    }else{
        isIt42 = true;
    }
}