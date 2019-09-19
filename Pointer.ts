// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
import Coord from "./Coord"

export default class Pointer {
    coord: Coord
    direction: number
    intensity: number
    path: Coord[]

    constructor(coord: Coord, direction: number, intensity: number = 1, path: Coord[] = []) {
        this.coord = coord
        this.direction = direction
        this.intensity = intensity
        this.path = path
    }

    // Check is a particle has any intensity
    get alive(): Boolean {
        return this.intensity > 0
    }

    // Compute next simulation step
    next(repeat: number = 1): Pointer {
        // Moving CW in increment of 90°
        for (let i = 0; i < repeat; i++) {
            switch (this.direction % 360) {
                case 0:
                    this.path.push(this.coord.top)
                    break
                case 90:
                    this.path.push(this.coord.right)
                    break
                case 180:
                    this.path.push(this.coord.bottom)
                    break
                case 270:
                    this.path.push(this.coord.left)
                    break
                default:
                    throw Error(`Something went wrong with pointers and direction.`)
            }
        }
        // Update coord with latest computed path coordinates
        this.coord = this.path[this.path.length - 1]
        return this
    }

    // Compute next simulation step
    previous(): Pointer {
        this.path.pop()
        return this
    }

    // Override method to display nicely
    toString(): string {
        return `#Pointer @ ${this.coord.toString()} moving ${this.direction}° with ${this.intensity * 100}% intensity. PATH: ${this.path.map((coord) => JSON.stringify(coord))}`
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