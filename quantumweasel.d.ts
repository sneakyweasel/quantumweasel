// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/* This is the module template file. You should rename it to index.d.ts
 * and place it in a folder with the same name as the module.
 * For example, if you were writing a file for "super-greeter", this
 * file should be 'super-greeter/index.d.ts'
 */

/* If this module is a UMD module that exposes a global variable 'myLib' when
 * loaded outside a module loader environment, declare that global here.
 * Otherwise, delete this declaration.
 */
export as namespace quantumweasel

/* If this module has methods, declare them as functions like so.
 */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

/* You can declare types that are available via importing the module */
/**
 * FRAME INTERFACE
 * time-frame in primitives
 */
export interface FrameInterface {
  level: LevelInterface
  step: number
  classical: ParticleInterface[]
  quantum: ParticleInterface[]
  gameState: GameState
  end: boolean
}

/**
 * Particle interface in primitives
 */
export interface ParticleInterface {
  coord: CoordInterface
  direction: number
  intensity: number
  phase: number
  are: number
  aim: number
  bre: number
  bim: number
}

/**
 * LEVEL INTERFACE
 * level interface in primitives
 */
export interface LevelInterface {
  id: number
  name: string
  group: string
  description: string
  grid: GridInterface
  goals: GoalInterface[]
  hints: HintInterface[]
}

/**
 * GOAL INTERFACE
 * Goal interface in primitives
 */
export interface GoalInterface {
  coord: CoordInterface
  threshold: number
  value: number
}

/**
 * HINT INTERFACE
 * Hint interface in primitives
 */
export interface HintInterface {
  coord: CoordInterface
  text: string
}

/**
 * GRID INTERFACE
 * Grid interface in primitives
 */
export interface GridInterface {
  cols: number
  rows: number
  cells: CellInterface[]
}

/**
 * CLUSTER INTERFACE
 * Cluster of cells in primitives
 */
export interface ClusterInterface {
  cells: CellInterface[]
}

/**
 * CELL INTERFACE
 * A cell interface composed of primitives
 */
export interface CellInterface {
  coord: CoordInterface
  element: string
  rotation: number
  frozen: boolean
  active?: boolean
  energized?: boolean
}

/**
 * ELEMENT INTERFACE
 * Element interface composed of primitive types
 */
export interface ElementInterface {
  id: number
  name: string
  group: string
  description: string
  active: boolean
  absorption: number
  phase: number
  ascii: string[]
  tiles: number[][]
}

/**
 * COORDINATE INTERFACE
 * A coordinates interface of primitives
 */
export interface CoordInterface {
  x: number
  y: number
}

/* You can declare properties of the module using const, let, or var */
/**
 * List of element names
 */
export const enum Elem {
  // Basic
  Void = "Void",
  Wall = "Wall",
  Gate = "Gate",
  // Source
  Laser = "Laser",
  // Direction
  Mirror = "Mirror",
  BeamSplitter = "BeamSplitter",
  PolarizingBeamSplitter = "PolarizingBeamSplitter",
  CoatedBeamSplitter = "CoatedBeamSplitter",
  CornerCube = "CornerCube",
  // Absorption
  Detector = "Detector",
  Rock = "Rock",
  Mine = "Mine",
  Absorber = "Absorber",
  DetectorFour = "DetectorFour",
  // Polarization
  PolarizerH = "PolarizerH",
  PolarizerV = "PolarizerV",
  QuarterWavePlateH = "QuarterWavePlateH",
  QuarterWavePlateV = "QuarterWavePlateV",
  SugarSolution = "SugarSolution",
  FaradayRotator = "FaradayRotator",
  // Phase
  Glass = "Glass",
  VacuumJar = "VacuumJar"
}

/**
 * List of group names
 */
export const enum Group {
  Basic = "Basic",
  Source = "Source",
  Direction = "Direction",
  Absorption = "Absorption",
  Polarization = "Polarization",
  Phase = "Phase"
}

/**
 * Element groups
 */
export const ElemGroups: { [symbol: string]: Elem[] }

/**
 * Game state enum
 */
export const enum GameState {
  // Initial
  Initial = "Initial",
  InProgress = "InProgress",
  // Victory
  Victory = "Victory",
  // Defeat
  MineExploded = "MineExploded",
  GoalsNotCompleted = "GoalsNotCompleted",
  ProbabilityTooLow = "ProbabilityTooLow",
  InfiniteLoop = "InfiniteLoop"
}

/* If there are types, properties, or methods inside dotted names
 * of the module, declare them inside a 'namespace'.
 */
// export namespace subProp {
// 	/*~ For example, given this definition, someone could write:
// 	 *~   import { subProp } from 'yourModule';
// 	 *~   subProp.foo();
// 	 *~ or
// 	 *~   import * as yourMod from 'yourModule';
// 	 *~   yourMod.subProp.foo();
// 	 */
// 	export function foo(): void;
// }

// declare module 'quantumweasel';
// declare module 'vue-css-donut-chart';
