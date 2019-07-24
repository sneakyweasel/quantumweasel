// GRID CLASS
// TODO: collision detection
import * as math from 'mathjs'
import Coord from './Coord'
import Vector from './Vector'
import * as _ from 'lodash'

export default class Grid {
    col_count: number
    row_count: number
    matrix: math.Matrix
    vectors: Vector[]

    constructor(col_count: number, row_count: number) {
        this.col_count = col_count
        this.row_count = row_count
        this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse")
        this.vectors = []
    }

    set(coord: Coord, value: number): math.Matrix {
        return this.matrix.set(coord.toArray(), value)
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

    collisionCheck(vec: Vector) {
        // Look for colliding scalars
        const intersect: Coord[][] = []
        this.vectors.forEach((elem, index) => {
            const temp = _.intersection( elem.indices , vec.indices )
            if (temp.length > 0) {
                intersect.push(temp)
                console.log('Intersect with vector: ' + index)
            }
        })
        console.log(intersect)
        return intersect
    }

    // Two point area selection
    // TODO: Forbid out of grid range values
    select(A: Coord, B: Coord): Coord[] {
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
}