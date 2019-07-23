// COORDINATES CLASS
// Rewrite with math.index vector definition
export default class Coord {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
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
    swap() {
        const saveY = this.y
        this.y = this.x
        this.x = saveY
    }
    toArray(): number[] {
        return [this.x, this.y]
    }
}