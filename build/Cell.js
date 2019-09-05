"use strict";
// CELL CLASS
// FIXME: enum would be nicer for rotation
Object.defineProperty(exports, "__esModule", { value: true });
const Coord_1 = require("./Coord");
const Element_1 = require("./Element");
class Cell extends Coord_1.default {
    constructor(coord, element, rotation, frozen) {
        super(coord.x, coord.y);
        // FIXME: Figure out the good way to have class inheritance
        this.coord = coord;
        this.element = element;
        this.rotation = rotation;
        this.frozen = frozen;
    }
    // Display in console
    display() {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`);
    }
    // A blank cell with no element
    static blank(coord) {
        return new Cell(coord, Element_1.default.blank(), 0, false);
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map