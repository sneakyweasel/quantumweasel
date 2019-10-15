/* eslint-disable @typescript-eslint/no-non-null-assertion */
// ELEMENT CLASS
// Basic class related to game elements
// TODO: Remove display logic to Glyph class

import { jsonElements } from "../data/elements";
import Glyph from "./Glyph";
import * as qt from "quantum-tensors";
/**
 *
 */
export interface ElementInterface {
  id: number;
  name: string;
  group: string;
  description: string;
  active: boolean;
  absorption: number;
  phase: number;
  ascii: string[];
  tiles: number[][];
}

export default class Element {
  id: number;
  name: string;
  group: string;
  description: string;
  active: boolean;
  absorption: number;
  phase: number;
  ascii: string[];
  tiles: number[][];
  rotationState: number;
  glyph: Glyph;

  constructor(
    id: number,
    name: string,
    group = "",
    description = "",
    active = false,
    absorption = 0,
    phase = 0,
    ascii: string[] = [" ", " ", " ", " ", " ", " ", " ", " "],
    tiles: number[][] = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
    glyph: Glyph = new Glyph(" ", [0, 0])
  ) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.description = description;
    this.active = active;
    this.absorption = absorption;
    this.phase = phase;
    this.ascii = ascii;
    this.tiles = tiles;
    this.glyph = glyph;
  }

  transition(param: number): qt.Operator {
    switch (this.name) {
      case "mirror":
        return qt.mirror(param);
      case "beamsplitter":
        return qt.beamSplitter(param);
      case "filter":
        return qt.attenuator(Math.SQRT1_2);
      case "phaseinc":
        return qt.vacuumJar();
      case "phasedec":
        return qt.glassSlab();
      case "detector":
        return qt.attenuator(0);
      case "sugar":
        return qt.sugarSolution();
      case "polarsplitter":
        if (param === 0) {
          return qt.polarizingBeamsplitter(135);
        } else {
          return qt.polarizingBeamsplitter(45);
        }
      case "mine":
        return qt.attenuator(0);
      case "rock":
        return qt.attenuator(0);
      case "wall":
        return qt.attenuator(0);
      default:
        return qt.attenuator(0);
      // throw Error("Wrong element name...");
    }
  }

  // Compute the rotation angle from the number of sprites
  get rotationAngle(): number {
    return 360 / this.ascii.length;
  }

  // Override of toString() method
  toString(): string {
    return `${this.name} (Phase: ${this.phase}, Absorption: ${this.absorption *
      100}%)`;
  }

  // Export JSON
  exportElement(): ElementInterface {
    return {
      id: this.id,
      name: this.name,
      group: this.group,
      description: this.description,
      active: this.active,
      absorption: this.absorption,
      phase: this.phase,
      ascii: this.ascii,
      tiles: this.tiles
    };
  }

  // Create element from element interface
  static importElement(json: ElementInterface): Element {
    return new Element(
      json.id,
      json.name,
      json.group,
      json.description,
      json.active,
      json.absorption,
      json.phase,
      json.ascii,
      json.tiles
    );
  }

  // Static JSON load
  static fromName(name: string): Element {
    const element = jsonElements.find(elem => {
      return elem.name === name;
    });
    return Element.importElement(element!);
  }
}
