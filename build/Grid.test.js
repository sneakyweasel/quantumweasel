"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./Grid");
const Vector_1 = require("./Vector");
const Cell_1 = require("./Cell");
const Coord_1 = require("./Coord");
describe('Grid', () => {
    it('should create grid from col and row', () => {
        const grid = new Grid_1.default(3, 3);
        expect(grid instanceof Grid_1.default).toBe(true);
        expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 0, 0], [0, 0, 0]]");
    });
    it('should set the value of a cell', () => {
        const grid = new Grid_1.default(3, 3);
        grid.matrix.set([1, 1], 5);
        expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]");
    });
    it('should forbid setting the value of a cell outside grid range', () => {
        const grid = new Grid_1.default(3, 3);
        grid.matrix.set([4, 4], 5);
        expect(grid.matrix.toString()).toEqual("[[0, 0, 0], [0, 5, 0], [0, 0, 0]]");
    });
    it('should get the value of a cell', () => {
        const grid = new Grid_1.default(3, 3);
        grid.set(Cell_1.default.fromArray(1, 1, 5));
        const value = grid.get(new Coord_1.default(1, 1));
        expect(value).toEqual(5);
    });
});
describe('Grid helpers', () => {
    it('should check if a coordinate is inside a grid', () => {
        const grid = new Grid_1.default(3, 3);
        const coord = new Coord_1.default(4, 4);
        expect(grid.isCoordInsideGrid(coord)).toBe(false);
    });
    xit('should export grid into a json file', () => {
        const grid = new Grid_1.default(4, 4);
        const vec = Vector_1.default.fromArray(new Coord_1.default(0, 1), [3, 3, 3], true);
        grid.addVector(vec);
        expect(grid.exportJSON()).toEqual('');
    });
});
//# sourceMappingURL=Grid.test.js.map