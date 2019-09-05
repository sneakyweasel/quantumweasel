// import * as math from 'mathjs'
import * as _ from 'lodash'
import Coord from './Coord'
import Cell from './Cell'
// import Cluster from './Cluster'
import Grid from './Grid'

describe('Grid', () => {
  it('should create grid from col and row', () => {
    const grid = new Grid(3, 3)
    expect(grid instanceof Grid).toBe(true)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 0, 0], [0, 0, 0]]")
  })

  it('should set the value of a cell', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(1, 1)
    grid.set(Cell.blank(coord))
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  })

  // xit('should forbid setting the value of a cell outside grid range', () => {
  //   const grid = new Grid(3, 3)
  //   grid.matrix.set([4, 4], 5)
  //   expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  // })

  // it('should get the value of a cell', () => {
  //   const grid = new Grid(3, 3)
  //   grid.set(Cell.fromArray(1, 1, 5))
  //   const value = grid.get(new Coord(1, 1))
  //   expect(value).toEqual(5)
  // })
})

describe('Grid helpers', () => {
  it('should check if a coordinate is inside a grid', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(4, 4)
    expect(grid.isCoordInsideGrid(coord)).toBe(false)
  })
})

// Coordinates testing
describe('Coordinates', () => {
  it('should generate adjacency list of a coord', () => {
    const coord = new Coord(4, 4)
    expect(coord.adjacent()).toEqual([
      new Coord(3, 4),
      new Coord(5, 4),
      new Coord(4, 3),
      new Coord(4, 5)
    ])
  })

  it('should test for adjacency of two coords', () => {
    const coord1 = new Coord(4, 4)
    const coord2 = new Coord(4, 5)
    console.log(coord1.adjacent())
    expect(coord1.isAdjacent(coord2)).toBe(true)
    expect(coord2.isAdjacent(coord1)).toBe(true)
  })
})
