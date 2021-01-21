// MISSION
//
//      Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

const readlineSync = require("readline-sync");

function listDivisors(n,div){
    if(Math.abs(div)==1){
        return [];
    }else{
        let arrayDiv = listDivisors(n,div-1);
        if(Math.abs(n%div)==0){arrayDiv.push(div);}
        return arrayDiv;
    }
}

console.log("======================================");
console.log("        DIVISORS OF A NUMBER")
console.log("======================================");
let n = readlineSync.questionInt(" Please enter a number > ");
console.log("======================================");
console.log(" DIVISORS :");
console.log(JSON.stringify(listDivisors(Math.abs(n),Math.abs(n)-1)));