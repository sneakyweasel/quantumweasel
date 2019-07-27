// CELL CLASS

export default class Cell {
    x: number
    y: number
    coord: number[]
    val: number

    constructor(x: number, y: number, val: number) {
        this.x = x
        this.y = y
        this.coord = [x, y]
        this.val = val
    }

    id(col_count: number) {
        this.y * col_count + this.x
    }

    // Adjacent cells
    left() { return [this.x - 1, this.y] }
    right() { return [this.x + 1, this.y] }
    top() { return [this.x, this.y - 1] }
    bottom() { return [this.x, this.y + 1] }
    adjacent() {
        return [
            this.left(),
            this.right(),
            this.top(),
            this.bottom()
        ]
    }
    isAdjacent(coord: number[]) {
        return this.adjacent().includes(coord)
    }

    // SVG top left coordinates
    pos(spacing: number) {
        const x = this.x * spacing
        const y = this.y * spacing
        return [x, y]
    }

    // SVG cell center coordinates
    centerPos(spacing: number) {
        const x = this.x * spacing + spacing / 2
        const y = this.y * spacing + spacing / 2
        return [x, y]
    }
}
