
import { Point } from './point'

let p1 = new Point(5.3, 2.1);
p1.toString();

let point1 = new Point(1,2)
console.log(point1.toString())

let point0 = new Point(2,6) 
console.log (point0.distanceTolOrigin())

let etX = new Point (5,7);
let etY = new Point(3,9);
console.log (etX.calculateDistance(etY));

