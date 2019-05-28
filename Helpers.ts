// import * as math from 'mathjs'
import * as _ from 'lodash'

// const obj = {
//     A: {
//       A: { re: 1, im: 0 },
//       B: { re: 2, im: 3 }
//     },
//     B: {
//       B: { re: -1, im: 0 },
//       C: { re: 2, im: 3 }
//     }
//   }

export function getSparseKeys(obj: {}): string[][] {

    const map = new Map(undefined)
    for (const [key, value] of _.toPairs(obj)) {
        map.set(key, new Map(_.toPairs(value)))
    }

    // List of first keys
    // const column_keys = [...map.keys()]
    const column_keys = _.sortedUniq(Object.keys(map))

    // List of second keys
    let row_ids = []
    const column_ids = []
    for (const cid of column_keys) {
        const rows = _.toPairs(map.get(cid))
        column_ids.push(cid)
        for (const rid of rows) {
            row_ids.push(rid[0])
        }
    }
    row_ids = _.sortedUniq(row_ids)

    console.log(`matrix size m*n: ${column_ids} x ${row_ids}`)
    // console.log(`matrix size m*n: ${x} x ${y}`)
    return [column_ids, row_ids]
}

export function getSparseSize(obj: {}): number[] {
    const keys = getSparseKeys(obj)
    return [keys[0].length, keys[1].length]
}

export function getPos(keys: string[]) {
    const col_min = keys[0].charCodeAt(0)
    const col_max = keys[1].charCodeAt(0)
    return col_max - col_min
}
