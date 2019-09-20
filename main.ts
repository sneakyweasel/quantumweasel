// tslint:disable-next-line: no-var-requires
const keypress = require("keypress")
// tslint:disable-next-line: no-var-requires
const ROT = require("rot-js")
// tslint:disable-next-line: no-var-requires
const tty = require('tty')

// Local imports
import Coord from './Coord'
import Level from './Level'
import Frame from './Frame'

// Load json level
const levelName = 'mirror'
let level = Level.importJSON(levelName)

// Rot terminal init
const rot = new ROT.Display({
    layout: "term",
    width: level.grid.cols,
    height: level.grid.rows
})

// Generate frames from level
const frames: Frame[] = []
let frame = new Frame(level)
frames.push(frame)
frameDisplay(frame)

// Keypress events
keypress(process.stdin)
process.stdin.on('keypress', (_ch, key) => {
    if (key && key.ctrl && key.name === 'c') {
        process.exit(0)
    }
    // Reset simulation
    if (key && key.name === 'r') {
        level = Level.importJSON(levelName)
        frame = new Frame(level)
        frames.push(frame)
        frameDisplay(frame)
    }
    // Backwards
    if (key && key.name === 'left' && frames.length > 1) {
        frame = frames.pop()!
        frameDisplay(frame)
    }
    // Forward
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

// Display frame
function frameDisplay(frame: Frame) {
    process.stdout.write("\u001b[2J\u001b[0;0H")    // Clear terminal
    const rows = frame.level.grid.rows
    const cols = frame.level.grid.cols
    // frame.pointers
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // Draw borders
            if (!y || !x || y + 1 === rows || x + 1 === cols) {
                rot.draw(y, x, "#", "gray", "#222")
                // Draw cells
            } else {
                const coord = new Coord(y, x)
                const rotation = frame.level.grid.get(coord).rotation
                const ascii = frame.level.grid.matrix[y][x].element.ascii[rotation / 45]
                const frozen = frame.level.grid.get(coord).frozen
                const color = frozen ? "#fff" : "#ddd"

                // Active cell - change background
                const activePointers = frame.pointers.map((pointer) => pointer.coord).filter((i) => coord.equal(i))
                let background = "#222"
                if (activePointers.length > 0) {
                    background = "#ff00ff"
                }
                rot.draw(y, x, ascii, color, background)
            }
        }
    }

    console.log(frame.toString())

    // Laser lines
    // frame.pointers.forEach((pointer) => {
    //     console.log(`Drawing laser lines: ${pointer.path.toString()}`)
    //     frame.laserPath(pointer).forEach((coord) => {
    //         rot.draw(coord.y, coord.x, "+", "red", "black")
    //     })
    // })
}
