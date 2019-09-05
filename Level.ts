// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

// import * as math from 'mathjs'
import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'

export default class Level {
    id: number
    name: string
    group: number
    description: string
    grid: Grid
    goal: Goal[]
    hints: Hint[]
    startingElements: Cell[] // TODO: See if sim needs copy, computed from unfrozen cells in json

    constructor(
        id: number,
        name: string,
        group: number,
        description: string,
        grid: Grid,
        goal: Goal[],
        hints: Hint[]
    ) {
        // Basic infos
        this.id = id
        this.group = group
        this.name = name
        this.description = description
        // Basic grid definition
        this.grid = grid
        this.goal = goal
        this.hints = hints

        // Extract non frozen elements and put them in the toolbox
        this.grid.cells().forEach((cell) => {
            if (!cell.frozen) {
                this.startingElements.push(cell)
            }
        })
    }

    // Display level informations
    display() {
        console.log(`Level ${this.id}: ${this.name} has size [${this.grid.rowCount}x${this.grid.colCount}] and ${this.startingElements.length} starting elements for a ${this.grid.cells} elements puzzle.`)
    }

    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this)
    }
}