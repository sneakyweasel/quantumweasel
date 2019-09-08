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
const laser = new Cell(new Coord(4, 1), Element.laser(), 0, false)
const detector = new Cell(new Coord(4, 7), Element.detector(), 0, false)
const mirror = new Cell(new Coord(6, 6), Element.mirror(), 0, false)
const goal = new Goal(detector, 100)
const hint = new Hint(detector.coord, "WEASEL DESTROY LHC FAST PLZ !!!1!1")
grid.set(laser)
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

// Start simulation
let frame = new Frame(level)
frame.display()

// Compute frames
for (let i = 0; i < 5; i++) {
    frame = frame.next()
    frame.minimalDisplay()
}
