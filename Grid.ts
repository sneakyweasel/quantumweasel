// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
import * as _ from 'lodash'
import Coord from './Coord'
import Cell from './Cell'
import Element from './Element'
import Pointer from './Pointer'
import Cluster from './Cluster'

export default class Grid {
    cols: number
    rows: number
    matrix: Cell[][]
    clusters: Cluster[]

    constructor(
        rows: number,
        cols: number,
        matrix?: Cell[][]
    ) {
        this.rows = rows
        this.cols = cols
        this.clusters = []

        // If matrix specified extract cells
        if (matrix) {
            this.matrix = matrix
        } else {
            // FIXME: Kinda ugly
            // Else create blank cells
            this.matrix = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(0))
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    this.set(new Cell(new Coord(y, x), Element.fromName('void')))
                }
            }
        }
    }

    // Cells getters
    get cells(): Cell[] { return [].concat.apply([], this.matrix) }
    get lasers(): Cell[] { return this.filteredBy("laser") }
    get mirrors(): Cell[] { return this.filteredBy("mirror") }
    get mines(): Cell[] { return this.filteredBy("mine") }
    get detectors(): Cell[] { return this.filteredBy("detector") }
    get rocks(): Cell[] { return this.filteredBy("rock") }
    get absorbers(): Cell[] { return this.filteredBy("absorber") }
    get beamsplitters(): Cell[] { return this.filteredBy("beamsplitter") }
    get phaseincs(): Cell[] { return this.filteredBy("phaseinc") }
    get phasedecs(): Cell[] { return this.filteredBy("phasedec") }
    get void(): Cell[] { return this.filteredBy("void") }

    // Select cells by type
    filteredBy(name: string): Cell[] {
        return this.cells.filter((cell) => {
            return cell.element.name === name
        })
    }

    // Test if coord is inside boundaries
    includes(coord: Coord): boolean {
        return (coord.y >= 0 && coord.y < this.rows) && (coord.x >= 0 && coord.x < this.cols)
    }

    // Set one cell
    // throw new RangeError(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
    set(cell: Cell): boolean {
        if (this.includes(cell.coord)) {
            this.matrix[cell.coord.y][cell.coord.x] = cell
            return true
        } else {
            // console.error(`Coordinate out of bounds. ${cell.coord.toString()}`)
            return false
        }
    }

    // Set many cells
    setMany(...cells: Cell[]): boolean {
        let errorToggle = true
        cells.forEach((cell: Cell) => {
            if (!this.includes(cell.coord)) {
                errorToggle = false
            }
        })
        cells.forEach((cell) => {
            this.set(cell)
        })
        return errorToggle
    }

    // Get one cell
    get(coord: Coord): Cell {
        return this.matrix[coord.y][coord.x]
    }

    // Get many cells
    getMany(...coords: Coord[]): Cell[] {
        return coords.map((coord) => {
            return this.get(coord)
        })
    }

    // Move from a coord to another
    move(src: Coord, dst: Coord): boolean {
        const cellSrc = this.get(src)
        const cellDst = this.get(dst)
        if (!cellSrc.frozen && !cellDst.frozen) {
            this.set(new Cell(src, cellDst.element, cellDst.rotation))
            this.set(new Cell(dst, cellSrc.element, cellSrc.rotation))
            // console.log(`Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`)
            return true
        } else {
            // console.error(`Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`)
            return false
        }
    }

    // Distance to exiting grid
    distanceToEscape(pointer: Pointer): number {
        switch (pointer.direction % 360) {
            case 0:   // TOP
                return pointer.y
            case 90:  // RIGHT
                return this.cols - pointer.x - 1
            case 180: // BOTTOM
                return this.rows - pointer.y - 1
            case 270: // LEFT
                return pointer.x
            default:
                throw new Error("Something went wrong with directions...")
        }
    }

    // Basic display
    display(): void {
        console.log(this.matrix.valueOf())
    }

    // Include particle display in ascii render
    asciiRender(pointers: Pointer[] = []): string {
        let result = "##".repeat(this.cols + 1) + "\n"
        for (let y = 0; y < this.rows; y++) {
            let asciiLine = "#"
            for (let x = 0; x < this.cols; x++) {
                // Add some sort of ascii z-index
                const coord = new Coord(y, x)
                if (coord.isIncludedIn(Pointer.manyToCoords(pointers))) {
                    asciiLine += "* "
                } else {
                    const rotation = this.get(coord).rotation / 45
                    asciiLine += this.get(new Coord(y, x)).element.ascii[rotation] + " "
                }
            }
            result += asciiLine + "#\n"
        }
        result += "##".repeat(this.cols + 1)
        return result
    }

    toString(): string {
        let basic = ""
        for (let y = 0; y < this.rows; y++) {
            let asciiLine = ""
            for (let x = 0; x < this.cols; x++) {
                asciiLine += this.get(new Coord(y, x)).element.id
            }
            basic += asciiLine + "\n"
        }
        return basic
    }

    // import cells
    // {x: 2, y: 2, element: "laser", rotation: 90, frozen: true}
    importJSON(cells: Array<{ y: number, x: number, element: string, rotation: number, frozen: boolean }>): void {
        cells.forEach((cell) => {
            const coord = new Coord(cell.y, cell.x)
            const element = Element.fromName(cell.element)
            this.set(new Cell(coord, element, cell.rotation, cell.frozen))
        })
    }

    // export JSON file to save state oi the game
    exportJSON(): string {
        return JSON.stringify(this)
    }
}