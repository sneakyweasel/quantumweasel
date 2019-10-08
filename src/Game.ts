import { Display, Scheduler, KEYS } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";

import { hsl2hexrgb } from "./Helpers";
import Coord from "./Coord";
import Glyph from "./Glyph";
import Cell from "./Cell";
import Grid from "./Grid";
import Level from "./Level";
import GameState from "./GameState";
import InputUtility from "./InputUtility";
import Player from "./Player";
import Frame from "./Frame";
import { Actor, ActorType } from "./Actor";
import Pointer, { PathPointer } from "./Pointer";

export default class Game {
	// Game logic
	public level: Level;
	public frames: Frame[];
	public laserPaths: PathPointer[];
	private gameState: GameState;
	// Game display
	private display: Display;
	private scheduler: Simple;
	private player: Player;
	private tilesize = 32;
	private turns = 0;

	constructor(level: Level, tilesize = 32) {
		// Game mechanics
		this.level = level;
		this.gameState = new GameState();
		this.frames = [];
		this.frames.push(new Frame(level));

		// Game display
		this.tilesize = tilesize;
		const tileSet = document.createElement("img");
		tileSet.src = `./tiles/tilemap_${this.tilesize}.png`;
		const tileMap = Glyph.processTileMap(this.tilesize);
		this.display = new Display({
			layout: "tile-gl",
			bg: "transparent",
			width: level.grid.cols,
			height: level.grid.rows,
			fontSize: 20,
			tileWidth: this.tilesize,
			tileHeight: this.tilesize,
			tileSet,
			tileMap
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

	// Init game
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
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("title")!.textContent = this.level.id + " - " + this.level.name;
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("desc")!.textContent = this.level.description;
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("player")!.textContent = "player informations...";
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("player")!.textContent = `Turns: ${this.turns} player: ${this.playerCoord.toString()}`;
	}
	displayQuantum(text: string): void {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("quantum")!.textContent = text;
	}
	displayCell(cell: Cell = this.player.cell): void {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		document.getElementById("cell")!.textContent = cell.toString();
	}
	displayLaser(laserPaths: PathPointer[] = this.laserPaths): void {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

	// Draw the main grid
	public drawGrid(): void {
		console.log(`Rendering WebGL game grid...`);
		for (let y = 0; y < this.grid.rows; y++) {
			for (let x = 0; x < this.grid.cols; x++) {
				const coord = Coord.importCoord({ y: y, x: x });
				const cell = this.grid.get(coord);

				//  Find the laserPath object on a specific cell
				const sum = this.coordIntensitySum(coord);
				if (sum > 0) {
					const rgbhex = hsl2hexrgb(0, 1, sum / 3 + 0.2);
					this.draw(cell, "white", rgbhex);
				} else {
					this.draw(cell);
				}
			}
		}
	}

	// Draw indivdual cells
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

	// Pointers on a specific coord
	coordIntensitySum(coord: Coord): number {
		let sum = 0;
		this.laserPaths
			.filter(pathPointer => {
				return coord.equal(pathPointer.coord);
			})
			.map(pointer => {
				sum += pointer.intensity;
			});
		return sum;
	}

	// Handle user input
	private handleInput(event: KeyboardEvent): boolean {
		const code = event.keyCode;
		return code === KEYS.VK_SPACE || code === KEYS.VK_RETURN;
	}
}
