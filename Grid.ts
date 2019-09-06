// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells

import * as math from 'mathjs'
import * as _ from 'lodash'
import Coord from './Coord'
import Cell from './Cell'
import Cluster from './Cluster'

export default class Grid {
    colCount: number
    rowCount: number
    matrix: Cell[][]
    clusters: Cluster[]

    constructor(
        colCount: number,
        rowCount: number,
        matrix?: Cell[][]
    ) {
        this.colCount = colCount
        this.rowCount = rowCount
        this.clusters = []

        // If matrix specified extract cells
        if (matrix) {
            this.matrix = matrix
        } else {
            // FIXME: Kinda ugly
            // Else create blank cells
            this.matrix = Array.from(Array(colCount), (_) => Array(rowCount).fill(0))
            for (let y = 0; y < colCount; y++) {
                for (let x = 0; x < rowCount; x++) {
                    const coord = new Coord(x, y)
                    this.matrix[x][y] = Cell.blank(coord)
                }
            }
        }
    }

    // Return all the cells of the grid
    // TODO: filter void cells
    cells(): Cell[] {
        return [].concat.apply([], this.matrix)
    }

    // Test if coord is inside boundaries
    isCoordInsideGrid(coord: Coord): boolean {
        return (coord.x >= 0 && coord.x < this.colCount) &&
            (coord.y >= 0 && coord.y < this.rowCount)
    }

    // Set matrix cell
    set(cell: Cell): void {
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix[cell.coord.y][cell.coord.x] = cell
        } else {
            // throw new RangeError(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
            console.error(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
        }
    }

    // Get matrix cell value
    get(coord: Coord): Cell {
        return this.matrix[coord.y][coord.x]
    }

    // FIXME: Find what rotation should be a property of.
    // Move from a coord to another
    move(src: Coord, dst: Coord): void {
        const cellSrc = this.get(src)
        const cellDst = this.get(dst)
        if (!cellSrc.frozen && !cellDst.frozen) {
            this.set(new Cell(src, cellDst.element, cellDst.rotation))
            this.set(new Cell(dst, cellSrc.element, cellSrc.rotation))
            console.log(`Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`)
        } else {
            console.error(`Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`)
        }
    }

    // Add a vector to the grid
    addCluster(cluster: Cluster): void {
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

    display(): void {
        console.log(this.matrix.valueOf())
    }

    asciiRender(): string {
        let result = "* ".repeat(this.colCount) + "\n"
        for (let y = 0; y < this.colCount; y++) {
            let asciiLine = ""
            for (let x = 0; x < this.rowCount; x++) {
                asciiLine += this.matrix[x][y].element.ascii + " "
            }
            result += asciiLine + "\n"
        }
        result += "* ".repeat(this.colCount)
        return result
    }

    toString(): string {
        let basic = ""
        for (let y = 0; y < this.colCount; y++) {
            let asciiLine = ""
            for (let x = 0; x < this.rowCount; x++) {
                asciiLine += this.matrix[x][y].element.id
            }
            basic += asciiLine + "\n"
        }
        return basic
    }

    // export JSON file to save state oi the game
    exportJSON(): string {
        return JSON.stringify(this)
    }
}