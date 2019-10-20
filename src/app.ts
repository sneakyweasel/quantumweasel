import json from "../levels/classic/level34.json"
import Level from "./Level"
import Game from "./Game"

const classic = {}
console.log(classic)
console.log(json)

document.body.onload = (): void => {
  new Game(Level.importLevel(json), 64)
  // new Game(Level.importClassicLevel(classic), 64);
}
