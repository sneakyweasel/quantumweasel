// CLUSTER CLASS
// Cluster will be used to display multi-cellular components on the grid.
//  It is a collection of cells with an emergent behaviour.

import Coord from "./Coord";
import Element from "./Element";
import Cell from "./Cell";

export default class Cluster {
  cells: Cell[];

  // Allow constructor with origin coord, number array and direction
  constructor(cells: Cell[]) {
    this.cells = cells;
  }

  // Retrieve list of coordinates of the cluster
  coords(): Coord[] {
    const coordsList: Coord[] = [];
    this.cells.forEach(cell => {
      coordsList.push(cell.coord);
    });
    return coordsList;
  }

  // Retrieve list of elements of the cluster
  elements(): Element[] {
    const elementsList: Element[] = [];
    this.cells.forEach(cell => {
      elementsList.push(cell.element);
    });
    return elementsList;
  }

  // Origin of the cluster is the first element coordinates.
  origin(): Coord {
    return this.cells[0].coord;
  }

  // Export JSON
  exportJSON(): {} {
    return JSON.stringify(this);
  }
}
