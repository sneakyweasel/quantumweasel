import { KEYS } from "rot-js";
import { Glyph } from "./Glyph";
import { Actor, ActorType } from "./Actor";
import InputUtility from "./InputUtility";
import Coord from "./Coord";
import { Cell } from "./Cell";
import Game from "./Game";
import Element from "./Element";
import FileSaver = require("file-saver");

export default class Player implements Actor {
  glyph: Glyph;
  type: ActorType;
  private game: Game;
  public coord: Coord;

  constructor(game: Game, coord: Coord) {
    this.glyph = new Glyph("@", [0, 0]);
    this.type = ActorType.Player;
    this.game = game;
    this.coord = coord;
  }

  // Getters and setters
  get cell(): Cell {
    return this.game.grid.get(this.coord);
  }

  // tslint:disable-next-line: no-any
  act(): Promise<string> {
    return InputUtility.waitForInput(this.handleInput.bind(this));
  }

  // Offset of movement
  private handleInput(event: KeyboardEvent): boolean {
    let validInput = false;
    let newCoord: Coord = this.coord;
    const cycles = [
      ["void", "wall", "gate"],
      ["mine", "rock", "detector", "omnidetector", "filter"],
      ["mirror", "beamsplitter"],
      ["laser"],
      ["phaseinc", "phasedec"]
    ];
    let elemIndex = 0;
    switch (event.keyCode) {
      // Movement
      case KEYS.VK_Z:
      case KEYS.VK_UP:
        newCoord = this.coord.top;
        break;
      case KEYS.VK_D:
      case KEYS.VK_RIGHT:
        newCoord = this.coord.right;
        break;
      case KEYS.VK_S:
      case KEYS.VK_DOWN:
        newCoord = this.coord.bottom;
        break;
      case KEYS.VK_Q:
      case KEYS.VK_LEFT:
        newCoord = this.coord.left;
        break;

      // Rotations, freezing
      case KEYS.VK_A:
        this.cell.rotate(-this.cell.element.rotationAngle);
        break;
      case KEYS.VK_E:
        this.cell.rotate(this.cell.element.rotationAngle);
        break;
      case KEYS.VK_F:
        this.cell.toggleFreeze();
        break;

      // Save JSON file with level
      case KEYS.VK_F1:
        const json = this.game.level.exportJSON();
        const blob = new Blob([JSON.stringify(json)], {
          type: "text/plain;charset=utf-8"
        });
        FileSaver.saveAs(blob, "level.json");
        break;

      // Elements
      // Cycle through elements in group
      // BASICS
      case KEYS.VK_QUOTE:
        if (this.cell.element.group === "Basic") {
          elemIndex =
            (cycles[0].indexOf(this.cell.element.name) + 1) % cycles[0].length;
        } else {
          elemIndex = 0;
        }
        this.cell.element = Element.fromName(cycles[0][elemIndex]);
        break;

      // ABSORBERS
      case KEYS.VK_1:
        if (this.cell.element.group === "Absorber") {
          elemIndex =
            (cycles[1].indexOf(this.cell.element.name) + 1) % cycles[1].length;
        } else {
          elemIndex = 0;
        }
        this.cell.element = Element.fromName(cycles[1][elemIndex]);
        break;

      // REFLECTORS
      case KEYS.VK_2:
        if (this.cell.element.group === "Direction") {
          elemIndex =
            (cycles[2].indexOf(this.cell.element.name) + 1) % cycles[2].length;
        } else {
          elemIndex = 0;
        }
        this.cell.element = Element.fromName(cycles[2][elemIndex]);
        break;

      case KEYS.VK_3:
        this.cell.element = Element.fromName("laser");
        break;
      case KEYS.VK_4:
        this.cell.element = Element.fromName("detector");
        break;
      case KEYS.VK_5:
        this.cell.element = Element.fromName("phaseinc");
        break;
      case KEYS.VK_6:
        this.cell.element = Element.fromName("phasedec");
        break;
      default:
        break;
    }
    // Check that player is in game grid borders
    if (this.game.grid.includes(newCoord)) {
      this.coord = newCoord;
      validInput = true;
      this.game.grid.draw(this.game);
    }
    return validInput;
  }

  toString(): string {
    return `Player ${this.coord.toString()}`;
  }
}
