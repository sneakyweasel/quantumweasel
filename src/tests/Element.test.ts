import Element from "../Element";

describe("Elements", () => {
	xit("should create a new element by its name", () => {
		const elem = Element.fromName("laser");
		expect(elem.exportJSON()).toEqual({
			active: true,
			absorption: 0,
			description: "An on-demand single photon source.",
			group: "Emitter",
			id: 0,
			link: "./elements/laser",
			matrix: [],
			phase: 0,
			name: "laser",
			ascii: ["^", ">", "v", "<"],
			tiles: [[0, 0], [0, 1], [0, 2], [0, 3]]
		});
	});

	it("should deduce the angle of rotation by the length of its ascii", () => {
		const mirror = Element.fromName("mirror");
		const laser = Element.fromName("laser");
		const rock = Element.fromName("rock");
		expect(mirror.rotationAngle).toEqual(45);
		expect(laser.rotationAngle).toEqual(90);
		expect(rock.rotationAngle).toEqual(360);
	});
});
