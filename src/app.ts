import json from "../levels/dev/qtest.json";
// import json from "../levels/game/level6.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
  new Game(Level.importLevel(json), 64);
};
