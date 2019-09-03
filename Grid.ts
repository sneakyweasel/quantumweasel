// GRID CLASS
import * as math from 'mathjs'
import * as _ from 'lodash'
import Cell from './Cell'
import Coord from './Coord'
import Cluster from './Cluster'

export default class Grid {
    col_count: number
    row_count: number
    matrix: math.Matrix
    clusters: Cluster[]

    constructor(col_count: number, row_count: number, matrix?: math.Matrix) {
        this.col_count = col_count
        this.row_count = row_count
        if (matrix) {
            this.matrix = matrix
        } else {
            this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse")
        }
        this.clusters = []
    }

    // Test if coord is inside boundaries
    isCoordInsideGrid(coord: Coord): boolean {
        return (coord.x >= 0 && coord.x < this.col_count) &&
        (coord.y >= 0 && coord.y < this.row_count)
    }

    // Set matrix cell
    set(cell: Cell) {
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix.set([cell.coord.x, cell.coord.y], cell.value)
        } else {
            throw(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
        }
    }

    // Get matrix cell value
    get(coord: Coord) {
        return this.matrix.get([coord.x, coord.y])
    }

    // Add a vector to the grid
    addCluster(cluster: Cluster) {
        this.clusters.push(cluster)
        cluster.cells.forEach((cell: Cell) => {
            this.set(cell)
        })
    }

    // Look for colliding cells
    collisionCheck(cluster: Cluster) {
        const intersect: Coord[][] = []
        this.clusters.forEach((coord, index) => {
            const temp = _.intersection(coord.indices , cluster.indices)
            if (temp.length > 0) {
                intersect.push(temp)
                console.log('Intersect with blob: ' + index)
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
    getIndexFromCoord(coord: Coord): number {
        return coord.x * this.col_count + coord.y
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
            clusters: this.clusters
        }
    }

    // Static functions
    // Javascript value unpacking
    static loadMatrix(matrix: math.Matrix): Grid {
        const cols = matrix.size()[0]
        const rows = matrix.size()[1]
        return new Grid(cols, rows, matrix)
    }
}