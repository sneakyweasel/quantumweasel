import { Display, Scheduler, KEYS } from "rot-js/lib/index"
import Simple from "rot-js/lib/scheduler/simple"

import Coord from "./Coord"
import Cell from "./Cell"
import Grid from "./Grid"
import Level from "./Level"
import GameState from "./GameState"
import StatusLine from "./StatusLine"
import InputUtility from "./InputUtility"
import MessageLog from "./MessageLog"
import Player from "./Player"
import { Actor, ActorType } from "./Actor"
import { Glyph } from "./Glyph"

export default class Game {
    private display: Display
    private scheduler: Simple
    private level: Level
    private player: Player
    private statusLine: StatusLine
    private messageLog: MessageLog
    private gameSize: { width: number, height: number }
    private mapSize: { width: number, height: number }
    private statusLinePosition: Coord
    private actionLogPosition: Coord
    private gameState: GameState
    grid: Grid

    constructor(level: Level) {
        this.mapSize = { width: level.grid.cols, height: level.grid.rows }
        this.gameSize = { width: this.mapSize.width + 40, height: this.mapSize.height + 4 + 4 }
        this.statusLinePosition = new Coord(this.gameSize.height - 4, 0)
        this.actionLogPosition = new Coord(this.gameSize.height - 3, 0)

        const tileSet = document.createElement("img")
        tileSet.src = "./tiles/tilemap.png"
        // this.display = new Display({
        //     layout: "tile",
        //     bg: "transparent",
        //     tileWidth: 64,
        //     tileHeight: 64,
        //     tileSet,
        //     tileMap: {
        //         // void
        //         " ": [128, 128],
        //         // Laser
        //         // tslint:disable-next-line: object-literal-key-quotes
        //         "v": [0, 0],
        //         "^": [0, 0],
        //         ">": [0, 0],
        //         "<": [0, 0],
        //         // mirror
        //         "|": [0, 128],
        //         "/": [0, 128],
        //         "-": [0, 128],
        //         "\\": [0, 128],
        //         // mine
        //         "*": [0, 192],
        //         // rock
        //         "#": [64, 0],
        //         // detector
        //         "¤": [64, 384],
        //         // photon
        //         "~": [128, 0],
        //         // beamsplitter
        //         "%": [0, 64]
        //     },
        //     width: this.gameSize.width,
        //     height: this.gameSize.height,
        //     fontSize: 20,
        //     tileColorize: true
        // })
        this.display = new Display({
            width: this.gameSize.width,
            height: this.gameSize.height,
            tileColorize: true,
            fontSize: 30
        })
        document.body.appendChild(this.display.getContainer()!)

        this.gameState = new GameState()
        this.level = level
        this.grid = this.level.grid
        this.statusLine = new StatusLine(this, this.statusLinePosition, this.gameSize.width, {})
        this.messageLog = new MessageLog(this, this.actionLogPosition, this.gameSize.width, 3)

        this.initializeGame()
        this.mainLoop()
    }

    // Getters and setters
    get playerCoord(): Coord { return this.player.coord }
    get playerCell(): Cell { return this.player.cell }

    draw(cell: Cell): void {
        this.display.draw(cell.x, cell.y, cell.ascii, cell.foregroundColor, cell.backgroundColor)
    }

    drawPlayer(coord: Coord, glyph: Glyph): void {
        this.display.draw(coord.y, coord.x, glyph.character, glyph.foregroundColor, glyph.backgroundColor)
    }

    drawText(position: Coord, text: string, maxWidth?: number): void {
        this.display.drawText(position.x, position.y, text, maxWidth)
    }

    private initializeGame(): void {
        this.display.clear()
        this.messageLog.clear()
        if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
            this.resetStatusLine()
            this.writeHelpMessage()
        } else {
            this.statusLine.boxes = 0
        }
        this.gameState.reset()
        this.grid.draw(this)
        this.player = new Player(this, this.grid.center)
        this.scheduler = new Scheduler.Simple()
        this.scheduler.add(this.player, true)
        this.drawPanel()
    }

    // tslint:disable-next-line: no-any
    private async mainLoop(): Promise<any> {
        let actor: Actor
        while (true) {
            actor = this.scheduler.next()
            if (!actor) {
                break
            }

            await actor.act()
            if (actor.type === ActorType.Player) {
                this.statusLine.turns += 1
            }

            this.drawPanel()
            if (this.gameState.isGameOver()) {
                await InputUtility.waitForInput(this.handleInput.bind(this))
                this.initializeGame()
            }
        }
    }

    private drawPanel(): void {
        this.display.clear()
        this.grid.draw(this)
        this.statusLine.draw()
        this.messageLog.draw()
        this.drawPlayer(this.player.coord, this.player.glyph)
        // for (let enemy of this.enemies) {
        //     this.draw(enemy.position, enemy.glyph);
        // }
    }

    private handleInput(event: KeyboardEvent): boolean {
        const code = event.keyCode
        return code === KEYS.VK_SPACE || code === KEYS.VK_RETURN
    }

    private resetStatusLine(): void {
        this.statusLine.reset()
    }

    private writeHelpMessage(): void {
        const helpMessage = [
            `I - ${this.level.name}`,
            // `Move: ZQSD, Add: 123..., Rotate: AE`,
            // `Fire the laz0r5: Space Steps: RF`
        ]
        for (let index = helpMessage.length - 1; index >= 0; --index) {
            this.messageLog.appendText(helpMessage[index])
        }
    }

}