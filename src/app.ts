import json from "../levels/conquer.json";
// import json from '../levels/level.json'
import Level from "./Level";
import Game from "./game";

document.body.onload = (): void => {
  const level = Level.importJSON(json);
  new Game(level);
};
