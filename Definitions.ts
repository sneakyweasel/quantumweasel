import * as math from "mathjs"
import * as _ from "lodash"

// Ket is a complex row vector
export class Bra {
    vector: math.Complex[]
    name: string

    constructor(vector: math.Complex[], name: string) {
        this.vector = vector
        this.name = name
    }

    conjugate() {
        const vector = []
        this.vector.forEach((component) => {
            vector.push(math.conj(component))
        })
    }

    toString() {
        return math.matrix(this.vector).toString()
    }
}

// Bra is a complex row vector
export class Ket {
    vector: math.Complex[]
    name: string

    constructor(vector: math.Complex[], name: string) {
        this.vector = vector
        this.name = name
    }

    conjugate() {
        const vector = []
        this.vector.forEach((component) => {
            vector.push(math.conj(component))
        })
    }

    toString() {
        return math.matrix(this.vector).toString()
    }
}

// BraKet is the inner product of a row and column complex vectors
export class BraKet {
    bra: Bra
    ket: Ket
    value: math.Complex | number

    constructor(bra: Bra, ket: Ket) {
        this.bra = bra
        this.ket = ket
        this.value = math.dot(bra.vector, ket.vector) // https://en.wikipedia.org/wiki/Frobenius_inner_product
    }

    toString() {
        return this.value.toString()
    }

    toNotation() {
        return `< ${this.bra.name} | ${this.ket.name} >`
    }
}

export class LinearOperator {
    matrix: math.Matrix | math.Complex[][]

    constructor(matrix: math.Complex[][]) {
        this.matrix = math.matrix(matrix)
    }

    by_constant(z: math.Complex): math.Matrix {
        return math.matrix(math.multiply(this.matrix, z))
    }

    multiply(vector: math.Complex[]) {
        return math.multiply(this.matrix, math.matrix(vector))
    }

    dagger(): math.Matrix {
        const transposed = math.matrix(math.transpose(this.matrix))
        return transposed.map((i) => math.conj(i))
    }

    is_hermitian() {
        return math.deepEqual(this.matrix, this.dagger())
    }
}
