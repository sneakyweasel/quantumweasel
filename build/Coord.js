"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// COORDINATES CLASS
// Rewrite with math.index vector definition
class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Adjacent cells
    left() { return new Coord(this.x - 1, this.y); }
    right() { return new Coord(this.x + 1, this.y); }
    top() { return new Coord(this.x, this.y - 1); }
    bottom() { return new Coord(this.x, this.y + 1); }
    adjacent() {
        const left = new Coord(this.x - 1, this.y);
        const right = new Coord(this.x + 1, this.y);
        const up = new Coord(this.x, this.y - 1);
        const down = new Coord(this.x, this.y + 1);
        return [left, right, up, down];
    }
    isAdjacent(coord) {
        if (this.adjacent().indexOf(coord) === -1) {
            return false;
        }
        else {
            return true;
        }
    }
    toArray() {
        return [this.x, this.y];
    }
}
exports.default = Coord;
//# sourceMappingURL=Coord.js.map