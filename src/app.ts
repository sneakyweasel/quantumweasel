import json from "../levels/game/level15.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
	new Game(Level.importJSON(json), 64);
};
document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
