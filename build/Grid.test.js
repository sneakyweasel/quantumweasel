"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coord_1 = require("./Coord");
const Cell_1 = require("./Cell");
// import Cluster from './Cluster'
const Grid_1 = require("./Grid");
describe('Grid', () => {
    it('should create grid from col and row', () => {
        const grid = new Grid_1.default(3, 3);
        expect(grid instanceof Grid_1.default).toBe(true);
        expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 0, 0], [0, 0, 0]]");
    });
    it('should set the value of a cell', () => {
        const grid = new Grid_1.default(3, 3);
        const coord = new Coord_1.default(1, 1);
        grid.set(Cell_1.default.blank(coord));
        expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]");
    });
    xit('should display the grid in a basic way', () => {
        const grid = new Grid_1.default(3, 3);
        grid.set(Cell_1.default.mirror(new Coord_1.default(2, 2)));
        expect(grid.basicRender).toEqual("\
      000\n\
      000\n\
      000\n\
      ");
    });
    // xit('should forbid setting the value of a cell outside grid range', () => {
    //   const grid = new Grid(3, 3)
    //   grid.set(Cell.mirror(new Coord(2, 2))
    //   expect(grid.basicRender()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]")
    // })
    // it('should get the value of a cell', () => {
    //   const grid = new Grid(3, 3)
    //   grid.set(Cell.fromArray(1, 1, 5))
    //   const value = grid.get(new Coord(1, 1))
    //   expect(value).toEqual(5)
    // })
});
describe('Grid helpers', () => {
    it('should check if a coordinate is inside a grid', () => {
        const grid = new Grid_1.default(3, 3);
        const coord = new Coord_1.default(4, 4);
        expect(grid.isCoordInsideGrid(coord)).toBe(false);
    });
});
// Coordinates testing
describe('Coordinates', () => {
    it('should generate adjacency list of a coord', () => {
        const coord = new Coord_1.default(4, 4);
        expect(coord.adjacent()).toEqual([
            new Coord_1.default(3, 4),
            new Coord_1.default(5, 4),
            new Coord_1.default(4, 3),
            new Coord_1.default(4, 5)
        ]);
    });
    it('should test for adjacency of two coords', () => {
        const coord1 = new Coord_1.default(4, 4);
        const coord2 = new Coord_1.default(4, 5);
        console.log(coord1.adjacent());
        expect(coord1.isAdjacent(coord2)).toBe(true);
        expect(coord2.isAdjacent(coord1)).toBe(true);
    });
});
//# sourceMappingURL=Grid.test.js.map