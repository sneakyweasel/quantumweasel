// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
import Coord from "./Coord"
// import * as math from "mathjs"

export default class Pointer {
    coord: Coord
    direction: number
    intensity: number

    constructor(coord: Coord, direction: number, intensity: number) {
        this.coord = coord
        this.direction = direction
        this.intensity = intensity
    }

    // Compute next simulation step
    previous(direction: number = this.direction, intensity: number = this.intensity): Pointer {
        // Moving CW in increment of 90°
        switch (this.direction) {
            case 0:
                return new Pointer(this.coord.bottom(), direction, intensity)
            case 90:
                return new Pointer(this.coord.left(), direction, intensity)
            case 180:
                return new Pointer(this.coord.top(), direction, intensity)
            case 270:
                return new Pointer(this.coord.right(), direction, intensity)
            default:
                throw Error(`Something went wrong with pointers and direction.`)
        }
    }

    // Compute next simulation step
    next(direction: number = this.direction, intensity: number = this.intensity): Pointer {
        // Moving CW in increment of 90°
        switch (this.direction) {
            case 0:
                return new Pointer(this.coord.top(), direction, intensity)
            case 90:
                return new Pointer(this.coord.right(), direction, intensity)
            case 180:
                return new Pointer(this.coord.bottom(), direction, intensity)
            case 270:
                return new Pointer(this.coord.left(), direction, intensity)
            default:
                throw Error(`Something went wrong with pointers and direction.`)
        }
    }

    // Override method to display nicely
    toString(): string {
        return `#Pointer @ ${this.coord.toString()} moving ${this.direction}° with ${this.intensity * 100}% intensity.`
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