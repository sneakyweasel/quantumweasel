"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math = require("mathjs");
const Cluster_js_1 = require("./Cluster.js");
const Coord_js_1 = require("./Coord.js");
const Grid_js_1 = require("./Grid.js");
const Cell_js_1 = require("./Cell.js");
// INIT GRID
const grid = new Grid_js_1.default(8, 8);
// LOAD COORD
const coord = new Coord_js_1.default(6, 6);
const cell = new Cell_js_1.default(coord, 9);
cell.display();
grid.set(cell);
// CREATE ROW VECTOR
const row = [];
const rangeX = [1, 4];
for (let x = rangeX[0]; x < rangeX[1]; x++) {
    row.push(new Cell_js_1.default(new Coord_js_1.default(2, x), math.randomInt(1, 9)));
}
const cluster = new Cluster_js_1.default(row);
grid.addCluster(cluster);
grid.display();
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
const cellA = new Coord_js_1.default(2, 6);
const cellB = new Coord_js_1.default(3, 5);
const selection = grid.submatrix(cellA, cellB);
// selection.forEach((elem) => {
//     console.log(elem.toArray())
// })
selection.toString();
//# sourceMappingURL=main.js.map