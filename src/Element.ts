import { ElementInterface } from "./Element";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// ELEMENT CLASS
// Basic class related to game elements
// TODO: Remove display logic to Glyph class

import { jsonElements } from "../data/elements";
import Glyph from "./Glyph";
// import Mirror from "./elements/Mirror";
import * as qt from "quantum-tensors";

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
      case "detector":
        return qt.attenuator(1);
      case "mine":
        return qt.attenuator(1);
      case "rock":
        return qt.attenuator(1);
      case "wall":
        return qt.attenuator(1);
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

  // static createMirror(rotation: number): Mirror {
  //   const element = Element.importElement({
  //     name: "mirror",
  //     group: "Direction",
  //     description: "Metallic or dielectric mirror.",
  //     active: false,
  //     absorption: 0,
  //     phase: 0,
  //     id: 14,
  //     ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
  //     tiles: [
  //       [14, 0],
  //       [14, 1],
  //       [14, 2],
  //       [14, 3],
  //       [14, 4],
  //       [14, 5],
  //       [14, 6],
  //       [14, 7]
  //     ]
  //   });
  //   return new Mirror(element, rotation);
  // }
}
