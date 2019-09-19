// COORDINATES CLASS
// Low level coordinate functions
// Coord is a [x, y, z?] convenient way to deal with coordinates.
import * as _ from 'lodash'

export default class Coord {
    x: number
    y: number

    constructor(y: number, x: number) {
        this.y = y
        this.x = x
    }

    // Conversion: coord -> uid
    id(rows: number) {
        this.y * rows + this.x
    }

    // SVG coordinate system: top-left point of cell
    pos(spacing: number) {
        const y = this.y * spacing
        const x = this.x * spacing
        return [y, x]
    }

    // Distance to exiting grid
    // Array offset corrected
    distanceToExit(direction: number = 0, rows: number, cols: number): number {
        switch (direction % 360) {
            case 0:   // TOP
                return this.y
            case 90:  // RIGHT
                return cols - this.x - 1
            case 180: // BOTTOM
                return rows - this.y - 1
            case 270: // LEFT
                return this.x
            default:
                throw new Error("Something went wrong with directions...")
        }
    }

    // SVG coordinates system: center point of cell
    centerPos(spacing: number) {
        const y = this.y * spacing + spacing / 2
        const x = this.x * spacing + spacing / 2
        return [y, x]
    }

    // Adjacent cells
    get top(): Coord { return new Coord(this.y - 1, this.x) }
    get bottom(): Coord { return new Coord(this.y + 1, this.x) }
    get left(): Coord { return new Coord(this.y, this.x - 1) }
    get right(): Coord { return new Coord(this.y, this.x + 1) }
    get adjacent(): Coord[] {
        return [this.top, this.right, this.bottom, this.left]
    }

    // Check if two coordinates are adjacent
    isAdjacent(coord: Coord): boolean {
        return coord.isIncludedIn(this.adjacent)
    }

    // Check for equality
    equal(coord: Coord): boolean {
        return this.x === coord.x && this.y === coord.y
    }

    // Test inclusion in array of coords using deep compare from lodash
    // https://stackoverflow.com/questions/25171143/
    isIncludedIn(coords: Coord[]): boolean {
        return (_.findIndex(coords, (coord) => { return this.equal(coord) }) > -1)
    }

    // override of toString method for debugging
    toString() {
        return `{#Coord [Y:${this.y}, X:${this.x}]}`
    }

    // override for deep compare
    toArray() {
        return [this.y, this.x]
    }

    // Display coordinates
    display() {
        console.log(`Coords: [Y:${this.y}, X:${this.x}] has [l,r,t,b] of: [${this.adjacent}]`)
    }

    // Export JSON
    exportJSON() {
        return {
            y: this.y,
            x: this.x
        }
    }

    // Create from array of numbers
    static fromArray(numArray: number[]): Coord {
        return new Coord(numArray[0], numArray[1])
    }

    // Conversion: uid -> coord
    static fromId(index: number, cols: number): Coord {
        const x = index % cols
        const y = Math.floor(index / cols)
        return new Coord(x, y)
    }
}