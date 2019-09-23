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
        text: string,
        width: number = 5,
        direction: string = "left",
        active: boolean = true
    ) {
        this.coord = coord
        this.width = width
        this.text = text
        this.direction = direction
        this.active = active
    }

    // override toString() method
    toString() {
        return `{#HINT ${this.text} @ ${this.coord.toString()}}`
    }

    // Display informations
    display() {
        console.log(`Hint: ${this.text} at coord: ${this.coord} is ${this.active ? "active" : "closed"}`)
    }

    // export JSON
    exportJSON() {
        return JSON.stringify(this)
    }

    // Import JSON
    static importJSON(jsonHints: Array<{ x: number, y: number, message: string }>): Hint[] {
        const hints: Hint[] = []
        jsonHints.forEach((hint) => {
            const coord = new Coord(hint.x, hint.y)
            hints.push(new Hint(coord, hint.message))
        })
        return hints
    }
}