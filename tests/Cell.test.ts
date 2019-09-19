import Coord from "../Coord"
import Element from "../Element"
import Cell from "../Cell"

describe('Cell', () => {
  xit('should cascade overriden toString() methods nicely', () => {
    const coord = new Coord(1, 0)
    const mirror = new Cell(coord, Element.fromName('mirror'))
    expect(mirror.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [1, 0]}}")
  })
})