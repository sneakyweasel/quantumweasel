import * as math from 'mathjs'
import Coord from './Coord'
import Scalar from './Scalar'
import Vector from './Vector'
import Grid from './Grid'

// Init grid
const grid = new Grid(8, 8)

// Create row vector
const row = []
const rangeX = [1, 4]
for (let x = rangeX[0]; x < rangeX[1]; x++) {
    row.push(new Scalar(new Coord(2, x), math.randomInt(1, 9)))
}
const rowvec = new Vector(row)
grid.addVector(rowvec)

// Create new vector from array
const newvec = Vector.fromArray(0, 1, [3, 3, 3], true)
grid.addVector(newvec)
grid.collisionCheck(rowvec)

// Index to coord
// const x = 3
// const y = 7
// let coord = new Coord(x, y)
// const index = grid.getIndexFromCoord(coord)
// console.log(`X: ${x} - Y: ${y} corresponds to index: ${index}`)

// Coord to index
// coord = grid.getCoordFromIndex(index)
// console.log(`Index ${index} correspond to X: ${coord.x} - Y: ${coord.y}`)

// Subgrid selection
// const cellA = new Coord(2, 6)
// const cellB = new Coord(3, 5)
// const selection = grid.select(cellA, cellB)
// selection.forEach((elem) => {
//     console.log(elem.toArray())
// })

// Display grid
grid.display()