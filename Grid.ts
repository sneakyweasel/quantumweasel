// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells

import * as math from 'mathjs'
import * as _ from 'lodash'
import Coord from './Coord'
import Element from './Element'
import Cell from './Cell'
import Cluster from './Cluster'

export default class Grid {
    colCount: number
    rowCount: number
    matrix: Cell[][]
    cells: Cell[]
    clusters: Cluster[]

    constructor(
        colCount: number,
        rowCount: number,
        cells: Cell[],
        matrix?: Cell[][]
    ) {
        this.colCount = colCount
        this.rowCount = rowCount
        this.cells = cells
        this.clusters = []

        // If matrix specified extract cells
        if (matrix) {
            this.matrix = matrix
        } else {
            for (let y = 0; y < colCount; y++) {
                for (let x = 0; x < rowCount; x++) {
                    const coord = new Coord(x, y)
                    const blankElement = Element.blank()
                    const cell = new Cell(coord, blankElement, 0, false)
                    this.matrix[x][y] = cell
                    this.cells.push(cell)
                }
            }
        }
    }

    // Test if coord is inside boundaries
    isCoordInsideGrid(coord: Coord): boolean {
        return (coord.x >= 0 && coord.x < this.colCount) &&
            (coord.y >= 0 && coord.y < this.rowCount)
    }

    // Set matrix cell
    set(cell: Cell) {
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix[cell.coord.y][cell.coord.x] = cell
        } else {
            throw (`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
        }
    }

    // Get matrix cell value
    get(coord: Coord): Cell {
        return this.matrix[coord.y][coord.x]
    }

    // Add a vector to the grid
    addCluster(cluster: Cluster) {
        this.clusters.push(cluster)
        cluster.cells.forEach((cell: Cell) => {
            this.set(cell)
        })
    }

    // Look for colliding cells
    // collisionCheck(cluster: Cluster) {
    //     const intersect: Coord[][] = []
    //     this.clusters.forEach((coord, index) => {
    //         const temp = _.intersection(coord.indices, cluster.indices)
    //         if (temp.length > 0) {
    //             intersect.push(temp)
    //             console.log('Intersect with blob: ' + index)
    //         }
    //     })
    //     console.log(intersect)
    //     return intersect
    // }

    // Two point area selection
    // Could be used for viewport cropping like in Vim Adventures
    submatrix(A: Coord, B: Coord): math.Matrix {
        if (!this.isCoordInsideGrid(A) || !this.isCoordInsideGrid(B)) {
            throw ('Coordinates outside of bounds.')
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
        console.log(`Size: [X: ${maxX - minX}] | Y: [${maxY - minY}]`)
        console.log(`X: [${minX}, ${maxX}] - Y: [${minY}, ${maxY}]`)
        return math.matrix(selection)
    }

    // Coordinates to grid index
    getIndexFromCoord(coord: Coord): number {
        return coord.x * this.colCount + coord.y
    }

    getCoordFromIndex(index: number): Coord {
        const x = index % this.colCount
        const y = Math.floor(index / this.colCount)
        return new Coord(x, y)
    }

    display() {
        console.log(this.matrix.valueOf())
    }

    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this)
    }
}