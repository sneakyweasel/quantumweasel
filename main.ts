// import * as math from 'mathjs'
// import Cluster from './Cluster'
import Coord from './Coord'
import Element from './Element'
import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Level from './Level'

// LOAD LEVEL
const grid = new Grid(8, 8)
const source = new Cell(new Coord(4, 0), Element.laser(), 0, false)
const detector = new Cell(new Coord(4, 7), Element.detector(), 0, false)
const mirror = new Cell(new Coord(6, 6), Element.mirror(), 0, false)
const goal = new Goal(detector, 100)
const hint = new Hint(detector.coord, "WEASEL DESTROY LHC FAST PLZ !!!1!1")
grid.set(source)
grid.set(detector)
grid.set(mirror)

const level = new Level(
    0,
    "Weasel Wizardry",
    "Dev",
    "Debugging level",
    grid,
    [goal],
    [hint]
)
console.log(level.toString())
console.log("\n\n")
console.log(level.exportJSON())

// CREATE ROW VECTOR
// const row = []
// const rangeX = [1, 4]
// for (let x = rangeX[0]; x < rangeX[1]; x++) {
//     row.push(new Cell(new Coord(2, x), math.randomInt(1, 9)))
// }
// const cluster = new Cluster(row)
// grid.addCluster(cluster)
// grid.display()

// VECTOR FROM NUMBER ARRAY
// const newvec = Vector.fromArray(0, 1, [3, 3, 3], true)
// grid.addVector(newvec)
// grid.collisionCheck(rowvec)
// grid.display()

// INDEX TO COORD
// const x = 3
// const y = 7
// const coord1 = new Coord(x, y)
// const index = grid.getIndexFromCoord(coord1)
// console.log(`X: ${x} - Y: ${y} corresponds to index: ${index}`)

// COORD TO INDEX
// const coord2 = grid.getCoordFromIndex(index)
// console.log(`Index ${index} correspond to X: ${coord2.x} - Y: ${coord2.y}`)

// SUBMATRIX SELECTION
// const cellA = new Coord(2, 6)
// const cellB = new Coord(3, 5)
// const selection = grid.submatrix(cellA, cellB)
// selection.forEach((elem) => {
//     console.log(elem.toArray())
// })
// selection.toString()