import { KEYS } from "rot-js"
import Glyph from "./Glyph"
import { Actor, ActorType } from "./Actor"
import InputUtility from "./InputUtility"
import Coord from "./Coord"
import Cell from "./Cell"
import Level from "./Level"
import Element from "./Element"
import FileSaver = require("file-saver")
import { Elem, Group, ElemGroups } from "./Helpers"

export default class Player implements Actor {
  glyph: Glyph
  type: ActorType
  private level: Level
  public coord: Coord

  constructor(level: Level, coord: Coord) {
    this.glyph = new Glyph("@", [0, 0])
    this.type = ActorType.Player
    this.level = level
    this.coord = coord
  }

  // Getters and setters
  get cell(): Cell {
    if (this.level.grid.includes(this.coord)) {
      // return this.level.grid.get(this.coord);
      return new Cell(this.coord, Element.fromName("Void"))
    } else {
      return new Cell(this.coord, Element.fromName("Void"))
    }
  }
  // Getters and setters
  get element(): Element {
    return this.cell.element
  }

  // tslint:disable-next-line: no-any
  act(): Promise<string> {
    return InputUtility.waitForInput(this.handleInput.bind(this))
  }

  // Cycle through groups of elements
  cycleNext(group: string): void {
    const list: string[] = ElemGroups[group]
    if (this.cell.frozen) {
      return
    }
    // Cycle through elements of the same group
    if (group === this.element.group) {
      const elemIndex = (list.indexOf(this.element.name) + 1) % list.length
      this.cell.element = Element.fromName(list[elemIndex])
    } else {
      this.cell.rotation = 0
      this.cell.element = Element.fromName(list[0])
    }
  }

  // Offset of movement
  handleInput(event: KeyboardEvent): boolean {
    let validInput = false
    let newCoord: Coord = this.coord
    switch (event.keyCode) {
      // Movement
      case KEYS.VK_Z:
      case KEYS.VK_UP:
        newCoord = this.coord.up
        break
      case KEYS.VK_D:
      case KEYS.VK_RIGHT:
        newCoord = this.coord.right
        break
      case KEYS.VK_S:
      case KEYS.VK_DOWN:
        newCoord = this.coord.down
        break
      case KEYS.VK_Q:
      case KEYS.VK_LEFT:
        newCoord = this.coord.left
        break

      // Rotations, freezing, activation
      case KEYS.VK_A:
        this.cell.rotate(-this.cell.element.rotationAngle)
        break
      case KEYS.VK_E:
      case KEYS.VK_R:
        this.cell.rotate(this.cell.element.rotationAngle)
        break
      case KEYS.VK_F:
        this.cell.toggleFreeze()
        break
      case KEYS.VK_CONTROL:
        this.cell.toggleActive()
        break

      // Save JSON file with level
      case KEYS.VK_F1:
        const json = this.level.exportLevel()
        const blob = new Blob([JSON.stringify(json)], {
          type: "text/plain;charset=utf-8"
        })
        FileSaver.saveAs(blob, "level.json")
        break

      // Move all board elements
      case KEYS.VK_NUMPAD8:
        this.level.grid.moveAll(90)
        break
      case KEYS.VK_NUMPAD2:
        this.level.grid.moveAll(270)
        break
      case KEYS.VK_NUMPAD4:
        this.level.grid.moveAll(180)
        break
      case KEYS.VK_NUMPAD6:
        this.level.grid.moveAll(0)
        break

      // Elements
      // Cycle through elements in group
      case KEYS.VK_QUOTE:
      case KEYS.VK_0:
        this.cycleNext(Group.Basic)
        break
      case KEYS.VK_1:
        this.cycleNext(Group.Source)
        break
      case KEYS.VK_2:
        this.cycleNext(Group.Direction)
        break
      case KEYS.VK_3:
        this.cycleNext(Group.Absorption)
        break
      case KEYS.VK_4:
        this.cycleNext(Group.Polarization)
        break
      case KEYS.VK_5:
        this.cycleNext(Group.Phase)
        break
      case KEYS.VK_DELETE:
        this.cell.element = Element.fromName(Elem.Void)
        this.cell.frozen = false
        this.cell.active = false
        break
      default:
        break
    }
    // Check that player is in game grid borders
    if (this.level.grid.includes(newCoord)) {
      this.coord = newCoord
      validInput = true
    }
    return validInput
  }

  toString(): string {
    return `Player ${this.coord.toString()}`
  }
}
