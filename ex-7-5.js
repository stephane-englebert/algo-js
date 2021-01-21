// MISSION
//
//      Create a program that can sort an array without using Array.sort() or a similar method. 
//      Test it with multiple arrays of numbers.

function sortAnArray(arrayToSort){
    if(arrayToSort.length>1){
        for(let j=0; j<arrayToSort.length; j++){
            let min = arrayToSort[j];
            let posMin = j;
            for(let i=j+1; i<arrayToSort.length; i++){                
                if(arrayToSort[i]<min){
                    min = arrayToSort[i]; 
                    posMin = i;                    
                }
            }
            let varTemp = arrayToSort[j];
            arrayToSort[j] = arrayToSort[posMin];
            arrayToSort[posMin] = varTemp;
        }
    }
    return arrayToSort;
}

function randN(n1,n2){
    let randomValue = n1 + Math.floor(Math.random()*n2);
    return randomValue;
}

function createAnArray(n,min,max){
    let arrayCreated = [];
    for(i=0; i<n; i++){
        arrayCreated.push(randN(min,max));
    }
    return arrayCreated;
}

console.log("====================================");
console.log("    SORTING AN ARRAY");
console.log("====================================");
console.log(" Array to sort : ");
let arrayToSort = createAnArray(20,1,100);
console.log(arrayToSort);
console.log("====================================");
console.log(" Array sorted : ");
console.log(sortAnArray(arrayToSort));
console.log("====================================");