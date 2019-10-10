import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";
import Grid from "../Grid";

// Coordinates testing
describe("Frame", () => {
	it("should display correct laser paths", () => {
		const grid = new Grid(6, 3);
		const coord = new Coord(2, 1);
		const element = Element.fromName("laser");
		const laser = new Cell(coord, element);
		laser.active = true;
		grid.set(laser);
		const particle = laser.fire();
		console.log(grid.toString());
		console.log(particle.toString());
		expect(particle.coord).toEqual(laser.coord);
	});
});
