import * as math from "mathjs"
import { Tensor } from './tensor'

export const TAU = math.tau

export const polarizations = ['-', '|']

export const identity = Tensor.fill(polarizations, math.complex(1, 0)).matrix
export const zero = Tensor.fill(polarizations, math.complex(0, 0)).matrix

export const source = Tensor.fromObject({
    '-': { '-': math.complex(1, 0) },
})

export const reflectPhaseFromLighter = Tensor.fromObject({
    '-': { '-': math.complex(-1, 0) },
    '|': { '|': math.complex( 1, 0) }
})

export const reflectPhaseFromDenser = Tensor.fromObject({
    '-': { '-': math.complex( 1, 0) },
    '|': { '|': math.complex(-1, 0) }
})

export const reflectPhaseFromDenserTensor = new Tensor([
    [ math.complex(  1, 0) ],
    [ math.complex( -1, 0) ]
])

/**
 * Creates polarization rotation matrix for given angle alpha.
 * Sample usage: polarization twister.
 */
// TODO check the sign of rotation
// TODO tests
export const rotation = (alpha: number) => Tensor.fromObject({
    '-': {
        '-': math.complex(math.cos(alpha), 0),
        '|': math.complex(math.sin(alpha), 0)
    },
    '|': {
        '-': math.complex(-math.sin(alpha), 0),
        '|': math.complex( math.cos(alpha), 0)
    }
})

/**
 * Creates polarization projection matrix for given angle alpha.
 * Sample usage: polarizer.
 */
// TODO tests
export const projection = (alpha: number) => Tensor.fromObject({
    '-': {
        '-': math.complex( math.cos(alpha) * math.cos(alpha), 0),
        '|': math.complex( math.cos(alpha) * math.sin(alpha), 0)
    },
    '|': {
        '-': math.complex( math.cos(alpha) * math.sin(alpha), 0),
        '|': math.complex( math.sin(alpha) * math.sin(alpha), 0)
    }
})

// note to myself:
// TAU/2 is symmetry
// TAU/4 is rotation to the perpendicular coordinates

// one gets shifted, second stays the same
// TODO better description
// TODO tests
export const phaseShift = (alpha: number, phi: number) => (
    Tensor.add(
        Tensor.by_constant(
            projection(alpha).matrix, math.complex( math.cos(phi), math.sin(phi) )
        ).matrix,
        projection(alpha + TAU / 4).matrix
    )
)

// TODO for the three functions above - invent something to purge almost-zero entries?

// ones below are NOT polarization-dependent,
// but it might be simpler to keep them there
// or maybe use just tensor.byConstant?

// export const globalPhase = (phi: number) => Tensor.fill(
//     polarizations, math.complex(math.cos(phi), math.sin(phi))
// )

// export const globalAbsorption = (transmission: number) => Tensor.fill(
//     polarizations, math.complex( math.sqrt(transmission), 0)
// )