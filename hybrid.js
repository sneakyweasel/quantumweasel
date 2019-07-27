import Edge from "./build/Edge.js"
import Tile from "./build/Tile.js"

// Vue.js
const SPACING = 25;

const shared = {
    computed: {
        tiles() {
            let tiles = [];
            for (let q = 0; q < this.cols; q++) {
                for (let r = 0; r < this.rows; r++) {
                    tiles.push(new Tile(q, r));
                }
            }
            return tiles;
        },
        edges() {
            let edges = [];
            for (let q = 0; q <= this.cols; q++) {
                for (let r = 0; r <= this.rows; r++) {
                    if (q < this.cols) { edges.push(new Edge(q, r, 'N')); }
                    if (r < this.rows) { edges.push(new Edge(q, r, 'W')); }
                }
            }
            return edges;
        },
    },
    methods: {
        toggleTile(tile) {
            this.$set(this.tileState, tile, !this.tileState[tile]);
        },
        toggleEdge(edge) {
            this.$set(this.edgeState, edge, !this.edgeState[edge]);
        },
    },
};

new Vue({
    el: "#diagram-hybrid",
    mixins: [shared],
    data: {
        cols: 10,
        rows: 8,
        blend: 0.4,
        tileState: {
            "2,1": true,
            "2,2": true,
            "3,2": true,
            "3,1": true,
            "4,2": true,
            "3,3": true,
            "4,3": true,
            "5,2": true,
            "6,2": true,
            "1,2": true,
        },
    },
});