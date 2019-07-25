import Pos from "./Pos.js"
import Edge from "./Edge.js"
import Corner from "./Corner.js"

// Flow-based code from RedBlobGames
// view-source:https://www.redblobgames.com/x/1805-conveyor-belts/grid-directed-edges.js?2019-01-15-08-51-20

function vmix(a: Pos, b: Pos, t: number) {
    const x = a.x * (1 - t) + b.x * t
    const y = a.y * (1 - t) + b.y * t
    return {
        x,
        y,
        toString() { return `${x.toFixed(2)},${y.toFixed(2)}` }
    }
}

export default class Tile extends Pos {
    get parity() {
        return (this.q + this.r) & 1
    }

    /* Access functions from
       http://www-cs-students.stanford.edu/~amitp/game-programming/grids/
    */
    get neighbors() {
        const { q, r } = this
        return [
            new Tile(q, r + 1),
            new Tile(q + 1, r),
            new Tile(q, r - 1),
            new Tile(q - 1, r),
        ]
    }

    get borders() {
        const { q, r } = this
        return [
            new Edge(q, r, 'N'),
            new Edge(q, r, 'W'),
            new Edge(q, r + 1, 'N'),
            new Edge(q + 1, r, 'W'),
        ]
    }

    get corners() {
        const { q, r } = this
        return [
            new Corner(q, r),
            new Corner(q, r + 1),
            new Corner(q + 1, r + 1),
            new Corner(q + 1, r)
        ]
    }

    makePolygon(blend: number) {
        return this.corners.map((p) =>
            vmix(p, this, blend)
        )
    }
}