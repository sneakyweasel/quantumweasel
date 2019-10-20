// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
// FIXME: Figure out blank cells in constructor
import { Operator } from "quantum-tensors";
import Coord from "./Coord";
import Cell, { CellInterface } from "./Cell";
import { GridInterface } from "./Grid";
import Cluster from "./Cluster";
import Particle, { ParticleInterface } from "./Particle";
import Element from "./Element";

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
export default class Grid extends Cluster {
  public cols: number;
  public rows: number;
  public cluster: Cluster;
  public paths: Particle[];

  constructor(rows: number, cols: number, cells?: Cell[]) {
    super(cells);
    this.rows = rows;
    this.cols = cols;
    this.cluster = new Cluster(cells);
    // If cells are given compute the laser path
    this.paths = this.computePaths();
  }

  /**
   * Set a cell at a specific coordinate
   * @param cell Cell to set at a grid coordinate
   * @returns boolean if operation is successfull
   */
  public set(cell: Cell): boolean {
    if (this.includes(cell.coord)) {
      this.cluster.cellList.push(cell);
      return true;
    } else {
      throw new Error(
        `Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`
      );
    }
  }

  /**
   * Retrieve the cell at a specified coordinate
   * @param coord Coordinate to get
   * @returns Cell
   */
  public get(coord: Coord): Cell {
    return (
      this.cells.filter(cell => {
        return coord.equal(cell.coord);
      })[0] || new Cell(coord, Element.fromName("Void"))
    );
  }

  /**
   * @returns list of non blank cells
   */
  get cells(): Cell[] {
    return this.cluster.cellList;
  }

  /**
   * @returns list of non blank cell coordinates
   */
  get coords(): Coord[] {
    return this.cells.map(cell => cell.coord);
  }

  /**
   * @returns list of non blank cell elements
   */
  get elements(): Element[] {
    return this.cells.map(cell => cell.element);
  }

  /**
   * Get center cell of the grid
   * @returns center cell coordinates
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
    return this.cluster.unvoid.cellList.map(cell => {
      return [
        cell.coord.x,
        cell.coord.y,
        cell.element.transition(cell.rotation)
      ];
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
      console.debug(
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
   * Move all elements to a common direction
   * @param direction direction string
   */
  public moveAll(direction: string): void {
    this.cells.map(cell => {
      switch (direction) {
        case "top":
          cell.coord = cell.coord.up;
          break;
        case "bottom":
          cell.coord = cell.coord.down;
          break;
        case "left":
          cell.coord = cell.coord.left;
          break;
        case "right":
          cell.coord = cell.coord.right;
          break;
        default:
          throw new Error("Wrong direction given: [top, bottom, left, right]");
      }
      this.set(cell);
    });
  }

  /**
   * Fire all the lasers
   * @returns the particles fired
   */
  public fireLasers(): Particle[] {
    return this.lasers.active.cellList.map(laser => {
      return laser.fire();
    });
  }

  /**
   * Compute the classical intensity using laser paths of a coordinate
   * FIXME: Move to level or to grid
   * @param coord Coordinate
   */
  coordIntensitySum(coord: Coord): number {
    let sum = 0;
    this.paths
      .filter(particleInterface => {
        return coord.equal(particleInterface.coord);
      })
      .map(particle => {
        sum += particle.intensity;
      });
    return sum;
  }

  /**
   * Compute the laser path of a particle
   * @param particle Particle which needs its laser path computed
   * @param maxFrames Max number of frames to compute
   * @returns list of "path particles"
   */
  laserPath(particle: Particle, maxFrames = 40): Particle[] {
    // Make a depp clone of the particle
    let alive: Particle[] = [particle];
    const dead: Particle[] = [];

    // Simulate path with a specific number of frames
    for (let i = 0; i < maxFrames; i++) {
      // Propagate each living particle
      alive.forEach(particle => {
        particle.next();

        // Zero the intensity of escaping particles
        if (!this.includes(particle.coord)) {
          particle.intensity = 0;
        }

        // Absorption
        this.cluster.absorbers.cellList.forEach((absorber: Cell) => {
          if (particle.on(absorber)) {
            particle.intensity -=
              particle.intensity * absorber.element.absorption;
          }
        });

        // Reflection
        this.cluster.mirrors.cellList.forEach((mirror: Cell) => {
          if (particle.on(mirror)) {
            particle.direction =
              (2 * mirror.rotation - particle.direction + 360) % 360;
          }
        });
        this.cluster.polarbeamsplitters.cellList.forEach((polar: Cell) => {
          if (particle.on(polar)) {
            if (polar.rotation === 0) {
              const direction =
                (2 * (polar.rotation - 45) - particle.direction + 360) % 360;
              alive.push(
                new Particle(particle.coord, direction, particle.intensity)
              );
            }
            if (polar.rotation === 180) {
              const direction =
                (2 * (polar.rotation + 45) - particle.direction + 360) % 360;
              alive.push(
                new Particle(particle.coord, direction, particle.intensity)
              );
            }
          }
        });
        this.cluster.beamsplitters.cellList.forEach((beamsplitter: Cell) => {
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
        this.cluster.phaseshifters.cellList.forEach((phaseshifter: Cell) => {
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
  computePaths(): Particle[] {
    const laserCoords: Particle[] = [];
    const particles: Particle[] = [];
    this.cluster.lasers.active.cellList.map(laser => {
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
    this.unvoid.cellList.forEach(cell => {
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
   * Sets the grid with the appropriate cells
   * @param jsonCells A list of cell interface
   */
  public importGrid(jsonCells: CellInterface[]): void {
    jsonCells.forEach(jsonCell => {
      const cell = Cell.importCell(jsonCell);
      this.cluster.cellList.push(cell);
      this.set(cell);
    });
  }

  /**
   * Exports the grid to an interface of primitives
   * @returns a grid interface
   */
  public exportGrid(): GridInterface {
    const cells: CellInterface[] = [];
    this.cells
      .filter(cell => !cell.isVoid)
      .forEach(cell => {
        cells.push(cell.exportCell());
      });
    return {
      cols: this.cols,
      rows: this.rows,
      cells: cells
    };
  }
}
