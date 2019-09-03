type Direction = "N" | "W" | "v" | undefined
const SPACING = 100

export default class Pos {
    /* Unified coordinate object:
       s === undefined: tile
       s === 'v': vertex northwest of tile
       s === 'W'|'N': edge to west or north of tile
    */
    q: number
    r: number
    s: Direction

    constructor(q: number, r: number, s?: Direction) {
        this.q = q
        this.r = r
        this.s = s
    }

    // returns grid coords with element type
    get id() {
        return `${this.q},${this.r}${this.s ? "," + this.s : ""}`
    }
    // returns x, y position
    get x() {
        return (this.q + (this.s !== 'W' && this.s !== 'v' ? 0.5 : 0.0)) * SPACING
    }
    get y() {
        return (this.r + (this.s !== 'N' && this.s !== 'v' ? 0.5 : 0.0)) * SPACING
    }
    get xy() {
        return `${this.x.toFixed(2)},${this.y.toFixed(2)}`
    }
    toString() {
        return this.id
    }
    equals(other: Pos) {
        return this.id === other.id
    }
}