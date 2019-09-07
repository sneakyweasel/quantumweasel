import Coord from "./Coord"
import Cell from "./Cell"

describe('Cell', () => {
  it('should cascade overriden toString() methods nicely', () => {
    const coord = new Coord(1, 0)
    const mirror = Cell.mirror(coord)
    expect(mirror.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [1, 0]}}")
  })
})