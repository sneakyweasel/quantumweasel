import { Display, Scheduler, KEYS } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";

import Coord from "./Coord";
import Cell from "./Cell";
import Grid from "./Grid";
import Level from "./Level";
import GameState from "./GameState";
import StatusLine from "./StatusLine";
import InputUtility from "./InputUtility";
import MessageLog from "./MessageLog";
import Player from "./Player";
import Frame from "./Frame";
import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";

export default class Game {
  private display: Display;
  private scheduler: Simple;
  private level: Level;
  private player: Player;
  private statusLine: StatusLine;
  private messageLog: MessageLog;
  private gameSize: { width: number; height: number };
  private mapSize: { width: number; height: number };
  private statusLinePosition: Coord;
  private actionLogPosition: Coord;
  private gameState: GameState;
  public grid: Grid;
  public frames: Frame[];

  constructor(level: Level) {
    this.mapSize = { width: level.grid.cols, height: level.grid.rows };
    this.gameSize = {
      width: this.mapSize.width,
      height: this.mapSize.height
    };
    this.statusLinePosition = new Coord(this.gameSize.height - 4, 0);
    this.actionLogPosition = new Coord(this.gameSize.height - 3, 0);
    this.frames = [];

    const tileSet = document.createElement("img");
    tileSet.src = "./tiles/tilemap.png";
    this.display = new Display({
      layout: "tile-gl",
      bg: "transparent",
      tileWidth: 64,
      tileHeight: 64,
      // tileColorize: true,
      tileSet,
      tileMap: {
        // Passive, energized, active elements
        // void
        "@": [0, 192],
        // Laser
        // tslint:disable: object-literal-key-quotes
        "^": [0, 0],
        ">": [64, 0],
        v: [128, 0],
        "<": [192, 0],
        // rock passive, energized and active
        "#": [0, 64],
        r: [64, 64],
        R: [128, 64],
        // detector passive, energized and active
        "⇑": [0, 384],
        "⇒": [64, 384],
        "⇓": [128, 384],
        "⇐": [192, 384],
        // omni detector passive, energized, active
        "¤": [0, 512],
        O: [0, 512],
        // photon
        "~0": [704, 0],
        "~1": [768, 0],
        // mine
        "*p": [832, 0],
        "*e": [896, 0],
        "*a": [960, 0],
        // mirror
        "|": [0, 896],
        "/": [64, 896],
        "-": [128, 896],
        "\\": [192, 896],
        // beamsplitter
        "↑": [0, 960],
        "↗": [64, 960],
        "→": [128, 960],
        "↘": [192, 960],
        "↓": [192, 960],
        "↙": [192, 960],
        "←": [192, 960],
        "↖": [192, 960],
        // glass slab
        G: [1152, 0],
        // void
        V: [1216, 0],
        // neutral density filter
        F: [1280, 0],
        // Blank tile
        // " ": [1344, 0],
        " ": [1408, 0],
        b: [1472, 0],
        n: [1536, 0]
      },
      width: this.gameSize.width,
      height: this.gameSize.height,
      fontSize: 20
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.body.appendChild(this.display.getContainer()!);

    // Game mechanics
    this.gameState = new GameState();
    this.level = level;
    this.grid = this.level.grid;
    this.frames.push(new Frame(level));
    this.statusLine = new StatusLine(
      this,
      this.statusLinePosition,
      this.gameSize.width,
      {}
    );
    this.messageLog = new MessageLog(
      this,
      this.actionLogPosition,
      this.gameSize.width,
      3
    );

    this.initializeGame();
    this.mainLoop();
  }

  // Getters and setters
  get playerCoord(): Coord {
    return this.player.coord;
  }
  get playerCell(): Cell {
    return this.player.cell;
  }

  draw(
    cell: Cell,
    foregroundColor = "white",
    backgroundColor = "#2e006a"
  ): void {
    // this.display.draw(cell.x, cell.y, cell.ascii, cell.foregroundColor, cell.backgroundColor)
    this.display.draw(
      cell.x,
      cell.y,
      cell.ascii,
      foregroundColor,
      backgroundColor
    );
  }

  // Laser lines
  drawLaser(frame: Frame): void {
    const laserCoords = frame.laserCoords();
    laserCoords.forEach((coord: Coord) => {
      this.display.draw(coord.y, coord.x, "", "", "#00ff00");
    });
  }

  // Draw player
  drawPlayer(coord: Coord, glyph: Glyph): void {
    this.display.draw(
      coord.y,
      coord.x,
      glyph.character,
      glyph.foregroundColor,
      glyph.backgroundColor
    );
  }

  // Log state to console
  drawText(coord: Coord, text: string, maxWidth?: number): void {
    console.log(coord.y, coord.x, text, maxWidth);
  }

  // Init game
  private initializeGame(): void {
    this.display.clear();
    this.messageLog.clear();
    if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
      this.resetStatusLine();
      this.writeHelpMessage();
    } else {
      this.statusLine.boxes = 0;
    }
    this.gameState.reset();
    this.grid.draw(this);
    this.player = new Player(this, this.grid.center);
    this.scheduler = new Scheduler.Simple();
    this.scheduler.add(this.player, true);
    this.drawPanel();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async mainLoop(): Promise<any> {
    let actor: Actor;
    while (true) {
      actor = this.scheduler.next();
      if (!actor) {
        break;
      }

      await actor.act();
      if (actor.type === ActorType.Player) {
        this.statusLine.turns += 1;
      }

      this.drawPanel();
      if (this.gameState.isGameOver()) {
        await InputUtility.waitForInput(this.handleInput.bind(this));
        this.initializeGame();
      }
    }
  }

  private drawPanel(): void {
    this.display.clear();
    // this.grid.draw(this);
    this.statusLine.draw();
    this.messageLog.draw();
    this.drawPlayer(this.player.coord, this.player.glyph);
    // for (let enemy of this.enemies) {
    //     this.draw(enemy.position, enemy.glyph);
    // }
  }

  private handleInput(event: KeyboardEvent): boolean {
    const code = event.keyCode;
    return code === KEYS.VK_SPACE || code === KEYS.VK_RETURN;
  }

  private resetStatusLine(): void {
    this.statusLine.reset();
  }

  private writeHelpMessage(): void {
    const helpMessage = [
      `I - ${this.level.name}`
      // `Move: ZQSD, Add: 123..., Rotate: AE`,
      // `Fire the laz0r5: Space Steps: RF`
    ];
    for (let index = helpMessage.length - 1; index >= 0; --index) {
      this.messageLog.appendText(helpMessage[index]);
    }
  }
}

// TERMINAL STYLE
// this.display = new Display({
//     width: this.gameSize.width,
//     height: this.gameSize.height,
//     tileColorize: true,
//     fontSize: 30
// })
