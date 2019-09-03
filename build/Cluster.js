"use strict";
// Blob CLASS
// Validate row or column and at least two numbers
Object.defineProperty(exports, "__esModule", { value: true });
// import * as math from 'mathjs'
const Coord_js_1 = require("./Coord.js");
const Cell_js_1 = require("./Cell.js");
class Blob {
    // Allow constructor with origin coord, number array and direction
    constructor(cells) {
        this.cells = cells;
        this.indices = [];
        this.values = [];
        cells.forEach((cell) => {
            this.indices.push(cell.coord);
        });
        cells.forEach((cell) => {
            this.values.push(cell.value);
        });
    }
    // Find origin top left coordinate position 0
    origin() {
        return this.indices[0];
    }
    // Row form boolean
    isRow() {
        return this.indices[0].x === this.indices[1].x;
    }
    // Display
    display() {
        console.log(this.values.toString());
    }
    // Generate from values and origin
    static fromArray(origin, values, row) {
        const scalars = [];
        values.forEach((value, index) => {
            if (row) {
                const curCoord = new Coord_js_1.default(origin.x + index, origin.y);
                scalars.push(new Cell_js_1.default(curCoord, value));
            }
            else {
                const curCoord = new Coord_js_1.default(origin.x, origin.y + index);
                scalars.push(new Cell_js_1.default(curCoord, value));
            }
        });
        return new Blob(scalars);
    }
}
exports.default = Blob;
//# sourceMappingURL=Cluster.js.map