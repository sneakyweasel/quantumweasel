// HINT CLASS
// Structure extracted for v1: https://github.com/stared/quantum-game/blob/master/data/levels_game.json
// TODO: Create event class

import Coord from "./Coord";

export interface HintInterface {
  coord: { x: number; y: number };
  text: string;
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

  // export hint interface
  exportHint(): HintInterface {
    return {
      coord: this.coord.exportCoord(),
      text: this.text
    };
  }

  // Import hint object
  static importHint(jsonHints: HintInterface[]): Hint[] {
    return jsonHints.map(hint => {
      const coord = Coord.importCoord(hint.coord);
      return new Hint(coord, hint.text);
    });
  }
}
