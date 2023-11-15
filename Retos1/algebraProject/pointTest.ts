import { Point } from "./point";

let point1 = new Point(1, 2)
console.log(point1.toString())

let point0 = new Point(2, 6)
console.log(point0.distanceTolOrigin())

let etX = new Point(5, 7);
let etY = new Point(3, 9);
console.log(etX.calculateDistance(etY));

let cuadrant1 = new Point(1, 2)
console.log(cuadrant1.calcularQuadrant())

let pointA: Point = new Point(2, 3);
let pointB: Point = new Point(3, 4);
let pointC: Point = new Point(5, 8);
let listPoints = [pointA, pointB, pointC]
let currentPoint = new Point(7,5);
console.log (currentPoint.calculateNearest(listPoints));
