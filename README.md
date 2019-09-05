# Quantum Game Entangled

## How to install

- Clone the repository
- yarn install
- yarn start

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
- TS-Jest is used to test the main components of the game.
- Bootstrap 4 will be used to display and style the various parts of the game.
- SASS will be used to enforce consistent styling through the game.
- D3.js will most likely be used for the canvas part of the game.

## Quantum numerical "engine"

- Using mathjs library for matrices: <https://mathjs.org/examples/matrices.js.html>
- Using mathjs library for complex numbers: <https://mathjs.org/examples/matrices.js.html>
- WebGL shader toys: <https://www.shadertoy.com/results?query=quantum&sort=popular&from=12&num=12>

## Scientific ressources

- HN Tensor network thread: <https://news.ycombinator.com/item?id=19936909>
- Tensor network medium Migdal <https://medium.com/@pmigdal/in-the-topic-of-diagrams-i-did-write-a-review-simple-diagrams-of-convoluted-neural-networks-6418a63f9281>
- <https://arxiv.org/pdf/1805.12087.pdf>
- Intro to graphical linear algebra: <https://graphicallinearalgebra.net/2015/04/23/makelele-and-linear-algebra/>
- Bob Coecke - Picturing quantum processes: <https://www.cambridge.org/gb/academic/subjects/physics/quantum-physics-quantum-information-and-quantum-computation/picturing-quantum-processes-first-course-quantum-theory-and-diagrammatic-reasoning?format=AR>
