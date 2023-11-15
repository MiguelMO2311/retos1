
export class Point {

    private x: number;
    private y: number;
    public res: number;




    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
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
        return `(${this.x.toString()},${this.y.toString()})`;
    }
    public distanceTolOrigin(): number {

        let res = Math.sqrt((this.x ** 2) + (this.y ** 2));
        return res;
    }

    public calculateDistance(anotherPoint: Point): number {

        let distanceXY = Math.sqrt((anotherPoint.x - this.x) ** 2 + (anotherPoint.y - this.y) ** 2)
        return distanceXY;
    }
    // d = √((x2 - x1)² + (y2 - y1)²)

    calcularQuadrant(): number {
        if (this.x == 0 || this.y == 0) {
            return 0;
        } else if (this.x >= 0 && this.y >= 0) {
            return 1;
        } else if (this.x < 0 && this.y >= 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else (this.x >= 0 && this.y < 0)
        return 4
    }
    public calculateNearest(points: Point[]): Point {

        let bestDif:number = Number.MAX_VALUE;
        let near:number;
        let nearPoint;

        for (let i = 0; i < points.length; ++i) {
        near = this.calculateDistance(points[i]);
        
            if (bestDif > near) {
                bestDif = near;
                nearPoint = points[i];
            }
        }
        return nearPoint;
    }
}
// let pointA: Point = new Point(2, 3);
// let pointB: Point = new Point(3, 4);
// let pointC: Point = new Point(5, 8);
// let listPoints = [pointA, pointB, pointC]
// let currentPoint = new Point(7,5);
// console.log (currentPoint.calculateNearest(listPoints));



















