// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.
// Goal should extend Cell or should extend Coord
import Coord, { CoordInterface } from "./Coord";

/**
 * Goal interface with primitive js types
 */
export interface GoalInterface {
  coord: CoordInterface;
  threshold: number;
  value: number;
}

/** The goals to be achieved by the player */
export default class Goal extends Coord {
  coord: Coord;
  threshold: number;
  value: number;

  constructor(coord: Coord, threshold: number, value = 0) {
    super(coord.y, coord.x);
    this.coord = coord;
    this.threshold = threshold;
    this.value = value;
  }

  /**
   * Is a goal completed
   * @returns boolean if the goal is completed
   */
  get completed(): boolean {
    return this.value >= this.threshold;
  }

  /**
   * Returns a percentage of the current value compared to the expected value.
   * @returns number from 0 to 1 describing percentage
   */
  get percentage(): number {
    return (this.value / this.threshold) * 100;
  }

  /**
   * Override toString() method to display the goal
   * @returns string
   */
  toString(): string {
    return `{#Goal ${
      this.completed ? "completed " : " "
    }@ ${this.coord.toString()} is ${this.value} / ${this.threshold}} (${
      this.percentage
    }%)`;
  }

  /**
   * Export goal to primitives
   * @returns a goal interface
   */
  exportGoal(): GoalInterface {
    return {
      coord: this.coord.exportCoord(),
      threshold: this.threshold,
      value: this.value
    };
  }

  /**
   * Import goals from list of interfaces
   * @param goalObjs List of interfaces
   * @returns list of Goal instances
   */
  static importGoal(goalObjs: GoalInterface[]): Goal[] {
    return goalObjs.map(goal => {
      const coord = goal.coord;
      return new Goal(Coord.importCoord(coord), goal.threshold);
    });
  }
}

// Format active particle list
// static manyToString(goals: Goal[]): string {
//   let result = `${goals.length} active goals...\n`;
//   goals.map(goal => {
//     result += `- ${goal.toString()}\n`;
//   });
//   return result;
// }
