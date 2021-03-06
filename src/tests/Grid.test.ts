import Coord from "../Coord"
import Element from "../Element"
import Cell from "../Cell"
import Grid from "../Grid"
import { Elem } from "../Helpers"

describe("Grid", () => {
  it("should create grid from col and row", () => {
    const grid = new Grid(3, 6)
    expect(grid instanceof Grid).toBe(true)
    expect(grid.ascii).toEqual("......\n......\n......\n")
  })

  it("should set the value of a cell", () => {
    const grid = new Grid(3, 6)
    const coord = new Coord(1, 5)
    grid.set(new Cell(coord, Element.fromName(Elem.Mirror)))
    expect(grid.ascii).toEqual("......\n.....-\n......\n")
  })

  it("should retrieve a cell through its coordinates in the grid", () => {
    const grid = new Grid(3, 6)
    const coord = new Coord(1, 5)
    grid.set(new Cell(coord, Element.fromName(Elem.Mirror)))
    const cell = grid.get(coord)
    expect(cell.toString()).toEqual(
      "Cell @ [Y:1, X:5] is unfrozen inactive and unpowered Mirror (Phase: 0, Absorption: 0%) rotated 0°"
    )
  })

  it("should forbid placing a cell outside of the grid", () => {
    const grid = new Grid(3, 6)
    const coord = new Coord(4, 4)
    const element = Element.fromName(Elem.Mirror)
    const mirror = new Cell(coord, element)
    expect(() => {
      grid.set(mirror)
    }).toThrowError("Coordinate out of bounds. Cell: [4, 4]")
    expect(grid.ascii).toEqual("......\n......\n......\n")
  })

  // it("should allow to move an element from a cell to another if both are unfrozen", () => {
  //   const grid = new Grid(3, 6)
  //   const orig = new Coord(1, 1)
  //   const dest = new Coord(2, 2)
  //   grid.set(new Cell(orig, Element.fromName(Elem.Mirror)))
  //   grid.move(orig, dest)
  //   expect(grid.ascii).toEqual("......\n......\n..-...\n")
  // })

  // it("should move all the cells of the grid in a specified direction", () => {
  //   const grid = new Grid(3, 6)
  //   const coord1 = new Coord(1, 1)
  //   const coord2 = new Coord(2, 2)
  //   grid.set(new Cell(coord1, Element.fromName(Elem.Mirror)))
  //   grid.set(new Cell(coord2, Element.fromName(Elem.Detector)))
  //   grid.moveAll(90)
  //   expect(grid.ascii).toEqual("......\n......\n..-...\n")
  // })

  it("should forbid moving an element to another cell if any is frozen", () => {
    const grid = new Grid(3, 6)
    const orig = new Coord(1, 1)
    const dest = new Coord(2, 2)
    grid.set(new Cell(orig, Element.fromName(Elem.Mirror), 0, true))
    grid.move(orig, dest)
    expect(grid.ascii).toEqual("......\n.-....\n......\n")
  })

  it("should allow to filter cells by element type", () => {
    const grid = new Grid(3, 6)
    const coord1 = new Coord(1, 1)
    const coord2 = new Coord(2, 2)
    const mirror1 = new Cell(coord1, Element.fromName(Elem.Mirror))
    const mirror2 = new Cell(coord2, Element.fromName(Elem.Mirror))
    grid.set(mirror1)
    grid.set(mirror2)
    expect(grid.mirrors.cells).toEqual([mirror1, mirror2])
  })

  it("should generate an operator list", () => {
    const grid = new Grid(3, 6)
    const coord1 = new Coord(1, 1)
    const coord2 = new Coord(2, 2)
    const mirror1 = new Cell(coord1, Element.fromName(Elem.Mirror))
    const mirror2 = new Cell(coord2, Element.fromName(Elem.Mirror))
    grid.set(mirror1)
    grid.set(mirror2)
    grid.operatorList.map(operator => {
      console.log(operator.toString())
    })
    expect(grid.mirrors.cells).toEqual([mirror1, mirror2])
  })

  it("should export a grid to a GridInterface", () => {
    const grid = new Grid(3, 6)
    const coord1 = new Coord(1, 1)
    const coord2 = new Coord(2, 2)
    const mirror1 = new Cell(coord1, Element.fromName(Elem.Mirror))
    const mirror2 = new Cell(coord2, Element.fromName(Elem.Mirror))
    grid.set(mirror1)
    grid.set(mirror2)
    expect(grid.exportGrid()).toEqual({
      cells: [
        {
          active: false,
          coord: { x: 1, y: 1 },
          element: "Mirror",
          energized: false,
          frozen: false,
          rotation: 0
        },
        {
          active: false,
          coord: { x: 2, y: 2 },
          element: "Mirror",
          energized: false,
          frozen: false,
          rotation: 0
        }
      ],
      cols: 6,
      rows: 3
    })
  })
})
