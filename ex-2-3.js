// MISSION
//      Display all even numbers between 1 and 100.
//
// Bonus: do two different versions. 
//      The first one should use while and make a loop that will execute 100 times. 
//      The second one should use for and make a loop that will execute 50 times.

const readlineSync = require("readline-sync");

// First version ("While" + exec 100 times)
    let i = 2;   
    while(i<100){
        if(i%2===0){console.log(i);}
        i++;
    }

// Second version (Loop + exec 50 times)
    for(i=2; i<100; i+=2){
        console.log(i);
    }