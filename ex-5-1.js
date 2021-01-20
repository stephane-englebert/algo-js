// MISSION
//
//      Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
//      - Name
//      - Production year
//      - Names of the cast members (there can be as much as the user want)
// 
//      That function must gather all the data in a single object and return it. The data structure must be elegant.
//      Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const readlineSync = require("readline-sync");

// The function askTvSerie() purpose is to gather data to the user about its favorite TV serie (name, prod_year and cast_members)
// All the data gathered will be returned by this function in a single object (tv_serie_obj)
function askTvSerie(){
    let tv_serie_obj = {
        name:"",
        prod_year:"",
        cast_members:[]
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

console.log("FUNCTION askTvSerie IS GATHERING DATA ABOUT TV SERIES");
let user_serie = askTvSerie();
console.log("DATA GATHERED > " + JSON.stringify(user_serie));