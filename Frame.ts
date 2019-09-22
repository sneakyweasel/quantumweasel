// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Pointers are [coord, direction]

// Exit conditions
// - All goals done
// - Not enough intensity
// - No more particles

// TODO: Check that the required conditions are met for starting the sim (begin - end)

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
    end: boolean

    constructor(level: Level, step: number = 0, pointers: Pointer[] = [], end: boolean = false) {
        this.step = step
        this.level = level
        this.pointers = pointers
        this.end = end
        // Initiate simulation with frame #0 and extract emitters
        if (step === 0) {
            this.lasers.forEach((laser) => {
                this.pointers.push(laser.fire())
            })
        }
    }

    // Convenient getters
    get grid(): Grid { return this.level.grid }
    get cells(): Cell[] { return this.level.grid.cells }
    get lasers(): Cell[] { return this.level.grid.lasers }
    get goals(): Goal[] { return this.level.goals }
    get completedGoals(): Goal[] { return this.level.goals.filter((goal) => { return goal.completed }) }
    get victory(): Boolean { return this.completedGoals.length === this.goals.length }

    // Compute the next frame by computing the next positions of different pointers
    next(): Frame {
        // Absorbers
        const detectors = this.grid.detectors
        const rocks = this.grid.rocks
        const mines = this.grid.mines
        const filters = this.grid.absorbers
        const absorbers: Cell[] = detectors.concat(rocks, mines, filters)
        // Reflectors
        const mirrors = this.grid.mirrors
        const beamsplitters = this.grid.beamsplitters
        // Phase shifters
        const phaseincs = this.grid.phaseincs
        const phasedecs = this.grid.phasedecs
        const phaseshifters: Cell[] = phaseincs.concat(phasedecs)

        // Loop through pointers
        this.pointers.forEach((pointer) => {
            pointer.next()
            if (!this.grid.includes(pointer.coord)) {
                pointer.intensity = 0
            }

            // Absorption
            absorbers.forEach((absorber: Cell) => {
                if (pointer.on(absorber)) {
                    pointer.intensity *= absorber.element.absorption
                }
            })

            // Reflection
            mirrors.forEach((mirror: Cell) => {
                if (pointer.on(mirror)) {
                    pointer.direction = (2 * mirror.rotation - pointer.direction + 360) % 360
                }
            })
            beamsplitters.forEach((beamsplitter: Cell) => {
                if (pointer.on(beamsplitter)) {
                    // Dim the current pointer intensity
                    pointer.intensity /= 2
                    // Reflecting pointer (create new reflected faded pointer)
                    const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360
                    this.pointers.push(new Pointer(pointer.coord, direction, pointer.intensity))
                }
            })

            // Phase shifters
            phaseshifters.forEach((phaseshifter: Cell) => {
                if (pointer.on(phaseshifter)) {
                    pointer.phase = (pointer.phase + phaseshifter.element.phase) % 1
                }
            })

            // Collision goals
            // FIXME: Make a shorthand for goals
            this.goals.forEach((goal) => {
                if (goal.coord.equal(pointer.coord)) {
                    goal.value += pointer.intensity * 100
                    pointer.intensity = 0
                }
            })
        })

        // Erase null intensity pointers
        this.pointers = this.pointers.filter((pointer) => {
            return pointer.intensity > 0
        })

        // Victory conditions
        if (this.victory) {
            this.level.completed = true
            this.end = true
        }
        // Defeat conditions
        if (this.pointers.length === 0) {
            this.level.completed = false
            this.end = true
        }

        return new Frame(this.level, this.step + 1, this.pointers, this.end)
    }

    // Create a laser path from the emitters
    laserPath(pointer: Pointer): Coord[] {
        const repeat = this.grid.distanceToEscape(pointer)
        const clone = _.cloneDeep(pointer)
        return clone.next(repeat).path
    }

    // Overriden method
    // Find a way to clear the screen
    // process.stdout.write('\033c')
    toString() {
        let result = `\n--- ${this.victory ? "VICTORY" : "IN PROGRESS"} --- Step #${this.step} with ${this.pointers.length} active pointers.\n`
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