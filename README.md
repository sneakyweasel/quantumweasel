# Linear Algebra Game

Game about visualizing the linear algebra relations and how they behave.
Should allow to have a more visual intuition about the behaviour of the matrix form of QM.

## Architecture

- The main grid is a zero filled math.Matrix object.
- Each cell of the matrix holds a coordinate and a value.
- Each vector is composed of multiple cells.

## Functions

- new Tensor( math.Complex[] | math.Complex[][] )
- Kronecker product
- multiply by complex scalar
- add matrices

## Ressources

- Using mathjs library for matrices: <https://mathjs.org/examples/matrices.js.html>
- Using mathjs library for complex numbers: <https://mathjs.org/examples/matrices.js.html>
- WebGL shader toys: <https://www.shadertoy.com/results?query=quantum&sort=popular&from=12&num=12>

## Scientific ressources

- HN Tensor network thread: <https://news.ycombinator.com/item?id=19936909>
- Tensor network medium Migdal <https://medium.com/@pmigdal/in-the-topic-of-diagrams-i-did-write-a-review-simple-diagrams-of-convoluted-neural-networks-6418a63f9281>
- https://arxiv.org/pdf/1805.12087.pdf
- Intro to graphical linear algebra: <https://graphicallinearalgebra.net/2015/04/23/makelele-and-linear-algebra/>
- Bob Coecke - Picturing quantum processes: <https://www.cambridge.org/gb/academic/subjects/physics/quantum-physics-quantum-information-and-quantum-computation/picturing-quantum-processes-first-course-quantum-theory-and-diagrammatic-reasoning?format=AR>