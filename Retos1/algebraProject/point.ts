import { log } from "console";

class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
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
