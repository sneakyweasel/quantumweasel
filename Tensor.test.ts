import { Tensor } from './Tensor'
import * as math from 'mathjs'

describe('Tensor', () => {
  it('should create tensors from objects', () => {
    const obj = {A: {A: math.complex(1, 0)}}
    const t = Tensor.fromObject(obj)
    expect(t instanceof Tensor).toBe(true)
    expect(t.map instanceof Map).toBe(true)
    expect(t.map.get('A') instanceof Map).toBe(true)
    expect(t.map.get('A').get('A')).toEqual(math.complex(1, 0))
  })

  it('should create correct internal maps from objects', () => {
    const t = Tensor.fromObject({
      A: {
        A: math.complex(1, 0),
        B: math.complex(2, 3)
      },
      B: {
        B: math.complex(-1, 0),
        C: math.complex( 2, 3)
      },
    })
    expect(t instanceof Tensor).toBe(true)
    expect(t.map instanceof Map).toBe(true)
    expect(t.map.get('B') instanceof Map).toBe(true)
    expect(t.map.get('A').get('A')).toEqual(math.complex(1, 0))
    expect(t.map.get('A').get('B')).toEqual(math.complex(2, 3))
    expect(t.map.get('B').get('B')).toEqual(math.complex(-1, 0))
    expect(t.map.get('B').get('C')).toEqual(math.complex(2, 3))
  })
})

describe('Tensor.product', () => {
  it('should multiply sparse matrices', () => {
    const first = Tensor.fromObject({
      A: {
        A: math.complex(1, 0),
        B: math.complex(2, 3)
      },
      B: {
        A: math.complex(-1, 0),
        B: math.complex(2, 3)
      }
    })
    const second = Tensor.fromObject({
      a: {
        a: math.complex(1, 0),
        b: math.complex(2, 3)
      },
      b: {
        a: math.complex(-1, 0),
        b: math.complex(2, 3)
      }
    })
    const product = Tensor.fromObject({
      Aa: {
        Aa: math.complex( 1,  0),
        Ab: math.complex( 2,  3),
        Ba: math.complex( 2,  3),
        Bb: math.complex(-5, 12)
      },
      Ab: {
        Aa: math.complex(-1,  0),
        Ab: math.complex( 2,  3),
        Ba: math.complex(-2, -3),
        Bb: math.complex(-5, 12)
      },
      Ba: {
        Aa: math.complex(-1,  0),
        Ab: math.complex(-2, -3),
        Ba: math.complex( 2,  3),
        Bb: math.complex(-5, 12)
      },
      Bb: {
        Aa: math.complex( 1,  0),
        Ab: math.complex(-2, -3),
        Ba: math.complex(-2, -3),
        Bb: math.complex(-5, 12)
      }
    })
    expect(Tensor.product(first, second)).toEqual(product)
    expect(first.product(second)).toEqual(product)
  })
})

describe('Tensor.byConstant', () => {
  it('should multiply matrix by constant', () => {
    const matrix = Tensor.fromObject({
      A: {
        A: math.complex(1, 0),
        B: math.complex(2, 3)
      },
      B: {
        B: math.complex(-1, 0),
        C: math.complex( 2, 3)
      },
    })
    const factor = math.complex(1, 1)
    const product = Tensor.fromObject({
      A: {
        A: math.complex( 1, 1),
        B: math.complex(-1, 5)
      },
      B: {
        B: math.complex(-1, -1),
        C: math.complex( 5, -1)
      },
    })
    expect(Tensor.byConstant(matrix, factor)).toEqual(product)
    expect(matrix.byConstant(factor)).toEqual(product)
  })
})

// describe('Tensor.sum', () => {
//   it('should add sparse matrices', () => {
//     const first = Tensor.fromObject({
//       A: {
//         A: {re: 1, im: 0},
//         B: {re: 2, im: 3},
//       },
//       B: {
//         B: {re: -1, im: 0},
//         C: {re: 2, im: 3},
//       },
//     })
//     const second = Tensor.fromObject({
//       B: {
//         A: {re: 1, im: 0},
//         B: {re: 2, im: 3},
//       },
//       C: {
//         B: {re: -1, im: 0},
//       },
//     })
//     const sum = Tensor.fromObject({
//       A: {
//         A: {re: 1, im: 0},
//         B: {re: 2, im: 3},
//       },
//       B: {
//         A: {re: 1, im: 0},
//         B: {re: 1, im: 3},
//         C: {re: 2, im: 3},
//       },
//       C: {
//         B: {re: -1, im: 0},
//       },
//     })
//     expect(Tensor.sum(first, second)).toEqual(sum)
//     expect(first.sum(second)).toEqual(sum)
//   })
// })

// describe('Tensor.fill', () => {
//   it('should fill matrix with a value', () => {
//     const value = {re: 1, im: 0}
//     const keys = ['A', 'B', 'C']
//     const filled = Tensor.fromObject({
//       A: {A: value},
//       B: {B: value},
//       C: {C: value},
//     })
//     expect(Tensor.fill(keys, value)).toEqual(filled)
//   })
// })
