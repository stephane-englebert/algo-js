// MISSION
// Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.

const readlineSync = require("readline-sync");
// Asking datas to user
    let userName = readlineSync.question("Please enter your name : ");
    let userFirstName = readlineSync.question("Please enter your first name : ");
    let userCity = readlineSync.question("Please enter the city you're living : ");

// Printing results in terminal
    console.log("Your name is " + userFirstName + " " + userName + " and you live in " + userCity);