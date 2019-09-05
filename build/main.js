"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as math from 'mathjs'
const Coord_1 = require("./Coord");
const Element_1 = require("./Element");
const Cell_1 = require("./Cell");
// import Cluster from './Cluster'
const Grid_1 = require("./Grid");
// INIT GRID
const grid = new Grid_1.default(8, 8);
// LOAD COORD
const source = new Cell_1.default(new Coord_1.default(4, 0), Element_1.default.source(), 0, false);
const detector = new Cell_1.default(new Coord_1.default(4, 7), Element_1.default.detector(), 0, false);
const mirror = new Cell_1.default(new Coord_1.default(6, 6), Element_1.default.mirror(), 0, false);
grid.set(source);
grid.set(detector);
grid.set(mirror);
grid.asciiRender();
// CREATE ROW VECTOR
// const row = []
// const rangeX = [1, 4]
// for (let x = rangeX[0]; x < rangeX[1]; x++) {
//     row.push(new Cell(new Coord(2, x), math.randomInt(1, 9)))
// }
// const cluster = new Cluster(row)
// grid.addCluster(cluster)
// grid.display()
// VECTOR FROM NUMBER ARRAY
// const newvec = Vector.fromArray(0, 1, [3, 3, 3], true)
// grid.addVector(newvec)
// grid.collisionCheck(rowvec)
// grid.display()
// INDEX TO COORD
// const x = 3
// const y = 7
// const coord1 = new Coord(x, y)
// const index = grid.getIndexFromCoord(coord1)
// console.log(`X: ${x} - Y: ${y} corresponds to index: ${index}`)
// COORD TO INDEX
// const coord2 = grid.getCoordFromIndex(index)
// console.log(`Index ${index} correspond to X: ${coord2.x} - Y: ${coord2.y}`)
// SUBMATRIX SELECTION
// const cellA = new Coord(2, 6)
// const cellB = new Coord(3, 5)
// const selection = grid.submatrix(cellA, cellB)
// selection.forEach((elem) => {
//     console.log(elem.toArray())
// })
// selection.toString()
//# sourceMappingURL=main.js.map