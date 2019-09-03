"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// GRID CLASS
const math = require("mathjs");
const _ = require("lodash");
const Coord_1 = require("./Coord");
class Grid {
    constructor(col_count, row_count, matrix) {
        this.col_count = col_count;
        this.row_count = row_count;
        if (matrix) {
            this.matrix = matrix;
        }
        else {
            this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse");
        }
        this.clusters = [];
    }
    // Test if coord is inside boundaries
    isCoordInsideGrid(coord) {
        if ((coord.x >= 0 && coord.x < this.col_count) &&
            (coord.y >= 0 && coord.y < this.row_count)) {
            return true;
        }
        return false;
    }
    // Set matrix cell
    set(cell) {
        cell.display();
        cell.coord.display();
        if (this.isCoordInsideGrid(cell.coord)) {
            this.matrix.set([cell.coord.x, cell.coord.y], cell.value);
        }
        else {
            throw ('Coordinate out of bounds.');
        }
    }
    // Get matrix cell value
    get(coord) {
        return this.matrix.get([coord.x, coord.y]);
    }
    // Add a vector to the grid
    addCluster(cluster) {
        this.clusters.push(cluster);
        cluster.cells.forEach((cell) => {
            this.set(cell);
        });
    }
    // Look for colliding cells
    collisionCheck(cluster) {
        const intersect = [];
        this.clusters.forEach((coord, index) => {
            const temp = _.intersection(coord.indices, cluster.indices);
            if (temp.length > 0) {
                intersect.push(temp);
                console.log('Intersect with blob: ' + index);
            }
        });
        console.log(intersect);
        return intersect;
    }
    // Two point area selection
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
        console.log(`X: [${minX}, ${maxX}] - Y: [${minY}, ${maxY}]`);
        return selection;
    }
    // Coordinates to grid index
    getIndexFromCoord(coord) {
        return coord.x * this.col_count + coord.y;
    }
    getCoordFromIndex(index) {
        const x = index % this.col_count;
        const y = Math.floor(index / this.col_count);
        return new Coord_1.default(x, y);
    }
    display() {
        console.log(this.matrix.valueOf());
    }
    exportJSON() {
        return {
            matrix: this.matrix.toJSON(),
            clusters: this.clusters
        };
    }
    // Static functions
    static loadMatrix(matrix) {
        const cols = matrix.size()[0];
        const rows = matrix.size()[1];
        return new Grid(cols, rows, matrix);
    }
}
exports.default = Grid;
//# sourceMappingURL=Grid.js.map