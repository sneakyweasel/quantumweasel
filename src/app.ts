// import json from "../levels/tiletest.json";
// import json from "../levels/conquer.json";
// import json from "../levels/logic/AND.json";
import json from "../levels/game/level5.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
	new Game(Level.importJSON(json));
};
