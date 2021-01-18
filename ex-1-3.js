// MISSION
// Ask the user to enter its first name and display a message saying "Hello first name".

const readlineSync = require("readline-sync");
let userFirstName = readlineSync.question("Please enter your first name : ");
console.log("Hello " + userFirstName);