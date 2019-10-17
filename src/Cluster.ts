// CLUSTER CLASS
// Cluster will be used to display multi-cellular components on the grid.
//  It is a collection of cells with an emergent behaviour.

import Coord from "./Coord";
import Element from "./Element";
import Cell, { CellInterface } from "./Cell";
import { Elem } from "./Helpers";

export default class Cluster {
  cellList: Cell[];

  // Allow constructor with origin coord, number array and direction
  constructor(cellList: Cell[] = []) {
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

  /**
   * Trim the void around the cells and return the smallest level container
   * @returns a list of cells with trimmed coordinates
   */
  public compress(): Cluster {
    const cluster = this.unvoid;
    const minX = Math.min(...cluster.cellList.map(cell => cell.coord.x));
    const minY = Math.min(...cluster.cellList.map(cell => cell.coord.y));
    const maxX = Math.max(...cluster.cellList.map(cell => cell.coord.x));
    const maxY = Math.max(...cluster.cellList.map(cell => cell.coord.y));
    const sizeX = maxX - minX;
    const sizeY = maxY - minY;
    console.debug(`The most compressed version is: X:${sizeX} Y: ${sizeY}`);

    cluster.cellList.forEach(cell => {
      cell.coord.x -= minX;
      cell.coord.y -= minY;
    });

    return cluster;
  }

  /**
   * Import liqr of files in primitive types
   * @param jsonCells : cells
   */
  public importCluster(jsonCells: CellInterface[]): void {
    jsonCells.map(jsonCell => {
      const cell = Cell.importCell(jsonCell);
      this.cellList.push(cell);
    });
  }

  /**
   * Export list of cells in primitives
   */
  public exportCluster(): CellInterface[] {
    return this.cellList
      .filter(cell => {
        return cell.element.name !== Elem.Void;
      })
      .map(cell => {
        return cell.exportCell();
      });
  }

  /**
   * Override toString() method
   * @returns string
   */
  public toString(): string {
    return this.cellList.map(cell => cell.toString()).join(" | ");
  }

  /**
   * Filters cells by name (needs refactoring)
   * @param name Name of the element to look for
   * @returns list of cells of a specific type
   */
  public filteredBy(name: string): Cluster {
    return new Cluster(
      this.cellList.filter(cell => {
        return cell.element.name === name;
      })
    );
  }

  /**
   * Filter cells that are not of a specific type
   * @param name Name of the element to avoid
   */
  public filteredByNot(name: string): Cluster {
    return new Cluster(
      this.cellList.filter(cell => {
        return cell.element.name !== name;
      })
    );
  }

  get void(): Cluster {
    return new Cluster(this.filteredBy(Elem.Void).cellList);
  }
  get unvoid(): Cluster {
    return new Cluster(this.filteredByNot(Elem.Void).cellList);
  }
  get active(): Cluster {
    return new Cluster(this.cellList.filter(cell => cell.active));
  }
  get inactive(): Cluster {
    return new Cluster(this.cellList.filter(cell => !cell.active));
  }
  get energized(): Cluster {
    return new Cluster(this.cellList.filter(cell => cell.energized));
  }
  get unenergized(): Cluster {
    return new Cluster(this.cellList.filter(cell => !cell.energized));
  }
  get frozen(): Cluster {
    return new Cluster(this.cellList.filter(cell => cell.frozen));
  }
  get unfrozen(): Cluster {
    return new Cluster(this.cellList.filter(cell => !cell.frozen));
  }

  // Emitters
  get lasers(): Cluster {
    return this.filteredBy(Elem.Laser);
    // return this.filteredBy("Laser");
  }

  // Reflectors
  get mirrors(): Cluster {
    return this.filteredBy(Elem.Mirror);
  }
  get beamsplitters(): Cluster {
    return this.filteredBy(Elem.BeamSplitter);
  }
  get coatedbeamsplitters(): Cluster {
    return this.filteredBy(Elem.CoatedBeamSplitter);
  }
  get polarbeamsplitters(): Cluster {
    return this.filteredBy(Elem.PolarizingBeamSplitter);
  }
  get reflectors(): Cluster {
    return new Cluster(
      this.mirrors.cellList.concat(
        this.beamsplitters.cellList,
        this.coatedbeamsplitters.cellList,
        this.polarbeamsplitters.cellList
      )
    );
  }

  // Absorbers
  get detectors(): Cluster {
    return this.filteredBy(Elem.Detector);
  }
  get mines(): Cluster {
    return this.filteredBy(Elem.Mine);
  }
  get rocks(): Cluster {
    return this.filteredBy(Elem.Rock);
  }
  get fourdetectors(): Cluster {
    return this.filteredBy(Elem.DetectorFour);
  }
  get filters(): Cluster {
    return this.filteredBy(Elem.Absorber);
  }
  get walls(): Cluster {
    return this.filteredBy(Elem.Wall);
  }
  get gates(): Cluster {
    return this.filteredBy(Elem.Gate);
  }
  get closedGates(): Cluster {
    return this.gates.inactive;
  }
  get openedGates(): Cluster {
    return this.gates.active;
  }
  get absorbers(): Cluster {
    return new Cluster(
      this.detectors.cellList.concat(
        this.mines.cellList,
        this.rocks.cellList,
        this.fourdetectors.cellList,
        this.filters.cellList,
        this.walls.cellList,
        this.closedGates.cellList
      )
    );
  }
  // Polarizers
  get polarizersH(): Cluster {
    return this.filteredBy(Elem.PolarizerH);
  }
  get polarizersV(): Cluster {
    return this.filteredBy(Elem.PolarizerV);
  }
  get waveplatesH(): Cluster {
    return this.filteredBy(Elem.QuarterWavePlateH);
  }
  get waveplatesV(): Cluster {
    return this.filteredBy(Elem.QuarterWavePlateV);
  }
  get sugars(): Cluster {
    return this.filteredBy(Elem.SugarSolution);
  }
  get faradays(): Cluster {
    return this.filteredBy(Elem.FaradayRotator);
  }
  get polarizers(): Cluster {
    return new Cluster(
      this.polarizersH.cellList.concat(
        this.polarizersV.cellList,
        this.waveplatesH.cellList,
        this.waveplatesV.cellList,
        this.sugars.cellList,
        this.faradays.cellList
      )
    );
  }

  // Phasers
  get vacuumjars(): Cluster {
    return this.filteredBy(Elem.VacuumJar);
  }
  get glasses(): Cluster {
    return this.filteredBy(Elem.Glass);
  }
  get phaseshifters(): Cluster {
    return new Cluster(this.vacuumjars.cellList.concat(this.glasses.cellList));
  }
}
