"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as math from 'mathjs'
// import Vector from './Vector.js'
const Coord_1 = require("./Coord");
const Cell_1 = require("./Cell");
const Grid_1 = require("./Grid");
// INIT GRID
const grid = new Grid_1.default(8, 8);
// LOAD COORD
const coord = new Coord_1.default(6, 6);
const cell = new Cell_1.default(coord, 9);
cell.display();
grid.set(cell);
grid.display();
// CREATE ROW VECTOR
// const row = []
// const rangeX = [1, 4]
// for (let x = rangeX[0]; x < rangeX[1]; x++) {
//     row.push(new Cell(new Coord(2, x), math.randomInt(1, 9)))
// }
// const rowvec = new Vector(row)
// grid.addVector(rowvec)
// VECTOR FROM NUMBER ARRAY
// const newvec = Vector.fromArray(0, 1, [3, 3, 3], true)
// grid.addVector(newvec)
// grid.collisionCheck(rowvec)
// grid.display()
// INDEX TO COORD
// const x = 3
// const y = 7
// let coord = new Coord(x, y)
// const index = grid.getIndexFromCoord(coord)
// console.log(`X: ${x} - Y: ${y} corresponds to index: ${index}`)
// COORD TO INDEX
// coord = grid.getCoordFromIndex(index)
// console.log(`Index ${index} correspond to X: ${coord.x} - Y: ${coord.y}`)
// SUBMATRIX SELECTION
// const cellA = new Coord(2, 6)
// const cellB = new Coord(3, 5)
// const selection = grid.submatrix(cellA, cellB)
// selection.forEach((elem) => {
//     console.log(elem.toArray())
// })
// grid.display()
//# sourceMappingURL=main.js.map