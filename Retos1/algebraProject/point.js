"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x.toString(), ",").concat(this.y.toString(), ")");
    };
    Point.prototype.distanceTolOrigin = function () {
        var res = Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
        return res;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distanceXY = Math.sqrt(Math.pow((anotherPoint.x - this.x), 2) + Math.pow((anotherPoint.y - this.y), 2));
        return distanceXY;
    };
    // d = √((x2 - x1)² + (y2 - y1)²)
    Point.prototype.calcularQuadrant = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x >= 0 && this.y >= 0) {
            return 1;
        }
        else if (this.x < 0 && this.y >= 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else
            (this.x >= 0 && this.y < 0);
        return 4;
    };
    Point.prototype.calculateNearest = function (points) {
        var bestDif = Number.MAX_VALUE;
        var near;
        var nearPoint;
        for (var i = 0; i < points.length; ++i) {
            near = this.calculateDistance(points[i]);
            if (bestDif > near) {
                bestDif = near;
                nearPoint = points[i];
            }
        }
        return nearPoint;
    };
    return Point;
}());
exports.Point = Point;
// let pointA: Point = new Point(2, 3);
// let pointB: Point = new Point(3, 4);
// let pointC: Point = new Point(5, 8);
// let listPoints = [pointA, pointB, pointC]
// let currentPoint = new Point(7,5);
// console.log (currentPoint.calculateNearest(listPoints));
