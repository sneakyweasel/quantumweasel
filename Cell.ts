// CELL CLASS
// Basic class for the grid cells
import Coord from "./Coord"
import Element from "./Element"
import Pointer from "./Pointer"
// import Pointer from "./Pointer"

export default class Cell extends Coord {
    coord: Coord        // required
    element: Element    // optional
    rotation: number    // default: void
    frozen: boolean     // default: false

    constructor(
        coord: Coord,
        element: Element,
        rotation: number = 0,
        frozen: boolean = false,
    ) {
        super(coord.x, coord.y)
        this.coord = coord
        this.element = element
        this.rotation = rotation
        this.frozen = frozen
    }

    // Change frozen status of cell
    set freeze(_frozen: boolean) { this.frozen = true }
    set unfreeze(_frozen: boolean) { this.frozen = false }

    // Rotate cell - Correcting the javascript modulo bug for negative values: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
    // set rotate(angle: number) { this.rotation = ((this.rotation + this.element.rotationAngle) % 360 + 360) % 360 }
    rotate(angle: number) {
        if ((360 + angle) % this.element.rotationAngle !== 0) {
            throw new Error("Error in the supplied angle compared to the element rotation angle.")
        } else {
            this.rotation = ((this.rotation + angle) % 360 + 360) % 360
        }
    }

    // Fire the l4z0r5
    fire(): Pointer {
        if (this.element.name === "laser") {
          return new Pointer(this.coord, this.rotation, 1, 0)
        } else {
            throw new Error("Only lasers can fire a particle.")
        }
    }

    // DISPLAY METHODS
    // Override toString() method
    toString(): string {
        return `{#Cell${this.frozen ? " frozen " : " "}${this.element.toString()} @ ${this.coord.toString()}} rotated ${this.rotation}°`
    }
    display(): void {
        console.log(`Cell at [X: ${this.x}, Y: ${this.y}] is a ${this.frozen ? "frozen" : "unfrozen"} element of type ${this.element.name}`)
    }

    // JSON METHODS
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
