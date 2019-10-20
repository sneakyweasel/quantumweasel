// TODO: Don't return whole level at each frame
// TODO: Frame could extend Level class
import Coord from "./Coord"
import Level, { LevelInterface } from "./Level"
import Particle, { ParticleInterface, Qparticle } from "./Particle"
import Goal from "./Goal"
import * as qt from "quantum-tensors"

/**
 * FRAME INTERFACE
 * time-frame using only primitives
 */
export interface FrameInterface {
  level: LevelInterface
  step: number
  classical: ParticleInterface[]
  quantum: ParticleInterface[]
  end: boolean
}

/**
 * TIME FRAME CLASS
 * Allow time-travel debugging with step by step inc/dec of time
 * Generate a new frame for every move of the particle
 * Particles are [coord, direction, CxA, CxB]
 */
export default class Frame {
  level: Level
  step: number
  classical: Particle[]
  quantum: Particle[]
  end: boolean

  constructor(level: Level, step = 0, classical: Particle[] = [], quantum: Particle[] = [], end = false) {
    this.level = level
    this.step = step
    this.classical = classical
    this.quantum = quantum
    this.end = end
  }

  /**
   * Compute next classical and quantum frame
   * @returns Frame
   */
  next(): Frame {
    const classical: Particle[] = []
    const quantum: Particle[] = []

    // Initialize photons from grid
    if (this.step === 0) {
      this.level.grid.cluster.lasers.cells.forEach(laser => {
        console.log(laser.toString())
        // Classical code
        classical.push(laser.fire())
        // Quantum code
        this.level.state.addPhotonIndicator(laser.coord.x, laser.coord.y, laser.ascii, "V")
        console.debug("quantum", this.level.state.vector.toString())
      })
      return new Frame(this.level, 1, classical, quantum, false)

      // Compute frames
    } else {
      const quantum = this.nextQuantum()
      const classical = this.nextClassical()
      return new Frame(this.level, this.step + 1, classical, quantum, this.end)
    }
  }

  /**
   * Compute next quantum frame
   * @returns Particle[]
   */
  nextQuantum(): Particle[] {
    // Move
    this.level.state.propagatePhotons()
    console.debug("quantum", this.level.state.vector.toString())
    // Act
    const operations: [number, number, qt.Operator][] = this.level.grid.operatorList
    console.log("OPERATIONS: " + operations)
    // Debug
    this.level.state.actOnSinglePhotons(operations)
    console.debug(this.level.state.vector.toString())

    return this.level.state.aggregatePolarization().map((qParticle: Qparticle) => {
      const x = qParticle.x
      const y = qParticle.y
      const direction = qParticle.direction
      const are = qParticle.are
      const aim = qParticle.aim
      const bre = qParticle.bre
      const bim = qParticle.bim
      const coord = new Coord(y, x)
      return new Particle(coord, direction, 0, 0, are, aim, bre, bim)
    })
  }

  /**
   * Compute next classical frame
   * @returns Particle[]
   */
  nextClassical(): Particle[] {
    return []
  }

  /**
   * String representing the state
   * @returns string
   */
  toString(): string {
    let result = `\n--- STEP ${this.step} ${this.victory ? "VICTORY" : "IN PROGRESS"} --- `
    result += `\nClassical (${this.classical.length} particles): `
    result += Particle.manyToString(this.classical)
    result += `\nQuantum: (${this.quantum.length} particles)`
    result += Particle.manyToString(this.quantum)
    result += "\n"
    result += `${this.level.goals.length} active goals...\n`
    this.level.goals.map(goal => {
      result += `- ${goal.toString()}\n`
    })
    return result
  }

  /**
   * Export frame into primitives
   * @returns FrameInterface
   */
  exportFrame(): FrameInterface {
    return {
      level: this.level.exportLevel(),
      step: this.step,
      classical: this.classical.map(particle => particle.exportParticle()),
      quantum: this.quantum.map(particle => particle.exportParticle()),
      end: this.end
    }
  }

  /**
   * Completed goals for frontend display
   */
  get completedGoals(): Goal[] {
    return this.level.goals.filter(goal => {
      return goal.completed
    })
  }

  /**
   * Are all the goals completed
   */
  get victory(): boolean {
    return this.completedGoals.length === this.level.goals.length
  }
}
