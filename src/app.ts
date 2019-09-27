// import json from "../levels/tiletest.json";
import json from "../levels/conquer.json";
// import json from '../levels/level.json'
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
  const level = Level.importJSON(json);
  new Game(level);
};
