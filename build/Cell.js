"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CELL CLASS
const Coord_1 = require("./Coord");
class Cell extends Coord_1.default {
    constructor(coord, value) {
        super(coord.x, coord.y);
        this.coord = coord;
        this.value = value;
    }
    id(col_count) {
        this.y * col_count + this.x;
    }
    // SVG top left coordinates
    pos(spacing) {
        const x = this.x * spacing;
        const y = this.y * spacing;
        return [x, y];
    }
    // SVG cell center coordinates
    centerPos(spacing) {
        const x = this.x * spacing + spacing / 2;
        const y = this.y * spacing + spacing / 2;
        return [x, y];
    }
    display() {
        console.log(`Cell at [${this.x}, ${this.y}] has value: ${this.value}`);
    }
    // Cell from number[]
    static fromArray(x, y, value) {
        return new Cell(new Coord_1.default(x, y), value);
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map