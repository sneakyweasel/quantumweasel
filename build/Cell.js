// CELL CLASS
export default class Cell {
    constructor(x, y, val) {
        this.x = x;
        this.y = y;
        this.coord = [x, y];
        this.val = val;
    }
    id(col_count) {
        this.y * col_count + this.x;
    }
    // Adjacent cells
    left() { return [this.x - 1, this.y]; }
    right() { return [this.x + 1, this.y]; }
    top() { return [this.x, this.y - 1]; }
    bottom() { return [this.x, this.y + 1]; }
    adjacent() {
        return [
            this.left(),
            this.right(),
            this.top(),
            this.bottom()
        ];
    }
    isAdjacent(coord) {
        return this.adjacent().includes(coord);
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
}
//# sourceMappingURL=Cell.js.map