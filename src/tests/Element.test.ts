import Element from "../Element";
import { Elem } from "../Helpers";

describe("Elements", () => {
  it("should deduce the angle of rotation by the length of its ascii", () => {
    const mirror = Element.fromName(Elem.Mirror);
    const laser = Element.fromName(Elem.Laser);
    const rock = Element.fromName(Elem.Rock);
    expect(mirror.rotationAngle).toEqual(45);
    expect(laser.rotationAngle).toEqual(90);
    expect(rock.rotationAngle).toEqual(360);
  });
});
