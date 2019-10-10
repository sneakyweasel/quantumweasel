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

  it("should return an operator from an element", () => {
    const mirror = Element.createMirror(180);
    expect(mirror.element.id).toEqual(14);
    expect(typeof mirror.transition(180)).toEqual("Operator");
  });
});
