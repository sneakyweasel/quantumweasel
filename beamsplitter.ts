// tslint:disable-next-line: no-var-requires
const keypress = require("keypress")
const ROT = require("rot-js")

// Local imports
import Coord from './Coord'
import Element from './Element'
import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Level from './Level'
import Frame from './Frame'

process.on("exit", () => {
    // move cursor to the bottom left corner
    // process.stdout.write("\x1b[" + (process.stdout.rows + 1) + ";1H")
    // show the cursor again
    process.stdout.write("\x1b[?25h")
})
// during the game, hide the cursor from display
process.stdout.write("\x1b[?25l")

// put the keyboard into raw mode, so we can get individual keypress events
keypress(process.stdin)
// ts:lint:strictNullChecks": false
// process.stdin.setRawMode(true)
process.stdin.resume()

// add a handler to listen for "quit game" commands
process.stdin.on("keypress", (ch, _key) => {
    // if the user pressed Ctrl+C or ESC
    if (ch === "\u0003" || ch === "\u001b") {
        // then quit the game
        process.exit(0)
    }
})

// LOAD BEAMSPLITTER LEVEL
const grid = new Grid(8, 8)
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

// ROT display variables
const o = {
    width: 8,
    height: 8,
    layout: "term"
}

// Start ROT display
const d = new ROT.Display({ layout: "term", width: 8, height: 8 })
for (let i = 0; i < o.width; i++) {
    for (let j = 0; j < o.height; j++) {
        if (!i || !j || i + 1 === o.width || j + 1 === o.height) {
            d.draw(i, j, "#", "gray", "#111")
        } else {
            const cell = level.grid.get(new Coord(i, j))
            d.draw(i, j, cell.element.ascii, "#666", "#222")
        }
    }
}

// Start simulation
let frame = new Frame(level)
// frame.display()

// Compute frames
for (let i = 0; i < 25; i++) {
    if (!frame.level.completed && frame.pointers.length > 0) {
        frame = frame.next()
        // frame.minimalDisplay()
    } else {
        break
    }
}
