export class Point {

    private x: number;
    private y: number;
    public res: number;

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
    public toString(): string {
        return (`(${this.x.toString()},${this.y.toString()})`);
    }
    public distanceTolOrigin(): number {

        let res = Math.sqrt((this.x ** 2)
            + (this.y ** 2));
        return res;
    }

    public calculateDistance(anotherPoint: Point): number {

        let distanceXY = Math.sqrt((this.x[1] - this.x[0]) ** 2 + (this.y[1] - this.y[0]) ** 2)
        return distanceXY;
    }

    calcularQuadrant(x, y): number {
        if (x == 0 || y == 0) {
            return 0;
        } else if (x >= 0 && y >= 0) {
            return 1;
        } else if (x < 0 && y >= 0) {
            return 2;
        } else if (x < 0 && y < 0) {
            return 3;
        } else (x >= 0 && y < 0)
        return 4
    }
}









