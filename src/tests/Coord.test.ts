import Coord from "../Coord"

// Coordinates testing
describe("Coordinates", () => {
  it("should test for adjacency of two coords", () => {
    const coord1 = new Coord(4, 4)
    const coord2 = new Coord(4, 5)
    expect(coord1.isAdjacent(coord2)).toBe(true)
    expect(coord2.isAdjacent(coord1)).toBe(true)
  })

  it("should test if a coord is included in a list of coords", () => {
    const coord1 = new Coord(4, 4)
    const coord2 = new Coord(4, 4)
    const coord3 = new Coord(4, 5)
    const coord4 = new Coord(5, 5)
    const coords = [coord2, coord3, coord4]
    expect(coord1.isIncludedIn(coords)).toBe(true)
  })

  it("should return a coord according to the specified direction in angle", () => {
    const coord = new Coord(4, 4)
    const right = coord.fromAngle(0) 
    const up = coord.fromAngle(90) 
    const left = coord.fromAngle(180) 
    const down = coord.fromAngle(270) 
    expect(right).toEqual(coord.right)
    expect(up).toEqual(coord.up)
    expect(left).toEqual(coord.left)
    expect(down).toEqual(coord.down)
  })
})
