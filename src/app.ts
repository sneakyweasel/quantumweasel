import json from '../levels/conquer.json'
import Level from "./Level"
import Game from "./game"

document.body.onload = () => {
    const level = Level.importJSON(json)
    new Game(level)
}
