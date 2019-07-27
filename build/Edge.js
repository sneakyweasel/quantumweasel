// Edge class inspired from RedBlobGames
// view-source:https://www.redblobgames.com/grids/edges/grid-edges.js?2019-01-16-17-43-46
// See continues: http://www-cs-students.stanford.edu/~amitp/game-programming/grids/
import Pos from "./Pos.js";
import Tile from "./Tile.js";
import Corner from "./Corner.js";
function vmix(a, b, t) {
    const x = a.x * (1 - t) + b.x * t;
    const y = a.y * (1 - t) + b.y * t;
    return {
        x,
        y,
        toString() { return `${x.toFixed(2)},${y.toFixed(2)}`; }
    };
}
export default class Edge extends Pos {
    get parity() {
        return this.s === 'N' ? 0 : 1;
    }
    get joins() {
        const { q, r, s } = this;
        switch (s) {
            case 'N': return [new Tile(q, r - 1), new Tile(q, r)];
            case 'W': return [new Tile(q - 1, r), new Tile(q, r)];
        }
        throw "Invalid Edge";
    }
    get endpoints() {
        const { q, r, s } = this;
        switch (s) {
            case 'N': return [new Corner(q, r), new Corner(q + 1, r)];
            case 'W': return [new Corner(q, r), new Corner(q, r + 1)];
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
//# sourceMappingURL=Edge.js.map