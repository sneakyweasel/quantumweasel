// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.
// Goal should extend Cell or should extend Coord

import Coord from "./Coord"

export default class Goal extends Coord {
    coord: Coord
    threshold: number
    value: number

    constructor(
        coord: Coord,
        threshold: number,
        value: number = 0
    ) {
        super(coord.y, coord.x)
        this.coord = coord
        this.threshold = threshold
        this.value = value
    }

    get completed(): boolean {
        return this.threshold > this.value
    }

    // check if the detector has reached its threshold
    check() {
        return (this.value >= this.threshold)
    }

    percentage() {
        return (this.value / this.threshold) * 100
    }

    toString() {
        return `{#Goal ${this.completed ? "completed " : " "}@ ${this.coord.toString()} is ${this.value} / ${this.threshold}} (${this.percentage()}%)`
    }

    // Format active particle list
    static manyToString(goals: Goal[]) {
        let result = `${goals.length} active goals...\n`
        goals.forEach((goal) => {
            result += `- ${goal.toString()}\n`
        })
        return result
    }

    // Display detector informations
    display() {
        console.log(`Goal of detector: ${JSON.stringify(this.coord)} is ${this.threshold}, it is currently at ${this.value}`)
    }

    // Import JSON
    static importJSON(jsonGoals: Array<{ x: number, y: number, threshold: number }>): Goal[] {
        const goals: Goal[] = []
        jsonGoals.forEach((goal) => {
            const coord = new Coord(goal.y, goal.x)
            goals.push(new Goal(coord, goal.threshold))
        })
        return goals
    }

    // export JSON
    // https://stackoverflow.com/questions/49929109/trying-to-override-and-extend-method-signature-in-child-class-in-typescript
    // FIXME: extension breaks polymorphism
    // exportJSON() {
    //     return JSON.stringify(this)
    // }
}