import Element from "../Element";

describe("Elements", () => {
	it("should deduce the angle of rotation by the length of its ascii", () => {
		const mirror = Element.fromName("mirror");
		const laser = Element.fromName("laser");
		const rock = Element.fromName("rock");
		expect(mirror.rotationAngle).toEqual(45);
		expect(laser.rotationAngle).toEqual(90);
		expect(rock.rotationAngle).toEqual(360);
	});
});
