// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.

import Cell from "./Cell"

export default class Goal {
    cell: Cell          // detector cell
    threshold: number
    value: number

    constructor(
        cell: Cell,
        threshold: number,
        value: number
    ) {
        this.cell = cell
        this.threshold = threshold
        this.value = value
    }

    // check if the detector has reached its threshold
    check() {
        return (this.value >= this.threshold)
    }

    toString() {
        return `GOAL @ ${this.cell.coord.toString} is ${this.threshold}`
    }

    // Display detector informations
    display() {
        console.log(`Goal of detector: ${JSON.stringify(this.cell)} is ${this.threshold}, it is currently at ${this.value}`)
    }

    // export JSON
    exportJSON() {
        return JSON.stringify(this)
    }
}