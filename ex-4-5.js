// MISSION
//      Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. 
//      That function must return the distance between those two points.
//
//      Create a program to use that function.
//      Write a documentation for the calcDistance function.

// The function calcDistance() returns the distance between 2 points (a and b) in a 2D space.
// Coordinates (x-axis and y-axis) of these 2 points are passed to the function as arguments => ax, ay, bx and by.
// If x-axis or y-axis values are the same, the function returns the difference between values on the other axis.
// Otherwise, the function calculates the distance based on the Pythagorean theorem => the sum of the squares on the legs 
// of a right triangle is equal to the square on the hypotenuse (a² + b² = c²)
function calcDistance(ax,ay,bx,by){
    let distance = 0;
    if((ax===bx)||(ay===by)){
        if(ax===bx){
            distance = Math.abs(by-ay);
        }else{
            distance = Math.abs(bx-ax);
        }
    }else{
        let side1 = Math.abs(ax-bx);
        let side2 = Math.abs(ay-by);
        distance = Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2)); // hypothenuse = sqrt(side1 ² + side2 ²)
    }
    return distance;
}

let result = calcDistance(2,5,6,2);
console.log("DISTANCE BETWEEN POINT a (2,5) AND POINT b (6,2) > " + result);