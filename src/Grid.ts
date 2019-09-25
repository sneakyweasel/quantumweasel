// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
import Cell from "./Cell";
import Cluster from "./Cluster";
import Coord from "./Coord";
import Element from "./Element";
import Game from "./Game";
// import Frame from './Frame'
import Pointer from "./Pointer";
// import GameState from './GameState'

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
      // FIXME: Kinda ugly
      // Else create blank cells
      this.matrix = new Array(this.rows)
        .fill(0)
        .map(() => new Array(this.cols).fill(0));
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          this.set(new Cell(new Coord(y, x), Element.fromName("void")));
        }
      }
    }
  }
  // Get center coordinates of grid
  get center(): Coord {
    return new Coord(Math.floor(this.cols / 2), Math.floor(this.rows / 2));
  }

  // Cells getters
  get cells(): Cell[] {
    return this.matrix.flat(1);
  }
  get coords(): Coord[] {
    return this.cells.flatMap(cell => cell.coord);
  }
  get void(): Cell[] {
    return this.filteredBy("void");
  }
  // Emitters
  get lasers(): Cell[] {
    return this.filteredBy("laser");
  }
  // Reflectors
  get mirrors(): Cell[] {
    return this.filteredBy("mirror");
  }
  get beamsplitters(): Cell[] {
    return this.filteredBy("beamsplitter");
  }
  get reflectors(): Cell[] {
    return this.mirrors.concat(this.beamsplitters);
  }
  // Absorbers
  get mines(): Cell[] {
    return this.filteredBy("mine");
  }
  get detectors(): Cell[] {
    return this.filteredBy("detector");
  }
  get rocks(): Cell[] {
    return this.filteredBy("rock");
  }
  get filters(): Cell[] {
    return this.filteredBy("filter");
  }
  get absorbers(): Cell[] {
    return this.mines.concat(this.detectors, this.rocks, this.filters);
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

  // Select cells by type
  public filteredBy(name: string): Cell[] {
    return this.cells.filter(cell => {
      return cell.element.name === name;
    });
  }

  // Test if coord is inside boundaries
  public includes(coord: Coord): boolean {
    return (
      coord.y >= 0 &&
      coord.y < this.rows &&
      (coord.x >= 0 && coord.x < this.cols)
    );
  }

  // Set one cell
  // throw new RangeError(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
  public set(cell: Cell): boolean {
    if (this.includes(cell.coord)) {
      this.matrix[cell.coord.y][cell.coord.x] = cell;
      return true;
    } else {
      // console.error(`Coordinate out of bounds. ${cell.coord.toString()}`)
      return false;
    }
  }

  // Set many cells
  public setMany(...cells: Cell[]): boolean {
    let errorToggle = true;
    cells.forEach((cell: Cell) => {
      if (!this.includes(cell.coord)) {
        errorToggle = false;
      }
    });
    cells.forEach(cell => {
      this.set(cell);
    });
    return errorToggle;
  }

  // Get one cell
  public get(coord: Coord): Cell {
    return this.matrix[coord.y][coord.x];
  }

  // Get many cells
  public getMany(...coords: Coord[]): Cell[] {
    return coords.map(coord => {
      return this.get(coord);
    });
  }

  // Move from a coord to another
  public move(src: Coord, dst: Coord): boolean {
    const cellSrc = this.get(src);
    const cellDst = this.get(dst);
    if (!cellSrc.frozen && !cellDst.frozen) {
      this.set(new Cell(src, cellDst.element, cellDst.rotation));
      this.set(new Cell(dst, cellSrc.element, cellSrc.rotation));
      // console.log(`Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`)
      return true;
    } else {
      // console.error(`Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`)
      return false;
    }
  }

  // Distance to exiting grid
  public distanceToEscape(pointer: Pointer): number {
    switch (pointer.direction % 360) {
      case 0: // TOP
        return pointer.y;
      case 90: // RIGHT
        return this.cols - pointer.x - 1;
      case 180: // BOTTOM
        return this.rows - pointer.y - 1;
      case 270: // LEFT
        return pointer.x;
      default:
        throw new Error("Something went wrong with directions...");
    }
  }

  // Basic display
  public display(): void {
    console.log(this.matrix.valueOf());
  }

  // Draw
  public draw(game: Game): void {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const coord = new Coord(y, x);
        const cell = this.get(coord);
        const lasers = game.frames[game.frames.length - 1].laserCoords();
        if (coord.isIncludedIn(lasers)) {
          game.draw(cell, "white", "red");
        } else {
          game.draw(cell, "white", "#2e006a");
        }
      }
    }
  }

  // Include particle display in ascii render
  public asciiRender(pointers: Pointer[] = []): string {
    let result = "##".repeat(this.cols + 1) + "\n";
    for (let y = 0; y < this.rows; y++) {
      let asciiLine = "#";
      for (let x = 0; x < this.cols; x++) {
        // Add some sort of ascii z-index
        const coord = new Coord(y, x);
        if (coord.isIncludedIn(Pointer.manyToCoords(pointers))) {
          asciiLine += "* ";
        } else {
          const rotation = this.get(coord).rotation / 45;
          asciiLine += this.get(new Coord(y, x)).element.ascii[rotation] + " ";
        }
      }
      result += asciiLine + "#\n";
    }
    result += "##".repeat(this.cols + 1);
    return result;
  }

  public toString(): string {
    let basic = "";
    for (let y = 0; y < this.rows; y++) {
      let asciiLine = "";
      for (let x = 0; x < this.cols; x++) {
        asciiLine += this.get(new Coord(y, x)).element.id;
      }
      basic += asciiLine + "\n";
    }
    return basic;
  }

  // import cells
  // {x: 2, y: 2, element: "laser", rotation: 90, frozen: true}
  public importJSON(
    cells: Array<{
      y: number;
      x: number;
      element: string;
      rotation: number;
      frozen: boolean;
    }>
  ): void {
    cells.forEach(cell => {
      const coord = new Coord(cell.y, cell.x);
      const element = Element.fromName(cell.element);
      this.set(new Cell(coord, element, cell.rotation, cell.frozen));
    });
  }

  // export JSON file to save state oi the game
  public exportJSON(): string {
    return JSON.stringify(this);
  }
}
