// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Particles are [coord, direction]

// Exit conditions
// - All goals done
// - Not enough intensity
// - No more particles

import Cell from "./Cell";
import Goal from "./Goal";
import Hint from "./Hint";
import Grid from "./Grid";
import Level from "./Level";
import Particle from "./Particle";
import { displayText } from "./Helpers";
// Quantum
import { Photons } from "quantum-tensors";

export default class Frame {
	level: Level;
	step: number;
	particles: Particle[];
	state: Photons;
	end: boolean;

	constructor(
		level: Level,
		step = 0,
		particles: Particle[] = [],
		state = new Photons(level.grid.cols, level.grid.rows),
		end = false
	) {
		// new Photons(level.grid.cols, level.grid.rows);
		this.level = level;
		this.step = step;
		this.particles = particles;
		this.end = end;
		// Initiate simulation with frame #0 and extract emitters
		if (step === 0) {
			this.activeLasers.forEach(laser => {
				if (laser.active) {
					// Classical code
					this.particles.push(new Particle(laser.coord, laser.rotation, 1, 0));

					// Quantum code
					this.state = state;
					this.state.addPhotonIndicator(laser.coord.y, laser.coord.x, laser.ascii, "V");
					displayText("quantum", this.state.vector.toString());
				}
			});
		}
	}

	// Convenient getters
	get grid(): Grid {
		return this.level.grid;
	}
	get cells(): Cell[] {
		return this.grid.cells;
	}
	get lasers(): Cell[] {
		return this.grid.lasers;
	}
	get activeLasers(): Cell[] {
		return this.grid.activeLasers;
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

	nextQuantum(): void {
	}

	// Compute the next frame by computing the next positions of different particles
	next(): Frame {
		// Absorbers
		const detectors = this.grid.detectors;
		const rocks = this.grid.rocks;
		const mines = this.grid.mines;
		const filters = this.grid.absorbers;
		const absorbers: Cell[] = detectors.concat(rocks, mines, filters);
		// Reflectors
		const mirrors = this.grid.mirrors;
		const beamsplitters = this.grid.beamsplitters;
		// Phase shifters
		const phaseincs = this.grid.phaseincs;
		const phasedecs = this.grid.phasedecs;
		const phaseshifters: Cell[] = phaseincs.concat(phasedecs);

		// Loop through particles
		this.particles.forEach(particle => {
			particle.next();
			if (!this.grid.includes(particle.coord)) {
				particle.intensity = 0;
			}

			// Absorption
			absorbers.forEach((absorber: Cell) => {
				if (particle.on(absorber)) {
					particle.intensity *= absorber.element.absorption;
				}
			});

			// Reflection
			mirrors.forEach((mirror: Cell) => {
				if (particle.on(mirror)) {
					particle.direction = (2 * mirror.rotation - particle.direction + 360) % 360;
				}
			});
			beamsplitters.forEach((beamsplitter: Cell) => {
				if (particle.on(beamsplitter)) {
					// Dim the current particle intensity
					particle.intensity /= 2;
					// Reflecting particle (create new reflected faded particle)
					const direction = (2 * beamsplitter.rotation - particle.direction + 360) % 360;
					this.particles.push(new Particle(particle.coord, direction, particle.intensity));
				}
			});

			// Phase shifters
			phaseshifters.forEach((phaseshifter: Cell) => {
				if (particle.on(phaseshifter)) {
					particle.phase = (particle.phase + phaseshifter.element.phase) % 1;
				}
			});

			// Collision goals
			// FIXME: Make a shorthand for goals
			this.goals.forEach(goal => {
				if (goal.coord.equal(particle.coord)) {
					goal.value += particle.intensity * 100;
					particle.intensity = 0;
				}
			});
		});

		// Erase null intensity particles
		this.particles = this.particles.filter(particle => {
			return particle.intensity > 0;
		});

		// Victory conditions
		if (this.victory) {
			this.level.completed = true;
			this.end = true;
		}
		// Defeat conditions
		if (this.particles.length === 0) {
			this.level.completed = false;
			this.end = true;
		}

		return new Frame(this.level, this.step + 1, this.particles, this.state, this.end);
	}

	// Overriden method
	toString(): string {
		let result = `\n--- ${this.victory ? "VICTORY" : "IN PROGRESS"} --- Step #${this.step} with ${
			this.particles.length
		} active particles.\n`;
		result += "\n";
		result += Particle.manyToString(this.particles);
		result += "\n";
		result += Goal.manyToString(this.level.goals);
		return result;
	}
}
