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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.x.toString();
        this.y.toString();
        console.log(this.getX, this.getY);
=======
        return ("(".concat(this.x.toString(), ",").concat(this.y.toString(), ")"));
>>>>>>> repaso2
=======
        return ("(".concat(this.x.toString(), ",").concat(this.y.toString(), ")"));
>>>>>>> repaso2
=======
        return ("(".concat(this.x.toString(), ",").concat(this.y.toString(), ")"));
>>>>>>> repaso2
    };
    return Point;
}());
exports.Point = Point;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log(toString());
=======
>>>>>>> repaso2
=======
>>>>>>> repaso2
=======
>>>>>>> repaso2
