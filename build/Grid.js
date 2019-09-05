"use strict";
// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
Object.defineProperty(exports, "__esModule", { value: true });
const math = require("mathjs");
const Coord_1 = require("./Coord");
// import Element from './Element'
const Cell_1 = require("./Cell");
class Grid {
    constructor(colCount, rowCount, matrix) {
        this.colCount = colCount;
        this.rowCount = rowCount;
        this.clusters = [];
        // If matrix specified extract cells
        if (matrix) {
            this.matrix = matrix;
        }
        else {
            // FIXME: Kinda ugly
            // Else create blank cells
            this.matrix = Array.from(Array(colCount), (_) => Array(rowCount).fill(0));
            for (let y = 0; y < colCount; y++) {
                for (let x = 0; x < rowCount; x++) {
                    const coord = new Coord_1.default(x, y);
                    this.matrix[x][y] = Cell_1.default.blank(coord);
                }
            }
        }
    }
    // Return all the cells of the grid
    cells() {
        const result = [];
        for (let y = 0; y < this.colCount; y++) {
            for (let x = 0; x < this.rowCount; x++) {
                result.push(this.matrix[x][y]);
            }
        }
        return result;
    }
    // Test if coord is inside boundaries
    isCoordInsideGrid(coord) {
        return (coord.x >= 0 && coord.x < this.colCount) &&
            (coord.y >= 0 && coord.y < this.rowCount);
    }
    // Set matrix cell
    set(cell) {
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix[cell.coord.y][cell.coord.x] = cell;
        }
        else {
            throw (`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`);
        }
    }
    // Get matrix cell value
    get(coord) {
        return this.matrix[coord.y][coord.x];
    }
    // Add a vector to the grid
    addCluster(cluster) {
        this.clusters.push(cluster);
        cluster.cells.forEach((cell) => {
            this.set(cell);
        });
    }
    // Look for colliding cells
    // collisionCheck(cluster: Cluster) {
    //     const intersect: Coord[][] = []
    //     this.clusters.forEach((coord, index) => {
    //         const temp = _.intersection(coord.indices, cluster.indices)
    //         if (temp.length > 0) {
    //             intersect.push(temp)
    //             console.log('Intersect with blob: ' + index)
    //         }
    //     })
    //     console.log(intersect)
    //     return intersect
    // }
    // Two point area selection
    // Could be used for viewport cropping like in Vim Adventures
    submatrix(A, B) {
        if (!this.isCoordInsideGrid(A) || !this.isCoordInsideGrid(B)) {
            throw ('Coordinates outside of bounds.');
        }
        const minX = math.min(A.x, B.x);
        const maxX = math.max(A.x, B.x);
        const minY = math.min(A.y, B.y);
        const maxY = math.max(A.y, B.y);
        const selection = [];
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                selection.push([x, y]);
            }
        }
        console.log(`Size: [X: ${maxX - minX}] | Y: [${maxY - minY}]`);
        console.log(`X: [${minX}, ${maxX}] - Y: [${minY}, ${maxY}]`);
        return math.matrix(selection);
    }
    // Coordinates to grid index
    getIndexFromCoord(coord) {
        return coord.x * this.colCount + coord.y;
    }
    getCoordFromIndex(index) {
        const x = index % this.colCount;
        const y = Math.floor(index / this.colCount);
        return new Coord_1.default(x, y);
    }
    display() {
        console.log(this.matrix.valueOf());
    }
    asciiRender() {
        console.log("* ".repeat(this.colCount));
        for (let y = 0; y < this.colCount; y++) {
            let asciiLine = "";
            for (let x = 0; x < this.rowCount; x++) {
                asciiLine += this.matrix[x][y].element.ascii + " ";
            }
            console.log(asciiLine);
        }
        console.log("* ".repeat(this.colCount));
    }
    // export JSON file to save state oi the game
    exportJSON() {
        return JSON.stringify(this);
    }
}
exports.default = Grid;
//# sourceMappingURL=Grid.js.map