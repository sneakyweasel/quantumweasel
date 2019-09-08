// CELL CLASS
// TODO: Figure out if rotation should be an element property?
// FIXME: Refactor how the cells and element work together

import Coord from "./Coord"
import Element from "./Element"
import Pointer from "./Pointer"

export default class Cell extends Coord {
    coord: Coord        // required
    element: Element    // optional
    rotation: number    // default: void
    frozen: boolean     // default: false
    pointers: Pointer[]

    constructor(
        coord: Coord,
        element: Element,
        rotation: number = 0,
        frozen: boolean = false,
        pointers: Pointer[] = []
    ) {
        super(coord.x, coord.y)
        this.coord = coord
        this.element = element
        this.rotation = rotation
        this.frozen = frozen
        this.pointers = pointers
    }

    // Rotate cell
    rotate() {
        this.rotation = (this.rotation + 1) % 3
    }

    // Override toString() method
    toString() {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}}`
    }

    // Override toString() method
    toStringwithPointers() {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}} has ${this.pointers.map((pointer) => {pointer.toString()})}`
    }

    // Display in console
    display() {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`)
    }

    // A blank cell with no element
    static void(coord: Coord, frozen?: boolean, rotation?: number): Cell {
        return new Cell(coord, Element.void(), rotation, frozen)
    }

    // A mirror cell
    static mirror(coord: Coord, frozen?: boolean, rotation?: number): Cell {
        return new Cell(coord, Element.mirror(), rotation, frozen)
    }

    // A laser cell
    static laser(coord: Coord, frozen?: boolean, rotation?: number): Cell {
        return new Cell(coord, Element.laser(), rotation, frozen)
    }
}
