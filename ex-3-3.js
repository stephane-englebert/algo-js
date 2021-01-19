// MISSION
//      Write a program that will create a duplicate of a given array.
//
//  Bonus: make a first version that will only do it using push(). 
//  Make a second version that uses a single method call to perform the copy. 
//  (You'll have to search on the MDN or Google for this one.)

function duplicateArrayVersion1(myArray){
    let duplicatedArray = [];
    for(let item of myArray){
        duplicatedArray.push(item);
    }
    return duplicatedArray;
}

function duplicateArrayVersion2(myArray){
    let duplicatedArray = myArray.slice();
    //let duplicatedArray = [].concat(myArray); //other option
    return duplicatedArray;
}

let arrayToDuplicate = [1,2,3,4];
console.log("=================================");
console.log("Array to duplicate = " + arrayToDuplicate);
console.log("=================================");
console.log("Duplication - 1st method > " + duplicateArrayVersion1(arrayToDuplicate));
console.log("Duplication - 2nd method > " + duplicateArrayVersion2(arrayToDuplicate));