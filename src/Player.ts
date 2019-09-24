import { KEYS } from "rot-js"
import { Glyph } from "./Glyph"
import { Actor, ActorType } from "./Actor"
import InputUtility from "./InputUtility"
import Coord from "./Coord"
import Cell from "./Cell"
import Game from "./Game"

export default class Player implements Actor {
    glyph: Glyph
    type: ActorType
    private game: Game
    public coord: Coord

    constructor(game: Game, coord: Coord) {
        this.glyph = new Glyph("@", "#ff0", '#ff00ff')
        this.type = ActorType.Player
        this.game = game
        this.coord = coord
    }

    // Getters and setters
    get cell(): Cell { return this.game.grid.get(this.coord) }

    // tslint:disable-next-line: no-any
    act(): Promise<any> {
        return InputUtility.waitForInput(this.handleInput.bind(this))
    }

    // Offset of movement
    private handleInput(event: KeyboardEvent): boolean {
        let validInput = false
        let newCoord: Coord = this.coord
        switch (event.keyCode) {
            case KEYS.VK_Z:
                newCoord = this.coord.top
                break
            case KEYS.VK_D:
                newCoord = this.coord.right
                break
            case KEYS.VK_S:
                newCoord = this.coord.bottom
                break
            case KEYS.VK_Q:
                newCoord = this.coord.left
                break
            case KEYS.VK_A:
                this.cell.rotate(-this.cell.element.rotationAngle)
                break
            case KEYS.VK_E:
                this.cell.rotate(this.cell.element.rotationAngle)
                break
            case KEYS.VK_F:
                this.cell.toggleFreeze()
                break
            case KEYS.VK_RIGHT:
                break
            case KEYS.VK_LEFT:
                break
            default:
                break
        }
        // Check that player is in game grid borders
        if (this.game.grid.includes(newCoord)) {
            this.coord = newCoord
            validInput = true
            this.display()
        }
        return validInput
    }

    toString() {
        return `Player ${this.coord.toString()}`
    }
    display() {
        console.log(this.toString())
    }
}