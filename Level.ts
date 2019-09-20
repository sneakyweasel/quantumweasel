// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

import Coord from './Coord'
import Cell from './Cell'
import Element from './Element'
import Grid from './Grid'
import Hint from './Hint'
import Goal from './Goal'
import Pointer from './Pointer'

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
        // const unfrozenCells = this.grid.cells.filter((cell) => !cell.frozen).map((cell) => cell.element.name)
    }

    // Override toString method in order to display ascii level
    toString() {
        return `\
LEVEL: ${this.name} [${this.grid.cols}x${this.grid.rows}]\n\
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
        console.log(`Level ${this.id}: ${this.name} has size [${this.grid.rows}x${this.grid.cols}] and ${this.toolbox.length} starting elements for a ${this.grid.cells} elements puzzle.`)
    }

    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this)
    }

    // import JSON file
    static importJSON(name: string): Level {
        const json = require(`../levels/${name}.json`)
        const grid = new Grid(json.cols, json.rows)
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

    // import JSON file
    static importV1JSON(name: string): Level {
        const json = require(`../levels/${name}.json`)
        const grid = new Grid(json.width, json.height)
        const cells: Cell[] = []
        json.tiles.forEach((tile: { i: number, j: number, name: string, rotation: number, frozen: boolean }) => {
            cells.push(new Cell(
                new Coord(tile.i, tile.j),
                Element.fromName(tile.name, 1),
                tile.rotation * 45,
                tile.frozen
            ))
        })
        grid.setMany(...cells)
        const goals: Goal[] = []
        grid.detectors.forEach((detector) => {
            goals.push(new Goal(detector.coord, 1))
        })
        const hints: Hint[] = []
        return new Level(
            0,
            json.name,
            json.group,
            "V1 level imported",
            grid,
            goals,
            hints,
            false
        )
    }

    computePaths() {
        // Fire the lasers
        const particles: Pointer[] = []
        this.grid.lasers.forEach((laser) => {
            particles.push(new Pointer(laser.coord, laser.rotation, 100))
        })

        // Compute path for each particle
        // particles.forEach((particle: Pointer) => {

        // Compute coords path until the end of the grid
        // Distance to grid border
        // this.grid.colCount - particle.coord.x
        // this.grid.rowCount
        // let coord = particle.next().coord
        // })
    }
}