// COORDINATES CLASS
// Low level coordinate functions
// Coord is a [x, y, z?] convenient way to deal with coordinates.
// - Adjacency: list of adjacent cells and adjacency checking.

import * as _ from 'lodash'

export default class Coord {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    // Transformation from coordinate system to unique id
    id(col_count: number) {
        this.y * col_count + this.x
    }

    // SVG coordinate system: top-left point of cell
    pos(spacing: number) {
        const x = this.x * spacing
        const y = this.y * spacing
        return [x, y]
    }

    // SVG coordinates system: center point of cell
    centerPos(spacing: number) {
        const x = this.x * spacing + spacing / 2
        const y = this.y * spacing + spacing / 2
        return [x, y]
    }

    // Adjacent cells
    top()    { return new Coord(this.x - 1, this.y) }
    bottom() { return new Coord(this.x + 1, this.y) }
    left()   { return new Coord(this.x, this.y - 1) }
    right()  { return new Coord(this.x, this.y + 1) }

    adjacent(): Coord[] {
        return [this.top(), this.right(), this.bottom(), this.left()]
    }

    // Check if two coordinates are adjacent
    isAdjacent(coord: Coord): boolean {
        return coord.isIncludedIn(this.adjacent())
    }

    // Check for equality
    equal(coord: Coord): boolean {
        return _.isEqual(this, coord)
    }

    // Test inclusion in array of coords using deep compare from lodash
    // https://stackoverflow.com/questions/25171143/
    isIncludedIn(coords: Coord[]): boolean {
        return (_.findIndex(coords, (coord) => { return this.equal(coord) }) > -1)
    }

    // override of toString method for debugging
    toString() {
        return `{#Coord [${this.x}, ${this.y}]}`
    }

    // override for deep compare
    toArray() {
        return [this.x, this.y]
    }

    // Display coordinates
    display() {
        console.log(`Coords: [${this.x}, ${this.y}] has [l,r,t,b] of: [${this.adjacent()}]`)
    }

    // Export JSON
    exportJSON() {
        return {
            x: this.x,
            y: this.y
        }
    }

    // Create from array of numbers
    static fromArray(numArray: number[]): Coord {
        return new Coord(numArray[0], numArray[1])
    }
}