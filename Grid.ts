import * as math from 'mathjs'

// COORDINATES CLASS
// Rewrite with math.index vector definition
export class Coord {
    x: number
    y: number
    val: number[]
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.val = [x, y]
    }
    adjacent(): Coord[] {
        const left  = new Coord(this.x - 1, this.y)
        const right = new Coord(this.x + 1, this.y)
        const up = new Coord(this.x, this.y - 1)
        const down = new Coord(this.x, this.y + 1)
        return [left, right, up, down]
    }
    isAdjacent(coord: Coord): boolean {
        return this.adjacent().includes(coord)
    }
}

// SCALAR CLASS
// Matrix tile class with position and value
export class Scalar {
    coord: Coord
    val: number

    constructor(coord: Coord, val: number) {
        this.coord = coord
        this.val = val
    }
}

// VECTOR CLASS
export class Vector {
    val: Scalar[]
    indices: Coord[]

    // Allow constructor with origin coord, number array and direction
    constructor(val: Scalar[]) {
        this.val = val
        val.forEach((elem) => {
            this.indices.push(elem.coord)
        })
    }
}

// OPERATOR CLASS
// Linear operators between two values
export class Operator {
    val: Scalar[][]
    col_count: number
    row_count: number

    constructor(val: Scalar[][]) {
        this.val = val
    }
}

// GRID CLASS
// TODO: collision detection
export class Grid {
    col_count: number
    row_count: number
    matrix: math.Matrix
    vectors: Vector[]
    operators: Operator[]

    constructor(col_count: number, row_count: number) {
        this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse")
    }

    set(coord: Coord, value: number): math.Matrix {
        return this.matrix.set(coord.val, value)
    }

    get(coord: Coord) {
        return this.matrix.get(coord.val)
    }

    addVector(vec: Vector) {
        this.vectors.push(vec)
        vec.val.forEach((elem) => {
            this.set(elem.coord, elem.val)
        })
    }

    collisionCheck(vec: Vector) {
        this.matrix.forEach((_value, index as: number[]) => {
            let coord = new Coord(index[0], index[1])
            if (vec.indices.includes(coord)) {
                
            }
            console.log('value:', value, 'index:', index)
          }) 
    }

    crop(A: Coord, B: Coord) {
        const coord = new Coord(A.x - B.x, A.y - B.y)
        return this.matrix.subset(coord.val)
    }

    display() {
        console.log(this.matrix.valueOf())
    }
}

// Init grid
const grid = new Grid(8, 8)

// Create row vector
const row = []
const rangeX = [1, 5]
for (let x = rangeX[0]; x < rangeX[1]; x++) {
    row.push(new Scalar(new Coord(2, x), math.randomInt(1, 9)))
}
const rowvec = new Vector(row)

// Create col vector
const col = []
for (let y = 0; y < 3; y++) {
    col.push(new Scalar(new Coord(y, 5), math.randomInt(1, 9)))
}
const colvec = new Vector(col)

grid.addVector(rowvec)
grid.addVector(colvec)
grid.display()