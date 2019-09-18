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

- The first stage of a level is loading elements from a solution json file.
- This file then extracts unfrozen elements and places them in the player's toolbox.
- The player solves the level by placing the different elements at their correct location.
- To highlight his progress, elements correctly connected in graph theory are displayed as active, dotted lines are displayed.
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

## Tech stack

- This project is using typescript and enforcing strict coding conventions.
- The typescript part will be mostly self-reliant.
- TS-Jest is used to test the main components of the game.
- SASS will be used to enforce consistent styling through the game.

## Quantum numerical "engine"

- Work in progress on the Quantum Tensor custom-made library. <https://github.com/stared/quantum-tensors>

## Interface

Right now using ROT.js as a low grade terminal display.
