import { Display, Scheduler, KEYS, Color } from "rot-js/lib/index";
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
import { PathPointer, Pointer } from "./Pointer";

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
		this.frames.push(new Frame(this));

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
		document.getElementById("title")!.textContent = this.level.id + " - " + this.level.name;
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

			if (this.gameState.isGameOver()) {
				await InputUtility.waitForInput(this.handleInput.bind(this));
				this.initializeGame();
			}
			this.drawPanel();
		}
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
	displayLaser(laserPaths: PathPointer[] = this.laserPaths): void {
		document.getElementById("laser")!.innerHTML = Pointer.toString(laserPaths);
	}
	displayDebug(): void {
		this.displayCell();
		this.displayPlayer();
		// this.displayLaser();
	}

	private drawPanel(): void {
		this.display.clear();
		this.laserPaths = this.grid.laserCoords;
		this.grid.energizeCells(this.laserPaths);
		this.grid.activateCells();
		this.laserPaths = this.grid.laserCoords;
		this.displayDebug();
		this.drawGrid();
	}

	// Draw
	public drawGrid(): void {
		console.log(`Rendering WebGL game grid...`);
		for (let y = 0; y < this.grid.rows; y++) {
			for (let x = 0; x < this.grid.cols; x++) {
				const coord = Coord.importCoord({ y: y, x: x });
				const cell = this.grid.get(coord);

				//  Find the laserPath object on a specific cell
				const sum = this.coordIntensitySum(coord);
				if (sum > 0) {
					const hsl = Color.hsl2rgb([0.45, sum, 0.5]);
					const rgb = Color.toHex(hsl);
					// console.log(`Laser intensity: ${sum} - HSL: ${hsl} - RGB: ${rgb}`);
					this.draw(cell, "white", rgb);
				} else {
					this.draw(cell);
				}
			}
		}
	}

	// Pointers on a specific coord
	coordIntensitySum(coord: Coord): number {
		let sum = 0;
		const pointers = this.laserPaths.filter(pathPointer => {
			return coord.equal(pathPointer.coord);
		});
		pointers.forEach(pointer => {
			sum += pointer.intensity;
		});
		return sum;
	}

	private handleInput(event: KeyboardEvent): boolean {
		const code = event.keyCode;
		return code === KEYS.VK_SPACE || code === KEYS.VK_RETURN;
	}
}
