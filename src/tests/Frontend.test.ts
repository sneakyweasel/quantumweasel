import Grid from "../Grid";
import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";

describe("Front-end laser pointer test", () => {
	it("should return a list of laser coordinates on grid updates", () => {
		const grid = new Grid(5, 5);
		const coord = new Coord(2, 2);
		const element = Element.fromName("laser");
		const cell = new Cell(coord, element);
		grid.set(cell);
		const pointers = grid.initiateLasers();
		expect(pointers[0].toString()).toEqual("blabla");
	});
});
