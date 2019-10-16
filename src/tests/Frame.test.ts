import Coord from "../Coord";
import Element from "../Element";
import Cell from "../Cell";
import Grid from "../Grid";
// import Level from "../Level";
// import Frame from "../Frame";

// Coordinates testing
describe("Frame", () => {
  it("should create a particle from an active laser", () => {
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

  it("should propagate a classical particle in the correct direction", () => {
    const grid = new Grid(6, 3);
    const coord = new Coord(2, 1);
    const element = Element.fromName("laser");
    const laser = new Cell(coord, element);
    laser.active = true;
    grid.set(laser);
    const particle = laser.fire();
    particle.next();
    expect(particle.coord).toEqual(laser.coord.right);
  });

  it("should propagate a quantum particle in the correct direction", () => {
    const grid = new Grid(6, 3);
    const coord = new Coord(2, 1);
    const element = Element.fromName("laser");
    const laser = new Cell(coord, element);
    laser.active = true;
    grid.set(laser);
    const particle = laser.fire();
    particle.next();
    expect(particle.coord).toEqual(laser.coord.right);
  });

  it("shouldn't create a particle from a inactive laser", () => {
    const grid = new Grid(6, 3);
    const coord = new Coord(2, 1);
    const element = Element.fromName("laser");
    const laser = new Cell(coord, element);
    grid.set(laser);
    expect(() => {
      return laser.fire();
    }).toThrow("Laser is inactive...");
  });

  //   it("should export a frame interface object", () => {
  //     const grid = new Grid(6, 3);
  //     const coord = new Coord(2, 1);
  //     const element = Element.fromName("laser");
  //     const laser = new Cell(coord, element);
  //     grid.set(laser);

  //     expect(() => {
  //       return laser.fire();
  //     }).toThrow("Laser is inactive...");
  //   });
});
