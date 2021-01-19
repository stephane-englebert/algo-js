// MISSION
//      Count from 1 to 100. For every even number display the result of their division by 2. 
//      For every odd number display the result of their multiplication by 3.

for(i=1; i<=100; i++){
    if(i%2===0){
        // even number
        console.log(i/2);
    }else{
        // odd number
        console.log(i*3);
    }
}