// CELL CLASS
// Basic class for the grid cells
import Coord from "./Coord";
import Element from "./Element";
import { Pointer } from "./Pointer";
import Game from "./Game";

export default class Cell extends Coord {
  coord: Coord; // required
  element: Element; // optional
  rotation: number; // default: void
  frozen: boolean; // default: false

  constructor(coord: Coord, element: Element, rotation = 0, frozen = false) {
    super(coord.x, coord.y);
    this.coord = coord;
    this.element = element;
    this.rotation = rotation;
    this.frozen = frozen;
  }

  // Change frozen status of cell
  get ascii(): string {
    return this.element.ascii[this.rotation / this.element.rotationAngle];
  }
  get foregroundColor(): string {
    return this.element.foregroundColor;
  }
  get backgroundColor(): string {
    return this.element.backgroundColor;
  }

  // Rotate cell - Correcting the javascript modulo bug for negative values: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
  rotate(angle: number = this.element.rotationAngle): void {
    if (!this.frozen) {
      if (Math.abs(angle) % this.element.rotationAngle !== 0) {
        throw new Error(
          "Error in the supplied angle compared to the element rotation angle."
        );
      } else {
        this.rotation = (((this.rotation + angle) % 360) + 360) % 360;
      }
    } else {
      console.log("This cell is frozen, you can't rotate it.");
    }
  }

  toggleFreeze(): void {
    this.frozen = !this.frozen;
  }

  // Fire the l4z0r5
  fire(): Pointer {
    if (this.element.name === "laser") {
      return new Pointer(this.coord, this.rotation, 1, 0);
    } else {
      throw new Error("Only lasers can fire a particle.");
    }
  }

  // DISPLAY METHODS
  draw(game: Game): void {
    game.draw(this);
  }

  // Override toString() method
  toString(): string {
    return `Cell @ ${this.coord.toString()} is ${
      this.frozen ? "frozen" : "unfrozen"
    } ${this.element.toString()} rotated ${this.rotation}°`;
  }

  // Export to JSON format
  exportCellJSON(): {
    y: number;
    x: number;
    element: string;
    rotation: number;
    frozen: boolean;
  } {
    return {
      x: this.coord.x,
      y: this.coord.y,
      element: this.element.name,
      rotation: this.rotation,
      frozen: this.frozen
    };
  }

  // Import from JSON
  static importJSON(json: {
    x: number;
    y: number;
    element: string;
    rotation: number;
    frozen: boolean;
  }): Cell {
    const coord = new Coord(json.y, json.x);
    const element = Element.fromName(json.element);
    return new Cell(coord, element, json.rotation, json.frozen);
  }
}
