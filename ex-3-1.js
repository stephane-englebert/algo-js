// MISSION
//      Write a program that will add all the elements of an array.

function sumOfArrayItems(myArray){
    let sumArray = 0;
    for(let item of myArray){
        sumArray += item;
    }
    return sumArray;
}

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [100, 101, 102];
console.log("Sum of first array > " + sumOfArrayItems(firstArray));
console.log("Sum of second array > " + sumOfArrayItems(secondArray));