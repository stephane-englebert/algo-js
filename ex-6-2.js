// MISSION
//      Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. 
//      Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.
//      
//      Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = Math.abs(width);
        this.length = Math.abs(length);
    }
    collides(otherRectangle){
        let collision = false;
        let x = otherRectangle.topLeftXPos;
        let y = otherRectangle.topLeftYPos;
        let w = otherRectangle.width;
        let l = otherRectangle.length;        
        if(this.topLeftXPos<x){
            // Rectangle1 situé à gauche du Rectangle2
            if((this.topLeftXPos+this.width)>=x){
                // Collision potentielle si les 2 rectangles sur la même hauteur
                if(this.topLeftYPos<y){
                    // Rectangle1 situé en dessous du Rectangle2
                    if((this.topLeftYPos+l)>=y){
                        collision = true;
                    }
                }else{
                    // Rectangle1 situé au-dessus du Rectangle2
                    if((y+this.length)>=this.topLeftYPos){
                        collision = true;
                    }
                }
            }
        }else{
            // Rectangle1 sité à droite du Rectangle2
            if((x+w)>=this.topLeftXPos){
                // Collision potentielle si les 2 rectangles sur la même hauteur
                if(this.topLeftYPos<y){
                    // Rectangle1 situé en dessous du Rectangle2
                    if((this.topLeftYPos+l)>=y){collision = true;}
                }else{
                    // Rectangle1 situé au-dessus du Rectangle2
                    if((y+this.length)>=this.topLeftYPos){collision = true;}
                }
            }
        }
        return collision; 
    }
    Attributes(){
        let rectAttributes = "" + this.topLeftXPos + "," + this.topLeftYPos + "," + this.width + "," + this.length;
        return rectAttributes;
    }    
}
function randN(n1,n2){
    let randomValue = n1 + Math.floor(Math.random()*n2);
    return randomValue;
}
function initRectangle(){
    let x = randN(0,10);
    let y = randN(0,10);
    let w = randN(1,10);
    let l = randN(1,10);
    let newRectangle = new Rectangle(x,y,w,l);
    return newRectangle;
}
const readlineSync = require("readline-sync");
let choice = "";
let finished = false;
while(!finished){
    console.clear();
    console.log("CLASS Rectangle()");
    console.log("====================================");
    console.log("RECTANGLE 1");
    let Rectangle1 = initRectangle();
    console.log("  POSITION TOP LEFT (x,y) > " + Rectangle1.topLeftXPos + "," + Rectangle1.topLeftYPos);
    console.log("  WIDTH (x) > " + Rectangle1.width);
    console.log("  LENGTH (y) > " + Rectangle1.length);
    console.log("RECTANGLE 2");
    let Rectangle2 = initRectangle();
    console.log("  POSITION TOP LEFT (x,y) > " + Rectangle2.topLeftXPos + "," + Rectangle2.topLeftYPos);
    console.log("  WIDTH (x) > " + Rectangle2.width);
    console.log("  LENGTH (y) > " + Rectangle2.length);
    let collisionRect = Rectangle1.collides(Rectangle2);
    console.log("COLLISION ?");
    console.log(collisionRect);
    console.log("====================================");
    choice = readlineSync.question("MENU >    t = another test  |    e = exit > ");
    if(choice==="e"){
        finished=true;
    }else if(choice==="t"){

    }
}