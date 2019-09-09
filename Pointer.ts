// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
import Coord from "./Coord"
import * as math from "mathjs"

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

    // Rotation matrix
    // FIXME: Find the appropriate type
    // https://en.wikipedia.org/wiki/Rotations_and_reflections_in_two_dimensions
    rotate(theta: number) {
        const deg = math.unit(theta, 'deg')
        const rotMatrix = math.matrix([
            [math.cos(deg), -math.sin(deg)],
            [math.sin(deg), math.cos(deg)]
        ])
        const result = math.multiply(this.coord.toArray(), rotMatrix)
        console.log(result.toString())
    }

    // Reflection matrix
    // FIXME: Find the appropriate type
    reflect(theta: number) {
        const previous = this.previous()
        const deg2 = math.unit(theta * 2, 'deg')
        const refMatrix = math.matrix([
            [math.cos(deg2), math.sin(deg2)],
            [math.sin(deg2), -math.cos(deg2)]
        ])
        const result = math.multiply(previous.coord.toArray(), refMatrix)
        console.log(result.toString())
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