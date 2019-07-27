/*
 * From http://www.redblobgames.com/x/1805-conveyor-belts/
 * Copyright 2018 Red Blob Games <redblobgames@gmail.com>
 * License: Apache v2.0 <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
'use strict';

console.info("I'm happy to answer questions about the code; email me at redblobgames@gmail.com");

const SPACING = 75;

function Pos(q, r, s) {
    return {
        q, r, s,
        id: `${q},${r}${s ? "," + s : ""}`,
        x: (q + (s !== 'W' ? 0.5 : 0.0)) * SPACING,
        y: (r + (s !== 'N' ? 0.5 : 0.0)) * SPACING,
        toString() { return this.id; },
    };
}

/* For tile 'tile', what is its neighbor in direction 'dir' ('N'|'W'|'S'|'E')? */
function neighborTile(tile, dir) {
    let { q, r } = tile;
    switch (dir) {
        case 'N': return Pos(q, r - 1);
        case 'W': return Pos(q - 1, r);
        case 'S': return Pos(q, r + 1);
        case 'E': return Pos(q + 1, r);
    }
    throw 'Invalid dir';
}

/* For tile 'tile', what is its neighbor in direction 'dir' ('N'|'W'|'S'|'E')? */
function neighborEdge(tile, dir) {
    let { q, r } = tile;
    switch (dir) {
        case 'N': return Pos(q, r, 'N');
        case 'W': return Pos(q, r, 'W');
        case 'S': return Pos(q, r + 1, 'N');
        case 'E': return Pos(q + 1, r, 'W');
    }
    throw 'Invalid dir';
}

/* For tile 'tile', what is its relation to 'dir' ('N'|'W'|'S'|'E')?
   flow is: null | 'in' | 'out'
*/
function neighborFlow(type, state, tile, dir) {
    let next = neighborTile(tile, dir);
    let edge = neighborEdge(tile, dir);
    if (!state[tile.id]) { return null; }
    if (type !== 'tile' && !state[next.id]) { return null; }
    switch (dir) {
        case 'N':
        case 'W':
            return state[edge.id] === 'WN' ? 'out' : state[edge.id] === 'ES' ? 'in' : null;
        case 'S':
        case 'E':
            return state[edge.id] === 'ES' ? 'out' : state[edge.id] === 'WN' ? 'in' : null;
    }
    throw 'Invalid dir';
}

Vue.component('a-tile', {
    props: ['tile', 'type', 'state'],
    data: () => ({ spacing: SPACING, margin: 5 }),
    template: `<g>
       <rect :class="'tile ' + (state[tile.id]? 'on':'off')" 
             :x="margin + spacing * tile.q"
             :y="margin + spacing * tile.r"
             :width="spacing - 2 * margin"
             :height="spacing - 2 * margin"
       />
       <path v-for="path in paths" class="conveyor-outer" :d="path"/>
       <path v-for="path in paths" class="conveyor-inner" :d="path"/>
       <text :x="tile.x" :y="tile.y" dy="25">{{tile.id}}
          {{state[tile.id] === 'E'? '→' 
            : state[tile.id] === 'W'? '←'
            : state[tile.id] === 'S'? '↓'
            : state[tile.id] === 'N'? '↑'
            : ''}}
       </text>
       </g>`,
    computed: {
        paths() {
            let paths = [];
            let { q, r } = this.tile;
            let dirs = ['N', 'W', 'S', 'E'];
            let flows = dirs.map(dir => neighborFlow(this.type, this.state, this.tile, dir));
            let no_incoming = !flows.some(flow => flow === 'in');
            let no_outgoing = !flows.some(flow => flow === 'out');
            for (let i = 0; i < 4; i++) {
                for (let d = 1; d < 4; d++) {
                    let j = (i + d) % 4;
                    let a = neighborEdge(this.tile, dirs[i]),
                        b = neighborEdge(this.tile, dirs[j]);
                    if (no_incoming && flows[j] === 'out') {
                        paths.push(`M ${this.tile.x} ${this.tile.y}
                                    L ${b.x} ${b.y}`);
                    } else if (no_outgoing && flows[i] === 'in') {
                        paths.push(`M ${a.x} ${a.y} 
                                    L ${this.tile.x} ${this.tile.y}`);
                    } else if (flows[i] === 'in' && flows[j] === 'out') {
                        if (d === 2) {
                            paths.push(`M ${a.x} ${a.y}
                                        L ${b.x} ${b.y}`);
                        } else {
                            paths.push(`M ${a.x} ${a.y}
                                        A ${this.spacing / 2} ${this.spacing / 2} 0 0 ${d === 1 ? 1 : 0} ${b.x} ${b.y}`);
                        }
                    }
                }
            }
            return paths;
        }
    },
});

Vue.component('a-edge', {
    props: ['edge', 'state'],
    template: `<text class="edge"
                :x="edge.x"
                :y="edge.y"
                dy="5">
              {{(edge.s === 'W' && state[edge.id] == 'ES')? '→' 
                : (edge.s === 'W' && state[edge.id] == 'WN')? '←'
                : (edge.s === 'N' && state[edge.id] == 'ES')? '↓'
                : (edge.s === 'N' && state[edge.id] === 'WN')? '↑'
                : '⨉'}}</text>`,
});


function diagram(id, type, state) {
    new Vue({
        el: "#" + id,
        data: {
            type: type,
            state: state,  // state[pos] => value
            spacing: 100,
            cols: 13,
            rows: 9,
        },
        computed: {
            tiles: function () {
                let tiles = [];
                for (let q = 0; q < this.cols; q++) {
                    for (let r = 0; r < this.rows; r++) {
                        tiles.push(Pos(q, r));
                    }
                }
                return tiles;
            },
            edges: function () {
                let edges = [];
                for (let q = 0; q <= this.cols; q++) {
                    for (let r = 0; r <= this.rows; r++) {
                        if (q < this.cols && this.state[Pos(q, r).id] && this.state[Pos(q, r - 1).id]) { edges.push(Pos(q, r, 'N')); }
                        if (r < this.rows && this.state[Pos(q, r).id] && this.state[Pos(q - 1, r).id]) { edges.push(Pos(q, r, 'W')); }
                    }
                }
                return edges;
            },
        },
        methods: {
            cycle: function (pos) {
                // Vue can't react to creating new properties on the
                // object so use $set instead of directly setting the
                // property
                let state = this.state[pos.id];
                if (pos.s) {
                    state = state ? { 'ES': 'WN', 'WN': null }[state] : 'ES';
                } else if (type === 'tile') {
                    state = state ? { 'E': 'S', 'S': 'W', 'W': 'N', 'N': null }[state] : 'E';
                } else {
                    state = !state;
                }
                this.$set(this.state, pos.id, state);
                if (type === 'tile') {
                    this.updateEdges();
                }
            },
            updateEdges: function () {
                // for 'tile' diagrams, the edge state is dependent on the tile state:
                for (let q = 0; q <= this.cols; q++) {
                    for (let r = 0; r <= this.rows; r++) {
                        let tile = Pos(q, r);
                        /* horizontal edges */
                        {
                            let edge = Pos(q, r, 'N');
                            let nextTile = Pos(q, r - 1);
                            let state = (this.state[nextTile.id] === 'S') ? 'ES' : (this.state[tile.id] === 'N') ? 'WN' : undefined;
                            this.$set(this.state, edge.id, state);
                        }
                        /* vertical edges */
                        {
                            let edge = Pos(q, r, 'W');
                            let nextTile = Pos(q - 1, r);
                            let state = (this.state[nextTile.id] === 'E') ? 'ES' : (this.state[tile.id] === 'W') ? 'WN' : undefined;
                            this.$set(this.state, edge.id, state);
                        }
                    }
                }
            },
        },
        created: function () {
            if (this.type === 'tile') { this.updateEdges(); }
        },
    });
}

