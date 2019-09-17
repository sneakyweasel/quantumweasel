// tslint:disable-next-line: no-var-requires
const keypress = require("keypress")
// tslint:disable-next-line: no-var-requires
const ROT = require("rot-js")
// tslint:disable-next-line: no-var-requires
const tty = require('tty')

// Local imports
import Coord from './Coord'
import Element from './Element'
import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Level from './Level'
import Frame from './Frame'
import Pointer from './Pointer'

// LOAD BEAMSPLITTER LEVEL
const width = 20
const height = 20
const grid = new Grid(width, height)
const laser1 = new Cell(new Coord(2, 2), Element.laser(), 90, true)
const beam1 = new Cell(new Coord(2, 5), Element.beamsplitter(), 135, false)
const mirror1 = new Cell(new Coord(0, 4), Element.mirror(), 135, false)
const detector1 = new Cell(new Coord(2, 7), Element.detector(), 0, true)
const detector2 = new Cell(new Coord(4, 5), Element.detector(), 0, true)
const goal1 = new Goal(detector1, 50)
const goal2 = new Goal(detector2, 50)
const hint = new Hint(detector1.coord, "WEASEL DESTROY LHC FAST PLZ !!!1!1")
grid.set(laser1)
grid.set(beam1)
grid.set(mirror1)
grid.set(detector1)
grid.set(detector2)

// Level information
const level = new Level(
    0,
    "Weasel Beamsplitter Wizardry",
    "Dev",
    "Debugging level",
    grid,
    [goal1, goal2],
    [hint],
    false
)

// TERMINAL STUFF
// --------------------------
// ROT display variables
const rot = new ROT.Display({ layout: "term", width, height })

// Start simulation
let frame = new Frame(level)
frameDisplay(frame)

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin)
// listen for the "keypress" event
process.stdin.on('keypress', (_ch, key) => {
  if (key && key.ctrl && key.name === 'c') {
    process.exit(0)
  }
  if (key && key.name === 'left') {
    //   Code reset and back
    frameDisplay(frame)
  }
  if (key && key.name === 'right') {
    frame = frame.next()
    frameDisplay(frame)
  }
})
if (typeof process.stdin.setRawMode === 'function') {
  process.stdin.setRawMode(true)
} else {
  tty.setRawMode(true)
}
process.stdin.resume()

// Main func
function frameDisplay(frame: Frame) {
    // frame.pointers
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            // Draw borders
            if (!i || !j || i + 1 === width || j + 1 === height) {
                rot.draw(i, j, "#", "gray", "#222")
                // Draw cells
            } else {
                const coord = new Coord(j, i)
                const rotation = frame.level.grid.get(coord).rotation / 45
                const ascii = frame.level.grid.matrix[i][j].element.ascii[rotation]
                let background = "#222"
                // Active cell - change background
                if (coord.isIncludedIn(Pointer.manyToCoords(frame.pointers))) {
                    background = "#ff00ff"
                }
                rot.draw(i, j, ascii, "#00ff00", background)
            }
        }
    }
}
