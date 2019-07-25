// VECTOR CLASS
// Validate row or column and at least two numbers

// import * as math from 'mathjs'
import Coord from './Coord.js'
import Cell from './Cell.js'

export default class Vector {
    scalars: Cell[]
    indices: Coord[]
    values: number[]

    // Allow constructor with origin coord, number array and direction
    constructor(cells: Cell[]) {
        this.scalars = cells
        this.indices = []
        this.values = []
        cells.forEach((elem) => {
            this.indices.push(elem.coord)
        })
        cells.forEach((elem) => {
            this.values.push(elem.val)
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

    // Swap row and column form math.transpose(x)
    transpose() {
        this.indices.forEach((elem) => {
            elem.swap()
        })
    }

    // Display
    display() {
        console.log(this.values.toString())
    }

    static fromArray(x: number, y: number, values: number[], row: boolean): Vector {
        const scalars: Cell[] = []
        let coord: Coord
        values.forEach((elem, index) => {
            if (row) {
                coord = new Coord(x + index, y)
            } else {
                coord = new Coord(x, y + index)
            }
            const scalar = new Cell(coord, elem)
            scalars.push(scalar)
        })
        return new Vector(scalars)
    }

}