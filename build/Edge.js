"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Edge class inspired from RedBlobGames
// view-source:https://www.redblobgames.com/grids/edges/grid-edges.js?2019-01-16-17-43-46
// See continues: http://www-cs-students.stanford.edu/~amitp/game-programming/grids/
const Pos_js_1 = require("./Pos.js");
const Tile_js_1 = require("./Tile.js");
const Corner_js_1 = require("./Corner.js");
function vmix(a, b, t) {
    const x = a.x * (1 - t) + b.x * t;
    const y = a.y * (1 - t) + b.y * t;
    return {
        x,
        y,
        toString() { return `${x.toFixed(2)},${y.toFixed(2)}`; }
    };
}
class Edge extends Pos_js_1.default {
    get parity() {
        return this.s === 'N' ? 0 : 1;
    }
    get joins() {
        const { q, r, s } = this;
        switch (s) {
            case 'N': return [new Tile_js_1.default(q, r - 1), new Tile_js_1.default(q, r)];
            case 'W': return [new Tile_js_1.default(q - 1, r), new Tile_js_1.default(q, r)];
        }
        throw "Invalid Edge";
    }
    get endpoints() {
        const { q, r, s } = this;
        switch (s) {
            case 'N': return [new Corner_js_1.default(q, r), new Corner_js_1.default(q + 1, r)];
            case 'W': return [new Corner_js_1.default(q, r), new Corner_js_1.default(q, r + 1)];
        }
        throw "Invalid Edge";
    }
    makePolygon(blend) {
        const { endpoints, joins } = this;
        return [
            endpoints[0].xy,
            vmix(endpoints[0], joins[0], blend),
            vmix(endpoints[1], joins[0], blend),
            endpoints[1].xy,
            vmix(endpoints[1], joins[1], blend),
            vmix(endpoints[0], joins[1], blend),
        ];
    }
}
exports.default = Edge;
//# sourceMappingURL=Edge.js.map