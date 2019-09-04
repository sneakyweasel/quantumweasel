// CLUSTER CLASS
// Cluster will be used to display multi-cellular components on the grid.
//  It is a collection of cells with an emergent behaviour.

import Coord from './Coord.js'
import Cell from './Cell.js'

export default class Cluster {
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
    // Origin of the cluster is the first element coordinates.
    origin(): Coord {
        return this.indices[0]
    }

    // Display
    display() {
        console.log(this.values.toString())
    }
}