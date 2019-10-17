// CLUSTER CLASS
// Cluster will be used to display multi-cellular components on the grid.
//  It is a collection of cells with an emergent behaviour.

import Coord from "./Coord";
import Element from "./Element";
import Cell, { CellInterface } from "./Cell";

export default class Cluster {
  cellList: Cell[];

  // Allow constructor with origin coord, number array and direction
  constructor(cellList: Cell[]) {
    this.cellList = cellList;
  }

  // Retrieve list of coordinates of the cluster
  get coords(): Coord[] {
    return this.cellList.map(cell => cell.coord);
  }

  // Retrieve list of elements of the cluster
  get elements(): Element[] {
    return this.cellList.map(cell => cell.element);
  }

  // Origin of the cluster is the first element coordinates.
  get origin(): Coord {
    return this.cellList[0].coord;
  }

  // import cells
  public importCluster(jsonCells: CellInterface[]): void {
    jsonCells.map(jsonCell => {
      const cell = Cell.importCell(jsonCell);
      this.cellList.push(cell);
    });
  }

  // export JSON file to save state oi the game
  public exportCluster(): CellInterface[] {
    return this.cellList
      .filter(cell => {
        return cell.element.name !== "Void";
      })
      .map(cell => {
        return cell.exportCell();
      });
  }
}
