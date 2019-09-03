"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SPACING = 100;
class Pos {
    constructor(q, r, s) {
        this.q = q;
        this.r = r;
        this.s = s;
    }
    // returns grid coords with element type
    get id() {
        return `${this.q},${this.r}${this.s ? "," + this.s : ""}`;
    }
    // returns x, y position
    get x() {
        return (this.q + (this.s !== 'W' && this.s !== 'v' ? 0.5 : 0.0)) * SPACING;
    }
    get y() {
        return (this.r + (this.s !== 'N' && this.s !== 'v' ? 0.5 : 0.0)) * SPACING;
    }
    get xy() {
        return `${this.x.toFixed(2)},${this.y.toFixed(2)}`;
    }
    toString() {
        return this.id;
    }
    equals(other) {
        return this.id === other.id;
    }
}
exports.default = Pos;
//# sourceMappingURL=Pos.js.map