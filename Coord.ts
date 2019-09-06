// COORDINATES CLASS
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
    left()   { return new Coord(this.x - 1, this.y) }
    right()  { return new Coord(this.x + 1, this.y) }
    top()    { return new Coord(this.x, this.y - 1) }
    bottom() { return new Coord(this.x, this.y + 1) }

    adjacent(): Coord[] {
        const left   = new Coord(this.x - 1, this.y)
        const right  = new Coord(this.x + 1, this.y)
        const top    = new Coord(this.x, this.y - 1)
        const bottom = new Coord(this.x, this.y + 1)
        return [left, right, top, bottom]
    }

    // Using deep compare from lodash: https://stackoverflow.com/questions/25171143/
    isAdjacent(coord: Coord): boolean {
        return (_.findIndex(this.adjacent(), (i) => { return _.isEqual(i.toArray(), coord.toArray()) }) > -1)
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
        return JSON.stringify(this)
    }

}