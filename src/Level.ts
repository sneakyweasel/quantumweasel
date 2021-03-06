// TODO: work on the toolbox
import { LevelInterface } from "./interfaces"
import { Grid, Coord, Cell, Element, Goal, Hint } from "./main"
import { Photons } from "quantum-tensors"
import Toolbox from "./Toolbox"
import { convertFromClassicNames } from "./Helpers"

/**
 * CLASSICAL LEVEL INTERFACE
 * original level structure for importing V1 levels
 */
export interface ClassicLevelInterface {
  name: string
  group: string
  width: number
  height: number
  tiles: {
    i: number
    j: number
    name: string
    rotation: number
    frozen: boolean
  }[]
}

/**
 * LEVEL CLASS
 * Level class describes the level data and logic
 * Levels are loaded as a JSON file of a solution
 * Unfrozen elements are then processed into the players inventory
 */
export default class Level {
  id: number
  name: string
  group: string
  description: string
  grid: Grid
  goals: Goal[]
  hints: Hint[]
  toolbox: Toolbox
  completed: boolean
  state: Photons

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
    // Initiate quantum state
    this.state = new Photons(grid.cols, grid.rows)

    // Populate toolbox
    // this.grid.cluster.unfrozen.cells.map(cell => {
    //   cell.coord.x = -1
    //   cell.coord.y = -1
    //   this.toolbox.add(cell.element.name)
    // })
  }

  /**
   * String output of a level
   * @returns a string describing the level
   */
  toString(): string {
    let result = `LEVEL: ${this.name} [${this.grid.cols}x${this.grid.rows}]\n`
    result += `DESC: ${this.description}\n`
    result += `GROUP: ${this.group}\n`
    result += `${this.grid.toString()}\n`
    result += `GOALS: ${this.goals.map(i => i.toString())}\n`
    result += `HINTS: ${this.hints.map(i => i.toString())}\n`
    result += `TOOLBOX: ${this.toolbox.toString()}\n`
    return result
  }

  /**
   * Export a json level
   * @returns a level interface of the current level
   */
  exportLevel(): LevelInterface {
    return {
      id: this.id,
      name: this.name,
      group: this.group,
      description: this.description,
      grid: this.grid.exportGrid(),
      hints: this.hints.map(hint => hint.exportHint()),
      goals: this.goals.map(goal => goal.exportGoal())
    }
  }

  /**
   * Import a json level
   * @param obj a level interface with primitives
   * @returns a Level instance
   */
  static importLevel(obj: LevelInterface): Level {
    const grid = new Grid(obj.grid.rows, obj.grid.cols)
    grid.importGrid(obj.grid.cells)
    const goals = Goal.importGoal(obj.goals)
    const hints = Hint.importHint(obj.hints)
    return new Level(obj.id, obj.name, obj.group, obj.description, grid, goals, hints, false)
  }

  /**
   * Import a json level
   * @param obj a level interface with primitives
   * @returns a Level instance
   */

  static importClassicLevel(obj: ClassicLevelInterface): Level {
    const rows = obj.height
    const cols = obj.width
    const grid = new Grid(rows, cols)
    obj.tiles.map(tile => {
      const element = Element.fromName(convertFromClassicNames(tile.name))
      const rotation = tile.rotation * element.rotationAngle
      const coord = new Coord(tile.j, tile.i)
      const cell = new Cell(coord, element, rotation, tile.frozen)
      grid.set(cell)
    })
    const goals: Goal[] = []
    const hints: Hint[] = []
    return new Level(0, obj.name, obj.group, "", grid, goals, hints, false)
  }
}
