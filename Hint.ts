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
    active: boolean

    constructor(
        coord: Coord,
        width: number,
        text: string,
        direction: string,
        active: boolean
    ) {
        this.coord = coord
        this.width = width
        this.text = text
        this.direction = direction
        this.active = active
    }

    // Display informations
    display() {
        console.log(`Hint: ${this.text} at coord: ${this.coord} is ${this.active ? "active" : "closed"}`)
    }

    // export JSON
    exportJSON() {
        return JSON.stringify(this)
    }
}