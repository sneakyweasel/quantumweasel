/**
 * COORDINATE INTERFACE
 * A coordinates interface of primitives
 */
export interface CoordInterface {
  x: number;
  y: number;
}

/**
 * COORDINATE CLASS
 * Coordinate is a basic class allowing to place elements on the grid
 * The grid goes from top-left to bottom right
 * Indices start at 0
 */
export default class Coord {
  x: number;
  y: number;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }

  /**
   * @returns coordinate at the top
   */
  get up(): Coord {
    return Coord.importCoord({ y: this.y - 1, x: this.x });
  }

  /**
   * @returns coordinate at the bottom
   */
  get down(): Coord {
    return Coord.importCoord({ y: this.y + 1, x: this.x });
  }

  /**
   * @returns coordinate at the left
   */
  get left(): Coord {
    return Coord.importCoord({ y: this.y, x: this.x - 1 });
  }

  /**
   * @returns coordinate at the right
   */
  get right(): Coord {
    return Coord.importCoord({ y: this.y, x: this.x + 1 });
  }

  /**
   * @returns list of adjacent cells
   */
  get adjacent(): Coord[] {
    return [this.up, this.right, this.down, this.left];
  }

  /**
   * Check if two coordinates are adjacent
   * @returns boolean if cells are adjacent
   */
  isAdjacent(coord: Coord): boolean {
    return coord.isIncludedIn(this.adjacent);
  }

  /**
   * Test two coordinates for equality
   * @param coord other coordinate to test for equality
   * @returns boolean if equal
   */
  equal(coord: Coord): boolean {
    return this.x === coord.x && this.y === coord.y;
  }

  /**
   * Test if a coordinate is included in a list of coordinates
   * @param coords list of coordinates
   * @returns boolean if coordinate is included in list
   */
  isIncludedIn(coords: Coord[]): boolean {
    return (
      coords.filter(coord => {
        return this.equal(coord);
      }).length > 0
    );
  }

  /**
   * Unique identifier of a coordinate in a cell
   * @param rows width of grid
   * @returns uid of cell in a grid
   */
  uid(rows: number): number {
    return this.y * rows + this.x;
  }

  /**
   * SVG coordinate system: top-left point of cell
   * @param cellSize Size in pixel of a cell
   * @returns top-left coordinate of a cell
   */
  pos(spacing: number): [number, number] {
    const y = this.y * spacing;
    const x = this.x * spacing;
    return [y, x];
  }

  /**
   * Output as an array of numbers
   * @returns number array of coordinate
   */
  get array(): number[] {
    return [this.y, this.x];
  }

  /**
   * Outputs a string for debug
   * @returns string describing the coordinate
   */
  toString(): string {
    return `[Y:${this.y}, X:${this.x}]`;
  }

  /**
   * Output to interface of primitives
   * @returns interface describing coordinate
   */
  exportCoord(): CoordInterface {
    return {
      y: this.y,
      x: this.x
    };
  }

  /**
   * Create a coordinate class instance from a coordinate interface
   * @param obj Coordinate interface
   */
  static importCoord(json: CoordInterface): Coord {
    return new Coord(json.y, json.x);
  }

  /**
   * Create a coordinate class instance from a unique id and number of columns
   * @param index unique id
   * @param cols width of grid
   */
  static fromId(index: number, cols: number): Coord {
    const x = index % cols;
    const y = Math.floor(index / cols);
    return Coord.importCoord({ y: y, x: x });
  }
}
