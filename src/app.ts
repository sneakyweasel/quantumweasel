// import json from "../levels/dev/qtest.json";
import json from "../levels/dev/phase.json";
// import json from "../levels/game/level2.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
  new Game(Level.importLevel(json), 64);
};
