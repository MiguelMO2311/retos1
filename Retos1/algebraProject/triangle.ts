import { Point } from "./point";

export class Triangle {
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1: Point, vertex2: Point, vertex3: Point) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    public getVertex1(): Point {
        return this.vertex1;
    }
    public getVertex2(): Point {
        return this.vertex2;
    }
    public getVertex3(): Point {
        return this.vertex3;
    }
    public setVertex1(vertex1: Point) {
        this.vertex1 = vertex1;
    }
    public setVertex2(vertex2: Point) {
        this.vertex2 = vertex2;
    }
    public setVertex3(vertex3: Point) {
        this.vertex3 = vertex3;
    }
    public calculateLengthSides(): number[] {

        let pos1 = (this.vertex1.calculateDistance(this.vertex2));
        let pos2 = (this.vertex2.calculateDistance(this.vertex3));
        let pos3 = (this.vertex3.calculateDistance(this.vertex1));
        let res = [pos1, pos2, pos3];
        return res
    }
}
// let pointA = new Point (2,3)
// let pointB = new Point (2,6)
// let pointC = new Point (2,9)


// let triangle1= new Triangle (pointA,pointB,pointC);
// console.log (triangle1.calculateLengthSides());