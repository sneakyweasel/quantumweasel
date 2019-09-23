import json from '../levels/conquer.json'
import Level from "./Level"
import Game from "./game"

document.body.onload = () => {
    const level = Level.importJSON(json)
    new Game(level)
}

    // initializeGame(): void {
    //     this.display.clear();

    //     this.messageLog.clear();
    //     if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
    //         this.resetStatusLine();
    //         this.writeHelpMessage();
    //     } else {
    //         this.statusLine.boxes = 0;
    //     }
    //     this.gameState.reset();

    //     this.map.generateMap(this.mapSize.width, this.mapSize.height);
    //     this.generateBoxes();

    //     this.createBeings();
    //     this.scheduler = new Scheduler.Simple();
    //     this.scheduler.add(this.player, true);
    //     for (let enemy of this.enemies) {
    //         this.scheduler.add(enemy, true);
    //     }

    //     this.drawPanel();
    // }