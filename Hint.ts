// HINT CLASS
// Structure extracted for v1: https://github.com/stared/quantum-game/blob/master/data/levels_game.json

import Coord from "./Coord"

// TODO: Check if an uid is needed for hints
// TODO: Check what triangleI means
export default class Hint {
    coord: Coord
    width: number
    text: string
    direction: string

    constructor(
        coord: Coord,
        width: number,
        text: string,
        direction: string
    ) {
        this.coord = coord
        this.width = width
        this.text = text
        this.direction = direction
    }

    display() {
        console.log(`Hint`)
    }
}