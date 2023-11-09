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
        var distanceXY = Math.sqrt(Math.pow((this.x[1] - this.x[0]), 2) + Math.pow((this.y[1] - this.y[0]), 2));
        return distanceXY;
    };
    Point.prototype.calcularQuadrant = function (x, y) {
        if (x == 0 || y == 0) {
            return 0;
        }
        else if (x >= 0 && y >= 0) {
            return 1;
        }
        else if (x < 0 && y >= 0) {
            return 2;
        }
        else if (x < 0 && y < 0) {
            return 3;
        }
        else
            (x >= 0 && y < 0);
        return 4;
    };
    return Point;
}());
exports.Point = Point;
