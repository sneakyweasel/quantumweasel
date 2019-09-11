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
const mirror1a = new Cell(new Coord(2, 4), Element.mirror(), 225, false)
const mirror1b = new Cell(new Coord(0, 4), Element.mirror(), 135, false)
const mirror1c = new Cell(new Coord(0, 0), Element.mirror(), 45, false)
const mirror1d = new Cell(new Coord(6, 0), Element.mirror(), 135, false)
const mirror2 = new Cell(new Coord(3, 6), Element.mirror(), 135, false)
const detector1 = new Cell(new Coord(6, 5), Element.detector(), 0, false)
const detector2 = new Cell(new Coord(6, 6), Element.detector(), 0, false)
const goal1 = new Goal(detector1, 100)
const goal2 = new Goal(detector2, 100)
const hint = new Hint(detector1.coord, "WEASEL DESTROY LHC FAST PLZ !!!1!1")
grid.set(laser1)
grid.set(laser2)
grid.set(mirror1a)
grid.set(mirror1b)
grid.set(mirror1c)
grid.set(mirror1d)
grid.set(mirror2)
grid.set(detector1)
grid.set(detector2)
// mirror1.rotate(135"|", "\\", "-", "/"
// mirror2.rotate(135)

const level = new Level(
    0,
    "Weasel Mirror Wizardry",
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
for (let i = 0; i < 25; i++) {
    if (!frame.level.completed && frame.pointers.length > 0) {
        frame = frame.next()
        frame.minimalDisplay()
    } else {
        break
    }
}
