const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
//console.log("Hello " + userName);
let age = 25
let phrase = "Coding is fun!";
let isItTrue = true;
let isItFalse = false;
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");