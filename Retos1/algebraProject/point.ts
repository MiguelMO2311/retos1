<<<<<<< HEAD
import { log } from "console";

class Point {
    private x: number;
    private y: number;
=======
class Point {

    private x: number;
    private y: number;

>>>>>>> repaso2
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
<<<<<<< HEAD
HEAD
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public setX(x: number) {
        this.x = x;
    }
    public setY(y: number) {
        this.y = y;
    }
    public toString():void{
        this.x.toString();
        this.y.toString();
        console.log(this.getX, this.getY)
    }
}
console.log(toString())
export { Point };
=======
>>>>>>> repaso2
    public getX() {
        return this.x;
    }
    public getY() {
        return this.y;
    }
    public setX(x) {
        this.x = x;
    }
    public setY(y) {
        this.y = y;
    }

    public toString(): string {
        return (`(${this.x.toString()},${this.y.toString()})`)
    }
}
// let point1 = new Point(1,2)
// console.log(point1.toString())

<<<<<<< HEAD
export { Point };
>>>>>>> repaso2
=======
export { Point };
>>>>>>> repaso2
