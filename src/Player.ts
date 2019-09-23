import { KEYS, DIRS } from "rot-js"
import { Glyph } from "./Glyph"
import { Actor, ActorType } from "./Actor"
import InputUtility from "./InputUtility"
import Coord from "./Coord"
import Game from "./Game"

export default class Player implements Actor {
    glyph: Glyph
    type: ActorType
    private keyMap: { [key: number]: number }
    private game: Game
    public coord: Coord

    constructor(game: Game, coord: Coord) {
        this.glyph = new Glyph("@", "#ff0")
        this.type = ActorType.Player
        this.keyMap = {}
        this.keyMap[KEYS.VK_NUMPAD8] = 0 // up
        this.keyMap[KEYS.VK_NUMPAD9] = 1
        this.keyMap[KEYS.VK_NUMPAD6] = 2 // right
        this.keyMap[KEYS.VK_NUMPAD3] = 3
        this.keyMap[KEYS.VK_NUMPAD2] = 4 // down
        this.keyMap[KEYS.VK_NUMPAD1] = 5
        this.keyMap[KEYS.VK_NUMPAD4] = 6 // left
        this.keyMap[KEYS.VK_NUMPAD7] = 7
        this.game = game
        this.coord = coord
    }

    act(): Promise<any> {
        return InputUtility.waitForInput(this.handleInput.bind(this))
    }

    private handleInput(event: KeyboardEvent): boolean {
        let validInput = false
        const code = event.keyCode
        if (code in this.keyMap) {
            const diff = DIRS[8][this.keyMap[code]]
            const newPoint = new Coord(this.coord.x + diff[0], this.coord.y + diff[1])
            this.coord = newPoint
            validInput = true
        } else if (code === KEYS.VK_RETURN || code === KEYS.VK_SPACE) {
            const coord = new Coord(this.coord.x, this.coord.y)
            this.game.grid.get(coord)
            validInput = true
        } else {
            validInput = code === KEYS.VK_NUMPAD5 // Wait a turn
        }
        return validInput
    }
}