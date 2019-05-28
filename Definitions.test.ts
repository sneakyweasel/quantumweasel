import { Bra, Ket, BraKet, LinearOperator } from './Definitions'
import * as math from 'mathjs'
import * as _ from 'lodash'

describe('Bra', () => {
  it('should create bra from complex column vector', () => {
    const vector = [
        math.complex(1, 0),
        math.complex(3, -1),
        math.complex(0, 1)
    ]
    const bra = new Bra(vector, "A")
    expect(bra instanceof Bra).toBe(true)
    expect(bra.toString()).toEqual("[1, 3 - i, i]")
  })
})

describe('Ket', () => {
  it('should create ket from complex row vector', () => {
    const vector = [
        math.complex(1, 0),
        math.complex(3, -1),
        math.complex(0, 1)
    ]
    const ket = new Ket(vector, "A")
    expect(ket instanceof Ket).toBe(true)
    expect(ket.toString()).toEqual("[1, 3 - i, i]")
  })
})

describe('BraKet', () => {
  it('should create a braket from two complex vector', () => {
    const vector = [
        math.complex(1, 1),
        math.complex(0, -2)
    ]
    const bra = new Bra(vector, "A")
    const ket = new Ket(vector, "B")
    const braket = new BraKet(bra, ket)
    expect(braket instanceof BraKet).toBe(true)
    expect(braket.toString()).toEqual("-4 + 2i")
  })
})

describe('Linear Operator', () => {
  it('should apply a linear operator to a vector', () => {
    const matrix = [
        [math.complex(1, 0), math.complex(2, 0)],
        [math.complex(2, 0), math.complex(1, 0)]
    ]
    const vector = [
        math.complex(1, 0),
        math.complex(1, 0)
    ]
    const machine = new LinearOperator(matrix)
    const ket_in = new Ket(vector, "B")
    const ket_out = math.matrix(machine.multiply(ket_in.vector))
    expect(ket_out.toString()).toEqual("[3, 3]")
  })

  it('should detect an hermitian operator', () => {
    const matrix = [
        [math.complex(1, 0), math.complex(2, 0)],
        [math.complex(2, 0), math.complex(1, 0)]
    ]
    const machine = new LinearOperator(matrix)
    expect(machine.is_hermitian()).toEqual(true)
  })
})
