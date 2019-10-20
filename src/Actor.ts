import Coord from "./Coord"
import Glyph from "./Glyph"

/**
 * Players types: not used by Quantum Game 2
 */
export const enum ActorType {
  Player,
  Particle
}

/** Player Interface, not used by Quantum Game 2 */
export interface Actor {
  coord: Coord
  glyph: Glyph
  type: ActorType

  act(): Promise<string>
}
