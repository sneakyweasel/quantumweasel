// VECTOR CLASS
// Validate row or column and at least two numbers

// import * as math from 'mathjs'
import Coord from './Coord.js'
import Cell from './Cell.js'

export default class Vector {
    cells: Cell[]
    indices: Coord[]
    values: number[]

    // Allow constructor with origin coord, number array and direction
    constructor(cells: Cell[]) {
        this.cells = cells
        this.indices = []
        this.values = []
        cells.forEach((cell) => {
            this.indices.push(cell.coord)
        })
        cells.forEach((cell) => {
            this.values.push(cell.value)
        })
    }
    // Find origin top left coordinate position 0
    origin(): Coord {
        return this.indices[0]
    }

    // Row form boolean
    isRow(): boolean {
        return this.indices[0].x === this.indices[1].x
    }

    // Display
    display() {
        console.log(this.values.toString())
    }

    // Generate from values and origin
    static fromArray(origin: Coord, values: number[], row: boolean): Vector {
        const scalars: Cell[] = []
        values.forEach((value, index) => {
            if (row) {
                const curCoord = new Coord(origin.x + index, origin.y)
                scalars.push(new Cell(curCoord, value))
            } else {
                const curCoord = new Coord(origin.x, origin.y + index)
                scalars.push(new Cell(curCoord, value))
            }
        })
        return new Vector(scalars)
    }

}