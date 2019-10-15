import { Display, Scheduler, KEYS } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";
import { displayText } from "./Helpers";

import Coord from "./Coord";
import Glyph from "./Glyph";
import Cell from "./Cell";
import Grid from "./Grid";
import Level from "./Level";
import GameState from "./GameState";
import InputUtility from "./InputUtility";
import Player from "./Player";
import Frame from "./Frame";
import { Actor } from "./Actor";
import Particle from "./Particle";

export default class Game {
  // Game logic
  public level: Level;
  public frames: Frame[];
  private frameNumber: number;
  public laserPaths: Particle[];
  private gameState: GameState;
  // Game display
  private display: Display;
  private scheduler: Simple;
  private player: Player;
  private tilesize = 32;

  constructor(level: Level, tilesize = 32, frames = []) {
    // Game mechanics
    this.level = level;
    this.gameState = new GameState();
    this.frames = frames;
    this.frames.push(new Frame(level));
    this.frameNumber = 0;

    // Game display
    this.tilesize = tilesize;
    const tileSet = document.createElement("img");
    tileSet.src = `./tiles/tilemap_${this.tilesize}.png`;
    const tileMap = Glyph.processTileMap(this.tilesize);
    this.display = new Display({
      // layout: "tile",
      layout: "tile-gl",
      bg: "transparent",
      width: level.grid.cols,
      height: level.grid.rows,
      fontSize: 20,
      tileWidth: this.tilesize,
      tileHeight: this.tilesize,
      tileSet,
      tileMap
      // tileColorize: true
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("grid")!.appendChild(this.display.getContainer()!);

    // Enter main loop
    this.initializeGame();
    this.mainLoop();
  }

  // Getters and setters
  get playerCell(): Cell {
    return this.player.cell;
  }
  get playerCoord(): Coord {
    return this.player.coord;
  }
  get grid(): Grid {
    return this.level.grid;
  }
  get lastFrame(): Frame {
    return this.frames[this.frames.length - 1];
  }
  get firstFrame(): Frame {
    return this.frames[0];
  }
  get currentFrame(): Frame {
    return this.frames[this.frameNumber];
  }
  get maxFrameNumber(): number {
    return this.frames.length;
  }

  /**
   * Initialize the game
   */
  private initializeGame(): void {
    this.display.clear();
    if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
      console.log("Starting game...");
    } else {
      alert("Victory!");
    }
    this.gameState.reset();
    this.player = new Player(this.level, this.grid.center);
    this.scheduler = new Scheduler.Simple();
    this.scheduler.add(this.player, true);

    displayText("title", this.level.id + " - " + this.level.name);
    displayText("description", this.level.description);
    this.drawGame();
  }

  /**
   * Main loop of the game
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async mainLoop(): Promise<any> {
    let actor: Actor;
    while (true) {
      actor = this.scheduler.next();
      if (!actor) {
        break;
      }
      await actor.act();
      await InputUtility.waitForInput(this.handleInput.bind(this));
      this.drawGame();
    }
  }

  // Find a way to detect looping laser paths
  private drawGame(): void {
    this.display.clear();
    this.laserPaths = this.grid.laserCoords();
    this.grid.energizeCells(this.laserPaths);
    this.grid.activateCells();
    this.displayDebug();
    this.drawFrame();
  }

  // Display relevant informations in html
  private displayDebug(): void {
    displayText("cell", this.player.cell.toString());
    displayText(
      "player",
      `Turns: ${this.frameNumber}/${
        this.maxFrameNumber
      } | player: ${this.playerCoord.toString()}`
    );
    displayText(
      "laser",
      `Active particles: ${Particle.manyToString(this.currentFrame.particles)}`
    );
  }

  // Draw the main grid
  public drawGrid(): void {
    this.display.clear();
    console.log(`Rendering WebGL game grid...`);
    for (let y = 0; y < this.grid.rows; y++) {
      for (let x = 0; x < this.grid.cols; x++) {
        const coord = Coord.importCoord({ y: y, x: x });
        this.drawCoord(coord);
      }
    }
  }

  // Draw indivdual cells
  drawCoord(coord: Coord): void {
    // Gather character list
    const cell = this.grid.get(coord);
    const charList: string[] = [cell.ascii];
    const fgList: string[] = ["white"];
    const bgList: string[] = ["purple"];

    // Add player
    if (this.player.coord.equal(coord)) {
      charList.push("@");
    }

    //  Color variables
    if (cell.frozen) {
      bgList.push("turquoise");
    }
    if (cell.energized) {
      bgList.push("red");
    }

    // Classical path intensity
    const sum = this.coordIntensitySum(coord);
    if (sum > 0) {
      bgList.push(`rgba(255, 0, 0, ${sum / 3})`);
    }

    // Display quantum photon
    this.currentFrame.quantum.forEach(particle => {
      if (particle && particle.coord.equal(coord) && particle.isVertical) {
        charList.push("d");
      }
      if (particle && particle.coord.equal(coord) && !particle.isVertical) {
        charList.push("P");
      }
    });
    this.display.draw(
      coord.x,
      coord.y,
      charList,
      fgList[fgList.length - 1],
      bgList[bgList.length - 1]
    );
  }

  // Particles on a specific coord
  coordIntensitySum(coord: Coord): number {
    let sum = 0;
    this.laserPaths
      .filter(particleInterface => {
        return coord.equal(particleInterface.coord);
      })
      .map(particle => {
        sum += particle.intensity;
      });
    return sum;
  }

  // Move through different frames
  private handleInput(event: KeyboardEvent): void {
    // Filter key events
    const code = event.keyCode;
    if (code === KEYS.VK_SUBTRACT || code === KEYS.VK_ADD) {
      switch (code) {
        case KEYS.VK_SUBTRACT:
          this.frameNumber -= 1;
          break;
        case KEYS.VK_ADD:
          this.frameNumber += 1;
          break;
        default:
          break;
      }
      // Don't go out of bounds
      if (this.frameNumber <= 0) {
        this.frameNumber = 0;
      }
      if (this.frameNumber >= this.frames.length - 1) {
        this.frameNumber = this.frames.length - 1;
        const nextFrame = this.lastFrame.next();
        this.frames.push(nextFrame);
      }
    } else {
      this.player.handleInput(event);
    }
    this.drawGame();
  }

  // Display frame
  private drawFrame(frame = this.currentFrame): void {
    // console.log(`--- Displaying frame ${this.frameNumber} ---`);
    // console.log(this.currentFrame.toString());
    displayText(
      "laser",
      `Active particles: ${Particle.manyToString(frame.particles)}`
    );
    this.drawGrid();
  }
}
