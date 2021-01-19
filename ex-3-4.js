// MISSION
//      Write a program that will display the minimum and maximum elements of a given array.

let myArray = [1,8,3,7,0];
let minArray = Math.min(...myArray);
let maxArray = Math.max(...myArray);
console.log("'min' AND 'max' ITEMS IN [" + myArray + "] ARE :");
console.log("'min' > " + minArray);
console.log("'max' > " + maxArray);