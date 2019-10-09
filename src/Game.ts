import { Display, Scheduler, KEYS } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";
import { hsl2hexrgb, displayText } from "./Helpers";

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
	private frameNumber = 0;

	constructor(level: Level, tilesize = 32, frames = []) {
		// Game mechanics
		this.level = level;
		this.gameState = new GameState();
		this.frames = frames;
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
	get lastFrame(): Frame {
		return this.frames[this.frames.length - 1];
	}
	get firstFrame(): Frame {
		return this.frames[0];
	}
	get currentFrame(): Frame {
		return this.frames[this.frameNumber];
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

		displayText("title", this.level.id + " - " + this.level.name);
		displayText("description", this.level.description);
		displayText("player", `Turns: ${this.frameNumber} player: ${this.playerCoord.toString()}`);
		displayText("cell", this.playerCell.toString());
		this.drawGame();
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
			// if (actor.type === ActorType.Player) {
			// 	this.turns += 1;
			// }
			// if (this.gameState.isGameOver()) {
			await InputUtility.waitForInput(this.handleInput.bind(this));
			// this.initializeGame();
			// }
			this.drawGame();
		}
	}

	// Find a way to detect looping laser paths
	private drawGame(): void {
		this.display.clear();
		// Allow activated elements to compute gates etc.
		for (let i = 0; i < 3; i++) {
			this.laserPaths = this.grid.laserCoords;
			this.grid.energizeCells(this.laserPaths);
			this.grid.activateCells();
		}
		this.displayDebug();
		this.drawGrid();
	}

	// Display relevant informations in html
	private displayDebug(): void {
		displayText("cell", this.player.cell.toString());
		displayText("player", `Turns: ${this.frameNumber} | player: ${this.playerCoord.toString()}`);
		// displayText("laser", Pointer.toString(this.laserPaths));
		displayText("laser", "");
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
					this.drawCell(cell, "white", rgbhex);
				} else {
					this.drawCell(cell);
				}
			}
		}
	}

	// Draw indivdual cells
	drawCell(cell: Cell, foregroundColor = "white", backgroundColor = "#2e006a"): void {
		if (cell.frozen) {
			backgroundColor = "turquoise";
		}
		if (cell.energized) {
			backgroundColor = "red";
		}
		// Append to the charlist array
		const charList: string[] = [cell.ascii];

		// Append player to charlist
		if (this.player.coord.equal(cell.coord)) {
			charList.push("@");
		}

		// Display frame pointers
		const pointer = this.currentFrame.pointers.filter(pointer => {
			return pointer.coord.equal(cell.coord);
		})[0];
		if (pointer && pointer.isVertical) {
			charList.push("P");
		}
		if (pointer && !pointer.isVertical) {
			charList.push("d");
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
			if (this.frameNumber > this.frames.length - 1) {
				this.frameNumber = this.frames.length - 1;
				const nextFrame = this.currentFrame.next();
				this.frames.push(nextFrame);
			}
			this.drawFrame();
		}
	}

	// Display frame
	private drawFrame(frame = this.currentFrame): void {
		console.log(`--- Displaying frame ${frame.step} ---`);
		displayText("laser", `Active particles: ${Pointer.manyToString(frame.pointers)}`);
	}
}
