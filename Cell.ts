// CELL CLASS
// Basic class for the grid cells
// TODO: Code smell with pointers
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
    rotate(angle: number = 45): void {
        this.rotation = (this.rotation + angle) % 360
    }

    // Override toString() method
    toString(): string {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}}`
    }

    // Override toString() method
    toStringwithPointers(): string {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}} has ${this.pointers.map((pointer) => { pointer.toString() })}`
    }

    // Display in console
    display(): void {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`)
    }

    // Export to JSON format
    exportCellJSON(): Object {
        return {
            x: this.coord.x,
            y: this.coord.y,
            element: this.element.name,
            rotation: this.rotation,
            frozen: this.frozen
        }
    }

    // Import from JSON
    static importJSON(params: {
        x: number,
        y: number,
        element: string,
        rotation: number,
        frozen: boolean
    }): Cell {
        const coord = new Coord(params.x, params.y)
        const element = Element.fromName(params.element)
        return new Cell(coord, element, params.rotation, params.frozen)
    }
}
