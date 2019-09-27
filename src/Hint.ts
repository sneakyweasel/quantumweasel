// HINT CLASS
// Structure extracted for v1: https://github.com/stared/quantum-game/blob/master/data/levels_game.json
// TODO: Link hint activation with goals

import Coord from "./Coord";

export interface HintInterface {
  x: number;
  y: number;
  message: string;
}

export default class Hint {
  coord: Coord;
  width: number;
  text: string;
  direction: string;
  active: boolean;

  constructor(
    coord: Coord,
    text: string,
    width = 5,
    direction = "left",
    active = true
  ) {
    this.coord = coord;
    this.width = width;
    this.text = text;
    this.direction = direction;
    this.active = active;
  }

  // override toString() method
  toString(): string {
    return `{#HINT ${this.text} @ ${this.coord.toString()}}`;
  }

  // export JSON
  // TODO: Nice JSON export
  exportJSON(): {} {
    return JSON.stringify(this);
  }

  // Import JSON
  static importJSON(jsonHints: HintInterface[]): Hint[] {
    const hints: Hint[] = [];
    jsonHints.forEach(hint => {
      const coord = new Coord(hint.x, hint.y);
      hints.push(new Hint(coord, hint.message));
    });
    return hints;
  }
}
