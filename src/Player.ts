import { KEYS } from "rot-js"
import { Glyph } from "./Glyph"
import { Actor, ActorType } from "./Actor"
import InputUtility from "./InputUtility"
import Coord from "./Coord"
import Cell from "./Cell"
import Game from "./Game"
// import Grid from "./Grid"

export default class Player implements Actor {
    glyph: Glyph
    type: ActorType
    private keyMap: { [key: number]: number }
    private game: Game
    public coord: Coord

    constructor(game: Game, coord: Coord) {
        this.glyph = new Glyph("@", "#ff0", '#ff00ff')
        this.type = ActorType.Player
        this.keyMap = {}
        // Arrows
        this.keyMap[KEYS.VK_UP] = 0
        this.keyMap[KEYS.VK_RIGHT] = 1
        this.keyMap[KEYS.VK_DOWN] = 2
        this.keyMap[KEYS.VK_LEFT] = 3
        // Rotate
        this.keyMap[KEYS.VK_A] = 4
        this.keyMap[KEYS.VK_E] = 5
        // Control time flow
        this.keyMap[KEYS.VK_R] = 6
        this.keyMap[KEYS.VK_F] = 7

        this.game = game
        this.coord = coord
    }

    // tslint:disable-next-line: no-any
    act(): Promise<any> {
        return InputUtility.waitForInput(this.handleInput.bind(this))
    }

    private handleInput(event: KeyboardEvent): boolean {
        let validInput = false
        const code = event.keyCode
        console.log(this.keyMap[code])
        // Direction
        const currentCell: Cell = this.game.grid.get(this.coord)
        let newCoord: Coord = this.coord
        currentCell.display()

        switch (this.keyMap[code]) {
            case 0:
                newCoord = this.coord.top
                break
            case 1:
                newCoord = this.coord.right
                break
            case 2:
                newCoord = this.coord.bottom
                break
            case 3:
                newCoord = this.coord.left
                break
            case 4:
                currentCell.display()
                currentCell.rotateCW
                currentCell.display()
                break
            case 5:
                currentCell.display()
                currentCell.rotateCCW
                currentCell.display()
                break
            case 6:
                // Display next frame
                break
            case 7:
                // Display previous frame
                break
            default:
                break
        }
        if (this.game.grid.includes(newCoord)) {
            this.coord = newCoord
            validInput = true
        }
        return validInput
    }
}