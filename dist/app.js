/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/elements.ts":
/*!**************************!*\
  !*** ./data/elements.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonGroups = {
    Basic: ["void", "wall", "gate"],
    Emitter: ["laser"],
    Direction: ["mirror", "beamsplitter", "coatedsplitter", "polarsplitter"],
    Absorption: ["detector", "mine", "rock", "omnidetector", "filter"],
    Polarization: ["absorb-polarizer", "waveplate", "sugar", "faraday"],
    Phase: ["phaseinc", "phasedec"]
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.jsonElements = [
    {
        name: "laser",
        namev1: "Source",
        group: "Emitter",
        description: "An on-demand single photon source.",
        link: "./elements/laser",
        active: true,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 0,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["⮝", "⮞", "⮟", "⮜"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "rock",
        namev1: "Rock",
        group: "Absorption",
        description: "Dark and immersive as your sweetheart's depth of eyes. Absorbs light. And is sensitive.",
        link: "./elements/rock",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 1,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["♜"],
        tiles: [[0, 0]]
    },
    {
        name: "absorb-polarizer",
        namev1: "absorb-polarizer",
        group: "Polarization",
        description: "A polarization filter WE...Anisotropic polymer strands capture electric oscillations parallel to them. Used in photography.",
        link: "./elements/polarizerSE",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 2,
        foregroundColor: "white",
        backgroundColor: "#2e006a",
        ascii: ["🡡", "🡥", "🡢", "🡦", "🡣", "🡧", "🡠", "🡤"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "waveplate",
        namev1: "waveplate",
        group: "Polarization",
        description: "It delays one polarization (with darker lines) by λ/4. When applied correctly, it can change linear polarization into circular, and vice versa.",
        link: "./elements/waveplate",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 3,
        foregroundColor: "white",
        backgroundColor: "#2e006a",
        ascii: ["🡩", "🡭", "🡪", "🡮", "🡫", "🡯", "🡨", "🡬"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "detector",
        namev1: "Detector",
        group: "Absorption",
        description: "Detects and amplifies electric signal from each single photon, from a single direction. Your goal is to get photon there!",
        link: "./elements/detector",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 4,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["⭱", "⭲", "⭳", "⭰"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "omnidetector",
        namev1: "OmniDetector?",
        group: "Absorption",
        description: "Detects and amplifies electric signal from each single photon, from all directions. Typically, it is the goal to get the photon here.",
        link: "./elements/omnidetector",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 7,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["O"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "sugar",
        namev1: "Sugar",
        group: "Polarization",
        description: "Table sugar is a chiral molecule – it does not look the same as its mirror reflection. We put it in an amount, so it rotates polarization by 45°.",
        link: "./elements/sugar",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 8,
        foregroundColor: "white",
        backgroundColor: "#2e006a",
        ascii: ["S"],
        tiles: [[0, 20]]
    },
    {
        name: "coatedsplitter",
        namev1: "Void",
        group: "Direction",
        description: "A thin slab of glass with a reflective layer - reflecting half the beam and transmitting the other half of it.",
        link: "./elements/coatedsplitter",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 9,
        foregroundColor: "white",
        backgroundColor: "#2e006a",
        ascii: ["⇑", "⇗", "⇒", "⇘", "⇓", "⇙", "⇐", "⇖"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "mine",
        namev1: "Mine",
        group: "Absorption",
        description: "Once it absorbs a single photon, it sets off. Old french submarine captains can sometimes disarm them.",
        link: "./elements/mine",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 11,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["!"],
        tiles: [[0, 0]]
    },
    {
        name: "polarsplitter",
        namev1: "polarsplitter",
        group: "Direction",
        description: "Reflects vertical polarization (↕), transmitts horizonal polarization (↔).",
        link: "./elements/polarsplitter",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 12,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["⬲", "⟴"],
        tiles: [[0, 0], [0, 0]]
    },
    {
        name: "void",
        namev1: "Void",
        group: "Basic",
        description: "The void...",
        link: "./elements/void",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 19,
        foregroundColor: "white",
        backgroundColor: "#2e006a",
        ascii: [" "],
        tiles: [[0, 20]]
    },
    {
        name: "mirror",
        namev1: "ThinMirror",
        group: "Direction",
        description: "Metallic or dielectric mirror.",
        link: "./elements/mirror",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 14,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "wall",
        namev1: "Wall",
        group: "Basic",
        description: "A standard wall.",
        link: "./elements/wall",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 20,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["▓"],
        tiles: [[0, 0], [0, 0]]
    },
    {
        name: "gate",
        namev1: "Gate",
        group: "Basic",
        description: "A controlled gate.",
        link: "./elements/gate",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 21,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["W", "M"],
        tiles: [[0, 0], [0, 0]]
    },
    {
        name: "beamsplitter",
        namev1: "ThinSplitter",
        group: "Direction",
        description: "A thin slab of glass reflecting half the beam, and transmitting other half of it.",
        link: "./elements/beamsplitter",
        active: false,
        absorption: 0,
        phase: 0,
        id: 15,
        matrix: [],
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "phasedec",
        namev1: "Glass",
        group: "Phase",
        description: "Higher refractive index makes light slower. We set its thickness so it retards the phase by λ/4. Useful for changing interference.",
        link: "./elements/phasedec",
        active: false,
        absorption: 0,
        phase: -0.25,
        matrix: [],
        id: 16,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["↜"],
        tiles: [[0, 0]]
    },
    {
        name: "filter",
        namev1: "Absorber",
        group: "Absorption",
        description: "Filter with 50% absorption probability.",
        link: "./elements/absorber",
        active: false,
        absorption: 0.5,
        phase: 0,
        matrix: [],
        id: 18,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["░"],
        tiles: [[0, 0]]
    },
    {
        name: "phaseinc",
        namev1: "VacuumJar",
        group: "Phase",
        description: "Even air retards light a bit. We set the thickness of vacuum so it advances the phase by λ/4. Useful for changing interference.",
        link: "./elements/phaseinc",
        active: false,
        absorption: 0,
        phase: 0.25,
        matrix: [],
        id: 17,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["↝"],
        tiles: [[0, 0]]
    },
    {
        name: "faraday",
        namev1: "Faraday",
        group: "Polarization",
        description: "Rotates polarization with magnetic field by 45°. Has different symmetries than Sugar Solution. A building block for optical diodes.",
        link: "./elements/phasedec",
        active: false,
        absorption: 0,
        phase: -0.25,
        matrix: [],
        id: 30,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["🠵", "🠶", "🠷", "🠴"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    }
];


/***/ }),

/***/ "./levels/game/level1.json":
/*!*********************************!*\
  !*** ./levels/game/level1.json ***!
  \*********************************/
/*! exports provided: id, name, group, description, cols, rows, cells, hints, goals, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"name\":\"Genesis\",\"group\":\"Game\",\"description\":\"Let there be light...\",\"cols\":10,\"rows\":10,\"cells\":[{\"coord\":{\"y\":4,\"x\":2},\"element\":\"laser\",\"rotation\":90,\"frozen\":true,\"active\":true,\"energized\":true},{\"coord\":{\"y\":4,\"x\":7},\"element\":\"detector\",\"rotation\":270,\"frozen\":true,\"active\":true,\"energized\":true}],\"hints\":[],\"goals\":[]}");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// CELL CLASS
// Basic class for the grid cells
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const Helpers_1 = __webpack_require__(/*! ./Helpers */ "./src/Helpers.ts");
class Cell {
    constructor(coord, element, rotation = 0, frozen = false, active = false, energized = false) {
        this.coord = coord;
        this.element = element;
        this.rotation = rotation;
        this.frozen = frozen;
        this.active = active;
        this.energized = energized;
    }
    // Change frozen status of cell
    get ascii() {
        return this.element.ascii[this.rotation / this.element.rotationAngle];
    }
    get rotationAscii() {
        return Helpers_1.angleToSymbol(this.element.rotationAngle);
    }
    get foregroundColor() {
        return this.element.foregroundColor;
    }
    get backgroundColor() {
        return this.element.backgroundColor;
    }
    // Rotate cell - Correcting the javascript modulo bug for negative values: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
    rotate(angle = this.element.rotationAngle) {
        if (!this.frozen) {
            if (Math.abs(angle) % this.element.rotationAngle !== 0) {
                throw new Error("Error in the supplied angle compared to the element rotation angle.");
            }
            else {
                this.rotation = (((this.rotation + angle) % 360) + 360) % 360;
            }
        }
        else {
            console.log("This cell is frozen, you can't rotate it.");
        }
    }
    toggleFreeze() {
        this.frozen = !this.frozen;
    }
    toggleActive() {
        this.active = !this.active;
    }
    toggleEnergized() {
        this.energized = !this.energized;
    }
    // Override toString() method
    toString() {
        return `Cell @ ${this.coord.toString()} is ${this.frozen ? "frozen" : "unfrozen"} ${this.active ? "active" : "inactive"} and ${this.energized ? "powered" : "unpowered"} ${this.element.toString()} rotated ${this.rotation}°`;
    }
    // Export to JSON format
    exportCell() {
        return {
            coord: this.coord,
            element: this.element.name,
            rotation: this.rotation,
            frozen: this.frozen,
            active: this.active,
            energized: this.energized
        };
    }
    // Import from Object
    static importCell(obj) {
        const coord = Coord_1.default.importCoord(obj.coord);
        const element = Element_1.default.fromName(obj.element);
        return new Cell(coord, element, obj.rotation, obj.frozen, obj.active, obj.energized);
    }
}
exports.default = Cell;


/***/ }),

/***/ "./src/Coord.ts":
/*!**********************!*\
  !*** ./src/Coord.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// COORDINATES CLASS
// Low level coordinate functions
// Coord is a [x, y, z?] convenient way to deal with coordinates.
Object.defineProperty(exports, "__esModule", { value: true });
class Coord {
    constructor(y, x) {
        this.y = y;
        this.x = x;
    }
    // Conversion: coord -> uid
    id(rows) {
        return this.y * rows + this.x;
    }
    // SVG coordinate system: top-left point of cell
    pos(spacing) {
        const y = this.y * spacing;
        const x = this.x * spacing;
        return [y, x];
    }
    // Distance to exiting grid
    // Array offset corrected
    // TODO: Move to pointer class
    distanceToExit(direction = 0, rows, cols) {
        switch (direction % 360) {
            case 0: // TOP
                return this.y;
            case 90: // RIGHT
                return cols - this.x - 1;
            case 180: // BOTTOM
                return rows - this.y - 1;
            case 270: // LEFT
                return this.x;
            default:
                throw new Error("Something went wrong with directions...");
        }
    }
    // Adjacent cells
    get top() {
        return Coord.importCoord({ y: this.y - 1, x: this.x });
    }
    get bottom() {
        return Coord.importCoord({ y: this.y + 1, x: this.x });
    }
    get left() {
        return Coord.importCoord({ y: this.y, x: this.x - 1 });
    }
    get right() {
        return Coord.importCoord({ y: this.y, x: this.x + 1 });
    }
    get adjacent() {
        return [this.top, this.right, this.bottom, this.left];
    }
    get array() {
        return [this.y, this.x];
    }
    // Check if two coordinates are adjacent
    isAdjacent(coord) {
        return coord.isIncludedIn(this.adjacent);
    }
    // Check for equality
    equal(coord) {
        return this.x === coord.x && this.y === coord.y;
    }
    // Test inclusion in array of coords
    isIncludedIn(coords) {
        return (coords.filter(coord => {
            return this.equal(coord);
        }).length > 0);
    }
    // override of toString method for debugging
    toString() {
        return `[Y:${this.y}, X:${this.x}]`;
    }
    // Export JSON
    exportCoord() {
        return {
            y: this.y,
            x: this.x
        };
    }
    // Export JSON
    static importCoord(json) {
        return new Coord(json.y, json.x);
    }
    // Conversion: uid -> coord
    static fromId(index, cols) {
        const x = index % cols;
        const y = Math.floor(index / cols);
        return Coord.importCoord({ y: y, x: x });
    }
}
exports.default = Coord;


/***/ }),

/***/ "./src/Element.ts":
/*!************************!*\
  !*** ./src/Element.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
// ELEMENT CLASS
// Basic class related to game elements
// FIXME: This class needs rewrite with glyphs and func
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = __webpack_require__(/*! ../data/elements */ "./data/elements.ts");
const Glyph_1 = __webpack_require__(/*! ./Glyph */ "./src/Glyph.ts");
class Element {
    constructor(id, name, group = "", description = "", link = "", active = false, absorption = 0, phase = 0, matrix = [[0, 0], [0, 0]], foregroundColor = "white", backgroundColor = "black", ascii = [" ", " ", " ", " ", " ", " ", " ", " "], tiles = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], glyph = new Glyph_1.Glyph(" ", [0, 0])) {
        this.id = id;
        this.name = name;
        this.group = group;
        this.description = description;
        this.link = link;
        this.active = active;
        this.absorption = absorption;
        this.phase = phase;
        this.matrix = matrix;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
        this.ascii = ascii;
        this.tiles = tiles;
        this.glyph = glyph;
    }
    // Compute the rotation angle from the number of sprites
    get rotationAngle() {
        return 360 / this.ascii.length;
    }
    // Override of toString() method
    toString() {
        return `${this.name} (Phase: ${this.phase}, Absorption: ${this.absorption * 100}%)`;
    }
    // Export JSON
    exportJSON() {
        return {
            id: this.id,
            name: this.name,
            group: this.group,
            description: this.description,
            link: this.link,
            active: this.active,
            absorption: this.absorption,
            phase: this.phase,
            matrix: this.matrix,
            foregroundColor: this.foregroundColor,
            backgroundColor: this.backgroundColor,
            ascii: this.ascii,
            tiles: this.tiles,
            glyph: this.glyph
        };
    }
    // Use the element id to get their row in the tilemap file multiplied bu the tile size
    // static processTileMap(tilesize = 64): { [x: number; y: number]: string } {
    static processTileMap(tilesize = 64) {
        const tileMap = {};
        elements_1.jsonElements.forEach(elem => {
            elem.tiles.forEach((_tile, index) => {
                const y = elem.id * tilesize;
                const x = index * tilesize;
                // console.log(`Processing ${elem.name}: Position: ${elem.ascii[index]} - [X:${x}, Y:${y}]`);
                tileMap[elem.ascii[index]] = [x, y];
            });
        });
        return tileMap;
    }
    // Static JSON load
    // FIXME: It's goddamn ugly
    static fromName(name, version = 2) {
        if (version === 2) {
            const elem = elements_1.jsonElements.find((elem) => {
                return elem.name === name;
            });
            return new Element(elem.id, elem.name, elem.group, elem.description, elem.link, elem.active, elem.absorption, elem.phase, elem.matrix, elem.foregroundColor, elem.backgroundColor, elem.ascii, elem.tiles);
        }
        else {
            const elem = elements_1.jsonElements.find((elem) => {
                return elem.namev1 === name;
            });
            return new Element(elem.id, elem.name, elem.group, elem.description, elem.link, elem.active, elem.absorption, elem.phase, elem.matrix, elem.foregroundColor, elem.backgroundColor, elem.ascii, elem.tiles);
        }
    }
}
exports.default = Element;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for C:\\Users\\cqt\\Desktop\\quantumweasel\\src\\Game.ts.\n    at makeSourceMapAndFinish (C:\\Users\\cqt\\Desktop\\quantumweasel\\node_modules\\ts-loader\\dist\\index.js:80:15)\n    at successLoader (C:\\Users\\cqt\\Desktop\\quantumweasel\\node_modules\\ts-loader\\dist\\index.js:68:9)\n    at Object.loader (C:\\Users\\cqt\\Desktop\\quantumweasel\\node_modules\\ts-loader\\dist\\index.js:22:12)");

/***/ }),

/***/ "./src/Glyph.ts":
/*!**********************!*\
  !*** ./src/Glyph.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Glyph {
    constructor(character, tile, backgroundColor = "black", foregroundColor = "white") {
        this.character = character;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.tile = tile;
    }
}
exports.Glyph = Glyph;


/***/ }),

/***/ "./src/Goal.ts":
/*!*********************!*\
  !*** ./src/Goal.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.
// Goal should extend Cell or should extend Coord
// FIXME: Extend Coord in a nice way
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
class Goal {
    constructor(coord, threshold, value = 0) {
        // super(coord.y, coord.x);
        this.coord = coord;
        this.threshold = threshold;
        this.value = value;
    }
    get completed() {
        return this.value >= this.threshold;
    }
    get percentage() {
        return (this.value / this.threshold) * 100;
    }
    toString() {
        return `{#Goal ${this.completed ? "completed " : " "}@ ${this.coord.toString()} is ${this.value} / ${this.threshold}} (${this.percentage}%)`;
    }
    // Export Goal
    exportGoal() {
        return {
            coord: this.coord.exportCoord(),
            threshold: this.threshold,
            value: this.value
        };
    }
    // Format active particle list
    static manyToString(goals) {
        let result = `${goals.length} active goals...\n`;
        goals.forEach(goal => {
            result += `- ${goal.toString()}\n`;
        });
        return result;
    }
    // Import JSON
    static importGoal(jsonGoals) {
        const goals = [];
        jsonGoals.forEach(goal => {
            const coord = goal.coord;
            goals.push(new Goal(Coord_1.default.importCoord(coord), goal.threshold));
        });
        return goals;
    }
}
exports.Goal = Goal;


/***/ }),

/***/ "./src/Grid.ts":
/*!*********************!*\
  !*** ./src/Grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// GRID CLASS
// FIXME: Figure a way to have uid and coord access to cells
// FIXME: Figure out blank cells in constructor
const Cell_1 = __importDefault(__webpack_require__(/*! ./Cell */ "./src/Cell.ts"));
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const Pointer_1 = __importDefault(__webpack_require__(/*! ./Pointer */ "./src/Pointer.ts"));
class Grid {
    constructor(rows, cols, matrix) {
        this.rows = rows;
        this.cols = cols;
        this.clusters = [];
        // If matrix specified extract cells
        if (matrix) {
            this.matrix = matrix;
        }
        else {
            // Else create blank cells
            this.matrix = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(0));
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const coord = Coord_1.default.importCoord({ y: y, x: x });
                    this.set(new Cell_1.default(coord, Element_1.default.fromName("void")));
                }
            }
        }
    }
    // Get center coordinates of grid
    get center() {
        return Coord_1.default.importCoord({
            y: Math.floor(this.cols / 2),
            x: Math.floor(this.rows / 2)
        });
    }
    // Cells getters
    get cells() {
        return this.matrix.reduce((acc, val) => acc.concat(val), []);
    }
    get coords() {
        return this.cells.flatMap(cell => cell.coord);
    }
    get void() {
        return this.filteredBy("void");
    }
    get unvoid() {
        return this.filteredByNot("void");
    }
    get activeCells() {
        return this.cells.filter(cell => cell.active);
    }
    get energizedDetectors() {
        return this.detectors.filter(detector => detector.energized);
    }
    get unenergizedDetectors() {
        return this.detectors.filter(detector => !detector.energized);
    }
    // Emitters
    get lasers() {
        return this.filteredBy("laser");
    }
    get activeLasers() {
        return this.filteredBy("laser").filter(laser => laser.active === true);
    }
    // Reflectors
    get mirrors() {
        return this.filteredBy("mirror");
    }
    get beamsplitters() {
        return this.filteredBy("beamsplitter");
    }
    get coatedsplitters() {
        return this.filteredBy("coatedsplitter");
    }
    get polarsplitters() {
        return this.filteredBy("polarsplitter");
    }
    get reflectors() {
        return this.mirrors.concat(this.beamsplitters, this.coatedsplitters, this.polarsplitters);
    }
    // Absorbers
    get detectors() {
        return this.filteredBy("detector");
    }
    get mines() {
        return this.filteredBy("mine");
    }
    get rocks() {
        return this.filteredBy("rock");
    }
    get omnidetectors() {
        return this.filteredBy("omnidetector");
    }
    get filters() {
        return this.filteredBy("filter");
    }
    get walls() {
        return this.filteredBy("wall");
    }
    get closedGates() {
        return this.filteredBy("gate").filter(gate => !gate.active);
    }
    get openedGates() {
        return this.filteredBy("gate").filter(gate => gate.active);
    }
    get absorbers() {
        return this.detectors.concat(this.mines, this.rocks, this.omnidetectors, this.filters, this.walls, this.closedGates);
    }
    // Polarizers
    get absorbPolarizers() {
        return this.filteredBy("absorb-polarizer");
    }
    get waveplates() {
        return this.filteredBy("waveplate");
    }
    get sugars() {
        return this.filteredBy("sugar");
    }
    get faradays() {
        return this.filteredBy("faraday");
    }
    get polarizers() {
        return this.absorbPolarizers.concat(this.waveplates, this.sugars, this.faradays);
    }
    // Phasers
    get phaseincs() {
        return this.filteredBy("phaseinc");
    }
    get phasedecs() {
        return this.filteredBy("phasedec");
    }
    get phaseshifters() {
        return this.phasedecs.concat(this.phaseincs);
    }
    // Select cells by type
    filteredBy(name) {
        return this.cells.filter(cell => {
            return cell.element.name === name;
        });
    }
    // Select cells by not type
    filteredByNot(name) {
        return this.cells.filter(cell => {
            return cell.element.name !== name;
        });
    }
    // Test if coord is inside boundaries
    includes(coord) {
        return coord.y >= 0 && coord.y < this.rows && (coord.x >= 0 && coord.x < this.cols);
    }
    // Set one cell
    set(cell) {
        if (this.includes(cell.coord)) {
            this.matrix[cell.coord.y][cell.coord.x] = cell;
            return true;
        }
        else {
            // throw new RangeError(`Coordinate out of bounds. Cell: [${cell.coord.x}, ${cell.coord.y}]`)
            // console.error(`Coordinate out of bounds. ${cell.coord.toString()}`)
            return false;
        }
    }
    // Get one cell - Does not check if coord is in grid
    get(coord) {
        return this.matrix[coord.y][coord.x];
    }
    // Set many cells
    setMany(...cells) {
        let errorToggle = true;
        cells.forEach((cell) => {
            if (!this.includes(cell.coord)) {
                errorToggle = false;
            }
        });
        cells.forEach(cell => {
            this.set(cell);
        });
        return errorToggle;
    }
    // Get many cells
    getMany(...coords) {
        return coords.map(coord => {
            return this.get(coord);
        });
    }
    // Move from a coord to another
    move(src, dst) {
        const cellSrc = this.get(src);
        const cellDst = this.get(dst);
        if (!cellSrc.frozen && !cellDst.frozen) {
            this.set(new Cell_1.default(src, cellDst.element, cellDst.rotation));
            this.set(new Cell_1.default(dst, cellSrc.element, cellSrc.rotation));
            console.log(`Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`);
            return true;
        }
        else {
            console.error(`Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`);
            return false;
        }
    }
    // Basic display
    display() {
        console.log(this.matrix.valueOf());
    }
    // Front-end updates
    frontendUpdate(cellI) {
        const cell = Cell_1.default.importCell(cellI);
        if (this.set(cell)) {
            return this.laserCoords;
        }
        else {
            throw new Error("Error from frontend...");
        }
    }
    // Compute laser path
    laserPath(pointer, maxFrames = 50) {
        // Make a depp clone of the pointer
        let alive = [pointer];
        const dead = [];
        // Simulate path with a specific number of frames
        for (let i = 0; i < maxFrames; i++) {
            // Process each living pointer
            alive.forEach(pointer => {
                pointer.next();
                // Zero the intensity of escaping pointers
                if (!this.includes(pointer.coord)) {
                    pointer.intensity = 0;
                }
                // Absorption
                this.absorbers.forEach((absorber) => {
                    if (pointer.on(absorber)) {
                        pointer.intensity -= pointer.intensity * absorber.element.absorption;
                    }
                });
                // Reflection
                this.mirrors.forEach((mirror) => {
                    if (pointer.on(mirror)) {
                        pointer.direction = (2 * mirror.rotation - pointer.direction + 360) % 360;
                    }
                });
                this.beamsplitters.forEach((beamsplitter) => {
                    if (pointer.on(beamsplitter)) {
                        // Dim the current pointer intensity
                        pointer.intensity /= 2;
                        // Reflecting pointer (create new reflected faded pointer)
                        const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360;
                        alive.push(new Pointer_1.default(pointer.coord, direction, pointer.intensity));
                    }
                });
                // Phase shifters
                this.phaseshifters.forEach((phaseshifter) => {
                    if (pointer.on(phaseshifter)) {
                        pointer.phase = (pointer.phase + phaseshifter.element.phase) % 1;
                    }
                });
            });
            // Filter the living from the dead
            alive.forEach(pointer => {
                if (!pointer.alive) {
                    dead.push(pointer);
                }
            });
            alive = alive.filter(pointer => {
                return pointer.alive;
            });
        }
        // Flatten and dedupe list of pointers
        const pathPointers = [];
        alive = dead.concat(alive);
        alive.forEach(pointer => {
            pathPointers.push(pointer.path);
        });
        return [...new Set(pathPointers.flat())];
    }
    // Laser lines
    get laserCoords() {
        const laserCoords = [];
        const pointers = [];
        this.activeLasers.map(laser => {
            pointers.push(new Pointer_1.default(laser.coord, laser.rotation, 1, 0));
        });
        pointers.forEach(pointer => {
            this.laserPath(pointer, 40).forEach((laserPoint) => {
                if (laserPoint.coord.isIncludedIn(this.coords)) {
                    laserCoords.push(laserPoint);
                }
            });
        });
        return laserCoords;
    }
    // Energize cells according to laser paths
    // Should update also the unergizes cells
    energizeCells(paths) {
        const pathCoords = paths.map(pathPointer => pathPointer.coord);
        this.cells.forEach(cell => {
            if (cell.coord.isIncludedIn(pathCoords) && cell.element.name !== "void") {
                cell.energized = true;
            }
            else {
                cell.energized = false;
            }
        });
    }
    // Activate cells closed to an energized detector
    activateCells() {
        this.unvoid.forEach(cell => {
            if (cell.element.name !== "laser") {
                cell.active = false;
            }
            const energizedAdjacent = this.adjacentCells(cell.coord).filter(adjacent => {
                return adjacent.energized && adjacent.element.name === "detector";
            });
            if (energizedAdjacent.length > 0) {
                console.log(`Cell ${cell.toString()} has 1+ active detectors as adjacent cell.`);
                cell.active = true;
            }
        });
    }
    // Retrieve the adjacent cells to a coordinate in the grid
    adjacentCells(coord) {
        const adjacents = [];
        coord.adjacent.forEach(adjacent => {
            if (this.includes(adjacent)) {
                adjacents.push(this.get(adjacent));
            }
        });
        return adjacents;
    }
    // Include particle display in ascii render
    toString() {
        let result = "";
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const coord = Coord_1.default.importCoord({ y: y, x: x });
                result += this.get(coord).ascii;
            }
            result += "\n";
        }
        return result;
    }
    // FIXME: Need to avoid the void cells
    compress() {
        const cells = this.unvoid;
        const minX = Math.min(...cells.map(cell => cell.coord.x));
        const minY = Math.min(...cells.map(cell => cell.coord.y));
        const maxX = Math.max(...cells.map(cell => cell.coord.x));
        const maxY = Math.max(...cells.map(cell => cell.coord.y));
        const sizeX = maxX - minX;
        const sizeY = maxY - minY;
        console.log(`The most compressed version is: X:${sizeX} Y: ${sizeY}`);
        cells.forEach(cell => {
            cell.coord.x -= minX;
            cell.coord.y -= minY;
        });
        return cells;
    }
    // import cells
    importGrid(jsonCells) {
        jsonCells.forEach(jsonCell => {
            const cell = Cell_1.default.importCell(jsonCell);
            this.set(cell);
        });
    }
    // export JSON file to save state oi the game
    exportGrid() {
        const cells = [];
        this.unvoid.forEach(cell => {
            cells.push(cell.exportCell());
        });
        return cells;
    }
}
exports.default = Grid;


/***/ }),

/***/ "./src/Helpers.ts":
/*!************************!*\
  !*** ./src/Helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Convert angles to unicode symbols
// https://en.wikipedia.org/wiki/Template:Unicode_chart_Arrows
function angleToSymbol(angle) {
    angle = angle % 360;
    switch (angle) {
        case 0:
            return "↑";
        case 45:
            return "↗";
        case 90:
            return "→";
        case 135:
            return "↘";
        case 180:
            return "↓";
        case 225:
            return "↙";
        case 270:
            return "←";
        case 315:
            return "↖";
        default:
            throw new Error("Something is wrong with provided angle.");
    }
}
exports.angleToSymbol = angleToSymbol;
function symbolToAngle(direction) {
    switch (direction) {
        case "↑":
            return 0;
        case "↗":
            return 45;
        case "→":
            return 90;
        case "↘":
            return 135;
        case "↓":
            return 180;
        case "↙":
            return 225;
        case "←":
            return 270;
        case "↖":
            return 315;
        default:
            throw new Error("Something is wrong with provided direction string.");
    }
}
exports.symbolToAngle = symbolToAngle;
function padLeft(text, length, character) {
    const char = character || " ";
    while (text.length < length) {
        text = char + text;
    }
    return text;
}
exports.padLeft = padLeft;
function padRight(text, length, character) {
    const char = character || " ";
    while (text.length < length) {
        text += char;
    }
    return text;
}
exports.padRight = padRight;
function toPercent(value) {
    return `${(value * 100).toFixed(2)}%`;
}
exports.toPercent = toPercent;


/***/ }),

/***/ "./src/Hint.ts":
/*!*********************!*\
  !*** ./src/Hint.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// HINT CLASS
// Structure extracted for v1: https://github.com/stared/quantum-game/blob/master/data/levels_game.json
// TODO: Link hint activation with goals
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
class Hint {
    constructor(coord, text, width = 5, direction = "left", active = true) {
        this.coord = coord;
        this.width = width;
        this.text = text;
        this.direction = direction;
        this.active = active;
    }
    // override toString() method
    toString() {
        return `{#HINT ${this.text} @ ${this.coord.toString()}}`;
    }
    // export JSON
    exportHint() {
        return {
            coord: this.coord.exportCoord(),
            text: this.text
        };
    }
    // Import JSON
    static importHint(jsonHints) {
        const hints = [];
        jsonHints.forEach(hint => {
            const coord = Coord_1.default.importCoord(hint.coord);
            hints.push(new Hint(coord, hint.text));
        });
        return hints;
    }
}
exports.default = Hint;


/***/ }),

/***/ "./src/Level.ts":
/*!**********************!*\
  !*** ./src/Level.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// LEVEL CLASS
// Levels are loaded as working solutions to the puzzle
// Then the frozen elements are removed and put in the toolbox
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Cell_1 = __importDefault(__webpack_require__(/*! ./Cell */ "./src/Cell.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const Grid_1 = __importDefault(__webpack_require__(/*! ./Grid */ "./src/Grid.ts"));
const Hint_1 = __importDefault(__webpack_require__(/*! ./Hint */ "./src/Hint.ts"));
const Goal_1 = __webpack_require__(/*! ./Goal */ "./src/Goal.ts");
class Level {
    constructor(id, name, group, description, grid = new Grid_1.default(8, 8), goals, hints, completed) {
        // Basic infos
        this.id = id;
        this.group = group;
        this.name = name;
        this.description = description;
        // Basic grid definition
        this.grid = grid;
        this.goals = goals;
        this.hints = hints;
        this.completed = completed;
    }
    // Override toString method in order to display ascii level
    toString() {
        return `\
LEVEL: ${this.name} [${this.grid.cols}x${this.grid.rows}]\n\
DESC: ${this.description}\n\
GROUP: ${this.group}\n\
${this.grid.toString()}\n\
GOALS: ${this.goals.map(i => i.toString())}\n\
GOALS: ${this.completed ? "COMPLETE" : "IN PROGRESS"}\n\
HINTS: ${this.hints.map(i => i.toString())}\n
TOOLBOX: ${JSON.stringify(this.toolbox)}\n
`;
    }
    // export JSON file to save state oi the game
    exportLevel() {
        return {
            id: this.id,
            name: this.name,
            group: this.group,
            description: this.description,
            cols: this.grid.cols,
            rows: this.grid.rows,
            cells: this.grid.exportGrid(),
            hints: this.hints.flatMap(hint => JSON.stringify(hint)),
            goals: this.goals.flatMap(goal => JSON.stringify(goal))
        };
    }
    // import JSON file
    static importLevel(json) {
        const grid = new Grid_1.default(json.rows, json.cols);
        grid.importGrid(json.cells);
        const goals = Goal_1.Goal.importGoal(json.goals);
        const hints = Hint_1.default.importHint(json.hints);
        return new Level(json.id, json.name, json.group, json.description, grid, goals, hints, false);
    }
    // import JSON file
    static importV1JSON(json) {
        const grid = new Grid_1.default(json.width, json.height);
        const cells = [];
        json.tiles.forEach((tile) => {
            const coord = Coord_1.default.importCoord({ y: tile.i, x: tile.j });
            const element = Element_1.default.fromName(tile.name, 1);
            const rotation = element.rotationAngle * tile.rotation;
            cells.push(new Cell_1.default(coord, element, rotation, tile.frozen));
        });
        grid.setMany(...cells);
        const goals = [];
        grid.detectors.forEach(detector => {
            goals.push(new Goal_1.Goal(detector.coord, 1));
        });
        const hints = [];
        return new Level(0, json.name, json.group, "V1 level imported", grid, goals, hints, false);
    }
}
exports.default = Level;


/***/ }),

/***/ "./src/Pointer.ts":
/*!************************!*\
  !*** ./src/Pointer.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// POINTER CLASS
// Describes a vector with an origin, a direction and an unit amplitude.
// FIXME: Duplicate between path and coord
// FIXME: Class needs rework
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Helpers_1 = __webpack_require__(/*! ./Helpers */ "./src/Helpers.ts");
class Pointer extends Coord_1.default {
    constructor(coord, direction, intensity = 1, phase = 0, path = [{ coord: coord, direction: direction, intensity: intensity, phase: phase }]) {
        super(coord.y, coord.x);
        this.coord = coord;
        this.direction = direction;
        this.intensity = intensity;
        this.phase = phase;
        this.path = path;
    }
    // Origin of the pointer
    get origin() {
        return this.path[0].coord;
    }
    // Check is a particle has any intensity
    get alive() {
        return this.intensity > 0;
    }
    // Deep clone of the pointer
    get clone() {
        return new Pointer(this.coord, this.direction, this.intensity, this.phase);
    }
    // Pointer is on a specific cell shorthand
    on(cell) {
        return this.coord.equal(cell.coord);
    }
    // Steps/distance towards exiting the grid
    stepsToExit(cols, rows) {
        switch (this.direction % 360) {
            case 0: // TOP
                return this.y;
            case 90: // RIGHT
                return cols - this.x - 1;
            case 180: // BOTTOM
                return rows - this.y - 1;
            case 270: // LEFT
                return this.x;
            default:
                throw new Error("Something went wrong with directions...");
        }
    }
    // Compute next simulation step
    next(repeat = 1) {
        // Moving CW in increment of 90°
        for (let i = 0; i < repeat; i++) {
            switch (this.direction % 360) {
                case 0:
                    this.coord = this.coord.top;
                    break;
                case 90:
                    this.coord = this.coord.right;
                    break;
                case 180:
                    this.coord = this.coord.bottom;
                    break;
                case 270:
                    this.coord = this.coord.left;
                    break;
                default:
                    throw Error(`Something went wrong with pointers and direction.`);
            }
            // Update coord with latest computed path coordinates
            this.path.push({
                coord: this.coord,
                direction: this.direction,
                intensity: this.intensity,
                phase: this.phase
            });
        }
        return this;
    }
    // Export JSON object
    // FIXME: Rework extends and JSON export
    exportPointer() {
        return {
            coord: this.coord,
            direction: this.direction,
            intensity: this.intensity,
            phase: this.phase
        };
    }
    // Import JSON object
    static importPointer(json) {
        const coord = Coord_1.default.importCoord({ y: json.y, x: json.x });
        return new Pointer(coord, json.direction, json.intensity, json.phase);
    }
    // USed for debugging
    static toString(pathPointers) {
        let result = "";
        pathPointers.forEach(pathPointer => {
            result += `<li>Laser at ${pathPointer.coord} going ${pathPointer.direction} with ${Helpers_1.toPercent(pathPointer.intensity)} and ${pathPointer.phase} phase shift</li>`;
        });
        return result;
    }
    // Format active particle list
    static manyToString(pointers) {
        let result = `${pointers.length} active particles...\n`;
        pointers.forEach(pointer => {
            result += `- ${pointer.toString()}\n`;
        });
        return result;
    }
    // Extract coordinates in a list
    static manyToCoords(pointers) {
        const result = [];
        pointers.map(pointer => {
            result.push(pointer.coord);
        });
        return result;
    }
}
exports.default = Pointer;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const level1_json_1 = __importDefault(__webpack_require__(/*! ../levels/game/level1.json */ "./levels/game/level1.json"));
const Level_1 = __importDefault(__webpack_require__(/*! ./Level */ "./src/Level.ts"));
const Game_1 = __importDefault(__webpack_require__(/*! ./Game */ "./src/Game.ts"));
document.body.onload = () => {
    new Game_1.default(Level_1.default.importLevel(level1_json_1.default), 64);
};
document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9lbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29vcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dseXBoLnRzIiwid2VicGFjazovLy8uL3NyYy9Hb2FsLnRzIiwid2VicGFjazovLy8uL3NyYy9HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9IZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9IaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9pbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QUMsS0FBSyxtQkFBbUIsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELDhCQUE4QjtJQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQW1CO1FBQ3RDLElBQUksTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sd0JBQXdCLENBQUM7UUFDeEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQW1CO1FBQ3RDLE1BQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztRQUMzQixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0NBQ0Q7QUE3SUQsMEJBNklDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SkQsMEhBQThDO0FBQzlDLHNGQUE0QjtBQUM1QixtRkFBMEI7QUFFMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBUyxFQUFFO0lBQ2pDLElBQUksY0FBSSxDQUFDLGVBQUssQ0FBQyxXQUFXLENBQUMscUJBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUNGLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJleHBvcnQgY29uc3QganNvbkdyb3VwczogeyBbc3ltYm9sOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG5cdEJhc2ljOiBbXCJ2b2lkXCIsIFwid2FsbFwiLCBcImdhdGVcIl0sXHJcblx0RW1pdHRlcjogW1wibGFzZXJcIl0sXHJcblx0RGlyZWN0aW9uOiBbXCJtaXJyb3JcIiwgXCJiZWFtc3BsaXR0ZXJcIiwgXCJjb2F0ZWRzcGxpdHRlclwiLCBcInBvbGFyc3BsaXR0ZXJcIl0sXHJcblx0QWJzb3JwdGlvbjogW1wiZGV0ZWN0b3JcIiwgXCJtaW5lXCIsIFwicm9ja1wiLCBcIm9tbmlkZXRlY3RvclwiLCBcImZpbHRlclwiXSxcclxuXHRQb2xhcml6YXRpb246IFtcImFic29yYi1wb2xhcml6ZXJcIiwgXCJ3YXZlcGxhdGVcIiwgXCJzdWdhclwiLCBcImZhcmFkYXlcIl0sXHJcblx0UGhhc2U6IFtcInBoYXNlaW5jXCIsIFwicGhhc2VkZWNcIl1cclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IGpzb25FbGVtZW50cyA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiBcImxhc2VyXCIsXHJcblx0XHRuYW1ldjE6IFwiU291cmNlXCIsXHJcblx0XHRncm91cDogXCJFbWl0dGVyXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJBbiBvbi1kZW1hbmQgc2luZ2xlIHBob3RvbiBzb3VyY2UuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvbGFzZXJcIixcclxuXHRcdGFjdGl2ZTogdHJ1ZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMCxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcblx0XHRhc2NpaTogW1wi4q6dXCIsIFwi4q6eXCIsIFwi4q6fXCIsIFwi4q6cXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcInJvY2tcIixcclxuXHRcdG5hbWV2MTogXCJSb2NrXCIsXHJcblx0XHRncm91cDogXCJBYnNvcnB0aW9uXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJEYXJrIGFuZCBpbW1lcnNpdmUgYXMgeW91ciBzd2VldGhlYXJ0J3MgZGVwdGggb2YgZXllcy4gQWJzb3JicyBsaWdodC4gQW5kIGlzIHNlbnNpdGl2ZS5cIixcclxuXHRcdGxpbms6IFwiLi9lbGVtZW50cy9yb2NrXCIsXHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0YWJzb3JwdGlvbjogMSxcclxuXHRcdHBoYXNlOiAwLFxyXG5cdFx0bWF0cml4OiBbXSxcclxuXHRcdGlkOiAxLFxyXG5cdFx0Zm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuXHRcdGFzY2lpOiBbXCLimZxcIl0sXHJcblx0XHR0aWxlczogW1swLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiYWJzb3JiLXBvbGFyaXplclwiLFxyXG5cdFx0bmFtZXYxOiBcImFic29yYi1wb2xhcml6ZXJcIixcclxuXHRcdGdyb3VwOiBcIlBvbGFyaXphdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiQSBwb2xhcml6YXRpb24gZmlsdGVyIFdFLi4uQW5pc290cm9waWMgcG9seW1lciBzdHJhbmRzIGNhcHR1cmUgZWxlY3RyaWMgb3NjaWxsYXRpb25zIHBhcmFsbGVsIHRvIHRoZW0uIFVzZWQgaW4gcGhvdG9ncmFwaHkuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvcG9sYXJpemVyU0VcIixcclxuXHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRhYnNvcnB0aW9uOiAwLFxyXG5cdFx0cGhhc2U6IDAsXHJcblx0XHRtYXRyaXg6IFtdLFxyXG5cdFx0aWQ6IDIsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUwMDZhXCIsXHJcblx0XHRhc2NpaTogW1wi8J+hoVwiLCBcIvCfoaVcIiwgXCLwn6GiXCIsIFwi8J+hplwiLCBcIvCfoaNcIiwgXCLwn6GnXCIsIFwi8J+hoFwiLCBcIvCfoaRcIl0sXHJcblx0XHR0aWxlczogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJ3YXZlcGxhdGVcIixcclxuXHRcdG5hbWV2MTogXCJ3YXZlcGxhdGVcIixcclxuXHRcdGdyb3VwOiBcIlBvbGFyaXphdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiSXQgZGVsYXlzIG9uZSBwb2xhcml6YXRpb24gKHdpdGggZGFya2VyIGxpbmVzKSBieSDOuy80LiBXaGVuIGFwcGxpZWQgY29ycmVjdGx5LCBpdCBjYW4gY2hhbmdlIGxpbmVhciBwb2xhcml6YXRpb24gaW50byBjaXJjdWxhciwgYW5kIHZpY2UgdmVyc2EuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvd2F2ZXBsYXRlXCIsXHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0YWJzb3JwdGlvbjogMCxcclxuXHRcdHBoYXNlOiAwLFxyXG5cdFx0bWF0cml4OiBbXSxcclxuXHRcdGlkOiAzLFxyXG5cdFx0Zm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMDA2YVwiLFxyXG5cdFx0YXNjaWk6IFtcIvCfoalcIiwgXCLwn6GtXCIsIFwi8J+hqlwiLCBcIvCfoa5cIiwgXCLwn6GrXCIsIFwi8J+hr1wiLCBcIvCfoahcIiwgXCLwn6GsXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiZGV0ZWN0b3JcIixcclxuXHRcdG5hbWV2MTogXCJEZXRlY3RvclwiLFxyXG5cdFx0Z3JvdXA6IFwiQWJzb3JwdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiRGV0ZWN0cyBhbmQgYW1wbGlmaWVzIGVsZWN0cmljIHNpZ25hbCBmcm9tIGVhY2ggc2luZ2xlIHBob3RvbiwgZnJvbSBhIHNpbmdsZSBkaXJlY3Rpb24uIFlvdXIgZ29hbCBpcyB0byBnZXQgcGhvdG9uIHRoZXJlIVwiLFxyXG5cdFx0bGluazogXCIuL2VsZW1lbnRzL2RldGVjdG9yXCIsXHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0YWJzb3JwdGlvbjogMSxcclxuXHRcdHBoYXNlOiAwLFxyXG5cdFx0bWF0cml4OiBbXSxcclxuXHRcdGlkOiA0LFxyXG5cdFx0Zm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuXHRcdGFzY2lpOiBbXCLirbFcIiwgXCLirbJcIiwgXCLirbNcIiwgXCLirbBcIl0sXHJcblx0XHR0aWxlczogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwib21uaWRldGVjdG9yXCIsXHJcblx0XHRuYW1ldjE6IFwiT21uaURldGVjdG9yP1wiLFxyXG5cdFx0Z3JvdXA6IFwiQWJzb3JwdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiRGV0ZWN0cyBhbmQgYW1wbGlmaWVzIGVsZWN0cmljIHNpZ25hbCBmcm9tIGVhY2ggc2luZ2xlIHBob3RvbiwgZnJvbSBhbGwgZGlyZWN0aW9ucy4gVHlwaWNhbGx5LCBpdCBpcyB0aGUgZ29hbCB0byBnZXQgdGhlIHBob3RvbiBoZXJlLlwiLFxyXG5cdFx0bGluazogXCIuL2VsZW1lbnRzL29tbmlkZXRlY3RvclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDEsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogNyxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcblx0XHRhc2NpaTogW1wiT1wiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJzdWdhclwiLFxyXG5cdFx0bmFtZXYxOiBcIlN1Z2FyXCIsXHJcblx0XHRncm91cDogXCJQb2xhcml6YXRpb25cIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIlRhYmxlIHN1Z2FyIGlzIGEgY2hpcmFsIG1vbGVjdWxlIOKAkyBpdCBkb2VzIG5vdCBsb29rIHRoZSBzYW1lIGFzIGl0cyBtaXJyb3IgcmVmbGVjdGlvbi4gV2UgcHV0IGl0IGluIGFuIGFtb3VudCwgc28gaXQgcm90YXRlcyBwb2xhcml6YXRpb24gYnkgNDXCsC5cIixcclxuXHRcdGxpbms6IFwiLi9lbGVtZW50cy9zdWdhclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogOCxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTAwNmFcIixcclxuXHRcdGFzY2lpOiBbXCJTXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMjBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJjb2F0ZWRzcGxpdHRlclwiLFxyXG5cdFx0bmFtZXYxOiBcIlZvaWRcIixcclxuXHRcdGdyb3VwOiBcIkRpcmVjdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiQSB0aGluIHNsYWIgb2YgZ2xhc3Mgd2l0aCBhIHJlZmxlY3RpdmUgbGF5ZXIgLSByZWZsZWN0aW5nIGhhbGYgdGhlIGJlYW0gYW5kIHRyYW5zbWl0dGluZyB0aGUgb3RoZXIgaGFsZiBvZiBpdC5cIixcclxuXHRcdGxpbms6IFwiLi9lbGVtZW50cy9jb2F0ZWRzcGxpdHRlclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogOSxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTAwNmFcIixcclxuXHRcdGFzY2lpOiBbXCLih5FcIiwgXCLih5dcIiwgXCLih5JcIiwgXCLih5hcIiwgXCLih5NcIiwgXCLih5lcIiwgXCLih5BcIiwgXCLih5ZcIl0sXHJcblx0XHR0aWxlczogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJtaW5lXCIsXHJcblx0XHRuYW1ldjE6IFwiTWluZVwiLFxyXG5cdFx0Z3JvdXA6IFwiQWJzb3JwdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiT25jZSBpdCBhYnNvcmJzIGEgc2luZ2xlIHBob3RvbiwgaXQgc2V0cyBvZmYuIE9sZCBmcmVuY2ggc3VibWFyaW5lIGNhcHRhaW5zIGNhbiBzb21ldGltZXMgZGlzYXJtIHRoZW0uXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvbWluZVwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDEsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMTEsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIiFcIl0sXHJcblx0XHR0aWxlczogW1swLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwicG9sYXJzcGxpdHRlclwiLFxyXG5cdFx0bmFtZXYxOiBcInBvbGFyc3BsaXR0ZXJcIixcclxuXHRcdGdyb3VwOiBcIkRpcmVjdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiUmVmbGVjdHMgdmVydGljYWwgcG9sYXJpemF0aW9uICjihpUpLCB0cmFuc21pdHRzIGhvcml6b25hbCBwb2xhcml6YXRpb24gKOKGlCkuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvcG9sYXJzcGxpdHRlclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMTIsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIuKsslwiLCBcIuKftFwiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdLCBbMCwgMF1dXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcInZvaWRcIixcclxuXHRcdG5hbWV2MTogXCJWb2lkXCIsXHJcblx0XHRncm91cDogXCJCYXNpY1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiVGhlIHZvaWQuLi5cIixcclxuXHRcdGxpbms6IFwiLi9lbGVtZW50cy92b2lkXCIsXHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0YWJzb3JwdGlvbjogMCxcclxuXHRcdHBoYXNlOiAwLFxyXG5cdFx0bWF0cml4OiBbXSxcclxuXHRcdGlkOiAxOSxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTAwNmFcIixcclxuXHRcdGFzY2lpOiBbXCIgXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMjBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJtaXJyb3JcIixcclxuXHRcdG5hbWV2MTogXCJUaGluTWlycm9yXCIsXHJcblx0XHRncm91cDogXCJEaXJlY3Rpb25cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIk1ldGFsbGljIG9yIGRpZWxlY3RyaWMgbWlycm9yLlwiLFxyXG5cdFx0bGluazogXCIuL2VsZW1lbnRzL21pcnJvclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMTQsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcInxcIiwgXCIvXCIsIFwiLVwiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiL1wiLCBcIi1cIiwgXCJcXFxcXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwid2FsbFwiLFxyXG5cdFx0bmFtZXYxOiBcIldhbGxcIixcclxuXHRcdGdyb3VwOiBcIkJhc2ljXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJBIHN0YW5kYXJkIHdhbGwuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvd2FsbFwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDEsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMjAsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIuKWk1wiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdLCBbMCwgMF1dXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImdhdGVcIixcclxuXHRcdG5hbWV2MTogXCJHYXRlXCIsXHJcblx0XHRncm91cDogXCJCYXNpY1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiQSBjb250cm9sbGVkIGdhdGUuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvZ2F0ZVwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDEsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMjEsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIldcIiwgXCJNXCJdLFxyXG5cdFx0dGlsZXM6IFtbMCwgMF0sIFswLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiYmVhbXNwbGl0dGVyXCIsXHJcblx0XHRuYW1ldjE6IFwiVGhpblNwbGl0dGVyXCIsXHJcblx0XHRncm91cDogXCJEaXJlY3Rpb25cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkEgdGhpbiBzbGFiIG9mIGdsYXNzIHJlZmxlY3RpbmcgaGFsZiB0aGUgYmVhbSwgYW5kIHRyYW5zbWl0dGluZyBvdGhlciBoYWxmIG9mIGl0LlwiLFxyXG5cdFx0bGluazogXCIuL2VsZW1lbnRzL2JlYW1zcGxpdHRlclwiLFxyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdGFic29ycHRpb246IDAsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdGlkOiAxNSxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIuKGkVwiLCBcIuKGl1wiLCBcIuKGklwiLCBcIuKGmFwiLCBcIuKGk1wiLCBcIuKGmVwiLCBcIuKGkFwiLCBcIuKGllwiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcInBoYXNlZGVjXCIsXHJcblx0XHRuYW1ldjE6IFwiR2xhc3NcIixcclxuXHRcdGdyb3VwOiBcIlBoYXNlXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJIaWdoZXIgcmVmcmFjdGl2ZSBpbmRleCBtYWtlcyBsaWdodCBzbG93ZXIuIFdlIHNldCBpdHMgdGhpY2tuZXNzIHNvIGl0IHJldGFyZHMgdGhlIHBoYXNlIGJ5IM67LzQuIFVzZWZ1bCBmb3IgY2hhbmdpbmcgaW50ZXJmZXJlbmNlLlwiLFxyXG5cdFx0bGluazogXCIuL2VsZW1lbnRzL3BoYXNlZGVjXCIsXHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0YWJzb3JwdGlvbjogMCxcclxuXHRcdHBoYXNlOiAtMC4yNSxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMTYsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIuKGnFwiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJmaWx0ZXJcIixcclxuXHRcdG5hbWV2MTogXCJBYnNvcmJlclwiLFxyXG5cdFx0Z3JvdXA6IFwiQWJzb3JwdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiRmlsdGVyIHdpdGggNTAlIGFic29ycHRpb24gcHJvYmFiaWxpdHkuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvYWJzb3JiZXJcIixcclxuXHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRhYnNvcnB0aW9uOiAwLjUsXHJcblx0XHRwaGFzZTogMCxcclxuXHRcdG1hdHJpeDogW10sXHJcblx0XHRpZDogMTgsXHJcblx0XHRmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG5cdFx0YXNjaWk6IFtcIuKWkVwiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJwaGFzZWluY1wiLFxyXG5cdFx0bmFtZXYxOiBcIlZhY3V1bUphclwiLFxyXG5cdFx0Z3JvdXA6IFwiUGhhc2VcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkV2ZW4gYWlyIHJldGFyZHMgbGlnaHQgYSBiaXQuIFdlIHNldCB0aGUgdGhpY2tuZXNzIG9mIHZhY3V1bSBzbyBpdCBhZHZhbmNlcyB0aGUgcGhhc2UgYnkgzrsvNC4gVXNlZnVsIGZvciBjaGFuZ2luZyBpbnRlcmZlcmVuY2UuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvcGhhc2VpbmNcIixcclxuXHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRhYnNvcnB0aW9uOiAwLFxyXG5cdFx0cGhhc2U6IDAuMjUsXHJcblx0XHRtYXRyaXg6IFtdLFxyXG5cdFx0aWQ6IDE3LFxyXG5cdFx0Zm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuXHRcdGFzY2lpOiBbXCLihp1cIl0sXHJcblx0XHR0aWxlczogW1swLCAwXV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiZmFyYWRheVwiLFxyXG5cdFx0bmFtZXYxOiBcIkZhcmFkYXlcIixcclxuXHRcdGdyb3VwOiBcIlBvbGFyaXphdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiUm90YXRlcyBwb2xhcml6YXRpb24gd2l0aCBtYWduZXRpYyBmaWVsZCBieSA0NcKwLiBIYXMgZGlmZmVyZW50IHN5bW1ldHJpZXMgdGhhbiBTdWdhciBTb2x1dGlvbi4gQSBidWlsZGluZyBibG9jayBmb3Igb3B0aWNhbCBkaW9kZXMuXCIsXHJcblx0XHRsaW5rOiBcIi4vZWxlbWVudHMvcGhhc2VkZWNcIixcclxuXHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRhYnNvcnB0aW9uOiAwLFxyXG5cdFx0cGhhc2U6IC0wLjI1LFxyXG5cdFx0bWF0cml4OiBbXSxcclxuXHRcdGlkOiAzMCxcclxuXHRcdGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcblx0XHRhc2NpaTogW1wi8J+gtVwiLCBcIvCfoLZcIiwgXCLwn6C3XCIsIFwi8J+gtFwiXSxcclxuXHRcdHRpbGVzOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXVxyXG5cdH1cclxuXTtcclxuIiwiLy8gQ0VMTCBDTEFTU1xyXG4vLyBCYXNpYyBjbGFzcyBmb3IgdGhlIGdyaWQgY2VsbHNcclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgYW5nbGVUb1N5bWJvbCB9IGZyb20gXCIuL0hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbEludGVyZmFjZSB7XHJcblx0Y29vcmQ6IHsgeTogbnVtYmVyOyB4OiBudW1iZXIgfTtcclxuXHRlbGVtZW50OiBzdHJpbmc7XHJcblx0cm90YXRpb246IG51bWJlcjtcclxuXHRmcm96ZW46IGJvb2xlYW47XHJcblx0YWN0aXZlPzogYm9vbGVhbjtcclxuXHRlbmVyZ2l6ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcclxuXHRjb29yZDogQ29vcmQ7XHJcblx0ZWxlbWVudDogRWxlbWVudDtcclxuXHRyb3RhdGlvbjogbnVtYmVyO1xyXG5cdGZyb3plbjogYm9vbGVhbjtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcblx0ZW5lcmdpemVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb29yZDogQ29vcmQsIGVsZW1lbnQ6IEVsZW1lbnQsIHJvdGF0aW9uID0gMCwgZnJvemVuID0gZmFsc2UsIGFjdGl2ZSA9IGZhbHNlLCBlbmVyZ2l6ZWQgPSBmYWxzZSkge1xyXG5cdFx0dGhpcy5jb29yZCA9IGNvb3JkO1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRcdHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuXHRcdHRoaXMuZnJvemVuID0gZnJvemVuO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblx0XHR0aGlzLmVuZXJnaXplZCA9IGVuZXJnaXplZDtcclxuXHR9XHJcblxyXG5cdC8vIENoYW5nZSBmcm96ZW4gc3RhdHVzIG9mIGNlbGxcclxuXHRnZXQgYXNjaWkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuYXNjaWlbdGhpcy5yb3RhdGlvbiAvIHRoaXMuZWxlbWVudC5yb3RhdGlvbkFuZ2xlXTtcclxuXHR9XHJcblx0Z2V0IHJvdGF0aW9uQXNjaWkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBhbmdsZVRvU3ltYm9sKHRoaXMuZWxlbWVudC5yb3RhdGlvbkFuZ2xlKTtcclxuXHR9XHJcblx0Z2V0IGZvcmVncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5mb3JlZ3JvdW5kQ29sb3I7XHJcblx0fVxyXG5cdGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuYmFja2dyb3VuZENvbG9yO1xyXG5cdH1cclxuXHJcblx0Ly8gUm90YXRlIGNlbGwgLSBDb3JyZWN0aW5nIHRoZSBqYXZhc2NyaXB0IG1vZHVsbyBidWcgZm9yIG5lZ2F0aXZlIHZhbHVlczogaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMDkwNzE3MDM1MTQwaWZfL2phdmFzY3JpcHQuYWJvdXQuY29tL29kL3Byb2JsZW1zb2x2aW5nL2EvbW9kdWxvYnVnLmh0bVxyXG5cdHJvdGF0ZShhbmdsZTogbnVtYmVyID0gdGhpcy5lbGVtZW50LnJvdGF0aW9uQW5nbGUpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5mcm96ZW4pIHtcclxuXHRcdFx0aWYgKE1hdGguYWJzKGFuZ2xlKSAlIHRoaXMuZWxlbWVudC5yb3RhdGlvbkFuZ2xlICE9PSAwKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gdGhlIHN1cHBsaWVkIGFuZ2xlIGNvbXBhcmVkIHRvIHRoZSBlbGVtZW50IHJvdGF0aW9uIGFuZ2xlLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uID0gKCgodGhpcy5yb3RhdGlvbiArIGFuZ2xlKSAlIDM2MCkgKyAzNjApICUgMzYwO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlRoaXMgY2VsbCBpcyBmcm96ZW4sIHlvdSBjYW4ndCByb3RhdGUgaXQuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR0b2dnbGVGcmVlemUoKTogdm9pZCB7XHJcblx0XHR0aGlzLmZyb3plbiA9ICF0aGlzLmZyb3plbjtcclxuXHR9XHJcblx0dG9nZ2xlQWN0aXZlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XHJcblx0fVxyXG5cdHRvZ2dsZUVuZXJnaXplZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZW5lcmdpemVkID0gIXRoaXMuZW5lcmdpemVkO1xyXG5cdH1cclxuXHJcblx0Ly8gT3ZlcnJpZGUgdG9TdHJpbmcoKSBtZXRob2RcclxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGBDZWxsIEAgJHt0aGlzLmNvb3JkLnRvU3RyaW5nKCl9IGlzICR7dGhpcy5mcm96ZW4gPyBcImZyb3plblwiIDogXCJ1bmZyb3plblwifSAke1xyXG5cdFx0XHR0aGlzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcImluYWN0aXZlXCJcclxuXHRcdH0gYW5kICR7dGhpcy5lbmVyZ2l6ZWQgPyBcInBvd2VyZWRcIiA6IFwidW5wb3dlcmVkXCJ9ICR7dGhpcy5lbGVtZW50LnRvU3RyaW5nKCl9IHJvdGF0ZWQgJHt0aGlzLnJvdGF0aW9ufcKwYDtcclxuXHR9XHJcblxyXG5cdC8vIEV4cG9ydCB0byBKU09OIGZvcm1hdFxyXG5cdGV4cG9ydENlbGwoKTogQ2VsbEludGVyZmFjZSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb29yZDogdGhpcy5jb29yZCxcclxuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50Lm5hbWUsXHJcblx0XHRcdHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uLFxyXG5cdFx0XHRmcm96ZW46IHRoaXMuZnJvemVuLFxyXG5cdFx0XHRhY3RpdmU6IHRoaXMuYWN0aXZlLFxyXG5cdFx0XHRlbmVyZ2l6ZWQ6IHRoaXMuZW5lcmdpemVkXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Ly8gSW1wb3J0IGZyb20gT2JqZWN0XHJcblx0c3RhdGljIGltcG9ydENlbGwob2JqOiBDZWxsSW50ZXJmYWNlKTogQ2VsbCB7XHJcblx0XHRjb25zdCBjb29yZCA9IENvb3JkLmltcG9ydENvb3JkKG9iai5jb29yZCk7XHJcblx0XHRjb25zdCBlbGVtZW50ID0gRWxlbWVudC5mcm9tTmFtZShvYmouZWxlbWVudCk7XHJcblx0XHRyZXR1cm4gbmV3IENlbGwoY29vcmQsIGVsZW1lbnQsIG9iai5yb3RhdGlvbiwgb2JqLmZyb3plbiwgb2JqLmFjdGl2ZSwgb2JqLmVuZXJnaXplZCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENPT1JESU5BVEVTIENMQVNTXHJcbi8vIExvdyBsZXZlbCBjb29yZGluYXRlIGZ1bmN0aW9uc1xyXG4vLyBDb29yZCBpcyBhIFt4LCB5LCB6P10gY29udmVuaWVudCB3YXkgdG8gZGVhbCB3aXRoIGNvb3JkaW5hdGVzLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb29yZEludGVyZmFjZSB7XHJcblx0eDogbnVtYmVyO1xyXG5cdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vcmQge1xyXG5cdHg6IG51bWJlcjtcclxuXHR5OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHk6IG51bWJlciwgeDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHR9XHJcblxyXG5cdC8vIENvbnZlcnNpb246IGNvb3JkIC0+IHVpZFxyXG5cdGlkKHJvd3M6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy55ICogcm93cyArIHRoaXMueDtcclxuXHR9XHJcblxyXG5cdC8vIFNWRyBjb29yZGluYXRlIHN5c3RlbTogdG9wLWxlZnQgcG9pbnQgb2YgY2VsbFxyXG5cdHBvcyhzcGFjaW5nOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuXHRcdGNvbnN0IHkgPSB0aGlzLnkgKiBzcGFjaW5nO1xyXG5cdFx0Y29uc3QgeCA9IHRoaXMueCAqIHNwYWNpbmc7XHJcblx0XHRyZXR1cm4gW3ksIHhdO1xyXG5cdH1cclxuXHJcblx0Ly8gRGlzdGFuY2UgdG8gZXhpdGluZyBncmlkXHJcblx0Ly8gQXJyYXkgb2Zmc2V0IGNvcnJlY3RlZFxyXG5cdC8vIFRPRE86IE1vdmUgdG8gcG9pbnRlciBjbGFzc1xyXG5cdGRpc3RhbmNlVG9FeGl0KGRpcmVjdGlvbiA9IDAsIHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHN3aXRjaCAoZGlyZWN0aW9uICUgMzYwKSB7XHJcblx0XHRcdGNhc2UgMDogLy8gVE9QXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMueTtcclxuXHRcdFx0Y2FzZSA5MDogLy8gUklHSFRcclxuXHRcdFx0XHRyZXR1cm4gY29scyAtIHRoaXMueCAtIDE7XHJcblx0XHRcdGNhc2UgMTgwOiAvLyBCT1RUT01cclxuXHRcdFx0XHRyZXR1cm4gcm93cyAtIHRoaXMueSAtIDE7XHJcblx0XHRcdGNhc2UgMjcwOiAvLyBMRUZUXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMueDtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIGRpcmVjdGlvbnMuLi5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBBZGphY2VudCBjZWxsc1xyXG5cdGdldCB0b3AoKTogQ29vcmQge1xyXG5cdFx0cmV0dXJuIENvb3JkLmltcG9ydENvb3JkKHsgeTogdGhpcy55IC0gMSwgeDogdGhpcy54IH0pO1xyXG5cdH1cclxuXHRnZXQgYm90dG9tKCk6IENvb3JkIHtcclxuXHRcdHJldHVybiBDb29yZC5pbXBvcnRDb29yZCh7IHk6IHRoaXMueSArIDEsIHg6IHRoaXMueCB9KTtcclxuXHR9XHJcblx0Z2V0IGxlZnQoKTogQ29vcmQge1xyXG5cdFx0cmV0dXJuIENvb3JkLmltcG9ydENvb3JkKHsgeTogdGhpcy55LCB4OiB0aGlzLnggLSAxIH0pO1xyXG5cdH1cclxuXHRnZXQgcmlnaHQoKTogQ29vcmQge1xyXG5cdFx0cmV0dXJuIENvb3JkLmltcG9ydENvb3JkKHsgeTogdGhpcy55LCB4OiB0aGlzLnggKyAxIH0pO1xyXG5cdH1cclxuXHRnZXQgYWRqYWNlbnQoKTogQ29vcmRbXSB7XHJcblx0XHRyZXR1cm4gW3RoaXMudG9wLCB0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSwgdGhpcy5sZWZ0XTtcclxuXHR9XHJcblx0Z2V0IGFycmF5KCk6IG51bWJlcltdIHtcclxuXHRcdHJldHVybiBbdGhpcy55LCB0aGlzLnhdO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgaWYgdHdvIGNvb3JkaW5hdGVzIGFyZSBhZGphY2VudFxyXG5cdGlzQWRqYWNlbnQoY29vcmQ6IENvb3JkKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gY29vcmQuaXNJbmNsdWRlZEluKHRoaXMuYWRqYWNlbnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgZm9yIGVxdWFsaXR5XHJcblx0ZXF1YWwoY29vcmQ6IENvb3JkKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy54ID09PSBjb29yZC54ICYmIHRoaXMueSA9PT0gY29vcmQueTtcclxuXHR9XHJcblxyXG5cdC8vIFRlc3QgaW5jbHVzaW9uIGluIGFycmF5IG9mIGNvb3Jkc1xyXG5cdGlzSW5jbHVkZWRJbihjb29yZHM6IENvb3JkW10pOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGNvb3Jkcy5maWx0ZXIoY29vcmQgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmVxdWFsKGNvb3JkKTtcclxuXHRcdFx0fSkubGVuZ3RoID4gMFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIG92ZXJyaWRlIG9mIHRvU3RyaW5nIG1ldGhvZCBmb3IgZGVidWdnaW5nXHJcblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgW1k6JHt0aGlzLnl9LCBYOiR7dGhpcy54fV1gO1xyXG5cdH1cclxuXHJcblx0Ly8gRXhwb3J0IEpTT05cclxuXHRleHBvcnRDb29yZCgpOiBDb29yZEludGVyZmFjZSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR5OiB0aGlzLnksXHJcblx0XHRcdHg6IHRoaXMueFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8vIEV4cG9ydCBKU09OXHJcblx0c3RhdGljIGltcG9ydENvb3JkKGpzb246IENvb3JkSW50ZXJmYWNlKTogQ29vcmQge1xyXG5cdFx0cmV0dXJuIG5ldyBDb29yZChqc29uLnksIGpzb24ueCk7XHJcblx0fVxyXG5cclxuXHQvLyBDb252ZXJzaW9uOiB1aWQgLT4gY29vcmRcclxuXHRzdGF0aWMgZnJvbUlkKGluZGV4OiBudW1iZXIsIGNvbHM6IG51bWJlcik6IENvb3JkIHtcclxuXHRcdGNvbnN0IHggPSBpbmRleCAlIGNvbHM7XHJcblx0XHRjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIGNvbHMpO1xyXG5cdFx0cmV0dXJuIENvb3JkLmltcG9ydENvb3JkKHsgeTogeSwgeDogeCB9KTtcclxuXHR9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xyXG4vLyBFTEVNRU5UIENMQVNTXHJcbi8vIEJhc2ljIGNsYXNzIHJlbGF0ZWQgdG8gZ2FtZSBlbGVtZW50c1xyXG4vLyBGSVhNRTogVGhpcyBjbGFzcyBuZWVkcyByZXdyaXRlIHdpdGggZ2x5cGhzIGFuZCBmdW5jXHJcblxyXG5pbXBvcnQgeyBqc29uRWxlbWVudHMgfSBmcm9tIFwiLi4vZGF0YS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBHbHlwaCB9IGZyb20gXCIuL0dseXBoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGdyb3VwOiBzdHJpbmc7XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHRsaW5rOiBzdHJpbmc7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdGFic29ycHRpb246IG51bWJlcjtcclxuXHRwaGFzZTogbnVtYmVyO1xyXG5cdG1hdHJpeDogbnVtYmVyW11bXTtcclxuXHRmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRhc2NpaTogc3RyaW5nW107XHJcblx0dGlsZXM6IG51bWJlcltdW107XHJcblx0Z2x5cGg6IEdseXBoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRncm91cDogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0bGluazogc3RyaW5nO1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRhYnNvcnB0aW9uOiBudW1iZXI7XHJcblx0cGhhc2U6IG51bWJlcjtcclxuXHRtYXRyaXg6IG51bWJlcltdW107XHJcblx0Zm9yZWdyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0YmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0YXNjaWk6IHN0cmluZ1tdO1xyXG5cdHRpbGVzOiBudW1iZXJbXVtdO1xyXG5cdGdseXBoOiBHbHlwaDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRpZDogbnVtYmVyLFxyXG5cdFx0bmFtZTogc3RyaW5nLFxyXG5cdFx0Z3JvdXAgPSBcIlwiLFxyXG5cdFx0ZGVzY3JpcHRpb24gPSBcIlwiLFxyXG5cdFx0bGluayA9IFwiXCIsXHJcblx0XHRhY3RpdmUgPSBmYWxzZSxcclxuXHRcdGFic29ycHRpb24gPSAwLFxyXG5cdFx0cGhhc2UgPSAwLFxyXG5cdFx0bWF0cml4OiBudW1iZXJbXVtdID0gW1swLCAwXSwgWzAsIDBdXSxcclxuXHRcdGZvcmVncm91bmRDb2xvciA9IFwid2hpdGVcIixcclxuXHRcdGJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIixcclxuXHRcdGFzY2lpOiBzdHJpbmdbXSA9IFtcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCJdLFxyXG5cdFx0dGlsZXM6IG51bWJlcltdW10gPSBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dLFxyXG5cdFx0Z2x5cGg6IEdseXBoID0gbmV3IEdseXBoKFwiIFwiLCBbMCwgMF0pXHJcblx0KSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5ncm91cCA9IGdyb3VwO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5saW5rID0gbGluaztcclxuXHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG5cdFx0dGhpcy5hYnNvcnB0aW9uID0gYWJzb3JwdGlvbjtcclxuXHRcdHRoaXMucGhhc2UgPSBwaGFzZTtcclxuXHRcdHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG5cdFx0dGhpcy5mb3JlZ3JvdW5kQ29sb3IgPSBmb3JlZ3JvdW5kQ29sb3I7XHJcblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuXHRcdHRoaXMuYXNjaWkgPSBhc2NpaTtcclxuXHRcdHRoaXMudGlsZXMgPSB0aWxlcztcclxuXHRcdHRoaXMuZ2x5cGggPSBnbHlwaDtcclxuXHR9XHJcblxyXG5cdC8vIENvbXB1dGUgdGhlIHJvdGF0aW9uIGFuZ2xlIGZyb20gdGhlIG51bWJlciBvZiBzcHJpdGVzXHJcblx0Z2V0IHJvdGF0aW9uQW5nbGUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiAzNjAgLyB0aGlzLmFzY2lpLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdC8vIE92ZXJyaWRlIG9mIHRvU3RyaW5nKCkgbWV0aG9kXHJcblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9IChQaGFzZTogJHt0aGlzLnBoYXNlfSwgQWJzb3JwdGlvbjogJHt0aGlzLmFic29ycHRpb24gKiAxMDB9JSlgO1xyXG5cdH1cclxuXHJcblx0Ly8gRXhwb3J0IEpTT05cclxuXHRleHBvcnRKU09OKCk6IEVsZW1lbnRJbnRlcmZhY2Uge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aWQ6IHRoaXMuaWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0Z3JvdXA6IHRoaXMuZ3JvdXAsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRsaW5rOiB0aGlzLmxpbmssXHJcblx0XHRcdGFjdGl2ZTogdGhpcy5hY3RpdmUsXHJcblx0XHRcdGFic29ycHRpb246IHRoaXMuYWJzb3JwdGlvbixcclxuXHRcdFx0cGhhc2U6IHRoaXMucGhhc2UsXHJcblx0XHRcdG1hdHJpeDogdGhpcy5tYXRyaXgsXHJcblx0XHRcdGZvcmVncm91bmRDb2xvcjogdGhpcy5mb3JlZ3JvdW5kQ29sb3IsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdGFzY2lpOiB0aGlzLmFzY2lpLFxyXG5cdFx0XHR0aWxlczogdGhpcy50aWxlcyxcclxuXHRcdFx0Z2x5cGg6IHRoaXMuZ2x5cGhcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyBVc2UgdGhlIGVsZW1lbnQgaWQgdG8gZ2V0IHRoZWlyIHJvdyBpbiB0aGUgdGlsZW1hcCBmaWxlIG11bHRpcGxpZWQgYnUgdGhlIHRpbGUgc2l6ZVxyXG5cdC8vIHN0YXRpYyBwcm9jZXNzVGlsZU1hcCh0aWxlc2l6ZSA9IDY0KTogeyBbeDogbnVtYmVyOyB5OiBudW1iZXJdOiBzdHJpbmcgfSB7XHJcblx0c3RhdGljIHByb2Nlc3NUaWxlTWFwKHRpbGVzaXplID0gNjQpOiB7IFtzeW1ib2w6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSB7XHJcblx0XHRjb25zdCB0aWxlTWFwOiB7IFtzeW1ib2w6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSA9IHt9O1xyXG5cdFx0anNvbkVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdGVsZW0udGlsZXMuZm9yRWFjaCgoX3RpbGUsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgeSA9IGVsZW0uaWQgKiB0aWxlc2l6ZTtcclxuXHRcdFx0XHRjb25zdCB4ID0gaW5kZXggKiB0aWxlc2l6ZTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgUHJvY2Vzc2luZyAke2VsZW0ubmFtZX06IFBvc2l0aW9uOiAke2VsZW0uYXNjaWlbaW5kZXhdfSAtIFtYOiR7eH0sIFk6JHt5fV1gKTtcclxuXHRcdFx0XHR0aWxlTWFwW2VsZW0uYXNjaWlbaW5kZXhdXSA9IFt4LCB5XTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aWxlTWFwO1xyXG5cdH1cclxuXHJcblx0Ly8gU3RhdGljIEpTT04gbG9hZFxyXG5cdC8vIEZJWE1FOiBJdCdzIGdvZGRhbW4gdWdseVxyXG5cdHN0YXRpYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcsIHZlcnNpb24gPSAyKTogRWxlbWVudCB7XHJcblx0XHRpZiAodmVyc2lvbiA9PT0gMikge1xyXG5cdFx0XHRjb25zdCBlbGVtID0ganNvbkVsZW1lbnRzLmZpbmQoKGVsZW06IHsgbmFtZTogc3RyaW5nOyB0aWxlczogbnVtYmVyW11bXSB9KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGVsZW0ubmFtZSA9PT0gbmFtZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBuZXcgRWxlbWVudChcclxuXHRcdFx0XHRlbGVtIS5pZCxcclxuXHRcdFx0XHRlbGVtIS5uYW1lLFxyXG5cdFx0XHRcdGVsZW0hLmdyb3VwLFxyXG5cdFx0XHRcdGVsZW0hLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdGVsZW0hLmxpbmssXHJcblx0XHRcdFx0ZWxlbSEuYWN0aXZlLFxyXG5cdFx0XHRcdGVsZW0hLmFic29ycHRpb24sXHJcblx0XHRcdFx0ZWxlbSEucGhhc2UsXHJcblx0XHRcdFx0ZWxlbSEubWF0cml4LFxyXG5cdFx0XHRcdGVsZW0hLmZvcmVncm91bmRDb2xvcixcclxuXHRcdFx0XHRlbGVtIS5iYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0ZWxlbSEuYXNjaWksXHJcblx0XHRcdFx0ZWxlbSEudGlsZXNcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGVsZW0gPSBqc29uRWxlbWVudHMuZmluZCgoZWxlbTogeyBuYW1ldjE6IHN0cmluZzsgdGlsZXM6IG51bWJlcltdW10gfSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtLm5hbWV2MSA9PT0gbmFtZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBuZXcgRWxlbWVudChcclxuXHRcdFx0XHRlbGVtIS5pZCxcclxuXHRcdFx0XHRlbGVtIS5uYW1lLFxyXG5cdFx0XHRcdGVsZW0hLmdyb3VwLFxyXG5cdFx0XHRcdGVsZW0hLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdGVsZW0hLmxpbmssXHJcblx0XHRcdFx0ZWxlbSEuYWN0aXZlLFxyXG5cdFx0XHRcdGVsZW0hLmFic29ycHRpb24sXHJcblx0XHRcdFx0ZWxlbSEucGhhc2UsXHJcblx0XHRcdFx0ZWxlbSEubWF0cml4LFxyXG5cdFx0XHRcdGVsZW0hLmZvcmVncm91bmRDb2xvcixcclxuXHRcdFx0XHRlbGVtIS5iYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0ZWxlbSEuYXNjaWksXHJcblx0XHRcdFx0ZWxlbSEudGlsZXNcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdseXBoIHtcclxuICBwdWJsaWMgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdGlsZTogW251bWJlciwgbnVtYmVyXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjaGFyYWN0ZXI6IHN0cmluZyxcclxuICAgIHRpbGU6IFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCIsXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcclxuICApIHtcclxuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmZvcmVncm91bmRDb2xvciA9IGZvcmVncm91bmRDb2xvcjtcclxuICAgIHRoaXMudGlsZSA9IHRpbGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEdPQUwgQ0xBU1NcclxuLy8gRWFjaCBkZXRlY3RvciBzaG91bGQgaGF2ZSBhIHJlbGF0ZWQgdGhyZXNob2xkIGxldmVsIGluIG9yZGVyIHRvIGFjaGlldmUgdGhlIGxldmVsLlxyXG4vLyBHb2FsIHNob3VsZCBleHRlbmQgQ2VsbCBvciBzaG91bGQgZXh0ZW5kIENvb3JkXHJcbi8vIEZJWE1FOiBFeHRlbmQgQ29vcmQgaW4gYSBuaWNlIHdheVxyXG5pbXBvcnQgQ29vcmQsIHsgQ29vcmRJbnRlcmZhY2UgfSBmcm9tIFwiLi9Db29yZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHb2FsSW50ZXJmYWNlIHtcclxuXHRjb29yZDogQ29vcmRJbnRlcmZhY2U7XHJcblx0dGhyZXNob2xkOiBudW1iZXI7XHJcblx0dmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvYWwge1xyXG5cdGNvb3JkOiBDb29yZDtcclxuXHR0aHJlc2hvbGQ6IG51bWJlcjtcclxuXHR2YWx1ZTogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb29yZDogQ29vcmQsIHRocmVzaG9sZDogbnVtYmVyLCB2YWx1ZSA9IDApIHtcclxuXHRcdC8vIHN1cGVyKGNvb3JkLnksIGNvb3JkLngpO1xyXG5cdFx0dGhpcy5jb29yZCA9IGNvb3JkO1xyXG5cdFx0dGhpcy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPj0gdGhpcy50aHJlc2hvbGQ7XHJcblx0fVxyXG5cclxuXHRnZXQgcGVyY2VudGFnZSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuICh0aGlzLnZhbHVlIC8gdGhpcy50aHJlc2hvbGQpICogMTAwO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgeyNHb2FsICR7dGhpcy5jb21wbGV0ZWQgPyBcImNvbXBsZXRlZCBcIiA6IFwiIFwifUAgJHt0aGlzLmNvb3JkLnRvU3RyaW5nKCl9IGlzICR7dGhpcy52YWx1ZX0gLyAke1xyXG5cdFx0XHR0aGlzLnRocmVzaG9sZFxyXG5cdFx0fX0gKCR7dGhpcy5wZXJjZW50YWdlfSUpYDtcclxuXHR9XHJcblxyXG5cdC8vIEV4cG9ydCBHb2FsXHJcblx0ZXhwb3J0R29hbCgpOiBHb2FsSW50ZXJmYWNlIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvb3JkOiB0aGlzLmNvb3JkLmV4cG9ydENvb3JkKCksXHJcblx0XHRcdHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQsXHJcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Ly8gRm9ybWF0IGFjdGl2ZSBwYXJ0aWNsZSBsaXN0XHJcblx0c3RhdGljIG1hbnlUb1N0cmluZyhnb2FsczogR29hbFtdKTogc3RyaW5nIHtcclxuXHRcdGxldCByZXN1bHQgPSBgJHtnb2Fscy5sZW5ndGh9IGFjdGl2ZSBnb2Fscy4uLlxcbmA7XHJcblx0XHRnb2Fscy5mb3JFYWNoKGdvYWwgPT4ge1xyXG5cdFx0XHRyZXN1bHQgKz0gYC0gJHtnb2FsLnRvU3RyaW5nKCl9XFxuYDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdC8vIEltcG9ydCBKU09OXHJcblx0c3RhdGljIGltcG9ydEdvYWwoanNvbkdvYWxzOiBHb2FsSW50ZXJmYWNlW10pOiBHb2FsW10ge1xyXG5cdFx0Y29uc3QgZ29hbHM6IEdvYWxbXSA9IFtdO1xyXG5cdFx0anNvbkdvYWxzLmZvckVhY2goZ29hbCA9PiB7XHJcblx0XHRcdGNvbnN0IGNvb3JkID0gZ29hbC5jb29yZDtcclxuXHRcdFx0Z29hbHMucHVzaChuZXcgR29hbChDb29yZC5pbXBvcnRDb29yZChjb29yZCksIGdvYWwudGhyZXNob2xkKSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBnb2FscztcclxuXHR9XHJcbn1cclxuIiwiLy8gR1JJRCBDTEFTU1xyXG4vLyBGSVhNRTogRmlndXJlIGEgd2F5IHRvIGhhdmUgdWlkIGFuZCBjb29yZCBhY2Nlc3MgdG8gY2VsbHNcclxuLy8gRklYTUU6IEZpZ3VyZSBvdXQgYmxhbmsgY2VsbHMgaW4gY29uc3RydWN0b3JcclxuaW1wb3J0IENlbGwsIHsgQ2VsbEludGVyZmFjZSB9IGZyb20gXCIuL0NlbGxcIjtcclxuaW1wb3J0IENsdXN0ZXIgZnJvbSBcIi4vQ2x1c3RlclwiO1xyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgUG9pbnRlciwgeyBQYXRoUG9pbnRlciB9IGZyb20gXCIuL1BvaW50ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xyXG5cdHB1YmxpYyBjb2xzOiBudW1iZXI7XHJcblx0cHVibGljIHJvd3M6IG51bWJlcjtcclxuXHRwdWJsaWMgbWF0cml4OiBDZWxsW11bXTtcclxuXHRwdWJsaWMgY2x1c3RlcnM6IENsdXN0ZXJbXTtcclxuXHJcblx0Y29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIsIG1hdHJpeD86IENlbGxbXVtdKSB7XHJcblx0XHR0aGlzLnJvd3MgPSByb3dzO1xyXG5cdFx0dGhpcy5jb2xzID0gY29scztcclxuXHRcdHRoaXMuY2x1c3RlcnMgPSBbXTtcclxuXHJcblx0XHQvLyBJZiBtYXRyaXggc3BlY2lmaWVkIGV4dHJhY3QgY2VsbHNcclxuXHRcdGlmIChtYXRyaXgpIHtcclxuXHRcdFx0dGhpcy5tYXRyaXggPSBtYXRyaXg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBFbHNlIGNyZWF0ZSBibGFuayBjZWxsc1xyXG5cdFx0XHR0aGlzLm1hdHJpeCA9IG5ldyBBcnJheSh0aGlzLnJvd3MpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xyXG5cdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IHggPSAwOyB4IDwgY29sczsgeCsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjb29yZCA9IENvb3JkLmltcG9ydENvb3JkKHsgeTogeSwgeDogeCB9KTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0KG5ldyBDZWxsKGNvb3JkLCBFbGVtZW50LmZyb21OYW1lKFwidm9pZFwiKSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBHZXQgY2VudGVyIGNvb3JkaW5hdGVzIG9mIGdyaWRcclxuXHRnZXQgY2VudGVyKCk6IENvb3JkIHtcclxuXHRcdHJldHVybiBDb29yZC5pbXBvcnRDb29yZCh7XHJcblx0XHRcdHk6IE1hdGguZmxvb3IodGhpcy5jb2xzIC8gMiksXHJcblx0XHRcdHg6IE1hdGguZmxvb3IodGhpcy5yb3dzIC8gMilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2VsbHMgZ2V0dGVyc1xyXG5cdGdldCBjZWxscygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWF0cml4LnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xyXG5cdH1cclxuXHRnZXQgY29vcmRzKCk6IENvb3JkW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2VsbHMuZmxhdE1hcChjZWxsID0+IGNlbGwuY29vcmQpO1xyXG5cdH1cclxuXHRnZXQgdm9pZCgpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcInZvaWRcIik7XHJcblx0fVxyXG5cdGdldCB1bnZvaWQoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnlOb3QoXCJ2b2lkXCIpO1xyXG5cdH1cclxuXHRnZXQgYWN0aXZlQ2VsbHMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwuYWN0aXZlKTtcclxuXHR9XHJcblx0Z2V0IGVuZXJnaXplZERldGVjdG9ycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0b3JzLmZpbHRlcihkZXRlY3RvciA9PiBkZXRlY3Rvci5lbmVyZ2l6ZWQpO1xyXG5cdH1cclxuXHRnZXQgdW5lbmVyZ2l6ZWREZXRlY3RvcnMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmRldGVjdG9ycy5maWx0ZXIoZGV0ZWN0b3IgPT4gIWRldGVjdG9yLmVuZXJnaXplZCk7XHJcblx0fVxyXG5cclxuXHQvLyBFbWl0dGVyc1xyXG5cdGdldCBsYXNlcnMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJsYXNlclwiKTtcclxuXHR9XHJcblx0Z2V0IGFjdGl2ZUxhc2VycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcImxhc2VyXCIpLmZpbHRlcihsYXNlciA9PiBsYXNlci5hY3RpdmUgPT09IHRydWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmVmbGVjdG9yc1xyXG5cdGdldCBtaXJyb3JzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwibWlycm9yXCIpO1xyXG5cdH1cclxuXHRnZXQgYmVhbXNwbGl0dGVycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcImJlYW1zcGxpdHRlclwiKTtcclxuXHR9XHJcblx0Z2V0IGNvYXRlZHNwbGl0dGVycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcImNvYXRlZHNwbGl0dGVyXCIpO1xyXG5cdH1cclxuXHRnZXQgcG9sYXJzcGxpdHRlcnMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJwb2xhcnNwbGl0dGVyXCIpO1xyXG5cdH1cclxuXHRnZXQgcmVmbGVjdG9ycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWlycm9ycy5jb25jYXQodGhpcy5iZWFtc3BsaXR0ZXJzLCB0aGlzLmNvYXRlZHNwbGl0dGVycywgdGhpcy5wb2xhcnNwbGl0dGVycyk7XHJcblx0fVxyXG5cclxuXHQvLyBBYnNvcmJlcnNcclxuXHRnZXQgZGV0ZWN0b3JzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwiZGV0ZWN0b3JcIik7XHJcblx0fVxyXG5cdGdldCBtaW5lcygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcIm1pbmVcIik7XHJcblx0fVxyXG5cdGdldCByb2NrcygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcInJvY2tcIik7XHJcblx0fVxyXG5cdGdldCBvbW5pZGV0ZWN0b3JzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwib21uaWRldGVjdG9yXCIpO1xyXG5cdH1cclxuXHRnZXQgZmlsdGVycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcImZpbHRlclwiKTtcclxuXHR9XHJcblx0Z2V0IHdhbGxzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwid2FsbFwiKTtcclxuXHR9XHJcblx0Z2V0IGNsb3NlZEdhdGVzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwiZ2F0ZVwiKS5maWx0ZXIoZ2F0ZSA9PiAhZ2F0ZS5hY3RpdmUpO1xyXG5cdH1cclxuXHRnZXQgb3BlbmVkR2F0ZXMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJnYXRlXCIpLmZpbHRlcihnYXRlID0+IGdhdGUuYWN0aXZlKTtcclxuXHR9XHJcblx0Z2V0IGFic29yYmVycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0b3JzLmNvbmNhdChcclxuXHRcdFx0dGhpcy5taW5lcyxcclxuXHRcdFx0dGhpcy5yb2NrcyxcclxuXHRcdFx0dGhpcy5vbW5pZGV0ZWN0b3JzLFxyXG5cdFx0XHR0aGlzLmZpbHRlcnMsXHJcblx0XHRcdHRoaXMud2FsbHMsXHJcblx0XHRcdHRoaXMuY2xvc2VkR2F0ZXNcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHQvLyBQb2xhcml6ZXJzXHJcblx0Z2V0IGFic29yYlBvbGFyaXplcnMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJhYnNvcmItcG9sYXJpemVyXCIpO1xyXG5cdH1cclxuXHRnZXQgd2F2ZXBsYXRlcygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcIndhdmVwbGF0ZVwiKTtcclxuXHR9XHJcblx0Z2V0IHN1Z2FycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcInN1Z2FyXCIpO1xyXG5cdH1cclxuXHRnZXQgZmFyYWRheXMoKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJmYXJhZGF5XCIpO1xyXG5cdH1cclxuXHRnZXQgcG9sYXJpemVycygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWJzb3JiUG9sYXJpemVycy5jb25jYXQodGhpcy53YXZlcGxhdGVzLCB0aGlzLnN1Z2FycywgdGhpcy5mYXJhZGF5cyk7XHJcblx0fVxyXG5cclxuXHQvLyBQaGFzZXJzXHJcblx0Z2V0IHBoYXNlaW5jcygpOiBDZWxsW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcInBoYXNlaW5jXCIpO1xyXG5cdH1cclxuXHRnZXQgcGhhc2VkZWNzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwicGhhc2VkZWNcIik7XHJcblx0fVxyXG5cdGdldCBwaGFzZXNoaWZ0ZXJzKCk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5waGFzZWRlY3MuY29uY2F0KHRoaXMucGhhc2VpbmNzKTtcclxuXHR9XHJcblxyXG5cdC8vIFNlbGVjdCBjZWxscyBieSB0eXBlXHJcblx0cHVibGljIGZpbHRlcmVkQnkobmFtZTogc3RyaW5nKTogQ2VsbFtdIHtcclxuXHRcdHJldHVybiB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IHtcclxuXHRcdFx0cmV0dXJuIGNlbGwuZWxlbWVudC5uYW1lID09PSBuYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8vIFNlbGVjdCBjZWxscyBieSBub3QgdHlwZVxyXG5cdHB1YmxpYyBmaWx0ZXJlZEJ5Tm90KG5hbWU6IHN0cmluZyk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jZWxscy5maWx0ZXIoY2VsbCA9PiB7XHJcblx0XHRcdHJldHVybiBjZWxsLmVsZW1lbnQubmFtZSAhPT0gbmFtZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gVGVzdCBpZiBjb29yZCBpcyBpbnNpZGUgYm91bmRhcmllc1xyXG5cdHB1YmxpYyBpbmNsdWRlcyhjb29yZDogQ29vcmQpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBjb29yZC55ID49IDAgJiYgY29vcmQueSA8IHRoaXMucm93cyAmJiAoY29vcmQueCA+PSAwICYmIGNvb3JkLnggPCB0aGlzLmNvbHMpO1xyXG5cdH1cclxuXHJcblx0Ly8gU2V0IG9uZSBjZWxsXHJcblx0cHVibGljIHNldChjZWxsOiBDZWxsKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5pbmNsdWRlcyhjZWxsLmNvb3JkKSkge1xyXG5cdFx0XHR0aGlzLm1hdHJpeFtjZWxsLmNvb3JkLnldW2NlbGwuY29vcmQueF0gPSBjZWxsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIHRocm93IG5ldyBSYW5nZUVycm9yKGBDb29yZGluYXRlIG91dCBvZiBib3VuZHMuIENlbGw6IFske2NlbGwuY29vcmQueH0sICR7Y2VsbC5jb29yZC55fV1gKVxyXG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKGBDb29yZGluYXRlIG91dCBvZiBib3VuZHMuICR7Y2VsbC5jb29yZC50b1N0cmluZygpfWApXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEdldCBvbmUgY2VsbCAtIERvZXMgbm90IGNoZWNrIGlmIGNvb3JkIGlzIGluIGdyaWRcclxuXHRwdWJsaWMgZ2V0KGNvb3JkOiBDb29yZCk6IENlbGwge1xyXG5cdFx0cmV0dXJuIHRoaXMubWF0cml4W2Nvb3JkLnldW2Nvb3JkLnhdO1xyXG5cdH1cclxuXHJcblx0Ly8gU2V0IG1hbnkgY2VsbHNcclxuXHRwdWJsaWMgc2V0TWFueSguLi5jZWxsczogQ2VsbFtdKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgZXJyb3JUb2dnbGUgPSB0cnVlO1xyXG5cdFx0Y2VsbHMuZm9yRWFjaCgoY2VsbDogQ2VsbCkgPT4ge1xyXG5cdFx0XHRpZiAoIXRoaXMuaW5jbHVkZXMoY2VsbC5jb29yZCkpIHtcclxuXHRcdFx0XHRlcnJvclRvZ2dsZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcblx0XHRcdHRoaXMuc2V0KGNlbGwpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZXJyb3JUb2dnbGU7XHJcblx0fVxyXG5cclxuXHQvLyBHZXQgbWFueSBjZWxsc1xyXG5cdHB1YmxpYyBnZXRNYW55KC4uLmNvb3JkczogQ29vcmRbXSk6IENlbGxbXSB7XHJcblx0XHRyZXR1cm4gY29vcmRzLm1hcChjb29yZCA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldChjb29yZCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIE1vdmUgZnJvbSBhIGNvb3JkIHRvIGFub3RoZXJcclxuXHRwdWJsaWMgbW92ZShzcmM6IENvb3JkLCBkc3Q6IENvb3JkKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBjZWxsU3JjID0gdGhpcy5nZXQoc3JjKTtcclxuXHRcdGNvbnN0IGNlbGxEc3QgPSB0aGlzLmdldChkc3QpO1xyXG5cdFx0aWYgKCFjZWxsU3JjLmZyb3plbiAmJiAhY2VsbERzdC5mcm96ZW4pIHtcclxuXHRcdFx0dGhpcy5zZXQobmV3IENlbGwoc3JjLCBjZWxsRHN0LmVsZW1lbnQsIGNlbGxEc3Qucm90YXRpb24pKTtcclxuXHRcdFx0dGhpcy5zZXQobmV3IENlbGwoZHN0LCBjZWxsU3JjLmVsZW1lbnQsIGNlbGxTcmMucm90YXRpb24pKTtcclxuXHRcdFx0Y29uc29sZS5sb2coYE1vdmVkICR7Y2VsbFNyYy5lbGVtZW50fSBmcm9tICR7c3JjLnRvU3RyaW5nKCl9IHRvICR7ZHN0LnRvU3RyaW5nKCl9YCk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgQ291bGRuJ3QgbW92ZSAke2NlbGxTcmMuZWxlbWVudH0gYmVjYXVzZSBvZiBmcm96ZW4gJHtkc3QudG9TdHJpbmcoKX1gKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmFzaWMgZGlzcGxheVxyXG5cdHB1YmxpYyBkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5tYXRyaXgudmFsdWVPZigpKTtcclxuXHR9XHJcblxyXG5cdC8vIEZyb250LWVuZCB1cGRhdGVzXHJcblx0cHVibGljIGZyb250ZW5kVXBkYXRlKGNlbGxJOiBDZWxsSW50ZXJmYWNlKTogUGF0aFBvaW50ZXJbXSB7XHJcblx0XHRjb25zdCBjZWxsID0gQ2VsbC5pbXBvcnRDZWxsKGNlbGxJKTtcclxuXHRcdGlmICh0aGlzLnNldChjZWxsKSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5sYXNlckNvb3JkcztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkVycm9yIGZyb20gZnJvbnRlbmQuLi5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBDb21wdXRlIGxhc2VyIHBhdGhcclxuXHRsYXNlclBhdGgocG9pbnRlcjogUG9pbnRlciwgbWF4RnJhbWVzID0gNTApOiBQYXRoUG9pbnRlcltdIHtcclxuXHRcdC8vIE1ha2UgYSBkZXBwIGNsb25lIG9mIHRoZSBwb2ludGVyXHJcblx0XHRsZXQgYWxpdmU6IFBvaW50ZXJbXSA9IFtwb2ludGVyXTtcclxuXHRcdGNvbnN0IGRlYWQ6IFBvaW50ZXJbXSA9IFtdO1xyXG5cclxuXHRcdC8vIFNpbXVsYXRlIHBhdGggd2l0aCBhIHNwZWNpZmljIG51bWJlciBvZiBmcmFtZXNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RnJhbWVzOyBpKyspIHtcclxuXHRcdFx0Ly8gUHJvY2VzcyBlYWNoIGxpdmluZyBwb2ludGVyXHJcblx0XHRcdGFsaXZlLmZvckVhY2gocG9pbnRlciA9PiB7XHJcblx0XHRcdFx0cG9pbnRlci5uZXh0KCk7XHJcblxyXG5cdFx0XHRcdC8vIFplcm8gdGhlIGludGVuc2l0eSBvZiBlc2NhcGluZyBwb2ludGVyc1xyXG5cdFx0XHRcdGlmICghdGhpcy5pbmNsdWRlcyhwb2ludGVyLmNvb3JkKSkge1xyXG5cdFx0XHRcdFx0cG9pbnRlci5pbnRlbnNpdHkgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQWJzb3JwdGlvblxyXG5cdFx0XHRcdHRoaXMuYWJzb3JiZXJzLmZvckVhY2goKGFic29yYmVyOiBDZWxsKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocG9pbnRlci5vbihhYnNvcmJlcikpIHtcclxuXHRcdFx0XHRcdFx0cG9pbnRlci5pbnRlbnNpdHkgLT0gcG9pbnRlci5pbnRlbnNpdHkgKiBhYnNvcmJlci5lbGVtZW50LmFic29ycHRpb247XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIFJlZmxlY3Rpb25cclxuXHRcdFx0XHR0aGlzLm1pcnJvcnMuZm9yRWFjaCgobWlycm9yOiBDZWxsKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocG9pbnRlci5vbihtaXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdHBvaW50ZXIuZGlyZWN0aW9uID0gKDIgKiBtaXJyb3Iucm90YXRpb24gLSBwb2ludGVyLmRpcmVjdGlvbiArIDM2MCkgJSAzNjA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5iZWFtc3BsaXR0ZXJzLmZvckVhY2goKGJlYW1zcGxpdHRlcjogQ2VsbCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHBvaW50ZXIub24oYmVhbXNwbGl0dGVyKSkge1xyXG5cdFx0XHRcdFx0XHQvLyBEaW0gdGhlIGN1cnJlbnQgcG9pbnRlciBpbnRlbnNpdHlcclxuXHRcdFx0XHRcdFx0cG9pbnRlci5pbnRlbnNpdHkgLz0gMjtcclxuXHRcdFx0XHRcdFx0Ly8gUmVmbGVjdGluZyBwb2ludGVyIChjcmVhdGUgbmV3IHJlZmxlY3RlZCBmYWRlZCBwb2ludGVyKVxyXG5cdFx0XHRcdFx0XHRjb25zdCBkaXJlY3Rpb24gPSAoMiAqIGJlYW1zcGxpdHRlci5yb3RhdGlvbiAtIHBvaW50ZXIuZGlyZWN0aW9uICsgMzYwKSAlIDM2MDtcclxuXHRcdFx0XHRcdFx0YWxpdmUucHVzaChuZXcgUG9pbnRlcihwb2ludGVyLmNvb3JkLCBkaXJlY3Rpb24sIHBvaW50ZXIuaW50ZW5zaXR5KSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIFBoYXNlIHNoaWZ0ZXJzXHJcblx0XHRcdFx0dGhpcy5waGFzZXNoaWZ0ZXJzLmZvckVhY2goKHBoYXNlc2hpZnRlcjogQ2VsbCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHBvaW50ZXIub24ocGhhc2VzaGlmdGVyKSkge1xyXG5cdFx0XHRcdFx0XHRwb2ludGVyLnBoYXNlID0gKHBvaW50ZXIucGhhc2UgKyBwaGFzZXNoaWZ0ZXIuZWxlbWVudC5waGFzZSkgJSAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEZpbHRlciB0aGUgbGl2aW5nIGZyb20gdGhlIGRlYWRcclxuXHRcdFx0YWxpdmUuZm9yRWFjaChwb2ludGVyID0+IHtcclxuXHRcdFx0XHRpZiAoIXBvaW50ZXIuYWxpdmUpIHtcclxuXHRcdFx0XHRcdGRlYWQucHVzaChwb2ludGVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhbGl2ZSA9IGFsaXZlLmZpbHRlcihwb2ludGVyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcG9pbnRlci5hbGl2ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRmxhdHRlbiBhbmQgZGVkdXBlIGxpc3Qgb2YgcG9pbnRlcnNcclxuXHRcdGNvbnN0IHBhdGhQb2ludGVyczogUGF0aFBvaW50ZXJbXVtdID0gW107XHJcblx0XHRhbGl2ZSA9IGRlYWQuY29uY2F0KGFsaXZlKTtcclxuXHRcdGFsaXZlLmZvckVhY2gocG9pbnRlciA9PiB7XHJcblx0XHRcdHBhdGhQb2ludGVycy5wdXNoKHBvaW50ZXIucGF0aCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBbLi4ubmV3IFNldChwYXRoUG9pbnRlcnMuZmxhdCgpKV07XHJcblx0fVxyXG5cclxuXHQvLyBMYXNlciBsaW5lc1xyXG5cdGdldCBsYXNlckNvb3JkcygpOiBQYXRoUG9pbnRlcltdIHtcclxuXHRcdGNvbnN0IGxhc2VyQ29vcmRzOiBQYXRoUG9pbnRlcltdID0gW107XHJcblx0XHRjb25zdCBwb2ludGVyczogUG9pbnRlcltdID0gW107XHJcblx0XHR0aGlzLmFjdGl2ZUxhc2Vycy5tYXAobGFzZXIgPT4ge1xyXG5cdFx0XHRwb2ludGVycy5wdXNoKG5ldyBQb2ludGVyKGxhc2VyLmNvb3JkLCBsYXNlci5yb3RhdGlvbiwgMSwgMCkpO1xyXG5cdFx0fSk7XHJcblx0XHRwb2ludGVycy5mb3JFYWNoKHBvaW50ZXIgPT4ge1xyXG5cdFx0XHR0aGlzLmxhc2VyUGF0aChwb2ludGVyLCA0MCkuZm9yRWFjaCgobGFzZXJQb2ludDogUGF0aFBvaW50ZXIpID0+IHtcclxuXHRcdFx0XHRpZiAobGFzZXJQb2ludC5jb29yZC5pc0luY2x1ZGVkSW4odGhpcy5jb29yZHMpKSB7XHJcblx0XHRcdFx0XHRsYXNlckNvb3Jkcy5wdXNoKGxhc2VyUG9pbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBsYXNlckNvb3JkcztcclxuXHR9XHJcblxyXG5cdC8vIEVuZXJnaXplIGNlbGxzIGFjY29yZGluZyB0byBsYXNlciBwYXRoc1xyXG5cdC8vIFNob3VsZCB1cGRhdGUgYWxzbyB0aGUgdW5lcmdpemVzIGNlbGxzXHJcblx0ZW5lcmdpemVDZWxscyhwYXRoczogUGF0aFBvaW50ZXJbXSk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcGF0aENvb3JkczogQ29vcmRbXSA9IHBhdGhzLm1hcChwYXRoUG9pbnRlciA9PiBwYXRoUG9pbnRlci5jb29yZCk7XHJcblx0XHR0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcblx0XHRcdGlmIChjZWxsLmNvb3JkLmlzSW5jbHVkZWRJbihwYXRoQ29vcmRzKSAmJiBjZWxsLmVsZW1lbnQubmFtZSAhPT0gXCJ2b2lkXCIpIHtcclxuXHRcdFx0XHRjZWxsLmVuZXJnaXplZCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2VsbC5lbmVyZ2l6ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBBY3RpdmF0ZSBjZWxscyBjbG9zZWQgdG8gYW4gZW5lcmdpemVkIGRldGVjdG9yXHJcblx0YWN0aXZhdGVDZWxscygpOiB2b2lkIHtcclxuXHRcdHRoaXMudW52b2lkLmZvckVhY2goY2VsbCA9PiB7XHJcblx0XHRcdGlmIChjZWxsLmVsZW1lbnQubmFtZSAhPT0gXCJsYXNlclwiKSB7XHJcblx0XHRcdFx0Y2VsbC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBlbmVyZ2l6ZWRBZGphY2VudCA9IHRoaXMuYWRqYWNlbnRDZWxscyhjZWxsLmNvb3JkKS5maWx0ZXIoYWRqYWNlbnQgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBhZGphY2VudC5lbmVyZ2l6ZWQgJiYgYWRqYWNlbnQuZWxlbWVudC5uYW1lID09PSBcImRldGVjdG9yXCI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAoZW5lcmdpemVkQWRqYWNlbnQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBDZWxsICR7Y2VsbC50b1N0cmluZygpfSBoYXMgMSsgYWN0aXZlIGRldGVjdG9ycyBhcyBhZGphY2VudCBjZWxsLmApO1xyXG5cdFx0XHRcdGNlbGwuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXRyaWV2ZSB0aGUgYWRqYWNlbnQgY2VsbHMgdG8gYSBjb29yZGluYXRlIGluIHRoZSBncmlkXHJcblx0YWRqYWNlbnRDZWxscyhjb29yZDogQ29vcmQpOiBDZWxsW10ge1xyXG5cdFx0Y29uc3QgYWRqYWNlbnRzOiBDZWxsW10gPSBbXTtcclxuXHRcdGNvb3JkLmFkamFjZW50LmZvckVhY2goYWRqYWNlbnQgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5pbmNsdWRlcyhhZGphY2VudCkpIHtcclxuXHRcdFx0XHRhZGphY2VudHMucHVzaCh0aGlzLmdldChhZGphY2VudCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBhZGphY2VudHM7XHJcblx0fVxyXG5cclxuXHQvLyBJbmNsdWRlIHBhcnRpY2xlIGRpc3BsYXkgaW4gYXNjaWkgcmVuZGVyXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcblx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcclxuXHRcdFx0Zm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xyXG5cdFx0XHRcdGNvbnN0IGNvb3JkID0gQ29vcmQuaW1wb3J0Q29vcmQoeyB5OiB5LCB4OiB4IH0pO1xyXG5cdFx0XHRcdHJlc3VsdCArPSB0aGlzLmdldChjb29yZCkuYXNjaWk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ICs9IFwiXFxuXCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0Ly8gRklYTUU6IE5lZWQgdG8gYXZvaWQgdGhlIHZvaWQgY2VsbHNcclxuXHRwdWJsaWMgY29tcHJlc3MoKTogQ2VsbFtdIHtcclxuXHRcdGNvbnN0IGNlbGxzID0gdGhpcy51bnZvaWQ7XHJcblx0XHRjb25zdCBtaW5YID0gTWF0aC5taW4oLi4uY2VsbHMubWFwKGNlbGwgPT4gY2VsbC5jb29yZC54KSk7XHJcblx0XHRjb25zdCBtaW5ZID0gTWF0aC5taW4oLi4uY2VsbHMubWFwKGNlbGwgPT4gY2VsbC5jb29yZC55KSk7XHJcblx0XHRjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4uY2VsbHMubWFwKGNlbGwgPT4gY2VsbC5jb29yZC54KSk7XHJcblx0XHRjb25zdCBtYXhZID0gTWF0aC5tYXgoLi4uY2VsbHMubWFwKGNlbGwgPT4gY2VsbC5jb29yZC55KSk7XHJcblx0XHRjb25zdCBzaXplWCA9IG1heFggLSBtaW5YO1xyXG5cdFx0Y29uc3Qgc2l6ZVkgPSBtYXhZIC0gbWluWTtcclxuXHRcdGNvbnNvbGUubG9nKGBUaGUgbW9zdCBjb21wcmVzc2VkIHZlcnNpb24gaXM6IFg6JHtzaXplWH0gWTogJHtzaXplWX1gKTtcclxuXHJcblx0XHRjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG5cdFx0XHRjZWxsLmNvb3JkLnggLT0gbWluWDtcclxuXHRcdFx0Y2VsbC5jb29yZC55IC09IG1pblk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBjZWxscztcclxuXHR9XHJcblxyXG5cdC8vIGltcG9ydCBjZWxsc1xyXG5cdHB1YmxpYyBpbXBvcnRHcmlkKGpzb25DZWxsczogQ2VsbEludGVyZmFjZVtdKTogdm9pZCB7XHJcblx0XHRqc29uQ2VsbHMuZm9yRWFjaChqc29uQ2VsbCA9PiB7XHJcblx0XHRcdGNvbnN0IGNlbGwgPSBDZWxsLmltcG9ydENlbGwoanNvbkNlbGwpO1xyXG5cdFx0XHR0aGlzLnNldChjZWxsKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gZXhwb3J0IEpTT04gZmlsZSB0byBzYXZlIHN0YXRlIG9pIHRoZSBnYW1lXHJcblx0cHVibGljIGV4cG9ydEdyaWQoKTogQ2VsbEludGVyZmFjZVtdIHtcclxuXHRcdGNvbnN0IGNlbGxzOiBDZWxsSW50ZXJmYWNlW10gPSBbXTtcclxuXHRcdHRoaXMudW52b2lkLmZvckVhY2goY2VsbCA9PiB7XHJcblx0XHRcdGNlbGxzLnB1c2goY2VsbC5leHBvcnRDZWxsKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gY2VsbHM7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvbnZlcnQgYW5nbGVzIHRvIHVuaWNvZGUgc3ltYm9sc1xyXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UZW1wbGF0ZTpVbmljb2RlX2NoYXJ0X0Fycm93c1xyXG5leHBvcnQgZnVuY3Rpb24gYW5nbGVUb1N5bWJvbChhbmdsZTogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRhbmdsZSA9IGFuZ2xlICUgMzYwO1xyXG5cdHN3aXRjaCAoYW5nbGUpIHtcclxuXHRcdGNhc2UgMDpcclxuXHRcdFx0cmV0dXJuIFwi4oaRXCI7XHJcblx0XHRjYXNlIDQ1OlxyXG5cdFx0XHRyZXR1cm4gXCLihpdcIjtcclxuXHRcdGNhc2UgOTA6XHJcblx0XHRcdHJldHVybiBcIuKGklwiO1xyXG5cdFx0Y2FzZSAxMzU6XHJcblx0XHRcdHJldHVybiBcIuKGmFwiO1xyXG5cdFx0Y2FzZSAxODA6XHJcblx0XHRcdHJldHVybiBcIuKGk1wiO1xyXG5cdFx0Y2FzZSAyMjU6XHJcblx0XHRcdHJldHVybiBcIuKGmVwiO1xyXG5cdFx0Y2FzZSAyNzA6XHJcblx0XHRcdHJldHVybiBcIuKGkFwiO1xyXG5cdFx0Y2FzZSAzMTU6XHJcblx0XHRcdHJldHVybiBcIuKGllwiO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIGlzIHdyb25nIHdpdGggcHJvdmlkZWQgYW5nbGUuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bWJvbFRvQW5nbGUoZGlyZWN0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRjYXNlIFwi4oaRXCI6XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0Y2FzZSBcIuKGl1wiOlxyXG5cdFx0XHRyZXR1cm4gNDU7XHJcblx0XHRjYXNlIFwi4oaSXCI6XHJcblx0XHRcdHJldHVybiA5MDtcclxuXHRcdGNhc2UgXCLihphcIjpcclxuXHRcdFx0cmV0dXJuIDEzNTtcclxuXHRcdGNhc2UgXCLihpNcIjpcclxuXHRcdFx0cmV0dXJuIDE4MDtcclxuXHRcdGNhc2UgXCLihplcIjpcclxuXHRcdFx0cmV0dXJuIDIyNTtcclxuXHRcdGNhc2UgXCLihpBcIjpcclxuXHRcdFx0cmV0dXJuIDI3MDtcclxuXHRcdGNhc2UgXCLihpZcIjpcclxuXHRcdFx0cmV0dXJuIDMxNTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyBpcyB3cm9uZyB3aXRoIHByb3ZpZGVkIGRpcmVjdGlvbiBzdHJpbmcuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZExlZnQodGV4dDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgY2hhcmFjdGVyPzogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRjb25zdCBjaGFyID0gY2hhcmFjdGVyIHx8IFwiIFwiO1xyXG5cdHdoaWxlICh0ZXh0Lmxlbmd0aCA8IGxlbmd0aCkge1xyXG5cdFx0dGV4dCA9IGNoYXIgKyB0ZXh0O1xyXG5cdH1cclxuXHRyZXR1cm4gdGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZFJpZ2h0KHRleHQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGNoYXJhY3Rlcj86IHN0cmluZyk6IHN0cmluZyB7XHJcblx0Y29uc3QgY2hhciA9IGNoYXJhY3RlciB8fCBcIiBcIjtcclxuXHR3aGlsZSAodGV4dC5sZW5ndGggPCBsZW5ndGgpIHtcclxuXHRcdHRleHQgKz0gY2hhcjtcclxuXHR9XHJcblx0cmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1BlcmNlbnQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcblx0cmV0dXJuIGAkeyh2YWx1ZSAqIDEwMCkudG9GaXhlZCgyKX0lYDtcclxufVxyXG4iLCIvLyBISU5UIENMQVNTXHJcbi8vIFN0cnVjdHVyZSBleHRyYWN0ZWQgZm9yIHYxOiBodHRwczovL2dpdGh1Yi5jb20vc3RhcmVkL3F1YW50dW0tZ2FtZS9ibG9iL21hc3Rlci9kYXRhL2xldmVsc19nYW1lLmpzb25cclxuLy8gVE9ETzogTGluayBoaW50IGFjdGl2YXRpb24gd2l0aCBnb2Fsc1xyXG5cclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpbnRJbnRlcmZhY2Uge1xyXG5cdGNvb3JkOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcblx0dGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50IHtcclxuXHRjb29yZDogQ29vcmQ7XHJcblx0d2lkdGg6IG51bWJlcjtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0ZGlyZWN0aW9uOiBzdHJpbmc7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb29yZDogQ29vcmQsIHRleHQ6IHN0cmluZywgd2lkdGggPSA1LCBkaXJlY3Rpb24gPSBcImxlZnRcIiwgYWN0aXZlID0gdHJ1ZSkge1xyXG5cdFx0dGhpcy5jb29yZCA9IGNvb3JkO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblx0fVxyXG5cclxuXHQvLyBvdmVycmlkZSB0b1N0cmluZygpIG1ldGhvZFxyXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gYHsjSElOVCAke3RoaXMudGV4dH0gQCAke3RoaXMuY29vcmQudG9TdHJpbmcoKX19YDtcclxuXHR9XHJcblxyXG5cdC8vIGV4cG9ydCBKU09OXHJcblx0ZXhwb3J0SGludCgpOiBIaW50SW50ZXJmYWNlIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvb3JkOiB0aGlzLmNvb3JkLmV4cG9ydENvb3JkKCksXHJcblx0XHRcdHRleHQ6IHRoaXMudGV4dFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8vIEltcG9ydCBKU09OXHJcblx0c3RhdGljIGltcG9ydEhpbnQoanNvbkhpbnRzOiBIaW50SW50ZXJmYWNlW10pOiBIaW50W10ge1xyXG5cdFx0Y29uc3QgaGludHM6IEhpbnRbXSA9IFtdO1xyXG5cdFx0anNvbkhpbnRzLmZvckVhY2goaGludCA9PiB7XHJcblx0XHRcdGNvbnN0IGNvb3JkID0gQ29vcmQuaW1wb3J0Q29vcmQoaGludC5jb29yZCk7XHJcblx0XHRcdGhpbnRzLnB1c2gobmV3IEhpbnQoY29vcmQsIGhpbnQudGV4dCkpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gaGludHM7XHJcblx0fVxyXG59XHJcbiIsIi8vIExFVkVMIENMQVNTXHJcbi8vIExldmVscyBhcmUgbG9hZGVkIGFzIHdvcmtpbmcgc29sdXRpb25zIHRvIHRoZSBwdXp6bGVcclxuLy8gVGhlbiB0aGUgZnJvemVuIGVsZW1lbnRzIGFyZSByZW1vdmVkIGFuZCBwdXQgaW4gdGhlIHRvb2xib3hcclxuXHJcbmltcG9ydCBDb29yZCBmcm9tIFwiLi9Db29yZFwiO1xyXG5pbXBvcnQgQ2VsbCwgeyBDZWxsSW50ZXJmYWNlIH0gZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IEhpbnQsIHsgSGludEludGVyZmFjZSB9IGZyb20gXCIuL0hpbnRcIjtcclxuaW1wb3J0IHsgR29hbCwgR29hbEludGVyZmFjZSB9IGZyb20gXCIuL0dvYWxcIjtcclxuaW1wb3J0IEludmVudG9yeSBmcm9tIFwiLi9JbnZlbnRvcnlcIjtcclxuXHJcbmludGVyZmFjZSBMZXZlbEludGVyZmFjZSB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0Z3JvdXA6IHN0cmluZztcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdGNvbHM6IG51bWJlcjtcclxuXHRyb3dzOiBudW1iZXI7XHJcblx0Y2VsbHM6IENlbGxJbnRlcmZhY2VbXTtcclxuXHRnb2FsczogR29hbEludGVyZmFjZVtdO1xyXG5cdGhpbnRzOiBIaW50SW50ZXJmYWNlW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRncm91cDogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0Z3JpZDogR3JpZDtcclxuXHRnb2FsczogR29hbFtdO1xyXG5cdGhpbnRzOiBIaW50W107XHJcblx0dG9vbGJveDogSW52ZW50b3J5O1xyXG5cdGNvbXBsZXRlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRpZDogbnVtYmVyLFxyXG5cdFx0bmFtZTogc3RyaW5nLFxyXG5cdFx0Z3JvdXA6IHN0cmluZyxcclxuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcblx0XHRncmlkOiBHcmlkID0gbmV3IEdyaWQoOCwgOCksXHJcblx0XHRnb2FsczogR29hbFtdLFxyXG5cdFx0aGludHM6IEhpbnRbXSxcclxuXHRcdGNvbXBsZXRlZDogYm9vbGVhblxyXG5cdCkge1xyXG5cdFx0Ly8gQmFzaWMgaW5mb3NcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMuZ3JvdXAgPSBncm91cDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHQvLyBCYXNpYyBncmlkIGRlZmluaXRpb25cclxuXHRcdHRoaXMuZ3JpZCA9IGdyaWQ7XHJcblx0XHR0aGlzLmdvYWxzID0gZ29hbHM7XHJcblx0XHR0aGlzLmhpbnRzID0gaGludHM7XHJcblx0XHR0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuXHR9XHJcblxyXG5cdC8vIE92ZXJyaWRlIHRvU3RyaW5nIG1ldGhvZCBpbiBvcmRlciB0byBkaXNwbGF5IGFzY2lpIGxldmVsXHJcblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgXFxcclxuTEVWRUw6ICR7dGhpcy5uYW1lfSBbJHt0aGlzLmdyaWQuY29sc314JHt0aGlzLmdyaWQucm93c31dXFxuXFxcclxuREVTQzogJHt0aGlzLmRlc2NyaXB0aW9ufVxcblxcXHJcbkdST1VQOiAke3RoaXMuZ3JvdXB9XFxuXFxcclxuJHt0aGlzLmdyaWQudG9TdHJpbmcoKX1cXG5cXFxyXG5HT0FMUzogJHt0aGlzLmdvYWxzLm1hcChpID0+IGkudG9TdHJpbmcoKSl9XFxuXFxcclxuR09BTFM6ICR7dGhpcy5jb21wbGV0ZWQgPyBcIkNPTVBMRVRFXCIgOiBcIklOIFBST0dSRVNTXCJ9XFxuXFxcclxuSElOVFM6ICR7dGhpcy5oaW50cy5tYXAoaSA9PiBpLnRvU3RyaW5nKCkpfVxcblxyXG5UT09MQk9YOiAke0pTT04uc3RyaW5naWZ5KHRoaXMudG9vbGJveCl9XFxuXHJcbmA7XHJcblx0fVxyXG5cclxuXHQvLyBleHBvcnQgSlNPTiBmaWxlIHRvIHNhdmUgc3RhdGUgb2kgdGhlIGdhbWVcclxuXHRleHBvcnRMZXZlbCgpOiB7fSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogdGhpcy5pZCxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRncm91cDogdGhpcy5ncm91cCxcclxuXHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcblx0XHRcdGNvbHM6IHRoaXMuZ3JpZC5jb2xzLFxyXG5cdFx0XHRyb3dzOiB0aGlzLmdyaWQucm93cyxcclxuXHRcdFx0Y2VsbHM6IHRoaXMuZ3JpZC5leHBvcnRHcmlkKCksXHJcblx0XHRcdGhpbnRzOiB0aGlzLmhpbnRzLmZsYXRNYXAoaGludCA9PiBKU09OLnN0cmluZ2lmeShoaW50KSksXHJcblx0XHRcdGdvYWxzOiB0aGlzLmdvYWxzLmZsYXRNYXAoZ29hbCA9PiBKU09OLnN0cmluZ2lmeShnb2FsKSlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyBpbXBvcnQgSlNPTiBmaWxlXHJcblx0c3RhdGljIGltcG9ydExldmVsKGpzb246IExldmVsSW50ZXJmYWNlKTogTGV2ZWwge1xyXG5cdFx0Y29uc3QgZ3JpZCA9IG5ldyBHcmlkKGpzb24ucm93cywganNvbi5jb2xzKTtcclxuXHRcdGdyaWQuaW1wb3J0R3JpZChqc29uLmNlbGxzKTtcclxuXHRcdGNvbnN0IGdvYWxzID0gR29hbC5pbXBvcnRHb2FsKGpzb24uZ29hbHMpO1xyXG5cdFx0Y29uc3QgaGludHMgPSBIaW50LmltcG9ydEhpbnQoanNvbi5oaW50cyk7XHJcblx0XHRyZXR1cm4gbmV3IExldmVsKGpzb24uaWQsIGpzb24ubmFtZSwganNvbi5ncm91cCwganNvbi5kZXNjcmlwdGlvbiwgZ3JpZCwgZ29hbHMsIGhpbnRzLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHQvLyBpbXBvcnQgSlNPTiBmaWxlXHJcblx0c3RhdGljIGltcG9ydFYxSlNPTihqc29uOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBuYW1lOiBzdHJpbmc7IGdyb3VwOiBzdHJpbmc7IHRpbGVzOiB7fVtdIH0pOiBMZXZlbCB7XHJcblx0XHRjb25zdCBncmlkID0gbmV3IEdyaWQoanNvbi53aWR0aCwganNvbi5oZWlnaHQpO1xyXG5cdFx0Y29uc3QgY2VsbHM6IENlbGxbXSA9IFtdO1xyXG5cdFx0anNvbi50aWxlcy5mb3JFYWNoKCh0aWxlOiB7IGk6IG51bWJlcjsgajogbnVtYmVyOyBuYW1lOiBzdHJpbmc7IHJvdGF0aW9uOiBudW1iZXI7IGZyb3plbjogYm9vbGVhbiB9KSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvb3JkID0gQ29vcmQuaW1wb3J0Q29vcmQoeyB5OiB0aWxlLmksIHg6IHRpbGUuaiB9KTtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUodGlsZS5uYW1lLCAxKTtcclxuXHRcdFx0Y29uc3Qgcm90YXRpb24gPSBlbGVtZW50LnJvdGF0aW9uQW5nbGUgKiB0aWxlLnJvdGF0aW9uO1xyXG5cdFx0XHRjZWxscy5wdXNoKG5ldyBDZWxsKGNvb3JkLCBlbGVtZW50LCByb3RhdGlvbiwgdGlsZS5mcm96ZW4pKTtcclxuXHRcdH0pO1xyXG5cdFx0Z3JpZC5zZXRNYW55KC4uLmNlbGxzKTtcclxuXHRcdGNvbnN0IGdvYWxzOiBHb2FsW10gPSBbXTtcclxuXHRcdGdyaWQuZGV0ZWN0b3JzLmZvckVhY2goZGV0ZWN0b3IgPT4ge1xyXG5cdFx0XHRnb2Fscy5wdXNoKG5ldyBHb2FsKGRldGVjdG9yLmNvb3JkLCAxKSk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGhpbnRzOiBIaW50W10gPSBbXTtcclxuXHRcdHJldHVybiBuZXcgTGV2ZWwoMCwganNvbi5uYW1lLCBqc29uLmdyb3VwLCBcIlYxIGxldmVsIGltcG9ydGVkXCIsIGdyaWQsIGdvYWxzLCBoaW50cywgZmFsc2UpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBQT0lOVEVSIENMQVNTXHJcbi8vIERlc2NyaWJlcyBhIHZlY3RvciB3aXRoIGFuIG9yaWdpbiwgYSBkaXJlY3Rpb24gYW5kIGFuIHVuaXQgYW1wbGl0dWRlLlxyXG4vLyBGSVhNRTogRHVwbGljYXRlIGJldHdlZW4gcGF0aCBhbmQgY29vcmRcclxuLy8gRklYTUU6IENsYXNzIG5lZWRzIHJld29ya1xyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgeyB0b1BlcmNlbnQgfSBmcm9tIFwiLi9IZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhdGhQb2ludGVyIHtcclxuXHRjb29yZDogQ29vcmQ7XHJcblx0ZGlyZWN0aW9uOiBudW1iZXI7XHJcblx0aW50ZW5zaXR5OiBudW1iZXI7XHJcblx0cGhhc2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRlciBleHRlbmRzIENvb3JkIHtcclxuXHRjb29yZDogQ29vcmQ7XHJcblx0ZGlyZWN0aW9uOiBudW1iZXI7XHJcblx0aW50ZW5zaXR5OiBudW1iZXI7XHJcblx0cGhhc2U6IG51bWJlcjtcclxuXHRwYXRoOiBQYXRoUG9pbnRlcltdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdGNvb3JkOiBDb29yZCxcclxuXHRcdGRpcmVjdGlvbjogbnVtYmVyLFxyXG5cdFx0aW50ZW5zaXR5ID0gMSxcclxuXHRcdHBoYXNlID0gMCxcclxuXHRcdHBhdGg6IFBhdGhQb2ludGVyW10gPSBbeyBjb29yZDogY29vcmQsIGRpcmVjdGlvbjogZGlyZWN0aW9uLCBpbnRlbnNpdHk6IGludGVuc2l0eSwgcGhhc2U6IHBoYXNlIH1dXHJcblx0KSB7XHJcblx0XHRzdXBlcihjb29yZC55LCBjb29yZC54KTtcclxuXHRcdHRoaXMuY29vcmQgPSBjb29yZDtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cdFx0dGhpcy5pbnRlbnNpdHkgPSBpbnRlbnNpdHk7XHJcblx0XHR0aGlzLnBoYXNlID0gcGhhc2U7XHJcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xyXG5cdH1cclxuXHJcblx0Ly8gT3JpZ2luIG9mIHRoZSBwb2ludGVyXHJcblx0Z2V0IG9yaWdpbigpOiBDb29yZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXRoWzBdLmNvb3JkO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgaXMgYSBwYXJ0aWNsZSBoYXMgYW55IGludGVuc2l0eVxyXG5cdGdldCBhbGl2ZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmludGVuc2l0eSA+IDA7XHJcblx0fVxyXG5cclxuXHQvLyBEZWVwIGNsb25lIG9mIHRoZSBwb2ludGVyXHJcblx0Z2V0IGNsb25lKCk6IFBvaW50ZXIge1xyXG5cdFx0cmV0dXJuIG5ldyBQb2ludGVyKHRoaXMuY29vcmQsIHRoaXMuZGlyZWN0aW9uLCB0aGlzLmludGVuc2l0eSwgdGhpcy5waGFzZSk7XHJcblx0fVxyXG5cclxuXHQvLyBQb2ludGVyIGlzIG9uIGEgc3BlY2lmaWMgY2VsbCBzaG9ydGhhbmRcclxuXHRvbihjZWxsOiBDZWxsKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb29yZC5lcXVhbChjZWxsLmNvb3JkKTtcclxuXHR9XHJcblxyXG5cdC8vIFN0ZXBzL2Rpc3RhbmNlIHRvd2FyZHMgZXhpdGluZyB0aGUgZ3JpZFxyXG5cdHN0ZXBzVG9FeGl0KGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHN3aXRjaCAodGhpcy5kaXJlY3Rpb24gJSAzNjApIHtcclxuXHRcdFx0Y2FzZSAwOiAvLyBUT1BcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy55O1xyXG5cdFx0XHRjYXNlIDkwOiAvLyBSSUdIVFxyXG5cdFx0XHRcdHJldHVybiBjb2xzIC0gdGhpcy54IC0gMTtcclxuXHRcdFx0Y2FzZSAxODA6IC8vIEJPVFRPTVxyXG5cdFx0XHRcdHJldHVybiByb3dzIC0gdGhpcy55IC0gMTtcclxuXHRcdFx0Y2FzZSAyNzA6IC8vIExFRlRcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy54O1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZGlyZWN0aW9ucy4uLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIENvbXB1dGUgbmV4dCBzaW11bGF0aW9uIHN0ZXBcclxuXHRuZXh0KHJlcGVhdCA9IDEpOiBQb2ludGVyIHtcclxuXHRcdC8vIE1vdmluZyBDVyBpbiBpbmNyZW1lbnQgb2YgOTDCsFxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZXBlYXQ7IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uICUgMzYwKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0dGhpcy5jb29yZCA9IHRoaXMuY29vcmQudG9wO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA5MDpcclxuXHRcdFx0XHRcdHRoaXMuY29vcmQgPSB0aGlzLmNvb3JkLnJpZ2h0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxODA6XHJcblx0XHRcdFx0XHR0aGlzLmNvb3JkID0gdGhpcy5jb29yZC5ib3R0b207XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI3MDpcclxuXHRcdFx0XHRcdHRoaXMuY29vcmQgPSB0aGlzLmNvb3JkLmxlZnQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggcG9pbnRlcnMgYW5kIGRpcmVjdGlvbi5gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBVcGRhdGUgY29vcmQgd2l0aCBsYXRlc3QgY29tcHV0ZWQgcGF0aCBjb29yZGluYXRlc1xyXG5cdFx0XHR0aGlzLnBhdGgucHVzaCh7XHJcblx0XHRcdFx0Y29vcmQ6IHRoaXMuY29vcmQsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbixcclxuXHRcdFx0XHRpbnRlbnNpdHk6IHRoaXMuaW50ZW5zaXR5LFxyXG5cdFx0XHRcdHBoYXNlOiB0aGlzLnBoYXNlXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvLyBFeHBvcnQgSlNPTiBvYmplY3RcclxuXHQvLyBGSVhNRTogUmV3b3JrIGV4dGVuZHMgYW5kIEpTT04gZXhwb3J0XHJcblx0ZXhwb3J0UG9pbnRlcigpOiBQYXRoUG9pbnRlciB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb29yZDogdGhpcy5jb29yZCxcclxuXHRcdFx0ZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbixcclxuXHRcdFx0aW50ZW5zaXR5OiB0aGlzLmludGVuc2l0eSxcclxuXHRcdFx0cGhhc2U6IHRoaXMucGhhc2VcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyBJbXBvcnQgSlNPTiBvYmplY3RcclxuXHRzdGF0aWMgaW1wb3J0UG9pbnRlcihqc29uOiB7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHRkaXJlY3Rpb246IG51bWJlcjtcclxuXHRcdGludGVuc2l0eTogbnVtYmVyO1xyXG5cdFx0cGhhc2U6IG51bWJlcjtcclxuXHRcdHBhdGg6IHsgeTogbnVtYmVyOyB4OiBudW1iZXIgfVtdO1xyXG5cdH0pOiBQb2ludGVyIHtcclxuXHRcdGNvbnN0IGNvb3JkID0gQ29vcmQuaW1wb3J0Q29vcmQoeyB5OiBqc29uLnksIHg6IGpzb24ueCB9KTtcclxuXHRcdHJldHVybiBuZXcgUG9pbnRlcihjb29yZCwganNvbi5kaXJlY3Rpb24sIGpzb24uaW50ZW5zaXR5LCBqc29uLnBoYXNlKTtcclxuXHR9XHJcblxyXG5cdC8vIFVTZWQgZm9yIGRlYnVnZ2luZ1xyXG5cdHN0YXRpYyB0b1N0cmluZyhwYXRoUG9pbnRlcnM6IFBhdGhQb2ludGVyW10pOiBzdHJpbmcge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblx0XHRwYXRoUG9pbnRlcnMuZm9yRWFjaChwYXRoUG9pbnRlciA9PiB7XHJcblx0XHRcdHJlc3VsdCArPSBgPGxpPkxhc2VyIGF0ICR7cGF0aFBvaW50ZXIuY29vcmR9IGdvaW5nICR7cGF0aFBvaW50ZXIuZGlyZWN0aW9ufSB3aXRoICR7dG9QZXJjZW50KFxyXG5cdFx0XHRcdHBhdGhQb2ludGVyLmludGVuc2l0eVxyXG5cdFx0XHQpfSBhbmQgJHtwYXRoUG9pbnRlci5waGFzZX0gcGhhc2Ugc2hpZnQ8L2xpPmA7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHQvLyBGb3JtYXQgYWN0aXZlIHBhcnRpY2xlIGxpc3RcclxuXHRzdGF0aWMgbWFueVRvU3RyaW5nKHBvaW50ZXJzOiBQb2ludGVyW10pOiBzdHJpbmcge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGAke3BvaW50ZXJzLmxlbmd0aH0gYWN0aXZlIHBhcnRpY2xlcy4uLlxcbmA7XHJcblx0XHRwb2ludGVycy5mb3JFYWNoKHBvaW50ZXIgPT4ge1xyXG5cdFx0XHRyZXN1bHQgKz0gYC0gJHtwb2ludGVyLnRvU3RyaW5nKCl9XFxuYDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdC8vIEV4dHJhY3QgY29vcmRpbmF0ZXMgaW4gYSBsaXN0XHJcblx0c3RhdGljIG1hbnlUb0Nvb3Jkcyhwb2ludGVyczogUG9pbnRlcltdKTogQ29vcmRbXSB7XHJcblx0XHRjb25zdCByZXN1bHQ6IENvb3JkW10gPSBbXTtcclxuXHRcdHBvaW50ZXJzLm1hcChwb2ludGVyID0+IHtcclxuXHRcdFx0cmVzdWx0LnB1c2gocG9pbnRlci5jb29yZCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBqc29uIGZyb20gXCIuLi9sZXZlbHMvZ2FtZS9sZXZlbDEuanNvblwiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vTGV2ZWxcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKTogdm9pZCA9PiB7XHJcblx0bmV3IEdhbWUoTGV2ZWwuaW1wb3J0TGV2ZWwoanNvbiksIDY0KTtcclxufTtcclxuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwgeyBrZXk6IFwiYVwiIH0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==