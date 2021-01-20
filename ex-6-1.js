// MISSION
//      Create a class named Circle with attributes xPos, yPos and radius. 
//      Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
//      Add a getter accessor named surface that will return the surface of the circle.
//
//      Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle{
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = Math.abs(radius);
    }
    get surface(){
        return Math.PI * Math.pow(this.radius,2); 
    }    
    set move(offsetxy){
        offsetxy = offsetxy.split(',');
        this.xPos = offsetxy[0];
        this.yPos = offsetxy[1];
    }
    set changeRadius(newRadius){
        this.radius = Math.abs(newRadius);
    }
}

const readlineSync = require("readline-sync");
let choice = "";
let offsetxy = "1,1";
let finished = false;
let myCircle = new Circle(1,1,1);
while(!finished){
    console.clear();
    console.log("CLASS Circle()");
    console.log("====================================");
    console.log("POSITION (x,y) > " + myCircle.xPos + "," + myCircle.yPos);
    console.log("RADIUS > " + myCircle.radius);
    console.log("SURFACE > " + myCircle.surface);
    console.log("====================================");
    choice = readlineSync.question("MENU >    m = move circle  |    e = exit > ");
    if(choice==="e"){
        finished=true;
    }else if(choice==="m"){
        let newX = readlineSync.questionInt("NEW POSITION (x) > ");
        let newY = readlineSync.questionInt("NEW POSITION (y) > ");
        let newRadius = readlineSync.questionInt("NEW RADIUS (x) > ");
        offsetxy = ""+newX+","+newY;
        myCircle.move = offsetxy;
        myCircle.changeRadius = newRadius;
    }
}