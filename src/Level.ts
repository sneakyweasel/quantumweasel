import { Photons } from "quantum-tensors";
import { LevelInterface } from "./Level";
// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox

import Coord from "./Coord";
import Cell from "./Cell";
import Element from "./Element";
import Grid, { GridInterface } from "./Grid";
import Hint, { HintInterface } from "./Hint";
import Goal, { GoalInterface } from "./Goal";
import Inventory from "./Inventory";

export interface LevelInterface {
  id: number;
  name: string;
  group: string;
  description: string;
  grid: GridInterface;
  goals: GoalInterface[];
  hints: HintInterface[];
}

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
    this.state = new Photons(grid.cols, grid.rows);
  }

  // Override toString method in order to display ascii level
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

  // export JSON file to save state oi the game
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

  // import JSON file
  static importLevel(json: LevelInterface): Level {
    const grid = new Grid(json.grid.rows, json.grid.cols);
    grid.importGrid(json.grid.cells);
    const goals = Goal.importGoal(json.goals);
    const hints = Hint.importHint(json.hints);
    return new Level(
      json.id,
      json.name,
      json.group,
      json.description,
      grid,
      goals,
      hints,
      false
    );
  }

  // import JSON file
  static importV1JSON(json: {
    width: number;
    height: number;
    name: string;
    group: string;
    tiles: {}[];
  }): Level {
    const grid = new Grid(json.width, json.height);
    const cells: Cell[] = json.tiles.map(
      (tile: {
        i: number;
        j: number;
        name: string;
        rotation: number;
        frozen: boolean;
      }) => {
        const coord = Coord.importCoord({ y: tile.i, x: tile.j });
        const element = Element.fromName(tile.name);
        const rotation = element.rotationAngle * tile.rotation;
        return new Cell(coord, element, rotation, tile.frozen);
      }
    );
    grid.setMany(...cells);
    // const goals: Goal[] = [];
    const goals: Goal[] = grid.detectors.map(detector => {
      return new Goal(detector.coord, 1);
    });
    const hints: Hint[] = [];
    return new Level(
      0,
      json.name,
      json.group,
      "V1 level imported",
      grid,
      goals,
      hints,
      false
    );
  }
}
