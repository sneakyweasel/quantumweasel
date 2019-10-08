import json from "../levels/game/level1.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
	new Game(Level.importLevel(json), 64);
};
document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
