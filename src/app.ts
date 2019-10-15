// import json from "../levels/dev/interferometer.json";
import json from "../levels/classic/level12.json";
// import json from "../levels/dev/beamsplitter.json";
import Level from "./Level";
import Game from "./Game";

document.body.onload = (): void => {
  new Game(Level.importLevel(json), 64);
};
