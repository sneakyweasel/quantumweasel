// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Pointers are [coord, direction]

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
	pointers: Particle[];
	state: Photons;
	end: boolean;

	constructor(
		level: Level,
		step = 0,
		pointers: Particle[] = [],
		state = new Photons(level.grid.cols, level.grid.rows),
		end = false
	) {
		// new Photons(level.grid.cols, level.grid.rows);
		this.level = level;
		this.step = step;
		this.pointers = pointers;
		this.end = end;
		// Initiate simulation with frame #0 and extract emitters
		if (step === 0) {
			this.activeLasers.forEach(laser => {
				if (laser.active) {
					// Classical code
					this.pointers.push(new Particle(laser.coord, laser.rotation, 1, 0));

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

	// Compute the next frame by computing the next positions of different pointers
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

		// Loop through pointers
		this.pointers.forEach(pointer => {
			pointer.next();
			if (!this.grid.includes(pointer.coord)) {
				pointer.intensity = 0;
			}

			// Absorption
			absorbers.forEach((absorber: Cell) => {
				if (pointer.on(absorber)) {
					pointer.intensity *= absorber.element.absorption;
				}
			});

			// Reflection
			mirrors.forEach((mirror: Cell) => {
				if (pointer.on(mirror)) {
					pointer.direction = (2 * mirror.rotation - pointer.direction + 360) % 360;
				}
			});
			beamsplitters.forEach((beamsplitter: Cell) => {
				if (pointer.on(beamsplitter)) {
					// Dim the current pointer intensity
					pointer.intensity /= 2;
					// Reflecting pointer (create new reflected faded pointer)
					const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360;
					this.pointers.push(new Particle(pointer.coord, direction, pointer.intensity));
				}
			});

			// Phase shifters
			phaseshifters.forEach((phaseshifter: Cell) => {
				if (pointer.on(phaseshifter)) {
					pointer.phase = (pointer.phase + phaseshifter.element.phase) % 1;
				}
			});

			// Collision goals
			// FIXME: Make a shorthand for goals
			this.goals.forEach(goal => {
				if (goal.coord.equal(pointer.coord)) {
					goal.value += pointer.intensity * 100;
					pointer.intensity = 0;
				}
			});
		});

		// Erase null intensity pointers
		this.pointers = this.pointers.filter(pointer => {
			return pointer.intensity > 0;
		});

		// Victory conditions
		if (this.victory) {
			this.level.completed = true;
			this.end = true;
		}
		// Defeat conditions
		if (this.pointers.length === 0) {
			this.level.completed = false;
			this.end = true;
		}

		return new Frame(this.level, this.step + 1, this.pointers, this.state, this.end);
	}

	// Overriden method
	toString(): string {
		let result = `\n--- ${this.victory ? "VICTORY" : "IN PROGRESS"} --- Step #${this.step} with ${
			this.pointers.length
		} active pointers.\n`;
		result += "\n";
		result += Particle.manyToString(this.pointers);
		result += "\n";
		result += Goal.manyToString(this.level.goals);
		return result;
	}
}
