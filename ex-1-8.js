// MISSION
//      Create a "Story Teller".
//      Ask questions to the user about different things. 
//      Store the results he gives to you. 
//      Display them in a way that it creates a fun story!
//  Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.

const readlineSync = require("readline-sync");

// Asking questions to user
    console.log("Please answer to the 4 following questions : ");
    let userColor = readlineSync.question("[1/4] What's your favorite color? > ");
    let userDislikeColor = readlineSync.question("[2/4] And the one you don't like? > ");
    let userFavoriteAnimal = readlineSync.question("[3/4] What's your favorite animal species? > ");
    let userFavoriteDrink = readlineSync.question("[4/4] What's your favorite drink? > ");

// Printing story in terminal
    console.log("=================");
    console.log("A little story...");
    console.log("=================");
    console.log("First time we met, you had " + userColor + " hairs and wore a " + userDislikeColor + " shirt.");
    console.log("You came late to our appointement because you missed your train and came on back of a " + userFavoriteAnimal + ".");
    console.log("We had a great time talking about programming while drinking some " + userFavoriteDrink + ".");
    console.log("A great moment!");