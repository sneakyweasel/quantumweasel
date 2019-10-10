import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";

describe("Cell", () => {
	it("should cascade overriden toString() methods nicely", () => {
		const coord = new Coord(1, 0);
		const mirror = new Cell(coord, Element.fromName("mirror"));
		expect(mirror.toString()).toEqual(
			"Cell @ [Y:1, X:0] is unfrozen inactive and unpowered mirror (Phase: 0, Absorption: 0%) rotated 0°"
		);
	});

	it("should rotate element according to its element rotation angle increment", () => {
		const coord = new Coord(1, 0);
		const element2 = Element.fromName("detector"); // Angles of 90°
		const element3 = Element.fromName("mirror"); // Angles of 45°
		const detector = new Cell(coord, element2);
		const mirror = new Cell(coord, element3);
		mirror.rotate(135);
		expect(mirror.toString()).toEqual(
			"Cell @ [Y:1, X:0] is unfrozen inactive and unpowered mirror (Phase: 0, Absorption: 0%) rotated 135°"
		);
		mirror.rotate(-270);
		expect(mirror.toString()).toEqual(
			"Cell @ [Y:1, X:0] is unfrozen inactive and unpowered mirror (Phase: 0, Absorption: 0%) rotated 225°"
		);
		detector.rotate(270);
		expect(detector.toString()).toEqual(
			"Cell @ [Y:1, X:0] is unfrozen detector (Phase: 0, Absorption: 100%) rotated 270°"
		);
	});

	xit("should error when the angle doesnt match the element rotation angle", () => {
		const coord = new Coord(1, 0);
		const element = Element.fromName("rock"); // Angles of 360°
		const rock = new Cell(coord, element);
		expect(rock.rotate(270)).toThrowError("Error in the supplied angle compared to the element rotation angle.");
	});

	it("should fire a particle particle going right", () => {
		const coord = new Coord(1, 0);
		const element = Element.fromName("laser");
		const laser = new Cell(coord, element);
		laser.active = true;
		laser.rotate(90);
		const particle = laser.fire();
		expect(laser.toString()).toEqual(
			"Cell @ [Y:1, X:0] is unfrozen active and unpowered laser (Phase: 0, Absorption: 0%) rotated 90°"
		);
		expect(particle.toString()).toEqual(
			"#Particle @ [Y:1, X:0] moving 90° with 1 intensity and 0 phase shift. PATH: [Y:1, X:0]"
		);
		particle.next();
		expect(particle.coord).toEqual(coord.right);
	});
});
