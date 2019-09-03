// import * as math from 'mathjs'
import * as _ from 'lodash'
import Grid from './Grid'
import Cluster from './Cluster'
import Cell from './Cell'
import Coord from './Coord'

describe('Grid', () => {
  it('should create grid from col and row', () => {
    const grid = new Grid(3, 3)
    expect(grid instanceof Grid).toBe(true)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 0, 0], [0, 0, 0]]")
  })

  it('should set the value of a cell', () => {
    const grid = new Grid(3, 3)
    grid.matrix.set([1, 1], 5)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  })

  it('should forbid setting the value of a cell outside grid range', () => {
    const grid = new Grid(3, 3)
    grid.matrix.set([4, 4], 5)
    expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
  })

  it('should get the value of a cell', () => {
    const grid = new Grid(3, 3)
    grid.set(Cell.fromArray(1, 1, 5))
    const value = grid.get(new Coord(1, 1))
    expect(value).toEqual(5)
  })
})

describe('Grid helpers', () => {
  it('should check if a coordinate is inside a grid', () => {
    const grid = new Grid(3, 3)
    const coord = new Coord(4, 4)
    expect(grid.isCoordInsideGrid(coord)).toBe(false)
  })

  xit('should export grid into a json file', () => {
    const grid = new Grid(4, 4)
    const cluster = Cluster.fromArray(new Coord(0, 1), [3, 3, 3], true)
    grid.addCluster(cluster)
    expect(grid.exportJSON()).toEqual('')
  })
})
