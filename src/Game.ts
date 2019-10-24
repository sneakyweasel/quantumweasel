// TODO: Have a better handling of user key inputs
import { Display, Scheduler, KEYS } from "rot-js/lib/index"
import Simple from "rot-js/lib/scheduler/simple"
import { displayText } from "./Helpers"
import Coord from "./Coord"
import Glyph from "./Glyph"
import Level from "./Level"
import GameState from "./GameState"
import InputUtility from "./InputUtility"
import Player from "./Player"
import Frame from "./Frame"
import { Actor } from "./Actor"
import Particle from "./Particle"

/**
 * Game class relates to displaying the ROT.js WebGL grid
 * Other logic should go to lower level
 */
export default class Game {
  // Game logic
  public level: Level
  public frames: Frame[]
  private frameNumber: number
  private gameState: GameState
  // Game display
  private display: Display
  private scheduler: Simple
  private player: Player
  private tilesize = 32

  constructor(level: Level, tilesize = 32) {
    // Game mechanics
    this.level = level
    this.gameState = new GameState()

    // FIXME: Find a better way to launch frame 0 when simulation starts
    this.frames = []
    this.frames.push(new Frame(level))
    this.frameNumber = 0

    // Game display
    this.tilesize = tilesize
    const tileSet = document.createElement("img")
    tileSet.src = `./tiles/tilemap_${this.tilesize}.png`
    const tileMap = Glyph.processTileMap(this.tilesize)
    this.display = new Display({
      // layout: "tile",
      layout: "tile-gl",
      bg: "transparent",
      width: level.grid.cols,
      height: level.grid.rows,
      fontSize: 20,
      tileWidth: this.tilesize,
      tileHeight: this.tilesize,
      tileSet,
      tileMap
      // tileColorize: true
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("grid")!.appendChild(this.display.getContainer()!)

    // Enter main loop
    this.initializeGame()
    this.mainLoop()
  }

  /**
   * Returns first computed frame
   */
  get firstFrame(): Frame {
    return this.frames[0]
  }

  /**
   * Return last computed frame
   * @returns Frame
   */
  get lastFrame(): Frame {
    return this.frames[this.frames.length - 1]
  }

  /**
   * Return current frame using frameNumber
   */
  get currentFrame(): Frame {
    return this.frames[this.frameNumber]
  }

  /**
   * Return the number of computed frames for frontend
   */
  get maxFrameNumber(): number {
    return this.frames.length
  }

  /**
   * Initialize the game
   */
  private initializeGame(): void {
    this.display.clear()
    if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
      console.log("Starting game...")
    } else {
      alert("Victory!")
    }
    this.gameState.reset()
    this.player = new Player(this.level, this.level.grid.center)
    this.scheduler = new Scheduler.Simple()
    this.scheduler.add(this.player, true)

    displayText("title", this.level.id + " - " + this.level.name)
    displayText("description", this.level.description)
    this.drawGame()
  }

  /**
   * Main loop of the game
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async mainLoop(): Promise<any> {
    let actor: Actor
    while (true) {
      actor = this.scheduler.next()
      if (!actor) {
        break
      }
      await actor.act()
      await InputUtility.waitForInput(this.handleInput.bind(this))
    }
  }

  /**
   * Draw game redraws the whole game elements
   */
  private drawGame(): void {
    this.display.clear()
    this.level.grid.paths = this.level.grid.computePaths()
    this.displayDebug()
    this.drawFrame()
  }

  /**
   * Display debug provides informations in html about the simulation
   */
  private displayDebug(): void {
    displayText("cell", this.player.cell.toString())
    displayText(
      "player",
      `Turns: ${this.frameNumber}/${this.maxFrameNumber} | player: ${this.player.cell.coord.toString()}`
    )
    displayText("laser", `Quantum: ${Particle.manyToString(this.currentFrame.quantum)}`)
  }

  /**
   * Draw a specific frame of the simulation including the particles
   * TODO: Access to grid particles at render time
   * @param frame Frame object to render
   */
  private drawFrame(frame = this.currentFrame): void {
    displayText("laser", `Quantum particles: ${Particle.manyToString(frame.quantum)}`)
    console.info(`${frame.toString()}`)
    this.drawGrid()
  }

  /**
   * Draw the main grid
   */
  public drawGrid(): void {
    this.display.clear()
    console.log(`Rendering WebGL game grid...`)
    for (let y = 0; y < this.level.grid.rows; y++) {
      for (let x = 0; x < this.level.grid.cols; x++) {
        const coord = Coord.importCoord({ y: y, x: x })
        this.drawCoord(coord)
      }
    }
  }

  /**
   * Draw a specific coordinate
   * @param coord coord to draw
   */
  drawCoord(coord: Coord): void {
    // Draw void for empty cells
    // if (this.grid.includes(coord)) {}

    // Gather character list
    const cell = this.level.grid.get(coord)
    if (cell && cell.ascii) {
      const charList: string[] = [cell.ascii]
      const fgList: string[] = ["white"]
      const bgList: string[] = ["purple"]

      // Add player
      if (this.player.coord.equal(coord)) {
        charList.push("@")
      }

      //  Color variables
      if (cell.frozen) {
        bgList.push("turquoise")
      }
      if (cell.energized) {
        bgList.push("red")
      }

      // Classical path intensity
      const sum = this.level.grid.coordIntensitySum(coord)
      if (sum > 0) {
        bgList.push(`rgba(255, 0, 0, ${sum / 3})`)
      }

      // Display quantum photon
      this.currentFrame.quantum.forEach(particle => {
        if (particle && particle.coord.equal(coord) && particle.isVertical && particle.opacity > 0.1) {
          charList.push("P")
        }
        if (particle && particle.coord.equal(coord) && !particle.isVertical && particle.opacity > 0.1) {
          charList.push("d")
        }
      })
      this.display.draw(coord.x, coord.y, charList, fgList[fgList.length - 1], bgList[bgList.length - 1])
    }
  }

  /**
   * Handles key event related to simulation
   * The other key events are sent to Player
   * @param event key event
   */
  private handleInput(event: KeyboardEvent): void {
    // Filter key events
    const code = event.keyCode
    if (code === KEYS.VK_SUBTRACT || code === KEYS.VK_ADD) {
      switch (code) {
        case KEYS.VK_SUBTRACT:
          this.frameNumber -= 1
          break
        case KEYS.VK_ADD:
          this.frameNumber += 1
          break
        default:
          break
      }
      // Don't go out of bounds
      if (this.frameNumber <= 0) {
        this.frameNumber = 0
      }
      if (this.frameNumber >= this.frames.length - 1) {
        this.frameNumber = this.frames.length - 1
        const nextFrame = this.lastFrame.next()
        this.frames.push(nextFrame)
      }
    } else {
      this.player.handleInput(event)
    }
    this.drawGame()
  }
}
