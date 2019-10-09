import Grid from "../Grid";
import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";

describe("Front-end laser particle test", () => {
	it("should return a list of laser coordinates on grid updates", () => {
		const grid = new Grid(5, 5);
		const coord = new Coord(2, 2);
		const element = Element.fromName("laser");
		const cell = new Cell(coord, element);
		grid.set(cell);
		const particles = grid.initiateLasers();
		expect(particles[0].toString()).toEqual("blabla");
	});
});
