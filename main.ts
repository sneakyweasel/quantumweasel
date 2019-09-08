// import * as math from 'mathjs'
// import Cluster from './Cluster'
import Coord from './Coord'
import Element from './Element'
import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Level from './Level'
import Frame from './Frame'

// LOAD LEVEL
const grid = new Grid(8, 8)
const laser1 = new Cell(new Coord(2, 2), Element.laser(), 90, false)
const laser2 = new Cell(new Coord(3, 3), Element.laser(), 90, false)
const mirror1 = new Cell(new Coord(3, 6), Element.mirror(), 0, false)
const mirror2 = new Cell(new Coord(2, 5), Element.mirror(), 0, false)
const detector1 = new Cell(new Coord(2, 7), Element.detector(), 0, false)
const detector2 = new Cell(new Coord(3, 7), Element.detector(), 0, false)
const goal1 = new Goal(detector1, 100)
const goal2 = new Goal(detector2, 100)
const hint = new Hint(detector1.coord, "WEASEL DESTROY LHC FAST PLZ !!!1!1")
grid.set(laser1)
grid.set(laser2)
grid.set(mirror1)
grid.set(mirror2)
grid.set(detector1)
grid.set(detector2)

const level = new Level(
    0,
    "Weasel Wizardry",
    "Dev",
    "Debugging level",
    grid,
    [goal1, goal2],
    [hint]
)
console.log(level.toString())
console.log("\n\n")

// Start simulation
let frame = new Frame(level)
frame.display()

// Compute frames
// for (let i = 0; i < 5; i++) {
for (let i = 0; i < 5; i++) {
    frame = frame.next()
    frame.minimalDisplay()
}
