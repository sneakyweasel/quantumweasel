import Coord from "../Coord"
import Element from "../Element"
import Cell from "../Cell"

describe('Cell', () => {
  it('should cascade overriden toString() methods nicely', () => {
    const coord = new Coord(1, 0)
    const mirror = new Cell(coord, Element.fromName('mirror'))
    expect(mirror.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [Y:1, X:0]}} rotated 0°")
  })

  it('should rotate element according to its element rotation angle increment', () => {
    const coord = new Coord(1, 0)
    const element1 = Element.fromName('rock')      // Angles of 360°
    const element2 = Element.fromName('detector')  // Angles of 90°
    const element3 = Element.fromName('mirror')    // Angles of 45°
    const rock = new Cell(coord, element1)
    const detector = new Cell(coord, element2)
    const mirror = new Cell(coord, element3)
    mirror.rotate(3)
    expect(mirror.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [Y:1, X:0]}} rotated 135°")
    mirror.rotate(-4)
    expect(mirror.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [Y:1, X:0]}} rotated 315°")
    detector.rotate(3)
    expect(detector.toString()).toEqual("{#Cell {#Element detector} @ {#Coord [Y:1, X:0]}} rotated 270°")
    rock.rotate(2)
    expect(rock.toString()).toEqual("{#Cell {#Element rock} @ {#Coord [Y:1, X:0]}} rotated 0°")
  })

  it('should generate a particle pointer with the correct direction', () => {
    const coord = new Coord(1, 0)
    const element = Element.fromName('laser')
    const laser = new Cell(coord, element)
    laser.rotate(2)
    const pointer = laser.fire()
    expect(laser.toString()).toEqual("{#Cell {#Element laser} @ {#Coord [Y:1, X:0]}} rotated 180°")
    expect(pointer.toString()).toEqual("#Pointer @ {#Coord [Y:1, X:0]} moving 180° with 100% intensity and 0 phase shift. PATH: {#Coord [Y:1, X:0]}")
    pointer.next()
    expect(pointer.toString()).toEqual("#Pointer @ {#Coord [Y:2, X:0]} moving 180° with 100% intensity and 0 phase shift. PATH: {#Coord [Y:1, X:0]},{#Coord [Y:2, X:0]}")
  })

})