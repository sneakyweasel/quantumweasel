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
import Pointer from './Pointer'

// Load json level
// const level = Level.importJSON('v1')
const level = Level.importJSON('mirror')
// const level = Level.importJSON('beamsplitter')

// Rot terminal init
const rot = new ROT.Display({
    layout: "term",
    width: level.grid.colCount,
    height: level.grid.rowCount
})

// Generate frames from level
const frames: Frame[] = []
let frame = new Frame(level)
frames.push(frame)
frameDisplay(frames[0])

// Keypress events
keypress(process.stdin)
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
    const width = frame.level.grid.colCount
    const height = frame.level.grid.rowCount
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
