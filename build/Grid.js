// GRID CLASS
import * as math from 'mathjs';
import * as _ from 'lodash';
export default class Grid {
    constructor(col_count, row_count, matrix) {
        this.col_count = col_count;
        this.row_count = row_count;
        if (matrix) {
            this.matrix = matrix;
        }
        else {
            this.matrix = math.matrix(math.zeros(col_count, row_count), "sparse");
        }
        this.vectors = [];
    }
    set(coord, value) {
        if (this.isCoordInsideGrid(coord)) {
            this.matrix.set(coord, value);
        }
        else {
            throw ('Coordinate out of bounds.');
        }
    }
    get(coord) {
        return this.matrix.get(coord);
    }
    addVector(vec) {
        this.vectors.push(vec);
        vec.scalars.forEach((elem) => {
            this.set(elem.coord, elem.val);
        });
    }
    isCoordInsideGrid(coord) {
        const x = coord[0];
        const y = coord[1];
        if ((x >= 0 && x < this.col_count) && (y >= 0 && y < this.row_count)) {
            return true;
        }
        return false;
    }
    collisionCheck(vec) {
        // Look for colliding cells
        const intersect = [];
        this.vectors.forEach((coord, index) => {
            const temp = _.intersection(coord.indices, vec.indices);
            if (temp.length > 0) {
                intersect.push(temp);
                console.log('Intersect with vector: ' + index);
            }
        });
        console.log(intersect);
        return intersect;
    }
    // Two point area selection
    // TODO: Get only coords inside bounds
    submatrix(A, B) {
        if (!this.isCoordInsideGrid(A) || !this.isCoordInsideGrid(B)) {
            throw ('Coordinates outside of bounds.');
        }
        const minX = math.min(A[0], B[0]);
        const maxX = math.max(A[0], B[0]);
        const minY = math.min(A[1], B[1]);
        const maxY = math.max(A[1], B[1]);
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
        return coord[1] * this.col_count + coord[0];
    }
    getCoordFromIndex(index) {
        const x = index % this.col_count;
        const y = Math.floor(index / this.col_count);
        return [x, y];
    }
    display() {
        console.log(this.matrix.valueOf());
    }
    exportJSON() {
        return {
            matrix: this.matrix.toJSON(),
            vectors: this.vectors
        };
    }
    // Static functions
    static loadMatrix(matrix) {
        const cols = matrix.size()[0];
        const rows = matrix.size()[1];
        return new Grid(cols, rows, matrix);
    }
}
//# sourceMappingURL=Grid.js.map