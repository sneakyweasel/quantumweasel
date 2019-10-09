// PARTICLE CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
// FIXME: Duplicate between path and coord
// FIXME: Class needs rework
import Coord from "./Coord";
import Cell from "./Cell";
import { toPercent } from "./Helpers";

export interface ParticleInterface {
	coord: Coord;
	direction: number;
	intensity: number;
	phase: number;
}

export default class Particle extends Coord {
	coord: Coord;
	direction: number;
	intensity: number;
	phase: number;
	path: ParticleInterface[];

	constructor(
		coord: Coord,
		direction: number,
		intensity = 1,
		phase = 0,
		path: ParticleInterface[] = [{ coord: coord, direction: direction, intensity: intensity, phase: phase }]
	) {
		super(coord.y, coord.x);
		this.coord = coord;
		this.direction = direction;
		this.intensity = intensity;
		this.phase = phase;
		this.path = path;
	}

	// Origin of the particle
	get origin(): Coord {
		return this.path[0].coord;
	}

	// Check is a particle has any intensity
	get alive(): boolean {
		return this.intensity > 0;
	}

	// Deep clone of the particle
	get clone(): Particle {
		return new Particle(this.coord, this.direction, this.intensity, this.phase);
	}

	// Vertical or horizontal orientation
	get isVertical(): boolean {
		return this.direction === 0 || this.direction === 180;
	}

	// Particle is on a specific cell shorthand
	on(cell: Cell): boolean {
		return this.coord.equal(cell.coord);
	}

	// Steps/distance towards exiting the grid
	stepsToExit(cols: number, rows: number): number {
		switch (this.direction % 360) {
			case 0: // TOP
				return this.y;
			case 90: // RIGHT
				return cols - this.x - 1;
			case 180: // BOTTOM
				return rows - this.y - 1;
			case 270: // LEFT
				return this.x;
			default:
				throw new Error("Something went wrong with directions...");
		}
	}

	// Compute next simulation step
	next(repeat = 1): Particle {
		// Moving CW in increment of 90°
		for (let i = 0; i < repeat; i++) {
			switch (this.direction % 360) {
				case 0:
					this.coord = this.coord.top;
					break;
				case 90:
					this.coord = this.coord.right;
					break;
				case 180:
					this.coord = this.coord.bottom;
					break;
				case 270:
					this.coord = this.coord.left;
					break;
				default:
					throw Error(`Something went wrong with particles and direction.`);
			}
			// Update coord with latest computed path coordinates
			this.path.push({
				coord: this.coord,
				direction: this.direction,
				intensity: this.intensity,
				phase: this.phase
			});
		}
		return this;
	}

	// Export JSON object
	// FIXME: Rework extends and JSON export
	exportParticle(): ParticleInterface {
		return {
			coord: this.coord,
			direction: this.direction,
			intensity: this.intensity,
			phase: this.phase
		};
	}

	toString(): string {
		return `Laser at ${this.coord.toString()} going ${this.direction} with ${toPercent(this.intensity)} and ${
			this.phase
		} phase shift\n`;
	}

	// Import JSON object
	static importParticle(json: {
		x: number;
		y: number;
		direction: number;
		intensity: number;
		phase: number;
		path: { y: number; x: number }[];
	}): Particle {
		const coord = Coord.importCoord({ y: json.y, x: json.x });
		return new Particle(coord, json.direction, json.intensity, json.phase);
	}

	// USed for debugging
	static manyToString(particles: Particle[]): string {
		let result = "";
		particles.forEach(particle => {
			result += particle.toString();
		});
		return result;
	}
}
