import { Triangle } from "./triangle";
import { Point } from "./point";

let pointA = new Point (2,3)
let pointB = new Point (2,6)
let pointC = new Point (2,9)

let triangle1= new Triangle (pointA,pointB,pointC);
console.log (triangle1.calculateLengthSides());