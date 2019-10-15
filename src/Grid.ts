// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
// FIXME: Figure out blank cells in constructor
// FIXME: Move functions to a Cluster Cell[] functionality
import { Operator } from "quantum-tensors";
import Coord from "./Coord";
import Element from "./Element";
import Cell, { CellInterface } from "./Cell";
import { GridInterface } from "./Grid";
import Cluster from "./Cluster";
import Particle, { ParticleInterface } from "./Particle";

/**
 * Grid interface composed of primitive JS types
 */
export interface GridInterface {
  cols: number;
  rows: number;
  cells: CellInterface[];
}

/**
 * Grid class includes the grid instance that holds the cells
 */
export default class Grid {
  public cols: number;
  public rows: number;
  public matrix: Cell[][];
  public clusters: Cluster[];

  constructor(rows: number, cols: number, matrix?: Cell[][]) {
    this.rows = rows;
    this.cols = cols;
    this.clusters = [];

    // If matrix specified extract cells
    if (matrix) {
      this.matrix = matrix;
    } else {
      // Else create blank cells
      this.matrix = new Array(this.rows)
        .fill(0)
        .map(() => new Array(this.cols).fill(0));
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const coord = Coord.importCoord({ y: y, x: x });
          this.set(new Cell(coord, Element.fromName("void")));
        }
      }
    }
  }

  /**
   * Get center coordinate of grid
   * @returns center coordinate
   */
  get center(): Coord {
    return Coord.importCoord({
      y: Math.floor(this.cols / 2),
      x: Math.floor(this.rows / 2)
    });
  }

  /**
   * Retrieve the list of quantum operators from the elements
   * @returns list of operators
   */
  get operatorList(): [number, number, Operator][] {
    return this.unvoid.map(cell => {
      return [
        cell.coord.x,
        cell.coord.y,
        cell.element.transition(cell.rotation)
      ];
    });
  }

  /**
   * Filters cells by name (needs refactoring)
   * @param name Name of the element to look for
   * @returns list of cells of a specific type
   */
  public filteredBy(name: string): Cell[] {
    return this.cells.filter(cell => {
      return cell.element.name === name;
    });
  }

  /**
   * Filter cells that are not of a specific type
   * @param name Name of the element to avoid
   */
  public filteredByNot(name: string): Cell[] {
    return this.cells.filter(cell => {
      return cell.element.name !== name;
    });
  }

  /**
   * Is a coordinate inside the grid
   * @param coord Coordiante to test
   * @returns boolean if included
   */
  public includes(coord: Coord): boolean {
    return (
      coord.y >= 0 &&
      coord.y < this.rows &&
      (coord.x >= 0 && coord.x < this.cols)
    );
  }

  /**
   * Set a cell at a specific coordinate
   * @param cell Cell to set at a grid coordinate
   * @returns boolean if operation is successfull
   */
  public set(cell: Cell): boolean {
    if (this.includes(cell.coord)) {
      this.matrix[cell.coord.y][cell.coord.x] = cell;
      return true;
    } else {
      // throw new RangeError(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
      // console.error(`Coordinate out of bounds. ${cell.coord.toString()}`)
      return false;
    }
  }

  /**
   * Retrieve the cell at a specified coordinate
   * @param coord Coordinate to get
   * @returns Cell
   */
  public get(coord: Coord): Cell {
    return this.matrix[coord.y][coord.x];
  }

  /**
   * Move a cell to another coord
   * @param src source coordinate
   * @param dst destination coordinate
   * @returns boolean if success
   */
  public move(src: Coord, dst: Coord): boolean {
    const cellSrc = this.get(src);
    const cellDst = this.get(dst);
    if (!cellSrc.frozen && !cellDst.frozen) {
      this.set(new Cell(src, cellDst.element, cellDst.rotation));
      this.set(new Cell(dst, cellSrc.element, cellSrc.rotation));
      console.log(
        `Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`
      );
      return true;
    } else {
      console.error(
        `Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`
      );
      return false;
    }
  }

  /**
   * Fire all the lasers
   * @returns the particles fired
   */
  public fireLasers(): Particle[] {
    return this.activeLasers.map(laser => {
      return laser.fire();
    });
  }

  /**
   * Compute the laser path of a particle
   * @param particle Particle which needs its laser path computed
   * @param maxFrames Max number of frames to compute
   * @returns list of "path particles"
   */
  laserPath(particle: Particle, maxFrames = 50): Particle[] {
    // Make a depp clone of the particle
    let alive: Particle[] = [particle];
    const dead: Particle[] = [];

    // Simulate path with a specific number of frames
    for (let i = 0; i < maxFrames; i++) {
      // Process each living particle
      alive.forEach(particle => {
        particle.next();

        // Zero the intensity of escaping particles
        if (!this.includes(particle.coord)) {
          particle.intensity = 0;
        }

        // Absorption
        this.absorbers.forEach((absorber: Cell) => {
          if (particle.on(absorber)) {
            particle.intensity -=
              particle.intensity * absorber.element.absorption;
          }
        });

        // Reflection
        this.mirrors.forEach((mirror: Cell) => {
          if (particle.on(mirror)) {
            particle.direction =
              (2 * mirror.rotation - particle.direction + 360) % 360;
          }
        });
        this.beamsplitters.forEach((beamsplitter: Cell) => {
          if (particle.on(beamsplitter)) {
            // Dim the current particle intensity
            particle.intensity /= 2;
            // Reflecting particle (create new reflected faded particle)
            const direction =
              (2 * beamsplitter.rotation - particle.direction + 360) % 360;
            alive.push(
              new Particle(particle.coord, direction, particle.intensity)
            );
          }
        });

        // Phase shifters
        this.phaseshifters.forEach((phaseshifter: Cell) => {
          if (particle.on(phaseshifter)) {
            particle.phase = (particle.phase + phaseshifter.element.phase) % 1;
          }
        });
      });

      // Filter the living from the dead
      alive.forEach(particle => {
        if (!particle.alive) {
          dead.push(particle);
        }
      });
      alive = alive.filter(particle => {
        return particle.alive;
      });
    }

    // Flatten and dedupe list of particles
    const pathParticles: Particle[][] = [];
    alive = dead.concat(alive);
    alive.forEach(particle => {
      // particle.path
      pathParticles.push(particle.pathParticle);
    });
    return [...new Set(pathParticles.flat())];
  }

  /**
   * Gives the classical laser path of a specific particle
   * @returns a list of coordinates
   * */
  laserCoords(): Particle[] {
    const laserCoords: Particle[] = [];
    const particles: Particle[] = [];
    this.activeLasers.map(laser => {
      particles.push(laser.fire());
    });
    particles.forEach(particle => {
      this.laserPath(particle, 40).forEach((particle: Particle) => {
        if (particle.coord.isIncludedIn(this.coords)) {
          laserCoords.push(particle);
        }
      });
    });
    return laserCoords;
  }

  /**
   * Set the cells as energized if on this laser path.
   * @param paths laser path to energize
   */
  energizeCells(paths: ParticleInterface[]): void {
    const pathCoords: Coord[] = paths.map(pathParticle => pathParticle.coord);
    this.cells.forEach(cell => {
      if (cell.coord.isIncludedIn(pathCoords) && cell.element.name !== "void") {
        cell.energized = true;
      } else {
        cell.energized = false;
      }
    });
  }

  /**
   * Set the adjacent cells as active if they are near an energized detector
   */
  activateCells(): void {
    this.unvoid.forEach(cell => {
      if (cell.element.name !== "laser") {
        cell.active = false;
      }
      const energizedAdjacent = this.adjacentCells(cell.coord).filter(
        adjacent => {
          return adjacent.energized && adjacent.element.name === "detector";
        }
      );
      if (energizedAdjacent.length > 0) {
        console.log(
          `Cell ${cell.toString()} has 1+ active detectors as adjacent cell.`
        );
        cell.active = true;
      }
    });
  }

  /**
   * Return adjacent cells to a coordinate
   * @param coord Coordinate
   * @returns a list of adjacent cells
   */
  adjacentCells(coord: Coord): Cell[] {
    const adjacents: Cell[] = [];
    coord.adjacent.forEach(adjacent => {
      if (this.includes(adjacent)) {
        adjacents.push(this.get(adjacent));
      }
    });
    return adjacents;
  }

  /**
   * Output an ASCII grid
   * @returns an ascii grid
   */
  public get ascii(): string {
    let result = "";
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const coord = Coord.importCoord({ y: y, x: x });
        result += this.get(coord).ascii;
      }
      result += "\n";
    }
    return result;
  }

  /**
   * Trim the void around the cells and return the smallest level container
   * @returns a list of cells with trimmed coordinates
   */
  public compress(): Cell[] {
    const cells = this.unvoid;
    const minX = Math.min(...cells.map(cell => cell.coord.x));
    const minY = Math.min(...cells.map(cell => cell.coord.y));
    const maxX = Math.max(...cells.map(cell => cell.coord.x));
    const maxY = Math.max(...cells.map(cell => cell.coord.y));
    const sizeX = maxX - minX;
    const sizeY = maxY - minY;
    console.log(`The most compressed version is: X:${sizeX} Y: ${sizeY}`);

    cells.forEach(cell => {
      cell.coord.x -= minX;
      cell.coord.y -= minY;
    });
    return cells;
  }

  /**
   * Sets the grid with the appropriate cells
   * @param jsonCells A list of cell interface
   */
  public importGrid(jsonCells: CellInterface[]): void {
    jsonCells.forEach(jsonCell => {
      const cell = Cell.importCell(jsonCell);
      this.set(cell);
    });
  }

  /**
   * Exports the grid to an interface of primitives
   * @returns a grid interface
   */
  public exportGrid(): GridInterface {
    const cells: CellInterface[] = [];
    this.unvoid.forEach(cell => {
      cells.push(cell.exportCell());
    });
    return {
      cols: this.cols,
      rows: this.rows,
      cells: cells
    };
  }

  /** List of helpers */
  get cells(): Cell[] {
    return this.matrix.reduce((acc, val) => acc.concat(val), []);
  }
  get coords(): Coord[] {
    return this.cells.flatMap(cell => cell.coord);
  }
  get void(): Cell[] {
    return this.filteredBy("void");
  }
  get unvoid(): Cell[] {
    return this.filteredByNot("void");
  }
  get activeCells(): Cell[] {
    return this.cells.filter(cell => cell.active);
  }

  // Emitters
  get lasers(): Cell[] {
    return this.filteredBy("laser");
  }
  get activeLasers(): Cell[] {
    return this.filteredBy("laser").filter(laser => laser.active === true);
  }
  // Reflectors
  get mirrors(): Cell[] {
    return this.filteredBy("mirror");
  }
  get beamsplitters(): Cell[] {
    return this.filteredBy("beamsplitter");
  }
  get coatedsplitters(): Cell[] {
    return this.filteredBy("coatedsplitter");
  }
  get polarsplitters(): Cell[] {
    return this.filteredBy("polarsplitter");
  }
  get reflectors(): Cell[] {
    return this.mirrors.concat(
      this.beamsplitters,
      this.coatedsplitters,
      this.polarsplitters
    );
  }
  // Absorbers
  get detectors(): Cell[] {
    return this.filteredBy("detector");
  }
  get energizedDetectors(): Cell[] {
    return this.detectors.filter(detector => detector.energized);
  }
  get unenergizedDetectors(): Cell[] {
    return this.detectors.filter(detector => !detector.energized);
  }
  get mines(): Cell[] {
    return this.filteredBy("mine");
  }
  get rocks(): Cell[] {
    return this.filteredBy("rock");
  }
  get omnidetectors(): Cell[] {
    return this.filteredBy("omnidetector");
  }
  get filters(): Cell[] {
    return this.filteredBy("filter");
  }
  get walls(): Cell[] {
    return this.filteredBy("wall");
  }
  get closedGates(): Cell[] {
    return this.filteredBy("gate").filter(gate => !gate.active);
  }
  get openedGates(): Cell[] {
    return this.filteredBy("gate").filter(gate => gate.active);
  }
  get absorbers(): Cell[] {
    return this.detectors.concat(
      this.mines,
      this.rocks,
      this.omnidetectors,
      this.filters,
      this.walls,
      this.closedGates
    );
  }
  // Polarizers
  get absorbPolarizers(): Cell[] {
    return this.filteredBy("absorb-polarizer");
  }
  get waveplates(): Cell[] {
    return this.filteredBy("waveplate");
  }
  get sugars(): Cell[] {
    return this.filteredBy("sugar");
  }
  get faradays(): Cell[] {
    return this.filteredBy("faraday");
  }
  get polarizers(): Cell[] {
    return this.absorbPolarizers.concat(
      this.waveplates,
      this.sugars,
      this.faradays
    );
  }
  // Phasers
  get phaseincs(): Cell[] {
    return this.filteredBy("phaseinc");
  }
  get phasedecs(): Cell[] {
    return this.filteredBy("phasedec");
  }
  get phaseshifters(): Cell[] {
    return this.phasedecs.concat(this.phaseincs);
  }
}
