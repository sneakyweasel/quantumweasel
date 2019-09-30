import { padRight, padLeft } from "./Helpers";
import Game from "./Game";
import Coord from "./Coord";

export default class StatusLine {
	turns: number;
	pineapples: number;
	boxes: number;
	maxBoxes: number;
	private game: Game;
	private coord: Coord;
	private maxWidth: number;

	constructor(
		game: Game,
		coord: Coord,
		maxWidth: number,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: any = {}
	) {
		this.game = game;
		this.coord = coord;
		this.maxWidth = maxWidth;
		this.turns = params.turns || 0;
	}

	reset(): void {
		this.turns = 0;
	}

	draw(): void {
		const playerCell = this.game.playerCell;
		const playerText = `Turns: ${padRight(this.turns.toString(), 6)} player: ${padLeft(
			this.game.playerCoord.toString(),
			8
		)}`;
		this.game.drawText(this.coord, playerText, this.maxWidth);
		const cellText = playerCell.toString();
		this.game.drawText(this.coord.right, cellText, this.maxWidth);
	}
}
