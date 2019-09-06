// CELL CLASS
// FIXME: enum would be nicer for rotation
// TODO: Figure out if rotation should be an element property?

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
        rotation: number = 0,
        frozen: boolean = false
    ) {
        super(coord.x, coord.y)
        // FIXME: Figure out the good way to have class inheritance
        this.coord = coord
        this.element = element
        this.rotation = rotation
        this.frozen = frozen
    }

    // Rotate cell
    rotate() {
        this.rotation = (this.rotation + 1) % 3
    }

    // Override toString() method
    toString() {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}}`
    }

    // Display in console
    display() {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`)
    }

    // A blank cell with no element
    static blank(coord: Coord): Cell {
        return new Cell(coord, Element.blank(), 0, false)
    }

    // A blank cell with no element
    static mirror(coord: Coord, frozen?: boolean, rotation?: number): Cell {
        return new Cell(coord, Element.mirror(), rotation, frozen)
    }
}
