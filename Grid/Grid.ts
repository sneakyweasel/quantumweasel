// GRID CLASS
import * as math from 'mathjs'
import * as _ from 'lodash'
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

    set(coord: number[], value: number) {
        if (this.isCoordInsideGrid(coord)) {
            this.matrix.set(coord, value)
        } else {
            throw('Coordinate out of bounds.')
        }
    }

    get(coord: number[]) {
        return this.matrix.get(coord)
    }

    addVector(vec: Vector) {
        this.vectors.push(vec)
        vec.scalars.forEach((elem) => {
            this.set(elem.coord, elem.val)
        })
    }

    isCoordInsideGrid(coord: number[]): boolean {
        const x = coord[0]
        const y = coord[1]
        if ((x >= 0 && x < this.col_count) && (y >= 0 && y < this.row_count)) {
            return true
        }
        return false
    }

    collisionCheck(vec: Vector) {
        // Look for colliding cells
        const intersect: number[][][] = []
        this.vectors.forEach((coord, index) => {
            const temp = _.intersection(coord.indices , vec.indices)
            if (temp.length > 0) {
                intersect.push(temp)
                console.log('Intersect with vector: ' + index)
            }
        })
        console.log(intersect)
        return intersect
    }

    // Two point area selection
    // TODO: Get only coords inside bounds
    submatrix(A: number[], B: number[]) {
        if (!this.isCoordInsideGrid(A) || !this.isCoordInsideGrid(B)) {
            throw('Coordinates outside of bounds.')
        }
        const minX: number = math.min(A[0], B[0])
        const maxX: number = math.max(A[0], B[0])
        const minY: number = math.min(A[1], B[1])
        const maxY: number = math.max(A[1], B[1])
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