// import * as math from 'mathjs'
import * as _ from 'lodash'
import Coord from './Coord'
import Cell from './Cell'
import Grid from './Grid'
// import Element from './Element'

describe('Grid', () => {
  it('should create grid from col and row', () => {
    const grid = new Grid(3, 3)
    expect(grid instanceof Grid).toBe(true)
    expect(grid.toString()).toEqual("000\n000\n000\n")
  })

  it('should set the value of a cell', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(1, 1)
    grid.set(Cell.mirror(coord))
    expect(grid.toString()).toEqual("000\n020\n000\n")
  })

  it('should retrieve a cell through its coordinates in the grid', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(1, 1)
    grid.set(Cell.mirror(coord))
    const cell = grid.get(coord)
    expect(cell.toString()).toEqual("{#Cell {#Element mirror} @ {#Coord [1, 1]}}")
  })

  it('should forbid placing a cell outside of the grid', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(4, 4)
    grid.set(Cell.mirror(coord))
    expect(grid.toString()).toEqual("000\n000\n000\n")
    // expect(grid.set(Cell.mirror(coord))).toThrowError(RangeError)
  })

  it('should allow to move an element from a cell to another if both are unfrozen', () => {
    const grid = new Grid(3, 3)
    const orig = new Coord(1, 1)
    const dest = new Coord(2, 2)
    const cell = Cell.mirror(orig)
    grid.set(cell)
    grid.move(orig, dest)
    expect(grid.toString()).toEqual("000\n000\n002\n")
  })

  it('should allow to filter cells by element type', () => {
    const grid = new Grid(3, 3)
    const coord1 = new Coord(1, 1)
    const coord2 = new Coord(2, 2)
    const coord3 = new Coord(2, 3)
    const mirror1 = Cell.mirror(coord1)
    const mirror2 = Cell.mirror(coord2)
    const laser = Cell.laser(coord3)
    grid.set(mirror1)
    grid.set(mirror2)
    grid.set(laser)
    expect(grid.filteredBy("mirror")).toEqual([mirror1, mirror2])
  })
})