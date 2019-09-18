// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import _ = require('lodash')

export default class Level {
    id: number
    name: string
    group: string
    description: string
    grid: Grid
    goals: Goal[]
    hints: Hint[]
    toolbox: _.Dictionary<number>
    completed: boolean

    constructor(
        id: number,
        name: string,
        group: string,
        description: string,
        grid: Grid = new Grid(8, 8),
        goals: Goal[],
        hints: Hint[],
        completed: boolean
    ) {
        // Basic infos
        this.id = id
        this.group = group
        this.name = name
        this.description = description
        // Basic grid definition
        this.grid = grid
        this.goals = goals
        this.hints = hints
        this.completed = completed

        // Extract non frozen elements and put them in the toolbox
        const unfrozenCells = this.grid.cells.filter((cell) => !cell.frozen).map((cell) => cell.element.name)
        this.toolbox = _.countBy(unfrozenCells, toString)
    }

    // Override toString method in order to display ascii level
    toString() {
        return `\
LEVEL: ${this.name} [${this.grid.colCount}x${this.grid.rowCount}]\n\
DESC: ${this.description}\n\
GROUP: ${this.group}\n\
${this.grid.asciiRender()}\n\
GOALS: ${this.goals.map((i) => i.toString())}\n\
GOALS: ${this.completed ? "COMPLETE" : "IN PROGRESS"}\n\
HINTS: ${this.hints.map((i) => i.toString())}\n
TOOLBOX: ${JSON.stringify(this.toolbox)}\n
`
    }

    // Display level informations
    display() {
        console.log(`Level ${this.id}: ${this.name} has size [${this.grid.rowCount}x${this.grid.colCount}] and ${this.toolbox.length} starting elements for a ${this.grid.cells} elements puzzle.`)
    }

    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this)
    }

    // import JSON file
    static importJSON(name: string): Level {
        const json = require(`../levels/${name}.json`)
        const grid = new Grid(json.height, json.width)
        grid.importJSON(json.cells)
        const goals = Goal.importJSON(json.goals)
        const hints = Hint.importJSON(json.hints)
        return new Level(
            json.id,
            json.name,
            json.group,
            json.description,
            grid,
            goals,
            hints,
            false
        )
    }
}