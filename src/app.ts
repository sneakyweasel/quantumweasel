import json1 from "../levels/game/level1.json";
import json2 from "../levels/game/level2.json";
import json3 from "../levels/game/level3.json";
import json4 from "../levels/game/level4.json";
import json5 from "../levels/game/level5.json";
import json6 from "../levels/game/level6.json";
import json7 from "../levels/game/level7.json";
import json8 from "../levels/game/level8.json";
import json9 from "../levels/game/level9.json";
import json10 from "../levels/game/level10.json";
import Level, { LevelInterface } from "./Level";
import Game from "./Game";

// It's fugly I know
function loadLevel(level: number): void {
	let levelObj: LevelInterface;
	switch (level) {
		case 1:
			levelObj = json1;
			break;
		case 2:
			levelObj = json2;
			break;
		case 3:
			levelObj = json3;
			break;
		case 4:
			levelObj = json4;
			break;
		case 5:
			levelObj = json5;
			break;
		case 6:
			levelObj = json6;
			break;
		case 7:
			levelObj = json7;
			break;
		case 8:
			levelObj = json8;
			break;
		case 9:
			levelObj = json9;
			break;
		case 10:
			levelObj = json10;
			break;

		default:
			levelObj = json1;
			break;
	}
	new Game(Level.importLevel(levelObj), 64);
}

document.body.onload = (): void => {
	loadLevel(6);
};
