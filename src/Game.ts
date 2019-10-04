import { Display, Scheduler, KEYS } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";

import Coord from "./Coord";
import Element from "./Element";
import { Cell } from "./Cell";
import Grid from "./Grid";
import Level from "./Level";
import GameState from "./GameState";
import InputUtility from "./InputUtility";
import Player from "./Player";
import Frame from "./Frame";
import { Actor, ActorType } from "./Actor";
import { PathPointer } from "./Pointer";

export default class Game {
	private display: Display;
	private scheduler: Simple;
	private player: Player;
	private gameSize: { width: number; height: number };
	private mapSize: { width: number; height: number };
	private gameState: GameState;
	private tilesize = 32;
	private turns = 0;
	public level: Level;
	public grid: Grid;
	public frames: Frame[];
	public laserPaths: PathPointer[];

	constructor(level: Level, tilesize = 32) {
		this.mapSize = { width: level.grid.cols, height: level.grid.rows };
		this.gameSize = {
			width: this.mapSize.width,
			height: this.mapSize.height
		};
		this.frames = [];
		this.tilesize = tilesize;

		const tileSet = document.createElement("img");
		tileSet.src = `./tiles/tilemap_${this.tilesize}.png`;
		const tiles = Element.processTileMap(this.tilesize);
		tiles["@"] = [0, 29 * this.tilesize];
		console.log(JSON.stringify(tiles));

		this.display = new Display({
			layout: "tile-gl",
			bg: "transparent",
			width: this.gameSize.width,
			height: this.gameSize.height,
			fontSize: 20,
			tileWidth: this.tilesize,
			tileHeight: this.tilesize,
			tileSet,
			tileMap: tiles
		});

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("grid")!.appendChild(this.display.getContainer()!);

		// Game mechanics
		this.gameState = new GameState();
		this.level = level;
		this.grid = this.level.grid;
		this.frames.push(new Frame(this, level));

		this.initializeGame();
		this.grid.draw(this);
		this.drawPanel();
		this.mainLoop();
	}

	// Getters and setters
	get playerCell(): Cell {
		return this.player.cell;
	}
	get playerCoord(): Coord {
		return this.player.coord;
	}

	draw(cell: Cell, foregroundColor = "white", backgroundColor = "#2e006a"): void {
		if (cell.frozen) {
			backgroundColor = "turquoise";
		}
		if (cell.energized) {
			backgroundColor = "red";
		}
		// Charlist array
		const charList: string[] = [cell.ascii];
		if (this.player.coord.equal(cell.coord)) {
			charList.push("@");
		}
		this.display.draw(cell.coord.x, cell.coord.y, charList, foregroundColor, backgroundColor);
	}

	// Display relevant informations in html
	displayPlayer(): void {
		document.getElementById("player")!.textContent = `Turns: ${this.turns} player: ${this.playerCoord.toString()}`;
	}
	displayQuantum(text: string): void {
		document.getElementById("quantum")!.textContent = text;
	}
	displayCell(cell: Cell = this.player.cell): void {
		document.getElementById("cell")!.textContent = cell.toString();
	}
	displayDebug(): void {
		this.displayCell();
		this.displayPlayer();
	}

	// Init game
	private initializeGame(): void {
		this.display.clear();
		if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
			console.log("Starting game...");
		} else {
			alert("Victory!");
		}
		this.gameState.reset();
		this.player = new Player(this, this.grid.center);
		this.scheduler = new Scheduler.Simple();
		this.scheduler.add(this.player, true);
		document.getElementById("title")!.textContent = this.level.name;
		document.getElementById("desc")!.textContent = this.level.description;
		document.getElementById("player")!.textContent = "player informations...";
		document.getElementById("cell")!.textContent = "cell informations...";
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
				this.turns += 1;
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
		this.laserPaths = this.grid.laserCoords();
		this.grid.energizeCells(this.laserPaths);
		this.grid.activateCells();
		this.displayDebug();
		this.grid.draw(this);
	}

	private handleInput(event: KeyboardEvent): boolean {
		const code = event.keyCode;
		return code === KEYS.VK_SPACE || code === KEYS.VK_RETURN;
	}
}

// TERMINAL STYLE
// this.display = new Display({
//     width: this.gameSize.width,
//     height: this.gameSize.height,
//     tileColorize: true,
//     fontSize: 30,
//     forceSquareRatio:true
// })
