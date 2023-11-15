"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var pointA = new point_1.Point(2, 3);
var pointB = new point_1.Point(2, 6);
var pointC = new point_1.Point(2, 9);
var triangle1 = new triangle_1.Triangle(pointA, pointB, pointC);
console.log(triangle1.calculateLengthSides());
