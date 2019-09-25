# Quantum Game Entangled

## Getting started

- Clone the repository
- yarn install
- yarn start

## Simulation shortcuts

- "Left arrow" for previous frame
- "Right arrow" for next frame
- "R" for reset
- "Ctrl-C" to exit

## Architecture

### Stage 1: Puzzle

- The first stage of a level is loading elements from a json level solution file.
- This file then extracts unfrozen elements and places them in the player's inventory.
- The player solves the level by placing the different elements at their correct location.
- To highlight his progress, elements correctly connected in graph theory are displayed as active, dotted laser lines are displayed.
- Once it has been detected that every output has been linked, the user starts the simulation.

### Stage 2: Simulation

- Each timeframe is computed from the puzzle elements and the quantum physics simulator.
- Those frame are then used to display the dynamic visualization to the player.

### Stage 3: Multiverse visualisation

- One outcome of measurement is selected at random from the possible multiverse of solution space.
- User sees the superposition of the possible outcome he could have had.

### Stage 4: Congratulations

- User is congratulated, a short video/text explain how this was done in a real lab.
- There is an ability to dive deeper into the "hardcore" physics and the historical perspective.

## Keybindings

- Move: QSDZ, arrow keys
- Rotate: CCW: A, CW: E
- Freeze: F
- Save level to JSON file: F1

### Place elements

- Tilde: Erase tile
- 1: Place mirror
- 2: Place beamsplitter
- 3: Place laser
- 4: Place detector
- 5: Place phase shifter increment
- 6: Place phase shifter decrement
- 7: Place rock
- 8: Place mine

## Indices and conventions

Since this is a pain to debug and very error prone, those are the current conventions used in the game engine.

### Percentages

- Percentages are written in decimal ranging from 0 to 1.

### Rotations

- All sprites start facing up.
- 0 deg is top
- 90 deg is right
- 180 deg is bottom
- 270 deg is left

### Indices

- Coordinates are Coord[rows, cols] or Coord[y, x]
- Grid are [rows, cols]
- Arrays start at 0.
- Distance to things are in number of steps toward the goal.

## Tech stack

- This project is using typescript and enforcing strict coding conventions and best practices.
- The typescript part will be mostly self-reliant. <https://www.typescriptlang.org/>
- TS-Jest is used to test the main components of the game. <https://jestjs.io/>
- SASS will be used as CSS3 preprocessor. <https://sass-lang.com/>
- Using TS-Loader for webpack from <https://github.com/TypeStrong/ts-loader>
- Using ESLint Typescript as AST linter <https://eslint.org/>
- Using Prettier for automated code formatting <https://prettier.io/>
- Using Husky to lint, test before commits <https://github.com/typicode/husky>

## Quantum numerical "engine"

- Work in progress on the Quantum Tensor custom-made library. <https://github.com/stared/quantum-tensors>

## Interface

Right now using ROT.js as a fast display.
