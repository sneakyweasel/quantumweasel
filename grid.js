import Cell from "./build/Cell.js"
import Coord from "./build/Coord.js";

const SPACING = 25;

const shared = {
    computed: {
        cells() {
            let cells = [];
            for (let q = 0; q < this.cols; q++) {
                for (let r = 0; r < this.rows; r++) {
                    let coord = new Coord(q, r);
                    let cell = new Cell(coord, parseInt(math.random(1, 6)));
                    cells.push(cell);
                }
            }
            return cells;
        },
    },
    methods: {
    },
};

new Vue({
    el: "#diagram-hybrid",
    mixins: [shared],
    data: {
        cols: 10,
        rows: 8,
        blend: 0.4,
    },
});