// CELL CLASS
// Matrix tile class with position and value

// import * as math from 'mathjs'
import Coord from './Coord.js'

export default class Cell {
    coord: Coord
    val: number

    constructor(coord: Coord, val: number) {
        this.coord = coord
        this.val = val
    }

    // Grid edge implementation from https://www.redblobgames.com/grids/edges/
    borders() {
        return [
            this.coord.x, this.coord.y, 'N'
        ]
    }

    static fromObject(x: number, y: number, val: number) {
        const coord = new Coord(x, y)
        return new Cell(coord, val)
    }
}
