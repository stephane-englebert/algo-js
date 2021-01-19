// MISSION
//      Write a program that will calculate the average value of a given array.

function averageOfArrayItems(myArray){
    let sumArray = 0;
    let averageArray = 0;
    for(let item of myArray){
        sumArray += item;
    }
    if(myArray.length>0){
        averageArray = sumArray / myArray.length;
    }
    return averageArray;
}

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [100, 101, 102];
console.log("Average of first array > " + averageOfArrayItems(firstArray));
console.log("Average of second array > " + averageOfArrayItems(secondArray));