class Point {

    private x: number;
    private y: number;

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
        return (`(${this.x.toString()},${this.y.toString()})`)
    }
}
// let point1 = new Point(1,2)
// console.log(point1.toString())

export { Point };