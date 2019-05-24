/**
 * Tensor library for sparse matrices in Typescript
 * sneakyweasel 2019 from quantumgame
 */

import * as _ from "lodash"
import * as math from "mathjs"

export default class Tensor {
   map: Map<K, V>

   constructor(map: Map<K, V>) {
      this.map = map
   }

   static fromObject(object: Map<K, V>): Tensor {
      const map = new Map(undefined)
      for (const [key, value] of _.toPairs(object)) {
         map.set(key, new Map(_.toPairs(value)))
      }
      return new Tensor(map)
   }

   static product(t1: Tensor, t2: Tensor): Tensor {
      const outerMap = new Map(undefined)

      for (const [k1, v1] of t1.map) {
         for (const [k2, v2] of t2.map) {
            const innerMap = new Map(undefined)

            for (const [i1, w1] of v1) {
               for (const [i2, w2] of v2) {
                  innerMap.set(
                     `${i1}${i2}`,
                     {
                        re: w1.re * w2.re - w1.im * w2.im,
                        im: w1.re * w2.im + w1.im * w2.re,
                     }
                  )
               }
            }

            outerMap.set(`${k1}${k2}`, innerMap)
         }
      }
      return new Tensor(outerMap)
   }

   product(t: Tensor): Tensor {
      return Tensor.product(this, t)
   }

   static byConstant(t1: Tensor, z: math.Complex): Tensor {
      return Tensor.product(t1, Tensor.fromObject(
         { A: { A: { re: z.re, im: z.im } } }
      ))
   }

   byConstant(z: math.Complex) {
      return Tensor.byConstant(this, z)
   }

   static sum(t1: Tensor, t2: Tensor) {
      const outerMap = new Map(undefined)
      const outerKeys = new Set([
         ...t1.map.keys(),
         ...t2.map.keys(),
      ])
      for (const outerKey of outerKeys) {
         const innerMap = new Map(undefined)
         const sourceMaps = _.compact([
            t1.map.get(outerKey),
            t2.map.get(outerKey)]
         )
         for (const sourceMap of sourceMaps) {
            for (const [innerKey, innerValue] of sourceMap) {
               if (innerMap.has(innerKey)) {
                  const existing = innerMap.get(innerKey)
                  innerValue.re += existing.re
                  innerValue.im += existing.im
               }
               innerMap.set(innerKey, innerValue)
            }
         }
         outerMap.set(outerKey, innerMap)
      }
      return new Tensor(outerMap)
   }

   static sumList(ts) {
      return ts.reduce((acc, t) => Tensor.sum(acc, t))
   }

   sum(t: Tensor): Tensor {
      return Tensor.sum(this, t)
   }

   static fill(keys: string[], value: number[]): Tensor {
      const outerMap = new Map(undefined)
      for (const key of keys) {
         const innerMap = new Map(undefined)
         innerMap.set(key, value)
         outerMap.set(key, innerMap)
      }
      return new Tensor(outerMap)
   }
}
