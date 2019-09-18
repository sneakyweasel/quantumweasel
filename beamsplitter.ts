// tslint:disable-next-line: no-var-requires
const keypress = require("keypress")
// tslint:disable-next-line: no-var-requires
const ROT = require("rot-js")
// tslint:disable-next-line: no-var-requires
const tty = require('tty')

// Local imports
import Coord from './Coord'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Level from './Level'
import Frame from './Frame'
import Pointer from './Pointer'

// LOAD BEAMSPLITTER LEVEL
const width = 20
const height = 20
const jsonCells = [
  {x: 2, y: 2, element: "laser", rotation: 90, frozen: true},
  {x: 3, y: 2, element: "laser", rotation: 90, frozen: true},
  {x: 4, y: 2, element: "mirror", rotation: 135, frozen: true},
  {x: 2, y: 5, element: "beamsplitter", rotation: 135, frozen: true},
  {x: 2, y: 10, element: "detector", rotation: 0, frozen: true},
  {x: 10, y: 5, element: "detector", rotation: 0, frozen: true}
]
const jsonGoals = [
  {x: 2, y: 10, threshold: 50},
  {x: 2, y: 5, threshold: 50}
]
const jsonHints = [
  {x: 2, y: 10, message: "Weasel save the world fast!"}
]

const grid = new Grid(width, height)
grid.importJSON(jsonCells)
const goals = Goal.importJSON(jsonGoals)
const hints = Hint.importJSON(jsonHints)

// Level information
const level = new Level(
    0,
    "Weasel Beamsplitter Wizardry",
    "Dev",
    "Debugging level",
    grid,
    goals,
    hints,
    false
)

// TERMINAL STUFF
// --------------------------
// ROT display variables
const rot = new ROT.Display({ layout: "term", width, height })

// Start simulation
const frames: Frame[] = []
let frame = new Frame(level)
frames.push(frame)
frameDisplay(frames[0])

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin)
// listen for the "keypress" event
process.stdin.on('keypress', (_ch, key) => {
  if (key && key.ctrl && key.name === 'c') {
    process.exit(0)
  }
  if (key && key.name === 'left' && frames.length > 1) {
    frame = frames.pop()!
    frameDisplay(frame)
  }
  if (key && key.name === 'right') {
    frame = frame.next()
    frames.push(frame)
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
