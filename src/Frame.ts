// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Particles are [coord, direction]
// Exit conditions
// - All goals done
// - Not enough intensity
// - No more particles
import Coord from "./Coord";
import Cell from "./Cell";
import Grid from "./Grid";
import Level, { LevelInterface } from "./Level";
import Particle, { ParticleInterface } from "./Particle";
import Goal from "./Goal";
import Hint from "./Hint";
import * as qt from "quantum-tensors";

export interface FrameInterface {
  level: LevelInterface;
  step: number;
  classical: ParticleInterface[];
  quantum: ParticleInterface[];
  end: boolean;
}

export interface Qparticle {
  x: number;
  y: number;
  direction: number;
  are: number;
  aim: number;
  bre: number;
  bim: number;
}

export default class Frame {
  level: Level;
  step: number;
  classical: Particle[];
  quantum: Particle[];
  end: boolean;

  constructor(
    level: Level,
    step = 0,
    classical: Particle[] = [],
    quantum: Particle[] = [],
    end = false
  ) {
    this.level = level;
    this.step = step;
    this.classical = classical;
    this.quantum = quantum;
    this.end = end;
  }

  /**
   * Compute next quantum frame
   * @returns Particle[]
   */
  nextQuantum(): Particle[] {
    // Move
    this.level.state.propagatePhotons();
    console.debug("quantum", this.level.state.vector.toString());
    // Act
    const operations: [number, number, qt.Operator][] = this.grid.operatorList;
    // Debug
    this.level.state.actOnSinglePhotons(operations);
    console.debug(this.level.state.vector.toString());

    return this.level.state
      .aggregatePolarization()
      .map((qParticle: Qparticle) => {
        const x = qParticle.x;
        const y = qParticle.y;
        const direction = qParticle.direction;
        const a = qt.Cx(qParticle.are, qParticle.aim);
        const b = qt.Cx(qParticle.bre, qParticle.bim);
        const coord = new Coord(y, x);
        return new Particle(coord, direction, 0, 0, a, b);
      });
  }

  /**
   * Compute next classical and quantum frame
   * @returns Frame
   */
  next(): Frame {
    const classical: Particle[] = [];
    const quantum: Particle[] = [];

    // Initialize photons from grid
    if (this.step === 0) {
      this.grid.lasers.cellList.forEach(laser => {
        // Classical code
        classical.push(laser.fire());
        // Quantum code
        this.level.state.addPhotonIndicator(
          laser.coord.x,
          laser.coord.y,
          laser.ascii,
          "V"
        );
      });
      return new Frame(this.level, this.step + 1, classical, quantum, this.end);

      // Compute frames
    } else {
      const quantum = this.nextQuantum();
      const classical = this.nextClassical();
      return new Frame(this.level, this.step + 1, classical, quantum, this.end);
    }
  }

  nextClassical(): Particle[] {
    return [];
  }

  // Overriden method
  toString(): string {
    let result = `\n--- ${this.victory ? "VICTORY" : "IN PROGRESS"} --- Step #${
      this.step
    } with ${this.classical.length} active particles.\n`;
    result += "\nClassical: ";
    result += Particle.manyToString(this.classical);
    result += "\nQuantum: ";
    result += Particle.manyToString(this.quantum);
    result += "\n";
    result += `${this.level.goals.length} active goals...\n`;
    this.level.goals.map(goal => {
      result += `- ${goal.toString()}\n`;
    });
    return result;
  }

  // Export frame interface
  exportFrame(): FrameInterface {
    return {
      level: this.level.exportLevel(),
      step: this.step,
      classical: this.classical.map(particle => particle.exportParticle()),
      quantum: this.quantum.map(particle => particle.exportParticle()),
      end: this.end
    };
  }

  // Convenient getters
  get grid(): Grid {
    return this.level.grid;
  }
  get cells(): Cell[] {
    return this.grid.cells;
  }
  get lasers(): Cell[] {
    return this.grid.lasers.cellList;
  }
  get activeLasers(): Cell[] {
    return this.grid.lasers.active.cellList;
  }
  get goals(): Goal[] {
    return this.level.goals;
  }
  get hints(): Hint[] {
    return this.level.hints;
  }
  get completedGoals(): Goal[] {
    return this.level.goals.filter(goal => {
      return goal.completed;
    });
  }
  get victory(): boolean {
    return this.completedGoals.length === this.goals.length;
  }
}
