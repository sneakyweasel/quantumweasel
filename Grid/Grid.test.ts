// import * as math from 'mathjs'
import Grid from './Grid'
import * as _ from 'lodash'
import Vector from './Vector'

describe('Grid', () => {
  it('should create grid from col and row', () => {
    const grid = new Grid(3, 3)
    expect(grid instanceof Grid).toBe(true)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 0, 0], [0, 0, 0]]")
  })

  it('should set the value of a cell', () => {
    const grid = new Grid(3, 3)
    grid.set([1, 1], 5)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  })

  it('should forbid setting the value of a cell outside grid range', () => {
    const grid = new Grid(3, 3)
    grid.set([4, 4], 5)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  })

  it('should get the value of a cell', () => {
    const grid = new Grid(3, 3)
    grid.set([1, 1], 5)
    const value = grid.get([1, 1])
    expect(value).toEqual(5)
  })
})

describe('Grid helpers', () => {
  it('should check if a coordinate is inside a grid', () => {
    const grid = new Grid(3, 3)
    const coord = [4, 4]
    expect(grid.isCoordInsideGrid(coord)).toBe(false)
  })

  xit('should export grid into a json file', () => {
    const grid = new Grid(4, 4)
    const vec = Vector.fromArray([0, 1], [3, 3, 3], true)
    grid.addVector(vec)
    expect(grid.exportJSON()).toEqual('')
  })
})