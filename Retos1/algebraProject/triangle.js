"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.getVertex1 = function () {
        return this.vertex1;
    };
    Triangle.prototype.getVertex2 = function () {
        return this.vertex2;
    };
    Triangle.prototype.getVertex3 = function () {
        return this.vertex3;
    };
    Triangle.prototype.setVertex1 = function (vertex1) {
        this.vertex1 = vertex1;
    };
    Triangle.prototype.setVertex2 = function (vertex2) {
        this.vertex2 = vertex2;
    };
    Triangle.prototype.setVertex3 = function (vertex3) {
        this.vertex3 = vertex3;
    };
    Triangle.prototype.calculateLengthSides = function () {
        var pos1 = (this.vertex1.calculateDistance(this.vertex2));
        var pos2 = (this.vertex2.calculateDistance(this.vertex3));
        var pos3 = (this.vertex3.calculateDistance(this.vertex1));
        var res = [pos1, pos2, pos3];
        return res;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
// let pointA = new Point (2,3)
// let pointB = new Point (2,6)
// let pointC = new Point (2,9)
// let triangle1= new Triangle (pointA,pointB,pointC);
// console.log (triangle1.calculateLengthSides());
