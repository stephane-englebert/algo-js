// MISSION
//      Create a program that will re-use the Rectangle class you created previously. 
//      It should generate 1000 random instances of Rectangle with random positions and sizes. 
//      Then it will display all colliding rectangles amongst those that were generated that way.

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
    let x = randN(0,20);
    let y = randN(0,20);
    let w = randN(1,6);
    let l = randN(1,6);
    let newRectangle = new Rectangle(x,y,w,l);
    return newRectangle;
}
console.clear();
let cpt = 0;
console.log("====================================");
console.log(" COLLIDING RECTANGLES ");
console.log("====================================");
for(let i=0; i<1000; i++){
    let Rectangle1 = initRectangle();
    let Rectangle2 = initRectangle();
    let collisionRect = Rectangle1.collides(Rectangle2);
    if(collisionRect){
        cpt++;
        console.log("COLLISION " + cpt + " > RECT1 [ " + Rectangle1.topLeftXPos + "(x) " + Rectangle1.topLeftYPos + "(y) " + Rectangle1.width + "(w) " + Rectangle1.length + "(l) ] - RECT2 [ " + Rectangle2.topLeftXPos + "(x) " + Rectangle2.topLeftYPos + "(y) " + Rectangle2.width + "(w) " + Rectangle2.length + "(l) ]");
    }
}
console.log("====================================");