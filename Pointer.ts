// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
import * as _ from "lodash"
import Coord from "./Coord"
import Cell from "./Cell"
import Grid from "./Grid"

export default class Pointer extends Coord {
    coord: Coord
    direction: number
    intensity: number
    phase: number
    path: Coord[]

    constructor(coord: Coord, direction: number, intensity: number = 1, phase: number = 0) {
        super(coord.y, coord.x)
        this.coord = coord
        this.direction = direction
        this.intensity = intensity
        this.phase = phase
        this.path = [coord]
    }

    // Check is a particle has any intensity
    get alive(): Boolean { return this.intensity > 0 }
    get clone(): Pointer { return _.cloneDeep(this) }

    // Pointer is on a specific cell shorthand
    on(cell: Cell): Boolean {
        return this.coord.equal(cell.coord)
    }

    // Compute next simulation step
    next(repeat: number = 1): Pointer {
        // Moving CW in increment of 90°
        for (let i = 0; i < repeat; i++) {
            switch ((this.direction) % 360) {
                case 0:
                    this.coord = this.coord.top
                    break
                case 90:
                    this.coord = this.coord.right
                    break
                case 180:
                    this.coord = this.coord.bottom
                    break
                case 270:
                    this.coord = this.coord.left
                    break
                default:
                    throw Error(`Something went wrong with pointers and direction.`)
            }
            // Update coord with latest computed path coordinates
            this.path.push(this.coord)
        }
        return this
    }

    // Compute laser path
    laserPath(grid: Grid, maxFrames: number = 100): Coord[] {
        // Make a depp clone of the pointer
        const pointers: Pointer[] = [this.clone]

        // Simulate path with a specific number of frames
        for (let i = 0; i < maxFrames; i++) {

            // Process list of pointers
            pointers.forEach((pointer) => {
                pointer.next()

                // Zero the intensity of escaping pointers
                if (!grid.includes(pointer.coord)) {
                    pointer.intensity = 0
                }

                // Absorption
                grid.absorbers.forEach((absorber: Cell) => {
                    if (pointer.on(absorber)) {
                        pointer.intensity *= absorber.element.absorption
                    }
                })

                // Reflection
                grid.mirrors.forEach((mirror: Cell) => {
                    if (pointer.on(mirror)) {
                        pointer.direction = (2 * mirror.rotation - pointer.direction + 360) % 360
                    }
                })
                grid.beamsplitters.forEach((beamsplitter: Cell) => {
                    if (pointer.on(beamsplitter)) {
                        // Dim the current pointer intensity
                        pointer.intensity /= 2
                        // Reflecting pointer (create new reflected faded pointer)
                        const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360
                        pointers.push(new Pointer(pointer.coord, direction, pointer.intensity))
                    }
                })

                // Phase shifters
                grid.phaseshifters.forEach((phaseshifter: Cell) => {
                    if (pointer.on(phaseshifter)) {
                        pointer.phase = (pointer.phase + phaseshifter.element.phase) % 1
                    }
                })
            })
        }

        // Flatten and dedupe list of pointers
        const coords: Coord[][] = []
        pointers.forEach((pointer) => {
            coords.push(pointer.path)
        } )
        return _.flatMap(coords)
    }

    // Override method to display nicely
    toString(): string {
        return `#Pointer @ ${this.coord.toString()} moving ${this.direction}° with ${this.intensity * 100}% intensity and ${this.phase} phase shift. PATH: ${this.path.map((coord) => coord.toString())}`
    }

    // Format active particle list
    static manyToString(pointers: Pointer[]) {
        let result = `${pointers.length} active particles...\n`
        pointers.forEach((pointer) => {
            result += `- ${pointer.toString()}\n`
        })
        return result
    }

    // Extract coordinates in a list
    static manyToCoords(pointers: Pointer[]): Coord[] {
        const result: Coord[] = []
        pointers.map((pointer) => {
            result.push(pointer.coord)
        })
        return result
    }
}