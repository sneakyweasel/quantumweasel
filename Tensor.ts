// CERN Weasel - Quantum computation
// sneakyweasel 2019
// https://mathjs.org/docs/reference/functions.html#matrix-functions

import * as math from "mathjs"
import * as _ from "lodash"
import { getSparseKeys } from "./Helpers"

export class Tensor {
   matrix: math.Matrix

   constructor(array: math.Complex[][] | math.Matrix) {
      this.matrix = math.matrix(array)
   }

   // Generated using sparse matrix maps of maps notation
   static fromObject(object: any): Tensor {
      const keys = getSparseKeys(object)
      const m = keys[0].length
      const n = keys[1].length
      const matrix = math.matrix(math.zeros([m, n]))

      const map = new Map(undefined)
      for (const [key, value] of _.toPairs(object)) {
         map.set(key, new Map(_.toPairs(value)))
      }
      // List of first keys
      const column_ids = _.sortedUniq([...map.keys()])

      for (let x = 0; x < column_ids.length; x++) {
         const rows = _.toPairs(map.get(column_ids[x]))
         for (let y = 0; y < rows.length; y++) {
            const complex = math.complex(rows[y][1].re, rows[y][1].im)
            matrix.set([x, y], complex)
         }
      }
      return new Tensor(matrix)
   }

   // Remove zeros and resize matrice: https://mathjs.org/docs/reference/functions/filter.html
   // remove_zeros(m: math.Matrix): Tensor {
      // function isZero(x: math.Complex) {
      //    return x === math.complex(0, 0)
      // }
      // loop rows and reconstruct matrix
      // const nb_rows = math.size(m).toString()
      // const filtered = []
      // for (let i = 0; i < 2; i++) {
      //    const row = math.row(this.matrix, i)
      //    const filtered_row = math.filter(row, isZero)
      //    if (filtered_row) {
      //       filtered.push(filtered_row)
      //    }
      // }
   //    return new Tensor([])
   // }

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

   // Identity matrix fill
   static identity(directions: string[]) {
      Tensor.fill(directions, math.complex(1, 0))
   }

   // Zero matrix fill
   static zeros(directions: string[]) {
      Tensor.fill(directions, math.complex(0, 0))
   }

   // Polarisations matrix fill
   static globalPhase = (phi: number) => Tensor.fill(
      ['-', '|'], math.complex(math.cos(phi), math.sin(phi))
   )

   // Global absorption matrix fill
   static globalAbsorption = (transmission: number) => Tensor.fill(
      ['-', '|'], math.complex(math.sqrt(transmission), 0)
   )

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