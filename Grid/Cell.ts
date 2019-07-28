// CELL CLASS
import Coord from "./Coord.js"

export default class Cell extends Coord {
    coord: Coord
    val: number

    constructor(
        coord: Coord,
        val: number
    ) {
        super(coord.x, coord.y)
        this.val = val
    }

    id(col_count: number) {
        this.y * col_count + this.x
    }

    // SVG top left coordinates
    pos(spacing: number) {
        const x = this.x * spacing
        const y = this.y * spacing
        return [x, y]
    }

    // SVG cell center coordinates
    centerPos(spacing: number) {
        const x = this.x * spacing + spacing / 2
        const y = this.y * spacing + spacing / 2
        return [x, y]
    }

    // Cell from number[]
    static fromArray(x: number, y: number, val: number): Cell {
        return new Cell(new Coord(x, y), val)
    }
}
