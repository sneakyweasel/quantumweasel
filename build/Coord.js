// COORDINATES CLASS
// Rewrite with math.index vector definition
export default class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    adjacent() {
        const left = new Coord(this.x - 1, this.y);
        const right = new Coord(this.x + 1, this.y);
        const up = new Coord(this.x, this.y - 1);
        const down = new Coord(this.x, this.y + 1);
        return [left, right, up, down];
    }
    isAdjacent(coord) {
        return this.adjacent().includes(coord);
    }
    swap() {
        const saveY = this.y;
        this.y = this.x;
        this.x = saveY;
    }
    toArray() {
        return [this.x, this.y];
    }
}
//# sourceMappingURL=Coord.js.map