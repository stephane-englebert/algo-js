// MISSION
//      Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
//      Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. 
//      That program must use the function you created.
//      Write a documentation for the calcSurface function.

const readlineSync = require("readline-sync");

// The function calcSurface multiply the length of a rectangle by his width in order to return his surface
// Both arguments are positive numbers greater than 0.
function calcSurface(lg,wd){
    let surface = 0;
    surface = lg * wd;
    return surface;
}

let lg = 0;
let wd = 0;
console.log("FUNCTION CALCSURFACE IS RETURNING SURFACE OF A RECTANGLE");
while(lg<1){
    lg = readlineSync.questionInt("Please enter the length of rectangle > ");
    if(lg<1){console.log("ERROR : length must be greater than 0");}
}
while(wd<1){
    wd = readlineSync.questionInt("Please enter the width of rectangle > ");
    if(wd<1){console.log("ERROR : width must be greater than 0");}
}
console.log("SURFACE OF RECTANGLE > " + calcSurface(lg,wd));