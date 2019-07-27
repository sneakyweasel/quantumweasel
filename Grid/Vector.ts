// VECTOR CLASS
// Validate row or column and at least two numbers

// import * as math from 'mathjs'
import Cell from './Cell.js'

export default class Vector {
    scalars: Cell[]
    indices: number[][]
    values: number[]

    // Allow constructor with origin coord, number array and direction
    constructor(cells: Cell[]) {
        this.scalars = cells
        this.indices = []
        this.values = []
        cells.forEach((cell) => {
            this.indices.push(cell.coord)
        })
        cells.forEach((cell) => {
            this.values.push(cell.val)
        })
    }
    // Find origin top left coordinate position 0
    origin(): number[] {
        return this.indices[0]
    }

    // Row form boolean
    isRow(): boolean {
        return this.indices[0][0] === this.indices[1][0]
    }

    // Display
    display() {
        console.log(this.values.toString())
    }

    // Generate from values and origin
    static fromArray(origin: number[], values: number[], row: boolean): Vector {
        const scalars: Cell[] = []
        const x = origin[0]
        const y = origin[1]
        values.forEach((value, index) => {
            if (row) {
                scalars.push(new Cell(x + index, y, value))
            } else {
                scalars.push(new Cell(x, y + index, value))
            }
        })
        return new Vector(scalars)
    }

}