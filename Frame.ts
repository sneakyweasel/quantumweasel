// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Pointers are [coord, direction]

// Exit conditions
// - All goals done
// - Not enough intensity
// - No more particles

import * as _ from "lodash"
import Pointer from "./Pointer"
import Goal from "./Goal"
import Level from "./Level"

export default class Frame {
    level: Level
    step: number
    pointers: Pointer[]

    // TODO: Check that the required conditions are met for starting the sim (begin - end)
    constructor(level: Level, step: number = 0, pointers: Pointer[] = []) {
        this.step = step
        this.level = level
        this.pointers = pointers

        // Initiate simulation with frame #0 and extract emitters
        if (step === 0) {
            const laserCells = this.level.grid.filteredBy("laser")
            laserCells.forEach((laser) => {
                this.pointers.push(new Pointer(laser.coord, laser.rotation, 1))
            })
            console.log(`Initialize simulation for ${level.name}...`)
            console.log(Pointer.manyToString(this.pointers))
        }
    }

    // Add the pointers to their next cells
    // TODO: post compute collisions
    // TODO: compute activation of elements
    next(): Frame {
        const grid = this.level.grid
        let pointers: Pointer[] = []
        this.pointers.forEach((pointer) => {
            // Compute individual pointer update
            const nxtPointer = pointer.next()
            if (grid.isCoordInsideGrid(nxtPointer.coord)) {
                grid.get(nxtPointer.coord).pointers.push(nxtPointer)
                pointers.push(nxtPointer)
            } else {
                console.log(`Pointer escaped the grid...`)
            }
        })

        // Process goals
        this.level.goals.forEach((goal) => {
            this.pointers.forEach((pointer) => {
                if (_.isEqual(goal.cell.coord.toArray(), pointer.coord.toArray())) {
                    console.log("DETECTED SUCCESS")
                    goal.value -= pointer.intensity
                    pointer.intensity = 0
                    if (goal.threshold >= goal.value) {
                        goal.completed = true
                    }
                }
            })
        })

        // Erase null intensity pointers
        pointers = pointers.filter((pointer) => {
           return pointer.intensity > 0
        })

        // Check if goals are achieved
        const completedGoals = this.level.goals.filter((goal) => { goal.completed }).length
        if (completedGoals === this.level.goals.length) {
            console.log("CONGRATULATIONS WEASEL!!!!1!")
        }

        return new Frame(this.level, this.step + 1, pointers)
    }

    // Overriden method
    // Find a way to clear the screen
    // process.stdout.write('\033c')
    toString() {
        let result = `Step #${this.step} with ${this.pointers.length} active pointers.\n`
        result += Pointer.manyToString(this.pointers)
        result += Goal.manyToString(this.level.goals)
        return result
    }

    // Minimal display of current frame
    minimalDisplay() {
        console.log(`--- Frame #${this.step} of ${this.level.name} ---`)
        console.log(this.level.grid.asciiRender(this.pointers))
        console.log(this.toString())
    }

    // Display current frame
    display() {
        console.log(`--- Frame #${this.step} of ${this.level.name} ---`)
        console.log(this.level.toString())
        console.log(this.toString())
    }
}