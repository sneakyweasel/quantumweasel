// CELL CLASS
// FIXME: enum would be nicer for rotation

import Coord from "./Coord"
import Element from "./Element"

export default class Cell extends Coord {
    coord: Coord        // required
    element: Element    // optional
    rotation: number    // default: void
    frozen: boolean     // default: false

    constructor(
        coord: Coord,
        element: Element,
        rotation: number,
        frozen: boolean
    ) {
        super(coord.x, coord.y)
        // FIXME: Figure out the good way to have class inheritance
        this.coord = coord
        this.element = element
        this.rotation = rotation
        this.frozen = frozen
    }

    // Display in console
    display() {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`)
    }

    // A blank cell with no element
    static blank(coord: Coord): Cell {
        return new Cell(coord, Element.blank(), 0, false)
    }
}
