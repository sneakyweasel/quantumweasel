/* eslint-disable @typescript-eslint/no-non-null-assertion */
// ELEMENT CLASS
// Basic class related to game elements
// FIXME: This class needs rewrite with glyphs and func

import { jsonElements } from "../elements/elements";

export default class Element {
  id: number;
  name: string;
  ascii: string[];
  group: string;
  description: string;
  link: string;
  active: boolean;
  tiles: string;
  absorption: number;
  phase: number;
  foregroundColor: string;
  backgroundColor: string;
  matrix: number[][];

  constructor(
    id: number,
    name: string,
    ascii: string[] = [" ", " ", " ", " ", " ", " ", " ", " "],
    group = "",
    description = "",
    link = "",
    active = false,
    tiles = "tilemap.png",
    absorption = 0,
    phase = 0,
    foregroundColor = "white",
    backgroundColor = "black",
    matrix: number[][] = [[0, 0], [0, 0]]
  ) {
    this.id = id;
    this.name = name;
    this.ascii = ascii;
    this.group = group;
    this.description = description;
    this.link = link;
    this.active = active;
    this.tiles = tiles;
    this.absorption = absorption;
    this.phase = phase;
    this.foregroundColor = foregroundColor;
    this.backgroundColor = backgroundColor;
    this.matrix = matrix;
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
  exportJSON(): {} {
    return {
      id: this.id,
      name: this.name,
      ascii: this.ascii,
      group: this.group,
      description: this.description,
      link: this.link,
      active: this.active,
      tiles: this.tiles,
      absorption: this.absorption,
      phase: this.phase,
      foregroundColor: this.foregroundColor,
      backgroundColor: this.backgroundColor,
      matrix: this.matrix
    };
  }

  // Static JSON load
  // FIXME: It's goddamn ugly
  static fromName(name: string, version = 2): Element {
    // const jsonElements = require(`../elements/elements.json`)

    if (version === 2) {
      const elem = jsonElements.find((elem: { name: string }) => {
        return elem.name === name;
      });
      return new Element(
        elem!.id,
        elem!.name,
        elem!.ascii,
        elem!.group,
        elem!.description,
        elem!.link,
        elem!.active,
        elem!.tiles,
        elem!.absorption,
        elem!.phase,
        elem!.foregroundColor,
        elem!.backgroundColor,
        elem!.matrix
      );
    } else {
      const elem = jsonElements.find((elem: { namev1: string }) => {
        return elem.namev1 === name;
      });
      return new Element(
        elem!.id,
        elem!.name,
        elem!.ascii,
        elem!.group,
        elem!.description,
        elem!.link,
        elem!.active,
        elem!.tiles,
        elem!.absorption,
        elem!.phase,
        elem!.foregroundColor,
        elem!.backgroundColor,
        elem!.matrix
      );
    }
  }
}
