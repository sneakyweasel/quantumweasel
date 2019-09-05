"use strict";
// CLUSTER CLASS
// Cluster will be used to display multi-cellular components on the grid.
//  It is a collection of cells with an emergent behaviour.
Object.defineProperty(exports, "__esModule", { value: true });
class Cluster {
    // Allow constructor with origin coord, number array and direction
    constructor(cells) {
        this.cells = cells;
    }
    // Retrieve list of coordinates of the cluster
    coords() {
        const coordsList = [];
        this.cells.forEach((cell) => {
            coordsList.push(cell.coord);
        });
        return coordsList;
    }
    // Retrieve list of elements of the cluster
    elements() {
        const elementsList = [];
        this.cells.forEach((cell) => {
            elementsList.push(cell.element);
        });
        return elementsList;
    }
    // Origin of the cluster is the first element coordinates.
    origin() {
        return this.cells[0].coord;
    }
    // Display cluster informations
    display() {
        console.log(`This cluster has ${this.cells.length} cells: ${JSON.stringify(this.cells)}`);
    }
    // Export JSON
    exportJSON() {
        return JSON.stringify(this);
    }
}
exports.default = Cluster;
//# sourceMappingURL=Cluster.js.map