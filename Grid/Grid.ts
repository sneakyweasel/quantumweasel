// GRID CLASS
import * as math from 'mathjs'
import * as _ from 'lodash'
import Coord from './Coord.js'
import Cell from './Cell.js'
import Vector from './Vector.js'

export default class Grid {
    col_count: number
    row_count: number
    matrix: math.Matrix
    vectors: Vector[]

    constructor(col_count: number, row_count: number, matrix?: math.Matrix) {
        this.col_count = col_count
        this.row_count = row_count
        if (matrix) {
            this.matrix = matrix
        } else {
            this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse")
        }
        this.vectors = []
    }

    // Test if coord is inside boundaries
    isCoordInsideGrid(coord: Coord): boolean {
        if ((coord.x >= 0 && coord.x < this.col_count) &&
        (coord.y >= 0 && coord.y < this.row_count)) {
            return true
        }
        return false
    }

    // Set matrix cell
    set(cell: Cell) {
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix.set([cell.coord.x, cell.coord.y], cell.val)
        } else {
            throw('Coordinate out of bounds.')
        }
    }

    // Get matrix cell value
    get(coord: Coord) {
        return this.matrix.get([coord.x, coord.y])
    }

    // Add a vector to the grid
    addVector(vector: Vector) {
        this.vectors.push(vector)
        vector.cells.forEach((cell) => {
            this.set(cell)
        })
    }

    // Look for colliding cells
    collisionCheck(vector: Vector) {
        const intersect: Coord[][] = []
        this.vectors.forEach((coord, index) => {
            const temp = _.intersection(coord.indices , vector.indices)
            if (temp.length > 0) {
                intersect.push(temp)
                console.log('Intersect with vector: ' + index)
            }
        })
        console.log(intersect)
        return intersect
    }

    // Two point area selection
    submatrix(A: Coord, B: Coord) {
        if (!this.isCoordInsideGrid(A) || !this.isCoordInsideGrid(B)) {
            throw('Coordinates outside of bounds.')
        }
        const minX: number = math.min(A.x, B.x)
        const maxX: number = math.max(A.x, B.x)
        const minY: number = math.min(A.y, B.y)
        const maxY: number = math.max(A.y, B.y)
        const selection = []
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                selection.push([x, y])
            }
        }
        console.log(`X: [${minX}, ${maxX}] - Y: [${minY}, ${maxY}]`)
        return selection
    }

    // Coordinates to grid index
    getIndexFromCoord(coord: number[]): number {
        return coord[1] * this.col_count + coord[0]
    }

    getCoordFromIndex(index: number): number[] {
        const x = index % this.col_count
        const y = Math.floor(index / this.col_count)
        return [x, y]
    }

    display() {
        console.log(this.matrix.valueOf())
    }

    exportJSON() {
        return {
            matrix: this.matrix.toJSON(),
            vectors: this.vectors
        }
    }

    // Static functions
    static loadMatrix(matrix: math.Matrix): Grid {
        const cols = matrix.size()[0]
        const rows = matrix.size()[1]
        return new Grid(cols, rows, matrix)
    }
}