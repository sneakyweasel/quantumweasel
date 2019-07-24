// SCALAR CLASS
// Matrix tile class with position and value

// import * as math from 'mathjs'
import Coord from './Coord'

export default class Scalar {
    coord: Coord
    val: number

    constructor(coord: Coord, val: number) {
        this.coord = coord
        this.val = val
    }

    static fromObject(x: number, y: number, val: number) {
        const coord = new Coord(x, y)
        return new Scalar(coord, val)
    }
}
