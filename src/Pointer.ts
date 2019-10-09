// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
// FIXME: Duplicate between path and coord
// FIXME: Class needs rework
import Coord from "./Coord";
import Cell from "./Cell";
import { toPercent } from "./Helpers";

export interface PathPointer {
	coord: Coord;
	direction: number;
	intensity: number;
	phase: number;
}

export default class Pointer extends Coord {
	coord: Coord;
	direction: number;
	intensity: number;
	phase: number;
	path: PathPointer[];

	constructor(
		coord: Coord,
		direction: number,
		intensity = 1,
		phase = 0,
		path: PathPointer[] = [{ coord: coord, direction: direction, intensity: intensity, phase: phase }]
	) {
		super(coord.y, coord.x);
		this.coord = coord;
		this.direction = direction;
		this.intensity = intensity;
		this.phase = phase;
		this.path = path;
	}

	// Origin of the pointer
	get origin(): Coord {
		return this.path[0].coord;
	}

	// Check is a particle has any intensity
	get alive(): boolean {
		return this.intensity > 0;
	}

	// Deep clone of the pointer
	get clone(): Pointer {
		return new Pointer(this.coord, this.direction, this.intensity, this.phase);
	}

	// Vertical or horizontal orientation
	get isVertical(): boolean {
		return this.direction === 0 || this.direction === 180;
	}

	// Pointer is on a specific cell shorthand
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
	next(repeat = 1): Pointer {
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
					throw Error(`Something went wrong with pointers and direction.`);
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
	exportPointer(): PathPointer {
		return {
			coord: this.coord,
			direction: this.direction,
			intensity: this.intensity,
			phase: this.phase
		};
	}

	// Import JSON object
	static importPointer(json: {
		x: number;
		y: number;
		direction: number;
		intensity: number;
		phase: number;
		path: { y: number; x: number }[];
	}): Pointer {
		const coord = Coord.importCoord({ y: json.y, x: json.x });
		return new Pointer(coord, json.direction, json.intensity, json.phase);
	}

	// USed for debugging
	static toString(pathPointers: PathPointer[]): string {
		let result = "";
		pathPointers.forEach(pathPointer => {
			result += `<li>Laser at ${pathPointer.coord} going ${pathPointer.direction} with ${toPercent(
				pathPointer.intensity
			)} and ${pathPointer.phase} phase shift</li>`;
		});
		return result;
	}

	// Format active particle list
	static manyToString(pointers: Pointer[]): string {
		let result = `${pointers.length} active particles...\n`;
		pointers.forEach(pointer => {
			result += `- ${pointer.toString()}\n`;
		});
		return result;
	}
}
