// COORDINATES CLASS
// Coord is a [x, y, z?] convenient way to deal with coordinates.
// - Adjacency: list of adjacent cells and adjacency checking.

export default class Coord {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    // Adjacent cells
    left()   { return new Coord(this.x - 1, this.y) }
    right()  { return new Coord(this.x + 1, this.y) }
    top()    { return new Coord(this.x, this.y - 1) }
    bottom() { return new Coord(this.x, this.y + 1) }

    adjacent(): Coord[] {
        const left  = new Coord(this.x - 1, this.y)
        const right = new Coord(this.x + 1, this.y)
        const up = new Coord(this.x, this.y - 1)
        const down = new Coord(this.x, this.y + 1)
        return [left, right, up, down]
    }

    isAdjacent(coord: Coord): boolean {
        if (this.adjacent().indexOf(coord) === -1) {
            return false
        } else {
            return true
        }
    }

    toArray(): number[] {
        return [this.x, this.y]
    }

    display() {
        console.log(`Coords: [${this.x}, ${this.y}]`)
    }
}