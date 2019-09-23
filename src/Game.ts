import { Display, Scheduler, KEYS } from "rot-js/lib/index"
import Simple from "rot-js/lib/scheduler/simple"

import Coord from "./Coord"
import Grid from "./Grid"
import Level from "./Level"
import Element from "./Element"
import GameState from "./GameState"
import StatusLine from "./StatusLine"
import InputUtility from "./InputUtility"
import MessageLog from "./MessageLog"
import Player from "./Player"
import { Actor, ActorType } from "./Actor"

export default class Game {
    private display: Display
    private scheduler: Simple
    private level: Level
    private player: Player
    private statusLine: StatusLine
    private messageLog: MessageLog
    private gameSize: { width: number, height: number }
    // private mapSize: { width: number, height: number }
    private statusLinePosition: Coord
    private actionLogPosition: Coord
    private gameState: GameState
    private foregroundColor = "white"
    private backgroundColor = "black"
    grid: Grid

    constructor(level: Level) {
        this.gameSize = { width: level.grid.cols, height: level.grid.rows }
        // this.mapSize = { width: this.gameSize.width, height: this.gameSize.height - 4 }
        this.statusLinePosition = new Coord(0, this.gameSize.height - 4)
        this.actionLogPosition = new Coord(0, this.gameSize.height - 3)

        this.display = new Display({
            width: this.gameSize.width,
            height: this.gameSize.height,
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

    draw(position: Coord, element: Element): void {
        const foreground = element.foregroundColor || this.foregroundColor
        const background = element.backgroundColor || this.backgroundColor
        this.display.draw(position.x, position.y, element.ascii[0], foreground, background)
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
        this.scheduler = new Scheduler.Simple()
        this.scheduler.add(this.player, true)
        this.drawPanel()
    }

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
            `Welcome to the QuantumWeasel engine for Quantum Game.`,
            `Move with QSDZ keys, add elements with numpad and rotate them with AE`,
            `Fire the laz0r5 with spacebar, and step backwards, forwards with RF`
        ]
        for (let index = helpMessage.length - 1; index >= 0; --index) {
            this.messageLog.appendText(helpMessage[index])
        }
    }

}