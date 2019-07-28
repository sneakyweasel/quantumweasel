// CELL CLASS
import Coord from "./Coord";
export default class Cell extends Coord {
    constructor(coord, val) {
        super(coord.x, coord.y);
        this.val = val;
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
    // Cell from number[]
    static fromArray(x, y, val) {
        return new Cell(new Coord(x, y), val);
    }
}
//# sourceMappingURL=Cell.js.map