import { jsonElements } from "../data/elements"

/**
 * Glyph Interface
 * Visual representation used by ROTjs
 */
export interface GlyphInterface {
  character: string
  backgroundColor: string
  foregroundColor: string
  tile: [number, number]
}

/**
 * GLYPH CLASS
 * Generates glyphs from tilemap in ROTjs
 */
export default class Glyph {
  public character: string
  public backgroundColor: string
  public foregroundColor: string
  public tile: [number, number]

  constructor(
    character: string,
    tile: [number, number],
    backgroundColor = "black",
    foregroundColor = "white"
  ) {
    this.character = character
    this.backgroundColor = backgroundColor
    this.foregroundColor = foregroundColor
    this.tile = tile
  }

  /**
   * Export glyph interface from glyph instance
   * @returns glyph interface
   */
  exportGlyph(): GlyphInterface {
    return {
      character: this.character,
      backgroundColor: this.backgroundColor,
      foregroundColor: this.foregroundColor,
      tile: this.tile
    }
  }

  /**
   * @param obj Glyph interface
   * @returns Glyph instance
   */
  static importGlyph(obj: GlyphInterface): Glyph {
    return new Glyph(
      obj.character,
      obj.tile,
      obj.backgroundColor,
      obj.foregroundColor
    )
  }

  /**
   * Process the provided tilemap in ROTjs format
   * Use the element id to get their row in the tilemap file multiplied bu the tile size
   * @param tilesize Size of cell
   * @returns tilemap in ROT format
   * FIXME: improve ROTjs separation from game logic
   */
  static processTileMap(tilesize = 64): { [symbol: string]: [number, number] } {
    const tileMap: { [symbol: string]: [number, number] } = {}

    // Element tiles
    jsonElements.forEach(elem => {
      elem.tiles.forEach((_tile, index) => {
        const y = elem.id * tilesize
        const x = index * tilesize
        tileMap[elem.ascii[index]] = [x, y]
      })
    })

    // Fourrier Cat
    tileMap["@"] = [0, 29 * tilesize]
    // Gate open horizontal and vertical
    tileMap["H"] = [0 * tilesize, 22 * tilesize]
    tileMap["V"] = [1 * tilesize, 22 * tilesize]
    // Photon
    tileMap["P"] = [0 * tilesize, 10 * tilesize]
    tileMap["d"] = [1 * tilesize, 10 * tilesize]
    // Laser dotted lines
    tileMap["8"] = [0 * tilesize, 23 * tilesize]
    tileMap["4"] = [1 * tilesize, 23 * tilesize]

    return tileMap
  }
}
