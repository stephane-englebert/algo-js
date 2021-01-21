// MISSION
//
//      Make an interactive program to manager your favorite pizza flavors. 
//      When launched it must display a menu of this style:
//
//      Hello! Welcome to the Pizza Flavors Manager.
//
//          Please choose your actions:
//
//          1 - List all the pizza flavors
//          2 - Add a new pizza flavor
//          3 - Remove a pizza flavor
//          4 - Exit this program
//
//          Enter your action's number:

//      When the user enter the number of an action he will trigger the appropriate action:
//
//      List all the pizza flavors: Display the current list of pizza flavors. 
//      (There should be none if we just launched the program.)
//      Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.
//      Remove a pizza flavor: Ask the user for the number of the pizza flavor in the list he wants to remove.
//
//      Each time one of the action has been performed it should return to the menu. 
//      (Except of course if we select to exit the program.)
//
//      Bonus: Save the list of pizza flavors on the file system and reload it each time we launch the application.

const readlineSync = require("readline-sync");
let fs = require("fs");

function centerText(text){
    let textCentered = "";
    let lgText = text.length;
    let nbSpaces = 48 - lgText;
    let modulo = nbSpaces%2;
    let spacesBefore = " ".repeat(Math.trunc((48-lgText)/2)+modulo);
    let spacesAfter = " ".repeat(Math.trunc((48-lgText)/2));
    textCentered = "#" + spacesBefore + text + spacesAfter + "#";
    return textCentered;
}
function initPizzaFlavors(){
    let datasPizza = fs.readFileSync('datas-pizza.json');
    let pizzaFlavors = JSON.parse(datasPizza);
    return pizzaFlavors;
}
function listAllPizzaFlavors(pizzaFlavors){ 
    let cpt = 1;
    for(let flavor of pizzaFlavors.flavors){
        let flavorName = flavor + " (" + cpt + ")";
        console.log(centerText(flavorName));
        cpt++;
    }
    console.log("#                                                #");
    pizzaFlavors.menuChoice = 0;
    return pizzaFlavors;
}
function addPizzaFlavor(pizzaFlavors){
    let newFlavor = readlineSync.question("Please enter a new pizza flavor > ");
    pizzaFlavors.flavors.push(newFlavor);
    console.log("Pizza flavor '" + newFlavor + "' added!");
    pizzaFlavors.menuChoice = 1;
    let datasPizza = JSON.stringify(pizzaFlavors);
    fs.writeFileSync('datas-pizza.json',datasPizza);
    return pizzaFlavors;
}
function removePizzaFlavor(pizzaFlavors){
    let cpt = 1;
    for(let flavor of pizzaFlavors.flavors){
        let flavorName = flavor + " (" + cpt + ")";
        console.log(centerText(flavorName));
        cpt++;
    }
    console.log("#                                                #");
    console.log("##################################################");
    let delFlavor = readlineSync.questionInt("Which flavour do you want to remove (nb)? > ");
    pizzaFlavors.flavors.splice(delFlavor-1,1);
    console.log("Pizza flavor " + delFlavor + " removed!");
    pizzaFlavors.menuChoice = 1;
    let datasPizza = JSON.stringify(pizzaFlavors);
    fs.writeFileSync('datas-pizza.json',datasPizza);
    return pizzaFlavors;
}

let pizzaFlavors = initPizzaFlavors();
let finished = false;
let menuChoice = pizzaFlavors.menuChoice;

while(!finished){
    console.clear();
    console.log("##################################################");
    console.log("#                                                #");
    console.log("#   WELCOME TO THE                               #");
    console.log("#          _                                     #"); 
    console.log("#         (_)                                    #"); 
    console.log("#    _ __  _ __________ _                        #");
    console.log("#   | '_ \\| |_  /_  / _` |                       #");
    console.log("#   | |_) | |/ / / / (_| |                       #");
    console.log("#   | .__/|_/___/___\\__,_|                       #");
    console.log("#   | |                      FLAVORS MANAGER !!! #");
    console.log("#   |_|                                          #");
    console.log("#                                                #");
    console.log("##################################################");
    if(menuChoice==0){
        console.log("#                                                #");
        console.log(centerText("<< ACTIONS >>"));
        console.log("#                                                #");
        console.log("#          1 - List all the pizza flavors        #");
        console.log("#          2 - Add a new pizza flavor            #");
        console.log("#          3 - Remove a pizza flavor             #");
        console.log("#          4 - Exit this program                 #");
        console.log("#                                                #");
        console.log("##################################################");
    }
    if(menuChoice==1){
        console.log("#                                                #");
        console.log(centerText("<< ACTIONS >>"));
        console.log("#                                                #");
        console.log("#     -->  1 - LIST ALL THE PIZZA FLAVORS  <--   #");
        console.log("#          2 - Add a new pizza flavor            #");
        console.log("#          3 - Remove a pizza flavor             #");
        console.log("#          4 - Exit this program                 #");
        console.log("#                                                #");
        menuChoice = listAllPizzaFlavors(pizzaFlavors).menuChoice;
        console.log("##################################################");
    }
    if(menuChoice==2){
        console.log("#                                                #");
        console.log(centerText("<< ACTIONS >>"));
        console.log("#                                                #");
        console.log("#          1 - List all the pizza flavors        #");
        console.log("#     -->  2 - ADD A NEW PIZZA FLAVOR      <--   #");
        console.log("#          3 - Remove a pizza flavor             #");
        console.log("#          4 - Exit this program                 #");
        console.log("#                                                #");
        console.log("##################################################");
        menuChoice = addPizzaFlavor(pizzaFlavors).menuChoice;
    }
    if(menuChoice==3){
        console.log("#                                                #");
        console.log(centerText("<< ACTIONS >>"));
        console.log("#                                                #");
        console.log("#          1 - List all the pizza flavors        #");
        console.log("#          2 - Add a new pizza flavor            #");
        console.log("#     -->  3 - REMOVE A PIZZA FLAVOR       <--   #");
        console.log("#          4 - Exit this program                 #");
        console.log("#                                                #");
        menuChoice = removePizzaFlavor(pizzaFlavors).menuChoice;
    }
    if(menuChoice==0){
        console.log("Pizza flavours [" + pizzaFlavors.flavors.length + "]");
        let userChoice = readlineSync.questionInt("Enter your ACTION's number > ");
        menuChoice = userChoice;
        if(userChoice==4){finished = true;}
    }          
}