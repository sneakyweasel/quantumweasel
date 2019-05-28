import * as math from 'mathjs'
import * as _ from 'lodash'
import { Tensor } from './Tensor'

// Moving directions. We allow only four of them:
export const directions = ['>', '^', '<', 'v']

export function directionToAngle(direction: string): number {
    switch (direction) {
        case ">": return 0
        case "^": return 90
        case "<": return 180
        case "v": return 270
        default: throw new Error('Direction not % 90...')
    }
}

export function angleToDirection(angle: number): string {
    switch (angle) {
        case   0: return ">"
        case  90: return "^"
        case 180: return "<"
        case 270: return "v"
        default: throw new Error('Direction not % 90...')
    }
}

// Moved to tensor library
export const identity = Tensor.fill(directions, math.complex(1, 0)).matrix
export const zero = Tensor.fill(directions, math.complex(0, 0)).matrix

// Reflection direction: reflecting from point
export function pointReflectionDirection(direction: string) {
    const incidentAngle = directionToAngle(direction)
    const reflectedAngle = (incidentAngle + 180) % 360
    return angleToDirection(reflectedAngle)
}

// Reflection direction basing on plane's rotation (- / | \)
export function planeReflectionDirection(direction: string, rotation: number) {
    const mirrorPlaneAngle = rotation * 45
    const incidentAngle = directionToAngle(direction)
    const reflectedAngle = (2 * mirrorPlaneAngle - incidentAngle + 360) % 360
    return angleToDirection(reflectedAngle)
}

// export const cube = Tensor.fromObject(
//     _.reduce(directions, (acc, dirFrom) => {
//         const dirTo = pointReflectionDirection(dirFrom)
//         acc[dirFrom] = {}
//         acc[dirFrom][dirTo] = math.complex(1, 0)
//         return acc
//     }, {})
// )

// export const mirror = _.range(4).map((rotation) => {
//     return Tensor.fromObject(
//         _.reduce(directions, (acc, dirFrom) => {
//             const dirTo = planeReflectionDirection(dirFrom, rotation)
//             acc[dirFrom] = {}
//             if (dirFrom !== dirTo) {
//                 acc[dirFrom][dirTo] = math.complex(1, 0)
//             }
//             return acc
//         }, {})
//     )
// })

// export const mirrorCoated = _.range(8).map((rotation) => {
//     return Tensor.fromObject(
//         _.reduce(directions, (acc, dirFrom, iFrom) => {
//             const dirTo = planeReflectionDirection(dirFrom, rotation)
//             const sign = (-rotation / 2 + iFrom + 8) % 4 < 1.75 ? -1 : 1
//             acc[dirFrom] = {}
//             if (dirFrom !== dirTo) {
//                 acc[dirFrom][dirTo] = math.complex(sign, 0)
//             }
//             return acc
//         }, {})
//     )
// })

// export const diode = _.range(4).map((rotation) => {
//     return Tensor.fromObject(
//         _.reduce(directions, (acc, dirFrom) => {
//             acc[dirFrom] = {}
//             if (dirFrom === directions[rotation]) {
//                 acc[dirFrom][dirFrom] = math.complex(1, 0)
//             }
//             return acc
//         }, {})
//     )
// })

// export const absorbOneDirReflectOther = _.range(4).map((rotation) => {
//     return Tensor.fromObject(
//         _.reduce(directions, (acc, dirFrom, iFrom) => {
//             const dirTo = pointReflectionDirection(dirFrom)
//             acc[dirFrom] = {}
//             if (rotation !== iFrom) {
//                 acc[dirFrom][dirTo] = math.complex(1, 0)
//             }
//             return acc
//         }, {})
//     )
// })