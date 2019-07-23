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
rowvec.display()

// Create col vector
const col = []
for (let y = 0; y < 3; y++) {
    col.push(new Scalar(new Coord(y, 5), math.randomInt(1, 9)))
}
const colvec = new Vector(col)
rowvec.display()

// Create new vector from array
const newvec = Vector.fromArray(4, 4, [3, 3, 3], false)
grid.addVector(newvec)

grid.addVector(rowvec)
grid.addVector(colvec)
grid.display()
grid.collisionCheck(rowvec)