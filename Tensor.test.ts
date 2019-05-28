import { Tensor } from './Tensor'
import * as math from 'mathjs'
import * as _ from 'lodash'

describe('Tensor', () => {
  it('should create tensors from objects', () => {
    const obj = {
      A: {
        A: { re: 1, im: 0 },
        B: { re: 2, im: 3 },
        C: { re: 0, im: 0 }
      },
      B: {
        A: { re: 0, im: 0 },
        B: { re: -1, im: 0 },
        C: { re: 2, im: 3 }
      }
    }
    const t = Tensor.fromObject(obj)
    expect(t instanceof Tensor).toBe(true)
    expect(t.matrix.toString()).toEqual("[[1, 2 + 3i, 0], [0, -1, 2 + 3i]]")
  })

  // it('should remove zeros from a dense matrix', () => {
  //   const obj = {
  //     A: {
  //       A: { re: 1, im: 0 },
  //       B: { re: 2, im: 3 },
  //       C: { re: 0, im: 0 }
  //     },
  //     B: {
  //       A: { re: 0, im: 0 },
  //       B: { re: -1, im: 0 },
  //       C: { re: 2, im: 3 }
  //     }
  //   }
  //   const t = Tensor.fromObject(obj)
  //   const filtered = t.remove_zeros()
  //   expect(filtered instanceof Tensor).toBe(true)
  //   expect(filtered.matrix.toString()).toEqual("[[1, 2 + 3i, 0], [0, -1, 2 + 3i]]")
  // })

  xit('should create tensors from matrices', () => {
    const obj = [[math.complex(1, -1)]]
    const t = new Tensor(obj)
    expect(t instanceof Tensor).toBe(true)
    expect(t.matrix.toString()).toEqual("[[1 - i]]")
  })
})

describe('Tensor.product', () => {
  it('should multiply sparse matrices', () => {
    const a = new Tensor([
      [math.complex(1, 0), math.complex(2, 3)],
      [math.complex(-1, 0), math.complex(2, 3)]
    ])
    const b = new Tensor([
      [math.complex(1, 0), math.complex(2, 3)],
      [math.complex(-1, 0), math.complex(2, 3)]
    ])
    const result = new Tensor([
      [math.complex(1, 0), math.complex(2, 3), math.complex(2, 3), math.complex(-5, 12)],
      [math.complex(-1, 0), math.complex(2, 3), math.complex(-2, -3), math.complex(-5, 12)],
      [math.complex(-1, 0), math.complex(-2, -3), math.complex(2, 3), math.complex(-5, 12)],
      [math.complex(1, 0), math.complex(-2, -3), math.complex(-2, -3), math.complex(-5, 12)]
    ])
    expect(Tensor.product(a.matrix, b.matrix)).toEqual(result)
    expect(a.product(b.matrix)).toEqual(result)
  })

  describe('Tensor.byConstant', () => {
    xit('should multiply matrix by constant', () => {
      const factor = math.complex(1, 1)
      const t = new Tensor([
        [math.complex(1, 0), math.complex(2, 3), math.complex(0, 0)],
        [math.complex(0, 0), math.complex(-1, 0), math.complex(2, 3)]
      ])
      const product = new Tensor([
        [math.complex(1, 1), math.complex(-1, 5), math.complex(0, 0)],
        [math.complex(0, 0), math.complex(-1, -1), math.complex(-1, 5)]
      ])
      expect(Tensor.by_constant(t.matrix, factor)).toEqual(product)
      expect(t.by_constant(factor)).toEqual(product)
    })
  })

  describe('Tensor.sum', () => {
    xit('should add sparse matrices', () => {
      const a = new Tensor([
        [math.complex(1, 0), math.complex(2, 3), math.complex(0, 0)],
        [math.complex(0, 0), math.complex(-1, 0), math.complex(2, 3)],
        [math.complex(0, 0), math.complex(0, 0), math.complex(0, 0)]
      ])
      const b = new Tensor([
        [math.complex(0, 0), math.complex(0, 0), math.complex(0, 0)],
        [math.complex(1, 0), math.complex(2, 3), math.complex(0, 0)],
        [math.complex(0, 0), math.complex(-1, 0), math.complex(0, 0)]
      ])
      const sum = new Tensor([
        [math.complex(1, 0), math.complex(2, 3), math.complex(0, 0)],
        [math.complex(1, 0), math.complex(1, 3), math.complex(2, 3)],
        [math.complex(0, 0), math.complex(-1, 0), math.complex(0, 0)]
      ])
      expect(Tensor.add(a.matrix, b.matrix)).toEqual(sum.matrix)
      expect(a.add(b.matrix)).toEqual(sum.matrix)
    })
  })
})

describe('Tensor.fill', () => {
  xit('should fill matrix with a value', () => {
    const value = math.complex(1, -1)
    const keys = ['A', 'B', 'C']
    const filled = new Tensor([
      [value, math.complex(0, 0), math.complex(0, 0)],
      [math.complex(0, 0), value, math.complex(0, 0)],
      [math.complex(0, 0), math.complex(0, 0), value]
    ])
    expect(Tensor.fill(keys, value)).toEqual(filled)
  })
})
