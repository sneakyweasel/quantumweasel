// CELL CLASS
import Coord from "./Coord"

export default class Cell extends Coord {

    coord: Coord
    value: number

    constructor(coord: Coord, value: number) {
        super(coord.x, coord.y)
        this.value = value
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

    display() {
        console.log(`Cell at [${this.x}, ${this.y}] has value: ${this.value}`)
    }

    // Cell from number[]
    static fromArray(x: number, y: number, value: number): Cell {
        return new Cell(new Coord(x, y), value)
    }
}
