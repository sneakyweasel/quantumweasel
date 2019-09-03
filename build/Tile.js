"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pos_js_1 = require("./Pos.js");
const Edge_js_1 = require("./Edge.js");
const Corner_js_1 = require("./Corner.js");
// Flow-based code from RedBlobGames
// view-source:https://www.redblobgames.com/x/1805-conveyor-belts/grid-directed-edges.js?2019-01-15-08-51-20
function vmix(a, b, t) {
    const x = a.x * (1 - t) + b.x * t;
    const y = a.y * (1 - t) + b.y * t;
    return {
        x,
        y,
        toString() { return `${x.toFixed(2)},${y.toFixed(2)}`; }
    };
}
class Tile extends Pos_js_1.default {
    get parity() {
        return (this.q + this.r) & 1;
    }
    /* Access functions from
       http://www-cs-students.stanford.edu/~amitp/game-programming/grids/
    */
    get neighbors() {
        const { q, r } = this;
        return [
            new Tile(q, r + 1),
            new Tile(q + 1, r),
            new Tile(q, r - 1),
            new Tile(q - 1, r),
        ];
    }
    get borders() {
        const { q, r } = this;
        return [
            new Edge_js_1.default(q, r, 'N'),
            new Edge_js_1.default(q, r, 'W'),
            new Edge_js_1.default(q, r + 1, 'N'),
            new Edge_js_1.default(q + 1, r, 'W'),
        ];
    }
    get corners() {
        const { q, r } = this;
        return [
            new Corner_js_1.default(q, r),
            new Corner_js_1.default(q, r + 1),
            new Corner_js_1.default(q + 1, r + 1),
            new Corner_js_1.default(q + 1, r)
        ];
    }
    makePolygon(blend) {
        return this.corners.map((p) => vmix(p, this, blend));
    }
}
exports.default = Tile;
//# sourceMappingURL=Tile.js.map