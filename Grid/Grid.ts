// GRID CLASS
// TODO: collision detection
import * as math from 'mathjs'
import Coord from './Coord.js'
import Vector from './Vector.js'
import * as _ from 'lodash'

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

    set(coord: Coord, value: number) {
        if (this.isCoordInsideGrid(coord)) {
            this.matrix.set(coord.toArray(), value)
        } else {
            throw('Coordinate out of bounds.')
        }
    }

    get(coord: Coord) {
        return this.matrix.get(coord.toArray())
    }

    addVector(vec: Vector) {
        this.vectors.push(vec)
        vec.scalars.forEach((elem) => {
            this.set(elem.coord, elem.val)
        })
    }

    isCoordInsideGrid(coord: Coord) {
        if ((coord.x >= 0 && coord.x < this.col_count) &&
        (coord.y >= 0 && coord.y < this.row_count)) {
            return true
        }
        return false
    }

    collisionCheck(vec: Vector) {
        // Look for colliding cells
        const intersect: Coord[][] = []
        this.vectors.forEach((elem, index) => {
            const temp = _.intersection(elem.indices , vec.indices)
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
    submatrix(A: Coord, B: Coord): Coord[] {
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
                selection.push(new Coord(x, y))
            }
        }
        console.log(`X: [${minX}, ${maxX}] - Y: [${minY}, ${maxY}]`)
        return selection
    }

    // Coordinates to grid index
    getIndexFromCoord(coord: Coord) {
        return coord.y * this.col_count + coord.x
    }

    getCoordFromIndex(index: number): Coord {
        const x = index % this.col_count
        const y = Math.floor(index / this.col_count)
        return new Coord(x, y)
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