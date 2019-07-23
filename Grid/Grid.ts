// GRID CLASS
// TODO: collision detection
import * as math from 'mathjs'
import Coord from './Coord'
import Vector from './Vector'

export default class Grid {
    col_count: number
    row_count: number
    matrix: math.Matrix
    vectors: Vector[]

    constructor(col_count: number, row_count: number) {
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
        this.matrix.forEach((_value, index) => {
            console.log('value:', _value, 'index:', index)
            // let coord =
            // if (vec.indices.includes(coord)) {
            // }
        })
    }

    crop(A: Coord, B: Coord) {
        const coord = new Coord(A.x - B.x, A.y - B.y)
        return this.matrix.subset(coord.toArray())
    }

    display() {
        console.log(this.matrix.valueOf())
    }
}