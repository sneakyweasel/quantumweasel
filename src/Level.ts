// TODO: work on the toolbox
import { Photons } from "quantum-tensors";
import Grid, { GridInterface } from "./Grid";
import Hint, { HintInterface } from "./Hint";
import Goal, { GoalInterface } from "./Goal";
import Inventory from "./Inventory";

/** A level interface composed of primitives for display */
export interface LevelInterface {
  id: number;
  name: string;
  group: string;
  description: string;
  grid: GridInterface;
  goals: GoalInterface[];
  hints: HintInterface[];
}

/**
 * Level class describes the level data and logic
 * Levels are loaded as a JSON file of a solution
 * Unfrozen elements are then processed into the players inventory
 */
export default class Level {
  id: number;
  name: string;
  group: string;
  description: string;
  grid: Grid;
  goals: Goal[];
  hints: Hint[];
  toolbox: Inventory;
  completed: boolean;
  state: Photons;

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
    this.id = id;
    this.group = group;
    this.name = name;
    this.description = description;
    // Basic grid definition
    this.grid = grid;
    this.goals = goals;
    this.hints = hints;
    this.completed = completed;
    // Initiate quantum state
    this.state = new Photons(grid.cols, grid.rows);
  }

  /**
   * String output of a level
   * @returns a string describing the level
   */
  toString(): string {
    return `\
LEVEL: ${this.name} [${this.grid.cols}x${this.grid.rows}]\n\
DESC: ${this.description}\n\
GROUP: ${this.group}\n\
${this.grid.toString()}\n\
GOALS: ${this.goals.map(i => i.toString())}\n\
GOALS: ${this.completed ? "COMPLETE" : "IN PROGRESS"}\n\
HINTS: ${this.hints.map(i => i.toString())}\n
TOOLBOX: ${JSON.stringify(this.toolbox)}\n
`;
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
      hints: this.hints.flatMap(hint => hint.exportHint()),
      goals: this.goals.flatMap(goal => goal.exportGoal())
    };
  }

  /**
   * Import a json level
   * @param obj a level interface with primitives
   * @returns a Level instance
   */
  static importLevel(obj: LevelInterface): Level {
    const grid = new Grid(obj.grid.rows, obj.grid.cols);
    grid.importGrid(obj.grid.cells);
    const goals = Goal.importGoal(obj.goals);
    const hints = Hint.importHint(obj.hints);
    return new Level(
      obj.id,
      obj.name,
      obj.group,
      obj.description,
      grid,
      goals,
      hints,
      false
    );
  }
}
