import Coord, { CoordInterface } from "./Coord"
import Element from "./Element"
import Particle from "./Particle"
import { angleToSymbol } from "./Helpers"

/**
 * CELL INTERFACE
 * A cell interface composed of primitives
 */
export interface CellInterface {
  coord: CoordInterface
  element: string
  rotation: number
  frozen: boolean
  active?: boolean
  energized?: boolean
}

/**
 * CELL CLASS
 * A cell is a rotated element at a coordinate
 */
export default class Cell {
  coord: Coord
  element: Element
  rotation: number
  frozen: boolean
  active: boolean
  energized: boolean

  constructor(
    coord: Coord,
    element: Element,
    rotation = 0,
    frozen = false,
    active = false,
    energized = false
  ) {
    this.coord = coord
    this.element = element
    this.rotation = rotation
    this.frozen = frozen
    this.active = active
    this.energized = energized
  }

  /**
   * Get ASCII character linked to cell's element and cell rotation
   */
  get ascii(): string {
    return this.element.ascii[this.rotation / this.element.rotationAngle]
  }
  get isVoid(): boolean {
    return this.element.name === "Void"
  }
  /**
   * Compute the rotation angle in degrees
   */
  get rotationAscii(): string {
    return angleToSymbol(this.element.rotationAngle)
  }
  get foregroundColor(): string {
    return this.element.glyph.foregroundColor
  }
  get backgroundColor(): string {
    return this.element.glyph.backgroundColor
  }

  // Rotate cell - Correcting the javascript modulo bug for negative values: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
  rotate(angle: number = this.element.rotationAngle): void {
    if (!this.frozen) {
      if (Math.abs(angle) % this.element.rotationAngle !== 0) {
        throw new Error(
          "Error in the supplied angle compared to the element rotation angle."
        )
      } else {
        this.rotation = (((this.rotation + angle) % 360) + 360) % 360
      }
    } else {
      console.error("This cell is frozen, you can't rotate it.")
    }
  }
  toggleFreeze(): void {
    this.frozen = !this.frozen
  }
  toggleActive(): void {
    this.active = !this.active
  }
  toggleEnergized(): void {
    this.energized = !this.energized
  }

  // Fire the laser and get a particle
  fire(): Particle {
    if (this.active) {
      return new Particle(this.coord, this.rotation, 1, 0)
    } else {
      throw Error("Laser is inactive...")
    }
  }

  // Override toString() method
  toString(): string {
    return `Cell @ ${this.coord.toString()} is ${
      this.frozen ? "frozen" : "unfrozen"
    } ${this.active ? "active" : "inactive"} and ${
      this.energized ? "powered" : "unpowered"
    } ${this.element.toString()} rotated ${this.rotation}°`
  }

  // Export to JSON format
  exportCell(): CellInterface {
    return {
      coord: this.coord.exportCoord(),
      element: this.element.name,
      rotation: this.rotation,
      frozen: this.frozen,
      active: this.active,
      energized: this.energized
    }
  }

  // Import from Object
  static importCell(obj: CellInterface): Cell {
    const coord = Coord.importCoord(obj.coord)
    const element = Element.fromName(obj.element)
    return new Cell(
      coord,
      element,
      obj.rotation,
      obj.frozen,
      obj.active,
      obj.energized
    )
  }
}
