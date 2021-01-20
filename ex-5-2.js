// MISSION
//
//      Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in 
//      the previous exercise and return a list of the same cast but in a random order.
//
//      Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then 
//      display a randomized list of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");

// The function askTvSerie() purpose is to gather data to the user about its favorite TV serie (name, prod_year and cast_members)
// All the data gathered will be returned by this function in a single object (tv_serie_obj)
function askTvSerie(){
    let tv_serie_obj = {
        name:"",
        prod_year:"",
        cast_members:["aaa","bbb"]
    };
    let finished = false;
    let arrayCastMembers = [];
    let cpt = 1;
    let serie_name = readlineSync.question("What's your favorite TV serie? > ");
    let serie_prod_year = readlineSync.question("In which year was this serie produced? > ");
    console.log("Please enter the cast members (exit entering '*')");
    while(!finished){
        let serie_cast_member = readlineSync.question("MEMBER " + cpt + " > ");
        if(serie_cast_member==="*"){
            finished = true;
        }else if(serie_cast_member != ""){
            arrayCastMembers.push(serie_cast_member);
            cpt++;
        }
    }
    tv_serie_obj.name = serie_name;
    tv_serie_obj.prod_year = serie_prod_year;
    tv_serie_obj.cast_members = arrayCastMembers;
    return tv_serie_obj;
}

// The function randN(n1,n2) returns a random (integer) value between n1 and n2 
function randN(n1,n2){
    let randomValue = n1 + Math.floor(Math.random()*n2);
    return randomValue;
}

// The function randomizeCast(tvSerie) returns the list of cast members coming from tvSerie object but in a random order
// tvSerie object is passed as argument
function randomizeCast(tvSerie){
    let tempArray = tvSerie.cast_members.slice();
    while(JSON.stringify(tempArray)===JSON.stringify(tvSerie.cast_members)){
        let pos = 0;
        while (pos < tempArray.length){
            randomPos = randN(0,tempArray.length);
            tempString = tempArray[pos];
            tempArray[pos] = tempArray[randomPos];
            tempArray[randomPos] = tempString;
            pos++;
        }
    }
    return tempArray;
}

console.log("FUNCTION askTvSerie IS GATHERING DATA ABOUT TV SERIES");
let tvSerie = askTvSerie();
console.log("PREVIOUS CAST LIST > " + JSON.stringify(tvSerie));
console.log("NEW CAST LIST > " + JSON.stringify(randomizeCast(tvSerie)));