import { Tensor } from './Tensor'
import * as math from 'mathjs'

describe('Tensor', () => {
  it('should create tensors from objects', () => {
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
    it('should multiply matrix by constant', () => {
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
    it('should add sparse matrices', () => {
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
      console.log(Tensor.add(a.matrix, b.matrix))
    })
  })
})

describe('Tensor.fill', () => {
  it('should fill matrix with a value', () => {
    const value  = math.complex(1, -1)
    const keys   = ['A', 'B', 'C']
    const filled = new Tensor([
      [value, math.complex(0, 0), math.complex(0, 0)],
      [math.complex(0, 0), value, math.complex(0, 0)],
      [math.complex(0, 0), math.complex(0, 0), value]
    ])
    expect(Tensor.fill(keys, value)).toEqual(filled)
  })
})
