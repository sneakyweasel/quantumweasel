// GLYPH CLASS
// The glyph class is responsible for the display of grid tiles

import { jsonElements } from "../data/elements";

export interface GlyphInterface {
  character: string;
  backgroundColor: string;
  foregroundColor: string;
  tile: [number, number];
}

export default class Glyph {
  public character: string;
  public backgroundColor: string;
  public foregroundColor: string;
  public tile: [number, number];

  constructor(
    character: string,
    tile: [number, number],
    backgroundColor = "black",
    foregroundColor = "white"
  ) {
    this.character = character;
    this.backgroundColor = backgroundColor;
    this.foregroundColor = foregroundColor;
    this.tile = tile;
  }

  // Export glyph to obj
  exportGlyph(): GlyphInterface {
    return {
      character: this.character,
      backgroundColor: this.backgroundColor,
      foregroundColor: this.foregroundColor,
      tile: this.tile
    };
  }

  // Import glyph from obj
  static importGlyph(json: GlyphInterface): Glyph {
    return new Glyph(
      json.character,
      json.tile,
      json.backgroundColor,
      json.foregroundColor
    );
  }

  // Use the element id to get their row in the tilemap file multiplied bu the tile size
  static processTileMap(tilesize = 64): { [symbol: string]: [number, number] } {
    const tileMap: { [symbol: string]: [number, number] } = {};

    // Element tiles
    jsonElements.forEach(elem => {
      elem.tiles.forEach((_tile, index) => {
        const y = elem.id * tilesize;
        const x = index * tilesize;
        tileMap[elem.ascii[index]] = [x, y];
        // console.log(`Processing ${elem.name}: Position: ${elem.ascii[index]} - [X:${x}, Y:${y}]`);
      });
    });

    // Fourrier Cat
    tileMap["@"] = [0, 29 * tilesize];
    // Gate open horizontal and vertical
    tileMap["H"] = [0 * tilesize, 22 * tilesize];
    tileMap["V"] = [1 * tilesize, 22 * tilesize];
    // Photon
    tileMap["P"] = [0 * tilesize, 10 * tilesize];
    tileMap["d"] = [1 * tilesize, 10 * tilesize];
    // Laser dotted lines
    tileMap["v"] = [0 * tilesize, 23 * tilesize];
    tileMap["h"] = [1 * tilesize, 23 * tilesize];

    return tileMap;
  }
}
