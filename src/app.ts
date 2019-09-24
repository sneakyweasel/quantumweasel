// import json from '../levels/conquer.json'
import json from '../levels/tiletest.json'
import Level from "./Level"
import Game from "./game"

document.body.onload = () => {
    const level = Level.importJSON(json)
    new Game(level)
}
