// CERN Weasel - Quantum computation
// sneakyweasel 2019
// https://mathjs.org/docs/reference/functions.html#matrix-functions

import * as math from "mathjs"

export class Tensor {
   matrix: math.Matrix

   constructor(array: math.Complex[][] | math.Matrix) {
      this.matrix = math.matrix(array)
   }

   // Kronecker product: https://mathjs.org/docs/reference/functions/kron.html
   product(m: math.Matrix): Tensor {
      return new Tensor(math.kron(this.matrix, m))
   }
   static product(m1: math.Matrix, m2: math.Matrix): Tensor {
      return new Tensor(math.kron(m1, m2))
   }

   // Multiply by scalar: https://mathjs.org/docs/reference/functions/multiply.html
   by_constant(z: math.Complex): Tensor {
      return new Tensor(math.matrix(math.multiply(this.matrix, z)))
   }
   static by_constant(m: math.Matrix, z: math.Complex): Tensor {
      return new Tensor(math.matrix(math.multiply(m, z)))
   }

   // Add: https://mathjs.org/docs/reference/functions/add.html
   add(m: math.Matrix) {
      return math.add(this.matrix, m)
   }
   static add(m1: math.Matrix, m2: math.Matrix) {
      return math.add(m1, m2)
   }

   // Fill tensor with values
   static fill(keys: string[], value: math.Complex): Tensor {
      const matrix = math.matrix(math.zeros(keys.length, "dense"))
      for (let x = 0; x < keys.length; x++) {
         for (let y = 0; y < keys.length; y++) {
            const diag = (x === y) ? value : math.complex(0, 0)
            matrix.set([x, y], diag)
         }
      }
      return new Tensor(matrix)
   }

   // Hermitian conjugation
   transpose(): math.Matrix {
      return math.matrix(math.transpose(this.matrix))
   }
   complex_conjugate(): math.Matrix {
      return this.matrix.map((i) => {
         return math.conj(i)
      })
   }
   hermitian_conjugation(): math.Matrix {
      const transposed = math.matrix(math.transpose(this.matrix))
      return transposed.map((i) => math.conj(i))
   }
}