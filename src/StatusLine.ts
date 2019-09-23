import { padRight } from "./Helpers"
import Game from "./Game"
import Coord from "./Coord"

export default class StatusLine {
    turns: number
    pineapples: number
    boxes: number
    maxBoxes: number
    private game: Game
    private coord: Coord
    private maxWidth: number

    constructor(
        game: Game,
        coord: Coord,
        maxWidth: number,
        // tslint:disable-next-line: no-any
        params: any = {}
    ) {
        this.game = game
        this.coord = coord
        this.maxWidth = maxWidth
        this.turns = params.turns || 0
    }

    reset(): void {
        this.turns = 0
    }

    draw(): void {
        const text = `turns: ${padRight(this.turns.toString(), 6)} player: ${padRight(this.game.playerCoord.toString(), 6)}`
        this.game.drawText(this.coord, text, this.maxWidth)
    }
}