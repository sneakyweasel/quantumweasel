// LEVEL CLASS
// Kinda wondering about the correct representation of elements
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

// import * as math from 'mathjs'
// import Element from './Element'
import Cell from './Cell'
import Hint from './Hint'
import Grid from './Grid'
import Goal from './Goal'

export default class Level {
    id: number
    group: number
    title: string
    description: string
    grid: Grid
    goal: Goal[]
    hints: Hint[]
    startingElements: Cell[]

    constructor(
        id: number,
        group: number,
        title: string,
        description: string,
        grid: Grid,
        goal: Goal[],
        hints: Hint[]
    ) {
        // Basic infos
        this.id = id
        this.group = group
        this.title = title
        this.description = description
        // Basic grid definition
        this.grid = grid
        this.goal = goal
        this.hints = hints
        // TODO: Loop through cells that are not frozen and put them in the toolbox
        // this.startingElements =
    }
}