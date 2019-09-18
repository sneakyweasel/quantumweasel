// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

// import * as math from 'mathjs'
// import Cell from './Cell'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
// import Element from './Element'
import fs = require('fs')
import _ = require('lodash')
// import Toolbox from './Toolbox'

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

    // Load level solution JSON file
    // TODO: define new JSON structure for levels
    loadJSON() {
        // tslint:disable-next-line: no-any
        fs.readFile('./levels.json', 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("Error reading file from disk:", err)
                return
            }
            try {
                const levelJSON = JSON.parse(jsonString)
                console.log("Level data is:", JSON.stringify(levelJSON))
                // const level = new Level(
                //     0,
                //     levelJSON.name,
                //     levelJSON.group,
                //     levelJSON.tiles.each
                // )
            } catch (err) {
                console.log('Error parsing JSON string:', err)
            }
        })
    }

    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this)
    }
}