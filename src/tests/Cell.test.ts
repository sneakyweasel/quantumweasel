import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";
import { Elem } from "../Helpers";

describe("Cell", () => {
  it("should cascade overriden toString() methods nicely", () => {
    const coord = new Coord(1, 0);
    const mirror = new Cell(coord, Element.fromName(Elem.Mirror));
    expect(mirror.toString()).toEqual(
      "Cell @ [Y:1, X:0] is unfrozen inactive and unpowered mirror (Phase: 0, Absorption: 0%) rotated 0°"
    );
  });

  it("should rotate element according to its element rotation angle increment", () => {
    const coord1 = new Coord(1, 0);
    const coord2 = new Coord(1, 2);
    const element1 = Element.fromName(Elem.Detector); // Angles of 90°
    const element2 = Element.fromName(Elem.Mirror); // Angles of 45°
    const detector = new Cell(coord1, element1);
    const mirror = new Cell(coord2, element2);
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
      "Cell @ [Y:1, X:0] is unfrozen inactive and unpowered detector (Phase: 0, Absorption: 100%) rotated 270°"
    );
  });

  it("should error when the angle doesnt match the element rotation angle", () => {
    const coord = new Coord(1, 0);
    const element = Element.fromName(Elem.Rock); // Angles of 360°
    const rock = new Cell(coord, element);
    expect(() => {
      return rock.rotate(270);
    }).toThrowError(
      "Error in the supplied angle compared to the element rotation angle."
    );
  });
});
