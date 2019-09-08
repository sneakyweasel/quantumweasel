// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.
// Goal should extend Cell or should extend Coord

import Cell from "./Cell"

export default class Goal {
    cell: Cell          // detector cell
    threshold: number
    value: number
    completed: boolean

    constructor(
        cell: Cell,
        threshold: number,
        value: number = 0,
        completed: boolean = false
    ) {
        this.cell = cell
        this.threshold = threshold
        this.value = value
        this.completed = completed
    }

    // check if the detector has reached its threshold
    check() {
        return (this.value >= this.threshold)
    }

    percentage() {
        return (this.value / this.threshold) * 100
    }

    toString() {
        return `{#GOAL ${this.completed ? "COMPLETE " : " "}@ ${this.cell.coord.toString()} is ${this.value} / ${this.threshold}} (${this.percentage()}%)`
    }

    // Format active particle list
    static manyToString(goals: Goal[]) {
        let result = `${goals.length} active particles...\n`
        goals.forEach((goal) => {
            result += `- ${goal.toString()}\n`
        })
        return result
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