// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Pointers are [coord, direction]

// Exit conditions
// - All goals done
// - Not enough intensity
// - No more particles

import * as _ from "lodash"
import Cell from "./Cell"
import Goal from "./Goal"
import Grid from "./Grid"
import Level from "./Level"
import Pointer from "./Pointer"
import Coord from "./Coord"

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
            console.log(`\nInitialize simulation for ${level.name}...`)
            console.log(Pointer.manyToString(this.pointers))
        }
    }

    // Convenient getters
    get grid(): Grid { return this.level.grid }
    get cells(): Cell[] { return this.level.grid.cells }
    get goals(): Goal[] { return this.level.goals }
    get completedGoals(): Goal[] { return this.level.goals.filter((goal) => { return goal.completed }) }

    // Compute the next frame
    // Get next positions of different pointers
    // Set intensity to 0 if it exits the grid
    next(): Frame {
        this.pointers.forEach((pointer) => {
            const nxt = pointer.next()
            if (!this.grid.includes(nxt.coord)) {
                nxt.intensity = 0
            }
        })

        // Absorbers
        const detectors = this.grid.detectors
        const rocks = this.grid.rocks
        const mines = this.grid.mines
        const filters = this.grid.absorbers
        const absorbers: Cell[] = detectors.concat(rocks, mines, filters)
        absorbers.forEach((absorber: Cell) => {
            this.pointers.forEach((pointer) => {
                if (absorber.coord.equal(pointer.coord)) {
                    console.log(`\n${pointer.toString()} hitting an ${absorber.element.name} with ${absorber.element.absorption} % absorption.`)
                    pointer.intensity *= absorber.element.absorption / 100
                }
            })
        })

        // Reflectors
        const mirrors = this.grid.mirrors
        mirrors.forEach((mirror: Cell) => {
            this.pointers.forEach((pointer) => {
                if (mirror.coord.equal(pointer.coord)) {
                    pointer.direction = (2 * mirror.rotation - pointer.direction + 360) % 360
                }
            })
        })
        const beamsplitters = this.grid.beamsplitters
        beamsplitters.forEach((beamsplitter: Cell) => {
            this.pointers.forEach((pointer) => {
                if (beamsplitter.coord.equal(pointer.coord)) {
                    // Dim the current pointer intensity
                    pointer.intensity /= 2
                    // Reflecting pointer (create new reflected faded pointer)
                    const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360
                    this.pointers.push(new Pointer(pointer.coord, direction, pointer.intensity))
                }
            })
        })

        // Collision goals
        this.level.goals.forEach((goal) => {
            this.pointers.forEach((pointer) => {
                if (goal.coord.equal(pointer.coord)) {
                    goal.value += pointer.intensity * 100
                    pointer.intensity = 0
                    if (goal.threshold >= goal.value) {
                        goal.completed = true
                    }
                }
            })
        })

        // Check if goals are achieved
        if (this.completedGoals.length === this.level.goals.length) {
            this.level.completed = true
        }

        // Erase null intensity pointers
        this.pointers = this.pointers.filter((pointer) => {
            return pointer.intensity > 0
        })

        return new Frame(this.level, this.step + 1, this.pointers)
    }

    laserPath(pointer: Pointer): Coord[] {
        const repeat = pointer.coord.distanceToExit(pointer.direction, this.grid.rows, this.grid.cols)
        return pointer.next(repeat).path
    }

    // Overriden method
    // Find a way to clear the screen
    // process.stdout.write('\033c')
    toString() {
        let result = `\nStep #${this.step} with ${this.pointers.length} active pointers.\n`
        result += "\n"
        result += Pointer.manyToString(this.pointers)
        result += "\n"
        result += Goal.manyToString(this.level.goals)
        return result
    }

    // Minimal display of current frame
    minimalDisplay() {
        if (this.level.completed) {
            console.log(`---------------------------`)
            console.log(`--CONGRATULATIONS WEASEL---`)
            console.log(`--MISSION ACCOMPLISHED!1!--`)
            console.log(`----- LHC DESTROYED -------`)
            console.log(`----------->>>>>-----------`)
            console.log(`---------------------------`)
        } else {
            console.log(`--- Frame #${this.step} of ${this.level.name} ---`)
            console.log(this.level.grid.asciiRender(this.pointers))
            console.log(this.toString())
        }
    }

    // Display current frame
    display() {
        console.log(`--- Frame #${this.step} of ${this.level.name} ---`)
        console.log(this.level.toString())
        console.log(this.toString())
    }
}