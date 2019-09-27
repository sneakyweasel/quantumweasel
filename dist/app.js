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

/***/ "./elements/elements.ts":
/*!******************************!*\
  !*** ./elements/elements.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.jsonElements = [
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
        name: "laser",
        namev1: "Source",
        group: "Emitter",
        description: "A one-photon laser source",
        link: "./elements/laser",
        active: true,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 0,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["^", ">", "v", "<"],
        tiles: [[1, 0], [1, 0], [2, 0], [3, 0]]
    },
    {
        name: "mirror",
        namev1: "ThinMirror",
        group: "Direction",
        description: "A simple reflecting mirror",
        link: "./elements/mirror",
        active: false,
        absorption: 0,
        phase: 0,
        matrix: [],
        id: 14,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
        tiles: [
            [15, 0],
            [15, 1],
            [15, 2],
            [15, 3],
            [15, 4],
            [15, 5],
            [15, 6],
            [15, 7]
        ]
    },
    {
        name: "detector",
        namev1: "Detector",
        group: "Absorber",
        description: "A one-photon detector",
        link: "./elements/detector",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 6,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["⇑", "⇒", "⇓", "⇐"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "omnidetector",
        namev1: "OmniDetector?",
        group: "Absorber",
        description: "A omni-direction one-photon detector",
        link: "./elements/omnidetector",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 8,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["O"],
        tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
    },
    {
        name: "rock",
        namev1: "Rock",
        group: "Absorber",
        description: "An absorbing pet rock",
        link: "./elements/rock",
        active: false,
        absorption: 1,
        phase: 0,
        matrix: [],
        id: 1,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["#"],
        tiles: [[0, 0]]
    },
    {
        name: "mine",
        namev1: "Mine",
        group: "Absorber",
        description: "An explosive mine (disarm Jean)",
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
        name: "beamsplitter",
        namev1: "ThinSplitter",
        group: "Direction",
        description: "A beamsplitter",
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
        name: "filter",
        namev1: "Absorber",
        group: "Absorber",
        description: "A neutral density filter",
        link: "./elements/absorber",
        active: false,
        absorption: 0.5,
        phase: 0,
        matrix: [],
        id: 19,
        foregroundColor: "white",
        backgroundColor: "black",
        ascii: ["-"],
        tiles: [[0, 0]]
    },
    {
        name: "phaseinc",
        namev1: "VacuumJar",
        group: "Phase",
        description: "A glass slab that increases phase.",
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
        name: "phasedec",
        namev1: "Glass",
        group: "Phase",
        description: "Void that decreases phase.",
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
    }
];


/***/ }),

/***/ "./levels/level.json":
/*!***************************!*\
  !*** ./levels/level.json ***!
  \***************************/
/*! exports provided: id, name, group, description, cols, rows, cells, hints, goals, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":0,\"name\":\"Divide and conquer!\",\"group\":\"Game\",\"description\":\"Divide, ..., then conquer!\",\"cols\":20,\"rows\":20,\"cells\":[{\"x\":6,\"y\":3,\"element\":\"detector\",\"rotation\":90,\"frozen\":true},{\"x\":6,\"y\":5,\"element\":\"beamsplitter\",\"rotation\":45,\"frozen\":false},{\"x\":8,\"y\":5,\"element\":\"detector\",\"rotation\":0,\"frozen\":true},{\"x\":2,\"y\":7,\"element\":\"detector\",\"rotation\":180,\"frozen\":true},{\"x\":4,\"y\":7,\"element\":\"beamsplitter\",\"rotation\":45,\"frozen\":false},{\"x\":6,\"y\":7,\"element\":\"beamsplitter\",\"rotation\":135,\"frozen\":false},{\"x\":2,\"y\":9,\"element\":\"detector\",\"rotation\":180,\"frozen\":true},{\"x\":4,\"y\":9,\"element\":\"beamsplitter\",\"rotation\":45,\"frozen\":false},{\"x\":5,\"y\":9,\"element\":\"rock\",\"rotation\":0,\"frozen\":true},{\"x\":4,\"y\":11,\"element\":\"detector\",\"rotation\":270,\"frozen\":false},{\"x\":6,\"y\":11,\"element\":\"laser\",\"rotation\":270,\"frozen\":true}],\"hints\":[],\"goals\":[]}");

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/rot-js/lib/color.js":
/*!******************************************!*\
  !*** ./node_modules/rot-js/lib/color.js ***!
  \******************************************/
/*! exports provided: fromString, add, add_, multiply, multiply_, interpolate, lerp, interpolateHSL, lerpHSL, randomize, rgb2hsl, hsl2rgb, toRGB, toHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_", function() { return add_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply_", function() { return multiply_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHSL", function() { return interpolateHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerpHSL", function() { return lerpHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomize", function() { return randomize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hsl", function() { return rgb2hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return hsl2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRGB", function() { return toRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHex", function() { return toHex; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/rot-js/lib/util.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/rot-js/lib/rng.js");


function fromString(str) {
    let cached, r;
    if (str in CACHE) {
        cached = CACHE[str];
    }
    else {
        if (str.charAt(0) == "#") { // hex rgb
            let matched = str.match(/[0-9a-f]/gi) || [];
            let values = matched.map((x) => parseInt(x, 16));
            if (values.length == 3) {
                cached = values.map((x) => x * 17);
            }
            else {
                for (let i = 0; i < 3; i++) {
                    values[i + 1] += 16 * values[i];
                    values.splice(i, 1);
                }
                cached = values;
            }
        }
        else if ((r = str.match(/rgb\(([0-9, ]+)\)/i))) { // decimal rgb
            cached = r[1].split(/\s*,\s*/).map((x) => parseInt(x));
        }
        else { // html name
            cached = [0, 0, 0];
        }
        CACHE[str] = cached;
    }
    return cached.slice();
}
/**
 * Add two or more colors
 */
function add(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] += colors[j][i];
        }
    }
    return result;
}
/**
 * Add two or more colors, MODIFIES FIRST ARGUMENT
 */
function add_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] += colors[j][i];
        }
    }
    return color1;
}
/**
 * Multiply (mix) two or more colors
 */
function multiply(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] *= colors[j][i] / 255;
        }
        result[i] = Math.round(result[i]);
    }
    return result;
}
/**
 * Multiply (mix) two or more colors, MODIFIES FIRST ARGUMENT
 */
function multiply_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] *= colors[j][i] / 255;
        }
        color1[i] = Math.round(color1[i]);
    }
    return color1;
}
/**
 * Interpolate (blend) two colors with a given factor
 */
function interpolate(color1, color2, factor = 0.5) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}
const lerp = interpolate;
/**
 * Interpolate (blend) two colors with a given factor in HSL mode
 */
function interpolateHSL(color1, color2, factor = 0.5) {
    let hsl1 = rgb2hsl(color1);
    let hsl2 = rgb2hsl(color2);
    for (let i = 0; i < 3; i++) {
        hsl1[i] += factor * (hsl2[i] - hsl1[i]);
    }
    return hsl2rgb(hsl1);
}
const lerpHSL = interpolateHSL;
/**
 * Create a new random color based on this one
 * @param color
 * @param diff Set of standard deviations
 */
function randomize(color, diff) {
    if (!(diff instanceof Array)) {
        diff = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getNormal(0, diff));
    }
    let result = color.slice();
    for (let i = 0; i < 3; i++) {
        result[i] += (diff instanceof Array ? Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getNormal(0, diff[i])) : diff);
    }
    return result;
}
/**
 * Converts an RGB color value to HSL. Expects 0..255 inputs, produces 0..1 outputs.
 */
function rgb2hsl(color) {
    let r = color[0] / 255;
    let g = color[1] / 255;
    let b = color[2] / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;
    if (max == min) {
        s = 0; // achromatic
    }
    else {
        let d = max - min;
        s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
/**
 * Converts an HSL color value to RGB. Expects 0..1 inputs, produces 0..255 outputs.
 */
function hsl2rgb(color) {
    let l = color[2];
    if (color[1] == 0) {
        l = Math.round(l * 255);
        return [l, l, l];
    }
    else {
        let s = color[1];
        let q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
        let p = 2 * l - q;
        let r = hue2rgb(p, q, color[0] + 1 / 3);
        let g = hue2rgb(p, q, color[0]);
        let b = hue2rgb(p, q, color[0] - 1 / 3);
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
}
function toRGB(color) {
    let clamped = color.map(x => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(x, 0, 255));
    return `rgb(${clamped.join(",")})`;
}
function toHex(color) {
    let clamped = color.map(x => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(x, 0, 255).toString(16).padStart(2, "0"));
    return `#${clamped.join("")}`;
}
const CACHE = {
    "black": [0, 0, 0],
    "navy": [0, 0, 128],
    "darkblue": [0, 0, 139],
    "mediumblue": [0, 0, 205],
    "blue": [0, 0, 255],
    "darkgreen": [0, 100, 0],
    "green": [0, 128, 0],
    "teal": [0, 128, 128],
    "darkcyan": [0, 139, 139],
    "deepskyblue": [0, 191, 255],
    "darkturquoise": [0, 206, 209],
    "mediumspringgreen": [0, 250, 154],
    "lime": [0, 255, 0],
    "springgreen": [0, 255, 127],
    "aqua": [0, 255, 255],
    "cyan": [0, 255, 255],
    "midnightblue": [25, 25, 112],
    "dodgerblue": [30, 144, 255],
    "forestgreen": [34, 139, 34],
    "seagreen": [46, 139, 87],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "limegreen": [50, 205, 50],
    "mediumseagreen": [60, 179, 113],
    "turquoise": [64, 224, 208],
    "royalblue": [65, 105, 225],
    "steelblue": [70, 130, 180],
    "darkslateblue": [72, 61, 139],
    "mediumturquoise": [72, 209, 204],
    "indigo": [75, 0, 130],
    "darkolivegreen": [85, 107, 47],
    "cadetblue": [95, 158, 160],
    "cornflowerblue": [100, 149, 237],
    "mediumaquamarine": [102, 205, 170],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "slateblue": [106, 90, 205],
    "olivedrab": [107, 142, 35],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "mediumslateblue": [123, 104, 238],
    "lawngreen": [124, 252, 0],
    "chartreuse": [127, 255, 0],
    "aquamarine": [127, 255, 212],
    "maroon": [128, 0, 0],
    "purple": [128, 0, 128],
    "olive": [128, 128, 0],
    "gray": [128, 128, 128],
    "grey": [128, 128, 128],
    "skyblue": [135, 206, 235],
    "lightskyblue": [135, 206, 250],
    "blueviolet": [138, 43, 226],
    "darkred": [139, 0, 0],
    "darkmagenta": [139, 0, 139],
    "saddlebrown": [139, 69, 19],
    "darkseagreen": [143, 188, 143],
    "lightgreen": [144, 238, 144],
    "mediumpurple": [147, 112, 216],
    "darkviolet": [148, 0, 211],
    "palegreen": [152, 251, 152],
    "darkorchid": [153, 50, 204],
    "yellowgreen": [154, 205, 50],
    "sienna": [160, 82, 45],
    "brown": [165, 42, 42],
    "darkgray": [169, 169, 169],
    "darkgrey": [169, 169, 169],
    "lightblue": [173, 216, 230],
    "greenyellow": [173, 255, 47],
    "paleturquoise": [175, 238, 238],
    "lightsteelblue": [176, 196, 222],
    "powderblue": [176, 224, 230],
    "firebrick": [178, 34, 34],
    "darkgoldenrod": [184, 134, 11],
    "mediumorchid": [186, 85, 211],
    "rosybrown": [188, 143, 143],
    "darkkhaki": [189, 183, 107],
    "silver": [192, 192, 192],
    "mediumvioletred": [199, 21, 133],
    "indianred": [205, 92, 92],
    "peru": [205, 133, 63],
    "chocolate": [210, 105, 30],
    "tan": [210, 180, 140],
    "lightgray": [211, 211, 211],
    "lightgrey": [211, 211, 211],
    "palevioletred": [216, 112, 147],
    "thistle": [216, 191, 216],
    "orchid": [218, 112, 214],
    "goldenrod": [218, 165, 32],
    "crimson": [220, 20, 60],
    "gainsboro": [220, 220, 220],
    "plum": [221, 160, 221],
    "burlywood": [222, 184, 135],
    "lightcyan": [224, 255, 255],
    "lavender": [230, 230, 250],
    "darksalmon": [233, 150, 122],
    "violet": [238, 130, 238],
    "palegoldenrod": [238, 232, 170],
    "lightcoral": [240, 128, 128],
    "khaki": [240, 230, 140],
    "aliceblue": [240, 248, 255],
    "honeydew": [240, 255, 240],
    "azure": [240, 255, 255],
    "sandybrown": [244, 164, 96],
    "wheat": [245, 222, 179],
    "beige": [245, 245, 220],
    "whitesmoke": [245, 245, 245],
    "mintcream": [245, 255, 250],
    "ghostwhite": [248, 248, 255],
    "salmon": [250, 128, 114],
    "antiquewhite": [250, 235, 215],
    "linen": [250, 240, 230],
    "lightgoldenrodyellow": [250, 250, 210],
    "oldlace": [253, 245, 230],
    "red": [255, 0, 0],
    "fuchsia": [255, 0, 255],
    "magenta": [255, 0, 255],
    "deeppink": [255, 20, 147],
    "orangered": [255, 69, 0],
    "tomato": [255, 99, 71],
    "hotpink": [255, 105, 180],
    "coral": [255, 127, 80],
    "darkorange": [255, 140, 0],
    "lightsalmon": [255, 160, 122],
    "orange": [255, 165, 0],
    "lightpink": [255, 182, 193],
    "pink": [255, 192, 203],
    "gold": [255, 215, 0],
    "peachpuff": [255, 218, 185],
    "navajowhite": [255, 222, 173],
    "moccasin": [255, 228, 181],
    "bisque": [255, 228, 196],
    "mistyrose": [255, 228, 225],
    "blanchedalmond": [255, 235, 205],
    "papayawhip": [255, 239, 213],
    "lavenderblush": [255, 240, 245],
    "seashell": [255, 245, 238],
    "cornsilk": [255, 248, 220],
    "lemonchiffon": [255, 250, 205],
    "floralwhite": [255, 250, 240],
    "snow": [255, 250, 250],
    "yellow": [255, 255, 0],
    "lightyellow": [255, 255, 224],
    "ivory": [255, 255, 240],
    "white": [255, 255, 255]
};


/***/ }),

/***/ "./node_modules/rot-js/lib/constants.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/constants.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_WIDTH, DEFAULT_HEIGHT, DIRS, KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return DEFAULT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return DEFAULT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRS", function() { return DIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/** Default with for display and map generators */
let DEFAULT_WIDTH = 80;
/** Default height for display and map generators */
let DEFAULT_HEIGHT = 25;
const DIRS = {
    4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
    8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
    6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
};
const KEYS = {
    /** Cancel key. */
    VK_CANCEL: 3,
    /** Help key. */
    VK_HELP: 6,
    /** Backspace key. */
    VK_BACK_SPACE: 8,
    /** Tab key. */
    VK_TAB: 9,
    /** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
    VK_CLEAR: 12,
    /** Return/enter key on the main keyboard. */
    VK_RETURN: 13,
    /** Reserved, but not used. */
    VK_ENTER: 14,
    /** Shift key. */
    VK_SHIFT: 16,
    /** Control key. */
    VK_CONTROL: 17,
    /** Alt (Option on Mac) key. */
    VK_ALT: 18,
    /** Pause key. */
    VK_PAUSE: 19,
    /** Caps lock. */
    VK_CAPS_LOCK: 20,
    /** Escape key. */
    VK_ESCAPE: 27,
    /** Space bar. */
    VK_SPACE: 32,
    /** Page Up key. */
    VK_PAGE_UP: 33,
    /** Page Down key. */
    VK_PAGE_DOWN: 34,
    /** End key. */
    VK_END: 35,
    /** Home key. */
    VK_HOME: 36,
    /** Left arrow. */
    VK_LEFT: 37,
    /** Up arrow. */
    VK_UP: 38,
    /** Right arrow. */
    VK_RIGHT: 39,
    /** Down arrow. */
    VK_DOWN: 40,
    /** Print Screen key. */
    VK_PRINTSCREEN: 44,
    /** Ins(ert) key. */
    VK_INSERT: 45,
    /** Del(ete) key. */
    VK_DELETE: 46,
    /***/
    VK_0: 48,
    /***/
    VK_1: 49,
    /***/
    VK_2: 50,
    /***/
    VK_3: 51,
    /***/
    VK_4: 52,
    /***/
    VK_5: 53,
    /***/
    VK_6: 54,
    /***/
    VK_7: 55,
    /***/
    VK_8: 56,
    /***/
    VK_9: 57,
    /** Colon (:) key. Requires Gecko 15.0 */
    VK_COLON: 58,
    /** Semicolon (;) key. */
    VK_SEMICOLON: 59,
    /** Less-than (<) key. Requires Gecko 15.0 */
    VK_LESS_THAN: 60,
    /** Equals (=) key. */
    VK_EQUALS: 61,
    /** Greater-than (>) key. Requires Gecko 15.0 */
    VK_GREATER_THAN: 62,
    /** Question mark (?) key. Requires Gecko 15.0 */
    VK_QUESTION_MARK: 63,
    /** Atmark (@) key. Requires Gecko 15.0 */
    VK_AT: 64,
    /***/
    VK_A: 65,
    /***/
    VK_B: 66,
    /***/
    VK_C: 67,
    /***/
    VK_D: 68,
    /***/
    VK_E: 69,
    /***/
    VK_F: 70,
    /***/
    VK_G: 71,
    /***/
    VK_H: 72,
    /***/
    VK_I: 73,
    /***/
    VK_J: 74,
    /***/
    VK_K: 75,
    /***/
    VK_L: 76,
    /***/
    VK_M: 77,
    /***/
    VK_N: 78,
    /***/
    VK_O: 79,
    /***/
    VK_P: 80,
    /***/
    VK_Q: 81,
    /***/
    VK_R: 82,
    /***/
    VK_S: 83,
    /***/
    VK_T: 84,
    /***/
    VK_U: 85,
    /***/
    VK_V: 86,
    /***/
    VK_W: 87,
    /***/
    VK_X: 88,
    /***/
    VK_Y: 89,
    /***/
    VK_Z: 90,
    /***/
    VK_CONTEXT_MENU: 93,
    /** 0 on the numeric keypad. */
    VK_NUMPAD0: 96,
    /** 1 on the numeric keypad. */
    VK_NUMPAD1: 97,
    /** 2 on the numeric keypad. */
    VK_NUMPAD2: 98,
    /** 3 on the numeric keypad. */
    VK_NUMPAD3: 99,
    /** 4 on the numeric keypad. */
    VK_NUMPAD4: 100,
    /** 5 on the numeric keypad. */
    VK_NUMPAD5: 101,
    /** 6 on the numeric keypad. */
    VK_NUMPAD6: 102,
    /** 7 on the numeric keypad. */
    VK_NUMPAD7: 103,
    /** 8 on the numeric keypad. */
    VK_NUMPAD8: 104,
    /** 9 on the numeric keypad. */
    VK_NUMPAD9: 105,
    /** * on the numeric keypad. */
    VK_MULTIPLY: 106,
    /** + on the numeric keypad. */
    VK_ADD: 107,
    /***/
    VK_SEPARATOR: 108,
    /** - on the numeric keypad. */
    VK_SUBTRACT: 109,
    /** Decimal point on the numeric keypad. */
    VK_DECIMAL: 110,
    /** / on the numeric keypad. */
    VK_DIVIDE: 111,
    /** F1 key. */
    VK_F1: 112,
    /** F2 key. */
    VK_F2: 113,
    /** F3 key. */
    VK_F3: 114,
    /** F4 key. */
    VK_F4: 115,
    /** F5 key. */
    VK_F5: 116,
    /** F6 key. */
    VK_F6: 117,
    /** F7 key. */
    VK_F7: 118,
    /** F8 key. */
    VK_F8: 119,
    /** F9 key. */
    VK_F9: 120,
    /** F10 key. */
    VK_F10: 121,
    /** F11 key. */
    VK_F11: 122,
    /** F12 key. */
    VK_F12: 123,
    /** F13 key. */
    VK_F13: 124,
    /** F14 key. */
    VK_F14: 125,
    /** F15 key. */
    VK_F15: 126,
    /** F16 key. */
    VK_F16: 127,
    /** F17 key. */
    VK_F17: 128,
    /** F18 key. */
    VK_F18: 129,
    /** F19 key. */
    VK_F19: 130,
    /** F20 key. */
    VK_F20: 131,
    /** F21 key. */
    VK_F21: 132,
    /** F22 key. */
    VK_F22: 133,
    /** F23 key. */
    VK_F23: 134,
    /** F24 key. */
    VK_F24: 135,
    /** Num Lock key. */
    VK_NUM_LOCK: 144,
    /** Scroll Lock key. */
    VK_SCROLL_LOCK: 145,
    /** Circumflex (^) key. Requires Gecko 15.0 */
    VK_CIRCUMFLEX: 160,
    /** Exclamation (!) key. Requires Gecko 15.0 */
    VK_EXCLAMATION: 161,
    /** Double quote () key. Requires Gecko 15.0 */
    VK_DOUBLE_QUOTE: 162,
    /** Hash (#) key. Requires Gecko 15.0 */
    VK_HASH: 163,
    /** Dollar sign ($) key. Requires Gecko 15.0 */
    VK_DOLLAR: 164,
    /** Percent (%) key. Requires Gecko 15.0 */
    VK_PERCENT: 165,
    /** Ampersand (&) key. Requires Gecko 15.0 */
    VK_AMPERSAND: 166,
    /** Underscore (_) key. Requires Gecko 15.0 */
    VK_UNDERSCORE: 167,
    /** Open parenthesis (() key. Requires Gecko 15.0 */
    VK_OPEN_PAREN: 168,
    /** Close parenthesis ()) key. Requires Gecko 15.0 */
    VK_CLOSE_PAREN: 169,
    /* Asterisk (*) key. Requires Gecko 15.0 */
    VK_ASTERISK: 170,
    /** Plus (+) key. Requires Gecko 15.0 */
    VK_PLUS: 171,
    /** Pipe (|) key. Requires Gecko 15.0 */
    VK_PIPE: 172,
    /** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
    VK_HYPHEN_MINUS: 173,
    /** Open curly bracket ({) key. Requires Gecko 15.0 */
    VK_OPEN_CURLY_BRACKET: 174,
    /** Close curly bracket (}) key. Requires Gecko 15.0 */
    VK_CLOSE_CURLY_BRACKET: 175,
    /** Tilde (~) key. Requires Gecko 15.0 */
    VK_TILDE: 176,
    /** Comma (,) key. */
    VK_COMMA: 188,
    /** Period (.) key. */
    VK_PERIOD: 190,
    /** Slash (/) key. */
    VK_SLASH: 191,
    /** Back tick (`) key. */
    VK_BACK_QUOTE: 192,
    /** Open square bracket ([) key. */
    VK_OPEN_BRACKET: 219,
    /** Back slash (\) key. */
    VK_BACK_SLASH: 220,
    /** Close square bracket (]) key. */
    VK_CLOSE_BRACKET: 221,
    /** Quote (''') key. */
    VK_QUOTE: 222,
    /** Meta key on Linux, Command key on Mac. */
    VK_META: 224,
    /** AltGr key on Linux. Requires Gecko 15.0 */
    VK_ALTGR: 225,
    /** Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0 */
    VK_WIN: 91,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANA: 21,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANGUL: 21,
    /** 英数 key on Japanese Mac keyboard. Requires Gecko 15.0 */
    VK_EISU: 22,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_JUNJA: 23,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_FINAL: 24,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANJA: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANJI: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_CONVERT: 28,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_NONCONVERT: 29,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_ACCEPT: 30,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_MODECHANGE: 31,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_SELECT: 41,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_PRINT: 42,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_EXECUTE: 43,
    /** Linux support for this keycode was added in Gecko 4.0.	 */
    VK_SLEEP: 95
};


/***/ }),

/***/ "./node_modules/rot-js/lib/display/backend.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/display/backend.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Backend; });
/**
 * @class Abstract display backend module
 * @private
 */
class Backend {
    getContainer() { return null; }
    setOptions(options) { this._options = options; }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/display/canvas.js":
/*!***************************************************!*\
  !*** ./node_modules/rot-js/lib/display/canvas.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./node_modules/rot-js/lib/display/backend.js");

class Canvas extends _backend_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._ctx = document.createElement("canvas").getContext("2d");
    }
    schedule(cb) { requestAnimationFrame(cb); }
    getContainer() { return this._ctx.canvas; }
    setOptions(opts) {
        super.setOptions(opts);
        const style = (opts.fontStyle ? `${opts.fontStyle} ` : ``);
        const font = `${style} ${opts.fontSize}px ${opts.fontFamily}`;
        this._ctx.font = font;
        this._updateSize();
        this._ctx.font = font;
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "middle";
    }
    clear() {
        this._ctx.fillStyle = this._options.bg;
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }
    eventToPosition(x, y) {
        let canvas = this._ctx.canvas;
        let rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/display/display.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/display/display.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hex.js */ "./node_modules/rot-js/lib/display/hex.js");
/* harmony import */ var _rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect.js */ "./node_modules/rot-js/lib/display/rect.js");
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.js */ "./node_modules/rot-js/lib/display/tile.js");
/* harmony import */ var _tile_gl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile-gl.js */ "./node_modules/rot-js/lib/display/tile-gl.js");
/* harmony import */ var _term_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./term.js */ "./node_modules/rot-js/lib/display/term.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text.js */ "./node_modules/rot-js/lib/text.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");







const BACKENDS = {
    "hex": _hex_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "rect": _rect_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    "tile": _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    "tile-gl": _tile_gl_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    "term": _term_js__WEBPACK_IMPORTED_MODULE_4__["default"]
};
const DEFAULT_OPTIONS = {
    width: _constants_js__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_WIDTH"],
    height: _constants_js__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_HEIGHT"],
    transpose: false,
    layout: "rect",
    fontSize: 15,
    spacing: 1,
    border: 0,
    forceSquareRatio: false,
    fontFamily: "monospace",
    fontStyle: "",
    fg: "#ccc",
    bg: "#000",
    tileWidth: 32,
    tileHeight: 32,
    tileMap: {},
    tileSet: null,
    tileColorize: false
};
/**
 * @class Visual map display
 */
class Display {
    constructor(options = {}) {
        this._data = {};
        this._dirty = false; // false = nothing, true = all, object = dirty cells
        this._options = {};
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        this.setOptions(options);
        this.DEBUG = this.DEBUG.bind(this);
        this._tick = this._tick.bind(this);
        this._backend.schedule(this._tick);
    }
    /**
     * Debug helper, ideal as a map generator callback. Always bound to this.
     * @param {int} x
     * @param {int} y
     * @param {int} what
     */
    DEBUG(x, y, what) {
        let colors = [this._options.bg, this._options.fg];
        this.draw(x, y, null, null, colors[what % colors.length]);
    }
    /**
     * Clear the whole display (cover it with background color)
     */
    clear() {
        this._data = {};
        this._dirty = true;
    }
    /**
     * @see ROT.Display
     */
    setOptions(options) {
        Object.assign(this._options, options);
        if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing || options.layout) {
            if (options.layout) {
                let ctor = BACKENDS[options.layout];
                this._backend = new ctor();
            }
            this._backend.setOptions(this._options);
            this._dirty = true;
        }
        return this;
    }
    /**
     * Returns currently set options
     */
    getOptions() { return this._options; }
    /**
     * Returns the DOM node of this display
     */
    getContainer() { return this._backend.getContainer(); }
    /**
     * Compute the maximum width/height to fit into a set of given constraints
     * @param {int} availWidth Maximum allowed pixel width
     * @param {int} availHeight Maximum allowed pixel height
     * @returns {int[2]} cellWidth,cellHeight
     */
    computeSize(availWidth, availHeight) {
        return this._backend.computeSize(availWidth, availHeight);
    }
    /**
     * Compute the maximum font size to fit into a set of given constraints
     * @param {int} availWidth Maximum allowed pixel width
     * @param {int} availHeight Maximum allowed pixel height
     * @returns {int} fontSize
     */
    computeFontSize(availWidth, availHeight) {
        return this._backend.computeFontSize(availWidth, availHeight);
    }
    computeTileSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.width);
        let height = Math.floor(availHeight / this._options.height);
        return [width, height];
    }
    /**
     * Convert a DOM event (mouse or touch) to map coordinates. Uses first touch for multi-touch.
     * @param {Event} e event
     * @returns {int[2]} -1 for values outside of the canvas
     */
    eventToPosition(e) {
        let x, y;
        if ("touches" in e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        }
        else {
            x = e.clientX;
            y = e.clientY;
        }
        return this._backend.eventToPosition(x, y);
    }
    /**
     * @param {int} x
     * @param {int} y
     * @param {string || string[]} ch One or more chars (will be overlapping themselves)
     * @param {string} [fg] foreground color
     * @param {string} [bg] background color
     */
    draw(x, y, ch, fg, bg) {
        if (!fg) {
            fg = this._options.fg;
        }
        if (!bg) {
            bg = this._options.bg;
        }
        let key = `${x},${y}`;
        this._data[key] = [x, y, ch, fg, bg];
        if (this._dirty === true) {
            return;
        } // will already redraw everything 
        if (!this._dirty) {
            this._dirty = {};
        } // first!
        this._dirty[key] = true;
    }
    /**
     * Draws a text at given position. Optionally wraps at a maximum length. Currently does not work with hex layout.
     * @param {int} x
     * @param {int} y
     * @param {string} text May contain color/background format specifiers, %c{name}/%b{name}, both optional. %c{}/%b{} resets to default.
     * @param {int} [maxWidth] wrap at what width?
     * @returns {int} lines drawn
     */
    drawText(x, y, text, maxWidth) {
        let fg = null;
        let bg = null;
        let cx = x;
        let cy = y;
        let lines = 1;
        if (!maxWidth) {
            maxWidth = this._options.width - x;
        }
        let tokens = _text_js__WEBPACK_IMPORTED_MODULE_5__["tokenize"](text, maxWidth);
        while (tokens.length) { // interpret tokenized opcode stream
            let token = tokens.shift();
            switch (token.type) {
                case _text_js__WEBPACK_IMPORTED_MODULE_5__["TYPE_TEXT"]:
                    let isSpace = false, isPrevSpace = false, isFullWidth = false, isPrevFullWidth = false;
                    for (let i = 0; i < token.value.length; i++) {
                        let cc = token.value.charCodeAt(i);
                        let c = token.value.charAt(i);
                        // Assign to `true` when the current char is full-width.
                        isFullWidth = (cc > 0xff00 && cc < 0xff61) || (cc > 0xffdc && cc < 0xffe8) || cc > 0xffee;
                        // Current char is space, whatever full-width or half-width both are OK.
                        isSpace = (c.charCodeAt(0) == 0x20 || c.charCodeAt(0) == 0x3000);
                        // The previous char is full-width and
                        // current char is nether half-width nor a space.
                        if (isPrevFullWidth && !isFullWidth && !isSpace) {
                            cx++;
                        } // add an extra position
                        // The current char is full-width and
                        // the previous char is not a space.
                        if (isFullWidth && !isPrevSpace) {
                            cx++;
                        } // add an extra position
                        this.draw(cx++, cy, c, fg, bg);
                        isPrevSpace = isSpace;
                        isPrevFullWidth = isFullWidth;
                    }
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_5__["TYPE_FG"]:
                    fg = token.value || null;
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_5__["TYPE_BG"]:
                    bg = token.value || null;
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_5__["TYPE_NEWLINE"]:
                    cx = x;
                    cy++;
                    lines++;
                    break;
            }
        }
        return lines;
    }
    /**
     * Timer tick: update dirty parts
     */
    _tick() {
        this._backend.schedule(this._tick);
        if (!this._dirty) {
            return;
        }
        if (this._dirty === true) { // draw all
            this._backend.clear();
            for (let id in this._data) {
                this._draw(id, false);
            } // redraw cached data 
        }
        else { // draw only dirty 
            for (let key in this._dirty) {
                this._draw(key, true);
            }
        }
        this._dirty = false;
    }
    /**
     * @param {string} key What to draw
     * @param {bool} clearBefore Is it necessary to clean before?
     */
    _draw(key, clearBefore) {
        let data = this._data[key];
        if (data[4] != this._options.bg) {
            clearBefore = true;
        }
        this._backend.draw(data, clearBefore);
    }
}
Display.Rect = _rect_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Display.Hex = _hex_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Display.Tile = _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Display.TileGL = _tile_gl_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Display.Term = _term_js__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "./node_modules/rot-js/lib/display/hex.js":
/*!************************************************!*\
  !*** ./node_modules/rot-js/lib/display/hex.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hex; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./node_modules/rot-js/lib/display/canvas.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./node_modules/rot-js/lib/util.js");


/**
 * @class Hexagonal backend
 * @private
 */
class Hex extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._hexSize = 0;
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let px = [
            (x + 1) * this._spacingX,
            y * this._spacingY + this._hexSize
        ];
        if (this._options.transpose) {
            px.reverse();
        }
        if (clearBefore) {
            this._ctx.fillStyle = bg;
            this._fill(px[0], px[1]);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], px[0], Math.ceil(px[1]));
        }
    }
    computeSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let width = Math.floor(availWidth / this._spacingX) - 1;
        let height = Math.floor((availHeight - 2 * this._hexSize) / this._spacingY + 1);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let hexSizeWidth = 2 * availWidth / ((this._options.width + 1) * Math.sqrt(3)) - 1;
        let hexSizeHeight = availHeight / (2 + 1.5 * (this._options.height - 1));
        let hexSize = Math.min(hexSizeWidth, hexSizeHeight);
        // compute char ratio
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        hexSize = Math.floor(hexSize) + 1; // closest larger hexSize
        // FIXME char size computation does not respect transposed hexes
        let fontSize = 2 * hexSize / (this._options.spacing * (1 + ratio / Math.sqrt(3)));
        // closest smaller fontSize
        return Math.ceil(fontSize) - 1;
    }
    _normalizedEventToPosition(x, y) {
        let nodeSize;
        if (this._options.transpose) {
            x += y;
            y = x - y;
            x -= y;
            nodeSize = this._ctx.canvas.width;
        }
        else {
            nodeSize = this._ctx.canvas.height;
        }
        let size = nodeSize / this._options.height;
        y = Math.floor(y / size);
        if (Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["mod"])(y, 2)) { /* odd row */
            x -= this._spacingX;
            x = 1 + 2 * Math.floor(x / (2 * this._spacingX));
        }
        else {
            x = 2 * Math.floor(x / (2 * this._spacingX));
        }
        return [x, y];
    }
    /**
     * Arguments are pixel values. If "transposed" mode is enabled, then these two are already swapped.
     */
    _fill(cx, cy) {
        let a = this._hexSize;
        let b = this._options.border;
        const ctx = this._ctx;
        ctx.beginPath();
        if (this._options.transpose) {
            ctx.moveTo(cx - a + b, cy);
            ctx.lineTo(cx - a / 2 + b, cy + this._spacingX - b);
            ctx.lineTo(cx + a / 2 - b, cy + this._spacingX - b);
            ctx.lineTo(cx + a - b, cy);
            ctx.lineTo(cx + a / 2 - b, cy - this._spacingX + b);
            ctx.lineTo(cx - a / 2 + b, cy - this._spacingX + b);
            ctx.lineTo(cx - a + b, cy);
        }
        else {
            ctx.moveTo(cx, cy - a + b);
            ctx.lineTo(cx + this._spacingX - b, cy - a / 2 + b);
            ctx.lineTo(cx + this._spacingX - b, cy + a / 2 - b);
            ctx.lineTo(cx, cy + a - b);
            ctx.lineTo(cx - this._spacingX + b, cy + a / 2 - b);
            ctx.lineTo(cx - this._spacingX + b, cy - a / 2 + b);
            ctx.lineTo(cx, cy - a + b);
        }
        ctx.fill();
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._hexSize = Math.floor(opts.spacing * (opts.fontSize + charWidth / Math.sqrt(3)) / 2);
        this._spacingX = this._hexSize * Math.sqrt(3) / 2;
        this._spacingY = this._hexSize * 1.5;
        let xprop;
        let yprop;
        if (opts.transpose) {
            xprop = "height";
            yprop = "width";
        }
        else {
            xprop = "width";
            yprop = "height";
        }
        this._ctx.canvas[xprop] = Math.ceil((opts.width + 1) * this._spacingX);
        this._ctx.canvas[yprop] = Math.ceil((opts.height - 1) * this._spacingY + 2 * this._hexSize);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/display/rect.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/display/rect.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./node_modules/rot-js/lib/display/canvas.js");

/**
 * @class Rectangular backend
 * @private
 */
class Rect extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._canvasCache = {};
    }
    setOptions(options) {
        super.setOptions(options);
        this._canvasCache = {};
    }
    draw(data, clearBefore) {
        if (Rect.cache) {
            this._drawWithCache(data);
        }
        else {
            this._drawNoCache(data, clearBefore);
        }
    }
    _drawWithCache(data) {
        let [x, y, ch, fg, bg] = data;
        let hash = "" + ch + fg + bg;
        let canvas;
        if (hash in this._canvasCache) {
            canvas = this._canvasCache[hash];
        }
        else {
            let b = this._options.border;
            canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = this._spacingX;
            canvas.height = this._spacingY;
            ctx.fillStyle = bg;
            ctx.fillRect(b, b, canvas.width - b, canvas.height - b);
            if (ch) {
                ctx.fillStyle = fg;
                ctx.font = this._ctx.font;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                let chars = [].concat(ch);
                for (let i = 0; i < chars.length; i++) {
                    ctx.fillText(chars[i], this._spacingX / 2, Math.ceil(this._spacingY / 2));
                }
            }
            this._canvasCache[hash] = canvas;
        }
        this._ctx.drawImage(canvas, x * this._spacingX, y * this._spacingY);
    }
    _drawNoCache(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        if (clearBefore) {
            let b = this._options.border;
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(x * this._spacingX + b, y * this._spacingY + b, this._spacingX - b, this._spacingY - b);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], (x + 0.5) * this._spacingX, Math.ceil((y + 0.5) * this._spacingY));
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._spacingX);
        let height = Math.floor(availHeight / this._spacingY);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        let boxWidth = Math.floor(availWidth / this._options.width);
        let boxHeight = Math.floor(availHeight / this._options.height);
        /* compute char ratio */
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        let widthFraction = ratio * boxHeight / boxWidth;
        if (widthFraction > 1) { /* too wide with current aspect ratio */
            boxHeight = Math.floor(boxHeight / widthFraction);
        }
        return Math.floor(boxHeight / this._options.spacing);
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._spacingX), Math.floor(y / this._spacingY)];
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._spacingX = Math.ceil(opts.spacing * charWidth);
        this._spacingY = Math.ceil(opts.spacing * opts.fontSize);
        if (opts.forceSquareRatio) {
            this._spacingX = this._spacingY = Math.max(this._spacingX, this._spacingY);
        }
        this._ctx.canvas.width = opts.width * this._spacingX;
        this._ctx.canvas.height = opts.height * this._spacingY;
    }
}
Rect.cache = false;


/***/ }),

/***/ "./node_modules/rot-js/lib/display/term.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/display/term.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Term; });
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./node_modules/rot-js/lib/display/backend.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color.js */ "./node_modules/rot-js/lib/color.js");


function clearToAnsi(bg) {
    return `\x1b[0;48;5;${termcolor(bg)}m\x1b[2J`;
}
function colorToAnsi(fg, bg) {
    return `\x1b[0;38;5;${termcolor(fg)};48;5;${termcolor(bg)}m`;
}
function positionToAnsi(x, y) {
    return `\x1b[${y + 1};${x + 1}H`;
}
function termcolor(color) {
    const SRC_COLORS = 256.0;
    const DST_COLORS = 6.0;
    const COLOR_RATIO = DST_COLORS / SRC_COLORS;
    let rgb = _color_js__WEBPACK_IMPORTED_MODULE_1__["fromString"](color);
    let r = Math.floor(rgb[0] * COLOR_RATIO);
    let g = Math.floor(rgb[1] * COLOR_RATIO);
    let b = Math.floor(rgb[2] * COLOR_RATIO);
    return r * 36 + g * 6 + b * 1 + 16;
}
class Term extends _backend_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._offset = [0, 0];
        this._cursor = [-1, -1];
        this._lastColor = "";
    }
    schedule(cb) { setTimeout(cb, 1000 / 60); }
    setOptions(options) {
        super.setOptions(options);
        let size = [options.width, options.height];
        let avail = this.computeSize();
        this._offset = avail.map((val, index) => Math.floor((val - size[index]) / 2));
    }
    clear() {
        process.stdout.write(clearToAnsi(this._options.bg));
    }
    draw(data, clearBefore) {
        // determine where to draw what with what colors
        let [x, y, ch, fg, bg] = data;
        // determine if we need to move the terminal cursor
        let dx = this._offset[0] + x;
        let dy = this._offset[1] + y;
        let size = this.computeSize();
        if (dx < 0 || dx >= size[0]) {
            return;
        }
        if (dy < 0 || dy >= size[1]) {
            return;
        }
        if (dx !== this._cursor[0] || dy !== this._cursor[1]) {
            process.stdout.write(positionToAnsi(dx, dy));
            this._cursor[0] = dx;
            this._cursor[1] = dy;
        }
        // terminals automatically clear, but if we're clearing when we're
        // not otherwise provided with a character, just use a space instead
        if (clearBefore) {
            if (!ch) {
                ch = " ";
            }
        }
        // if we're not clearing and not provided with a character, do nothing
        if (!ch) {
            return;
        }
        // determine if we need to change colors
        let newColor = colorToAnsi(fg, bg);
        if (newColor !== this._lastColor) {
            process.stdout.write(newColor);
            this._lastColor = newColor;
        }
        // write the provided symbol to the display
        let chars = [].concat(ch);
        process.stdout.write(chars[0]);
        // update our position, given that we wrote a character
        this._cursor[0]++;
        if (this._cursor[0] >= size[0]) {
            this._cursor[0] = 0;
            this._cursor[1]++;
        }
    }
    computeFontSize() { throw new Error("Terminal backend has no notion of font size"); }
    eventToPosition(x, y) { return [x, y]; }
    computeSize() { return [process.stdout.columns, process.stdout.rows]; }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/rot-js/lib/display/tile-gl.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/display/tile-gl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileGL; });
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./node_modules/rot-js/lib/display/backend.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color.js */ "./node_modules/rot-js/lib/color.js");


/**
 * @class Tile backend
 * @private
 */
class TileGL extends _backend_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static isSupported() {
        return !!document.createElement("canvas").getContext("webgl2", { preserveDrawingBuffer: true });
    }
    constructor() {
        super();
        this._uniforms = {};
        try {
            this._gl = this._initWebGL();
        }
        catch (e) {
            alert(e.message);
        }
    }
    schedule(cb) { requestAnimationFrame(cb); }
    getContainer() { return this._gl.canvas; }
    setOptions(opts) {
        super.setOptions(opts);
        this._updateSize();
        let tileSet = this._options.tileSet;
        if (tileSet && "complete" in tileSet && !tileSet.complete) {
            tileSet.addEventListener("load", () => this._updateTexture(tileSet));
        }
        else {
            this._updateTexture(tileSet);
        }
    }
    draw(data, clearBefore) {
        const gl = this._gl;
        const opts = this._options;
        let [x, y, ch, fg, bg] = data;
        let scissorY = gl.canvas.height - (y + 1) * opts.tileHeight;
        gl.scissor(x * opts.tileWidth, scissorY, opts.tileWidth, opts.tileHeight);
        if (clearBefore) {
            if (opts.tileColorize) {
                gl.clearColor(0, 0, 0, 0);
            }
            else {
                gl.clearColor(...parseColor(bg));
            }
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        if (!ch) {
            return;
        }
        let chars = [].concat(ch);
        let bgs = [].concat(bg);
        let fgs = [].concat(fg);
        gl.uniform2fv(this._uniforms["targetPosRel"], [x, y]);
        for (let i = 0; i < chars.length; i++) {
            let tile = this._options.tileMap[chars[i]];
            if (!tile) {
                throw new Error(`Char "${chars[i]}" not found in tileMap`);
            }
            gl.uniform1f(this._uniforms["colorize"], opts.tileColorize ? 1 : 0);
            gl.uniform2fv(this._uniforms["tilesetPosAbs"], tile);
            if (opts.tileColorize) {
                gl.uniform4fv(this._uniforms["tint"], parseColor(fgs[i]));
                gl.uniform4fv(this._uniforms["bg"], parseColor(bgs[i]));
            }
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        /*
        
        
                for (let i=0;i<chars.length;i++) {
                    
                    if (this._options.tileColorize) { // apply colorization
                        let canvas = this._colorCanvas;
                        let context = canvas.getContext("2d") as CanvasRenderingContext2D;
                        context.globalCompositeOperation = "source-over";
                        context.clearRect(0, 0, tileWidth, tileHeight);
        
                        let fg = fgs[i];
                        let bg = bgs[i];
        
                        context.drawImage(
                            this._options.tileSet!,
                            tile[0], tile[1], tileWidth, tileHeight,
                            0, 0, tileWidth, tileHeight
                        );
        
                        if (fg != "transparent") {
                            context.fillStyle = fg;
                            context.globalCompositeOperation = "source-atop";
                            context.fillRect(0, 0, tileWidth, tileHeight);
                        }
        
                        if (bg != "transparent") {
                            context.fillStyle = bg;
                            context.globalCompositeOperation = "destination-over";
                            context.fillRect(0, 0, tileWidth, tileHeight);
                        }
        
                        this._ctx.drawImage(canvas, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
                    } else { // no colorizing, easy
                        this._ctx.drawImage(
                            this._options.tileSet!,
                            tile[0], tile[1], tileWidth, tileHeight,
                            x*tileWidth, y*tileHeight, tileWidth, tileHeight
                        );
                    }
                }
        
        */
    }
    clear() {
        const gl = this._gl;
        gl.clearColor(...parseColor(this._options.bg));
        gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.tileWidth);
        let height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
    }
    computeFontSize() {
        throw new Error("Tile backend does not understand font size");
    }
    eventToPosition(x, y) {
        let canvas = this._gl.canvas;
        let rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
    }
    _initWebGL() {
        let gl = document.createElement("canvas").getContext("webgl2", { preserveDrawingBuffer: true });
        window.gl = gl;
        let program = createProgram(gl, VS, FS);
        gl.useProgram(program);
        createQuad(gl);
        UNIFORMS.forEach(name => this._uniforms[name] = gl.getUniformLocation(program, name));
        this._program = program;
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.SCISSOR_TEST);
        return gl;
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
    _updateSize() {
        const gl = this._gl;
        const opts = this._options;
        const canvasSize = [opts.width * opts.tileWidth, opts.height * opts.tileHeight];
        gl.canvas.width = canvasSize[0];
        gl.canvas.height = canvasSize[1];
        gl.viewport(0, 0, canvasSize[0], canvasSize[1]);
        gl.uniform2fv(this._uniforms["tileSize"], [opts.tileWidth, opts.tileHeight]);
        gl.uniform2fv(this._uniforms["targetSize"], canvasSize);
    }
    _updateTexture(tileSet) {
        createTexture(this._gl, tileSet);
    }
}
const UNIFORMS = ["targetPosRel", "tilesetPosAbs", "tileSize", "targetSize", "colorize", "bg", "tint"];
const VS = `
#version 300 es

in vec2 tilePosRel;
out vec2 tilesetPosPx;

uniform vec2 tilesetPosAbs;
uniform vec2 tileSize;
uniform vec2 targetSize;
uniform vec2 targetPosRel;

void main() {
	vec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;
	vec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;
	targetPosNdc.y *= -1.0;

	gl_Position = vec4(targetPosNdc, 0.0, 1.0);
	tilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;
}`.trim();
const FS = `
#version 300 es
precision highp float;

in vec2 tilesetPosPx;
out vec4 fragColor;
uniform sampler2D image;
uniform bool colorize;
uniform vec4 bg;
uniform vec4 tint;

void main() {
	fragColor = vec4(0, 0, 0, 1);

	vec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

	if (colorize) {
		texel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
		fragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
		fragColor.a = texel.a + (1.0-texel.a)*bg.a;
	} else {
		fragColor = texel;
	}
}`.trim();
function createProgram(gl, vss, fss) {
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vss);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(vs) || "");
    }
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fss);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(fs) || "");
    }
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(p) || "");
    }
    return p;
}
function createQuad(gl) {
    const pos = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}
function createTexture(gl, data) {
    let t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return t;
}
let colorCache = {};
function parseColor(color) {
    if (!(color in colorCache)) {
        let parsed;
        if (color == "transparent") {
            parsed = [0, 0, 0, 0];
        }
        else if (color.indexOf("rgba") > -1) {
            parsed = (color.match(/[\d.]+/g) || []).map(Number);
            for (let i = 0; i < 3; i++) {
                parsed[i] = parsed[i] / 255;
            }
        }
        else {
            parsed = _color_js__WEBPACK_IMPORTED_MODULE_1__["fromString"](color).map($ => $ / 255);
            parsed.push(1);
        }
        colorCache[color] = parsed;
    }
    return colorCache[color];
}


/***/ }),

/***/ "./node_modules/rot-js/lib/display/tile.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/display/tile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./node_modules/rot-js/lib/display/canvas.js");

/**
 * @class Tile backend
 * @private
 */
class Tile extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._colorCanvas = document.createElement("canvas");
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let tileWidth = this._options.tileWidth;
        let tileHeight = this._options.tileHeight;
        if (clearBefore) {
            if (this._options.tileColorize) {
                this._ctx.clearRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else {
                this._ctx.fillStyle = bg;
                this._ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
        if (!ch) {
            return;
        }
        let chars = [].concat(ch);
        let fgs = [].concat(fg);
        let bgs = [].concat(bg);
        for (let i = 0; i < chars.length; i++) {
            let tile = this._options.tileMap[chars[i]];
            if (!tile) {
                throw new Error(`Char "${chars[i]}" not found in tileMap`);
            }
            if (this._options.tileColorize) { // apply colorization
                let canvas = this._colorCanvas;
                let context = canvas.getContext("2d");
                context.globalCompositeOperation = "source-over";
                context.clearRect(0, 0, tileWidth, tileHeight);
                let fg = fgs[i];
                let bg = bgs[i];
                context.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
                if (fg != "transparent") {
                    context.fillStyle = fg;
                    context.globalCompositeOperation = "source-atop";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                if (bg != "transparent") {
                    context.fillStyle = bg;
                    context.globalCompositeOperation = "destination-over";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                this._ctx.drawImage(canvas, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else { // no colorizing, easy
                this._ctx.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.tileWidth);
        let height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
    }
    computeFontSize() {
        throw new Error("Tile backend does not understand font size");
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
    _updateSize() {
        const opts = this._options;
        this._ctx.canvas.width = opts.width * opts.tileWidth;
        this._ctx.canvas.height = opts.height * opts.tileHeight;
        this._colorCanvas.width = opts.tileWidth;
        this._colorCanvas.height = opts.tileHeight;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/engine.js":
/*!*******************************************!*\
  !*** ./node_modules/rot-js/lib/engine.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
/**
 * @class Asynchronous main loop
 * @param {ROT.Scheduler} scheduler
 */
class Engine {
    constructor(scheduler) {
        this._scheduler = scheduler;
        this._lock = 1;
    }
    /**
     * Start the main loop. When this call returns, the loop is locked.
     */
    start() { return this.unlock(); }
    /**
     * Interrupt the engine by an asynchronous action
     */
    lock() {
        this._lock++;
        return this;
    }
    /**
     * Resume execution (paused by a previous lock)
     */
    unlock() {
        if (!this._lock) {
            throw new Error("Cannot unlock unlocked engine");
        }
        this._lock--;
        while (!this._lock) {
            let actor = this._scheduler.next();
            if (!actor) {
                return this.lock();
            } /* no actors */
            let result = actor.act();
            if (result && result.then) { /* actor returned a "thenable", looks like a Promise */
                this.lock();
                result.then(this.unlock.bind(this));
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/eventqueue.js":
/*!***********************************************!*\
  !*** ./node_modules/rot-js/lib/eventqueue.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventQueue; });
class EventQueue {
    /**
     * @class Generic event queue: stores events and retrieves them based on their time
     */
    constructor() {
        this._time = 0;
        this._events = [];
        this._eventTimes = [];
    }
    /**
     * @returns {number} Elapsed time
     */
    getTime() { return this._time; }
    /**
     * Clear all scheduled events
     */
    clear() {
        this._events = [];
        this._eventTimes = [];
        return this;
    }
    /**
     * @param {?} event
     * @param {number} time
     */
    add(event, time) {
        let index = this._events.length;
        for (let i = 0; i < this._eventTimes.length; i++) {
            if (this._eventTimes[i] > time) {
                index = i;
                break;
            }
        }
        this._events.splice(index, 0, event);
        this._eventTimes.splice(index, 0, time);
    }
    /**
     * Locates the nearest event, advances time if necessary. Returns that event and removes it from the queue.
     * @returns {? || null} The event previously added by addEvent, null if no event available
     */
    get() {
        if (!this._events.length) {
            return null;
        }
        let time = this._eventTimes.splice(0, 1)[0];
        if (time > 0) { /* advance */
            this._time += time;
            for (let i = 0; i < this._eventTimes.length; i++) {
                this._eventTimes[i] -= time;
            }
        }
        return this._events.splice(0, 1)[0];
    }
    /**
     * Get the time associated with the given event
     * @param {?} event
     * @returns {number} time
     */
    getEventTime(event) {
        let index = this._events.indexOf(event);
        if (index == -1) {
            return undefined;
        }
        return this._eventTimes[index];
    }
    /**
     * Remove an event from the queue
     * @param {?} event
     * @returns {bool} success?
     */
    remove(event) {
        let index = this._events.indexOf(event);
        if (index == -1) {
            return false;
        }
        this._remove(index);
        return true;
    }
    ;
    /**
     * Remove an event from the queue
     * @param {int} index
     */
    _remove(index) {
        this._events.splice(index, 1);
        this._eventTimes.splice(index, 1);
    }
    ;
}


/***/ }),

/***/ "./node_modules/rot-js/lib/fov/discrete-shadowcasting.js":
/*!***************************************************************!*\
  !*** ./node_modules/rot-js/lib/fov/discrete-shadowcasting.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscreteShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./node_modules/rot-js/lib/fov/fov.js");

/**
 * @class Discrete shadowcasting algorithm. Obsoleted by Precise shadowcasting.
 * @augments ROT.FOV
 */
class DiscreteShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compute(x, y, R, callback) {
        /* this place is always visible */
        callback(x, y, 0, 1);
        /* standing in a dark place. FIXME is this a good idea?  */
        if (!this._lightPasses(x, y)) {
            return;
        }
        /* start and end angles */
        let DATA = [];
        let A, B, cx, cy, blocks;
        /* analyze surrounding cells in concentric rings, starting from the center */
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let angle = 360 / neighbors.length;
            for (let i = 0; i < neighbors.length; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                A = angle * (i - 0.5);
                B = A + angle;
                blocks = !this._lightPasses(cx, cy);
                if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) {
                    callback(cx, cy, r, 1);
                }
                if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) {
                    return;
                } /* cutoff? */
            } /* for all cells in this ring */
        } /* for all rings */
    }
    /**
     * @param {int} A start angle
     * @param {int} B end angle
     * @param {bool} blocks Does current cell block visibility?
     * @param {int[][]} DATA shadowed angle pairs
     */
    _visibleCoords(A, B, blocks, DATA) {
        if (A < 0) {
            let v1 = this._visibleCoords(0, B, blocks, DATA);
            let v2 = this._visibleCoords(360 + A, 360, blocks, DATA);
            return v1 || v2;
        }
        let index = 0;
        while (index < DATA.length && DATA[index] < A) {
            index++;
        }
        if (index == DATA.length) { /* completely new shadow */
            if (blocks) {
                DATA.push(A, B);
            }
            return true;
        }
        let count = 0;
        if (index % 2) { /* this shadow starts in an existing shadow, or within its ending boundary */
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            if (count == 0) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, B);
                }
                else {
                    DATA.splice(index - count, count);
                }
            }
            return true;
        }
        else { /* this shadow starts outside an existing shadow, or within a starting boundary */
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            /* visible when outside an existing shadow, or when overlapping */
            if (A == DATA[index - count] && count == 1) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, A);
                }
                else {
                    DATA.splice(index - count, count, A, B);
                }
            }
            return true;
        }
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/fov/fov.js":
/*!********************************************!*\
  !*** ./node_modules/rot-js/lib/fov/fov.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FOV; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");

;
;
class FOV {
    /**
     * @class Abstract FOV algorithm
     * @param {function} lightPassesCallback Does the light pass through x,y?
     * @param {object} [options]
     * @param {int} [options.topology=8] 4/6/8
     */
    constructor(lightPassesCallback, options = {}) {
        this._lightPasses = lightPassesCallback;
        this._options = Object.assign({ topology: 8 }, options);
    }
    /**
     * Return all neighbors in a concentric ring
     * @param {int} cx center-x
     * @param {int} cy center-y
     * @param {int} r range
     */
    _getCircle(cx, cy, r) {
        let result = [];
        let dirs, countFactor, startOffset;
        switch (this._options.topology) {
            case 4:
                countFactor = 1;
                startOffset = [0, 1];
                dirs = [
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][7],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][1],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][3],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][5]
                ];
                break;
            case 6:
                dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][6];
                countFactor = 1;
                startOffset = [-1, 1];
                break;
            case 8:
                dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][4];
                countFactor = 2;
                startOffset = [-1, 1];
                break;
            default:
                throw new Error("Incorrect topology for FOV computation");
                break;
        }
        /* starting neighbor */
        let x = cx + startOffset[0] * r;
        let y = cy + startOffset[1] * r;
        /* circle */
        for (let i = 0; i < dirs.length; i++) {
            for (let j = 0; j < r * countFactor; j++) {
                result.push([x, y]);
                x += dirs[i][0];
                y += dirs[i][1];
            }
        }
        return result;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/fov/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/fov/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discrete_shadowcasting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discrete-shadowcasting.js */ "./node_modules/rot-js/lib/fov/discrete-shadowcasting.js");
/* harmony import */ var _precise_shadowcasting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precise-shadowcasting.js */ "./node_modules/rot-js/lib/fov/precise-shadowcasting.js");
/* harmony import */ var _recursive_shadowcasting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recursive-shadowcasting.js */ "./node_modules/rot-js/lib/fov/recursive-shadowcasting.js");



/* harmony default export */ __webpack_exports__["default"] = ({ DiscreteShadowcasting: _discrete_shadowcasting_js__WEBPACK_IMPORTED_MODULE_0__["default"], PreciseShadowcasting: _precise_shadowcasting_js__WEBPACK_IMPORTED_MODULE_1__["default"], RecursiveShadowcasting: _recursive_shadowcasting_js__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "./node_modules/rot-js/lib/fov/precise-shadowcasting.js":
/*!**************************************************************!*\
  !*** ./node_modules/rot-js/lib/fov/precise-shadowcasting.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreciseShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./node_modules/rot-js/lib/fov/fov.js");

/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */
class PreciseShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compute(x, y, R, callback) {
        /* this place is always visible */
        callback(x, y, 0, 1);
        /* standing in a dark place. FIXME is this a good idea?  */
        if (!this._lightPasses(x, y)) {
            return;
        }
        /* list of all shadows */
        let SHADOWS = [];
        let cx, cy, blocks, A1, A2, visibility;
        /* analyze surrounding cells in concentric rings, starting from the center */
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let neighborCount = neighbors.length;
            for (let i = 0; i < neighborCount; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                /* shift half-an-angle backwards to maintain consistency of 0-th cells */
                A1 = [i ? 2 * i - 1 : 2 * neighborCount - 1, 2 * neighborCount];
                A2 = [2 * i + 1, 2 * neighborCount];
                blocks = !this._lightPasses(cx, cy);
                visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);
                if (visibility) {
                    callback(cx, cy, r, visibility);
                }
                if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
                    return;
                } /* cutoff? */
            } /* for all cells in this ring */
        } /* for all rings */
    }
    /**
     * @param {int[2]} A1 arc start
     * @param {int[2]} A2 arc end
     * @param {bool} blocks Does current arc block visibility?
     * @param {int[][]} SHADOWS list of active shadows
     */
    _checkVisibility(A1, A2, blocks, SHADOWS) {
        if (A1[0] > A2[0]) { /* split into two sub-arcs */
            let v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);
            let v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);
            return (v1 + v2) / 2;
        }
        /* index1: first shadow >= A1 */
        let index1 = 0, edge1 = false;
        while (index1 < SHADOWS.length) {
            let old = SHADOWS[index1];
            let diff = old[0] * A1[1] - A1[0] * old[1];
            if (diff >= 0) { /* old >= A1 */
                if (diff == 0 && !(index1 % 2)) {
                    edge1 = true;
                }
                break;
            }
            index1++;
        }
        /* index2: last shadow <= A2 */
        let index2 = SHADOWS.length, edge2 = false;
        while (index2--) {
            let old = SHADOWS[index2];
            let diff = A2[0] * old[1] - old[0] * A2[1];
            if (diff >= 0) { /* old <= A2 */
                if (diff == 0 && (index2 % 2)) {
                    edge2 = true;
                }
                break;
            }
        }
        let visible = true;
        if (index1 == index2 && (edge1 || edge2)) { /* subset of existing shadow, one of the edges match */
            visible = false;
        }
        else if (edge1 && edge2 && index1 + 1 == index2 && (index2 % 2)) { /* completely equivalent with existing shadow */
            visible = false;
        }
        else if (index1 > index2 && (index1 % 2)) { /* subset of existing shadow, not touching */
            visible = false;
        }
        if (!visible) {
            return 0;
        } /* fast case: not visible */
        let visibleLength;
        /* compute the length of visible arc, adjust list of shadows (if blocking) */
        let remove = index2 - index1 + 1;
        if (remove % 2) {
            if (index1 % 2) { /* first edge within existing shadow, second outside */
                let P = SHADOWS[index1];
                visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A2);
                }
            }
            else { /* second edge within existing shadow, first outside */
                let P = SHADOWS[index2];
                visibleLength = (P[0] * A1[1] - A1[0] * P[1]) / (A1[1] * P[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1);
                }
            }
        }
        else {
            if (index1 % 2) { /* both edges within existing shadows */
                let P1 = SHADOWS[index1];
                let P2 = SHADOWS[index2];
                visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove);
                }
            }
            else { /* both edges outside existing shadows */
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1, A2);
                }
                return 1; /* whole arc visible! */
            }
        }
        let arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);
        return visibleLength / arcLength;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/fov/recursive-shadowcasting.js":
/*!****************************************************************!*\
  !*** ./node_modules/rot-js/lib/fov/recursive-shadowcasting.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecursiveShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./node_modules/rot-js/lib/fov/fov.js");

/** Octants used for translating recursive shadowcasting offsets */
const OCTANTS = [
    [-1, 0, 0, 1],
    [0, -1, 1, 0],
    [0, -1, -1, 0],
    [-1, 0, 0, -1],
    [1, 0, 0, -1],
    [0, 1, -1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
];
/**
 * @class Recursive shadowcasting algorithm
 * Currently only supports 4/8 topologies, not hexagonal.
 * Based on Peter Harkins' implementation of Björn Bergström's algorithm described here: http://www.roguebasin.com/index.php?title=FOV_using_recursive_shadowcasting
 * @augments ROT.FOV
 */
class RecursiveShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Compute visibility for a 360-degree circle
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */
    compute(x, y, R, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        for (let i = 0; i < OCTANTS.length; i++) {
            this._renderOctant(x, y, OCTANTS[i], R, callback);
        }
    }
    /**
     * Compute visibility for a 180-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */
    compute180(x, y, R, dir, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 180 degrees
        let nextPreviousOctant = (dir - 2 + 8) % 8; //Need to retrieve the previous two octants to render a full 180 degrees
        let nextOctant = (dir + 1 + 8) % 8; //Need to grab to next octant to render a full 180 degrees
        this._renderOctant(x, y, OCTANTS[nextPreviousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[nextOctant], R, callback);
    }
    ;
    /**
     * Compute visibility for a 90-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */
    compute90(x, y, R, dir, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 90 degrees
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
    }
    /**
     * Render one octant (45-degree arc) of the viewshed
     * @param {int} x
     * @param {int} y
     * @param {int} octant Octant to be rendered
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */
    _renderOctant(x, y, octant, R, callback) {
        //Radius incremented by 1 to provide same coverage area as other shadowcasting radiuses
        this._castVisibility(x, y, 1, 1.0, 0.0, R + 1, octant[0], octant[1], octant[2], octant[3], callback);
    }
    /**
     * Actually calculates the visibility
     * @param {int} startX The starting X coordinate
     * @param {int} startY The starting Y coordinate
     * @param {int} row The row to render
     * @param {float} visSlopeStart The slope to start at
     * @param {float} visSlopeEnd The slope to end at
     * @param {int} radius The radius to reach out to
     * @param {int} xx
     * @param {int} xy
     * @param {int} yx
     * @param {int} yy
     * @param {function} callback The callback to use when we hit a block that is visible
     */
    _castVisibility(startX, startY, row, visSlopeStart, visSlopeEnd, radius, xx, xy, yx, yy, callback) {
        if (visSlopeStart < visSlopeEnd) {
            return;
        }
        for (let i = row; i <= radius; i++) {
            let dx = -i - 1;
            let dy = -i;
            let blocked = false;
            let newStart = 0;
            //'Row' could be column, names here assume octant 0 and would be flipped for half the octants
            while (dx <= 0) {
                dx += 1;
                //Translate from relative coordinates to map coordinates
                let mapX = startX + dx * xx + dy * xy;
                let mapY = startY + dx * yx + dy * yy;
                //Range of the row
                let slopeStart = (dx - 0.5) / (dy + 0.5);
                let slopeEnd = (dx + 0.5) / (dy - 0.5);
                //Ignore if not yet at left edge of Octant
                if (slopeEnd > visSlopeStart) {
                    continue;
                }
                //Done if past right edge
                if (slopeStart < visSlopeEnd) {
                    break;
                }
                //If it's in range, it's visible
                if ((dx * dx + dy * dy) < (radius * radius)) {
                    callback(mapX, mapY, i, 1);
                }
                if (!blocked) {
                    //If tile is a blocking tile, cast around it
                    if (!this._lightPasses(mapX, mapY) && i < radius) {
                        blocked = true;
                        this._castVisibility(startX, startY, i + 1, visSlopeStart, slopeStart, radius, xx, xy, yx, yy, callback);
                        newStart = slopeEnd;
                    }
                }
                else {
                    //Keep narrowing if scanning across a block
                    if (!this._lightPasses(mapX, mapY)) {
                        newStart = slopeEnd;
                        continue;
                    }
                    //Block has ended
                    blocked = false;
                    visSlopeStart = newStart;
                }
            }
            if (blocked) {
                break;
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/rot-js/lib/index.js ***!
  \******************************************/
/*! exports provided: RNG, Display, StringGenerator, EventQueue, Scheduler, FOV, Map, Noise, Path, Engine, Lighting, DEFAULT_WIDTH, DEFAULT_HEIGHT, DIRS, KEYS, Util, Color, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/rot-js/lib/rng.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNG", function() { return _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display.js */ "./node_modules/rot-js/lib/display/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return _display_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _stringgenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringgenerator.js */ "./node_modules/rot-js/lib/stringgenerator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringGenerator", function() { return _stringgenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventqueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventqueue.js */ "./node_modules/rot-js/lib/eventqueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return _eventqueue_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scheduler_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler/index.js */ "./node_modules/rot-js/lib/scheduler/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _scheduler_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _fov_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fov/index.js */ "./node_modules/rot-js/lib/fov/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOV", function() { return _fov_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _map_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/index.js */ "./node_modules/rot-js/lib/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _noise_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noise/index.js */ "./node_modules/rot-js/lib/noise/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Noise", function() { return _noise_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _path_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./path/index.js */ "./node_modules/rot-js/lib/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _path_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine.js */ "./node_modules/rot-js/lib/engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _engine_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lighting.js */ "./node_modules/rot-js/lib/lighting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lighting", function() { return _lighting_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants.js */ "./node_modules/rot-js/lib/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIRS", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DIRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["KEYS"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util.js */ "./node_modules/rot-js/lib/util.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color.js */ "./node_modules/rot-js/lib/color.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./text.js */ "./node_modules/rot-js/lib/text.js");













const Util = _util_js__WEBPACK_IMPORTED_MODULE_12__;

const Color = _color_js__WEBPACK_IMPORTED_MODULE_13__;

const Text = _text_js__WEBPACK_IMPORTED_MODULE_14__;


/***/ }),

/***/ "./node_modules/rot-js/lib/lighting.js":
/*!*********************************************!*\
  !*** ./node_modules/rot-js/lib/lighting.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lighting; });
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/rot-js/lib/color.js");

;
;
;
;
/**
 * Lighting computation, based on a traditional FOV for multiple light sources and multiple passes.
 */
class Lighting {
    constructor(reflectivityCallback, options = {}) {
        this._reflectivityCallback = reflectivityCallback;
        this._options = {};
        options = Object.assign({
            passes: 1,
            emissionThreshold: 100,
            range: 10
        }, options);
        this._lights = {};
        this._reflectivityCache = {};
        this._fovCache = {};
        this.setOptions(options);
    }
    /**
     * Adjust options at runtime
     */
    setOptions(options) {
        Object.assign(this._options, options);
        if (options && options.range) {
            this.reset();
        }
        return this;
    }
    /**
     * Set the used Field-Of-View algo
     */
    setFOV(fov) {
        this._fov = fov;
        this._fovCache = {};
        return this;
    }
    /**
     * Set (or remove) a light source
     */
    setLight(x, y, color) {
        let key = x + "," + y;
        if (color) {
            this._lights[key] = (typeof (color) == "string" ? _color_js__WEBPACK_IMPORTED_MODULE_0__["fromString"](color) : color);
        }
        else {
            delete this._lights[key];
        }
        return this;
    }
    /**
     * Remove all light sources
     */
    clearLights() { this._lights = {}; }
    /**
     * Reset the pre-computed topology values. Call whenever the underlying map changes its light-passability.
     */
    reset() {
        this._reflectivityCache = {};
        this._fovCache = {};
        return this;
    }
    /**
     * Compute the lighting
     */
    compute(lightingCallback) {
        let doneCells = {};
        let emittingCells = {};
        let litCells = {};
        for (let key in this._lights) { /* prepare emitters for first pass */
            let light = this._lights[key];
            emittingCells[key] = [0, 0, 0];
            _color_js__WEBPACK_IMPORTED_MODULE_0__["add_"](emittingCells[key], light);
        }
        for (let i = 0; i < this._options.passes; i++) { /* main loop */
            this._emitLight(emittingCells, litCells, doneCells);
            if (i + 1 == this._options.passes) {
                continue;
            } /* not for the last pass */
            emittingCells = this._computeEmitters(litCells, doneCells);
        }
        for (let litKey in litCells) { /* let the user know what and how is lit */
            let parts = litKey.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            lightingCallback(x, y, litCells[litKey]);
        }
        return this;
    }
    /**
     * Compute one iteration from all emitting cells
     * @param emittingCells These emit light
     * @param litCells Add projected light to these
     * @param doneCells These already emitted, forbid them from further calculations
     */
    _emitLight(emittingCells, litCells, doneCells) {
        for (let key in emittingCells) {
            let parts = key.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            this._emitLightFromCell(x, y, emittingCells[key], litCells);
            doneCells[key] = 1;
        }
        return this;
    }
    /**
     * Prepare a list of emitters for next pass
     */
    _computeEmitters(litCells, doneCells) {
        let result = {};
        for (let key in litCells) {
            if (key in doneCells) {
                continue;
            } /* already emitted */
            let color = litCells[key];
            let reflectivity;
            if (key in this._reflectivityCache) {
                reflectivity = this._reflectivityCache[key];
            }
            else {
                let parts = key.split(",");
                let x = parseInt(parts[0]);
                let y = parseInt(parts[1]);
                reflectivity = this._reflectivityCallback(x, y);
                this._reflectivityCache[key] = reflectivity;
            }
            if (reflectivity == 0) {
                continue;
            } /* will not reflect at all */
            /* compute emission color */
            let emission = [0, 0, 0];
            let intensity = 0;
            for (let i = 0; i < 3; i++) {
                let part = Math.round(color[i] * reflectivity);
                emission[i] = part;
                intensity += part;
            }
            if (intensity > this._options.emissionThreshold) {
                result[key] = emission;
            }
        }
        return result;
    }
    /**
     * Compute one iteration from one cell
     */
    _emitLightFromCell(x, y, color, litCells) {
        let key = x + "," + y;
        let fov;
        if (key in this._fovCache) {
            fov = this._fovCache[key];
        }
        else {
            fov = this._updateFOV(x, y);
        }
        for (let fovKey in fov) {
            let formFactor = fov[fovKey];
            let result;
            if (fovKey in litCells) { /* already lit */
                result = litCells[fovKey];
            }
            else { /* newly lit */
                result = [0, 0, 0];
                litCells[fovKey] = result;
            }
            for (let i = 0; i < 3; i++) {
                result[i] += Math.round(color[i] * formFactor);
            } /* add light color */
        }
        return this;
    }
    /**
     * Compute FOV ("form factor") for a potential light source at [x,y]
     */
    _updateFOV(x, y) {
        let key1 = x + "," + y;
        let cache = {};
        this._fovCache[key1] = cache;
        let range = this._options.range;
        function cb(x, y, r, vis) {
            let key2 = x + "," + y;
            let formFactor = vis * (1 - r / range);
            if (formFactor == 0) {
                return;
            }
            cache[key2] = formFactor;
        }
        ;
        this._fov.compute(x, y, range, cb.bind(this));
        return cache;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/arena.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/map/arena.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arena; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");

/**
 * @class Simple empty rectangular room
 * @augments ROT.Map
 */
class Arena extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    create(callback) {
        let w = this._width - 1;
        let h = this._height - 1;
        for (let i = 0; i <= w; i++) {
            for (let j = 0; j <= h; j++) {
                let empty = (i && j && i < w && j < h);
                callback(i, j, empty ? 0 : 1);
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/cellular.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/map/cellular.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cellular; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");



;
/**
 * @class Cellular automaton map generator
 * @augments ROT.Map
 * @param {int} [width=ROT.DEFAULT_WIDTH]
 * @param {int} [height=ROT.DEFAULT_HEIGHT]
 * @param {object} [options] Options
 * @param {int[]} [options.born] List of neighbor counts for a new cell to be born in empty space
 * @param {int[]} [options.survive] List of neighbor counts for an existing  cell to survive
 * @param {int} [options.topology] Topology 4 or 6 or 8
 */
class Cellular extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = {
            born: [5, 6, 7, 8],
            survive: [4, 5, 6, 7, 8],
            topology: 8
        };
        this.setOptions(options);
        this._dirs = _constants_js__WEBPACK_IMPORTED_MODULE_1__["DIRS"][this._options.topology];
        this._map = this._fillMap(0);
    }
    /**
     * Fill the map with random values
     * @param {float} probability Probability for a cell to become alive; 0 = all empty, 1 = all full
     */
    randomize(probability) {
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                this._map[i][j] = (_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniform() < probability ? 1 : 0);
            }
        }
        return this;
    }
    /**
     * Change options.
     * @see ROT.Map.Cellular
     */
    setOptions(options) { Object.assign(this._options, options); }
    set(x, y, value) { this._map[x][y] = value; }
    create(callback) {
        let newMap = this._fillMap(0);
        let born = this._options.born;
        let survive = this._options.survive;
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                let cur = this._map[i][j];
                let ncount = this._getNeighbors(i, j);
                if (cur && survive.indexOf(ncount) != -1) { /* survive */
                    newMap[i][j] = 1;
                }
                else if (!cur && born.indexOf(ncount) != -1) { /* born */
                    newMap[i][j] = 1;
                }
            }
        }
        this._map = newMap;
        callback && this._serviceCallback(callback);
    }
    _serviceCallback(callback) {
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                callback(i, j, this._map[i][j]);
            }
        }
    }
    /**
     * Get neighbor count at [i,j] in this._map
     */
    _getNeighbors(cx, cy) {
        let result = 0;
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
                continue;
            }
            result += (this._map[x][y] == 1 ? 1 : 0);
        }
        return result;
    }
    /**
     * Make sure every non-wall space is accessible.
     * @param {function} callback to call to display map when do
     * @param {int} value to consider empty space - defaults to 0
     * @param {function} callback to call when a new connection is made
     */
    connect(callback, value, connectionCallback) {
        if (!value)
            value = 0;
        let allFreeSpace = [];
        let notConnected = {};
        // find all free space
        let widthStep = 1;
        let widthStarts = [0, 0];
        if (this._options.topology == 6) {
            widthStep = 2;
            widthStarts = [0, 1];
        }
        for (let y = 0; y < this._height; y++) {
            for (let x = widthStarts[y % 2]; x < this._width; x += widthStep) {
                if (this._freeSpace(x, y, value)) {
                    let p = [x, y];
                    notConnected[this._pointKey(p)] = p;
                    allFreeSpace.push([x, y]);
                }
            }
        }
        let start = allFreeSpace[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, allFreeSpace.length - 1)];
        let key = this._pointKey(start);
        let connected = {};
        connected[key] = start;
        delete notConnected[key];
        // find what's connected to the starting point
        this._findConnected(connected, notConnected, [start], false, value);
        while (Object.keys(notConnected).length > 0) {
            // find two points from notConnected to connected
            let p = this._getFromTo(connected, notConnected);
            let from = p[0]; // notConnected
            let to = p[1]; // connected
            // find everything connected to the starting point
            let local = {};
            local[this._pointKey(from)] = from;
            this._findConnected(local, notConnected, [from], true, value);
            // connect to a connected cell
            let tunnelFn = (this._options.topology == 6 ? this._tunnelToConnected6 : this._tunnelToConnected);
            tunnelFn.call(this, to, from, connected, notConnected, value, connectionCallback);
            // now all of local is connected
            for (let k in local) {
                let pp = local[k];
                this._map[pp[0]][pp[1]] = value;
                connected[k] = pp;
                delete notConnected[k];
            }
        }
        callback && this._serviceCallback(callback);
    }
    /**
     * Find random points to connect. Search for the closest point in the larger space.
     * This is to minimize the length of the passage while maintaining good performance.
     */
    _getFromTo(connected, notConnected) {
        let from = [0, 0], to = [0, 0], d;
        let connectedKeys = Object.keys(connected);
        let notConnectedKeys = Object.keys(notConnected);
        for (let i = 0; i < 5; i++) {
            if (connectedKeys.length < notConnectedKeys.length) {
                let keys = connectedKeys;
                to = connected[keys[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, keys.length - 1)]];
                from = this._getClosest(to, notConnected);
            }
            else {
                let keys = notConnectedKeys;
                from = notConnected[keys[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, keys.length - 1)]];
                to = this._getClosest(from, connected);
            }
            d = (from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1]);
            if (d < 64) {
                break;
            }
        }
        // console.log(">>> connected=" + to + " notConnected=" + from + " dist=" + d);
        return [from, to];
    }
    _getClosest(point, space) {
        let minPoint = null;
        let minDist = null;
        for (let k in space) {
            let p = space[k];
            let d = (p[0] - point[0]) * (p[0] - point[0]) + (p[1] - point[1]) * (p[1] - point[1]);
            if (minDist == null || d < minDist) {
                minDist = d;
                minPoint = p;
            }
        }
        return minPoint;
    }
    _findConnected(connected, notConnected, stack, keepNotConnected, value) {
        while (stack.length > 0) {
            let p = stack.splice(0, 1)[0];
            let tests;
            if (this._options.topology == 6) {
                tests = [
                    [p[0] + 2, p[1]],
                    [p[0] + 1, p[1] - 1],
                    [p[0] - 1, p[1] - 1],
                    [p[0] - 2, p[1]],
                    [p[0] - 1, p[1] + 1],
                    [p[0] + 1, p[1] + 1],
                ];
            }
            else {
                tests = [
                    [p[0] + 1, p[1]],
                    [p[0] - 1, p[1]],
                    [p[0], p[1] + 1],
                    [p[0], p[1] - 1]
                ];
            }
            for (let i = 0; i < tests.length; i++) {
                let key = this._pointKey(tests[i]);
                if (connected[key] == null && this._freeSpace(tests[i][0], tests[i][1], value)) {
                    connected[key] = tests[i];
                    if (!keepNotConnected) {
                        delete notConnected[key];
                    }
                    stack.push(tests[i]);
                }
            }
        }
    }
    _tunnelToConnected(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let xx = a[0]; xx <= b[0]; xx++) {
            this._map[xx][a[1]] = value;
            let p = [xx, a[1]];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[0] < b[0]) {
            connectionCallback(a, [b[0], a[1]]);
        }
        // x is now fixed
        let x = b[0];
        if (from[1] < to[1]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let yy = a[1]; yy < b[1]; yy++) {
            this._map[x][yy] = value;
            let p = [x, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[1] < b[1]) {
            connectionCallback([b[0], a[1]], [b[0], b[1]]);
        }
    }
    _tunnelToConnected6(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        // tunnel diagonally until horizontally level
        let xx = a[0];
        let yy = a[1];
        while (!(xx == b[0] && yy == b[1])) {
            let stepWidth = 2;
            if (yy < b[1]) {
                yy++;
                stepWidth = 1;
            }
            else if (yy > b[1]) {
                yy--;
                stepWidth = 1;
            }
            if (xx < b[0]) {
                xx += stepWidth;
            }
            else if (xx > b[0]) {
                xx -= stepWidth;
            }
            else if (b[1] % 2) {
                // Won't step outside map if destination on is map's right edge
                xx -= stepWidth;
            }
            else {
                // ditto for left edge
                xx += stepWidth;
            }
            this._map[xx][yy] = value;
            let p = [xx, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback) {
            connectionCallback(from, to);
        }
    }
    _freeSpace(x, y, value) {
        return x >= 0 && x < this._width && y >= 0 && y < this._height && this._map[x][y] == value;
    }
    _pointKey(p) { return p[0] + "." + p[1]; }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/digger.js":
/*!***********************************************!*\
  !*** ./node_modules/rot-js/lib/map/digger.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Digger; });
/* harmony import */ var _dungeon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dungeon.js */ "./node_modules/rot-js/lib/map/dungeon.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.js */ "./node_modules/rot-js/lib/map/features.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");




const FEATURES = {
    "room": _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"],
    "corridor": _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"]
};
/**
 * Random dungeon generator using human-like digging patterns.
 * Heavily based on Mike Anderson's ideas from the "Tyrant" algo, mentioned at
 * http://www.roguebasin.roguelikedevelopment.org/index.php?title=Dungeon-Building_Algorithm.
 */
class Digger extends _dungeon_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = Object.assign({
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            corridorLength: [3, 10],
            dugPercentage: 0.2,
            timeLimit: 1000 /* we stop after this much time has passed (msec) */
        }, options);
        this._features = {
            "room": 4,
            "corridor": 4
        };
        this._map = [];
        this._featureAttempts = 20; /* how many times do we try to create a feature on a suitable wall */
        this._walls = {}; /* these are available for digging */
        this._dug = 0;
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
        this._priorityWallCallback = this._priorityWallCallback.bind(this);
    }
    create(callback) {
        this._rooms = [];
        this._corridors = [];
        this._map = this._fillMap(1);
        this._walls = {};
        this._dug = 0;
        let area = (this._width - 2) * (this._height - 2);
        this._firstRoom();
        let t1 = Date.now();
        let priorityWalls;
        do {
            priorityWalls = 0;
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                break;
            }
            /* find a good wall */
            let wall = this._findWall();
            if (!wall) {
                break;
            } /* no more walls */
            let parts = wall.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            let dir = this._getDiggingDirection(x, y);
            if (!dir) {
                continue;
            } /* this wall is not suitable */
            //		console.log("wall", x, y);
            /* try adding a feature */
            let featureAttempts = 0;
            do {
                featureAttempts++;
                if (this._tryFeature(x, y, dir[0], dir[1])) { /* feature added */
                    //if (this._rooms.length + this._corridors.length == 2) { this._rooms[0].addDoor(x, y); } /* first room oficially has doors */
                    this._removeSurroundingWalls(x, y);
                    this._removeSurroundingWalls(x - dir[0], y - dir[1]);
                    break;
                }
            } while (featureAttempts < this._featureAttempts);
            for (let id in this._walls) {
                if (this._walls[id] > 1) {
                    priorityWalls++;
                }
            }
        } while (this._dug / area < this._options.dugPercentage || priorityWalls); /* fixme number of priority walls */
        this._addDoors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        this._walls = {};
        this._map = [];
        return this;
    }
    _digCallback(x, y, value) {
        if (value == 0 || value == 2) { /* empty */
            this._map[x][y] = 0;
            this._dug++;
        }
        else { /* wall */
            this._walls[x + "," + y] = 1;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _priorityWallCallback(x, y) { this._walls[x + "," + y] = 2; }
    ;
    _firstRoom() {
        let cx = Math.floor(this._width / 2);
        let cy = Math.floor(this._height / 2);
        let room = _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"].createRandomCenter(cx, cy, this._options);
        this._rooms.push(room);
        room.create(this._digCallback);
    }
    /**
     * Get a suitable wall
     */
    _findWall() {
        let prio1 = [];
        let prio2 = [];
        for (let id in this._walls) {
            let prio = this._walls[id];
            if (prio == 2) {
                prio2.push(id);
            }
            else {
                prio1.push(id);
            }
        }
        let arr = (prio2.length ? prio2 : prio1);
        if (!arr.length) {
            return null;
        } /* no walls :/ */
        let id = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(arr.sort()); // sort to make the order deterministic
        delete this._walls[id];
        return id;
    }
    /**
     * Tries adding a feature
     * @returns {bool} was this a successful try?
     */
    _tryFeature(x, y, dx, dy) {
        let featureName = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getWeightedValue(this._features);
        let ctor = FEATURES[featureName];
        let feature = ctor.createRandomAt(x, y, dx, dy, this._options);
        if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
            //		console.log("not valid");
            //		feature.debug();
            return false;
        }
        feature.create(this._digCallback);
        //	feature.debug();
        if (feature instanceof _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"]) {
            this._rooms.push(feature);
        }
        if (feature instanceof _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"]) {
            feature.createPriorityWalls(this._priorityWallCallback);
            this._corridors.push(feature);
        }
        return true;
    }
    _removeSurroundingWalls(cx, cy) {
        let deltas = _constants_js__WEBPACK_IMPORTED_MODULE_3__["DIRS"][4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            delete this._walls[x + "," + y];
            x = cx + 2 * delta[0];
            y = cy + 2 * delta[1];
            delete this._walls[x + "," + y];
        }
    }
    /**
     * Returns vector in "digging" direction, or false, if this does not exist (or is not unique)
     */
    _getDiggingDirection(cx, cy) {
        if (cx <= 0 || cy <= 0 || cx >= this._width - 1 || cy >= this._height - 1) {
            return null;
        }
        let result = null;
        let deltas = _constants_js__WEBPACK_IMPORTED_MODULE_3__["DIRS"][4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            if (!this._map[x][y]) { /* there already is another empty neighbor! */
                if (result) {
                    return null;
                }
                result = delta;
            }
        }
        /* no empty neighbor */
        if (!result) {
            return null;
        }
        return [-result[0], -result[1]];
    }
    /**
     * Find empty spaces surrounding rooms, and apply doors.
     */
    _addDoors() {
        let data = this._map;
        function isWallCallback(x, y) {
            return (data[x][y] == 1);
        }
        ;
        for (let i = 0; i < this._rooms.length; i++) {
            let room = this._rooms[i];
            room.clearDoors();
            room.addDoors(isWallCallback);
        }
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/dividedmaze.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/map/dividedmaze.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DividedMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");


/**
 * @class Recursively divided maze, http://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method
 * @augments ROT.Map
 */
class DividedMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._stack = [];
        this._map = [];
    }
    create(callback) {
        let w = this._width;
        let h = this._height;
        this._map = [];
        for (let i = 0; i < w; i++) {
            this._map.push([]);
            for (let j = 0; j < h; j++) {
                let border = (i == 0 || j == 0 || i + 1 == w || j + 1 == h);
                this._map[i].push(border ? 1 : 0);
            }
        }
        this._stack = [
            [1, 1, w - 2, h - 2]
        ];
        this._process();
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                callback(i, j, this._map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _process() {
        while (this._stack.length) {
            let room = this._stack.shift(); /* [left, top, right, bottom] */
            this._partitionRoom(room);
        }
    }
    _partitionRoom(room) {
        let availX = [];
        let availY = [];
        for (let i = room[0] + 1; i < room[2]; i++) {
            let top = this._map[i][room[1] - 1];
            let bottom = this._map[i][room[3] + 1];
            if (top && bottom && !(i % 2)) {
                availX.push(i);
            }
        }
        for (let j = room[1] + 1; j < room[3]; j++) {
            let left = this._map[room[0] - 1][j];
            let right = this._map[room[2] + 1][j];
            if (left && right && !(j % 2)) {
                availY.push(j);
            }
        }
        if (!availX.length || !availY.length) {
            return;
        }
        let x = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(availX);
        let y = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(availY);
        this._map[x][y] = 1;
        let walls = [];
        let w = [];
        walls.push(w); /* left part */
        for (let i = room[0]; i < x; i++) {
            this._map[i][y] = 1;
            w.push([i, y]);
        }
        w = [];
        walls.push(w); /* right part */
        for (let i = x + 1; i <= room[2]; i++) {
            this._map[i][y] = 1;
            w.push([i, y]);
        }
        w = [];
        walls.push(w); /* top part */
        for (let j = room[1]; j < y; j++) {
            this._map[x][j] = 1;
            w.push([x, j]);
        }
        w = [];
        walls.push(w); /* bottom part */
        for (let j = y + 1; j <= room[3]; j++) {
            this._map[x][j] = 1;
            w.push([x, j]);
        }
        let solid = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(walls);
        for (let i = 0; i < walls.length; i++) {
            let w = walls[i];
            if (w == solid) {
                continue;
            }
            let hole = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(w);
            this._map[hole[0]][hole[1]] = 0;
        }
        this._stack.push([room[0], room[1], x - 1, y - 1]); /* left top */
        this._stack.push([x + 1, room[1], room[2], y - 1]); /* right top */
        this._stack.push([room[0], y + 1, x - 1, room[3]]); /* left bottom */
        this._stack.push([x + 1, y + 1, room[2], room[3]]); /* right bottom */
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/dungeon.js":
/*!************************************************!*\
  !*** ./node_modules/rot-js/lib/map/dungeon.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dungeon; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");

/**
 * @class Dungeon map: has rooms and corridors
 * @augments ROT.Map
 */
class Dungeon extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height) {
        super(width, height);
        this._rooms = [];
        this._corridors = [];
    }
    /**
     * Get all generated rooms
     * @returns {ROT.Map.Feature.Room[]}
     */
    getRooms() { return this._rooms; }
    /**
     * Get all generated corridors
     * @returns {ROT.Map.Feature.Corridor[]}
     */
    getCorridors() { return this._corridors; }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/ellermaze.js":
/*!**************************************************!*\
  !*** ./node_modules/rot-js/lib/map/ellermaze.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EllerMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");


/**
 * Join lists with "i" and "i+1"
 */
function addToList(i, L, R) {
    R[L[i + 1]] = R[i];
    L[R[i]] = L[i + 1];
    R[i] = i + 1;
    L[i + 1] = i;
}
/**
 * Remove "i" from its list
 */
function removeFromList(i, L, R) {
    R[L[i]] = R[i];
    L[R[i]] = L[i];
    R[i] = i;
    L[i] = i;
}
/**
 * Maze generator - Eller's algorithm
 * See http://homepages.cwi.nl/~tromp/maze.html for explanation
 */
class EllerMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    create(callback) {
        let map = this._fillMap(1);
        let w = Math.ceil((this._width - 2) / 2);
        let rand = 9 / 24;
        let L = [];
        let R = [];
        for (let i = 0; i < w; i++) {
            L.push(i);
            R.push(i);
        }
        L.push(w - 1); /* fake stop-block at the right side */
        let j;
        for (j = 1; j + 3 < this._height; j += 2) {
            /* one row */
            for (let i = 0; i < w; i++) {
                /* cell coords (will be always empty) */
                let x = 2 * i + 1;
                let y = j;
                map[x][y] = 0;
                /* right connection */
                if (i != L[i + 1] && _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand) {
                    addToList(i, L, R);
                    map[x + 1][y] = 0;
                }
                /* bottom connection */
                if (i != L[i] && _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand) {
                    /* remove connection */
                    removeFromList(i, L, R);
                }
                else {
                    /* create connection */
                    map[x][y + 1] = 0;
                }
            }
        }
        /* last row */
        for (let i = 0; i < w; i++) {
            /* cell coords (will be always empty) */
            let x = 2 * i + 1;
            let y = j;
            map[x][y] = 0;
            /* right connection */
            if (i != L[i + 1] && (i == L[i] || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand)) {
                /* dig right also if the cell is separated, so it gets connected to the rest of maze */
                addToList(i, L, R);
                map[x + 1][y] = 0;
            }
            removeFromList(i, L, R);
        }
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/features.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/map/features.js ***!
  \*************************************************/
/*! exports provided: Room, Corridor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corridor", function() { return Corridor; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");

;
/**
 * @class Dungeon feature; has own .create() method
 */
class Feature {
}
/**
 * @class Room
 * @augments ROT.Map.Feature
 * @param {int} x1
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @param {int} [doorX]
 * @param {int} [doorY]
 */
class Room extends Feature {
    constructor(x1, y1, x2, y2, doorX, doorY) {
        super();
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._doors = {};
        if (doorX !== undefined && doorY !== undefined) {
            this.addDoor(doorX, doorY);
        }
    }
    ;
    /**
     * Room of random size, with a given doors and direction
     */
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        if (dx == 1) { /* to the right */
            let y2 = y - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
            return new this(x + 1, y2, x + width, y2 + height - 1, x, y);
        }
        if (dx == -1) { /* to the left */
            let y2 = y - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
            return new this(x - width, y2, x - 1, y2 + height - 1, x, y);
        }
        if (dy == 1) { /* to the bottom */
            let x2 = x - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
            return new this(x2, y + 1, x2 + width - 1, y + height, x, y);
        }
        if (dy == -1) { /* to the top */
            let x2 = x - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
            return new this(x2, y - height, x2 + width - 1, y - 1, x, y);
        }
        throw new Error("dx or dy must be 1 or -1");
    }
    /**
     * Room of random size, positioned around center coords
     */
    static createRandomCenter(cx, cy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        let x1 = cx - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
        let y1 = cy - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    /**
     * Room of random size within a given dimensions
     */
    static createRandom(availWidth, availHeight, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        let left = availWidth - width - 1;
        let top = availHeight - height - 1;
        let x1 = 1 + Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * left);
        let y1 = 1 + Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * top);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    addDoor(x, y) {
        this._doors[x + "," + y] = 1;
        return this;
    }
    /**
     * @param {function}
     */
    getDoors(cb) {
        for (let key in this._doors) {
            let parts = key.split(",");
            cb(parseInt(parts[0]), parseInt(parts[1]));
        }
        return this;
    }
    clearDoors() {
        this._doors = {};
        return this;
    }
    addDoors(isWallCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x != left && x != right && y != top && y != bottom) {
                    continue;
                }
                if (isWallCallback(x, y)) {
                    continue;
                }
                this.addDoor(x, y);
            }
        }
        return this;
    }
    debug() {
        console.log("room", this._x1, this._y1, this._x2, this._y2);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x == left || x == right || y == top || y == bottom) {
                    if (!isWallCallback(x, y)) {
                        return false;
                    }
                }
                else {
                    if (!canBeDugCallback(x, y)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty, 1 = wall, 2 = door. Multiple doors are allowed.
     */
    create(digCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        let value = 0;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x + "," + y in this._doors) {
                    value = 2;
                }
                else if (x == left || x == right || y == top || y == bottom) {
                    value = 1;
                }
                else {
                    value = 0;
                }
                digCallback(x, y, value);
            }
        }
    }
    getCenter() {
        return [Math.round((this._x1 + this._x2) / 2), Math.round((this._y1 + this._y2) / 2)];
    }
    getLeft() { return this._x1; }
    getRight() { return this._x2; }
    getTop() { return this._y1; }
    getBottom() { return this._y2; }
}
/**
 * @class Corridor
 * @augments ROT.Map.Feature
 * @param {int} startX
 * @param {int} startY
 * @param {int} endX
 * @param {int} endY
 */
class Corridor extends Feature {
    constructor(startX, startY, endX, endY) {
        super();
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._endsWithAWall = true;
    }
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.corridorLength[0];
        let max = options.corridorLength[1];
        let length = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        return new this(x, y, x + dx * length, y + dy * length);
    }
    debug() {
        console.log("corridor", this._startX, this._startY, this._endX, this._endY);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        let ok = true;
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            if (!canBeDugCallback(x, y)) {
                ok = false;
            }
            if (!isWallCallback(x + nx, y + ny)) {
                ok = false;
            }
            if (!isWallCallback(x - nx, y - ny)) {
                ok = false;
            }
            if (!ok) {
                length = i;
                this._endX = x - dx;
                this._endY = y - dy;
                break;
            }
        }
        /**
         * If the length degenerated, this corridor might be invalid
         */
        /* not supported */
        if (length == 0) {
            return false;
        }
        /* length 1 allowed only if the next space is empty */
        if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) {
            return false;
        }
        /**
         * We do not want the corridor to crash into a corner of a room;
         * if any of the ending corners is empty, the N+1th cell of this corridor must be empty too.
         *
         * Situation:
         * #######1
         * .......?
         * #######2
         *
         * The corridor was dug from left to right.
         * 1, 2 - problematic corners, ? = N+1th cell (not dug)
         */
        let firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
        let secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
        this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
        if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) {
            return false;
        }
        return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty.
     */
    create(digCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            digCallback(x, y, 0);
        }
        return true;
    }
    createPriorityWalls(priorityWallCallback) {
        if (!this._endsWithAWall) {
            return;
        }
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        priorityWallCallback(this._endX + dx, this._endY + dy);
        priorityWallCallback(this._endX + nx, this._endY + ny);
        priorityWallCallback(this._endX - nx, this._endY - ny);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/iceymaze.js":
/*!*************************************************!*\
  !*** ./node_modules/rot-js/lib/map/iceymaze.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IceyMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");


/**
 * Icey's Maze generator
 * See http://www.roguebasin.roguelikedevelopment.org/index.php?title=Simple_maze for explanation
 */
class IceyMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, regularity = 0) {
        super(width, height);
        this._regularity = regularity;
        this._map = [];
    }
    create(callback) {
        let width = this._width;
        let height = this._height;
        let map = this._fillMap(1);
        width -= (width % 2 ? 1 : 2);
        height -= (height % 2 ? 1 : 2);
        let cx = 0;
        let cy = 0;
        let nx = 0;
        let ny = 0;
        let done = 0;
        let blocked = false;
        let dirs = [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ];
        do {
            cx = 1 + 2 * Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (width - 1) / 2);
            cy = 1 + 2 * Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (height - 1) / 2);
            if (!done) {
                map[cx][cy] = 0;
            }
            if (!map[cx][cy]) {
                this._randomize(dirs);
                do {
                    if (Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (this._regularity + 1)) == 0) {
                        this._randomize(dirs);
                    }
                    blocked = true;
                    for (let i = 0; i < 4; i++) {
                        nx = cx + dirs[i][0] * 2;
                        ny = cy + dirs[i][1] * 2;
                        if (this._isFree(map, nx, ny, width, height)) {
                            map[nx][ny] = 0;
                            map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
                            cx = nx;
                            cy = ny;
                            blocked = false;
                            done++;
                            break;
                        }
                    }
                } while (!blocked);
            }
        } while (done + 1 < width * height / 4);
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _randomize(dirs) {
        for (let i = 0; i < 4; i++) {
            dirs[i][0] = 0;
            dirs[i][1] = 0;
        }
        switch (Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * 4)) {
            case 0:
                dirs[0][0] = -1;
                dirs[1][0] = 1;
                dirs[2][1] = -1;
                dirs[3][1] = 1;
                break;
            case 1:
                dirs[3][0] = -1;
                dirs[2][0] = 1;
                dirs[1][1] = -1;
                dirs[0][1] = 1;
                break;
            case 2:
                dirs[2][0] = -1;
                dirs[3][0] = 1;
                dirs[0][1] = -1;
                dirs[1][1] = 1;
                break;
            case 3:
                dirs[1][0] = -1;
                dirs[0][0] = 1;
                dirs[3][1] = -1;
                dirs[2][1] = 1;
                break;
        }
    }
    _isFree(map, x, y, width, height) {
        if (x < 1 || y < 1 || x >= width || y >= height) {
            return false;
        }
        return map[x][y];
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/map/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arena_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arena.js */ "./node_modules/rot-js/lib/map/arena.js");
/* harmony import */ var _uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniform.js */ "./node_modules/rot-js/lib/map/uniform.js");
/* harmony import */ var _cellular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellular.js */ "./node_modules/rot-js/lib/map/cellular.js");
/* harmony import */ var _digger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digger.js */ "./node_modules/rot-js/lib/map/digger.js");
/* harmony import */ var _ellermaze_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ellermaze.js */ "./node_modules/rot-js/lib/map/ellermaze.js");
/* harmony import */ var _dividedmaze_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dividedmaze.js */ "./node_modules/rot-js/lib/map/dividedmaze.js");
/* harmony import */ var _iceymaze_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iceymaze.js */ "./node_modules/rot-js/lib/map/iceymaze.js");
/* harmony import */ var _rogue_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rogue.js */ "./node_modules/rot-js/lib/map/rogue.js");








/* harmony default export */ __webpack_exports__["default"] = ({ Arena: _arena_js__WEBPACK_IMPORTED_MODULE_0__["default"], Uniform: _uniform_js__WEBPACK_IMPORTED_MODULE_1__["default"], Cellular: _cellular_js__WEBPACK_IMPORTED_MODULE_2__["default"], Digger: _digger_js__WEBPACK_IMPORTED_MODULE_3__["default"], EllerMaze: _ellermaze_js__WEBPACK_IMPORTED_MODULE_4__["default"], DividedMaze: _dividedmaze_js__WEBPACK_IMPORTED_MODULE_5__["default"], IceyMaze: _iceymaze_js__WEBPACK_IMPORTED_MODULE_6__["default"], Rogue: _rogue_js__WEBPACK_IMPORTED_MODULE_7__["default"] });


/***/ }),

/***/ "./node_modules/rot-js/lib/map/map.js":
/*!********************************************!*\
  !*** ./node_modules/rot-js/lib/map/map.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");

;
class Map {
    /**
     * @class Base map generator
     * @param {int} [width=ROT.DEFAULT_WIDTH]
     * @param {int} [height=ROT.DEFAULT_HEIGHT]
     */
    constructor(width = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WIDTH"], height = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_HEIGHT"]) {
        this._width = width;
        this._height = height;
    }
    ;
    _fillMap(value) {
        let map = [];
        for (let i = 0; i < this._width; i++) {
            map.push([]);
            for (let j = 0; j < this._height; j++) {
                map[i].push(value);
            }
        }
        return map;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/rogue.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/map/rogue.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rogue; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/rot-js/lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");



/**
 * Dungeon generator which uses the "orginal" Rogue dungeon generation algorithm. See http://kuoi.com/~kamikaze/GameDesign/art07_rogue_dungeon.php
 * @author hyakugei
 */
class Rogue extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options) {
        super(width, height);
        this.map = [];
        this.rooms = [];
        this.connectedCells = [];
        options = Object.assign({
            cellWidth: 3,
            cellHeight: 3 //     ie. as an array with min-max values for each direction....
        }, options);
        /*
        Set the room sizes according to the over-all width of the map,
        and the cell sizes.
        */
        if (!options.hasOwnProperty("roomWidth")) {
            options["roomWidth"] = this._calculateRoomSize(this._width, options["cellWidth"]);
        }
        if (!options.hasOwnProperty("roomHeight")) {
            options["roomHeight"] = this._calculateRoomSize(this._height, options["cellHeight"]);
        }
        this._options = options;
    }
    create(callback) {
        this.map = this._fillMap(1);
        this.rooms = [];
        this.connectedCells = [];
        this._initRooms();
        this._connectRooms();
        this._connectUnconnectedRooms();
        this._createRandomRoomConnections();
        this._createRooms();
        this._createCorridors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this.map[i][j]);
                }
            }
        }
        return this;
    }
    _calculateRoomSize(size, cell) {
        let max = Math.floor((size / cell) * 0.8);
        let min = Math.floor((size / cell) * 0.25);
        if (min < 2) {
            min = 2;
        }
        if (max < 2) {
            max = 2;
        }
        return [min, max];
    }
    _initRooms() {
        // create rooms array. This is the "grid" list from the algo.
        for (let i = 0; i < this._options.cellWidth; i++) {
            this.rooms.push([]);
            for (let j = 0; j < this._options.cellHeight; j++) {
                this.rooms[i].push({ "x": 0, "y": 0, "width": 0, "height": 0, "connections": [], "cellx": i, "celly": j });
            }
        }
    }
    _connectRooms() {
        //pick random starting grid
        let cgx = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, this._options.cellWidth - 1);
        let cgy = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, this._options.cellHeight - 1);
        let idx;
        let ncgx;
        let ncgy;
        let found = false;
        let room;
        let otherRoom;
        let dirToCheck;
        // find  unconnected neighbour cells
        do {
            //dirToCheck = [0, 1, 2, 3, 4, 5, 6, 7];
            dirToCheck = [0, 2, 4, 6];
            dirToCheck = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(dirToCheck);
            do {
                found = false;
                idx = dirToCheck.pop();
                ncgx = cgx + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][idx][0];
                ncgy = cgy + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][idx][1];
                if (ncgx < 0 || ncgx >= this._options.cellWidth) {
                    continue;
                }
                if (ncgy < 0 || ncgy >= this._options.cellHeight) {
                    continue;
                }
                room = this.rooms[cgx][cgy];
                if (room["connections"].length > 0) {
                    // as long as this room doesn't already coonect to me, we are ok with it.
                    if (room["connections"][0][0] == ncgx && room["connections"][0][1] == ncgy) {
                        break;
                    }
                }
                otherRoom = this.rooms[ncgx][ncgy];
                if (otherRoom["connections"].length == 0) {
                    otherRoom["connections"].push([cgx, cgy]);
                    this.connectedCells.push([ncgx, ncgy]);
                    cgx = ncgx;
                    cgy = ncgy;
                    found = true;
                }
            } while (dirToCheck.length > 0 && found == false);
        } while (dirToCheck.length > 0);
    }
    _connectUnconnectedRooms() {
        //While there are unconnected rooms, try to connect them to a random connected neighbor
        //(if a room has no connected neighbors yet, just keep cycling, you'll fill out to it eventually).
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        this.connectedCells = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(this.connectedCells);
        let room;
        let otherRoom;
        let validRoom;
        for (let i = 0; i < this._options.cellWidth; i++) {
            for (let j = 0; j < this._options.cellHeight; j++) {
                room = this.rooms[i][j];
                if (room["connections"].length == 0) {
                    let directions = [0, 2, 4, 6];
                    directions = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(directions);
                    validRoom = false;
                    do {
                        let dirIdx = directions.pop();
                        let newI = i + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][dirIdx][0];
                        let newJ = j + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][dirIdx][1];
                        if (newI < 0 || newI >= cw || newJ < 0 || newJ >= ch) {
                            continue;
                        }
                        otherRoom = this.rooms[newI][newJ];
                        validRoom = true;
                        if (otherRoom["connections"].length == 0) {
                            break;
                        }
                        for (let k = 0; k < otherRoom["connections"].length; k++) {
                            if (otherRoom["connections"][k][0] == i && otherRoom["connections"][k][1] == j) {
                                validRoom = false;
                                break;
                            }
                        }
                        if (validRoom) {
                            break;
                        }
                    } while (directions.length);
                    if (validRoom) {
                        room["connections"].push([otherRoom["cellx"], otherRoom["celly"]]);
                    }
                    else {
                        console.log("-- Unable to connect room.");
                    }
                }
            }
        }
    }
    _createRandomRoomConnections() {
        // Empty for now.
    }
    _createRooms() {
        let w = this._width;
        let h = this._height;
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let cwp = Math.floor(this._width / cw);
        let chp = Math.floor(this._height / ch);
        let roomw;
        let roomh;
        let roomWidth = this._options["roomWidth"];
        let roomHeight = this._options["roomHeight"];
        let sx;
        let sy;
        let otherRoom;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                sx = cwp * i;
                sy = chp * j;
                if (sx == 0) {
                    sx = 1;
                }
                if (sy == 0) {
                    sy = 1;
                }
                roomw = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(roomWidth[0], roomWidth[1]);
                roomh = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(roomHeight[0], roomHeight[1]);
                if (j > 0) {
                    otherRoom = this.rooms[i][j - 1];
                    while (sy - (otherRoom["y"] + otherRoom["height"]) < 3) {
                        sy++;
                    }
                }
                if (i > 0) {
                    otherRoom = this.rooms[i - 1][j];
                    while (sx - (otherRoom["x"] + otherRoom["width"]) < 3) {
                        sx++;
                    }
                }
                let sxOffset = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, cwp - roomw) / 2);
                let syOffset = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, chp - roomh) / 2);
                while (sx + sxOffset + roomw >= w) {
                    if (sxOffset) {
                        sxOffset--;
                    }
                    else {
                        roomw--;
                    }
                }
                while (sy + syOffset + roomh >= h) {
                    if (syOffset) {
                        syOffset--;
                    }
                    else {
                        roomh--;
                    }
                }
                sx = sx + sxOffset;
                sy = sy + syOffset;
                this.rooms[i][j]["x"] = sx;
                this.rooms[i][j]["y"] = sy;
                this.rooms[i][j]["width"] = roomw;
                this.rooms[i][j]["height"] = roomh;
                for (let ii = sx; ii < sx + roomw; ii++) {
                    for (let jj = sy; jj < sy + roomh; jj++) {
                        this.map[ii][jj] = 0;
                    }
                }
            }
        }
    }
    _getWallPosition(aRoom, aDirection) {
        let rx;
        let ry;
        let door;
        if (aDirection == 1 || aDirection == 3) {
            rx = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(aRoom["x"] + 1, aRoom["x"] + aRoom["width"] - 2);
            if (aDirection == 1) {
                ry = aRoom["y"] - 2;
                door = ry + 1;
            }
            else {
                ry = aRoom["y"] + aRoom["height"] + 1;
                door = ry - 1;
            }
            this.map[rx][door] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
        }
        else {
            ry = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(aRoom["y"] + 1, aRoom["y"] + aRoom["height"] - 2);
            if (aDirection == 2) {
                rx = aRoom["x"] + aRoom["width"] + 1;
                door = rx - 1;
            }
            else {
                rx = aRoom["x"] - 2;
                door = rx + 1;
            }
            this.map[door][ry] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
        }
        return [rx, ry];
    }
    _drawCorridor(startPosition, endPosition) {
        let xOffset = endPosition[0] - startPosition[0];
        let yOffset = endPosition[1] - startPosition[1];
        let xpos = startPosition[0];
        let ypos = startPosition[1];
        let tempDist;
        let xDir;
        let yDir;
        let move; // 2 element array, element 0 is the direction, element 1 is the total value to move.
        let moves = []; // a list of 2 element arrays
        let xAbs = Math.abs(xOffset);
        let yAbs = Math.abs(yOffset);
        let percent = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform(); // used to split the move at different places along the long axis
        let firstHalf = percent;
        let secondHalf = 1 - percent;
        xDir = xOffset > 0 ? 2 : 6;
        yDir = yOffset > 0 ? 4 : 0;
        if (xAbs < yAbs) {
            // move firstHalf of the y offset
            tempDist = Math.ceil(yAbs * firstHalf);
            moves.push([yDir, tempDist]);
            // move all the x offset
            moves.push([xDir, xAbs]);
            // move sendHalf of the  y offset
            tempDist = Math.floor(yAbs * secondHalf);
            moves.push([yDir, tempDist]);
        }
        else {
            //  move firstHalf of the x offset
            tempDist = Math.ceil(xAbs * firstHalf);
            moves.push([xDir, tempDist]);
            // move all the y offset
            moves.push([yDir, yAbs]);
            // move secondHalf of the x offset.
            tempDist = Math.floor(xAbs * secondHalf);
            moves.push([xDir, tempDist]);
        }
        this.map[xpos][ypos] = 0;
        while (moves.length > 0) {
            move = moves.pop();
            while (move[1] > 0) {
                xpos += _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][move[0]][0];
                ypos += _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][move[0]][1];
                this.map[xpos][ypos] = 0;
                move[1] = move[1] - 1;
            }
        }
    }
    _createCorridors() {
        // Draw Corridors between connected rooms
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let room;
        let connection;
        let otherRoom;
        let wall;
        let otherWall;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                room = this.rooms[i][j];
                for (let k = 0; k < room["connections"].length; k++) {
                    connection = room["connections"][k];
                    otherRoom = this.rooms[connection[0]][connection[1]];
                    // figure out what wall our corridor will start one.
                    // figure out what wall our corridor will end on.
                    if (otherRoom["cellx"] > room["cellx"]) {
                        wall = 2;
                        otherWall = 4;
                    }
                    else if (otherRoom["cellx"] < room["cellx"]) {
                        wall = 4;
                        otherWall = 2;
                    }
                    else if (otherRoom["celly"] > room["celly"]) {
                        wall = 3;
                        otherWall = 1;
                    }
                    else {
                        wall = 1;
                        otherWall = 3;
                    }
                    this._drawCorridor(this._getWallPosition(room, wall), this._getWallPosition(otherRoom, otherWall));
                }
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/map/uniform.js":
/*!************************************************!*\
  !*** ./node_modules/rot-js/lib/map/uniform.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uniform; });
/* harmony import */ var _dungeon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dungeon.js */ "./node_modules/rot-js/lib/map/dungeon.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.js */ "./node_modules/rot-js/lib/map/features.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");



;
/**
 * @class Dungeon generator which tries to fill the space evenly. Generates independent rooms and tries to connect them.
 * @augments ROT.Map.Dungeon
 */
class Uniform extends _dungeon_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options) {
        super(width, height);
        this._options = {
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            roomDugPercentage: 0.1,
            timeLimit: 1000 /* we stop after this much time has passed (msec) */
        };
        Object.assign(this._options, options);
        this._map = [];
        this._dug = 0;
        this._roomAttempts = 20; /* new room is created N-times until is considered as impossible to generate */
        this._corridorAttempts = 20; /* corridors are tried N-times until the level is considered as impossible to connect */
        this._connected = []; /* list of already connected rooms */
        this._unconnected = []; /* list of remaining unconnected rooms */
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
    }
    /**
     * Create a map. If the time limit has been hit, returns null.
     * @see ROT.Map#create
     */
    create(callback) {
        let t1 = Date.now();
        while (1) {
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                return null;
            } /* time limit! */
            this._map = this._fillMap(1);
            this._dug = 0;
            this._rooms = [];
            this._unconnected = [];
            this._generateRooms();
            if (this._rooms.length < 2) {
                continue;
            }
            if (this._generateCorridors()) {
                break;
            }
        }
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        return this;
    }
    /**
     * Generates a suitable amount of rooms
     */
    _generateRooms() {
        let w = this._width - 2;
        let h = this._height - 2;
        let room;
        do {
            room = this._generateRoom();
            if (this._dug / (w * h) > this._options.roomDugPercentage) {
                break;
            } /* achieved requested amount of free space */
        } while (room);
        /* either enough rooms, or not able to generate more of them :) */
    }
    /**
     * Try to generate one room
     */
    _generateRoom() {
        let count = 0;
        while (count < this._roomAttempts) {
            count++;
            let room = _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"].createRandom(this._width, this._height, this._options);
            if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) {
                continue;
            }
            room.create(this._digCallback);
            this._rooms.push(room);
            return room;
        }
        /* no room was generated in a given number of attempts */
        return null;
    }
    /**
     * Generates connectors beween rooms
     * @returns {bool} success Was this attempt successfull?
     */
    _generateCorridors() {
        let cnt = 0;
        while (cnt < this._corridorAttempts) {
            cnt++;
            this._corridors = [];
            /* dig rooms into a clear map */
            this._map = this._fillMap(1);
            for (let i = 0; i < this._rooms.length; i++) {
                let room = this._rooms[i];
                room.clearDoors();
                room.create(this._digCallback);
            }
            this._unconnected = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].shuffle(this._rooms.slice());
            this._connected = [];
            if (this._unconnected.length) {
                this._connected.push(this._unconnected.pop());
            } /* first one is always connected */
            while (1) {
                /* 1. pick random connected room */
                let connected = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(this._connected);
                if (!connected) {
                    break;
                }
                /* 2. find closest unconnected */
                let room1 = this._closestRoom(this._unconnected, connected);
                if (!room1) {
                    break;
                }
                /* 3. connect it to closest connected */
                let room2 = this._closestRoom(this._connected, room1);
                if (!room2) {
                    break;
                }
                let ok = this._connectRooms(room1, room2);
                if (!ok) {
                    break;
                } /* stop connecting, re-shuffle */
                if (!this._unconnected.length) {
                    return true;
                } /* done; no rooms remain */
            }
        }
        return false;
    }
    ;
    /**
     * For a given room, find the closest one from the list
     */
    _closestRoom(rooms, room) {
        let dist = Infinity;
        let center = room.getCenter();
        let result = null;
        for (let i = 0; i < rooms.length; i++) {
            let r = rooms[i];
            let c = r.getCenter();
            let dx = c[0] - center[0];
            let dy = c[1] - center[1];
            let d = dx * dx + dy * dy;
            if (d < dist) {
                dist = d;
                result = r;
            }
        }
        return result;
    }
    _connectRooms(room1, room2) {
        /*
            room1.debug();
            room2.debug();
        */
        let center1 = room1.getCenter();
        let center2 = room2.getCenter();
        let diffX = center2[0] - center1[0];
        let diffY = center2[1] - center1[1];
        let start;
        let end;
        let dirIndex1, dirIndex2, min, max, index;
        if (Math.abs(diffX) < Math.abs(diffY)) { /* first try connecting north-south walls */
            dirIndex1 = (diffY > 0 ? 2 : 0);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getLeft();
            max = room2.getRight();
            index = 0;
        }
        else { /* first try connecting east-west walls */
            dirIndex1 = (diffX > 0 ? 1 : 3);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getTop();
            max = room2.getBottom();
            index = 1;
        }
        start = this._placeInWall(room1, dirIndex1); /* corridor will start here */
        if (!start) {
            return false;
        }
        if (start[index] >= min && start[index] <= max) { /* possible to connect with straight line (I-like) */
            end = start.slice();
            let value = 0;
            switch (dirIndex2) {
                case 0:
                    value = room2.getTop() - 1;
                    break;
                case 1:
                    value = room2.getRight() + 1;
                    break;
                case 2:
                    value = room2.getBottom() + 1;
                    break;
                case 3:
                    value = room2.getLeft() - 1;
                    break;
            }
            end[(index + 1) % 2] = value;
            this._digLine([start, end]);
        }
        else if (start[index] < min - 1 || start[index] > max + 1) { /* need to switch target wall (L-like) */
            let diff = start[index] - center2[index];
            let rotation = 0;
            switch (dirIndex2) {
                case 0:
                case 1:
                    rotation = (diff < 0 ? 3 : 1);
                    break;
                case 2:
                case 3:
                    rotation = (diff < 0 ? 1 : 3);
                    break;
            }
            dirIndex2 = (dirIndex2 + rotation) % 4;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = [0, 0];
            mid[index] = start[index];
            let index2 = (index + 1) % 2;
            mid[index2] = end[index2];
            this._digLine([start, mid, end]);
        }
        else { /* use current wall pair, but adjust the line in the middle (S-like) */
            let index2 = (index + 1) % 2;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = Math.round((end[index2] + start[index2]) / 2);
            let mid1 = [0, 0];
            let mid2 = [0, 0];
            mid1[index] = start[index];
            mid1[index2] = mid;
            mid2[index] = end[index];
            mid2[index2] = mid;
            this._digLine([start, mid1, mid2, end]);
        }
        room1.addDoor(start[0], start[1]);
        room2.addDoor(end[0], end[1]);
        index = this._unconnected.indexOf(room1);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room1);
        }
        index = this._unconnected.indexOf(room2);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room2);
        }
        return true;
    }
    _placeInWall(room, dirIndex) {
        let start = [0, 0];
        let dir = [0, 0];
        let length = 0;
        switch (dirIndex) {
            case 0:
                dir = [1, 0];
                start = [room.getLeft(), room.getTop() - 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 1:
                dir = [0, 1];
                start = [room.getRight() + 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
            case 2:
                dir = [1, 0];
                start = [room.getLeft(), room.getBottom() + 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 3:
                dir = [0, 1];
                start = [room.getLeft() - 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
        }
        let avail = [];
        let lastBadIndex = -2;
        for (let i = 0; i < length; i++) {
            let x = start[0] + i * dir[0];
            let y = start[1] + i * dir[1];
            avail.push(null);
            let isWall = (this._map[x][y] == 1);
            if (isWall) {
                if (lastBadIndex != i - 1) {
                    avail[i] = [x, y];
                }
            }
            else {
                lastBadIndex = i;
                if (i) {
                    avail[i - 1] = null;
                }
            }
        }
        for (let i = avail.length - 1; i >= 0; i--) {
            if (!avail[i]) {
                avail.splice(i, 1);
            }
        }
        return (avail.length ? _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(avail) : null);
    }
    /**
     * Dig a polyline.
     */
    _digLine(points) {
        for (let i = 1; i < points.length; i++) {
            let start = points[i - 1];
            let end = points[i];
            let corridor = new _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"](start[0], start[1], end[0], end[1]);
            corridor.create(this._digCallback);
            this._corridors.push(corridor);
        }
    }
    _digCallback(x, y, value) {
        this._map[x][y] = value;
        if (value == 0) {
            this._dug++;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/noise/index.js":
/*!************************************************!*\
  !*** ./node_modules/rot-js/lib/noise/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simplex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplex.js */ "./node_modules/rot-js/lib/noise/simplex.js");

/* harmony default export */ __webpack_exports__["default"] = ({ Simplex: _simplex_js__WEBPACK_IMPORTED_MODULE_0__["default"] });


/***/ }),

/***/ "./node_modules/rot-js/lib/noise/noise.js":
/*!************************************************!*\
  !*** ./node_modules/rot-js/lib/noise/noise.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Noise; });
/**
 * Base noise generator
 */
class Noise {
}


/***/ }),

/***/ "./node_modules/rot-js/lib/noise/simplex.js":
/*!**************************************************!*\
  !*** ./node_modules/rot-js/lib/noise/simplex.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simplex; });
/* harmony import */ var _noise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noise.js */ "./node_modules/rot-js/lib/noise/noise.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./node_modules/rot-js/lib/rng.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ "./node_modules/rot-js/lib/util.js");



const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
/**
 * A simple 2d implementation of simplex noise by Ondrej Zara
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 */
class Simplex extends _noise_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param gradients Random gradients
     */
    constructor(gradients = 256) {
        super();
        this._gradients = [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ];
        let permutations = [];
        for (let i = 0; i < gradients; i++) {
            permutations.push(i);
        }
        permutations = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(permutations);
        this._perms = [];
        this._indexes = [];
        for (let i = 0; i < 2 * gradients; i++) {
            this._perms.push(permutations[i % gradients]);
            this._indexes.push(this._perms[i] % this._gradients.length);
        }
    }
    get(xin, yin) {
        let perms = this._perms;
        let indexes = this._indexes;
        let count = perms.length / 2;
        let n0 = 0, n1 = 0, n2 = 0, gi; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        let s = (xin + yin) * F2; // Hairy factor for 2D
        let i = Math.floor(xin + s);
        let j = Math.floor(yin + s);
        let t = (i + j) * G2;
        let X0 = i - t; // Unskew the cell origin back to (x,y) space
        let Y0 = j - t;
        let x0 = xin - X0; // The x,y distances from the cell origin
        let y0 = yin - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        }
        else { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        let x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        let y1 = y0 - j1 + G2;
        let x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
        let y2 = y0 - 1 + 2 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        let ii = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["mod"])(i, count);
        let jj = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["mod"])(j, count);
        // Calculate the contribution from the three corners
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            t0 *= t0;
            gi = indexes[ii + perms[jj]];
            let grad = this._gradients[gi];
            n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            t1 *= t1;
            gi = indexes[ii + i1 + perms[jj + j1]];
            let grad = this._gradients[gi];
            n1 = t1 * t1 * (grad[0] * x1 + grad[1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            t2 *= t2;
            gi = indexes[ii + 1 + perms[jj + 1]];
            let grad = this._gradients[gi];
            n2 = t2 * t2 * (grad[0] * x2 + grad[1] * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/path/astar.js":
/*!***********************************************!*\
  !*** ./node_modules/rot-js/lib/path/astar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AStar; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/rot-js/lib/path/path.js");

/**
 * @class Simplified A* algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
class AStar extends _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(toX, toY, passableCallback, options = {}) {
        super(toX, toY, passableCallback, options);
        this._todo = [];
        this._done = {};
    }
    /**
     * Compute a path from a given point
     * @see ROT.Path#compute
     */
    compute(fromX, fromY, callback) {
        this._todo = [];
        this._done = {};
        this._fromX = fromX;
        this._fromY = fromY;
        this._add(this._toX, this._toY, null);
        while (this._todo.length) {
            let item = this._todo.shift();
            let id = item.x + "," + item.y;
            if (id in this._done) {
                continue;
            }
            this._done[id] = item;
            if (item.x == fromX && item.y == fromY) {
                break;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._done) {
                    continue;
                }
                this._add(x, y, item);
            }
        }
        let item = this._done[fromX + "," + fromY];
        if (!item) {
            return;
        }
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    _add(x, y, prev) {
        let h = this._distance(x, y);
        let obj = {
            x: x,
            y: y,
            prev: prev,
            g: (prev ? prev.g + 1 : 0),
            h: h
        };
        /* insert into priority queue */
        let f = obj.g + obj.h;
        for (let i = 0; i < this._todo.length; i++) {
            let item = this._todo[i];
            let itemF = item.g + item.h;
            if (f < itemF || (f == itemF && h < item.h)) {
                this._todo.splice(i, 0, obj);
                return;
            }
        }
        this._todo.push(obj);
    }
    _distance(x, y) {
        switch (this._options.topology) {
            case 4:
                return (Math.abs(x - this._fromX) + Math.abs(y - this._fromY));
                break;
            case 6:
                let dx = Math.abs(x - this._fromX);
                let dy = Math.abs(y - this._fromY);
                return dy + Math.max(0, (dx - dy) / 2);
                break;
            case 8:
                return Math.max(Math.abs(x - this._fromX), Math.abs(y - this._fromY));
                break;
        }
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/path/dijkstra.js":
/*!**************************************************!*\
  !*** ./node_modules/rot-js/lib/path/dijkstra.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dijkstra; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/rot-js/lib/path/path.js");

/**
 * @class Simplified Dijkstra's algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
class Dijkstra extends _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(toX, toY, passableCallback, options) {
        super(toX, toY, passableCallback, options);
        this._computed = {};
        this._todo = [];
        this._add(toX, toY, null);
    }
    /**
     * Compute a path from a given point
     * @see ROT.Path#compute
     */
    compute(fromX, fromY, callback) {
        let key = fromX + "," + fromY;
        if (!(key in this._computed)) {
            this._compute(fromX, fromY);
        }
        if (!(key in this._computed)) {
            return;
        }
        let item = this._computed[key];
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    /**
     * Compute a non-cached value
     */
    _compute(fromX, fromY) {
        while (this._todo.length) {
            let item = this._todo.shift();
            if (item.x == fromX && item.y == fromY) {
                return;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._computed) {
                    continue;
                } /* already done */
                this._add(x, y, item);
            }
        }
    }
    _add(x, y, prev) {
        let obj = {
            x: x,
            y: y,
            prev: prev
        };
        this._computed[x + "," + y] = obj;
        this._todo.push(obj);
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/path/index.js":
/*!***********************************************!*\
  !*** ./node_modules/rot-js/lib/path/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dijkstra_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dijkstra.js */ "./node_modules/rot-js/lib/path/dijkstra.js");
/* harmony import */ var _astar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./astar.js */ "./node_modules/rot-js/lib/path/astar.js");


/* harmony default export */ __webpack_exports__["default"] = ({ Dijkstra: _dijkstra_js__WEBPACK_IMPORTED_MODULE_0__["default"], AStar: _astar_js__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./node_modules/rot-js/lib/path/path.js":
/*!**********************************************!*\
  !*** ./node_modules/rot-js/lib/path/path.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/rot-js/lib/constants.js");

/**
 * @class Abstract pathfinder
 * @param {int} toX Target X coord
 * @param {int} toY Target Y coord
 * @param {function} passableCallback Callback to determine map passability
 * @param {object} [options]
 * @param {int} [options.topology=8]
 */
class Path {
    constructor(toX, toY, passableCallback, options = {}) {
        this._toX = toX;
        this._toY = toY;
        this._passableCallback = passableCallback;
        this._options = Object.assign({
            topology: 8
        }, options);
        this._dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][this._options.topology];
        if (this._options.topology == 8) { /* reorder dirs for more aesthetic result (vertical/horizontal first) */
            this._dirs = [
                this._dirs[0],
                this._dirs[2],
                this._dirs[4],
                this._dirs[6],
                this._dirs[1],
                this._dirs[3],
                this._dirs[5],
                this._dirs[7]
            ];
        }
    }
    _getNeighbors(cx, cy) {
        let result = [];
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (!this._passableCallback(x, y)) {
                continue;
            }
            result.push([x, y]);
        }
        return result;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/rng.js":
/*!****************************************!*\
  !*** ./node_modules/rot-js/lib/rng.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
 * Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
 */
const FRAC = 2.3283064365386963e-10; /* 2^-32 */
class RNG {
    constructor() {
        this._seed = 0;
        this._s0 = 0;
        this._s1 = 0;
        this._s2 = 0;
        this._c = 0;
    }
    getSeed() { return this._seed; }
    /**
     * Seed the number generator
     */
    setSeed(seed) {
        seed = (seed < 1 ? 1 / seed : seed);
        this._seed = seed;
        this._s0 = (seed >>> 0) * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s1 = seed * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s2 = seed * FRAC;
        this._c = 1;
        return this;
    }
    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */
    getUniform() {
        let t = 2091639 * this._s0 + this._c * FRAC;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
    }
    /**
     * @param lowerBound The lower end of the range to return a value from, inclusive
     * @param upperBound The upper end of the range to return a value from, inclusive
     * @returns Pseudorandom value [lowerBound, upperBound], using ROT.RNG.getUniform() to distribute the value
     */
    getUniformInt(lowerBound, upperBound) {
        let max = Math.max(lowerBound, upperBound);
        let min = Math.min(lowerBound, upperBound);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
    }
    /**
     * @param mean Mean value
     * @param stddev Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
     * @returns A normally distributed pseudorandom value
     */
    getNormal(mean = 0, stddev = 1) {
        let u, v, r;
        do {
            u = 2 * this.getUniform() - 1;
            v = 2 * this.getUniform() - 1;
            r = u * u + v * v;
        } while (r > 1 || r == 0);
        let gauss = u * Math.sqrt(-2 * Math.log(r) / r);
        return mean + gauss * stddev;
    }
    /**
     * @returns Pseudorandom value [1,100] inclusive, uniformly distributed
     */
    getPercentage() {
        return 1 + Math.floor(this.getUniform() * 100);
    }
    /**
     * @returns Randomly picked item, null when length=0
     */
    getItem(array) {
        if (!array.length) {
            return null;
        }
        return array[Math.floor(this.getUniform() * array.length)];
    }
    /**
     * @returns New array with randomized items
     */
    shuffle(array) {
        let result = [];
        let clone = array.slice();
        while (clone.length) {
            let index = clone.indexOf(this.getItem(clone));
            result.push(clone.splice(index, 1)[0]);
        }
        return result;
    }
    /**
     * @param data key=whatever, value=weight (relative probability)
     * @returns whatever
     */
    getWeightedValue(data) {
        let total = 0;
        for (let id in data) {
            total += data[id];
        }
        let random = this.getUniform() * total;
        let id, part = 0;
        for (id in data) {
            part += data[id];
            if (random < part) {
                return id;
            }
        }
        // If by some floating-point annoyance we have
        // random >= total, just return the last id.
        return id;
    }
    /**
     * Get RNG state. Useful for storing the state and re-setting it via setState.
     * @returns Internal state
     */
    getState() { return [this._s0, this._s1, this._s2, this._c]; }
    /**
     * Set a previously retrieved state.
     */
    setState(state) {
        this._s0 = state[0];
        this._s1 = state[1];
        this._s2 = state[2];
        this._c = state[3];
        return this;
    }
    /**
     * Returns a cloned RNG
     */
    clone() {
        let clone = new RNG();
        return clone.setState(this.getState());
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new RNG().setSeed(Date.now()));


/***/ }),

/***/ "./node_modules/rot-js/lib/scheduler/action.js":
/*!*****************************************************!*\
  !*** ./node_modules/rot-js/lib/scheduler/action.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/rot-js/lib/scheduler/scheduler.js");

/**
 * @class Action-based scheduler
 * @augments ROT.Scheduler
 */
class Action extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._defaultDuration = 1; /* for newly added */
        this._duration = this._defaultDuration; /* for this._current */
    }
    /**
     * @param {object} item
     * @param {bool} repeat
     * @param {number} [time=1]
     * @see ROT.Scheduler#add
     */
    add(item, repeat, time) {
        this._queue.add(item, time || this._defaultDuration);
        return super.add(item, repeat);
    }
    clear() {
        this._duration = this._defaultDuration;
        return super.clear();
    }
    remove(item) {
        if (item == this._current) {
            this._duration = this._defaultDuration;
        }
        return super.remove(item);
    }
    /**
     * @see ROT.Scheduler#next
     */
    next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, this._duration || this._defaultDuration);
            this._duration = this._defaultDuration;
        }
        return super.next();
    }
    /**
     * Set duration for the active item
     */
    setDuration(time) {
        if (this._current) {
            this._duration = time;
        }
        return this;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/scheduler/index.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/scheduler/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple.js */ "./node_modules/rot-js/lib/scheduler/simple.js");
/* harmony import */ var _speed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed.js */ "./node_modules/rot-js/lib/scheduler/speed.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.js */ "./node_modules/rot-js/lib/scheduler/action.js");



/* harmony default export */ __webpack_exports__["default"] = ({ Simple: _simple_js__WEBPACK_IMPORTED_MODULE_0__["default"], Speed: _speed_js__WEBPACK_IMPORTED_MODULE_1__["default"], Action: _action_js__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "./node_modules/rot-js/lib/scheduler/scheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rot-js/lib/scheduler/scheduler.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scheduler; });
/* harmony import */ var _eventqueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventqueue.js */ "./node_modules/rot-js/lib/eventqueue.js");

class Scheduler {
    /**
     * @class Abstract scheduler
     */
    constructor() {
        this._queue = new _eventqueue_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._repeat = [];
        this._current = null;
    }
    /**
     * @see ROT.EventQueue#getTime
     */
    getTime() { return this._queue.getTime(); }
    /**
     * @param {?} item
     * @param {bool} repeat
     */
    add(item, repeat) {
        if (repeat) {
            this._repeat.push(item);
        }
        return this;
    }
    /**
     * Get the time the given item is scheduled for
     * @param {?} item
     * @returns {number} time
     */
    getTimeOf(item) {
        return this._queue.getEventTime(item);
    }
    /**
     * Clear all items
     */
    clear() {
        this._queue.clear();
        this._repeat = [];
        this._current = null;
        return this;
    }
    /**
     * Remove a previously added item
     * @param {?} item
     * @returns {bool} successful?
     */
    remove(item) {
        let result = this._queue.remove(item);
        let index = this._repeat.indexOf(item);
        if (index != -1) {
            this._repeat.splice(index, 1);
        }
        if (this._current == item) {
            this._current = null;
        }
        return result;
    }
    /**
     * Schedule next item
     * @returns {?}
     */
    next() {
        this._current = this._queue.get();
        return this._current;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/scheduler/simple.js":
/*!*****************************************************!*\
  !*** ./node_modules/rot-js/lib/scheduler/simple.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simple; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/rot-js/lib/scheduler/scheduler.js");

/**
 * @class Simple fair scheduler (round-robin style)
 */
class Simple extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    add(item, repeat) {
        this._queue.add(item, 0);
        return super.add(item, repeat);
    }
    next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 0);
        }
        return super.next();
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/scheduler/speed.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/scheduler/speed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speed; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/rot-js/lib/scheduler/scheduler.js");

/**
 * @class Speed-based scheduler
 */
class Speed extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param {object} item anything with "getSpeed" method
     * @param {bool} repeat
     * @param {number} [time=1/item.getSpeed()]
     * @see ROT.Scheduler#add
     */
    add(item, repeat, time) {
        this._queue.add(item, time !== undefined ? time : 1 / item.getSpeed());
        return super.add(item, repeat);
    }
    /**
     * @see ROT.Scheduler#next
     */
    next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 1 / this._current.getSpeed());
        }
        return super.next();
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/stringgenerator.js":
/*!****************************************************!*\
  !*** ./node_modules/rot-js/lib/stringgenerator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringGenerator; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/rot-js/lib/rng.js");

/**
 * @class (Markov process)-based string generator.
 * Copied from a <a href="http://www.roguebasin.roguelikedevelopment.org/index.php?title=Names_from_a_high_order_Markov_Process_and_a_simplified_Katz_back-off_scheme">RogueBasin article</a>.
 * Offers configurable order and prior.
 */
class StringGenerator {
    constructor(options) {
        this._options = {
            words: false,
            order: 3,
            prior: 0.001
        };
        Object.assign(this._options, options);
        this._boundary = String.fromCharCode(0);
        this._suffix = this._boundary;
        this._prefix = [];
        for (let i = 0; i < this._options.order; i++) {
            this._prefix.push(this._boundary);
        }
        this._priorValues = {};
        this._priorValues[this._boundary] = this._options.prior;
        this._data = {};
    }
    /**
     * Remove all learning data
     */
    clear() {
        this._data = {};
        this._priorValues = {};
    }
    /**
     * @returns {string} Generated string
     */
    generate() {
        let result = [this._sample(this._prefix)];
        while (result[result.length - 1] != this._boundary) {
            result.push(this._sample(result));
        }
        return this._join(result.slice(0, -1));
    }
    /**
     * Observe (learn) a string from a training set
     */
    observe(string) {
        let tokens = this._split(string);
        for (let i = 0; i < tokens.length; i++) {
            this._priorValues[tokens[i]] = this._options.prior;
        }
        tokens = this._prefix.concat(tokens).concat(this._suffix); /* add boundary symbols */
        for (let i = this._options.order; i < tokens.length; i++) {
            let context = tokens.slice(i - this._options.order, i);
            let event = tokens[i];
            for (let j = 0; j < context.length; j++) {
                let subcontext = context.slice(j);
                this._observeEvent(subcontext, event);
            }
        }
    }
    getStats() {
        let parts = [];
        let priorCount = Object.keys(this._priorValues).length;
        priorCount--; // boundary
        parts.push("distinct samples: " + priorCount);
        let dataCount = Object.keys(this._data).length;
        let eventCount = 0;
        for (let p in this._data) {
            eventCount += Object.keys(this._data[p]).length;
        }
        parts.push("dictionary size (contexts): " + dataCount);
        parts.push("dictionary size (events): " + eventCount);
        return parts.join(", ");
    }
    /**
     * @param {string}
     * @returns {string[]}
     */
    _split(str) {
        return str.split(this._options.words ? /\s+/ : "");
    }
    /**
     * @param {string[]}
     * @returns {string}
     */
    _join(arr) {
        return arr.join(this._options.words ? " " : "");
    }
    /**
     * @param {string[]} context
     * @param {string} event
     */
    _observeEvent(context, event) {
        let key = this._join(context);
        if (!(key in this._data)) {
            this._data[key] = {};
        }
        let data = this._data[key];
        if (!(event in data)) {
            data[event] = 0;
        }
        data[event]++;
    }
    /**
     * @param {string[]}
     * @returns {string}
     */
    _sample(context) {
        context = this._backoff(context);
        let key = this._join(context);
        let data = this._data[key];
        let available = {};
        if (this._options.prior) {
            for (let event in this._priorValues) {
                available[event] = this._priorValues[event];
            }
            for (let event in data) {
                available[event] += data[event];
            }
        }
        else {
            available = data;
        }
        return _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeightedValue(available);
    }
    /**
     * @param {string[]}
     * @returns {string[]}
     */
    _backoff(context) {
        if (context.length > this._options.order) {
            context = context.slice(-this._options.order);
        }
        else if (context.length < this._options.order) {
            context = this._prefix.slice(0, this._options.order - context.length).concat(context);
        }
        while (!(this._join(context) in this._data) && context.length > 0) {
            context = context.slice(1);
        }
        return context;
    }
}


/***/ }),

/***/ "./node_modules/rot-js/lib/text.js":
/*!*****************************************!*\
  !*** ./node_modules/rot-js/lib/text.js ***!
  \*****************************************/
/*! exports provided: TYPE_TEXT, TYPE_NEWLINE, TYPE_FG, TYPE_BG, measure, tokenize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TEXT", function() { return TYPE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_NEWLINE", function() { return TYPE_NEWLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_FG", function() { return TYPE_FG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_BG", function() { return TYPE_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/**
 * @namespace
 * Contains text tokenization and breaking routines
 */
const RE_COLORS = /%([bc]){([^}]*)}/g;
// token types
const TYPE_TEXT = 0;
const TYPE_NEWLINE = 1;
const TYPE_FG = 2;
const TYPE_BG = 3;
/**
 * Measure size of a resulting text block
 */
function measure(str, maxWidth) {
    let result = { width: 0, height: 1 };
    let tokens = tokenize(str, maxWidth);
    let lineWidth = 0;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lineWidth += token.value.length;
                break;
            case TYPE_NEWLINE:
                result.height++;
                result.width = Math.max(result.width, lineWidth);
                lineWidth = 0;
                break;
        }
    }
    result.width = Math.max(result.width, lineWidth);
    return result;
}
/**
 * Convert string to a series of a formatting commands
 */
function tokenize(str, maxWidth) {
    let result = [];
    /* first tokenization pass - split texts and color formatting commands */
    let offset = 0;
    str.replace(RE_COLORS, function (match, type, name, index) {
        /* string before */
        let part = str.substring(offset, index);
        if (part.length) {
            result.push({
                type: TYPE_TEXT,
                value: part
            });
        }
        /* color command */
        result.push({
            type: (type == "c" ? TYPE_FG : TYPE_BG),
            value: name.trim()
        });
        offset = index + match.length;
        return "";
    });
    /* last remaining part */
    let part = str.substring(offset);
    if (part.length) {
        result.push({
            type: TYPE_TEXT,
            value: part
        });
    }
    return breakLines(result, maxWidth);
}
/* insert line breaks into first-pass tokenized data */
function breakLines(tokens, maxWidth) {
    if (!maxWidth) {
        maxWidth = Infinity;
    }
    let i = 0;
    let lineLength = 0;
    let lastTokenWithSpace = -1;
    while (i < tokens.length) { /* take all text tokens, remove space, apply linebreaks */
        let token = tokens[i];
        if (token.type == TYPE_NEWLINE) { /* reset */
            lineLength = 0;
            lastTokenWithSpace = -1;
        }
        if (token.type != TYPE_TEXT) { /* skip non-text tokens */
            i++;
            continue;
        }
        /* remove spaces at the beginning of line */
        while (lineLength == 0 && token.value.charAt(0) == " ") {
            token.value = token.value.substring(1);
        }
        /* forced newline? insert two new tokens after this one */
        let index = token.value.indexOf("\n");
        if (index != -1) {
            token.value = breakInsideToken(tokens, i, index, true);
            /* if there are spaces at the end, we must remove them (we do not want the line too long) */
            let arr = token.value.split("");
            while (arr.length && arr[arr.length - 1] == " ") {
                arr.pop();
            }
            token.value = arr.join("");
        }
        /* token degenerated? */
        if (!token.value.length) {
            tokens.splice(i, 1);
            continue;
        }
        if (lineLength + token.value.length > maxWidth) { /* line too long, find a suitable breaking spot */
            /* is it possible to break within this token? */
            let index = -1;
            while (1) {
                let nextIndex = token.value.indexOf(" ", index + 1);
                if (nextIndex == -1) {
                    break;
                }
                if (lineLength + nextIndex > maxWidth) {
                    break;
                }
                index = nextIndex;
            }
            if (index != -1) { /* break at space within this one */
                token.value = breakInsideToken(tokens, i, index, true);
            }
            else if (lastTokenWithSpace != -1) { /* is there a previous token where a break can occur? */
                let token = tokens[lastTokenWithSpace];
                let breakIndex = token.value.lastIndexOf(" ");
                token.value = breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
                i = lastTokenWithSpace;
            }
            else { /* force break in this token */
                token.value = breakInsideToken(tokens, i, maxWidth - lineLength, false);
            }
        }
        else { /* line not long, continue */
            lineLength += token.value.length;
            if (token.value.indexOf(" ") != -1) {
                lastTokenWithSpace = i;
            }
        }
        i++; /* advance to next token */
    }
    tokens.push({ type: TYPE_NEWLINE }); /* insert fake newline to fix the last text line */
    /* remove trailing space from text tokens before newlines */
    let lastTextToken = null;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lastTextToken = token;
                break;
            case TYPE_NEWLINE:
                if (lastTextToken) { /* remove trailing space */
                    let arr = lastTextToken.value.split("");
                    while (arr.length && arr[arr.length - 1] == " ") {
                        arr.pop();
                    }
                    lastTextToken.value = arr.join("");
                }
                lastTextToken = null;
                break;
        }
    }
    tokens.pop(); /* remove fake token */
    return tokens;
}
/**
 * Create new tokens and insert them into the stream
 * @param {object[]} tokens
 * @param {int} tokenIndex Token being processed
 * @param {int} breakIndex Index within current token's value
 * @param {bool} removeBreakChar Do we want to remove the breaking character?
 * @returns {string} remaining unbroken token value
 */
function breakInsideToken(tokens, tokenIndex, breakIndex, removeBreakChar) {
    let newBreakToken = {
        type: TYPE_NEWLINE
    };
    let newTextToken = {
        type: TYPE_TEXT,
        value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
    };
    tokens.splice(tokenIndex + 1, 0, newBreakToken, newTextToken);
    return tokens[tokenIndex].value.substring(0, breakIndex);
}


/***/ }),

/***/ "./node_modules/rot-js/lib/util.js":
/*!*****************************************!*\
  !*** ./node_modules/rot-js/lib/util.js ***!
  \*****************************************/
/*! exports provided: mod, clamp, capitalize, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/**
 * Always positive modulus
 * @param x Operand
 * @param n Modulus
 * @returns x modulo n
 */
function mod(x, n) {
    return (x % n + n) % n;
}
function clamp(val, min = 0, max = 1) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
/**
 * Format a string in a flexible way. Scans for %s strings and replaces them with arguments. List of patterns is modifiable via String.format.map.
 * @param {string} template
 * @param {any} [argv]
 */
function format(template, ...args) {
    let map = format.map;
    let replacer = function (match, group1, group2, index) {
        if (template.charAt(index - 1) == "%") {
            return match.substring(1);
        }
        if (!args.length) {
            return match;
        }
        let obj = args[0];
        let group = group1 || group2;
        let parts = group.split(",");
        let name = parts.shift() || "";
        let method = map[name.toLowerCase()];
        if (!method) {
            return match;
        }
        obj = args.shift();
        let replaced = obj[method].apply(obj, parts);
        let first = name.charAt(0);
        if (first != first.toLowerCase()) {
            replaced = capitalize(replaced);
        }
        return replaced;
    };
    return template.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, replacer);
}
format.map = {
    "s": "toString"
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
const Pointer_1 = __webpack_require__(/*! ./Pointer */ "./src/Pointer.ts");
class Cell extends Coord_1.default {
    constructor(coord, element, rotation = 0, frozen = false) {
        super(coord.x, coord.y);
        this.coord = coord;
        this.element = element;
        this.rotation = rotation;
        this.frozen = frozen;
    }
    // Change frozen status of cell
    get ascii() {
        return this.element.ascii[this.rotation / this.element.rotationAngle];
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
    // Fire the l4z0r5
    fire() {
        if (this.element.name === "laser") {
            return new Pointer_1.Pointer(this.coord, this.rotation, 1, 0);
        }
        else {
            throw new Error("Only lasers can fire a particle.");
        }
    }
    // DISPLAY METHODS
    draw(game) {
        game.draw(this);
    }
    // Override toString() method
    toString() {
        return `Cell @ ${this.coord.toString()} is ${this.frozen ? "frozen" : "unfrozen"} ${this.element.toString()} rotated ${this.rotation}°`;
    }
    // Export to JSON format
    exportCellJSON() {
        return {
            y: this.coord.y,
            x: this.coord.x,
            element: this.element.name,
            rotation: this.rotation,
            frozen: this.frozen
        };
    }
    // Import from JSON
    static importJSON(json) {
        const coord = new Coord_1.default(json.y, json.x);
        const element = Element_1.default.fromName(json.element);
        return new Cell(coord, element, json.rotation, json.frozen);
    }
}
exports.Cell = Cell;


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
        return new Coord(this.y, this.x - 1);
    }
    get bottom() {
        return new Coord(this.y, this.x + 1);
    }
    get left() {
        return new Coord(this.y - 1, this.x);
    }
    get right() {
        return new Coord(this.y + 1, this.x);
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
    exportJSON() {
        return {
            y: this.y,
            x: this.x
        };
    }
    // Export JSON
    static importJSON(json) {
        return new Coord(json.y, json.x);
    }
    // Conversion: uid -> coord
    static fromId(index, cols) {
        const x = index % cols;
        const y = Math.floor(index / cols);
        return new Coord(x, y);
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
const elements_1 = __webpack_require__(/*! ../elements/elements */ "./elements/elements.ts");
const Glyph_1 = __webpack_require__(/*! ./Glyph */ "./src/Glyph.ts");
class Element {
    constructor(id, name, group = "", description = "", link = "", active = false, absorption = 0, phase = 0, matrix = [[0, 0], [0, 0]], foregroundColor = "white", backgroundColor = "black", ascii = [" ", " ", " ", " ", " ", " ", " ", " "], tiles = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ], glyph = new Glyph_1.Glyph(" ", [0, 0])) {
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
        return `${this.name} (Phase: ${this.phase}, Absorption: ${this.absorption *
            100}%)`;
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
                console.log(`Processing ${elem.name}: Position: ${elem.ascii[index]} - [X:${x}, Y:${y}]`);
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

/***/ "./src/Frame.ts":
/*!**********************!*\
  !*** ./src/Frame.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TIME FRAME CLASS
// Allow time-travel debugging with step by step inc/dec of time
// Generate a new frame for every move of the particle
// Pointers are [coord, direction]
Object.defineProperty(exports, "__esModule", { value: true });
const Goal_1 = __webpack_require__(/*! ./Goal */ "./src/Goal.ts");
const Pointer_1 = __webpack_require__(/*! ./Pointer */ "./src/Pointer.ts");
class Frame {
    constructor(level, step = 0, pointers = [], end = false) {
        this.step = step;
        this.level = level;
        this.pointers = pointers;
        this.end = end;
        // Initiate simulation with frame #0 and extract emitters
        if (step === 0) {
            this.lasers.forEach(laser => {
                this.pointers.push(laser.fire());
            });
        }
    }
    // Convenient getters
    get grid() {
        return this.level.grid;
    }
    get cells() {
        return this.level.grid.cells;
    }
    get lasers() {
        return this.level.grid.lasers;
    }
    get goals() {
        return this.level.goals;
    }
    get completedGoals() {
        return this.level.goals.filter(goal => {
            return goal.completed;
        });
    }
    get victory() {
        return this.completedGoals.length === this.goals.length;
    }
    // Compute the next frame by computing the next positions of different pointers
    next() {
        // Absorbers
        const detectors = this.grid.detectors;
        const rocks = this.grid.rocks;
        const mines = this.grid.mines;
        const filters = this.grid.absorbers;
        const absorbers = detectors.concat(rocks, mines, filters);
        // Reflectors
        const mirrors = this.grid.mirrors;
        const beamsplitters = this.grid.beamsplitters;
        // Phase shifters
        const phaseincs = this.grid.phaseincs;
        const phasedecs = this.grid.phasedecs;
        const phaseshifters = phaseincs.concat(phasedecs);
        // Loop through pointers
        this.pointers.forEach(pointer => {
            pointer.next();
            if (!this.grid.includes(pointer.coord)) {
                pointer.intensity = 0;
            }
            // Absorption
            absorbers.forEach((absorber) => {
                if (pointer.on(absorber)) {
                    pointer.intensity *= absorber.element.absorption;
                }
            });
            // Reflection
            mirrors.forEach((mirror) => {
                if (pointer.on(mirror)) {
                    pointer.direction =
                        (2 * mirror.rotation - pointer.direction + 360) % 360;
                }
            });
            beamsplitters.forEach((beamsplitter) => {
                if (pointer.on(beamsplitter)) {
                    // Dim the current pointer intensity
                    pointer.intensity /= 2;
                    // Reflecting pointer (create new reflected faded pointer)
                    const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360;
                    this.pointers.push(new Pointer_1.Pointer(pointer.coord, direction, pointer.intensity));
                }
            });
            // Phase shifters
            phaseshifters.forEach((phaseshifter) => {
                if (pointer.on(phaseshifter)) {
                    pointer.phase = (pointer.phase + phaseshifter.element.phase) % 1;
                }
            });
            // Collision goals
            // FIXME: Make a shorthand for goals
            this.goals.forEach(goal => {
                if (goal.coord.equal(pointer.coord)) {
                    goal.value += pointer.intensity * 100;
                    pointer.intensity = 0;
                }
            });
        });
        // Erase null intensity pointers
        this.pointers = this.pointers.filter(pointer => {
            return pointer.intensity > 0;
        });
        // Victory conditions
        if (this.victory) {
            this.level.completed = true;
            this.end = true;
        }
        // Defeat conditions
        if (this.pointers.length === 0) {
            this.level.completed = false;
            this.end = true;
        }
        return new Frame(this.level, this.step + 1, this.pointers, this.end);
    }
    // Overriden method
    toString() {
        let result = `\n--- ${this.victory ? "VICTORY" : "IN PROGRESS"} --- Step #${this.step} with ${this.pointers.length} active pointers.\n`;
        result += "\n";
        result += Pointer_1.Pointer.manyToString(this.pointers);
        result += "\n";
        result += Goal_1.Goal.manyToString(this.level.goals);
        return result;
    }
}
exports.default = Frame;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! rot-js/lib/index */ "./node_modules/rot-js/lib/index.js");
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const GameState_1 = __importDefault(__webpack_require__(/*! ./GameState */ "./src/GameState.ts"));
const StatusLine_1 = __importDefault(__webpack_require__(/*! ./StatusLine */ "./src/StatusLine.ts"));
const InputUtility_1 = __importDefault(__webpack_require__(/*! ./InputUtility */ "./src/InputUtility.ts"));
const MessageLog_1 = __importDefault(__webpack_require__(/*! ./MessageLog */ "./src/MessageLog.ts"));
const Player_1 = __importDefault(__webpack_require__(/*! ./Player */ "./src/Player.ts"));
const Frame_1 = __importDefault(__webpack_require__(/*! ./Frame */ "./src/Frame.ts"));
class Game {
    constructor(level) {
        this.tilesize = 64;
        this.mapSize = { width: level.grid.cols, height: level.grid.rows };
        this.gameSize = {
            width: this.mapSize.width,
            height: this.mapSize.height
        };
        this.statusLinePosition = new Coord_1.default(this.gameSize.height - 4, 0);
        this.actionLogPosition = new Coord_1.default(this.gameSize.height - 3, 0);
        this.frames = [];
        const tileSet = document.createElement("img");
        tileSet.src = `./tiles/tilemap_${this.tilesize}.png`;
        const tiles = Element_1.default.processTileMap(this.tilesize);
        tiles["@"] = [0, 29 * this.tilesize];
        console.log(JSON.stringify(tiles));
        this.display = new index_1.Display({
            layout: "tile-gl",
            bg: "transparent",
            width: this.gameSize.width,
            height: this.gameSize.height,
            fontSize: 20,
            tileWidth: this.tilesize,
            tileHeight: this.tilesize,
            tileSet,
            tileMap: tiles
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.body.appendChild(this.display.getContainer());
        // Game mechanics
        this.gameState = new GameState_1.default();
        this.level = level;
        this.grid = this.level.grid;
        this.frames.push(new Frame_1.default(level));
        this.statusLine = new StatusLine_1.default(this, this.statusLinePosition, this.gameSize.width, {});
        this.messageLog = new MessageLog_1.default(this, this.actionLogPosition, this.gameSize.width, 3);
        this.initializeGame();
        this.grid.draw(this);
        this.mainLoop();
    }
    // Getters and setters
    get playerCell() {
        return this.player.cell;
    }
    get playerCoord() {
        return this.player.coord;
    }
    draw(cell, foregroundColor = "white", backgroundColor = "#2e006a") {
        const charList = [cell.ascii];
        if (this.player.coord.equal(cell.coord)) {
            charList.push("@");
        }
        this.display.draw(cell.coord.y, cell.coord.x, charList, foregroundColor, backgroundColor);
    }
    // Log state to console
    drawText(coord, text, maxWidth) {
        console.log(coord.y, coord.x, text, maxWidth);
    }
    // Init game
    initializeGame() {
        this.display.clear();
        this.messageLog.clear();
        if (!this.gameState.isGameOver() || this.gameState.doRestartGame()) {
            this.resetStatusLine();
            this.writeHelpMessage();
        }
        else {
            this.statusLine.boxes = 0;
        }
        this.gameState.reset();
        this.player = new Player_1.default(this, this.grid.center);
        this.scheduler = new index_1.Scheduler.Simple();
        this.scheduler.add(this.player, true);
        this.drawPanel();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async mainLoop() {
        let actor;
        while (true) {
            actor = this.scheduler.next();
            if (!actor) {
                break;
            }
            await actor.act();
            if (actor.type === 0 /* Player */) {
                this.statusLine.turns += 1;
            }
            this.drawPanel();
            if (this.gameState.isGameOver()) {
                await InputUtility_1.default.waitForInput(this.handleInput.bind(this));
                this.initializeGame();
            }
        }
    }
    drawPanel() {
        this.display.clear();
        this.statusLine.draw();
        this.messageLog.draw();
        this.lasers = this.grid.laserCoords();
        this.grid.draw(this);
        // for (let enemy of this.enemies) {
        //     this.draw(enemy.position, enemy.glyph);
        // }
    }
    handleInput(event) {
        const code = event.keyCode;
        return code === index_1.KEYS.VK_SPACE || code === index_1.KEYS.VK_RETURN;
    }
    resetStatusLine() {
        this.statusLine.reset();
    }
    writeHelpMessage() {
        const helpMessage = [
            `I - ${this.level.name}`,
            `Move: ZQSD, Add: 123..., Rotate: AE`,
            `Fire the laz0r5: Space Steps: RF`
        ];
        for (let index = helpMessage.length - 1; index >= 0; --index) {
            this.messageLog.appendText(helpMessage[index]);
        }
    }
}
exports.default = Game;
// TERMINAL STYLE
// this.display = new Display({
//     width: this.gameSize.width,
//     height: this.gameSize.height,
//     tileColorize: true,
//     fontSize: 30,
//     forceSquareRatio:true
// })


/***/ }),

/***/ "./src/GameState.ts":
/*!**************************!*\
  !*** ./src/GameState.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GameState {
    constructor() {
        this.reset();
    }
    reset() {
        this.achievedGoals = false;
        this.noPointers = false;
        this.notEnoughIntensity = false;
    }
    doStartNextRound() {
        return !this.noPointers;
    }
    doRestartGame() {
        return this.noPointers || this.notEnoughIntensity;
    }
    isGameOver() {
        return this.achievedGoals || this.noPointers || this.notEnoughIntensity;
    }
}
exports.default = GameState;


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

Object.defineProperty(exports, "__esModule", { value: true });
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
    // Format active particle list
    static manyToString(goals) {
        let result = `${goals.length} active goals...\n`;
        goals.forEach(goal => {
            result += `- ${goal.toString()}\n`;
        });
        return result;
    }
    // Import JSON
    static importJSON(jsonGoals) {
        const goals = [];
        jsonGoals.forEach(goal => {
            const coord = goal.coord;
            goals.push(new Goal(coord, goal.threshold));
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
const Cell_1 = __webpack_require__(/*! ./Cell */ "./src/Cell.ts");
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const Pointer_1 = __webpack_require__(/*! ./Pointer */ "./src/Pointer.ts");
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
            this.matrix = new Array(this.rows)
                .fill(0)
                .map(() => new Array(this.cols).fill(0));
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    this.set(new Cell_1.Cell(new Coord_1.default(y, x), Element_1.default.fromName("void")));
                }
            }
        }
    }
    // Get center coordinates of grid
    get center() {
        return new Coord_1.default(Math.floor(this.cols / 2), Math.floor(this.rows / 2));
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
    // Emitters
    get lasers() {
        return this.filteredBy("laser");
    }
    // Reflectors
    get mirrors() {
        return this.filteredBy("mirror");
    }
    get beamsplitters() {
        return this.filteredBy("beamsplitter");
    }
    get reflectors() {
        return this.mirrors.concat(this.beamsplitters);
    }
    // Absorbers
    get mines() {
        return this.filteredBy("mine");
    }
    get detectors() {
        return this.filteredBy("detector");
    }
    get rocks() {
        return this.filteredBy("rock");
    }
    get filters() {
        return this.filteredBy("filter");
    }
    get absorbers() {
        return this.mines.concat(this.detectors, this.rocks, this.filters);
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
        return (coord.y >= 0 &&
            coord.y < this.rows &&
            (coord.x >= 0 && coord.x < this.cols));
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
    // Get one cell
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
            this.set(new Cell_1.Cell(src, cellDst.element, cellDst.rotation));
            this.set(new Cell_1.Cell(dst, cellSrc.element, cellSrc.rotation));
            // console.log(`Moved ${cellSrc.element} from ${src.toString()} to ${dst.toString()}`)
            return true;
        }
        else {
            // console.error(`Couldn't move ${cellSrc.element} because of frozen ${dst.toString()}`)
            return false;
        }
    }
    // Distance to exiting grid
    distanceToEscape(pointer) {
        switch (pointer.direction % 360) {
            case 0: // TOP
                return pointer.y;
            case 90: // RIGHT
                return this.cols - pointer.x - 1;
            case 180: // BOTTOM
                return this.rows - pointer.y - 1;
            case 270: // LEFT
                return pointer.x;
            default:
                throw new Error("Something went wrong with directions...");
        }
    }
    // Basic display
    display() {
        console.log(this.matrix.valueOf());
    }
    // Draw
    draw(game) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const coord = new Coord_1.default(y, x);
                const cell = this.get(coord);
                if (coord.isIncludedIn(game.lasers.map(pointer => pointer.coord))) {
                    game.draw(cell, "white", "purple");
                }
                else {
                    game.draw(cell);
                }
            }
        }
    }
    // Laser lines
    laserCoords() {
        const laserCoords = [];
        const pointers = this.lasers.map(laser => laser.fire());
        pointers.forEach(pointer => {
            pointer.laserPath(this, 30).forEach((laserPoint) => {
                laserCoords.push(laserPoint);
            });
        });
        return laserCoords;
    }
    // Include particle display in ascii render
    asciiRender(pointers = []) {
        let result = "##".repeat(this.cols + 1) + "\n";
        for (let y = 0; y < this.rows; y++) {
            let asciiLine = "#";
            for (let x = 0; x < this.cols; x++) {
                // Add some sort of ascii z-index
                const coord = new Coord_1.default(y, x);
                if (coord.isIncludedIn(Pointer_1.Pointer.manyToCoords(pointers))) {
                    asciiLine += "* ";
                }
                else {
                    const rotation = this.get(coord).rotation / 45;
                    asciiLine += this.get(new Coord_1.default(y, x)).element.ascii[rotation] + " ";
                }
            }
            result += asciiLine + "#\n";
        }
        result += "##".repeat(this.cols + 1);
        return result;
    }
    toString() {
        let basic = "";
        for (let y = 0; y < this.rows; y++) {
            let asciiLine = "";
            for (let x = 0; x < this.cols; x++) {
                asciiLine += this.get(new Coord_1.default(y, x)).element.id;
            }
            basic += asciiLine + "\n";
        }
        return basic;
    }
    // import cells
    importJSON(cells) {
        cells.forEach(cell => {
            const coord = new Coord_1.default(cell.y, cell.x);
            const element = Element_1.default.fromName(cell.element);
            this.set(new Cell_1.Cell(coord, element, cell.rotation, cell.frozen));
        });
    }
    // export JSON file to save state oi the game
    exportJSON() {
        const cells = [];
        this.unvoid.forEach(cell => {
            cells.push(cell.exportCellJSON());
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


/***/ }),

/***/ "./src/InputUtility.ts":
/*!*****************************!*\
  !*** ./src/InputUtility.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
class InputUtility {
    static waitForInput(handleInput) {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        return new Promise(resolve => {
            if (InputUtility.processInputCallback !== undefined) {
                InputUtility.stopProcessing();
            }
            InputUtility.resolve = resolve;
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            InputUtility.processInputCallback = (event) => InputUtility.processInput(event, handleInput);
            window.addEventListener("keydown", InputUtility.processInputCallback);
        });
    }
    static processInput(event, handleInput) {
        if (handleInput(event)) {
            InputUtility.stopProcessing();
        }
    }
    static stopProcessing() {
        window.removeEventListener("keydown", InputUtility.processInputCallback);
        // InputUtility.processInputCallback = undefined
        InputUtility.processInputCallback = () => {
            return undefined;
        };
        InputUtility.resolve();
    }
}
exports.default = InputUtility;


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
const Cell_1 = __webpack_require__(/*! ./Cell */ "./src/Cell.ts");
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const Grid_1 = __importDefault(__webpack_require__(/*! ./Grid */ "./src/Grid.ts"));
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
        // Extract non frozen elements and put them in the toolbox
        // const unfrozenCells = this.grid.cells.filter((cell) => !cell.frozen).map((cell) => cell.element.name)
    }
    // Override toString method in order to display ascii level
    toString() {
        return `\
LEVEL: ${this.name} [${this.grid.cols}x${this.grid.rows}]\n\
DESC: ${this.description}\n\
GROUP: ${this.group}\n\
${this.grid.asciiRender()}\n\
GOALS: ${this.goals.map(i => i.toString())}\n\
GOALS: ${this.completed ? "COMPLETE" : "IN PROGRESS"}\n\
HINTS: ${this.hints.map(i => i.toString())}\n
TOOLBOX: ${JSON.stringify(this.toolbox)}\n
`;
    }
    // export JSON file to save state oi the game
    exportJSON() {
        return {
            id: this.id,
            name: this.name,
            group: this.group,
            description: this.description,
            cols: this.grid.cols,
            rows: this.grid.rows,
            cells: this.grid.exportJSON(),
            hints: this.hints.flatMap(hint => JSON.stringify(hint)),
            goals: this.goals.flatMap(goal => JSON.stringify(goal))
        };
    }
    // import JSON file
    static importJSON(json) {
        const grid = new Grid_1.default(json.rows, json.cols);
        grid.importJSON(json.cells);
        // const goals = Goal.importJSON(json.goals);
        // const hints = Hint.importJSON(json.hints);
        const goals = [];
        const hints = [];
        return new Level(json.id, json.name, json.group, json.description, grid, goals, hints, false);
    }
    // import JSON file
    static importV1JSON(json) {
        const grid = new Grid_1.default(json.width, json.height);
        const cells = [];
        json.tiles.forEach((tile) => {
            const coord = new Coord_1.default(tile.i, tile.j);
            const element = Element_1.default.fromName(tile.name, 1);
            const rotation = element.rotationAngle * tile.rotation;
            cells.push(new Cell_1.Cell(coord, element, rotation, tile.frozen));
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

/***/ "./src/MessageLog.ts":
/*!***************************!*\
  !*** ./src/MessageLog.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coord_1 = __importDefault(__webpack_require__(/*! ./Coord */ "./src/Coord.ts"));
class MessageLog {
    constructor(game, position, maxWidth, maxLines) {
        this.game = game;
        this.position = position;
        this.maxWidth = maxWidth;
        this.maxLines = maxLines;
        this.lines = [];
    }
    clear() {
        this.lines = [];
    }
    appendText(text) {
        this.lines.splice(0, 0, text);
        if (this.lines.length > this.maxLines) {
            this.lines.splice(this.maxLines, this.lines.length - this.maxLines);
        }
    }
    draw() {
        const linePosition = new Coord_1.default(this.position.x, this.position.y);
        for (let index = 0; index < this.maxLines && index < this.lines.length; ++index) {
            this.game.drawText(linePosition, this.lines[index], this.maxWidth);
            ++linePosition.y;
        }
    }
}
exports.default = MessageLog;


/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rot_js_1 = __webpack_require__(/*! rot-js */ "./node_modules/rot-js/lib/index.js");
const Glyph_1 = __webpack_require__(/*! ./Glyph */ "./src/Glyph.ts");
const InputUtility_1 = __importDefault(__webpack_require__(/*! ./InputUtility */ "./src/InputUtility.ts"));
const Element_1 = __importDefault(__webpack_require__(/*! ./Element */ "./src/Element.ts"));
const FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
class Player {
    constructor(game, coord) {
        this.glyph = new Glyph_1.Glyph("@", [0, 0]);
        this.type = 0 /* Player */;
        this.game = game;
        this.coord = coord;
    }
    // Getters and setters
    get cell() {
        return this.game.grid.get(this.coord);
    }
    // tslint:disable-next-line: no-any
    act() {
        return InputUtility_1.default.waitForInput(this.handleInput.bind(this));
    }
    // Offset of movement
    handleInput(event) {
        let validInput = false;
        let newCoord = this.coord;
        switch (event.keyCode) {
            // Movement
            case rot_js_1.KEYS.VK_Z:
            case rot_js_1.KEYS.VK_UP:
                newCoord = this.coord.top;
                break;
            case rot_js_1.KEYS.VK_D:
            case rot_js_1.KEYS.VK_RIGHT:
                newCoord = this.coord.right;
                break;
            case rot_js_1.KEYS.VK_S:
            case rot_js_1.KEYS.VK_DOWN:
                newCoord = this.coord.bottom;
                break;
            case rot_js_1.KEYS.VK_Q:
            case rot_js_1.KEYS.VK_LEFT:
                newCoord = this.coord.left;
                break;
            // Rotations, freezing
            case rot_js_1.KEYS.VK_A:
                this.cell.rotate(-this.cell.element.rotationAngle);
                break;
            case rot_js_1.KEYS.VK_E:
                this.cell.rotate(this.cell.element.rotationAngle);
                break;
            case rot_js_1.KEYS.VK_F:
                this.cell.toggleFreeze();
                break;
            // Save JSON file with level
            case rot_js_1.KEYS.VK_F1:
                const json = this.game.level.exportJSON();
                const blob = new Blob([JSON.stringify(json)], {
                    type: "text/plain;charset=utf-8"
                });
                FileSaver.saveAs(blob, "level.json");
                break;
            // Elements
            case rot_js_1.KEYS.VK_QUOTE:
                this.cell.element = Element_1.default.fromName("void");
                break;
            case rot_js_1.KEYS.VK_1:
                this.cell.element = Element_1.default.fromName("mirror");
                break;
            case rot_js_1.KEYS.VK_2:
                this.cell.element = Element_1.default.fromName("beamsplitter");
                break;
            case rot_js_1.KEYS.VK_3:
                this.cell.element = Element_1.default.fromName("laser");
                break;
            case rot_js_1.KEYS.VK_4:
                this.cell.element = Element_1.default.fromName("detector");
                break;
            case rot_js_1.KEYS.VK_5:
                this.cell.element = Element_1.default.fromName("phaseinc");
                break;
            case rot_js_1.KEYS.VK_6:
                this.cell.element = Element_1.default.fromName("phasedec");
                break;
            case rot_js_1.KEYS.VK_7:
                this.cell.element = Element_1.default.fromName("rock");
                break;
            case rot_js_1.KEYS.VK_8:
                this.cell.element = Element_1.default.fromName("mine");
                break;
            default:
                break;
        }
        // Check that player is in game grid borders
        if (this.game.grid.includes(newCoord)) {
            this.coord = newCoord;
            validInput = true;
            this.game.grid.draw(this.game);
        }
        return validInput;
    }
    toString() {
        return `Player ${this.coord.toString()}`;
    }
}
exports.default = Player;


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
class Pointer extends Coord_1.default {
    constructor(coord, direction, intensity = 1, phase = 0, path = [
        { coord: coord, direction: direction, intensity: intensity, phase: phase }
    ]) {
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
    // Compute laser path
    laserPath(grid, maxFrames = 50) {
        // Make a depp clone of the pointer
        let alive = [this.clone];
        const dead = [];
        // Simulate path with a specific number of frames
        for (let i = 0; i < maxFrames; i++) {
            // Process each living pointer
            alive.forEach(pointer => {
                pointer.next();
                // Zero the intensity of escaping pointers
                if (!grid.includes(pointer.coord)) {
                    pointer.intensity = 0;
                }
                // Absorption
                grid.absorbers.forEach((absorber) => {
                    if (pointer.on(absorber)) {
                        pointer.intensity -=
                            pointer.intensity * absorber.element.absorption;
                    }
                });
                // Reflection
                grid.mirrors.forEach((mirror) => {
                    if (pointer.on(mirror)) {
                        pointer.direction =
                            (2 * mirror.rotation - pointer.direction + 360) % 360;
                    }
                });
                grid.beamsplitters.forEach((beamsplitter) => {
                    if (pointer.on(beamsplitter)) {
                        // Dim the current pointer intensity
                        pointer.intensity /= 2;
                        // Reflecting pointer (create new reflected faded pointer)
                        const direction = (2 * beamsplitter.rotation - pointer.direction + 360) % 360;
                        alive.push(new Pointer(pointer.coord, direction, pointer.intensity));
                    }
                });
                // Phase shifters
                grid.phaseshifters.forEach((phaseshifter) => {
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
    // Override method to display nicely
    toString() {
        return `#Pointer @ ${this.coord.toString()} moving ${this.direction}° with ${this.intensity} intensity and ${this.phase} phase shift. PATH: ${this.path.map(coord => coord.toString())}`;
    }
    // Export JSON object
    exportJSON() {
        const path = this.path.map((position) => {
            return {
                coord: position.coord.exportJSON(),
                direction: this.direction,
                phase: this.phase
            };
        });
        return {
            x: this.coord.x,
            y: this.coord.y,
            direction: this.direction,
            intensity: this.intensity,
            phase: this.phase,
            path: path
        };
    }
    // Import JSON object
    static importJSON(json) {
        // const path = json.path.map(jsonCoord => Coord.importJSON(jsonCoord));
        const coord = new Coord_1.default(json.y, json.x);
        return new Pointer(coord, json.direction, json.intensity, json.phase);
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
exports.Pointer = Pointer;


/***/ }),

/***/ "./src/StatusLine.ts":
/*!***************************!*\
  !*** ./src/StatusLine.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = __webpack_require__(/*! ./Helpers */ "./src/Helpers.ts");
class StatusLine {
    constructor(game, coord, maxWidth, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params = {}) {
        this.game = game;
        this.coord = coord;
        this.maxWidth = maxWidth;
        this.turns = params.turns || 0;
    }
    reset() {
        this.turns = 0;
    }
    draw() {
        const playerCell = this.game.playerCell;
        const playerText = `Turns: ${Helpers_1.padRight(this.turns.toString(), 6)} player: ${Helpers_1.padLeft(this.game.playerCoord.toString(), 8)}`;
        this.game.drawText(this.coord, playerText, this.maxWidth);
        const cellText = `Cell: ${playerCell.element.name} - Rotation: ${playerCell.rotation}° ${playerCell.frozen ? "frozen" : ""}`;
        this.game.drawText(this.coord.right, cellText, this.maxWidth);
    }
}
exports.default = StatusLine;


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
// import json from "../levels/tiletest.json";
// import json from "../levels/conquer.json";
const level_json_1 = __importDefault(__webpack_require__(/*! ../levels/level.json */ "./levels/level.json"));
const Level_1 = __importDefault(__webpack_require__(/*! ./Level */ "./src/Level.ts"));
const Game_1 = __importDefault(__webpack_require__(/*! ./Game */ "./src/Game.ts"));
document.body.onload = () => {
    const level = Level_1.default.importJSON(level_json_1.default);
    new Game_1.default(level);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZWxlbWVudHMvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2Rpc3BsYXkvYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9kaXNwbGF5L2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvZGlzcGxheS9oZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvZGlzcGxheS9yZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2Rpc3BsYXkvdGVybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9kaXNwbGF5L3RpbGUtZ2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvZGlzcGxheS90aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9ldmVudHF1ZXVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2Zvdi9kaXNjcmV0ZS1zaGFkb3djYXN0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2Zvdi9mb3YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvZm92L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2Zvdi9wcmVjaXNlLXNoYWRvd2Nhc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvZm92L3JlY3Vyc2l2ZS1zaGFkb3djYXN0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL2xpZ2h0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL21hcC9hcmVuYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9tYXAvY2VsbHVsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvbWFwL2RpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9tYXAvZGl2aWRlZG1hemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvbWFwL2R1bmdlb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvbWFwL2VsbGVybWF6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9tYXAvZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvbWFwL2ljZXltYXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL21hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL21hcC9yb2d1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9tYXAvdW5pZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9ub2lzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9ub2lzZS9ub2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9ub2lzZS9zaW1wbGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL3BhdGgvYXN0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvcGF0aC9kaWprc3RyYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvc2NoZWR1bGVyL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvc2NoZWR1bGVyL3NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9zY2hlZHVsZXIvc2ltcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3QtanMvbGliL3NjaGVkdWxlci9zcGVlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi9zdHJpbmdnZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdC1qcy9saWIvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm90LWpzL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Nvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9HbHlwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR29hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXRVdGlsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVzc2FnZUxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb2ludGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TdGF0dXNMaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFHLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUFBO0FBQUE7QUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDZSxtQkFBbUIsa0RBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsOEJBQThCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pSQTtBQUFBO0FBQUE7QUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDZSxtQkFBbUIsa0RBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQyxDQUFDO0lBQ3JDLElBQUksY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBjb25zdCBqc29uRWxlbWVudHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJ2b2lkXCIsXHJcbiAgICBuYW1ldjE6IFwiVm9pZFwiLFxyXG4gICAgZ3JvdXA6IFwiQmFzaWNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2b2lkLi4uXCIsXHJcbiAgICBsaW5rOiBcIi4vZWxlbWVudHMvdm9pZFwiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDAsXHJcbiAgICBwaGFzZTogMCxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDE5LFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMDA2YVwiLFxyXG4gICAgYXNjaWk6IFtcIiBcIl0sXHJcbiAgICB0aWxlczogW1swLCAyMF1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImxhc2VyXCIsXHJcbiAgICBuYW1ldjE6IFwiU291cmNlXCIsXHJcbiAgICBncm91cDogXCJFbWl0dGVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIG9uZS1waG90b24gbGFzZXIgc291cmNlXCIsXHJcbiAgICBsaW5rOiBcIi4vZWxlbWVudHMvbGFzZXJcIixcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIGFic29ycHRpb246IDAsXHJcbiAgICBwaGFzZTogMCxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDAsXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgYXNjaWk6IFtcIl5cIiwgXCI+XCIsIFwidlwiLCBcIjxcIl0sXHJcbiAgICB0aWxlczogW1sxLCAwXSwgWzEsIDBdLCBbMiwgMF0sIFszLCAwXV1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwibWlycm9yXCIsXHJcbiAgICBuYW1ldjE6IFwiVGhpbk1pcnJvclwiLFxyXG4gICAgZ3JvdXA6IFwiRGlyZWN0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSByZWZsZWN0aW5nIG1pcnJvclwiLFxyXG4gICAgbGluazogXCIuL2VsZW1lbnRzL21pcnJvclwiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDAsXHJcbiAgICBwaGFzZTogMCxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDE0LFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBbXCJ8XCIsIFwiL1wiLCBcIi1cIiwgXCJcXFxcXCIsIFwifFwiLCBcIi9cIiwgXCItXCIsIFwiXFxcXFwiXSxcclxuICAgIHRpbGVzOiBbXHJcbiAgICAgIFsxNSwgMF0sXHJcbiAgICAgIFsxNSwgMV0sXHJcbiAgICAgIFsxNSwgMl0sXHJcbiAgICAgIFsxNSwgM10sXHJcbiAgICAgIFsxNSwgNF0sXHJcbiAgICAgIFsxNSwgNV0sXHJcbiAgICAgIFsxNSwgNl0sXHJcbiAgICAgIFsxNSwgN11cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZGV0ZWN0b3JcIixcclxuICAgIG5hbWV2MTogXCJEZXRlY3RvclwiLFxyXG4gICAgZ3JvdXA6IFwiQWJzb3JiZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgb25lLXBob3RvbiBkZXRlY3RvclwiLFxyXG4gICAgbGluazogXCIuL2VsZW1lbnRzL2RldGVjdG9yXCIsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgYWJzb3JwdGlvbjogMSxcclxuICAgIHBoYXNlOiAwLFxyXG4gICAgbWF0cml4OiBbXSxcclxuXHJcbiAgICBpZDogNixcclxuICAgIGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICBhc2NpaTogW1wi4oeRXCIsIFwi4oeSXCIsIFwi4oeTXCIsIFwi4oeQXCJdLFxyXG4gICAgdGlsZXM6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIm9tbmlkZXRlY3RvclwiLFxyXG4gICAgbmFtZXYxOiBcIk9tbmlEZXRlY3Rvcj9cIixcclxuICAgIGdyb3VwOiBcIkFic29yYmVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIG9tbmktZGlyZWN0aW9uIG9uZS1waG90b24gZGV0ZWN0b3JcIixcclxuICAgIGxpbms6IFwiLi9lbGVtZW50cy9vbW5pZGV0ZWN0b3JcIixcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBhYnNvcnB0aW9uOiAxLFxyXG4gICAgcGhhc2U6IDAsXHJcbiAgICBtYXRyaXg6IFtdLFxyXG5cclxuICAgIGlkOiA4LFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBbXCJPXCJdLFxyXG4gICAgdGlsZXM6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInJvY2tcIixcclxuICAgIG5hbWV2MTogXCJSb2NrXCIsXHJcbiAgICBncm91cDogXCJBYnNvcmJlclwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQW4gYWJzb3JiaW5nIHBldCByb2NrXCIsXHJcbiAgICBsaW5rOiBcIi4vZWxlbWVudHMvcm9ja1wiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDEsXHJcbiAgICBwaGFzZTogMCxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDEsXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgYXNjaWk6IFtcIiNcIl0sXHJcbiAgICB0aWxlczogW1swLCAwXV1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwibWluZVwiLFxyXG4gICAgbmFtZXYxOiBcIk1pbmVcIixcclxuICAgIGdyb3VwOiBcIkFic29yYmVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBleHBsb3NpdmUgbWluZSAoZGlzYXJtIEplYW4pXCIsXHJcbiAgICBsaW5rOiBcIi4vZWxlbWVudHMvbWluZVwiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDEsXHJcbiAgICBwaGFzZTogMCxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDExLFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBbXCIhXCJdLFxyXG4gICAgdGlsZXM6IFtbMCwgMF1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImJlYW1zcGxpdHRlclwiLFxyXG4gICAgbmFtZXYxOiBcIlRoaW5TcGxpdHRlclwiLFxyXG4gICAgZ3JvdXA6IFwiRGlyZWN0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIGJlYW1zcGxpdHRlclwiLFxyXG4gICAgbGluazogXCIuL2VsZW1lbnRzL2JlYW1zcGxpdHRlclwiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDAsXHJcbiAgICBwaGFzZTogMCxcclxuXHJcbiAgICBpZDogMTUsXHJcbiAgICBtYXRyaXg6IFtdLFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBbXCLihpFcIiwgXCLihpdcIiwgXCLihpJcIiwgXCLihphcIiwgXCLihpNcIiwgXCLihplcIiwgXCLihpBcIiwgXCLihpZcIl0sXHJcbiAgICB0aWxlczogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJmaWx0ZXJcIixcclxuICAgIG5hbWV2MTogXCJBYnNvcmJlclwiLFxyXG4gICAgZ3JvdXA6IFwiQWJzb3JiZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbmV1dHJhbCBkZW5zaXR5IGZpbHRlclwiLFxyXG4gICAgbGluazogXCIuL2VsZW1lbnRzL2Fic29yYmVyXCIsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgYWJzb3JwdGlvbjogMC41LFxyXG4gICAgcGhhc2U6IDAsXHJcbiAgICBtYXRyaXg6IFtdLFxyXG5cclxuICAgIGlkOiAxOSxcclxuICAgIGZvcmVncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICBhc2NpaTogW1wiLVwiXSxcclxuICAgIHRpbGVzOiBbWzAsIDBdXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwaGFzZWluY1wiLFxyXG4gICAgbmFtZXYxOiBcIlZhY3V1bUphclwiLFxyXG4gICAgZ3JvdXA6IFwiUGhhc2VcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZ2xhc3Mgc2xhYiB0aGF0IGluY3JlYXNlcyBwaGFzZS5cIixcclxuICAgIGxpbms6IFwiLi9lbGVtZW50cy9waGFzZWluY1wiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGFic29ycHRpb246IDAsXHJcbiAgICBwaGFzZTogMC4yNSxcclxuICAgIG1hdHJpeDogW10sXHJcblxyXG4gICAgaWQ6IDE3LFxyXG4gICAgZm9yZWdyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBbXCLihp1cIl0sXHJcbiAgICB0aWxlczogW1swLCAwXV1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicGhhc2VkZWNcIixcclxuICAgIG5hbWV2MTogXCJHbGFzc1wiLFxyXG4gICAgZ3JvdXA6IFwiUGhhc2VcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZvaWQgdGhhdCBkZWNyZWFzZXMgcGhhc2UuXCIsXHJcbiAgICBsaW5rOiBcIi4vZWxlbWVudHMvcGhhc2VkZWNcIixcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBhYnNvcnB0aW9uOiAwLFxyXG4gICAgcGhhc2U6IC0wLjI1LFxyXG4gICAgbWF0cml4OiBbXSxcclxuXHJcbiAgICBpZDogMTYsXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgYXNjaWk6IFtcIuKGnFwiXSxcclxuICAgIHRpbGVzOiBbWzAsIDBdXVxyXG4gIH1cclxuXTtcclxuIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBSTkcgZnJvbSBcIi4vcm5nLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHIpIHtcbiAgICBsZXQgY2FjaGVkLCByO1xuICAgIGlmIChzdHIgaW4gQ0FDSEUpIHtcbiAgICAgICAgY2FjaGVkID0gQ0FDSEVbc3RyXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChzdHIuY2hhckF0KDApID09IFwiI1wiKSB7IC8vIGhleCByZ2JcbiAgICAgICAgICAgIGxldCBtYXRjaGVkID0gc3RyLm1hdGNoKC9bMC05YS1mXS9naSkgfHwgW107XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gbWF0Y2hlZC5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDE2KSk7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVkID0gdmFsdWVzLm1hcCgoeCkgPT4geCAqIDE3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpICsgMV0gKz0gMTYgKiB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhY2hlZCA9IHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgociA9IHN0ci5tYXRjaCgvcmdiXFwoKFswLTksIF0rKVxcKS9pKSkpIHsgLy8gZGVjaW1hbCByZ2JcbiAgICAgICAgICAgIGNhY2hlZCA9IHJbMV0uc3BsaXQoL1xccyosXFxzKi8pLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBodG1sIG5hbWVcbiAgICAgICAgICAgIGNhY2hlZCA9IFswLCAwLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBDQUNIRVtzdHJdID0gY2FjaGVkO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkLnNsaWNlKCk7XG59XG4vKipcbiAqIEFkZCB0d28gb3IgbW9yZSBjb2xvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChjb2xvcjEsIC4uLmNvbG9ycykge1xuICAgIGxldCByZXN1bHQgPSBjb2xvcjEuc2xpY2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldICs9IGNvbG9yc1tqXVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBBZGQgdHdvIG9yIG1vcmUgY29sb3JzLCBNT0RJRklFUyBGSVJTVCBBUkdVTUVOVFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkXyhjb2xvcjEsIC4uLmNvbG9ycykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sb3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb2xvcjFbaV0gKz0gY29sb3JzW2pdW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjE7XG59XG4vKipcbiAqIE11bHRpcGx5IChtaXgpIHR3byBvciBtb3JlIGNvbG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkoY29sb3IxLCAuLi5jb2xvcnMpIHtcbiAgICBsZXQgcmVzdWx0ID0gY29sb3IxLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSAqPSBjb2xvcnNbal1baV0gLyAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBNdWx0aXBseSAobWl4KSB0d28gb3IgbW9yZSBjb2xvcnMsIE1PRElGSUVTIEZJUlNUIEFSR1VNRU5UXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseV8oY29sb3IxLCAuLi5jb2xvcnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29sb3IxW2ldICo9IGNvbG9yc1tqXVtpXSAvIDI1NTtcbiAgICAgICAgfVxuICAgICAgICBjb2xvcjFbaV0gPSBNYXRoLnJvdW5kKGNvbG9yMVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjE7XG59XG4vKipcbiAqIEludGVycG9sYXRlIChibGVuZCkgdHdvIGNvbG9ycyB3aXRoIGEgZ2l2ZW4gZmFjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShjb2xvcjEsIGNvbG9yMiwgZmFjdG9yID0gMC41KSB7XG4gICAgbGV0IHJlc3VsdCA9IGNvbG9yMS5zbGljZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldICsgZmFjdG9yICogKGNvbG9yMltpXSAtIGNvbG9yMVtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGNvbnN0IGxlcnAgPSBpbnRlcnBvbGF0ZTtcbi8qKlxuICogSW50ZXJwb2xhdGUgKGJsZW5kKSB0d28gY29sb3JzIHdpdGggYSBnaXZlbiBmYWN0b3IgaW4gSFNMIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlSFNMKGNvbG9yMSwgY29sb3IyLCBmYWN0b3IgPSAwLjUpIHtcbiAgICBsZXQgaHNsMSA9IHJnYjJoc2woY29sb3IxKTtcbiAgICBsZXQgaHNsMiA9IHJnYjJoc2woY29sb3IyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBoc2wxW2ldICs9IGZhY3RvciAqIChoc2wyW2ldIC0gaHNsMVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBoc2wycmdiKGhzbDEpO1xufVxuZXhwb3J0IGNvbnN0IGxlcnBIU0wgPSBpbnRlcnBvbGF0ZUhTTDtcbi8qKlxuICogQ3JlYXRlIGEgbmV3IHJhbmRvbSBjb2xvciBiYXNlZCBvbiB0aGlzIG9uZVxuICogQHBhcmFtIGNvbG9yXG4gKiBAcGFyYW0gZGlmZiBTZXQgb2Ygc3RhbmRhcmQgZGV2aWF0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplKGNvbG9yLCBkaWZmKSB7XG4gICAgaWYgKCEoZGlmZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICBkaWZmID0gTWF0aC5yb3VuZChSTkcuZ2V0Tm9ybWFsKDAsIGRpZmYpKTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IGNvbG9yLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldICs9IChkaWZmIGluc3RhbmNlb2YgQXJyYXkgPyBNYXRoLnJvdW5kKFJORy5nZXROb3JtYWwoMCwgZGlmZltpXSkpIDogZGlmZik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU0wuIEV4cGVjdHMgMC4uMjU1IGlucHV0cywgcHJvZHVjZXMgMC4uMSBvdXRwdXRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmdiMmhzbChjb2xvcikge1xuICAgIGxldCByID0gY29sb3JbMF0gLyAyNTU7XG4gICAgbGV0IGcgPSBjb2xvclsxXSAvIDI1NTtcbiAgICBsZXQgYiA9IGNvbG9yWzJdIC8gMjU1O1xuICAgIGxldCBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbGV0IGggPSAwLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xuICAgIGlmIChtYXggPT0gbWluKSB7XG4gICAgICAgIHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgcyA9IChsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKSk7XG4gICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgfVxuICAgIHJldHVybiBbaCwgcywgbF07XG59XG5mdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApXG4gICAgICAgIHQgKz0gMTtcbiAgICBpZiAodCA+IDEpXG4gICAgICAgIHQgLT0gMTtcbiAgICBpZiAodCA8IDEgLyA2KVxuICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICBpZiAodCA8IDEgLyAyKVxuICAgICAgICByZXR1cm4gcTtcbiAgICBpZiAodCA8IDIgLyAzKVxuICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgcmV0dXJuIHA7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIEhTTCBjb2xvciB2YWx1ZSB0byBSR0IuIEV4cGVjdHMgMC4uMSBpbnB1dHMsIHByb2R1Y2VzIDAuLjI1NSBvdXRwdXRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaHNsMnJnYihjb2xvcikge1xuICAgIGxldCBsID0gY29sb3JbMl07XG4gICAgaWYgKGNvbG9yWzFdID09IDApIHtcbiAgICAgICAgbCA9IE1hdGgucm91bmQobCAqIDI1NSk7XG4gICAgICAgIHJldHVybiBbbCwgbCwgbF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcyA9IGNvbG9yWzFdO1xuICAgICAgICBsZXQgcSA9IChsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzKTtcbiAgICAgICAgbGV0IHAgPSAyICogbCAtIHE7XG4gICAgICAgIGxldCByID0gaHVlMnJnYihwLCBxLCBjb2xvclswXSArIDEgLyAzKTtcbiAgICAgICAgbGV0IGcgPSBodWUycmdiKHAsIHEsIGNvbG9yWzBdKTtcbiAgICAgICAgbGV0IGIgPSBodWUycmdiKHAsIHEsIGNvbG9yWzBdIC0gMSAvIDMpO1xuICAgICAgICByZXR1cm4gW01hdGgucm91bmQociAqIDI1NSksIE1hdGgucm91bmQoZyAqIDI1NSksIE1hdGgucm91bmQoYiAqIDI1NSldO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1JHQihjb2xvcikge1xuICAgIGxldCBjbGFtcGVkID0gY29sb3IubWFwKHggPT4gY2xhbXAoeCwgMCwgMjU1KSk7XG4gICAgcmV0dXJuIGByZ2IoJHtjbGFtcGVkLmpvaW4oXCIsXCIpfSlgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSGV4KGNvbG9yKSB7XG4gICAgbGV0IGNsYW1wZWQgPSBjb2xvci5tYXAoeCA9PiBjbGFtcCh4LCAwLCAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgIHJldHVybiBgIyR7Y2xhbXBlZC5qb2luKFwiXCIpfWA7XG59XG5jb25zdCBDQUNIRSA9IHtcbiAgICBcImJsYWNrXCI6IFswLCAwLCAwXSxcbiAgICBcIm5hdnlcIjogWzAsIDAsIDEyOF0sXG4gICAgXCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcbiAgICBcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXG4gICAgXCJibHVlXCI6IFswLCAwLCAyNTVdLFxuICAgIFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxuICAgIFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXG4gICAgXCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXG4gICAgXCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxuICAgIFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcbiAgICBcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcbiAgICBcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXG4gICAgXCJsaW1lXCI6IFswLCAyNTUsIDBdLFxuICAgIFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcbiAgICBcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcbiAgICBcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcbiAgICBcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxuICAgIFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcbiAgICBcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXG4gICAgXCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxuICAgIFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXG4gICAgXCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcbiAgICBcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxuICAgIFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXG4gICAgXCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXG4gICAgXCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXG4gICAgXCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXG4gICAgXCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXG4gICAgXCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXG4gICAgXCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxuICAgIFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcbiAgICBcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcbiAgICBcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcbiAgICBcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxuICAgIFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXG4gICAgXCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcbiAgICBcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcbiAgICBcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcbiAgICBcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXG4gICAgXCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxuICAgIFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxuICAgIFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxuICAgIFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcbiAgICBcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxuICAgIFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxuICAgIFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXG4gICAgXCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXG4gICAgXCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcbiAgICBcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXG4gICAgXCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcbiAgICBcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxuICAgIFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXG4gICAgXCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxuICAgIFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcbiAgICBcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXG4gICAgXCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxuICAgIFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcbiAgICBcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXG4gICAgXCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcbiAgICBcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxNl0sXG4gICAgXCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXG4gICAgXCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxuICAgIFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcbiAgICBcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdLFxuICAgIFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXG4gICAgXCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxuICAgIFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxuICAgIFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxuICAgIFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcbiAgICBcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxuICAgIFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXG4gICAgXCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXG4gICAgXCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcbiAgICBcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxuICAgIFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcbiAgICBcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcbiAgICBcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXG4gICAgXCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxuICAgIFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgICBcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcbiAgICBcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxuICAgIFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcbiAgICBcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcbiAgICBcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXG4gICAgXCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxuICAgIFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcbiAgICBcInBhbGV2aW9sZXRyZWRcIjogWzIxNiwgMTEyLCAxNDddLFxuICAgIFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXG4gICAgXCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxuICAgIFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxuICAgIFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxuICAgIFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcbiAgICBcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxuICAgIFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcbiAgICBcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXG4gICAgXCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXG4gICAgXCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcbiAgICBcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXG4gICAgXCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcbiAgICBcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxuICAgIFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxuICAgIFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcbiAgICBcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcbiAgICBcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcbiAgICBcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXG4gICAgXCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXG4gICAgXCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXG4gICAgXCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcbiAgICBcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXG4gICAgXCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcbiAgICBcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXG4gICAgXCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxuICAgIFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxuICAgIFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxuICAgIFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXG4gICAgXCJyZWRcIjogWzI1NSwgMCwgMF0sXG4gICAgXCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXG4gICAgXCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXG4gICAgXCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcbiAgICBcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXG4gICAgXCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcbiAgICBcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxuICAgIFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXG4gICAgXCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXG4gICAgXCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXG4gICAgXCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcbiAgICBcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXG4gICAgXCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcbiAgICBcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcbiAgICBcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXG4gICAgXCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXG4gICAgXCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXG4gICAgXCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxuICAgIFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcbiAgICBcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcbiAgICBcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxuICAgIFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXG4gICAgXCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXG4gICAgXCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXG4gICAgXCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxuICAgIFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxuICAgIFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXG4gICAgXCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcbiAgICBcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcbiAgICBcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcbiAgICBcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XVxufTtcbiIsIi8qKiBEZWZhdWx0IHdpdGggZm9yIGRpc3BsYXkgYW5kIG1hcCBnZW5lcmF0b3JzICovXG5leHBvcnQgbGV0IERFRkFVTFRfV0lEVEggPSA4MDtcbi8qKiBEZWZhdWx0IGhlaWdodCBmb3IgZGlzcGxheSBhbmQgbWFwIGdlbmVyYXRvcnMgKi9cbmV4cG9ydCBsZXQgREVGQVVMVF9IRUlHSFQgPSAyNTtcbmV4cG9ydCBjb25zdCBESVJTID0ge1xuICAgIDQ6IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV0sXG4gICAgODogW1swLCAtMV0sIFsxLCAtMV0sIFsxLCAwXSwgWzEsIDFdLCBbMCwgMV0sIFstMSwgMV0sIFstMSwgMF0sIFstMSwgLTFdXSxcbiAgICA2OiBbWy0xLCAtMV0sIFsxLCAtMV0sIFsyLCAwXSwgWzEsIDFdLCBbLTEsIDFdLCBbLTIsIDBdXVxufTtcbmV4cG9ydCBjb25zdCBLRVlTID0ge1xuICAgIC8qKiBDYW5jZWwga2V5LiAqL1xuICAgIFZLX0NBTkNFTDogMyxcbiAgICAvKiogSGVscCBrZXkuICovXG4gICAgVktfSEVMUDogNixcbiAgICAvKiogQmFja3NwYWNlIGtleS4gKi9cbiAgICBWS19CQUNLX1NQQUNFOiA4LFxuICAgIC8qKiBUYWIga2V5LiAqL1xuICAgIFZLX1RBQjogOSxcbiAgICAvKiogNSBrZXkgb24gTnVtcGFkIHdoZW4gTnVtTG9jayBpcyB1bmxvY2tlZC4gT3Igb24gTWFjLCBjbGVhciBrZXkgd2hpY2ggaXMgcG9zaXRpb25lZCBhdCBOdW1Mb2NrIGtleS4gKi9cbiAgICBWS19DTEVBUjogMTIsXG4gICAgLyoqIFJldHVybi9lbnRlciBrZXkgb24gdGhlIG1haW4ga2V5Ym9hcmQuICovXG4gICAgVktfUkVUVVJOOiAxMyxcbiAgICAvKiogUmVzZXJ2ZWQsIGJ1dCBub3QgdXNlZC4gKi9cbiAgICBWS19FTlRFUjogMTQsXG4gICAgLyoqIFNoaWZ0IGtleS4gKi9cbiAgICBWS19TSElGVDogMTYsXG4gICAgLyoqIENvbnRyb2wga2V5LiAqL1xuICAgIFZLX0NPTlRST0w6IDE3LFxuICAgIC8qKiBBbHQgKE9wdGlvbiBvbiBNYWMpIGtleS4gKi9cbiAgICBWS19BTFQ6IDE4LFxuICAgIC8qKiBQYXVzZSBrZXkuICovXG4gICAgVktfUEFVU0U6IDE5LFxuICAgIC8qKiBDYXBzIGxvY2suICovXG4gICAgVktfQ0FQU19MT0NLOiAyMCxcbiAgICAvKiogRXNjYXBlIGtleS4gKi9cbiAgICBWS19FU0NBUEU6IDI3LFxuICAgIC8qKiBTcGFjZSBiYXIuICovXG4gICAgVktfU1BBQ0U6IDMyLFxuICAgIC8qKiBQYWdlIFVwIGtleS4gKi9cbiAgICBWS19QQUdFX1VQOiAzMyxcbiAgICAvKiogUGFnZSBEb3duIGtleS4gKi9cbiAgICBWS19QQUdFX0RPV046IDM0LFxuICAgIC8qKiBFbmQga2V5LiAqL1xuICAgIFZLX0VORDogMzUsXG4gICAgLyoqIEhvbWUga2V5LiAqL1xuICAgIFZLX0hPTUU6IDM2LFxuICAgIC8qKiBMZWZ0IGFycm93LiAqL1xuICAgIFZLX0xFRlQ6IDM3LFxuICAgIC8qKiBVcCBhcnJvdy4gKi9cbiAgICBWS19VUDogMzgsXG4gICAgLyoqIFJpZ2h0IGFycm93LiAqL1xuICAgIFZLX1JJR0hUOiAzOSxcbiAgICAvKiogRG93biBhcnJvdy4gKi9cbiAgICBWS19ET1dOOiA0MCxcbiAgICAvKiogUHJpbnQgU2NyZWVuIGtleS4gKi9cbiAgICBWS19QUklOVFNDUkVFTjogNDQsXG4gICAgLyoqIElucyhlcnQpIGtleS4gKi9cbiAgICBWS19JTlNFUlQ6IDQ1LFxuICAgIC8qKiBEZWwoZXRlKSBrZXkuICovXG4gICAgVktfREVMRVRFOiA0NixcbiAgICAvKioqL1xuICAgIFZLXzA6IDQ4LFxuICAgIC8qKiovXG4gICAgVktfMTogNDksXG4gICAgLyoqKi9cbiAgICBWS18yOiA1MCxcbiAgICAvKioqL1xuICAgIFZLXzM6IDUxLFxuICAgIC8qKiovXG4gICAgVktfNDogNTIsXG4gICAgLyoqKi9cbiAgICBWS181OiA1MyxcbiAgICAvKioqL1xuICAgIFZLXzY6IDU0LFxuICAgIC8qKiovXG4gICAgVktfNzogNTUsXG4gICAgLyoqKi9cbiAgICBWS184OiA1NixcbiAgICAvKioqL1xuICAgIFZLXzk6IDU3LFxuICAgIC8qKiBDb2xvbiAoOikga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfQ09MT046IDU4LFxuICAgIC8qKiBTZW1pY29sb24gKDspIGtleS4gKi9cbiAgICBWS19TRU1JQ09MT046IDU5LFxuICAgIC8qKiBMZXNzLXRoYW4gKDwpIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX0xFU1NfVEhBTjogNjAsXG4gICAgLyoqIEVxdWFscyAoPSkga2V5LiAqL1xuICAgIFZLX0VRVUFMUzogNjEsXG4gICAgLyoqIEdyZWF0ZXItdGhhbiAoPikga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfR1JFQVRFUl9USEFOOiA2MixcbiAgICAvKiogUXVlc3Rpb24gbWFyayAoPykga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfUVVFU1RJT05fTUFSSzogNjMsXG4gICAgLyoqIEF0bWFyayAoQCkga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfQVQ6IDY0LFxuICAgIC8qKiovXG4gICAgVktfQTogNjUsXG4gICAgLyoqKi9cbiAgICBWS19COiA2NixcbiAgICAvKioqL1xuICAgIFZLX0M6IDY3LFxuICAgIC8qKiovXG4gICAgVktfRDogNjgsXG4gICAgLyoqKi9cbiAgICBWS19FOiA2OSxcbiAgICAvKioqL1xuICAgIFZLX0Y6IDcwLFxuICAgIC8qKiovXG4gICAgVktfRzogNzEsXG4gICAgLyoqKi9cbiAgICBWS19IOiA3MixcbiAgICAvKioqL1xuICAgIFZLX0k6IDczLFxuICAgIC8qKiovXG4gICAgVktfSjogNzQsXG4gICAgLyoqKi9cbiAgICBWS19LOiA3NSxcbiAgICAvKioqL1xuICAgIFZLX0w6IDc2LFxuICAgIC8qKiovXG4gICAgVktfTTogNzcsXG4gICAgLyoqKi9cbiAgICBWS19OOiA3OCxcbiAgICAvKioqL1xuICAgIFZLX086IDc5LFxuICAgIC8qKiovXG4gICAgVktfUDogODAsXG4gICAgLyoqKi9cbiAgICBWS19ROiA4MSxcbiAgICAvKioqL1xuICAgIFZLX1I6IDgyLFxuICAgIC8qKiovXG4gICAgVktfUzogODMsXG4gICAgLyoqKi9cbiAgICBWS19UOiA4NCxcbiAgICAvKioqL1xuICAgIFZLX1U6IDg1LFxuICAgIC8qKiovXG4gICAgVktfVjogODYsXG4gICAgLyoqKi9cbiAgICBWS19XOiA4NyxcbiAgICAvKioqL1xuICAgIFZLX1g6IDg4LFxuICAgIC8qKiovXG4gICAgVktfWTogODksXG4gICAgLyoqKi9cbiAgICBWS19aOiA5MCxcbiAgICAvKioqL1xuICAgIFZLX0NPTlRFWFRfTUVOVTogOTMsXG4gICAgLyoqIDAgb24gdGhlIG51bWVyaWMga2V5cGFkLiAqL1xuICAgIFZLX05VTVBBRDA6IDk2LFxuICAgIC8qKiAxIG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19OVU1QQUQxOiA5NyxcbiAgICAvKiogMiBvbiB0aGUgbnVtZXJpYyBrZXlwYWQuICovXG4gICAgVktfTlVNUEFEMjogOTgsXG4gICAgLyoqIDMgb24gdGhlIG51bWVyaWMga2V5cGFkLiAqL1xuICAgIFZLX05VTVBBRDM6IDk5LFxuICAgIC8qKiA0IG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19OVU1QQUQ0OiAxMDAsXG4gICAgLyoqIDUgb24gdGhlIG51bWVyaWMga2V5cGFkLiAqL1xuICAgIFZLX05VTVBBRDU6IDEwMSxcbiAgICAvKiogNiBvbiB0aGUgbnVtZXJpYyBrZXlwYWQuICovXG4gICAgVktfTlVNUEFENjogMTAyLFxuICAgIC8qKiA3IG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19OVU1QQUQ3OiAxMDMsXG4gICAgLyoqIDggb24gdGhlIG51bWVyaWMga2V5cGFkLiAqL1xuICAgIFZLX05VTVBBRDg6IDEwNCxcbiAgICAvKiogOSBvbiB0aGUgbnVtZXJpYyBrZXlwYWQuICovXG4gICAgVktfTlVNUEFEOTogMTA1LFxuICAgIC8qKiAqIG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19NVUxUSVBMWTogMTA2LFxuICAgIC8qKiArIG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19BREQ6IDEwNyxcbiAgICAvKioqL1xuICAgIFZLX1NFUEFSQVRPUjogMTA4LFxuICAgIC8qKiAtIG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19TVUJUUkFDVDogMTA5LFxuICAgIC8qKiBEZWNpbWFsIHBvaW50IG9uIHRoZSBudW1lcmljIGtleXBhZC4gKi9cbiAgICBWS19ERUNJTUFMOiAxMTAsXG4gICAgLyoqIC8gb24gdGhlIG51bWVyaWMga2V5cGFkLiAqL1xuICAgIFZLX0RJVklERTogMTExLFxuICAgIC8qKiBGMSBrZXkuICovXG4gICAgVktfRjE6IDExMixcbiAgICAvKiogRjIga2V5LiAqL1xuICAgIFZLX0YyOiAxMTMsXG4gICAgLyoqIEYzIGtleS4gKi9cbiAgICBWS19GMzogMTE0LFxuICAgIC8qKiBGNCBrZXkuICovXG4gICAgVktfRjQ6IDExNSxcbiAgICAvKiogRjUga2V5LiAqL1xuICAgIFZLX0Y1OiAxMTYsXG4gICAgLyoqIEY2IGtleS4gKi9cbiAgICBWS19GNjogMTE3LFxuICAgIC8qKiBGNyBrZXkuICovXG4gICAgVktfRjc6IDExOCxcbiAgICAvKiogRjgga2V5LiAqL1xuICAgIFZLX0Y4OiAxMTksXG4gICAgLyoqIEY5IGtleS4gKi9cbiAgICBWS19GOTogMTIwLFxuICAgIC8qKiBGMTAga2V5LiAqL1xuICAgIFZLX0YxMDogMTIxLFxuICAgIC8qKiBGMTEga2V5LiAqL1xuICAgIFZLX0YxMTogMTIyLFxuICAgIC8qKiBGMTIga2V5LiAqL1xuICAgIFZLX0YxMjogMTIzLFxuICAgIC8qKiBGMTMga2V5LiAqL1xuICAgIFZLX0YxMzogMTI0LFxuICAgIC8qKiBGMTQga2V5LiAqL1xuICAgIFZLX0YxNDogMTI1LFxuICAgIC8qKiBGMTUga2V5LiAqL1xuICAgIFZLX0YxNTogMTI2LFxuICAgIC8qKiBGMTYga2V5LiAqL1xuICAgIFZLX0YxNjogMTI3LFxuICAgIC8qKiBGMTcga2V5LiAqL1xuICAgIFZLX0YxNzogMTI4LFxuICAgIC8qKiBGMTgga2V5LiAqL1xuICAgIFZLX0YxODogMTI5LFxuICAgIC8qKiBGMTkga2V5LiAqL1xuICAgIFZLX0YxOTogMTMwLFxuICAgIC8qKiBGMjAga2V5LiAqL1xuICAgIFZLX0YyMDogMTMxLFxuICAgIC8qKiBGMjEga2V5LiAqL1xuICAgIFZLX0YyMTogMTMyLFxuICAgIC8qKiBGMjIga2V5LiAqL1xuICAgIFZLX0YyMjogMTMzLFxuICAgIC8qKiBGMjMga2V5LiAqL1xuICAgIFZLX0YyMzogMTM0LFxuICAgIC8qKiBGMjQga2V5LiAqL1xuICAgIFZLX0YyNDogMTM1LFxuICAgIC8qKiBOdW0gTG9jayBrZXkuICovXG4gICAgVktfTlVNX0xPQ0s6IDE0NCxcbiAgICAvKiogU2Nyb2xsIExvY2sga2V5LiAqL1xuICAgIFZLX1NDUk9MTF9MT0NLOiAxNDUsXG4gICAgLyoqIENpcmN1bWZsZXggKF4pIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX0NJUkNVTUZMRVg6IDE2MCxcbiAgICAvKiogRXhjbGFtYXRpb24gKCEpIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX0VYQ0xBTUFUSU9OOiAxNjEsXG4gICAgLyoqIERvdWJsZSBxdW90ZSAoKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19ET1VCTEVfUVVPVEU6IDE2MixcbiAgICAvKiogSGFzaCAoIykga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfSEFTSDogMTYzLFxuICAgIC8qKiBEb2xsYXIgc2lnbiAoJCkga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfRE9MTEFSOiAxNjQsXG4gICAgLyoqIFBlcmNlbnQgKCUpIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX1BFUkNFTlQ6IDE2NSxcbiAgICAvKiogQW1wZXJzYW5kICgmKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19BTVBFUlNBTkQ6IDE2NixcbiAgICAvKiogVW5kZXJzY29yZSAoXykga2V5LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfVU5ERVJTQ09SRTogMTY3LFxuICAgIC8qKiBPcGVuIHBhcmVudGhlc2lzICgoKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19PUEVOX1BBUkVOOiAxNjgsXG4gICAgLyoqIENsb3NlIHBhcmVudGhlc2lzICgpKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19DTE9TRV9QQVJFTjogMTY5LFxuICAgIC8qIEFzdGVyaXNrICgqKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19BU1RFUklTSzogMTcwLFxuICAgIC8qKiBQbHVzICgrKSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19QTFVTOiAxNzEsXG4gICAgLyoqIFBpcGUgKHwpIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX1BJUEU6IDE3MixcbiAgICAvKiogSHlwaGVuLVVTL2RvY3MvTWludXMgKC0pIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX0hZUEhFTl9NSU5VUzogMTczLFxuICAgIC8qKiBPcGVuIGN1cmx5IGJyYWNrZXQgKHspIGtleS4gUmVxdWlyZXMgR2Vja28gMTUuMCAqL1xuICAgIFZLX09QRU5fQ1VSTFlfQlJBQ0tFVDogMTc0LFxuICAgIC8qKiBDbG9zZSBjdXJseSBicmFja2V0ICh9KSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19DTE9TRV9DVVJMWV9CUkFDS0VUOiAxNzUsXG4gICAgLyoqIFRpbGRlICh+KSBrZXkuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19USUxERTogMTc2LFxuICAgIC8qKiBDb21tYSAoLCkga2V5LiAqL1xuICAgIFZLX0NPTU1BOiAxODgsXG4gICAgLyoqIFBlcmlvZCAoLikga2V5LiAqL1xuICAgIFZLX1BFUklPRDogMTkwLFxuICAgIC8qKiBTbGFzaCAoLykga2V5LiAqL1xuICAgIFZLX1NMQVNIOiAxOTEsXG4gICAgLyoqIEJhY2sgdGljayAoYCkga2V5LiAqL1xuICAgIFZLX0JBQ0tfUVVPVEU6IDE5MixcbiAgICAvKiogT3BlbiBzcXVhcmUgYnJhY2tldCAoWykga2V5LiAqL1xuICAgIFZLX09QRU5fQlJBQ0tFVDogMjE5LFxuICAgIC8qKiBCYWNrIHNsYXNoIChcXCkga2V5LiAqL1xuICAgIFZLX0JBQ0tfU0xBU0g6IDIyMCxcbiAgICAvKiogQ2xvc2Ugc3F1YXJlIGJyYWNrZXQgKF0pIGtleS4gKi9cbiAgICBWS19DTE9TRV9CUkFDS0VUOiAyMjEsXG4gICAgLyoqIFF1b3RlICgnJycpIGtleS4gKi9cbiAgICBWS19RVU9URTogMjIyLFxuICAgIC8qKiBNZXRhIGtleSBvbiBMaW51eCwgQ29tbWFuZCBrZXkgb24gTWFjLiAqL1xuICAgIFZLX01FVEE6IDIyNCxcbiAgICAvKiogQWx0R3Iga2V5IG9uIExpbnV4LiBSZXF1aXJlcyBHZWNrbyAxNS4wICovXG4gICAgVktfQUxUR1I6IDIyNSxcbiAgICAvKiogV2luZG93cyBsb2dvIGtleSBvbiBXaW5kb3dzLiBPciBTdXBlciBvciBIeXBlciBrZXkgb24gTGludXguIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19XSU46IDkxLFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC4gKi9cbiAgICBWS19LQU5BOiAyMSxcbiAgICAvKiogTGludXggc3VwcG9ydCBmb3IgdGhpcyBrZXljb2RlIHdhcyBhZGRlZCBpbiBHZWNrbyA0LjAuICovXG4gICAgVktfSEFOR1VMOiAyMSxcbiAgICAvKiog6Iux5pWwIGtleSBvbiBKYXBhbmVzZSBNYWMga2V5Ym9hcmQuIFJlcXVpcmVzIEdlY2tvIDE1LjAgKi9cbiAgICBWS19FSVNVOiAyMixcbiAgICAvKiogTGludXggc3VwcG9ydCBmb3IgdGhpcyBrZXljb2RlIHdhcyBhZGRlZCBpbiBHZWNrbyA0LjAuICovXG4gICAgVktfSlVOSkE6IDIzLFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC4gKi9cbiAgICBWS19GSU5BTDogMjQsXG4gICAgLyoqIExpbnV4IHN1cHBvcnQgZm9yIHRoaXMga2V5Y29kZSB3YXMgYWRkZWQgaW4gR2Vja28gNC4wLiAqL1xuICAgIFZLX0hBTkpBOiAyNSxcbiAgICAvKiogTGludXggc3VwcG9ydCBmb3IgdGhpcyBrZXljb2RlIHdhcyBhZGRlZCBpbiBHZWNrbyA0LjAuICovXG4gICAgVktfS0FOSkk6IDI1LFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC4gKi9cbiAgICBWS19DT05WRVJUOiAyOCxcbiAgICAvKiogTGludXggc3VwcG9ydCBmb3IgdGhpcyBrZXljb2RlIHdhcyBhZGRlZCBpbiBHZWNrbyA0LjAuICovXG4gICAgVktfTk9OQ09OVkVSVDogMjksXG4gICAgLyoqIExpbnV4IHN1cHBvcnQgZm9yIHRoaXMga2V5Y29kZSB3YXMgYWRkZWQgaW4gR2Vja28gNC4wLiAqL1xuICAgIFZLX0FDQ0VQVDogMzAsXG4gICAgLyoqIExpbnV4IHN1cHBvcnQgZm9yIHRoaXMga2V5Y29kZSB3YXMgYWRkZWQgaW4gR2Vja28gNC4wLiAqL1xuICAgIFZLX01PREVDSEFOR0U6IDMxLFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC4gKi9cbiAgICBWS19TRUxFQ1Q6IDQxLFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC4gKi9cbiAgICBWS19QUklOVDogNDIsXG4gICAgLyoqIExpbnV4IHN1cHBvcnQgZm9yIHRoaXMga2V5Y29kZSB3YXMgYWRkZWQgaW4gR2Vja28gNC4wLiAqL1xuICAgIFZLX0VYRUNVVEU6IDQzLFxuICAgIC8qKiBMaW51eCBzdXBwb3J0IGZvciB0aGlzIGtleWNvZGUgd2FzIGFkZGVkIGluIEdlY2tvIDQuMC5cdCAqL1xuICAgIFZLX1NMRUVQOiA5NVxufTtcbiIsIi8qKlxuICogQGNsYXNzIEFic3RyYWN0IGRpc3BsYXkgYmFja2VuZCBtb2R1bGVcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tlbmQge1xuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpIHsgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7IH1cbn1cbiIsImltcG9ydCBCYWNrZW5kIGZyb20gXCIuL2JhY2tlbmQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9jdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgc2NoZWR1bGUoY2IpIHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTsgfVxuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuX2N0eC5jYW52YXM7IH1cbiAgICBzZXRPcHRpb25zKG9wdHMpIHtcbiAgICAgICAgc3VwZXIuc2V0T3B0aW9ucyhvcHRzKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSAob3B0cy5mb250U3R5bGUgPyBgJHtvcHRzLmZvbnRTdHlsZX0gYCA6IGBgKTtcbiAgICAgICAgY29uc3QgZm9udCA9IGAke3N0eWxlfSAke29wdHMuZm9udFNpemV9cHggJHtvcHRzLmZvbnRGYW1pbHl9YDtcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gZm9udDtcbiAgICAgICAgdGhpcy5fY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHRoaXMuX29wdGlvbnMuYmc7XG4gICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdCgwLCAwLCB0aGlzLl9jdHguY2FudmFzLndpZHRoLCB0aGlzLl9jdHguY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIGV2ZW50VG9Qb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jdHguY2FudmFzO1xuICAgICAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgeCAtPSByZWN0LmxlZnQ7XG4gICAgICAgIHkgLT0gcmVjdC50b3A7XG4gICAgICAgIHggKj0gY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgeSAqPSBjYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID49IGNhbnZhcy53aWR0aCB8fCB5ID49IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIC0xXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEV2ZW50VG9Qb3NpdGlvbih4LCB5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSGV4IGZyb20gXCIuL2hleC5qc1wiO1xuaW1wb3J0IFJlY3QgZnJvbSBcIi4vcmVjdC5qc1wiO1xuaW1wb3J0IFRpbGUgZnJvbSBcIi4vdGlsZS5qc1wiO1xuaW1wb3J0IFRpbGVHTCBmcm9tIFwiLi90aWxlLWdsLmpzXCI7XG5pbXBvcnQgVGVybSBmcm9tIFwiLi90ZXJtLmpzXCI7XG5pbXBvcnQgKiBhcyBUZXh0IGZyb20gXCIuLi90ZXh0LmpzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1dJRFRILCBERUZBVUxUX0hFSUdIVCB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmNvbnN0IEJBQ0tFTkRTID0ge1xuICAgIFwiaGV4XCI6IEhleCxcbiAgICBcInJlY3RcIjogUmVjdCxcbiAgICBcInRpbGVcIjogVGlsZSxcbiAgICBcInRpbGUtZ2xcIjogVGlsZUdMLFxuICAgIFwidGVybVwiOiBUZXJtXG59O1xuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIHdpZHRoOiBERUZBVUxUX1dJRFRILFxuICAgIGhlaWdodDogREVGQVVMVF9IRUlHSFQsXG4gICAgdHJhbnNwb3NlOiBmYWxzZSxcbiAgICBsYXlvdXQ6IFwicmVjdFwiLFxuICAgIGZvbnRTaXplOiAxNSxcbiAgICBzcGFjaW5nOiAxLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb3JjZVNxdWFyZVJhdGlvOiBmYWxzZSxcbiAgICBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLFxuICAgIGZvbnRTdHlsZTogXCJcIixcbiAgICBmZzogXCIjY2NjXCIsXG4gICAgYmc6IFwiIzAwMFwiLFxuICAgIHRpbGVXaWR0aDogMzIsXG4gICAgdGlsZUhlaWdodDogMzIsXG4gICAgdGlsZU1hcDoge30sXG4gICAgdGlsZVNldDogbnVsbCxcbiAgICB0aWxlQ29sb3JpemU6IGZhbHNlXG59O1xuLyoqXG4gKiBAY2xhc3MgVmlzdWFsIG1hcCBkaXNwbGF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7IC8vIGZhbHNlID0gbm90aGluZywgdHJ1ZSA9IGFsbCwgb2JqZWN0ID0gZGlydHkgY2VsbHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLkRFQlVHID0gdGhpcy5ERUJVRy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl90aWNrID0gdGhpcy5fdGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9iYWNrZW5kLnNjaGVkdWxlKHRoaXMuX3RpY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWJ1ZyBoZWxwZXIsIGlkZWFsIGFzIGEgbWFwIGdlbmVyYXRvciBjYWxsYmFjay4gQWx3YXlzIGJvdW5kIHRvIHRoaXMuXG4gICAgICogQHBhcmFtIHtpbnR9IHhcbiAgICAgKiBAcGFyYW0ge2ludH0geVxuICAgICAqIEBwYXJhbSB7aW50fSB3aGF0XG4gICAgICovXG4gICAgREVCVUcoeCwgeSwgd2hhdCkge1xuICAgICAgICBsZXQgY29sb3JzID0gW3RoaXMuX29wdGlvbnMuYmcsIHRoaXMuX29wdGlvbnMuZmddO1xuICAgICAgICB0aGlzLmRyYXcoeCwgeSwgbnVsbCwgbnVsbCwgY29sb3JzW3doYXQgJSBjb2xvcnMubGVuZ3RoXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSB3aG9sZSBkaXNwbGF5IChjb3ZlciBpdCB3aXRoIGJhY2tncm91bmQgY29sb3IpXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIFJPVC5EaXNwbGF5XG4gICAgICovXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLndpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0IHx8IG9wdGlvbnMuZm9udFNpemUgfHwgb3B0aW9ucy5mb250RmFtaWx5IHx8IG9wdGlvbnMuc3BhY2luZyB8fCBvcHRpb25zLmxheW91dCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGN0b3IgPSBCQUNLRU5EU1tvcHRpb25zLmxheW91dF07XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2VuZCA9IG5ldyBjdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iYWNrZW5kLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgY3VycmVudGx5IHNldCBvcHRpb25zXG4gICAgICovXG4gICAgZ2V0T3B0aW9ucygpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBET00gbm9kZSBvZiB0aGlzIGRpc3BsYXlcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLl9iYWNrZW5kLmdldENvbnRhaW5lcigpOyB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgbWF4aW11bSB3aWR0aC9oZWlnaHQgdG8gZml0IGludG8gYSBzZXQgb2YgZ2l2ZW4gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2ludH0gYXZhaWxXaWR0aCBNYXhpbXVtIGFsbG93ZWQgcGl4ZWwgd2lkdGhcbiAgICAgKiBAcGFyYW0ge2ludH0gYXZhaWxIZWlnaHQgTWF4aW11bSBhbGxvd2VkIHBpeGVsIGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtpbnRbMl19IGNlbGxXaWR0aCxjZWxsSGVpZ2h0XG4gICAgICovXG4gICAgY29tcHV0ZVNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tlbmQuY29tcHV0ZVNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXhpbXVtIGZvbnQgc2l6ZSB0byBmaXQgaW50byBhIHNldCBvZiBnaXZlbiBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7aW50fSBhdmFpbFdpZHRoIE1heGltdW0gYWxsb3dlZCBwaXhlbCB3aWR0aFxuICAgICAqIEBwYXJhbSB7aW50fSBhdmFpbEhlaWdodCBNYXhpbXVtIGFsbG93ZWQgcGl4ZWwgaGVpZ2h0XG4gICAgICogQHJldHVybnMge2ludH0gZm9udFNpemVcbiAgICAgKi9cbiAgICBjb21wdXRlRm9udFNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tlbmQuY29tcHV0ZUZvbnRTaXplKGF2YWlsV2lkdGgsIGF2YWlsSGVpZ2h0KTtcbiAgICB9XG4gICAgY29tcHV0ZVRpbGVTaXplKGF2YWlsV2lkdGgsIGF2YWlsSGVpZ2h0KSB7XG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoYXZhaWxXaWR0aCAvIHRoaXMuX29wdGlvbnMud2lkdGgpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5mbG9vcihhdmFpbEhlaWdodCAvIHRoaXMuX29wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIERPTSBldmVudCAobW91c2Ugb3IgdG91Y2gpIHRvIG1hcCBjb29yZGluYXRlcy4gVXNlcyBmaXJzdCB0b3VjaCBmb3IgbXVsdGktdG91Y2guXG4gICAgICogQHBhcmFtIHtFdmVudH0gZSBldmVudFxuICAgICAqIEByZXR1cm5zIHtpbnRbMl19IC0xIGZvciB2YWx1ZXMgb3V0c2lkZSBvZiB0aGUgY2FudmFzXG4gICAgICovXG4gICAgZXZlbnRUb1Bvc2l0aW9uKGUpIHtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIGlmIChcInRvdWNoZXNcIiBpbiBlKSB7XG4gICAgICAgICAgICB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4ID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgeSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYmFja2VuZC5ldmVudFRvUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW50fSB4XG4gICAgICogQHBhcmFtIHtpbnR9IHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8fCBzdHJpbmdbXX0gY2ggT25lIG9yIG1vcmUgY2hhcnMgKHdpbGwgYmUgb3ZlcmxhcHBpbmcgdGhlbXNlbHZlcylcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZnXSBmb3JlZ3JvdW5kIGNvbG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtiZ10gYmFja2dyb3VuZCBjb2xvclxuICAgICAqL1xuICAgIGRyYXcoeCwgeSwgY2gsIGZnLCBiZykge1xuICAgICAgICBpZiAoIWZnKSB7XG4gICAgICAgICAgICBmZyA9IHRoaXMuX29wdGlvbnMuZmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFiZykge1xuICAgICAgICAgICAgYmcgPSB0aGlzLl9vcHRpb25zLmJnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXkgPSBgJHt4fSwke3l9YDtcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gW3gsIHksIGNoLCBmZywgYmddO1xuICAgICAgICBpZiAodGhpcy5fZGlydHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyB3aWxsIGFscmVhZHkgcmVkcmF3IGV2ZXJ5dGhpbmcgXG4gICAgICAgIGlmICghdGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0ge307XG4gICAgICAgIH0gLy8gZmlyc3QhXG4gICAgICAgIHRoaXMuX2RpcnR5W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3cyBhIHRleHQgYXQgZ2l2ZW4gcG9zaXRpb24uIE9wdGlvbmFsbHkgd3JhcHMgYXQgYSBtYXhpbXVtIGxlbmd0aC4gQ3VycmVudGx5IGRvZXMgbm90IHdvcmsgd2l0aCBoZXggbGF5b3V0LlxuICAgICAqIEBwYXJhbSB7aW50fSB4XG4gICAgICogQHBhcmFtIHtpbnR9IHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBNYXkgY29udGFpbiBjb2xvci9iYWNrZ3JvdW5kIGZvcm1hdCBzcGVjaWZpZXJzLCAlY3tuYW1lfS8lYntuYW1lfSwgYm90aCBvcHRpb25hbC4gJWN7fS8lYnt9IHJlc2V0cyB0byBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB7aW50fSBbbWF4V2lkdGhdIHdyYXAgYXQgd2hhdCB3aWR0aD9cbiAgICAgKiBAcmV0dXJucyB7aW50fSBsaW5lcyBkcmF3blxuICAgICAqL1xuICAgIGRyYXdUZXh0KHgsIHksIHRleHQsIG1heFdpZHRoKSB7XG4gICAgICAgIGxldCBmZyA9IG51bGw7XG4gICAgICAgIGxldCBiZyA9IG51bGw7XG4gICAgICAgIGxldCBjeCA9IHg7XG4gICAgICAgIGxldCBjeSA9IHk7XG4gICAgICAgIGxldCBsaW5lcyA9IDE7XG4gICAgICAgIGlmICghbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIG1heFdpZHRoID0gdGhpcy5fb3B0aW9ucy53aWR0aCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRva2VucyA9IFRleHQudG9rZW5pemUodGV4dCwgbWF4V2lkdGgpO1xuICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkgeyAvLyBpbnRlcnByZXQgdG9rZW5pemVkIG9wY29kZSBzdHJlYW1cbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0LlRZUEVfVEVYVDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3BhY2UgPSBmYWxzZSwgaXNQcmV2U3BhY2UgPSBmYWxzZSwgaXNGdWxsV2lkdGggPSBmYWxzZSwgaXNQcmV2RnVsbFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4udmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYyA9IHRva2VuLnZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHRva2VuLnZhbHVlLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBgdHJ1ZWAgd2hlbiB0aGUgY3VycmVudCBjaGFyIGlzIGZ1bGwtd2lkdGguXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bGxXaWR0aCA9IChjYyA+IDB4ZmYwMCAmJiBjYyA8IDB4ZmY2MSkgfHwgKGNjID4gMHhmZmRjICYmIGNjIDwgMHhmZmU4KSB8fCBjYyA+IDB4ZmZlZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgY2hhciBpcyBzcGFjZSwgd2hhdGV2ZXIgZnVsbC13aWR0aCBvciBoYWxmLXdpZHRoIGJvdGggYXJlIE9LLlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTcGFjZSA9IChjLmNoYXJDb2RlQXQoMCkgPT0gMHgyMCB8fCBjLmNoYXJDb2RlQXQoMCkgPT0gMHgzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBwcmV2aW91cyBjaGFyIGlzIGZ1bGwtd2lkdGggYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGNoYXIgaXMgbmV0aGVyIGhhbGYtd2lkdGggbm9yIGEgc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcmV2RnVsbFdpZHRoICYmICFpc0Z1bGxXaWR0aCAmJiAhaXNTcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IC8vIGFkZCBhbiBleHRyYSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgY2hhciBpcyBmdWxsLXdpZHRoIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHByZXZpb3VzIGNoYXIgaXMgbm90IGEgc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdWxsV2lkdGggJiYgIWlzUHJldlNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3grKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLy8gYWRkIGFuIGV4dHJhIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoY3grKywgY3ksIGMsIGZnLCBiZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByZXZTcGFjZSA9IGlzU3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByZXZGdWxsV2lkdGggPSBpc0Z1bGxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRleHQuVFlQRV9GRzpcbiAgICAgICAgICAgICAgICAgICAgZmcgPSB0b2tlbi52YWx1ZSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRleHQuVFlQRV9CRzpcbiAgICAgICAgICAgICAgICAgICAgYmcgPSB0b2tlbi52YWx1ZSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRleHQuVFlQRV9ORVdMSU5FOlxuICAgICAgICAgICAgICAgICAgICBjeCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGN5Kys7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGltZXIgdGljazogdXBkYXRlIGRpcnR5IHBhcnRzXG4gICAgICovXG4gICAgX3RpY2soKSB7XG4gICAgICAgIHRoaXMuX2JhY2tlbmQuc2NoZWR1bGUodGhpcy5fdGljayk7XG4gICAgICAgIGlmICghdGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGlydHkgPT09IHRydWUpIHsgLy8gZHJhdyBhbGxcbiAgICAgICAgICAgIHRoaXMuX2JhY2tlbmQuY2xlYXIoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3KGlkLCBmYWxzZSk7XG4gICAgICAgICAgICB9IC8vIHJlZHJhdyBjYWNoZWQgZGF0YSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gZHJhdyBvbmx5IGRpcnR5IFxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2RpcnR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhdyhrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgV2hhdCB0byBkcmF3XG4gICAgICogQHBhcmFtIHtib29sfSBjbGVhckJlZm9yZSBJcyBpdCBuZWNlc3NhcnkgdG8gY2xlYW4gYmVmb3JlP1xuICAgICAqL1xuICAgIF9kcmF3KGtleSwgY2xlYXJCZWZvcmUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhW2tleV07XG4gICAgICAgIGlmIChkYXRhWzRdICE9IHRoaXMuX29wdGlvbnMuYmcpIHtcbiAgICAgICAgICAgIGNsZWFyQmVmb3JlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iYWNrZW5kLmRyYXcoZGF0YSwgY2xlYXJCZWZvcmUpO1xuICAgIH1cbn1cbkRpc3BsYXkuUmVjdCA9IFJlY3Q7XG5EaXNwbGF5LkhleCA9IEhleDtcbkRpc3BsYXkuVGlsZSA9IFRpbGU7XG5EaXNwbGF5LlRpbGVHTCA9IFRpbGVHTDtcbkRpc3BsYXkuVGVybSA9IFRlcm07XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL2NhbnZhcy5qc1wiO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSBcIi4uL3V0aWwuanNcIjtcbi8qKlxuICogQGNsYXNzIEhleGFnb25hbCBiYWNrZW5kXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXggZXh0ZW5kcyBDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zcGFjaW5nWCA9IDA7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZID0gMDtcbiAgICAgICAgdGhpcy5faGV4U2l6ZSA9IDA7XG4gICAgfVxuICAgIGRyYXcoZGF0YSwgY2xlYXJCZWZvcmUpIHtcbiAgICAgICAgbGV0IFt4LCB5LCBjaCwgZmcsIGJnXSA9IGRhdGE7XG4gICAgICAgIGxldCBweCA9IFtcbiAgICAgICAgICAgICh4ICsgMSkgKiB0aGlzLl9zcGFjaW5nWCxcbiAgICAgICAgICAgIHkgKiB0aGlzLl9zcGFjaW5nWSArIHRoaXMuX2hleFNpemVcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhbnNwb3NlKSB7XG4gICAgICAgICAgICBweC5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsZWFyQmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gYmc7XG4gICAgICAgICAgICB0aGlzLl9maWxsKHB4WzBdLCBweFsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBmZztcbiAgICAgICAgbGV0IGNoYXJzID0gW10uY29uY2F0KGNoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KGNoYXJzW2ldLCBweFswXSwgTWF0aC5jZWlsKHB4WzFdKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZVNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhbnNwb3NlKSB7XG4gICAgICAgICAgICBhdmFpbFdpZHRoICs9IGF2YWlsSGVpZ2h0O1xuICAgICAgICAgICAgYXZhaWxIZWlnaHQgPSBhdmFpbFdpZHRoIC0gYXZhaWxIZWlnaHQ7XG4gICAgICAgICAgICBhdmFpbFdpZHRoIC09IGF2YWlsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoYXZhaWxXaWR0aCAvIHRoaXMuX3NwYWNpbmdYKSAtIDE7XG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKChhdmFpbEhlaWdodCAtIDIgKiB0aGlzLl9oZXhTaXplKSAvIHRoaXMuX3NwYWNpbmdZICsgMSk7XG4gICAgICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gICAgfVxuICAgIGNvbXB1dGVGb250U2l6ZShhdmFpbFdpZHRoLCBhdmFpbEhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50cmFuc3Bvc2UpIHtcbiAgICAgICAgICAgIGF2YWlsV2lkdGggKz0gYXZhaWxIZWlnaHQ7XG4gICAgICAgICAgICBhdmFpbEhlaWdodCA9IGF2YWlsV2lkdGggLSBhdmFpbEhlaWdodDtcbiAgICAgICAgICAgIGF2YWlsV2lkdGggLT0gYXZhaWxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhleFNpemVXaWR0aCA9IDIgKiBhdmFpbFdpZHRoIC8gKCh0aGlzLl9vcHRpb25zLndpZHRoICsgMSkgKiBNYXRoLnNxcnQoMykpIC0gMTtcbiAgICAgICAgbGV0IGhleFNpemVIZWlnaHQgPSBhdmFpbEhlaWdodCAvICgyICsgMS41ICogKHRoaXMuX29wdGlvbnMuaGVpZ2h0IC0gMSkpO1xuICAgICAgICBsZXQgaGV4U2l6ZSA9IE1hdGgubWluKGhleFNpemVXaWR0aCwgaGV4U2l6ZUhlaWdodCk7XG4gICAgICAgIC8vIGNvbXB1dGUgY2hhciByYXRpb1xuICAgICAgICBsZXQgb2xkRm9udCA9IHRoaXMuX2N0eC5mb250O1xuICAgICAgICB0aGlzLl9jdHguZm9udCA9IFwiMTAwcHggXCIgKyB0aGlzLl9vcHRpb25zLmZvbnRGYW1pbHk7XG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGguY2VpbCh0aGlzLl9jdHgubWVhc3VyZVRleHQoXCJXXCIpLndpZHRoKTtcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSBvbGRGb250O1xuICAgICAgICBsZXQgcmF0aW8gPSB3aWR0aCAvIDEwMDtcbiAgICAgICAgaGV4U2l6ZSA9IE1hdGguZmxvb3IoaGV4U2l6ZSkgKyAxOyAvLyBjbG9zZXN0IGxhcmdlciBoZXhTaXplXG4gICAgICAgIC8vIEZJWE1FIGNoYXIgc2l6ZSBjb21wdXRhdGlvbiBkb2VzIG5vdCByZXNwZWN0IHRyYW5zcG9zZWQgaGV4ZXNcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMiAqIGhleFNpemUgLyAodGhpcy5fb3B0aW9ucy5zcGFjaW5nICogKDEgKyByYXRpbyAvIE1hdGguc3FydCgzKSkpO1xuICAgICAgICAvLyBjbG9zZXN0IHNtYWxsZXIgZm9udFNpemVcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChmb250U2l6ZSkgLSAxO1xuICAgIH1cbiAgICBfbm9ybWFsaXplZEV2ZW50VG9Qb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIGxldCBub2RlU2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhbnNwb3NlKSB7XG4gICAgICAgICAgICB4ICs9IHk7XG4gICAgICAgICAgICB5ID0geCAtIHk7XG4gICAgICAgICAgICB4IC09IHk7XG4gICAgICAgICAgICBub2RlU2l6ZSA9IHRoaXMuX2N0eC5jYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlU2l6ZSA9IHRoaXMuX2N0eC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gbm9kZVNpemUgLyB0aGlzLl9vcHRpb25zLmhlaWdodDtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSAvIHNpemUpO1xuICAgICAgICBpZiAobW9kKHksIDIpKSB7IC8qIG9kZCByb3cgKi9cbiAgICAgICAgICAgIHggLT0gdGhpcy5fc3BhY2luZ1g7XG4gICAgICAgICAgICB4ID0gMSArIDIgKiBNYXRoLmZsb29yKHggLyAoMiAqIHRoaXMuX3NwYWNpbmdYKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4ID0gMiAqIE1hdGguZmxvb3IoeCAvICgyICogdGhpcy5fc3BhY2luZ1gpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcmd1bWVudHMgYXJlIHBpeGVsIHZhbHVlcy4gSWYgXCJ0cmFuc3Bvc2VkXCIgbW9kZSBpcyBlbmFibGVkLCB0aGVuIHRoZXNlIHR3byBhcmUgYWxyZWFkeSBzd2FwcGVkLlxuICAgICAqL1xuICAgIF9maWxsKGN4LCBjeSkge1xuICAgICAgICBsZXQgYSA9IHRoaXMuX2hleFNpemU7XG4gICAgICAgIGxldCBiID0gdGhpcy5fb3B0aW9ucy5ib3JkZXI7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50cmFuc3Bvc2UpIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oY3ggLSBhICsgYiwgY3kpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCAtIGEgLyAyICsgYiwgY3kgKyB0aGlzLl9zcGFjaW5nWCAtIGIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCArIGEgLyAyIC0gYiwgY3kgKyB0aGlzLl9zcGFjaW5nWCAtIGIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCArIGEgLSBiLCBjeSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4ICsgYSAvIDIgLSBiLCBjeSAtIHRoaXMuX3NwYWNpbmdYICsgYik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4IC0gYSAvIDIgKyBiLCBjeSAtIHRoaXMuX3NwYWNpbmdYICsgYik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4IC0gYSArIGIsIGN5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oY3gsIGN5IC0gYSArIGIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHRoaXMuX3NwYWNpbmdYIC0gYiwgY3kgLSBhIC8gMiArIGIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHRoaXMuX3NwYWNpbmdYIC0gYiwgY3kgKyBhIC8gMiAtIGIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhjeCwgY3kgKyBhIC0gYik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4IC0gdGhpcy5fc3BhY2luZ1ggKyBiLCBjeSArIGEgLyAyIC0gYik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4IC0gdGhpcy5fc3BhY2luZ1ggKyBiLCBjeSAtIGEgLyAyICsgYik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGN4LCBjeSAtIGEgKyBiKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBfdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIGNvbnN0IGNoYXJXaWR0aCA9IE1hdGguY2VpbCh0aGlzLl9jdHgubWVhc3VyZVRleHQoXCJXXCIpLndpZHRoKTtcbiAgICAgICAgdGhpcy5faGV4U2l6ZSA9IE1hdGguZmxvb3Iob3B0cy5zcGFjaW5nICogKG9wdHMuZm9udFNpemUgKyBjaGFyV2lkdGggLyBNYXRoLnNxcnQoMykpIC8gMik7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdYID0gdGhpcy5faGV4U2l6ZSAqIE1hdGguc3FydCgzKSAvIDI7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZID0gdGhpcy5faGV4U2l6ZSAqIDEuNTtcbiAgICAgICAgbGV0IHhwcm9wO1xuICAgICAgICBsZXQgeXByb3A7XG4gICAgICAgIGlmIChvcHRzLnRyYW5zcG9zZSkge1xuICAgICAgICAgICAgeHByb3AgPSBcImhlaWdodFwiO1xuICAgICAgICAgICAgeXByb3AgPSBcIndpZHRoXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4cHJvcCA9IFwid2lkdGhcIjtcbiAgICAgICAgICAgIHlwcm9wID0gXCJoZWlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdHguY2FudmFzW3hwcm9wXSA9IE1hdGguY2VpbCgob3B0cy53aWR0aCArIDEpICogdGhpcy5fc3BhY2luZ1gpO1xuICAgICAgICB0aGlzLl9jdHguY2FudmFzW3lwcm9wXSA9IE1hdGguY2VpbCgob3B0cy5oZWlnaHQgLSAxKSAqIHRoaXMuX3NwYWNpbmdZICsgMiAqIHRoaXMuX2hleFNpemUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vY2FudmFzLmpzXCI7XG4vKipcbiAqIEBjbGFzcyBSZWN0YW5ndWxhciBiYWNrZW5kXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IGV4dGVuZHMgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1ggPSAwO1xuICAgICAgICB0aGlzLl9zcGFjaW5nWSA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc0NhY2hlID0ge307XG4gICAgfVxuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9jYW52YXNDYWNoZSA9IHt9O1xuICAgIH1cbiAgICBkcmF3KGRhdGEsIGNsZWFyQmVmb3JlKSB7XG4gICAgICAgIGlmIChSZWN0LmNhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3V2l0aENhY2hlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZHJhd05vQ2FjaGUoZGF0YSwgY2xlYXJCZWZvcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9kcmF3V2l0aENhY2hlKGRhdGEpIHtcbiAgICAgICAgbGV0IFt4LCB5LCBjaCwgZmcsIGJnXSA9IGRhdGE7XG4gICAgICAgIGxldCBoYXNoID0gXCJcIiArIGNoICsgZmcgKyBiZztcbiAgICAgICAgbGV0IGNhbnZhcztcbiAgICAgICAgaWYgKGhhc2ggaW4gdGhpcy5fY2FudmFzQ2FjaGUpIHtcbiAgICAgICAgICAgIGNhbnZhcyA9IHRoaXMuX2NhbnZhc0NhY2hlW2hhc2hdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLl9vcHRpb25zLmJvcmRlcjtcbiAgICAgICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuX3NwYWNpbmdYO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuX3NwYWNpbmdZO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGIsIGIsIGNhbnZhcy53aWR0aCAtIGIsIGNhbnZhcy5oZWlnaHQgLSBiKTtcbiAgICAgICAgICAgIGlmIChjaCkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBmZztcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IHRoaXMuX2N0eC5mb250O1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgICAgIGxldCBjaGFycyA9IFtdLmNvbmNhdChjaCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoY2hhcnNbaV0sIHRoaXMuX3NwYWNpbmdYIC8gMiwgTWF0aC5jZWlsKHRoaXMuX3NwYWNpbmdZIC8gMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NhY2hlW2hhc2hdID0gY2FudmFzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UoY2FudmFzLCB4ICogdGhpcy5fc3BhY2luZ1gsIHkgKiB0aGlzLl9zcGFjaW5nWSk7XG4gICAgfVxuICAgIF9kcmF3Tm9DYWNoZShkYXRhLCBjbGVhckJlZm9yZSkge1xuICAgICAgICBsZXQgW3gsIHksIGNoLCBmZywgYmddID0gZGF0YTtcbiAgICAgICAgaWYgKGNsZWFyQmVmb3JlKSB7XG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMuX29wdGlvbnMuYm9yZGVyO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGJnO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxSZWN0KHggKiB0aGlzLl9zcGFjaW5nWCArIGIsIHkgKiB0aGlzLl9zcGFjaW5nWSArIGIsIHRoaXMuX3NwYWNpbmdYIC0gYiwgdGhpcy5fc3BhY2luZ1kgLSBiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGZnO1xuICAgICAgICBsZXQgY2hhcnMgPSBbXS5jb25jYXQoY2gpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQoY2hhcnNbaV0sICh4ICsgMC41KSAqIHRoaXMuX3NwYWNpbmdYLCBNYXRoLmNlaWwoKHkgKyAwLjUpICogdGhpcy5fc3BhY2luZ1kpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlU2l6ZShhdmFpbFdpZHRoLCBhdmFpbEhlaWdodCkge1xuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKGF2YWlsV2lkdGggLyB0aGlzLl9zcGFjaW5nWCk7XG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKGF2YWlsSGVpZ2h0IC8gdGhpcy5fc3BhY2luZ1kpO1xuICAgICAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICAgIH1cbiAgICBjb21wdXRlRm9udFNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpIHtcbiAgICAgICAgbGV0IGJveFdpZHRoID0gTWF0aC5mbG9vcihhdmFpbFdpZHRoIC8gdGhpcy5fb3B0aW9ucy53aWR0aCk7XG4gICAgICAgIGxldCBib3hIZWlnaHQgPSBNYXRoLmZsb29yKGF2YWlsSGVpZ2h0IC8gdGhpcy5fb3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICAvKiBjb21wdXRlIGNoYXIgcmF0aW8gKi9cbiAgICAgICAgbGV0IG9sZEZvbnQgPSB0aGlzLl9jdHguZm9udDtcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSBcIjEwMHB4IFwiICsgdGhpcy5fb3B0aW9ucy5mb250RmFtaWx5O1xuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmNlaWwodGhpcy5fY3R4Lm1lYXN1cmVUZXh0KFwiV1wiKS53aWR0aCk7XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gb2xkRm9udDtcbiAgICAgICAgbGV0IHJhdGlvID0gd2lkdGggLyAxMDA7XG4gICAgICAgIGxldCB3aWR0aEZyYWN0aW9uID0gcmF0aW8gKiBib3hIZWlnaHQgLyBib3hXaWR0aDtcbiAgICAgICAgaWYgKHdpZHRoRnJhY3Rpb24gPiAxKSB7IC8qIHRvbyB3aWRlIHdpdGggY3VycmVudCBhc3BlY3QgcmF0aW8gKi9cbiAgICAgICAgICAgIGJveEhlaWdodCA9IE1hdGguZmxvb3IoYm94SGVpZ2h0IC8gd2lkdGhGcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYm94SGVpZ2h0IC8gdGhpcy5fb3B0aW9ucy5zcGFjaW5nKTtcbiAgICB9XG4gICAgX25vcm1hbGl6ZWRFdmVudFRvUG9zaXRpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoeCAvIHRoaXMuX3NwYWNpbmdYKSwgTWF0aC5mbG9vcih5IC8gdGhpcy5fc3BhY2luZ1kpXTtcbiAgICB9XG4gICAgX3VwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLl9vcHRpb25zO1xuICAgICAgICBjb25zdCBjaGFyV2lkdGggPSBNYXRoLmNlaWwodGhpcy5fY3R4Lm1lYXN1cmVUZXh0KFwiV1wiKS53aWR0aCk7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdYID0gTWF0aC5jZWlsKG9wdHMuc3BhY2luZyAqIGNoYXJXaWR0aCk7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZID0gTWF0aC5jZWlsKG9wdHMuc3BhY2luZyAqIG9wdHMuZm9udFNpemUpO1xuICAgICAgICBpZiAob3B0cy5mb3JjZVNxdWFyZVJhdGlvKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGFjaW5nWCA9IHRoaXMuX3NwYWNpbmdZID0gTWF0aC5tYXgodGhpcy5fc3BhY2luZ1gsIHRoaXMuX3NwYWNpbmdZKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdHguY2FudmFzLndpZHRoID0gb3B0cy53aWR0aCAqIHRoaXMuX3NwYWNpbmdYO1xuICAgICAgICB0aGlzLl9jdHguY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0ICogdGhpcy5fc3BhY2luZ1k7XG4gICAgfVxufVxuUmVjdC5jYWNoZSA9IGZhbHNlO1xuIiwiaW1wb3J0IEJhY2tlbmQgZnJvbSBcIi4vYmFja2VuZC5qc1wiO1xuaW1wb3J0ICogYXMgQ29sb3IgZnJvbSBcIi4uL2NvbG9yLmpzXCI7XG5mdW5jdGlvbiBjbGVhclRvQW5zaShiZykge1xuICAgIHJldHVybiBgXFx4MWJbMDs0ODs1OyR7dGVybWNvbG9yKGJnKX1tXFx4MWJbMkpgO1xufVxuZnVuY3Rpb24gY29sb3JUb0Fuc2koZmcsIGJnKSB7XG4gICAgcmV0dXJuIGBcXHgxYlswOzM4OzU7JHt0ZXJtY29sb3IoZmcpfTs0ODs1OyR7dGVybWNvbG9yKGJnKX1tYDtcbn1cbmZ1bmN0aW9uIHBvc2l0aW9uVG9BbnNpKHgsIHkpIHtcbiAgICByZXR1cm4gYFxceDFiWyR7eSArIDF9OyR7eCArIDF9SGA7XG59XG5mdW5jdGlvbiB0ZXJtY29sb3IoY29sb3IpIHtcbiAgICBjb25zdCBTUkNfQ09MT1JTID0gMjU2LjA7XG4gICAgY29uc3QgRFNUX0NPTE9SUyA9IDYuMDtcbiAgICBjb25zdCBDT0xPUl9SQVRJTyA9IERTVF9DT0xPUlMgLyBTUkNfQ09MT1JTO1xuICAgIGxldCByZ2IgPSBDb2xvci5mcm9tU3RyaW5nKGNvbG9yKTtcbiAgICBsZXQgciA9IE1hdGguZmxvb3IocmdiWzBdICogQ09MT1JfUkFUSU8pO1xuICAgIGxldCBnID0gTWF0aC5mbG9vcihyZ2JbMV0gKiBDT0xPUl9SQVRJTyk7XG4gICAgbGV0IGIgPSBNYXRoLmZsb29yKHJnYlsyXSAqIENPTE9SX1JBVElPKTtcbiAgICByZXR1cm4gciAqIDM2ICsgZyAqIDYgKyBiICogMSArIDE2O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybSBleHRlbmRzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSBbMCwgMF07XG4gICAgICAgIHRoaXMuX2N1cnNvciA9IFstMSwgLTFdO1xuICAgICAgICB0aGlzLl9sYXN0Q29sb3IgPSBcIlwiO1xuICAgIH1cbiAgICBzY2hlZHVsZShjYikgeyBzZXRUaW1lb3V0KGNiLCAxMDAwIC8gNjApOyB9XG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGxldCBzaXplID0gW29wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0XTtcbiAgICAgICAgbGV0IGF2YWlsID0gdGhpcy5jb21wdXRlU2l6ZSgpO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSBhdmFpbC5tYXAoKHZhbCwgaW5kZXgpID0+IE1hdGguZmxvb3IoKHZhbCAtIHNpemVbaW5kZXhdKSAvIDIpKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNsZWFyVG9BbnNpKHRoaXMuX29wdGlvbnMuYmcpKTtcbiAgICB9XG4gICAgZHJhdyhkYXRhLCBjbGVhckJlZm9yZSkge1xuICAgICAgICAvLyBkZXRlcm1pbmUgd2hlcmUgdG8gZHJhdyB3aGF0IHdpdGggd2hhdCBjb2xvcnNcbiAgICAgICAgbGV0IFt4LCB5LCBjaCwgZmcsIGJnXSA9IGRhdGE7XG4gICAgICAgIC8vIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIG1vdmUgdGhlIHRlcm1pbmFsIGN1cnNvclxuICAgICAgICBsZXQgZHggPSB0aGlzLl9vZmZzZXRbMF0gKyB4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLl9vZmZzZXRbMV0gKyB5O1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY29tcHV0ZVNpemUoKTtcbiAgICAgICAgaWYgKGR4IDwgMCB8fCBkeCA+PSBzaXplWzBdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR5IDwgMCB8fCBkeSA+PSBzaXplWzFdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR4ICE9PSB0aGlzLl9jdXJzb3JbMF0gfHwgZHkgIT09IHRoaXMuX2N1cnNvclsxXSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocG9zaXRpb25Ub0Fuc2koZHgsIGR5KSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJzb3JbMF0gPSBkeDtcbiAgICAgICAgICAgIHRoaXMuX2N1cnNvclsxXSA9IGR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlcm1pbmFscyBhdXRvbWF0aWNhbGx5IGNsZWFyLCBidXQgaWYgd2UncmUgY2xlYXJpbmcgd2hlbiB3ZSdyZVxuICAgICAgICAvLyBub3Qgb3RoZXJ3aXNlIHByb3ZpZGVkIHdpdGggYSBjaGFyYWN0ZXIsIGp1c3QgdXNlIGEgc3BhY2UgaW5zdGVhZFxuICAgICAgICBpZiAoY2xlYXJCZWZvcmUpIHtcbiAgICAgICAgICAgIGlmICghY2gpIHtcbiAgICAgICAgICAgICAgICBjaCA9IFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlJ3JlIG5vdCBjbGVhcmluZyBhbmQgbm90IHByb3ZpZGVkIHdpdGggYSBjaGFyYWN0ZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCFjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIGNoYW5nZSBjb2xvcnNcbiAgICAgICAgbGV0IG5ld0NvbG9yID0gY29sb3JUb0Fuc2koZmcsIGJnKTtcbiAgICAgICAgaWYgKG5ld0NvbG9yICE9PSB0aGlzLl9sYXN0Q29sb3IpIHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ld0NvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RDb2xvciA9IG5ld0NvbG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdyaXRlIHRoZSBwcm92aWRlZCBzeW1ib2wgdG8gdGhlIGRpc3BsYXlcbiAgICAgICAgbGV0IGNoYXJzID0gW10uY29uY2F0KGNoKTtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoY2hhcnNbMF0pO1xuICAgICAgICAvLyB1cGRhdGUgb3VyIHBvc2l0aW9uLCBnaXZlbiB0aGF0IHdlIHdyb3RlIGEgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuX2N1cnNvclswXSsrO1xuICAgICAgICBpZiAodGhpcy5fY3Vyc29yWzBdID49IHNpemVbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnNvclswXSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9jdXJzb3JbMV0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlRm9udFNpemUoKSB7IHRocm93IG5ldyBFcnJvcihcIlRlcm1pbmFsIGJhY2tlbmQgaGFzIG5vIG5vdGlvbiBvZiBmb250IHNpemVcIik7IH1cbiAgICBldmVudFRvUG9zaXRpb24oeCwgeSkgeyByZXR1cm4gW3gsIHldOyB9XG4gICAgY29tcHV0ZVNpemUoKSB7IHJldHVybiBbcHJvY2Vzcy5zdGRvdXQuY29sdW1ucywgcHJvY2Vzcy5zdGRvdXQucm93c107IH1cbn1cbiIsImltcG9ydCBCYWNrZW5kIGZyb20gXCIuL2JhY2tlbmQuanNcIjtcbmltcG9ydCAqIGFzIENvbG9yIGZyb20gXCIuLi9jb2xvci5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgVGlsZSBiYWNrZW5kXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlR0wgZXh0ZW5kcyBCYWNrZW5kIHtcbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIndlYmdsMlwiLCB7IHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1zID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9nbCA9IHRoaXMuX2luaXRXZWJHTCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNjaGVkdWxlKGNiKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7IH1cbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLl9nbC5jYW52YXM7IH1cbiAgICBzZXRPcHRpb25zKG9wdHMpIHtcbiAgICAgICAgc3VwZXIuc2V0T3B0aW9ucyhvcHRzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xuICAgICAgICBsZXQgdGlsZVNldCA9IHRoaXMuX29wdGlvbnMudGlsZVNldDtcbiAgICAgICAgaWYgKHRpbGVTZXQgJiYgXCJjb21wbGV0ZVwiIGluIHRpbGVTZXQgJiYgIXRpbGVTZXQuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRpbGVTZXQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gdGhpcy5fdXBkYXRlVGV4dHVyZSh0aWxlU2V0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUZXh0dXJlKHRpbGVTZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXcoZGF0YSwgY2xlYXJCZWZvcmUpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLl9nbDtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIGxldCBbeCwgeSwgY2gsIGZnLCBiZ10gPSBkYXRhO1xuICAgICAgICBsZXQgc2Npc3NvclkgPSBnbC5jYW52YXMuaGVpZ2h0IC0gKHkgKyAxKSAqIG9wdHMudGlsZUhlaWdodDtcbiAgICAgICAgZ2wuc2Npc3Nvcih4ICogb3B0cy50aWxlV2lkdGgsIHNjaXNzb3JZLCBvcHRzLnRpbGVXaWR0aCwgb3B0cy50aWxlSGVpZ2h0KTtcbiAgICAgICAgaWYgKGNsZWFyQmVmb3JlKSB7XG4gICAgICAgICAgICBpZiAob3B0cy50aWxlQ29sb3JpemUpIHtcbiAgICAgICAgICAgICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2wuY2xlYXJDb2xvciguLi5wYXJzZUNvbG9yKGJnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYXJzID0gW10uY29uY2F0KGNoKTtcbiAgICAgICAgbGV0IGJncyA9IFtdLmNvbmNhdChiZyk7XG4gICAgICAgIGxldCBmZ3MgPSBbXS5jb25jYXQoZmcpO1xuICAgICAgICBnbC51bmlmb3JtMmZ2KHRoaXMuX3VuaWZvcm1zW1widGFyZ2V0UG9zUmVsXCJdLCBbeCwgeV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuX29wdGlvbnMudGlsZU1hcFtjaGFyc1tpXV07XG4gICAgICAgICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENoYXIgXCIke2NoYXJzW2ldfVwiIG5vdCBmb3VuZCBpbiB0aWxlTWFwYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC51bmlmb3JtMWYodGhpcy5fdW5pZm9ybXNbXCJjb2xvcml6ZVwiXSwgb3B0cy50aWxlQ29sb3JpemUgPyAxIDogMCk7XG4gICAgICAgICAgICBnbC51bmlmb3JtMmZ2KHRoaXMuX3VuaWZvcm1zW1widGlsZXNldFBvc0Fic1wiXSwgdGlsZSk7XG4gICAgICAgICAgICBpZiAob3B0cy50aWxlQ29sb3JpemUpIHtcbiAgICAgICAgICAgICAgICBnbC51bmlmb3JtNGZ2KHRoaXMuX3VuaWZvcm1zW1widGludFwiXSwgcGFyc2VDb2xvcihmZ3NbaV0pKTtcbiAgICAgICAgICAgICAgICBnbC51bmlmb3JtNGZ2KHRoaXMuX3VuaWZvcm1zW1wiYmdcIl0sIHBhcnNlQ29sb3IoYmdzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8Y2hhcnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudGlsZUNvbG9yaXplKSB7IC8vIGFwcGx5IGNvbG9yaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NvbG9yQ2FudmFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmcgPSBmZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmcgPSBiZ3NbaV07XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50aWxlU2V0ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlWzBdLCB0aWxlWzFdLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZyAhPSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2UtYXRvcFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmcgIT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3ZlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKGNhbnZhcywgeCp0aWxlV2lkdGgsIHkqdGlsZUhlaWdodCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gbm8gY29sb3JpemluZywgZWFzeVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRpbGVTZXQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVbMF0sIHRpbGVbMV0sIHRpbGVXaWR0aCwgdGlsZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4KnRpbGVXaWR0aCwgeSp0aWxlSGVpZ2h0LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAqL1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLl9nbDtcbiAgICAgICAgZ2wuY2xlYXJDb2xvciguLi5wYXJzZUNvbG9yKHRoaXMuX29wdGlvbnMuYmcpKTtcbiAgICAgICAgZ2wuc2Npc3NvcigwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB9XG4gICAgY29tcHV0ZVNpemUoYXZhaWxXaWR0aCwgYXZhaWxIZWlnaHQpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5mbG9vcihhdmFpbFdpZHRoIC8gdGhpcy5fb3B0aW9ucy50aWxlV2lkdGgpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5mbG9vcihhdmFpbEhlaWdodCAvIHRoaXMuX29wdGlvbnMudGlsZUhlaWdodCk7XG4gICAgICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gICAgfVxuICAgIGNvbXB1dGVGb250U2l6ZSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGlsZSBiYWNrZW5kIGRvZXMgbm90IHVuZGVyc3RhbmQgZm9udCBzaXplXCIpO1xuICAgIH1cbiAgICBldmVudFRvUG9zaXRpb24oeCwgeSkge1xuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fZ2wuY2FudmFzO1xuICAgICAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgeCAtPSByZWN0LmxlZnQ7XG4gICAgICAgIHkgLT0gcmVjdC50b3A7XG4gICAgICAgIHggKj0gY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgeSAqPSBjYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID49IGNhbnZhcy53aWR0aCB8fCB5ID49IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIC0xXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEV2ZW50VG9Qb3NpdGlvbih4LCB5KTtcbiAgICB9XG4gICAgX2luaXRXZWJHTCgpIHtcbiAgICAgICAgbGV0IGdsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwid2ViZ2wyXCIsIHsgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlIH0pO1xuICAgICAgICB3aW5kb3cuZ2wgPSBnbDtcbiAgICAgICAgbGV0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCBWUywgRlMpO1xuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBjcmVhdGVRdWFkKGdsKTtcbiAgICAgICAgVU5JRk9STVMuZm9yRWFjaChuYW1lID0+IHRoaXMuX3VuaWZvcm1zW25hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpKTtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSwgZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLlNDSVNTT1JfVEVTVCk7XG4gICAgICAgIHJldHVybiBnbDtcbiAgICB9XG4gICAgX25vcm1hbGl6ZWRFdmVudFRvUG9zaXRpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoeCAvIHRoaXMuX29wdGlvbnMudGlsZVdpZHRoKSwgTWF0aC5mbG9vcih5IC8gdGhpcy5fb3B0aW9ucy50aWxlSGVpZ2h0KV07XG4gICAgfVxuICAgIF91cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuX2dsO1xuICAgICAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0aW9ucztcbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IFtvcHRzLndpZHRoICogb3B0cy50aWxlV2lkdGgsIG9wdHMuaGVpZ2h0ICogb3B0cy50aWxlSGVpZ2h0XTtcbiAgICAgICAgZ2wuY2FudmFzLndpZHRoID0gY2FudmFzU2l6ZVswXTtcbiAgICAgICAgZ2wuY2FudmFzLmhlaWdodCA9IGNhbnZhc1NpemVbMV07XG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGNhbnZhc1NpemVbMF0sIGNhbnZhc1NpemVbMV0pO1xuICAgICAgICBnbC51bmlmb3JtMmZ2KHRoaXMuX3VuaWZvcm1zW1widGlsZVNpemVcIl0sIFtvcHRzLnRpbGVXaWR0aCwgb3B0cy50aWxlSGVpZ2h0XSk7XG4gICAgICAgIGdsLnVuaWZvcm0yZnYodGhpcy5fdW5pZm9ybXNbXCJ0YXJnZXRTaXplXCJdLCBjYW52YXNTaXplKTtcbiAgICB9XG4gICAgX3VwZGF0ZVRleHR1cmUodGlsZVNldCkge1xuICAgICAgICBjcmVhdGVUZXh0dXJlKHRoaXMuX2dsLCB0aWxlU2V0KTtcbiAgICB9XG59XG5jb25zdCBVTklGT1JNUyA9IFtcInRhcmdldFBvc1JlbFwiLCBcInRpbGVzZXRQb3NBYnNcIiwgXCJ0aWxlU2l6ZVwiLCBcInRhcmdldFNpemVcIiwgXCJjb2xvcml6ZVwiLCBcImJnXCIsIFwidGludFwiXTtcbmNvbnN0IFZTID0gYFxuI3ZlcnNpb24gMzAwIGVzXG5cbmluIHZlYzIgdGlsZVBvc1JlbDtcbm91dCB2ZWMyIHRpbGVzZXRQb3NQeDtcblxudW5pZm9ybSB2ZWMyIHRpbGVzZXRQb3NBYnM7XG51bmlmb3JtIHZlYzIgdGlsZVNpemU7XG51bmlmb3JtIHZlYzIgdGFyZ2V0U2l6ZTtcbnVuaWZvcm0gdmVjMiB0YXJnZXRQb3NSZWw7XG5cbnZvaWQgbWFpbigpIHtcblx0dmVjMiB0YXJnZXRQb3NQeCA9ICh0YXJnZXRQb3NSZWwgKyB0aWxlUG9zUmVsKSAqIHRpbGVTaXplO1xuXHR2ZWMyIHRhcmdldFBvc05kYyA9ICgodGFyZ2V0UG9zUHggLyB0YXJnZXRTaXplKS0wLjUpKjIuMDtcblx0dGFyZ2V0UG9zTmRjLnkgKj0gLTEuMDtcblxuXHRnbF9Qb3NpdGlvbiA9IHZlYzQodGFyZ2V0UG9zTmRjLCAwLjAsIDEuMCk7XG5cdHRpbGVzZXRQb3NQeCA9IHRpbGVzZXRQb3NBYnMgKyB0aWxlUG9zUmVsICogdGlsZVNpemU7XG59YC50cmltKCk7XG5jb25zdCBGUyA9IGBcbiN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG5pbiB2ZWMyIHRpbGVzZXRQb3NQeDtcbm91dCB2ZWM0IGZyYWdDb2xvcjtcbnVuaWZvcm0gc2FtcGxlcjJEIGltYWdlO1xudW5pZm9ybSBib29sIGNvbG9yaXplO1xudW5pZm9ybSB2ZWM0IGJnO1xudW5pZm9ybSB2ZWM0IHRpbnQ7XG5cbnZvaWQgbWFpbigpIHtcblx0ZnJhZ0NvbG9yID0gdmVjNCgwLCAwLCAwLCAxKTtcblxuXHR2ZWM0IHRleGVsID0gdGV4ZWxGZXRjaChpbWFnZSwgaXZlYzIodGlsZXNldFBvc1B4KSwgMCk7XG5cblx0aWYgKGNvbG9yaXplKSB7XG5cdFx0dGV4ZWwucmdiID0gdGludC5hICogdGludC5yZ2IgKyAoMS4wLXRpbnQuYSkgKiB0ZXhlbC5yZ2I7XG5cdFx0ZnJhZ0NvbG9yLnJnYiA9IHRleGVsLmEqdGV4ZWwucmdiICsgKDEuMC10ZXhlbC5hKSpiZy5yZ2I7XG5cdFx0ZnJhZ0NvbG9yLmEgPSB0ZXhlbC5hICsgKDEuMC10ZXhlbC5hKSpiZy5hO1xuXHR9IGVsc2Uge1xuXHRcdGZyYWdDb2xvciA9IHRleGVsO1xuXHR9XG59YC50cmltKCk7XG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCB2c3MsIGZzcykge1xuICAgIGNvbnN0IHZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh2cywgdnNzKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHZzKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2cywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHZzKSB8fCBcIlwiKTtcbiAgICB9XG4gICAgY29uc3QgZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnMsIGZzcyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcyk7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcykgfHwgXCJcIik7XG4gICAgfVxuICAgIGNvbnN0IHAgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHAsIHZzKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocCwgZnMpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHApO1xuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHApIHx8IFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVF1YWQoZ2wpIHtcbiAgICBjb25zdCBwb3MgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSk7XG4gICAgY29uc3QgYnVmID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1Zik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHBvcywgZ2wuU1RBVElDX0RSQVcpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoZ2wsIGRhdGEpIHtcbiAgICBsZXQgdCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0KTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuUkVQRUFUKTtcbiAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAwKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xuICAgIHJldHVybiB0O1xufVxubGV0IGNvbG9yQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoIShjb2xvciBpbiBjb2xvckNhY2hlKSkge1xuICAgICAgICBsZXQgcGFyc2VkO1xuICAgICAgICBpZiAoY29sb3IgPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBbMCwgMCwgMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sb3IuaW5kZXhPZihcInJnYmFcIikgPiAtMSkge1xuICAgICAgICAgICAgcGFyc2VkID0gKGNvbG9yLm1hdGNoKC9bXFxkLl0rL2cpIHx8IFtdKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkW2ldID0gcGFyc2VkW2ldIC8gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkID0gQ29sb3IuZnJvbVN0cmluZyhjb2xvcikubWFwKCQgPT4gJCAvIDI1NSk7XG4gICAgICAgICAgICBwYXJzZWQucHVzaCgxKTtcbiAgICAgICAgfVxuICAgICAgICBjb2xvckNhY2hlW2NvbG9yXSA9IHBhcnNlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yQ2FjaGVbY29sb3JdO1xufVxuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXMuanNcIjtcbi8qKlxuICogQGNsYXNzIFRpbGUgYmFja2VuZFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIENhbnZhcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2NvbG9yQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB9XG4gICAgZHJhdyhkYXRhLCBjbGVhckJlZm9yZSkge1xuICAgICAgICBsZXQgW3gsIHksIGNoLCBmZywgYmddID0gZGF0YTtcbiAgICAgICAgbGV0IHRpbGVXaWR0aCA9IHRoaXMuX29wdGlvbnMudGlsZVdpZHRoO1xuICAgICAgICBsZXQgdGlsZUhlaWdodCA9IHRoaXMuX29wdGlvbnMudGlsZUhlaWdodDtcbiAgICAgICAgaWYgKGNsZWFyQmVmb3JlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50aWxlQ29sb3JpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGJnO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdCh4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYXJzID0gW10uY29uY2F0KGNoKTtcbiAgICAgICAgbGV0IGZncyA9IFtdLmNvbmNhdChmZyk7XG4gICAgICAgIGxldCBiZ3MgPSBbXS5jb25jYXQoYmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuX29wdGlvbnMudGlsZU1hcFtjaGFyc1tpXV07XG4gICAgICAgICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENoYXIgXCIke2NoYXJzW2ldfVwiIG5vdCBmb3VuZCBpbiB0aWxlTWFwYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50aWxlQ29sb3JpemUpIHsgLy8gYXBwbHkgY29sb3JpemF0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NvbG9yQ2FudmFzO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCBmZyA9IGZnc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgYmcgPSBiZ3NbaV07XG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5fb3B0aW9ucy50aWxlU2V0LCB0aWxlWzBdLCB0aWxlWzFdLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIDAsIDAsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgaWYgKGZnICE9IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWF0b3BcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmcgIT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShjYW52YXMsIHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIG5vIGNvbG9yaXppbmcsIGVhc3lcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX29wdGlvbnMudGlsZVNldCwgdGlsZVswXSwgdGlsZVsxXSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCB4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlU2l6ZShhdmFpbFdpZHRoLCBhdmFpbEhlaWdodCkge1xuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKGF2YWlsV2lkdGggLyB0aGlzLl9vcHRpb25zLnRpbGVXaWR0aCk7XG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKGF2YWlsSGVpZ2h0IC8gdGhpcy5fb3B0aW9ucy50aWxlSGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcbiAgICB9XG4gICAgY29tcHV0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaWxlIGJhY2tlbmQgZG9lcyBub3QgdW5kZXJzdGFuZCBmb250IHNpemVcIik7XG4gICAgfVxuICAgIF9ub3JtYWxpemVkRXZlbnRUb1Bvc2l0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKHggLyB0aGlzLl9vcHRpb25zLnRpbGVXaWR0aCksIE1hdGguZmxvb3IoeSAvIHRoaXMuX29wdGlvbnMudGlsZUhlaWdodCldO1xuICAgIH1cbiAgICBfdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIHRoaXMuX2N0eC5jYW52YXMud2lkdGggPSBvcHRzLndpZHRoICogb3B0cy50aWxlV2lkdGg7XG4gICAgICAgIHRoaXMuX2N0eC5jYW52YXMuaGVpZ2h0ID0gb3B0cy5oZWlnaHQgKiBvcHRzLnRpbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbG9yQ2FudmFzLndpZHRoID0gb3B0cy50aWxlV2lkdGg7XG4gICAgICAgIHRoaXMuX2NvbG9yQ2FudmFzLmhlaWdodCA9IG9wdHMudGlsZUhlaWdodDtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBjbGFzcyBBc3luY2hyb25vdXMgbWFpbiBsb29wXG4gKiBAcGFyYW0ge1JPVC5TY2hlZHVsZXJ9IHNjaGVkdWxlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgbWFpbiBsb29wLiBXaGVuIHRoaXMgY2FsbCByZXR1cm5zLCB0aGUgbG9vcCBpcyBsb2NrZWQuXG4gICAgICovXG4gICAgc3RhcnQoKSB7IHJldHVybiB0aGlzLnVubG9jaygpOyB9XG4gICAgLyoqXG4gICAgICogSW50ZXJydXB0IHRoZSBlbmdpbmUgYnkgYW4gYXN5bmNocm9ub3VzIGFjdGlvblxuICAgICAqL1xuICAgIGxvY2soKSB7XG4gICAgICAgIHRoaXMuX2xvY2srKztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc3VtZSBleGVjdXRpb24gKHBhdXNlZCBieSBhIHByZXZpb3VzIGxvY2spXG4gICAgICovXG4gICAgdW5sb2NrKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1bmxvY2sgdW5sb2NrZWQgZW5naW5lXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvY2stLTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgICBsZXQgYWN0b3IgPSB0aGlzLl9zY2hlZHVsZXIubmV4dCgpO1xuICAgICAgICAgICAgaWYgKCFhY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2soKTtcbiAgICAgICAgICAgIH0gLyogbm8gYWN0b3JzICovXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYWN0b3IuYWN0KCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7IC8qIGFjdG9yIHJldHVybmVkIGEgXCJ0aGVuYWJsZVwiLCBsb29rcyBsaWtlIGEgUHJvbWlzZSAqL1xuICAgICAgICAgICAgICAgIHRoaXMubG9jaygpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKHRoaXMudW5sb2NrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UXVldWUge1xuICAgIC8qKlxuICAgICAqIEBjbGFzcyBHZW5lcmljIGV2ZW50IHF1ZXVlOiBzdG9yZXMgZXZlbnRzIGFuZCByZXRyaWV2ZXMgdGhlbSBiYXNlZCBvbiB0aGVpciB0aW1lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3RpbWUgPSAwO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRUaW1lcyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBFbGFwc2VkIHRpbWVcbiAgICAgKi9cbiAgICBnZXRUaW1lKCkgeyByZXR1cm4gdGhpcy5fdGltZTsgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBzY2hlZHVsZWQgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9ldmVudFRpbWVzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBhZGQoZXZlbnQsIHRpbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXZlbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudFRpbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnRUaW1lc1tpXSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZXZlbnRzLnNwbGljZShpbmRleCwgMCwgZXZlbnQpO1xuICAgICAgICB0aGlzLl9ldmVudFRpbWVzLnNwbGljZShpbmRleCwgMCwgdGltZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIG5lYXJlc3QgZXZlbnQsIGFkdmFuY2VzIHRpbWUgaWYgbmVjZXNzYXJ5LiBSZXR1cm5zIHRoYXQgZXZlbnQgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgcXVldWUuXG4gICAgICogQHJldHVybnMgez8gfHwgbnVsbH0gVGhlIGV2ZW50IHByZXZpb3VzbHkgYWRkZWQgYnkgYWRkRXZlbnQsIG51bGwgaWYgbm8gZXZlbnQgYXZhaWxhYmxlXG4gICAgICovXG4gICAgZ2V0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5fZXZlbnRUaW1lcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgIGlmICh0aW1lID4gMCkgeyAvKiBhZHZhbmNlICovXG4gICAgICAgICAgICB0aGlzLl90aW1lICs9IHRpbWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2V2ZW50VGltZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFRpbWVzW2ldIC09IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5zcGxpY2UoMCwgMSlbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGV2ZW50XG4gICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBnZXRFdmVudFRpbWUoZXZlbnQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXZlbnRzLmluZGV4T2YoZXZlbnQpO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VGltZXNbaW5kZXhdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZXZlbnQgZnJvbSB0aGUgcXVldWVcbiAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICogQHJldHVybnMge2Jvb2x9IHN1Y2Nlc3M/XG4gICAgICovXG4gICAgcmVtb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2V2ZW50cy5pbmRleE9mKGV2ZW50KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVtb3ZlKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZXZlbnQgZnJvbSB0aGUgcXVldWVcbiAgICAgKiBAcGFyYW0ge2ludH0gaW5kZXhcbiAgICAgKi9cbiAgICBfcmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLl9ldmVudFRpbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIDtcbn1cbiIsImltcG9ydCBGT1YgZnJvbSBcIi4vZm92LmpzXCI7XG4vKipcbiAqIEBjbGFzcyBEaXNjcmV0ZSBzaGFkb3djYXN0aW5nIGFsZ29yaXRobS4gT2Jzb2xldGVkIGJ5IFByZWNpc2Ugc2hhZG93Y2FzdGluZy5cbiAqIEBhdWdtZW50cyBST1QuRk9WXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NyZXRlU2hhZG93Y2FzdGluZyBleHRlbmRzIEZPViB7XG4gICAgY29tcHV0ZSh4LCB5LCBSLCBjYWxsYmFjaykge1xuICAgICAgICAvKiB0aGlzIHBsYWNlIGlzIGFsd2F5cyB2aXNpYmxlICovXG4gICAgICAgIGNhbGxiYWNrKHgsIHksIDAsIDEpO1xuICAgICAgICAvKiBzdGFuZGluZyBpbiBhIGRhcmsgcGxhY2UuIEZJWE1FIGlzIHRoaXMgYSBnb29kIGlkZWE/ICAqL1xuICAgICAgICBpZiAoIXRoaXMuX2xpZ2h0UGFzc2VzKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogc3RhcnQgYW5kIGVuZCBhbmdsZXMgKi9cbiAgICAgICAgbGV0IERBVEEgPSBbXTtcbiAgICAgICAgbGV0IEEsIEIsIGN4LCBjeSwgYmxvY2tzO1xuICAgICAgICAvKiBhbmFseXplIHN1cnJvdW5kaW5nIGNlbGxzIGluIGNvbmNlbnRyaWMgcmluZ3MsIHN0YXJ0aW5nIGZyb20gdGhlIGNlbnRlciAqL1xuICAgICAgICBmb3IgKGxldCByID0gMTsgciA8PSBSOyByKyspIHtcbiAgICAgICAgICAgIGxldCBuZWlnaGJvcnMgPSB0aGlzLl9nZXRDaXJjbGUoeCwgeSwgcik7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAzNjAgLyBuZWlnaGJvcnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWlnaGJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjeCA9IG5laWdoYm9yc1tpXVswXTtcbiAgICAgICAgICAgICAgICBjeSA9IG5laWdoYm9yc1tpXVsxXTtcbiAgICAgICAgICAgICAgICBBID0gYW5nbGUgKiAoaSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgQiA9IEEgKyBhbmdsZTtcbiAgICAgICAgICAgICAgICBibG9ja3MgPSAhdGhpcy5fbGlnaHRQYXNzZXMoY3gsIGN5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmlzaWJsZUNvb3JkcyhNYXRoLmZsb29yKEEpLCBNYXRoLmNlaWwoQiksIGJsb2NrcywgREFUQSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY3gsIGN5LCByLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKERBVEEubGVuZ3RoID09IDIgJiYgREFUQVswXSA9PSAwICYmIERBVEFbMV0gPT0gMzYwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IC8qIGN1dG9mZj8gKi9cbiAgICAgICAgICAgIH0gLyogZm9yIGFsbCBjZWxscyBpbiB0aGlzIHJpbmcgKi9cbiAgICAgICAgfSAvKiBmb3IgYWxsIHJpbmdzICovXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW50fSBBIHN0YXJ0IGFuZ2xlXG4gICAgICogQHBhcmFtIHtpbnR9IEIgZW5kIGFuZ2xlXG4gICAgICogQHBhcmFtIHtib29sfSBibG9ja3MgRG9lcyBjdXJyZW50IGNlbGwgYmxvY2sgdmlzaWJpbGl0eT9cbiAgICAgKiBAcGFyYW0ge2ludFtdW119IERBVEEgc2hhZG93ZWQgYW5nbGUgcGFpcnNcbiAgICAgKi9cbiAgICBfdmlzaWJsZUNvb3JkcyhBLCBCLCBibG9ja3MsIERBVEEpIHtcbiAgICAgICAgaWYgKEEgPCAwKSB7XG4gICAgICAgICAgICBsZXQgdjEgPSB0aGlzLl92aXNpYmxlQ29vcmRzKDAsIEIsIGJsb2NrcywgREFUQSk7XG4gICAgICAgICAgICBsZXQgdjIgPSB0aGlzLl92aXNpYmxlQ29vcmRzKDM2MCArIEEsIDM2MCwgYmxvY2tzLCBEQVRBKTtcbiAgICAgICAgICAgIHJldHVybiB2MSB8fCB2MjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBEQVRBLmxlbmd0aCAmJiBEQVRBW2luZGV4XSA8IEEpIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09IERBVEEubGVuZ3RoKSB7IC8qIGNvbXBsZXRlbHkgbmV3IHNoYWRvdyAqL1xuICAgICAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgICAgIERBVEEucHVzaChBLCBCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmIChpbmRleCAlIDIpIHsgLyogdGhpcyBzaGFkb3cgc3RhcnRzIGluIGFuIGV4aXN0aW5nIHNoYWRvdywgb3Igd2l0aGluIGl0cyBlbmRpbmcgYm91bmRhcnkgKi9cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IERBVEEubGVuZ3RoICYmIERBVEFbaW5kZXhdIDwgQikge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgREFUQS5zcGxpY2UoaW5kZXggLSBjb3VudCwgY291bnQsIEIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgREFUQS5zcGxpY2UoaW5kZXggLSBjb3VudCwgY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvKiB0aGlzIHNoYWRvdyBzdGFydHMgb3V0c2lkZSBhbiBleGlzdGluZyBzaGFkb3csIG9yIHdpdGhpbiBhIHN0YXJ0aW5nIGJvdW5kYXJ5ICovXG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBEQVRBLmxlbmd0aCAmJiBEQVRBW2luZGV4XSA8IEIpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiB2aXNpYmxlIHdoZW4gb3V0c2lkZSBhbiBleGlzdGluZyBzaGFkb3csIG9yIHdoZW4gb3ZlcmxhcHBpbmcgKi9cbiAgICAgICAgICAgIGlmIChBID09IERBVEFbaW5kZXggLSBjb3VudF0gJiYgY291bnQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIERBVEEuc3BsaWNlKGluZGV4IC0gY291bnQsIGNvdW50LCBBKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIERBVEEuc3BsaWNlKGluZGV4IC0gY291bnQsIGNvdW50LCBBLCBCKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IERJUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG47XG47XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGT1Yge1xuICAgIC8qKlxuICAgICAqIEBjbGFzcyBBYnN0cmFjdCBGT1YgYWxnb3JpdGhtXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlnaHRQYXNzZXNDYWxsYmFjayBEb2VzIHRoZSBsaWdodCBwYXNzIHRocm91Z2ggeCx5P1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge2ludH0gW29wdGlvbnMudG9wb2xvZ3k9OF0gNC82LzhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsaWdodFBhc3Nlc0NhbGxiYWNrLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fbGlnaHRQYXNzZXMgPSBsaWdodFBhc3Nlc0NhbGxiYWNrO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHRvcG9sb2d5OiA4IH0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYWxsIG5laWdoYm9ycyBpbiBhIGNvbmNlbnRyaWMgcmluZ1xuICAgICAqIEBwYXJhbSB7aW50fSBjeCBjZW50ZXIteFxuICAgICAqIEBwYXJhbSB7aW50fSBjeSBjZW50ZXIteVxuICAgICAqIEBwYXJhbSB7aW50fSByIHJhbmdlXG4gICAgICovXG4gICAgX2dldENpcmNsZShjeCwgY3ksIHIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgZGlycywgY291bnRGYWN0b3IsIHN0YXJ0T2Zmc2V0O1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kpIHtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjb3VudEZhY3RvciA9IDE7XG4gICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQgPSBbMCwgMV07XG4gICAgICAgICAgICAgICAgZGlycyA9IFtcbiAgICAgICAgICAgICAgICAgICAgRElSU1s4XVs3XSxcbiAgICAgICAgICAgICAgICAgICAgRElSU1s4XVsxXSxcbiAgICAgICAgICAgICAgICAgICAgRElSU1s4XVszXSxcbiAgICAgICAgICAgICAgICAgICAgRElSU1s4XVs1XVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZGlycyA9IERJUlNbNl07XG4gICAgICAgICAgICAgICAgY291bnRGYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ID0gWy0xLCAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBkaXJzID0gRElSU1s0XTtcbiAgICAgICAgICAgICAgICBjb3VudEZhY3RvciA9IDI7XG4gICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQgPSBbLTEsIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgdG9wb2xvZ3kgZm9yIEZPViBjb21wdXRhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBzdGFydGluZyBuZWlnaGJvciAqL1xuICAgICAgICBsZXQgeCA9IGN4ICsgc3RhcnRPZmZzZXRbMF0gKiByO1xuICAgICAgICBsZXQgeSA9IGN5ICsgc3RhcnRPZmZzZXRbMV0gKiByO1xuICAgICAgICAvKiBjaXJjbGUgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHIgKiBjb3VudEZhY3RvcjsgaisrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgICAgICB4ICs9IGRpcnNbaV1bMF07XG4gICAgICAgICAgICAgICAgeSArPSBkaXJzW2ldWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IERpc2NyZXRlU2hhZG93Y2FzdGluZyBmcm9tIFwiLi9kaXNjcmV0ZS1zaGFkb3djYXN0aW5nLmpzXCI7XG5pbXBvcnQgUHJlY2lzZVNoYWRvd2Nhc3RpbmcgZnJvbSBcIi4vcHJlY2lzZS1zaGFkb3djYXN0aW5nLmpzXCI7XG5pbXBvcnQgUmVjdXJzaXZlU2hhZG93Y2FzdGluZyBmcm9tIFwiLi9yZWN1cnNpdmUtc2hhZG93Y2FzdGluZy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgeyBEaXNjcmV0ZVNoYWRvd2Nhc3RpbmcsIFByZWNpc2VTaGFkb3djYXN0aW5nLCBSZWN1cnNpdmVTaGFkb3djYXN0aW5nIH07XG4iLCJpbXBvcnQgRk9WIGZyb20gXCIuL2Zvdi5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgUHJlY2lzZSBzaGFkb3djYXN0aW5nIGFsZ29yaXRobVxuICogQGF1Z21lbnRzIFJPVC5GT1ZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY2lzZVNoYWRvd2Nhc3RpbmcgZXh0ZW5kcyBGT1Yge1xuICAgIGNvbXB1dGUoeCwgeSwgUiwgY2FsbGJhY2spIHtcbiAgICAgICAgLyogdGhpcyBwbGFjZSBpcyBhbHdheXMgdmlzaWJsZSAqL1xuICAgICAgICBjYWxsYmFjayh4LCB5LCAwLCAxKTtcbiAgICAgICAgLyogc3RhbmRpbmcgaW4gYSBkYXJrIHBsYWNlLiBGSVhNRSBpcyB0aGlzIGEgZ29vZCBpZGVhPyAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9saWdodFBhc3Nlcyh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qIGxpc3Qgb2YgYWxsIHNoYWRvd3MgKi9cbiAgICAgICAgbGV0IFNIQURPV1MgPSBbXTtcbiAgICAgICAgbGV0IGN4LCBjeSwgYmxvY2tzLCBBMSwgQTIsIHZpc2liaWxpdHk7XG4gICAgICAgIC8qIGFuYWx5emUgc3Vycm91bmRpbmcgY2VsbHMgaW4gY29uY2VudHJpYyByaW5ncywgc3RhcnRpbmcgZnJvbSB0aGUgY2VudGVyICovXG4gICAgICAgIGZvciAobGV0IHIgPSAxOyByIDw9IFI7IHIrKykge1xuICAgICAgICAgICAgbGV0IG5laWdoYm9ycyA9IHRoaXMuX2dldENpcmNsZSh4LCB5LCByKTtcbiAgICAgICAgICAgIGxldCBuZWlnaGJvckNvdW50ID0gbmVpZ2hib3JzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY3ggPSBuZWlnaGJvcnNbaV1bMF07XG4gICAgICAgICAgICAgICAgY3kgPSBuZWlnaGJvcnNbaV1bMV07XG4gICAgICAgICAgICAgICAgLyogc2hpZnQgaGFsZi1hbi1hbmdsZSBiYWNrd2FyZHMgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3kgb2YgMC10aCBjZWxscyAqL1xuICAgICAgICAgICAgICAgIEExID0gW2kgPyAyICogaSAtIDEgOiAyICogbmVpZ2hib3JDb3VudCAtIDEsIDIgKiBuZWlnaGJvckNvdW50XTtcbiAgICAgICAgICAgICAgICBBMiA9IFsyICogaSArIDEsIDIgKiBuZWlnaGJvckNvdW50XTtcbiAgICAgICAgICAgICAgICBibG9ja3MgPSAhdGhpcy5fbGlnaHRQYXNzZXMoY3gsIGN5KTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gdGhpcy5fY2hlY2tWaXNpYmlsaXR5KEExLCBBMiwgYmxvY2tzLCBTSEFET1dTKTtcbiAgICAgICAgICAgICAgICBpZiAodmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjeCwgY3ksIHIsIHZpc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoU0hBRE9XUy5sZW5ndGggPT0gMiAmJiBTSEFET1dTWzBdWzBdID09IDAgJiYgU0hBRE9XU1sxXVswXSA9PSBTSEFET1dTWzFdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IC8qIGN1dG9mZj8gKi9cbiAgICAgICAgICAgIH0gLyogZm9yIGFsbCBjZWxscyBpbiB0aGlzIHJpbmcgKi9cbiAgICAgICAgfSAvKiBmb3IgYWxsIHJpbmdzICovXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW50WzJdfSBBMSBhcmMgc3RhcnRcbiAgICAgKiBAcGFyYW0ge2ludFsyXX0gQTIgYXJjIGVuZFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gYmxvY2tzIERvZXMgY3VycmVudCBhcmMgYmxvY2sgdmlzaWJpbGl0eT9cbiAgICAgKiBAcGFyYW0ge2ludFtdW119IFNIQURPV1MgbGlzdCBvZiBhY3RpdmUgc2hhZG93c1xuICAgICAqL1xuICAgIF9jaGVja1Zpc2liaWxpdHkoQTEsIEEyLCBibG9ja3MsIFNIQURPV1MpIHtcbiAgICAgICAgaWYgKEExWzBdID4gQTJbMF0pIHsgLyogc3BsaXQgaW50byB0d28gc3ViLWFyY3MgKi9cbiAgICAgICAgICAgIGxldCB2MSA9IHRoaXMuX2NoZWNrVmlzaWJpbGl0eShBMSwgW0ExWzFdLCBBMVsxXV0sIGJsb2NrcywgU0hBRE9XUyk7XG4gICAgICAgICAgICBsZXQgdjIgPSB0aGlzLl9jaGVja1Zpc2liaWxpdHkoWzAsIDFdLCBBMiwgYmxvY2tzLCBTSEFET1dTKTtcbiAgICAgICAgICAgIHJldHVybiAodjEgKyB2MikgLyAyO1xuICAgICAgICB9XG4gICAgICAgIC8qIGluZGV4MTogZmlyc3Qgc2hhZG93ID49IEExICovXG4gICAgICAgIGxldCBpbmRleDEgPSAwLCBlZGdlMSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoaW5kZXgxIDwgU0hBRE9XUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBvbGQgPSBTSEFET1dTW2luZGV4MV07XG4gICAgICAgICAgICBsZXQgZGlmZiA9IG9sZFswXSAqIEExWzFdIC0gQTFbMF0gKiBvbGRbMV07XG4gICAgICAgICAgICBpZiAoZGlmZiA+PSAwKSB7IC8qIG9sZCA+PSBBMSAqL1xuICAgICAgICAgICAgICAgIGlmIChkaWZmID09IDAgJiYgIShpbmRleDEgJSAyKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgxKys7XG4gICAgICAgIH1cbiAgICAgICAgLyogaW5kZXgyOiBsYXN0IHNoYWRvdyA8PSBBMiAqL1xuICAgICAgICBsZXQgaW5kZXgyID0gU0hBRE9XUy5sZW5ndGgsIGVkZ2UyID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChpbmRleDItLSkge1xuICAgICAgICAgICAgbGV0IG9sZCA9IFNIQURPV1NbaW5kZXgyXTtcbiAgICAgICAgICAgIGxldCBkaWZmID0gQTJbMF0gKiBvbGRbMV0gLSBvbGRbMF0gKiBBMlsxXTtcbiAgICAgICAgICAgIGlmIChkaWZmID49IDApIHsgLyogb2xkIDw9IEEyICovXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPT0gMCAmJiAoaW5kZXgyICUgMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZTIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChpbmRleDEgPT0gaW5kZXgyICYmIChlZGdlMSB8fCBlZGdlMikpIHsgLyogc3Vic2V0IG9mIGV4aXN0aW5nIHNoYWRvdywgb25lIG9mIHRoZSBlZGdlcyBtYXRjaCAqL1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVkZ2UxICYmIGVkZ2UyICYmIGluZGV4MSArIDEgPT0gaW5kZXgyICYmIChpbmRleDIgJSAyKSkgeyAvKiBjb21wbGV0ZWx5IGVxdWl2YWxlbnQgd2l0aCBleGlzdGluZyBzaGFkb3cgKi9cbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleDEgPiBpbmRleDIgJiYgKGluZGV4MSAlIDIpKSB7IC8qIHN1YnNldCBvZiBleGlzdGluZyBzaGFkb3csIG5vdCB0b3VjaGluZyAqL1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gLyogZmFzdCBjYXNlOiBub3QgdmlzaWJsZSAqL1xuICAgICAgICBsZXQgdmlzaWJsZUxlbmd0aDtcbiAgICAgICAgLyogY29tcHV0ZSB0aGUgbGVuZ3RoIG9mIHZpc2libGUgYXJjLCBhZGp1c3QgbGlzdCBvZiBzaGFkb3dzIChpZiBibG9ja2luZykgKi9cbiAgICAgICAgbGV0IHJlbW92ZSA9IGluZGV4MiAtIGluZGV4MSArIDE7XG4gICAgICAgIGlmIChyZW1vdmUgJSAyKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXgxICUgMikgeyAvKiBmaXJzdCBlZGdlIHdpdGhpbiBleGlzdGluZyBzaGFkb3csIHNlY29uZCBvdXRzaWRlICovXG4gICAgICAgICAgICAgICAgbGV0IFAgPSBTSEFET1dTW2luZGV4MV07XG4gICAgICAgICAgICAgICAgdmlzaWJsZUxlbmd0aCA9IChBMlswXSAqIFBbMV0gLSBQWzBdICogQTJbMV0pIC8gKFBbMV0gKiBBMlsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgICAgICAgICBTSEFET1dTLnNwbGljZShpbmRleDEsIHJlbW92ZSwgQTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvKiBzZWNvbmQgZWRnZSB3aXRoaW4gZXhpc3Rpbmcgc2hhZG93LCBmaXJzdCBvdXRzaWRlICovXG4gICAgICAgICAgICAgICAgbGV0IFAgPSBTSEFET1dTW2luZGV4Ml07XG4gICAgICAgICAgICAgICAgdmlzaWJsZUxlbmd0aCA9IChQWzBdICogQTFbMV0gLSBBMVswXSAqIFBbMV0pIC8gKEExWzFdICogUFsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgICAgICAgICBTSEFET1dTLnNwbGljZShpbmRleDEsIHJlbW92ZSwgQTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbmRleDEgJSAyKSB7IC8qIGJvdGggZWRnZXMgd2l0aGluIGV4aXN0aW5nIHNoYWRvd3MgKi9cbiAgICAgICAgICAgICAgICBsZXQgUDEgPSBTSEFET1dTW2luZGV4MV07XG4gICAgICAgICAgICAgICAgbGV0IFAyID0gU0hBRE9XU1tpbmRleDJdO1xuICAgICAgICAgICAgICAgIHZpc2libGVMZW5ndGggPSAoUDJbMF0gKiBQMVsxXSAtIFAxWzBdICogUDJbMV0pIC8gKFAxWzFdICogUDJbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgU0hBRE9XUy5zcGxpY2UoaW5kZXgxLCByZW1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvKiBib3RoIGVkZ2VzIG91dHNpZGUgZXhpc3Rpbmcgc2hhZG93cyAqL1xuICAgICAgICAgICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgU0hBRE9XUy5zcGxpY2UoaW5kZXgxLCByZW1vdmUsIEExLCBBMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAxOyAvKiB3aG9sZSBhcmMgdmlzaWJsZSEgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJjTGVuZ3RoID0gKEEyWzBdICogQTFbMV0gLSBBMVswXSAqIEEyWzFdKSAvIChBMVsxXSAqIEEyWzFdKTtcbiAgICAgICAgcmV0dXJuIHZpc2libGVMZW5ndGggLyBhcmNMZW5ndGg7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZPViBmcm9tIFwiLi9mb3YuanNcIjtcbi8qKiBPY3RhbnRzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIHJlY3Vyc2l2ZSBzaGFkb3djYXN0aW5nIG9mZnNldHMgKi9cbmNvbnN0IE9DVEFOVFMgPSBbXG4gICAgWy0xLCAwLCAwLCAxXSxcbiAgICBbMCwgLTEsIDEsIDBdLFxuICAgIFswLCAtMSwgLTEsIDBdLFxuICAgIFstMSwgMCwgMCwgLTFdLFxuICAgIFsxLCAwLCAwLCAtMV0sXG4gICAgWzAsIDEsIC0xLCAwXSxcbiAgICBbMCwgMSwgMSwgMF0sXG4gICAgWzEsIDAsIDAsIDFdXG5dO1xuLyoqXG4gKiBAY2xhc3MgUmVjdXJzaXZlIHNoYWRvd2Nhc3RpbmcgYWxnb3JpdGhtXG4gKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyA0LzggdG9wb2xvZ2llcywgbm90IGhleGFnb25hbC5cbiAqIEJhc2VkIG9uIFBldGVyIEhhcmtpbnMnIGltcGxlbWVudGF0aW9uIG9mIEJqw7ZybiBCZXJnc3Ryw7ZtJ3MgYWxnb3JpdGhtIGRlc2NyaWJlZCBoZXJlOiBodHRwOi8vd3d3LnJvZ3VlYmFzaW4uY29tL2luZGV4LnBocD90aXRsZT1GT1ZfdXNpbmdfcmVjdXJzaXZlX3NoYWRvd2Nhc3RpbmdcbiAqIEBhdWdtZW50cyBST1QuRk9WXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Vyc2l2ZVNoYWRvd2Nhc3RpbmcgZXh0ZW5kcyBGT1Yge1xuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdmlzaWJpbGl0eSBmb3IgYSAzNjAtZGVncmVlIGNpcmNsZVxuICAgICAqIEBwYXJhbSB7aW50fSB4XG4gICAgICogQHBhcmFtIHtpbnR9IHlcbiAgICAgKiBAcGFyYW0ge2ludH0gUiBNYXhpbXVtIHZpc2liaWxpdHkgcmFkaXVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb21wdXRlKHgsIHksIFIsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vWW91IGNhbiBhbHdheXMgc2VlIHlvdXIgb3duIHRpbGVcbiAgICAgICAgY2FsbGJhY2soeCwgeSwgMCwgMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT0NUQU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyT2N0YW50KHgsIHksIE9DVEFOVFNbaV0sIFIsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHZpc2liaWxpdHkgZm9yIGEgMTgwLWRlZ3JlZSBhcmNcbiAgICAgKiBAcGFyYW0ge2ludH0geFxuICAgICAqIEBwYXJhbSB7aW50fSB5XG4gICAgICogQHBhcmFtIHtpbnR9IFIgTWF4aW11bSB2aXNpYmlsaXR5IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7aW50fSBkaXIgRGlyZWN0aW9uIHRvIGxvb2sgaW4gKGV4cHJlc3NlZCBpbiBhIFJPVC5ESVJTIHZhbHVlKTtcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbXB1dGUxODAoeCwgeSwgUiwgZGlyLCBjYWxsYmFjaykge1xuICAgICAgICAvL1lvdSBjYW4gYWx3YXlzIHNlZSB5b3VyIG93biB0aWxlXG4gICAgICAgIGNhbGxiYWNrKHgsIHksIDAsIDEpO1xuICAgICAgICBsZXQgcHJldmlvdXNPY3RhbnQgPSAoZGlyIC0gMSArIDgpICUgODsgLy9OZWVkIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBvY3RhbnQgdG8gcmVuZGVyIGEgZnVsbCAxODAgZGVncmVlc1xuICAgICAgICBsZXQgbmV4dFByZXZpb3VzT2N0YW50ID0gKGRpciAtIDIgKyA4KSAlIDg7IC8vTmVlZCB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgdHdvIG9jdGFudHMgdG8gcmVuZGVyIGEgZnVsbCAxODAgZGVncmVlc1xuICAgICAgICBsZXQgbmV4dE9jdGFudCA9IChkaXIgKyAxICsgOCkgJSA4OyAvL05lZWQgdG8gZ3JhYiB0byBuZXh0IG9jdGFudCB0byByZW5kZXIgYSBmdWxsIDE4MCBkZWdyZWVzXG4gICAgICAgIHRoaXMuX3JlbmRlck9jdGFudCh4LCB5LCBPQ1RBTlRTW25leHRQcmV2aW91c09jdGFudF0sIFIsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyT2N0YW50KHgsIHksIE9DVEFOVFNbcHJldmlvdXNPY3RhbnRdLCBSLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX3JlbmRlck9jdGFudCh4LCB5LCBPQ1RBTlRTW2Rpcl0sIFIsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyT2N0YW50KHgsIHksIE9DVEFOVFNbbmV4dE9jdGFudF0sIFIsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdmlzaWJpbGl0eSBmb3IgYSA5MC1kZWdyZWUgYXJjXG4gICAgICogQHBhcmFtIHtpbnR9IHhcbiAgICAgKiBAcGFyYW0ge2ludH0geVxuICAgICAqIEBwYXJhbSB7aW50fSBSIE1heGltdW0gdmlzaWJpbGl0eSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge2ludH0gZGlyIERpcmVjdGlvbiB0byBsb29rIGluIChleHByZXNzZWQgaW4gYSBST1QuRElSUyB2YWx1ZSk7XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb21wdXRlOTAoeCwgeSwgUiwgZGlyLCBjYWxsYmFjaykge1xuICAgICAgICAvL1lvdSBjYW4gYWx3YXlzIHNlZSB5b3VyIG93biB0aWxlXG4gICAgICAgIGNhbGxiYWNrKHgsIHksIDAsIDEpO1xuICAgICAgICBsZXQgcHJldmlvdXNPY3RhbnQgPSAoZGlyIC0gMSArIDgpICUgODsgLy9OZWVkIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBvY3RhbnQgdG8gcmVuZGVyIGEgZnVsbCA5MCBkZWdyZWVzXG4gICAgICAgIHRoaXMuX3JlbmRlck9jdGFudCh4LCB5LCBPQ1RBTlRTW2Rpcl0sIFIsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyT2N0YW50KHgsIHksIE9DVEFOVFNbcHJldmlvdXNPY3RhbnRdLCBSLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlciBvbmUgb2N0YW50ICg0NS1kZWdyZWUgYXJjKSBvZiB0aGUgdmlld3NoZWRcbiAgICAgKiBAcGFyYW0ge2ludH0geFxuICAgICAqIEBwYXJhbSB7aW50fSB5XG4gICAgICogQHBhcmFtIHtpbnR9IG9jdGFudCBPY3RhbnQgdG8gYmUgcmVuZGVyZWRcbiAgICAgKiBAcGFyYW0ge2ludH0gUiBNYXhpbXVtIHZpc2liaWxpdHkgcmFkaXVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBfcmVuZGVyT2N0YW50KHgsIHksIG9jdGFudCwgUiwgY2FsbGJhY2spIHtcbiAgICAgICAgLy9SYWRpdXMgaW5jcmVtZW50ZWQgYnkgMSB0byBwcm92aWRlIHNhbWUgY292ZXJhZ2UgYXJlYSBhcyBvdGhlciBzaGFkb3djYXN0aW5nIHJhZGl1c2VzXG4gICAgICAgIHRoaXMuX2Nhc3RWaXNpYmlsaXR5KHgsIHksIDEsIDEuMCwgMC4wLCBSICsgMSwgb2N0YW50WzBdLCBvY3RhbnRbMV0sIG9jdGFudFsyXSwgb2N0YW50WzNdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFjdHVhbGx5IGNhbGN1bGF0ZXMgdGhlIHZpc2liaWxpdHlcbiAgICAgKiBAcGFyYW0ge2ludH0gc3RhcnRYIFRoZSBzdGFydGluZyBYIGNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge2ludH0gc3RhcnRZIFRoZSBzdGFydGluZyBZIGNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge2ludH0gcm93IFRoZSByb3cgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIHtmbG9hdH0gdmlzU2xvcGVTdGFydCBUaGUgc2xvcGUgdG8gc3RhcnQgYXRcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSB2aXNTbG9wZUVuZCBUaGUgc2xvcGUgdG8gZW5kIGF0XG4gICAgICogQHBhcmFtIHtpbnR9IHJhZGl1cyBUaGUgcmFkaXVzIHRvIHJlYWNoIG91dCB0b1xuICAgICAqIEBwYXJhbSB7aW50fSB4eFxuICAgICAqIEBwYXJhbSB7aW50fSB4eVxuICAgICAqIEBwYXJhbSB7aW50fSB5eFxuICAgICAqIEBwYXJhbSB7aW50fSB5eVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byB1c2Ugd2hlbiB3ZSBoaXQgYSBibG9jayB0aGF0IGlzIHZpc2libGVcbiAgICAgKi9cbiAgICBfY2FzdFZpc2liaWxpdHkoc3RhcnRYLCBzdGFydFksIHJvdywgdmlzU2xvcGVTdGFydCwgdmlzU2xvcGVFbmQsIHJhZGl1cywgeHgsIHh5LCB5eCwgeXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh2aXNTbG9wZVN0YXJ0IDwgdmlzU2xvcGVFbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDw9IHJhZGl1czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAtaSAtIDE7XG4gICAgICAgICAgICBsZXQgZHkgPSAtaTtcbiAgICAgICAgICAgIGxldCBibG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbmV3U3RhcnQgPSAwO1xuICAgICAgICAgICAgLy8nUm93JyBjb3VsZCBiZSBjb2x1bW4sIG5hbWVzIGhlcmUgYXNzdW1lIG9jdGFudCAwIGFuZCB3b3VsZCBiZSBmbGlwcGVkIGZvciBoYWxmIHRoZSBvY3RhbnRzXG4gICAgICAgICAgICB3aGlsZSAoZHggPD0gMCkge1xuICAgICAgICAgICAgICAgIGR4ICs9IDE7XG4gICAgICAgICAgICAgICAgLy9UcmFuc2xhdGUgZnJvbSByZWxhdGl2ZSBjb29yZGluYXRlcyB0byBtYXAgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICBsZXQgbWFwWCA9IHN0YXJ0WCArIGR4ICogeHggKyBkeSAqIHh5O1xuICAgICAgICAgICAgICAgIGxldCBtYXBZID0gc3RhcnRZICsgZHggKiB5eCArIGR5ICogeXk7XG4gICAgICAgICAgICAgICAgLy9SYW5nZSBvZiB0aGUgcm93XG4gICAgICAgICAgICAgICAgbGV0IHNsb3BlU3RhcnQgPSAoZHggLSAwLjUpIC8gKGR5ICsgMC41KTtcbiAgICAgICAgICAgICAgICBsZXQgc2xvcGVFbmQgPSAoZHggKyAwLjUpIC8gKGR5IC0gMC41KTtcbiAgICAgICAgICAgICAgICAvL0lnbm9yZSBpZiBub3QgeWV0IGF0IGxlZnQgZWRnZSBvZiBPY3RhbnRcbiAgICAgICAgICAgICAgICBpZiAoc2xvcGVFbmQgPiB2aXNTbG9wZVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0RvbmUgaWYgcGFzdCByaWdodCBlZGdlXG4gICAgICAgICAgICAgICAgaWYgKHNsb3BlU3RhcnQgPCB2aXNTbG9wZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9JZiBpdCdzIGluIHJhbmdlLCBpdCdzIHZpc2libGVcbiAgICAgICAgICAgICAgICBpZiAoKGR4ICogZHggKyBkeSAqIGR5KSA8IChyYWRpdXMgKiByYWRpdXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1hcFgsIG1hcFksIGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiB0aWxlIGlzIGEgYmxvY2tpbmcgdGlsZSwgY2FzdCBhcm91bmQgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9saWdodFBhc3NlcyhtYXBYLCBtYXBZKSAmJiBpIDwgcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc3RWaXNpYmlsaXR5KHN0YXJ0WCwgc3RhcnRZLCBpICsgMSwgdmlzU2xvcGVTdGFydCwgc2xvcGVTdGFydCwgcmFkaXVzLCB4eCwgeHksIHl4LCB5eSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBzbG9wZUVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9LZWVwIG5hcnJvd2luZyBpZiBzY2FubmluZyBhY3Jvc3MgYSBibG9ja1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2xpZ2h0UGFzc2VzKG1hcFgsIG1hcFkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHNsb3BlRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9CbG9jayBoYXMgZW5kZWRcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2aXNTbG9wZVN0YXJ0ID0gbmV3U3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUk5HIH0gZnJvbSBcIi4vcm5nLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXkuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4vc3RyaW5nZ2VuZXJhdG9yLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50UXVldWUgfSBmcm9tIFwiLi9ldmVudHF1ZXVlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjaGVkdWxlciB9IGZyb20gXCIuL3NjaGVkdWxlci9pbmRleC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGT1YgfSBmcm9tIFwiLi9mb3YvaW5kZXguanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSBcIi4vbWFwL2luZGV4LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vaXNlIH0gZnJvbSBcIi4vbm9pc2UvaW5kZXguanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGF0aCB9IGZyb20gXCIuL3BhdGgvaW5kZXguanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5naW5lIH0gZnJvbSBcIi4vZW5naW5lLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpZ2h0aW5nIH0gZnJvbSBcIi4vbGlnaHRpbmcuanNcIjtcbmV4cG9ydCB7IERFRkFVTFRfV0lEVEgsIERFRkFVTFRfSEVJR0hULCBESVJTLCBLRVlTIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcbmV4cG9ydCBjb25zdCBVdGlsID0gdXRpbDtcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gXCIuL2NvbG9yLmpzXCI7XG5leHBvcnQgY29uc3QgQ29sb3IgPSBjb2xvcjtcbmltcG9ydCAqIGFzIHRleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuZXhwb3J0IGNvbnN0IFRleHQgPSB0ZXh0O1xuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSBcIi4vY29sb3IuanNcIjtcbjtcbjtcbjtcbjtcbi8qKlxuICogTGlnaHRpbmcgY29tcHV0YXRpb24sIGJhc2VkIG9uIGEgdHJhZGl0aW9uYWwgRk9WIGZvciBtdWx0aXBsZSBsaWdodCBzb3VyY2VzIGFuZCBtdWx0aXBsZSBwYXNzZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0aW5nIHtcbiAgICBjb25zdHJ1Y3RvcihyZWZsZWN0aXZpdHlDYWxsYmFjaywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3JlZmxlY3Rpdml0eUNhbGxiYWNrID0gcmVmbGVjdGl2aXR5Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7fTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcGFzc2VzOiAxLFxuICAgICAgICAgICAgZW1pc3Npb25UaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgICAgIHJhbmdlOiAxMFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fbGlnaHRzID0ge307XG4gICAgICAgIHRoaXMuX3JlZmxlY3Rpdml0eUNhY2hlID0ge307XG4gICAgICAgIHRoaXMuX2ZvdkNhY2hlID0ge307XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRqdXN0IG9wdGlvbnMgYXQgcnVudGltZVxuICAgICAqL1xuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdXNlZCBGaWVsZC1PZi1WaWV3IGFsZ29cbiAgICAgKi9cbiAgICBzZXRGT1YoZm92KSB7XG4gICAgICAgIHRoaXMuX2ZvdiA9IGZvdjtcbiAgICAgICAgdGhpcy5fZm92Q2FjaGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCAob3IgcmVtb3ZlKSBhIGxpZ2h0IHNvdXJjZVxuICAgICAqL1xuICAgIHNldExpZ2h0KHgsIHksIGNvbG9yKSB7XG4gICAgICAgIGxldCBrZXkgPSB4ICsgXCIsXCIgKyB5O1xuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0c1trZXldID0gKHR5cGVvZiAoY29sb3IpID09IFwic3RyaW5nXCIgPyBDb2xvci5mcm9tU3RyaW5nKGNvbG9yKSA6IGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saWdodHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBsaWdodCBzb3VyY2VzXG4gICAgICovXG4gICAgY2xlYXJMaWdodHMoKSB7IHRoaXMuX2xpZ2h0cyA9IHt9OyB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHByZS1jb21wdXRlZCB0b3BvbG9neSB2YWx1ZXMuIENhbGwgd2hlbmV2ZXIgdGhlIHVuZGVybHlpbmcgbWFwIGNoYW5nZXMgaXRzIGxpZ2h0LXBhc3NhYmlsaXR5LlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9yZWZsZWN0aXZpdHlDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9mb3ZDYWNoZSA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgbGlnaHRpbmdcbiAgICAgKi9cbiAgICBjb21wdXRlKGxpZ2h0aW5nQ2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGRvbmVDZWxscyA9IHt9O1xuICAgICAgICBsZXQgZW1pdHRpbmdDZWxscyA9IHt9O1xuICAgICAgICBsZXQgbGl0Q2VsbHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2xpZ2h0cykgeyAvKiBwcmVwYXJlIGVtaXR0ZXJzIGZvciBmaXJzdCBwYXNzICovXG4gICAgICAgICAgICBsZXQgbGlnaHQgPSB0aGlzLl9saWdodHNba2V5XTtcbiAgICAgICAgICAgIGVtaXR0aW5nQ2VsbHNba2V5XSA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgIENvbG9yLmFkZF8oZW1pdHRpbmdDZWxsc1trZXldLCBsaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vcHRpb25zLnBhc3NlczsgaSsrKSB7IC8qIG1haW4gbG9vcCAqL1xuICAgICAgICAgICAgdGhpcy5fZW1pdExpZ2h0KGVtaXR0aW5nQ2VsbHMsIGxpdENlbGxzLCBkb25lQ2VsbHMpO1xuICAgICAgICAgICAgaWYgKGkgKyAxID09IHRoaXMuX29wdGlvbnMucGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IC8qIG5vdCBmb3IgdGhlIGxhc3QgcGFzcyAqL1xuICAgICAgICAgICAgZW1pdHRpbmdDZWxscyA9IHRoaXMuX2NvbXB1dGVFbWl0dGVycyhsaXRDZWxscywgZG9uZUNlbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBsaXRLZXkgaW4gbGl0Q2VsbHMpIHsgLyogbGV0IHRoZSB1c2VyIGtub3cgd2hhdCBhbmQgaG93IGlzIGxpdCAqL1xuICAgICAgICAgICAgbGV0IHBhcnRzID0gbGl0S2V5LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChwYXJ0c1sxXSk7XG4gICAgICAgICAgICBsaWdodGluZ0NhbGxiYWNrKHgsIHksIGxpdENlbGxzW2xpdEtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIG9uZSBpdGVyYXRpb24gZnJvbSBhbGwgZW1pdHRpbmcgY2VsbHNcbiAgICAgKiBAcGFyYW0gZW1pdHRpbmdDZWxscyBUaGVzZSBlbWl0IGxpZ2h0XG4gICAgICogQHBhcmFtIGxpdENlbGxzIEFkZCBwcm9qZWN0ZWQgbGlnaHQgdG8gdGhlc2VcbiAgICAgKiBAcGFyYW0gZG9uZUNlbGxzIFRoZXNlIGFscmVhZHkgZW1pdHRlZCwgZm9yYmlkIHRoZW0gZnJvbSBmdXJ0aGVyIGNhbGN1bGF0aW9uc1xuICAgICAqL1xuICAgIF9lbWl0TGlnaHQoZW1pdHRpbmdDZWxscywgbGl0Q2VsbHMsIGRvbmVDZWxscykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZW1pdHRpbmdDZWxscykge1xuICAgICAgICAgICAgbGV0IHBhcnRzID0ga2V5LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChwYXJ0c1sxXSk7XG4gICAgICAgICAgICB0aGlzLl9lbWl0TGlnaHRGcm9tQ2VsbCh4LCB5LCBlbWl0dGluZ0NlbGxzW2tleV0sIGxpdENlbGxzKTtcbiAgICAgICAgICAgIGRvbmVDZWxsc1trZXldID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBhIGxpc3Qgb2YgZW1pdHRlcnMgZm9yIG5leHQgcGFzc1xuICAgICAqL1xuICAgIF9jb21wdXRlRW1pdHRlcnMobGl0Q2VsbHMsIGRvbmVDZWxscykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBsaXRDZWxscykge1xuICAgICAgICAgICAgaWYgKGtleSBpbiBkb25lQ2VsbHMpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gLyogYWxyZWFkeSBlbWl0dGVkICovXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBsaXRDZWxsc1trZXldO1xuICAgICAgICAgICAgbGV0IHJlZmxlY3Rpdml0eTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy5fcmVmbGVjdGl2aXR5Q2FjaGUpIHtcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHkgPSB0aGlzLl9yZWZsZWN0aXZpdHlDYWNoZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0ga2V5LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHkgPSB0aGlzLl9yZWZsZWN0aXZpdHlDYWxsYmFjayh4LCB5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZsZWN0aXZpdHlDYWNoZVtrZXldID0gcmVmbGVjdGl2aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlZmxlY3Rpdml0eSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IC8qIHdpbGwgbm90IHJlZmxlY3QgYXQgYWxsICovXG4gICAgICAgICAgICAvKiBjb21wdXRlIGVtaXNzaW9uIGNvbG9yICovXG4gICAgICAgICAgICBsZXQgZW1pc3Npb24gPSBbMCwgMCwgMF07XG4gICAgICAgICAgICBsZXQgaW50ZW5zaXR5ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBNYXRoLnJvdW5kKGNvbG9yW2ldICogcmVmbGVjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICBlbWlzc2lvbltpXSA9IHBhcnQ7XG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5ICs9IHBhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW50ZW5zaXR5ID4gdGhpcy5fb3B0aW9ucy5lbWlzc2lvblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZW1pc3Npb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBvbmUgaXRlcmF0aW9uIGZyb20gb25lIGNlbGxcbiAgICAgKi9cbiAgICBfZW1pdExpZ2h0RnJvbUNlbGwoeCwgeSwgY29sb3IsIGxpdENlbGxzKSB7XG4gICAgICAgIGxldCBrZXkgPSB4ICsgXCIsXCIgKyB5O1xuICAgICAgICBsZXQgZm92O1xuICAgICAgICBpZiAoa2V5IGluIHRoaXMuX2ZvdkNhY2hlKSB7XG4gICAgICAgICAgICBmb3YgPSB0aGlzLl9mb3ZDYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm92ID0gdGhpcy5fdXBkYXRlRk9WKHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGZvdktleSBpbiBmb3YpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRmFjdG9yID0gZm92W2ZvdktleV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgaWYgKGZvdktleSBpbiBsaXRDZWxscykgeyAvKiBhbHJlYWR5IGxpdCAqL1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxpdENlbGxzW2ZvdktleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLyogbmV3bHkgbGl0ICovXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWzAsIDAsIDBdO1xuICAgICAgICAgICAgICAgIGxpdENlbGxzW2ZvdktleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSArPSBNYXRoLnJvdW5kKGNvbG9yW2ldICogZm9ybUZhY3Rvcik7XG4gICAgICAgICAgICB9IC8qIGFkZCBsaWdodCBjb2xvciAqL1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIEZPViAoXCJmb3JtIGZhY3RvclwiKSBmb3IgYSBwb3RlbnRpYWwgbGlnaHQgc291cmNlIGF0IFt4LHldXG4gICAgICovXG4gICAgX3VwZGF0ZUZPVih4LCB5KSB7XG4gICAgICAgIGxldCBrZXkxID0geCArIFwiLFwiICsgeTtcbiAgICAgICAgbGV0IGNhY2hlID0ge307XG4gICAgICAgIHRoaXMuX2ZvdkNhY2hlW2tleTFdID0gY2FjaGU7XG4gICAgICAgIGxldCByYW5nZSA9IHRoaXMuX29wdGlvbnMucmFuZ2U7XG4gICAgICAgIGZ1bmN0aW9uIGNiKHgsIHksIHIsIHZpcykge1xuICAgICAgICAgICAgbGV0IGtleTIgPSB4ICsgXCIsXCIgKyB5O1xuICAgICAgICAgICAgbGV0IGZvcm1GYWN0b3IgPSB2aXMgKiAoMSAtIHIgLyByYW5nZSk7XG4gICAgICAgICAgICBpZiAoZm9ybUZhY3RvciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGVba2V5Ml0gPSBmb3JtRmFjdG9yO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgdGhpcy5fZm92LmNvbXB1dGUoeCwgeSwgcmFuZ2UsIGNiLmJpbmQodGhpcykpO1xuICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXAuanNcIjtcbi8qKlxuICogQGNsYXNzIFNpbXBsZSBlbXB0eSByZWN0YW5ndWxhciByb29tXG4gKiBAYXVnbWVudHMgUk9ULk1hcFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVuYSBleHRlbmRzIE1hcCB7XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB3ID0gdGhpcy5fd2lkdGggLSAxO1xuICAgICAgICBsZXQgaCA9IHRoaXMuX2hlaWdodCAtIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHc7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVtcHR5ID0gKGkgJiYgaiAmJiBpIDwgdyAmJiBqIDwgaCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaSwgaiwgZW1wdHkgPyAwIDogMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXAuanNcIjtcbmltcG9ydCB7IERJUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgUk5HIGZyb20gXCIuLi9ybmcuanNcIjtcbjtcbi8qKlxuICogQGNsYXNzIENlbGx1bGFyIGF1dG9tYXRvbiBtYXAgZ2VuZXJhdG9yXG4gKiBAYXVnbWVudHMgUk9ULk1hcFxuICogQHBhcmFtIHtpbnR9IFt3aWR0aD1ST1QuREVGQVVMVF9XSURUSF1cbiAqIEBwYXJhbSB7aW50fSBbaGVpZ2h0PVJPVC5ERUZBVUxUX0hFSUdIVF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uc1xuICogQHBhcmFtIHtpbnRbXX0gW29wdGlvbnMuYm9ybl0gTGlzdCBvZiBuZWlnaGJvciBjb3VudHMgZm9yIGEgbmV3IGNlbGwgdG8gYmUgYm9ybiBpbiBlbXB0eSBzcGFjZVxuICogQHBhcmFtIHtpbnRbXX0gW29wdGlvbnMuc3Vydml2ZV0gTGlzdCBvZiBuZWlnaGJvciBjb3VudHMgZm9yIGFuIGV4aXN0aW5nICBjZWxsIHRvIHN1cnZpdmVcbiAqIEBwYXJhbSB7aW50fSBbb3B0aW9ucy50b3BvbG9neV0gVG9wb2xvZ3kgNCBvciA2IG9yIDhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbHVsYXIgZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGJvcm46IFs1LCA2LCA3LCA4XSxcbiAgICAgICAgICAgIHN1cnZpdmU6IFs0LCA1LCA2LCA3LCA4XSxcbiAgICAgICAgICAgIHRvcG9sb2d5OiA4XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGlycyA9IERJUlNbdGhpcy5fb3B0aW9ucy50b3BvbG9neV07XG4gICAgICAgIHRoaXMuX21hcCA9IHRoaXMuX2ZpbGxNYXAoMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbGwgdGhlIG1hcCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBwcm9iYWJpbGl0eSBQcm9iYWJpbGl0eSBmb3IgYSBjZWxsIHRvIGJlY29tZSBhbGl2ZTsgMCA9IGFsbCBlbXB0eSwgMSA9IGFsbCBmdWxsXG4gICAgICovXG4gICAgcmFuZG9taXplKHByb2JhYmlsaXR5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcFtpXVtqXSA9IChSTkcuZ2V0VW5pZm9ybSgpIDwgcHJvYmFiaWxpdHkgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5nZSBvcHRpb25zLlxuICAgICAqIEBzZWUgUk9ULk1hcC5DZWxsdWxhclxuICAgICAqL1xuICAgIHNldE9wdGlvbnMob3B0aW9ucykgeyBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpOyB9XG4gICAgc2V0KHgsIHksIHZhbHVlKSB7IHRoaXMuX21hcFt4XVt5XSA9IHZhbHVlOyB9XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBuZXdNYXAgPSB0aGlzLl9maWxsTWFwKDApO1xuICAgICAgICBsZXQgYm9ybiA9IHRoaXMuX29wdGlvbnMuYm9ybjtcbiAgICAgICAgbGV0IHN1cnZpdmUgPSB0aGlzLl9vcHRpb25zLnN1cnZpdmU7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5faGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgIGxldCB3aWR0aFN0ZXAgPSAxO1xuICAgICAgICAgICAgbGV0IHdpZHRoU3RhcnQgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kgPT0gNikge1xuICAgICAgICAgICAgICAgIHdpZHRoU3RlcCA9IDI7XG4gICAgICAgICAgICAgICAgd2lkdGhTdGFydCA9IGogJSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHdpZHRoU3RhcnQ7IGkgPCB0aGlzLl93aWR0aDsgaSArPSB3aWR0aFN0ZXApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyID0gdGhpcy5fbWFwW2ldW2pdO1xuICAgICAgICAgICAgICAgIGxldCBuY291bnQgPSB0aGlzLl9nZXROZWlnaGJvcnMoaSwgaik7XG4gICAgICAgICAgICAgICAgaWYgKGN1ciAmJiBzdXJ2aXZlLmluZGV4T2YobmNvdW50KSAhPSAtMSkgeyAvKiBzdXJ2aXZlICovXG4gICAgICAgICAgICAgICAgICAgIG5ld01hcFtpXVtqXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjdXIgJiYgYm9ybi5pbmRleE9mKG5jb3VudCkgIT0gLTEpIHsgLyogYm9ybiAqL1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXBbaV1bal0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIGNhbGxiYWNrICYmIHRoaXMuX3NlcnZpY2VDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgfVxuICAgIF9zZXJ2aWNlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgbGV0IHdpZHRoU3RlcCA9IDE7XG4gICAgICAgICAgICBsZXQgd2lkdGhTdGFydCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50b3BvbG9neSA9PSA2KSB7XG4gICAgICAgICAgICAgICAgd2lkdGhTdGVwID0gMjtcbiAgICAgICAgICAgICAgICB3aWR0aFN0YXJ0ID0gaiAlIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gd2lkdGhTdGFydDsgaSA8IHRoaXMuX3dpZHRoOyBpICs9IHdpZHRoU3RlcCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGksIGosIHRoaXMuX21hcFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IG5laWdoYm9yIGNvdW50IGF0IFtpLGpdIGluIHRoaXMuX21hcFxuICAgICAqL1xuICAgIF9nZXROZWlnaGJvcnMoY3gsIGN5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLl9kaXJzW2ldO1xuICAgICAgICAgICAgbGV0IHggPSBjeCArIGRpclswXTtcbiAgICAgICAgICAgIGxldCB5ID0gY3kgKyBkaXJbMV07XG4gICAgICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLl93aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuX2hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9ICh0aGlzLl9tYXBbeF1beV0gPT0gMSA/IDEgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgZXZlcnkgbm9uLXdhbGwgc3BhY2UgaXMgYWNjZXNzaWJsZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayB0byBjYWxsIHRvIGRpc3BsYXkgbWFwIHdoZW4gZG9cbiAgICAgKiBAcGFyYW0ge2ludH0gdmFsdWUgdG8gY29uc2lkZXIgZW1wdHkgc3BhY2UgLSBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgdG8gY2FsbCB3aGVuIGEgbmV3IGNvbm5lY3Rpb24gaXMgbWFkZVxuICAgICAqL1xuICAgIGNvbm5lY3QoY2FsbGJhY2ssIHZhbHVlLCBjb25uZWN0aW9uQ2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgbGV0IGFsbEZyZWVTcGFjZSA9IFtdO1xuICAgICAgICBsZXQgbm90Q29ubmVjdGVkID0ge307XG4gICAgICAgIC8vIGZpbmQgYWxsIGZyZWUgc3BhY2VcbiAgICAgICAgbGV0IHdpZHRoU3RlcCA9IDE7XG4gICAgICAgIGxldCB3aWR0aFN0YXJ0cyA9IFswLCAwXTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kgPT0gNikge1xuICAgICAgICAgICAgd2lkdGhTdGVwID0gMjtcbiAgICAgICAgICAgIHdpZHRoU3RhcnRzID0gWzAsIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB3aWR0aFN0YXJ0c1t5ICUgMl07IHggPCB0aGlzLl93aWR0aDsgeCArPSB3aWR0aFN0ZXApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZnJlZVNwYWNlKHgsIHksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IFt4LCB5XTtcbiAgICAgICAgICAgICAgICAgICAgbm90Q29ubmVjdGVkW3RoaXMuX3BvaW50S2V5KHApXSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGFsbEZyZWVTcGFjZS5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydCA9IGFsbEZyZWVTcGFjZVtSTkcuZ2V0VW5pZm9ybUludCgwLCBhbGxGcmVlU3BhY2UubGVuZ3RoIC0gMSldO1xuICAgICAgICBsZXQga2V5ID0gdGhpcy5fcG9pbnRLZXkoc3RhcnQpO1xuICAgICAgICBsZXQgY29ubmVjdGVkID0ge307XG4gICAgICAgIGNvbm5lY3RlZFtrZXldID0gc3RhcnQ7XG4gICAgICAgIGRlbGV0ZSBub3RDb25uZWN0ZWRba2V5XTtcbiAgICAgICAgLy8gZmluZCB3aGF0J3MgY29ubmVjdGVkIHRvIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICB0aGlzLl9maW5kQ29ubmVjdGVkKGNvbm5lY3RlZCwgbm90Q29ubmVjdGVkLCBbc3RhcnRdLCBmYWxzZSwgdmFsdWUpO1xuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMobm90Q29ubmVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBmaW5kIHR3byBwb2ludHMgZnJvbSBub3RDb25uZWN0ZWQgdG8gY29ubmVjdGVkXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMuX2dldEZyb21Ubyhjb25uZWN0ZWQsIG5vdENvbm5lY3RlZCk7XG4gICAgICAgICAgICBsZXQgZnJvbSA9IHBbMF07IC8vIG5vdENvbm5lY3RlZFxuICAgICAgICAgICAgbGV0IHRvID0gcFsxXTsgLy8gY29ubmVjdGVkXG4gICAgICAgICAgICAvLyBmaW5kIGV2ZXJ5dGhpbmcgY29ubmVjdGVkIHRvIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgbGV0IGxvY2FsID0ge307XG4gICAgICAgICAgICBsb2NhbFt0aGlzLl9wb2ludEtleShmcm9tKV0gPSBmcm9tO1xuICAgICAgICAgICAgdGhpcy5fZmluZENvbm5lY3RlZChsb2NhbCwgbm90Q29ubmVjdGVkLCBbZnJvbV0sIHRydWUsIHZhbHVlKTtcbiAgICAgICAgICAgIC8vIGNvbm5lY3QgdG8gYSBjb25uZWN0ZWQgY2VsbFxuICAgICAgICAgICAgbGV0IHR1bm5lbEZuID0gKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kgPT0gNiA/IHRoaXMuX3R1bm5lbFRvQ29ubmVjdGVkNiA6IHRoaXMuX3R1bm5lbFRvQ29ubmVjdGVkKTtcbiAgICAgICAgICAgIHR1bm5lbEZuLmNhbGwodGhpcywgdG8sIGZyb20sIGNvbm5lY3RlZCwgbm90Q29ubmVjdGVkLCB2YWx1ZSwgY29ubmVjdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIG5vdyBhbGwgb2YgbG9jYWwgaXMgY29ubmVjdGVkXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIGxvY2FsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBwID0gbG9jYWxba107XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW3BwWzBdXVtwcFsxXV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRba10gPSBwcDtcbiAgICAgICAgICAgICAgICBkZWxldGUgbm90Q29ubmVjdGVkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrICYmIHRoaXMuX3NlcnZpY2VDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgcmFuZG9tIHBvaW50cyB0byBjb25uZWN0LiBTZWFyY2ggZm9yIHRoZSBjbG9zZXN0IHBvaW50IGluIHRoZSBsYXJnZXIgc3BhY2UuXG4gICAgICogVGhpcyBpcyB0byBtaW5pbWl6ZSB0aGUgbGVuZ3RoIG9mIHRoZSBwYXNzYWdlIHdoaWxlIG1haW50YWluaW5nIGdvb2QgcGVyZm9ybWFuY2UuXG4gICAgICovXG4gICAgX2dldEZyb21Ubyhjb25uZWN0ZWQsIG5vdENvbm5lY3RlZCkge1xuICAgICAgICBsZXQgZnJvbSA9IFswLCAwXSwgdG8gPSBbMCwgMF0sIGQ7XG4gICAgICAgIGxldCBjb25uZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoY29ubmVjdGVkKTtcbiAgICAgICAgbGV0IG5vdENvbm5lY3RlZEtleXMgPSBPYmplY3Qua2V5cyhub3RDb25uZWN0ZWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZEtleXMubGVuZ3RoIDwgbm90Q29ubmVjdGVkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5cyA9IGNvbm5lY3RlZEtleXM7XG4gICAgICAgICAgICAgICAgdG8gPSBjb25uZWN0ZWRba2V5c1tSTkcuZ2V0VW5pZm9ybUludCgwLCBrZXlzLmxlbmd0aCAtIDEpXV07XG4gICAgICAgICAgICAgICAgZnJvbSA9IHRoaXMuX2dldENsb3Nlc3QodG8sIG5vdENvbm5lY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5cyA9IG5vdENvbm5lY3RlZEtleXM7XG4gICAgICAgICAgICAgICAgZnJvbSA9IG5vdENvbm5lY3RlZFtrZXlzW1JORy5nZXRVbmlmb3JtSW50KDAsIGtleXMubGVuZ3RoIC0gMSldXTtcbiAgICAgICAgICAgICAgICB0byA9IHRoaXMuX2dldENsb3Nlc3QoZnJvbSwgY29ubmVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQgPSAoZnJvbVswXSAtIHRvWzBdKSAqIChmcm9tWzBdIC0gdG9bMF0pICsgKGZyb21bMV0gLSB0b1sxXSkgKiAoZnJvbVsxXSAtIHRvWzFdKTtcbiAgICAgICAgICAgIGlmIChkIDwgNjQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj4+PiBjb25uZWN0ZWQ9XCIgKyB0byArIFwiIG5vdENvbm5lY3RlZD1cIiArIGZyb20gKyBcIiBkaXN0PVwiICsgZCk7XG4gICAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgIH1cbiAgICBfZ2V0Q2xvc2VzdChwb2ludCwgc3BhY2UpIHtcbiAgICAgICAgbGV0IG1pblBvaW50ID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbkRpc3QgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBrIGluIHNwYWNlKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHNwYWNlW2tdO1xuICAgICAgICAgICAgbGV0IGQgPSAocFswXSAtIHBvaW50WzBdKSAqIChwWzBdIC0gcG9pbnRbMF0pICsgKHBbMV0gLSBwb2ludFsxXSkgKiAocFsxXSAtIHBvaW50WzFdKTtcbiAgICAgICAgICAgIGlmIChtaW5EaXN0ID09IG51bGwgfHwgZCA8IG1pbkRpc3QpIHtcbiAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZDtcbiAgICAgICAgICAgICAgICBtaW5Qb2ludCA9IHA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pblBvaW50O1xuICAgIH1cbiAgICBfZmluZENvbm5lY3RlZChjb25uZWN0ZWQsIG5vdENvbm5lY3RlZCwgc3RhY2ssIGtlZXBOb3RDb25uZWN0ZWQsIHZhbHVlKSB7XG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHN0YWNrLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgICAgIGxldCB0ZXN0cztcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnRvcG9sb2d5ID09IDYpIHtcbiAgICAgICAgICAgICAgICB0ZXN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgW3BbMF0gKyAyLCBwWzFdXSxcbiAgICAgICAgICAgICAgICAgICAgW3BbMF0gKyAxLCBwWzFdIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIFtwWzBdIC0gMSwgcFsxXSAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBbcFswXSAtIDIsIHBbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbcFswXSAtIDEsIHBbMV0gKyAxXSxcbiAgICAgICAgICAgICAgICAgICAgW3BbMF0gKyAxLCBwWzFdICsgMV0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlc3RzID0gW1xuICAgICAgICAgICAgICAgICAgICBbcFswXSArIDEsIHBbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbcFswXSAtIDEsIHBbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbcFswXSwgcFsxXSArIDFdLFxuICAgICAgICAgICAgICAgICAgICBbcFswXSwgcFsxXSAtIDFdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5fcG9pbnRLZXkodGVzdHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ZWRba2V5XSA9PSBudWxsICYmIHRoaXMuX2ZyZWVTcGFjZSh0ZXN0c1tpXVswXSwgdGVzdHNbaV1bMV0sIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRba2V5XSA9IHRlc3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtlZXBOb3RDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub3RDb25uZWN0ZWRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRlc3RzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3R1bm5lbFRvQ29ubmVjdGVkKHRvLCBmcm9tLCBjb25uZWN0ZWQsIG5vdENvbm5lY3RlZCwgdmFsdWUsIGNvbm5lY3Rpb25DYWxsYmFjaykge1xuICAgICAgICBsZXQgYSwgYjtcbiAgICAgICAgaWYgKGZyb21bMF0gPCB0b1swXSkge1xuICAgICAgICAgICAgYSA9IGZyb207XG4gICAgICAgICAgICBiID0gdG87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhID0gdG87XG4gICAgICAgICAgICBiID0gZnJvbTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB4eCA9IGFbMF07IHh4IDw9IGJbMF07IHh4KyspIHtcbiAgICAgICAgICAgIHRoaXMuX21hcFt4eF1bYVsxXV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBwID0gW3h4LCBhWzFdXTtcbiAgICAgICAgICAgIGxldCBwa2V5ID0gdGhpcy5fcG9pbnRLZXkocCk7XG4gICAgICAgICAgICBjb25uZWN0ZWRbcGtleV0gPSBwO1xuICAgICAgICAgICAgZGVsZXRlIG5vdENvbm5lY3RlZFtwa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbkNhbGxiYWNrICYmIGFbMF0gPCBiWzBdKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uQ2FsbGJhY2soYSwgW2JbMF0sIGFbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB4IGlzIG5vdyBmaXhlZFxuICAgICAgICBsZXQgeCA9IGJbMF07XG4gICAgICAgIGlmIChmcm9tWzFdIDwgdG9bMV0pIHtcbiAgICAgICAgICAgIGEgPSBmcm9tO1xuICAgICAgICAgICAgYiA9IHRvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYSA9IHRvO1xuICAgICAgICAgICAgYiA9IGZyb207XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeXkgPSBhWzFdOyB5eSA8IGJbMV07IHl5KyspIHtcbiAgICAgICAgICAgIHRoaXMuX21hcFt4XVt5eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBwID0gW3gsIHl5XTtcbiAgICAgICAgICAgIGxldCBwa2V5ID0gdGhpcy5fcG9pbnRLZXkocCk7XG4gICAgICAgICAgICBjb25uZWN0ZWRbcGtleV0gPSBwO1xuICAgICAgICAgICAgZGVsZXRlIG5vdENvbm5lY3RlZFtwa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbkNhbGxiYWNrICYmIGFbMV0gPCBiWzFdKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uQ2FsbGJhY2soW2JbMF0sIGFbMV1dLCBbYlswXSwgYlsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIF90dW5uZWxUb0Nvbm5lY3RlZDYodG8sIGZyb20sIGNvbm5lY3RlZCwgbm90Q29ubmVjdGVkLCB2YWx1ZSwgY29ubmVjdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBhLCBiO1xuICAgICAgICBpZiAoZnJvbVswXSA8IHRvWzBdKSB7XG4gICAgICAgICAgICBhID0gZnJvbTtcbiAgICAgICAgICAgIGIgPSB0bztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGEgPSB0bztcbiAgICAgICAgICAgIGIgPSBmcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIHR1bm5lbCBkaWFnb25hbGx5IHVudGlsIGhvcml6b250YWxseSBsZXZlbFxuICAgICAgICBsZXQgeHggPSBhWzBdO1xuICAgICAgICBsZXQgeXkgPSBhWzFdO1xuICAgICAgICB3aGlsZSAoISh4eCA9PSBiWzBdICYmIHl5ID09IGJbMV0pKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFdpZHRoID0gMjtcbiAgICAgICAgICAgIGlmICh5eSA8IGJbMV0pIHtcbiAgICAgICAgICAgICAgICB5eSsrO1xuICAgICAgICAgICAgICAgIHN0ZXBXaWR0aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5eSA+IGJbMV0pIHtcbiAgICAgICAgICAgICAgICB5eS0tO1xuICAgICAgICAgICAgICAgIHN0ZXBXaWR0aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeHggPCBiWzBdKSB7XG4gICAgICAgICAgICAgICAgeHggKz0gc3RlcFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeHggPiBiWzBdKSB7XG4gICAgICAgICAgICAgICAgeHggLT0gc3RlcFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYlsxXSAlIDIpIHtcbiAgICAgICAgICAgICAgICAvLyBXb24ndCBzdGVwIG91dHNpZGUgbWFwIGlmIGRlc3RpbmF0aW9uIG9uIGlzIG1hcCdzIHJpZ2h0IGVkZ2VcbiAgICAgICAgICAgICAgICB4eCAtPSBzdGVwV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkaXR0byBmb3IgbGVmdCBlZGdlXG4gICAgICAgICAgICAgICAgeHggKz0gc3RlcFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbWFwW3h4XVt5eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBwID0gW3h4LCB5eV07XG4gICAgICAgICAgICBsZXQgcGtleSA9IHRoaXMuX3BvaW50S2V5KHApO1xuICAgICAgICAgICAgY29ubmVjdGVkW3BrZXldID0gcDtcbiAgICAgICAgICAgIGRlbGV0ZSBub3RDb25uZWN0ZWRbcGtleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbm5lY3Rpb25DYWxsYmFjaykge1xuICAgICAgICAgICAgY29ubmVjdGlvbkNhbGxiYWNrKGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZnJlZVNwYWNlKHgsIHksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuX3dpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5faGVpZ2h0ICYmIHRoaXMuX21hcFt4XVt5XSA9PSB2YWx1ZTtcbiAgICB9XG4gICAgX3BvaW50S2V5KHApIHsgcmV0dXJuIHBbMF0gKyBcIi5cIiArIHBbMV07IH1cbn1cbiIsImltcG9ydCBEdW5nZW9uIGZyb20gXCIuL2R1bmdlb24uanNcIjtcbmltcG9ydCB7IFJvb20sIENvcnJpZG9yIH0gZnJvbSBcIi4vZmVhdHVyZXMuanNcIjtcbmltcG9ydCBSTkcgZnJvbSBcIi4uL3JuZy5qc1wiO1xuaW1wb3J0IHsgRElSUyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmNvbnN0IEZFQVRVUkVTID0ge1xuICAgIFwicm9vbVwiOiBSb29tLFxuICAgIFwiY29ycmlkb3JcIjogQ29ycmlkb3Jcbn07XG4vKipcbiAqIFJhbmRvbSBkdW5nZW9uIGdlbmVyYXRvciB1c2luZyBodW1hbi1saWtlIGRpZ2dpbmcgcGF0dGVybnMuXG4gKiBIZWF2aWx5IGJhc2VkIG9uIE1pa2UgQW5kZXJzb24ncyBpZGVhcyBmcm9tIHRoZSBcIlR5cmFudFwiIGFsZ28sIG1lbnRpb25lZCBhdFxuICogaHR0cDovL3d3dy5yb2d1ZWJhc2luLnJvZ3VlbGlrZWRldmVsb3BtZW50Lm9yZy9pbmRleC5waHA/dGl0bGU9RHVuZ2Vvbi1CdWlsZGluZ19BbGdvcml0aG0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZ2dlciBleHRlbmRzIER1bmdlb24ge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm9vbVdpZHRoOiBbMywgOV0sXG4gICAgICAgICAgICByb29tSGVpZ2h0OiBbMywgNV0sXG4gICAgICAgICAgICBjb3JyaWRvckxlbmd0aDogWzMsIDEwXSxcbiAgICAgICAgICAgIGR1Z1BlcmNlbnRhZ2U6IDAuMixcbiAgICAgICAgICAgIHRpbWVMaW1pdDogMTAwMCAvKiB3ZSBzdG9wIGFmdGVyIHRoaXMgbXVjaCB0aW1lIGhhcyBwYXNzZWQgKG1zZWMpICovXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9mZWF0dXJlcyA9IHtcbiAgICAgICAgICAgIFwicm9vbVwiOiA0LFxuICAgICAgICAgICAgXCJjb3JyaWRvclwiOiA0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX21hcCA9IFtdO1xuICAgICAgICB0aGlzLl9mZWF0dXJlQXR0ZW1wdHMgPSAyMDsgLyogaG93IG1hbnkgdGltZXMgZG8gd2UgdHJ5IHRvIGNyZWF0ZSBhIGZlYXR1cmUgb24gYSBzdWl0YWJsZSB3YWxsICovXG4gICAgICAgIHRoaXMuX3dhbGxzID0ge307IC8qIHRoZXNlIGFyZSBhdmFpbGFibGUgZm9yIGRpZ2dpbmcgKi9cbiAgICAgICAgdGhpcy5fZHVnID0gMDtcbiAgICAgICAgdGhpcy5fZGlnQ2FsbGJhY2sgPSB0aGlzLl9kaWdDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jYW5CZUR1Z0NhbGxiYWNrID0gdGhpcy5fY2FuQmVEdWdDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9pc1dhbGxDYWxsYmFjayA9IHRoaXMuX2lzV2FsbENhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5V2FsbENhbGxiYWNrID0gdGhpcy5fcHJpb3JpdHlXYWxsQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3Jvb21zID0gW107XG4gICAgICAgIHRoaXMuX2NvcnJpZG9ycyA9IFtdO1xuICAgICAgICB0aGlzLl9tYXAgPSB0aGlzLl9maWxsTWFwKDEpO1xuICAgICAgICB0aGlzLl93YWxscyA9IHt9O1xuICAgICAgICB0aGlzLl9kdWcgPSAwO1xuICAgICAgICBsZXQgYXJlYSA9ICh0aGlzLl93aWR0aCAtIDIpICogKHRoaXMuX2hlaWdodCAtIDIpO1xuICAgICAgICB0aGlzLl9maXJzdFJvb20oKTtcbiAgICAgICAgbGV0IHQxID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IHByaW9yaXR5V2FsbHM7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHByaW9yaXR5V2FsbHMgPSAwO1xuICAgICAgICAgICAgbGV0IHQyID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmICh0MiAtIHQxID4gdGhpcy5fb3B0aW9ucy50aW1lTGltaXQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGZpbmQgYSBnb29kIHdhbGwgKi9cbiAgICAgICAgICAgIGxldCB3YWxsID0gdGhpcy5fZmluZFdhbGwoKTtcbiAgICAgICAgICAgIGlmICghd2FsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAvKiBubyBtb3JlIHdhbGxzICovXG4gICAgICAgICAgICBsZXQgcGFydHMgPSB3YWxsLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChwYXJ0c1sxXSk7XG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5fZ2V0RGlnZ2luZ0RpcmVjdGlvbih4LCB5KTtcbiAgICAgICAgICAgIGlmICghZGlyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IC8qIHRoaXMgd2FsbCBpcyBub3Qgc3VpdGFibGUgKi9cbiAgICAgICAgICAgIC8vXHRcdGNvbnNvbGUubG9nKFwid2FsbFwiLCB4LCB5KTtcbiAgICAgICAgICAgIC8qIHRyeSBhZGRpbmcgYSBmZWF0dXJlICovXG4gICAgICAgICAgICBsZXQgZmVhdHVyZUF0dGVtcHRzID0gMDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlQXR0ZW1wdHMrKztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdHJ5RmVhdHVyZSh4LCB5LCBkaXJbMF0sIGRpclsxXSkpIHsgLyogZmVhdHVyZSBhZGRlZCAqL1xuICAgICAgICAgICAgICAgICAgICAvL2lmICh0aGlzLl9yb29tcy5sZW5ndGggKyB0aGlzLl9jb3JyaWRvcnMubGVuZ3RoID09IDIpIHsgdGhpcy5fcm9vbXNbMF0uYWRkRG9vcih4LCB5KTsgfSAvKiBmaXJzdCByb29tIG9maWNpYWxseSBoYXMgZG9vcnMgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vycm91bmRpbmdXYWxscyh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vycm91bmRpbmdXYWxscyh4IC0gZGlyWzBdLCB5IC0gZGlyWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoZmVhdHVyZUF0dGVtcHRzIDwgdGhpcy5fZmVhdHVyZUF0dGVtcHRzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX3dhbGxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3dhbGxzW2lkXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlXYWxscysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5fZHVnIC8gYXJlYSA8IHRoaXMuX29wdGlvbnMuZHVnUGVyY2VudGFnZSB8fCBwcmlvcml0eVdhbGxzKTsgLyogZml4bWUgbnVtYmVyIG9mIHByaW9yaXR5IHdhbGxzICovXG4gICAgICAgIHRoaXMuX2FkZERvb3JzKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpLCBqLCB0aGlzLl9tYXBbaV1bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93YWxscyA9IHt9O1xuICAgICAgICB0aGlzLl9tYXAgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9kaWdDYWxsYmFjayh4LCB5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gMCB8fCB2YWx1ZSA9PSAyKSB7IC8qIGVtcHR5ICovXG4gICAgICAgICAgICB0aGlzLl9tYXBbeF1beV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5fZHVnKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8qIHdhbGwgKi9cbiAgICAgICAgICAgIHRoaXMuX3dhbGxzW3ggKyBcIixcIiArIHldID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaXNXYWxsQ2FsbGJhY2soeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB0aGlzLl93aWR0aCB8fCB5ID49IHRoaXMuX2hlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fbWFwW3hdW3ldID09IDEpO1xuICAgIH1cbiAgICBfY2FuQmVEdWdDYWxsYmFjayh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMSB8fCB5IDwgMSB8fCB4ICsgMSA+PSB0aGlzLl93aWR0aCB8fCB5ICsgMSA+PSB0aGlzLl9oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX21hcFt4XVt5XSA9PSAxKTtcbiAgICB9XG4gICAgX3ByaW9yaXR5V2FsbENhbGxiYWNrKHgsIHkpIHsgdGhpcy5fd2FsbHNbeCArIFwiLFwiICsgeV0gPSAyOyB9XG4gICAgO1xuICAgIF9maXJzdFJvb20oKSB7XG4gICAgICAgIGxldCBjeCA9IE1hdGguZmxvb3IodGhpcy5fd2lkdGggLyAyKTtcbiAgICAgICAgbGV0IGN5ID0gTWF0aC5mbG9vcih0aGlzLl9oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IHJvb20gPSBSb29tLmNyZWF0ZVJhbmRvbUNlbnRlcihjeCwgY3ksIHRoaXMuX29wdGlvbnMpO1xuICAgICAgICB0aGlzLl9yb29tcy5wdXNoKHJvb20pO1xuICAgICAgICByb29tLmNyZWF0ZSh0aGlzLl9kaWdDYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIHN1aXRhYmxlIHdhbGxcbiAgICAgKi9cbiAgICBfZmluZFdhbGwoKSB7XG4gICAgICAgIGxldCBwcmlvMSA9IFtdO1xuICAgICAgICBsZXQgcHJpbzIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5fd2FsbHMpIHtcbiAgICAgICAgICAgIGxldCBwcmlvID0gdGhpcy5fd2FsbHNbaWRdO1xuICAgICAgICAgICAgaWYgKHByaW8gPT0gMikge1xuICAgICAgICAgICAgICAgIHByaW8yLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJpbzEucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyciA9IChwcmlvMi5sZW5ndGggPyBwcmlvMiA6IHByaW8xKTtcbiAgICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAvKiBubyB3YWxscyA6LyAqL1xuICAgICAgICBsZXQgaWQgPSBSTkcuZ2V0SXRlbShhcnIuc29ydCgpKTsgLy8gc29ydCB0byBtYWtlIHRoZSBvcmRlciBkZXRlcm1pbmlzdGljXG4gICAgICAgIGRlbGV0ZSB0aGlzLl93YWxsc1tpZF07XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZXMgYWRkaW5nIGEgZmVhdHVyZVxuICAgICAqIEByZXR1cm5zIHtib29sfSB3YXMgdGhpcyBhIHN1Y2Nlc3NmdWwgdHJ5P1xuICAgICAqL1xuICAgIF90cnlGZWF0dXJlKHgsIHksIGR4LCBkeSkge1xuICAgICAgICBsZXQgZmVhdHVyZU5hbWUgPSBSTkcuZ2V0V2VpZ2h0ZWRWYWx1ZSh0aGlzLl9mZWF0dXJlcyk7XG4gICAgICAgIGxldCBjdG9yID0gRkVBVFVSRVNbZmVhdHVyZU5hbWVdO1xuICAgICAgICBsZXQgZmVhdHVyZSA9IGN0b3IuY3JlYXRlUmFuZG9tQXQoeCwgeSwgZHgsIGR5LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgaWYgKCFmZWF0dXJlLmlzVmFsaWQodGhpcy5faXNXYWxsQ2FsbGJhY2ssIHRoaXMuX2NhbkJlRHVnQ2FsbGJhY2spKSB7XG4gICAgICAgICAgICAvL1x0XHRjb25zb2xlLmxvZyhcIm5vdCB2YWxpZFwiKTtcbiAgICAgICAgICAgIC8vXHRcdGZlYXR1cmUuZGVidWcoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLmNyZWF0ZSh0aGlzLl9kaWdDYWxsYmFjayk7XG4gICAgICAgIC8vXHRmZWF0dXJlLmRlYnVnKCk7XG4gICAgICAgIGlmIChmZWF0dXJlIGluc3RhbmNlb2YgUm9vbSkge1xuICAgICAgICAgICAgdGhpcy5fcm9vbXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZSBpbnN0YW5jZW9mIENvcnJpZG9yKSB7XG4gICAgICAgICAgICBmZWF0dXJlLmNyZWF0ZVByaW9yaXR5V2FsbHModGhpcy5fcHJpb3JpdHlXYWxsQ2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5fY29ycmlkb3JzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9yZW1vdmVTdXJyb3VuZGluZ1dhbGxzKGN4LCBjeSkge1xuICAgICAgICBsZXQgZGVsdGFzID0gRElSU1s0XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWx0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGRlbHRhc1tpXTtcbiAgICAgICAgICAgIGxldCB4ID0gY3ggKyBkZWx0YVswXTtcbiAgICAgICAgICAgIGxldCB5ID0gY3kgKyBkZWx0YVsxXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl93YWxsc1t4ICsgXCIsXCIgKyB5XTtcbiAgICAgICAgICAgIHggPSBjeCArIDIgKiBkZWx0YVswXTtcbiAgICAgICAgICAgIHkgPSBjeSArIDIgKiBkZWx0YVsxXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl93YWxsc1t4ICsgXCIsXCIgKyB5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHZlY3RvciBpbiBcImRpZ2dpbmdcIiBkaXJlY3Rpb24sIG9yIGZhbHNlLCBpZiB0aGlzIGRvZXMgbm90IGV4aXN0IChvciBpcyBub3QgdW5pcXVlKVxuICAgICAqL1xuICAgIF9nZXREaWdnaW5nRGlyZWN0aW9uKGN4LCBjeSkge1xuICAgICAgICBpZiAoY3ggPD0gMCB8fCBjeSA8PSAwIHx8IGN4ID49IHRoaXMuX3dpZHRoIC0gMSB8fCBjeSA+PSB0aGlzLl9oZWlnaHQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgbGV0IGRlbHRhcyA9IERJUlNbNF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVsdGEgPSBkZWx0YXNbaV07XG4gICAgICAgICAgICBsZXQgeCA9IGN4ICsgZGVsdGFbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGN5ICsgZGVsdGFbMV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX21hcFt4XVt5XSkgeyAvKiB0aGVyZSBhbHJlYWR5IGlzIGFub3RoZXIgZW1wdHkgbmVpZ2hib3IhICovXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogbm8gZW1wdHkgbmVpZ2hib3IgKi9cbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbLXJlc3VsdFswXSwgLXJlc3VsdFsxXV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgZW1wdHkgc3BhY2VzIHN1cnJvdW5kaW5nIHJvb21zLCBhbmQgYXBwbHkgZG9vcnMuXG4gICAgICovXG4gICAgX2FkZERvb3JzKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX21hcDtcbiAgICAgICAgZnVuY3Rpb24gaXNXYWxsQ2FsbGJhY2soeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIChkYXRhW3hdW3ldID09IDEpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yb29tcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvb20gPSB0aGlzLl9yb29tc1tpXTtcbiAgICAgICAgICAgIHJvb20uY2xlYXJEb29ycygpO1xuICAgICAgICAgICAgcm9vbS5hZGREb29ycyhpc1dhbGxDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcC5qc1wiO1xuaW1wb3J0IFJORyBmcm9tIFwiLi4vcm5nLmpzXCI7XG4vKipcbiAqIEBjbGFzcyBSZWN1cnNpdmVseSBkaXZpZGVkIG1hemUsIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWF6ZV9nZW5lcmF0aW9uX2FsZ29yaXRobSNSZWN1cnNpdmVfZGl2aXNpb25fbWV0aG9kXG4gKiBAYXVnbWVudHMgUk9ULk1hcFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVkTWF6ZSBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3N0YWNrID0gW107XG4gICAgICAgIHRoaXMuX21hcCA9IFtdO1xuICAgIH1cbiAgICBjcmVhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHcgPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IGggPSB0aGlzLl9oZWlnaHQ7XG4gICAgICAgIHRoaXMuX21hcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHc7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbWFwLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9yZGVyID0gKGkgPT0gMCB8fCBqID09IDAgfHwgaSArIDEgPT0gdyB8fCBqICsgMSA9PSBoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBbaV0ucHVzaChib3JkZXIgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhY2sgPSBbXG4gICAgICAgICAgICBbMSwgMSwgdyAtIDIsIGggLSAyXVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGksIGosIHRoaXMuX21hcFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFwID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBfcHJvY2VzcygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3N0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHJvb20gPSB0aGlzLl9zdGFjay5zaGlmdCgpOyAvKiBbbGVmdCwgdG9wLCByaWdodCwgYm90dG9tXSAqL1xuICAgICAgICAgICAgdGhpcy5fcGFydGl0aW9uUm9vbShyb29tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcGFydGl0aW9uUm9vbShyb29tKSB7XG4gICAgICAgIGxldCBhdmFpbFggPSBbXTtcbiAgICAgICAgbGV0IGF2YWlsWSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gcm9vbVswXSArIDE7IGkgPCByb29tWzJdOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSB0aGlzLl9tYXBbaV1bcm9vbVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuX21hcFtpXVtyb29tWzNdICsgMV07XG4gICAgICAgICAgICBpZiAodG9wICYmIGJvdHRvbSAmJiAhKGkgJSAyKSkge1xuICAgICAgICAgICAgICAgIGF2YWlsWC5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSByb29tWzFdICsgMTsgaiA8IHJvb21bM107IGorKykge1xuICAgICAgICAgICAgbGV0IGxlZnQgPSB0aGlzLl9tYXBbcm9vbVswXSAtIDFdW2pdO1xuICAgICAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5fbWFwW3Jvb21bMl0gKyAxXVtqXTtcbiAgICAgICAgICAgIGlmIChsZWZ0ICYmIHJpZ2h0ICYmICEoaiAlIDIpKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxZLnB1c2goaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdmFpbFgubGVuZ3RoIHx8ICFhdmFpbFkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHggPSBSTkcuZ2V0SXRlbShhdmFpbFgpO1xuICAgICAgICBsZXQgeSA9IFJORy5nZXRJdGVtKGF2YWlsWSk7XG4gICAgICAgIHRoaXMuX21hcFt4XVt5XSA9IDE7XG4gICAgICAgIGxldCB3YWxscyA9IFtdO1xuICAgICAgICBsZXQgdyA9IFtdO1xuICAgICAgICB3YWxscy5wdXNoKHcpOyAvKiBsZWZ0IHBhcnQgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IHJvb21bMF07IGkgPCB4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX21hcFtpXVt5XSA9IDE7XG4gICAgICAgICAgICB3LnB1c2goW2ksIHldKTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gW107XG4gICAgICAgIHdhbGxzLnB1c2godyk7IC8qIHJpZ2h0IHBhcnQgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IHggKyAxOyBpIDw9IHJvb21bMl07IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbWFwW2ldW3ldID0gMTtcbiAgICAgICAgICAgIHcucHVzaChbaSwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHcgPSBbXTtcbiAgICAgICAgd2FsbHMucHVzaCh3KTsgLyogdG9wIHBhcnQgKi9cbiAgICAgICAgZm9yIChsZXQgaiA9IHJvb21bMV07IGogPCB5OyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuX21hcFt4XVtqXSA9IDE7XG4gICAgICAgICAgICB3LnB1c2goW3gsIGpdKTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gW107XG4gICAgICAgIHdhbGxzLnB1c2godyk7IC8qIGJvdHRvbSBwYXJ0ICovXG4gICAgICAgIGZvciAobGV0IGogPSB5ICsgMTsgaiA8PSByb29tWzNdOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuX21hcFt4XVtqXSA9IDE7XG4gICAgICAgICAgICB3LnB1c2goW3gsIGpdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc29saWQgPSBSTkcuZ2V0SXRlbSh3YWxscyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2FsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3ID0gd2FsbHNbaV07XG4gICAgICAgICAgICBpZiAodyA9PSBzb2xpZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhvbGUgPSBSTkcuZ2V0SXRlbSh3KTtcbiAgICAgICAgICAgIHRoaXMuX21hcFtob2xlWzBdXVtob2xlWzFdXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhY2sucHVzaChbcm9vbVswXSwgcm9vbVsxXSwgeCAtIDEsIHkgLSAxXSk7IC8qIGxlZnQgdG9wICovXG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goW3ggKyAxLCByb29tWzFdLCByb29tWzJdLCB5IC0gMV0pOyAvKiByaWdodCB0b3AgKi9cbiAgICAgICAgdGhpcy5fc3RhY2sucHVzaChbcm9vbVswXSwgeSArIDEsIHggLSAxLCByb29tWzNdXSk7IC8qIGxlZnQgYm90dG9tICovXG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goW3ggKyAxLCB5ICsgMSwgcm9vbVsyXSwgcm9vbVszXV0pOyAvKiByaWdodCBib3R0b20gKi9cbiAgICB9XG59XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcC5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgRHVuZ2VvbiBtYXA6IGhhcyByb29tcyBhbmQgY29ycmlkb3JzXG4gKiBAYXVnbWVudHMgUk9ULk1hcFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW5nZW9uIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLl9yb29tcyA9IFtdO1xuICAgICAgICB0aGlzLl9jb3JyaWRvcnMgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBnZW5lcmF0ZWQgcm9vbXNcbiAgICAgKiBAcmV0dXJucyB7Uk9ULk1hcC5GZWF0dXJlLlJvb21bXX1cbiAgICAgKi9cbiAgICBnZXRSb29tcygpIHsgcmV0dXJuIHRoaXMuX3Jvb21zOyB9XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBnZW5lcmF0ZWQgY29ycmlkb3JzXG4gICAgICogQHJldHVybnMge1JPVC5NYXAuRmVhdHVyZS5Db3JyaWRvcltdfVxuICAgICAqL1xuICAgIGdldENvcnJpZG9ycygpIHsgcmV0dXJuIHRoaXMuX2NvcnJpZG9yczsgfVxufVxuIiwiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXAuanNcIjtcbmltcG9ydCBSTkcgZnJvbSBcIi4uL3JuZy5qc1wiO1xuLyoqXG4gKiBKb2luIGxpc3RzIHdpdGggXCJpXCIgYW5kIFwiaSsxXCJcbiAqL1xuZnVuY3Rpb24gYWRkVG9MaXN0KGksIEwsIFIpIHtcbiAgICBSW0xbaSArIDFdXSA9IFJbaV07XG4gICAgTFtSW2ldXSA9IExbaSArIDFdO1xuICAgIFJbaV0gPSBpICsgMTtcbiAgICBMW2kgKyAxXSA9IGk7XG59XG4vKipcbiAqIFJlbW92ZSBcImlcIiBmcm9tIGl0cyBsaXN0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0KGksIEwsIFIpIHtcbiAgICBSW0xbaV1dID0gUltpXTtcbiAgICBMW1JbaV1dID0gTFtpXTtcbiAgICBSW2ldID0gaTtcbiAgICBMW2ldID0gaTtcbn1cbi8qKlxuICogTWF6ZSBnZW5lcmF0b3IgLSBFbGxlcidzIGFsZ29yaXRobVxuICogU2VlIGh0dHA6Ly9ob21lcGFnZXMuY3dpLm5sL350cm9tcC9tYXplLmh0bWwgZm9yIGV4cGxhbmF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGVyTWF6ZSBleHRlbmRzIE1hcCB7XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLl9maWxsTWFwKDEpO1xuICAgICAgICBsZXQgdyA9IE1hdGguY2VpbCgodGhpcy5fd2lkdGggLSAyKSAvIDIpO1xuICAgICAgICBsZXQgcmFuZCA9IDkgLyAyNDtcbiAgICAgICAgbGV0IEwgPSBbXTtcbiAgICAgICAgbGV0IFIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3OyBpKyspIHtcbiAgICAgICAgICAgIEwucHVzaChpKTtcbiAgICAgICAgICAgIFIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBMLnB1c2godyAtIDEpOyAvKiBmYWtlIHN0b3AtYmxvY2sgYXQgdGhlIHJpZ2h0IHNpZGUgKi9cbiAgICAgICAgbGV0IGo7XG4gICAgICAgIGZvciAoaiA9IDE7IGogKyAzIDwgdGhpcy5faGVpZ2h0OyBqICs9IDIpIHtcbiAgICAgICAgICAgIC8qIG9uZSByb3cgKi9cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLyogY2VsbCBjb29yZHMgKHdpbGwgYmUgYWx3YXlzIGVtcHR5KSAqL1xuICAgICAgICAgICAgICAgIGxldCB4ID0gMiAqIGkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gajtcbiAgICAgICAgICAgICAgICBtYXBbeF1beV0gPSAwO1xuICAgICAgICAgICAgICAgIC8qIHJpZ2h0IGNvbm5lY3Rpb24gKi9cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSBMW2kgKyAxXSAmJiBSTkcuZ2V0VW5pZm9ybSgpID4gcmFuZCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0xpc3QoaSwgTCwgUik7XG4gICAgICAgICAgICAgICAgICAgIG1hcFt4ICsgMV1beV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBib3R0b20gY29ubmVjdGlvbiAqL1xuICAgICAgICAgICAgICAgIGlmIChpICE9IExbaV0gJiYgUk5HLmdldFVuaWZvcm0oKSA+IHJhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogcmVtb3ZlIGNvbm5lY3Rpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUxpc3QoaSwgTCwgUik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvKiBjcmVhdGUgY29ubmVjdGlvbiAqL1xuICAgICAgICAgICAgICAgICAgICBtYXBbeF1beSArIDFdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogbGFzdCByb3cgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3OyBpKyspIHtcbiAgICAgICAgICAgIC8qIGNlbGwgY29vcmRzICh3aWxsIGJlIGFsd2F5cyBlbXB0eSkgKi9cbiAgICAgICAgICAgIGxldCB4ID0gMiAqIGkgKyAxO1xuICAgICAgICAgICAgbGV0IHkgPSBqO1xuICAgICAgICAgICAgbWFwW3hdW3ldID0gMDtcbiAgICAgICAgICAgIC8qIHJpZ2h0IGNvbm5lY3Rpb24gKi9cbiAgICAgICAgICAgIGlmIChpICE9IExbaSArIDFdICYmIChpID09IExbaV0gfHwgUk5HLmdldFVuaWZvcm0oKSA+IHJhbmQpKSB7XG4gICAgICAgICAgICAgICAgLyogZGlnIHJpZ2h0IGFsc28gaWYgdGhlIGNlbGwgaXMgc2VwYXJhdGVkLCBzbyBpdCBnZXRzIGNvbm5lY3RlZCB0byB0aGUgcmVzdCBvZiBtYXplICovXG4gICAgICAgICAgICAgICAgYWRkVG9MaXN0KGksIEwsIFIpO1xuICAgICAgICAgICAgICAgIG1hcFt4ICsgMV1beV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlRnJvbUxpc3QoaSwgTCwgUik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2hlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaSwgaiwgbWFwW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUk5HIGZyb20gXCIuLi9ybmcuanNcIjtcbjtcbi8qKlxuICogQGNsYXNzIER1bmdlb24gZmVhdHVyZTsgaGFzIG93biAuY3JlYXRlKCkgbWV0aG9kXG4gKi9cbmNsYXNzIEZlYXR1cmUge1xufVxuLyoqXG4gKiBAY2xhc3MgUm9vbVxuICogQGF1Z21lbnRzIFJPVC5NYXAuRmVhdHVyZVxuICogQHBhcmFtIHtpbnR9IHgxXG4gKiBAcGFyYW0ge2ludH0geTFcbiAqIEBwYXJhbSB7aW50fSB4MlxuICogQHBhcmFtIHtpbnR9IHkyXG4gKiBAcGFyYW0ge2ludH0gW2Rvb3JYXVxuICogQHBhcmFtIHtpbnR9IFtkb29yWV1cbiAqL1xuZXhwb3J0IGNsYXNzIFJvb20gZXh0ZW5kcyBGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3Rvcih4MSwgeTEsIHgyLCB5MiwgZG9vclgsIGRvb3JZKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3gxID0geDE7XG4gICAgICAgIHRoaXMuX3kxID0geTE7XG4gICAgICAgIHRoaXMuX3gyID0geDI7XG4gICAgICAgIHRoaXMuX3kyID0geTI7XG4gICAgICAgIHRoaXMuX2Rvb3JzID0ge307XG4gICAgICAgIGlmIChkb29yWCAhPT0gdW5kZWZpbmVkICYmIGRvb3JZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRG9vcihkb29yWCwgZG9vclkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiBSb29tIG9mIHJhbmRvbSBzaXplLCB3aXRoIGEgZ2l2ZW4gZG9vcnMgYW5kIGRpcmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVSYW5kb21BdCh4LCB5LCBkeCwgZHksIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1pbiA9IG9wdGlvbnMucm9vbVdpZHRoWzBdO1xuICAgICAgICBsZXQgbWF4ID0gb3B0aW9ucy5yb29tV2lkdGhbMV07XG4gICAgICAgIGxldCB3aWR0aCA9IFJORy5nZXRVbmlmb3JtSW50KG1pbiwgbWF4KTtcbiAgICAgICAgbWluID0gb3B0aW9ucy5yb29tSGVpZ2h0WzBdO1xuICAgICAgICBtYXggPSBvcHRpb25zLnJvb21IZWlnaHRbMV07XG4gICAgICAgIGxldCBoZWlnaHQgPSBSTkcuZ2V0VW5pZm9ybUludChtaW4sIG1heCk7XG4gICAgICAgIGlmIChkeCA9PSAxKSB7IC8qIHRvIHRoZSByaWdodCAqL1xuICAgICAgICAgICAgbGV0IHkyID0geSAtIE1hdGguZmxvb3IoUk5HLmdldFVuaWZvcm0oKSAqIGhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMoeCArIDEsIHkyLCB4ICsgd2lkdGgsIHkyICsgaGVpZ2h0IC0gMSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR4ID09IC0xKSB7IC8qIHRvIHRoZSBsZWZ0ICovXG4gICAgICAgICAgICBsZXQgeTIgPSB5IC0gTWF0aC5mbG9vcihSTkcuZ2V0VW5pZm9ybSgpICogaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcyh4IC0gd2lkdGgsIHkyLCB4IC0gMSwgeTIgKyBoZWlnaHQgLSAxLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHkgPT0gMSkgeyAvKiB0byB0aGUgYm90dG9tICovXG4gICAgICAgICAgICBsZXQgeDIgPSB4IC0gTWF0aC5mbG9vcihSTkcuZ2V0VW5pZm9ybSgpICogd2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHgyLCB5ICsgMSwgeDIgKyB3aWR0aCAtIDEsIHkgKyBoZWlnaHQsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkeSA9PSAtMSkgeyAvKiB0byB0aGUgdG9wICovXG4gICAgICAgICAgICBsZXQgeDIgPSB4IC0gTWF0aC5mbG9vcihSTkcuZ2V0VW5pZm9ybSgpICogd2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHgyLCB5IC0gaGVpZ2h0LCB4MiArIHdpZHRoIC0gMSwgeSAtIDEsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImR4IG9yIGR5IG11c3QgYmUgMSBvciAtMVwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm9vbSBvZiByYW5kb20gc2l6ZSwgcG9zaXRpb25lZCBhcm91bmQgY2VudGVyIGNvb3Jkc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVSYW5kb21DZW50ZXIoY3gsIGN5LCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBtaW4gPSBvcHRpb25zLnJvb21XaWR0aFswXTtcbiAgICAgICAgbGV0IG1heCA9IG9wdGlvbnMucm9vbVdpZHRoWzFdO1xuICAgICAgICBsZXQgd2lkdGggPSBSTkcuZ2V0VW5pZm9ybUludChtaW4sIG1heCk7XG4gICAgICAgIG1pbiA9IG9wdGlvbnMucm9vbUhlaWdodFswXTtcbiAgICAgICAgbWF4ID0gb3B0aW9ucy5yb29tSGVpZ2h0WzFdO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gUk5HLmdldFVuaWZvcm1JbnQobWluLCBtYXgpO1xuICAgICAgICBsZXQgeDEgPSBjeCAtIE1hdGguZmxvb3IoUk5HLmdldFVuaWZvcm0oKSAqIHdpZHRoKTtcbiAgICAgICAgbGV0IHkxID0gY3kgLSBNYXRoLmZsb29yKFJORy5nZXRVbmlmb3JtKCkgKiBoZWlnaHQpO1xuICAgICAgICBsZXQgeDIgPSB4MSArIHdpZHRoIC0gMTtcbiAgICAgICAgbGV0IHkyID0geTEgKyBoZWlnaHQgLSAxO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoeDEsIHkxLCB4MiwgeTIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSb29tIG9mIHJhbmRvbSBzaXplIHdpdGhpbiBhIGdpdmVuIGRpbWVuc2lvbnNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUmFuZG9tKGF2YWlsV2lkdGgsIGF2YWlsSGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBtaW4gPSBvcHRpb25zLnJvb21XaWR0aFswXTtcbiAgICAgICAgbGV0IG1heCA9IG9wdGlvbnMucm9vbVdpZHRoWzFdO1xuICAgICAgICBsZXQgd2lkdGggPSBSTkcuZ2V0VW5pZm9ybUludChtaW4sIG1heCk7XG4gICAgICAgIG1pbiA9IG9wdGlvbnMucm9vbUhlaWdodFswXTtcbiAgICAgICAgbWF4ID0gb3B0aW9ucy5yb29tSGVpZ2h0WzFdO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gUk5HLmdldFVuaWZvcm1JbnQobWluLCBtYXgpO1xuICAgICAgICBsZXQgbGVmdCA9IGF2YWlsV2lkdGggLSB3aWR0aCAtIDE7XG4gICAgICAgIGxldCB0b3AgPSBhdmFpbEhlaWdodCAtIGhlaWdodCAtIDE7XG4gICAgICAgIGxldCB4MSA9IDEgKyBNYXRoLmZsb29yKFJORy5nZXRVbmlmb3JtKCkgKiBsZWZ0KTtcbiAgICAgICAgbGV0IHkxID0gMSArIE1hdGguZmxvb3IoUk5HLmdldFVuaWZvcm0oKSAqIHRvcCk7XG4gICAgICAgIGxldCB4MiA9IHgxICsgd2lkdGggLSAxO1xuICAgICAgICBsZXQgeTIgPSB5MSArIGhlaWdodCAtIDE7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh4MSwgeTEsIHgyLCB5Mik7XG4gICAgfVxuICAgIGFkZERvb3IoeCwgeSkge1xuICAgICAgICB0aGlzLl9kb29yc1t4ICsgXCIsXCIgKyB5XSA9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGdldERvb3JzKGNiKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9kb29ycykge1xuICAgICAgICAgICAgbGV0IHBhcnRzID0ga2V5LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGNiKHBhcnNlSW50KHBhcnRzWzBdKSwgcGFyc2VJbnQocGFydHNbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXJEb29ycygpIHtcbiAgICAgICAgdGhpcy5fZG9vcnMgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZERvb3JzKGlzV2FsbENhbGxiYWNrKSB7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5feDEgLSAxO1xuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLl94MiArIDE7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLl95MSAtIDE7XG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLl95MiArIDE7XG4gICAgICAgIGZvciAobGV0IHggPSBsZWZ0OyB4IDw9IHJpZ2h0OyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0b3A7IHkgPD0gYm90dG9tOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeCAhPSBsZWZ0ICYmIHggIT0gcmlnaHQgJiYgeSAhPSB0b3AgJiYgeSAhPSBib3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1dhbGxDYWxsYmFjayh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGREb29yKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWJ1ZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29tXCIsIHRoaXMuX3gxLCB0aGlzLl95MSwgdGhpcy5feDIsIHRoaXMuX3kyKTtcbiAgICB9XG4gICAgaXNWYWxpZChpc1dhbGxDYWxsYmFjaywgY2FuQmVEdWdDYWxsYmFjaykge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuX3gxIC0gMTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5feDIgKyAxO1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5feTEgLSAxO1xuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5feTIgKyAxO1xuICAgICAgICBmb3IgKGxldCB4ID0gbGVmdDsgeCA8PSByaWdodDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdG9wOyB5IDw9IGJvdHRvbTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPT0gbGVmdCB8fCB4ID09IHJpZ2h0IHx8IHkgPT0gdG9wIHx8IHkgPT0gYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNXYWxsQ2FsbGJhY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5CZUR1Z0NhbGxiYWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRpZ0NhbGxiYWNrIERpZyBjYWxsYmFjayB3aXRoIGEgc2lnbmF0dXJlICh4LCB5LCB2YWx1ZSkuIFZhbHVlczogMCA9IGVtcHR5LCAxID0gd2FsbCwgMiA9IGRvb3IuIE11bHRpcGxlIGRvb3JzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIGNyZWF0ZShkaWdDYWxsYmFjaykge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuX3gxIC0gMTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5feDIgKyAxO1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5feTEgLSAxO1xuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5feTIgKyAxO1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGxldCB4ID0gbGVmdDsgeCA8PSByaWdodDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdG9wOyB5IDw9IGJvdHRvbTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggKyBcIixcIiArIHkgaW4gdGhpcy5fZG9vcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID09IGxlZnQgfHwgeCA9PSByaWdodCB8fCB5ID09IHRvcCB8fCB5ID09IGJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpZ0NhbGxiYWNrKHgsIHksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5yb3VuZCgodGhpcy5feDEgKyB0aGlzLl94MikgLyAyKSwgTWF0aC5yb3VuZCgodGhpcy5feTEgKyB0aGlzLl95MikgLyAyKV07XG4gICAgfVxuICAgIGdldExlZnQoKSB7IHJldHVybiB0aGlzLl94MTsgfVxuICAgIGdldFJpZ2h0KCkgeyByZXR1cm4gdGhpcy5feDI7IH1cbiAgICBnZXRUb3AoKSB7IHJldHVybiB0aGlzLl95MTsgfVxuICAgIGdldEJvdHRvbSgpIHsgcmV0dXJuIHRoaXMuX3kyOyB9XG59XG4vKipcbiAqIEBjbGFzcyBDb3JyaWRvclxuICogQGF1Z21lbnRzIFJPVC5NYXAuRmVhdHVyZVxuICogQHBhcmFtIHtpbnR9IHN0YXJ0WFxuICogQHBhcmFtIHtpbnR9IHN0YXJ0WVxuICogQHBhcmFtIHtpbnR9IGVuZFhcbiAqIEBwYXJhbSB7aW50fSBlbmRZXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3JyaWRvciBleHRlbmRzIEZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3N0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgdGhpcy5fc3RhcnRZID0gc3RhcnRZO1xuICAgICAgICB0aGlzLl9lbmRYID0gZW5kWDtcbiAgICAgICAgdGhpcy5fZW5kWSA9IGVuZFk7XG4gICAgICAgIHRoaXMuX2VuZHNXaXRoQVdhbGwgPSB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlUmFuZG9tQXQoeCwgeSwgZHgsIGR5LCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBtaW4gPSBvcHRpb25zLmNvcnJpZG9yTGVuZ3RoWzBdO1xuICAgICAgICBsZXQgbWF4ID0gb3B0aW9ucy5jb3JyaWRvckxlbmd0aFsxXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IFJORy5nZXRVbmlmb3JtSW50KG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHgsIHksIHggKyBkeCAqIGxlbmd0aCwgeSArIGR5ICogbGVuZ3RoKTtcbiAgICB9XG4gICAgZGVidWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmlkb3JcIiwgdGhpcy5fc3RhcnRYLCB0aGlzLl9zdGFydFksIHRoaXMuX2VuZFgsIHRoaXMuX2VuZFkpO1xuICAgIH1cbiAgICBpc1ZhbGlkKGlzV2FsbENhbGxiYWNrLCBjYW5CZUR1Z0NhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzeCA9IHRoaXMuX3N0YXJ0WDtcbiAgICAgICAgbGV0IHN5ID0gdGhpcy5fc3RhcnRZO1xuICAgICAgICBsZXQgZHggPSB0aGlzLl9lbmRYIC0gc3g7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuX2VuZFkgLSBzeTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDEgKyBNYXRoLm1heChNYXRoLmFicyhkeCksIE1hdGguYWJzKGR5KSk7XG4gICAgICAgIGlmIChkeCkge1xuICAgICAgICAgICAgZHggPSBkeCAvIE1hdGguYWJzKGR4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHkpIHtcbiAgICAgICAgICAgIGR5ID0gZHkgLyBNYXRoLmFicyhkeSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG54ID0gZHk7XG4gICAgICAgIGxldCBueSA9IC1keDtcbiAgICAgICAgbGV0IG9rID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBzeCArIGkgKiBkeDtcbiAgICAgICAgICAgIGxldCB5ID0gc3kgKyBpICogZHk7XG4gICAgICAgICAgICBpZiAoIWNhbkJlRHVnQ2FsbGJhY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1dhbGxDYWxsYmFjayh4ICsgbngsIHkgKyBueSkpIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1dhbGxDYWxsYmFjayh4IC0gbngsIHkgLSBueSkpIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kWCA9IHggLSBkeDtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRZID0geSAtIGR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgbGVuZ3RoIGRlZ2VuZXJhdGVkLCB0aGlzIGNvcnJpZG9yIG1pZ2h0IGJlIGludmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIC8qIG5vdCBzdXBwb3J0ZWQgKi9cbiAgICAgICAgaWYgKGxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogbGVuZ3RoIDEgYWxsb3dlZCBvbmx5IGlmIHRoZSBuZXh0IHNwYWNlIGlzIGVtcHR5ICovXG4gICAgICAgIGlmIChsZW5ndGggPT0gMSAmJiBpc1dhbGxDYWxsYmFjayh0aGlzLl9lbmRYICsgZHgsIHRoaXMuX2VuZFkgKyBkeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV2UgZG8gbm90IHdhbnQgdGhlIGNvcnJpZG9yIHRvIGNyYXNoIGludG8gYSBjb3JuZXIgb2YgYSByb29tO1xuICAgICAgICAgKiBpZiBhbnkgb2YgdGhlIGVuZGluZyBjb3JuZXJzIGlzIGVtcHR5LCB0aGUgTisxdGggY2VsbCBvZiB0aGlzIGNvcnJpZG9yIG11c3QgYmUgZW1wdHkgdG9vLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTaXR1YXRpb246XG4gICAgICAgICAqICMjIyMjIyMxXG4gICAgICAgICAqIC4uLi4uLi4/XG4gICAgICAgICAqICMjIyMjIyMyXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBjb3JyaWRvciB3YXMgZHVnIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICogMSwgMiAtIHByb2JsZW1hdGljIGNvcm5lcnMsID8gPSBOKzF0aCBjZWxsIChub3QgZHVnKVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGZpcnN0Q29ybmVyQmFkID0gIWlzV2FsbENhbGxiYWNrKHRoaXMuX2VuZFggKyBkeCArIG54LCB0aGlzLl9lbmRZICsgZHkgKyBueSk7XG4gICAgICAgIGxldCBzZWNvbmRDb3JuZXJCYWQgPSAhaXNXYWxsQ2FsbGJhY2sodGhpcy5fZW5kWCArIGR4IC0gbngsIHRoaXMuX2VuZFkgKyBkeSAtIG55KTtcbiAgICAgICAgdGhpcy5fZW5kc1dpdGhBV2FsbCA9IGlzV2FsbENhbGxiYWNrKHRoaXMuX2VuZFggKyBkeCwgdGhpcy5fZW5kWSArIGR5KTtcbiAgICAgICAgaWYgKChmaXJzdENvcm5lckJhZCB8fCBzZWNvbmRDb3JuZXJCYWQpICYmIHRoaXMuX2VuZHNXaXRoQVdhbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZGlnQ2FsbGJhY2sgRGlnIGNhbGxiYWNrIHdpdGggYSBzaWduYXR1cmUgKHgsIHksIHZhbHVlKS4gVmFsdWVzOiAwID0gZW1wdHkuXG4gICAgICovXG4gICAgY3JlYXRlKGRpZ0NhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzeCA9IHRoaXMuX3N0YXJ0WDtcbiAgICAgICAgbGV0IHN5ID0gdGhpcy5fc3RhcnRZO1xuICAgICAgICBsZXQgZHggPSB0aGlzLl9lbmRYIC0gc3g7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuX2VuZFkgLSBzeTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDEgKyBNYXRoLm1heChNYXRoLmFicyhkeCksIE1hdGguYWJzKGR5KSk7XG4gICAgICAgIGlmIChkeCkge1xuICAgICAgICAgICAgZHggPSBkeCAvIE1hdGguYWJzKGR4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHkpIHtcbiAgICAgICAgICAgIGR5ID0gZHkgLyBNYXRoLmFicyhkeSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBzeCArIGkgKiBkeDtcbiAgICAgICAgICAgIGxldCB5ID0gc3kgKyBpICogZHk7XG4gICAgICAgICAgICBkaWdDYWxsYmFjayh4LCB5LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY3JlYXRlUHJpb3JpdHlXYWxscyhwcmlvcml0eVdhbGxDYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMuX2VuZHNXaXRoQVdhbGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3ggPSB0aGlzLl9zdGFydFg7XG4gICAgICAgIGxldCBzeSA9IHRoaXMuX3N0YXJ0WTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5fZW5kWCAtIHN4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLl9lbmRZIC0gc3k7XG4gICAgICAgIGlmIChkeCkge1xuICAgICAgICAgICAgZHggPSBkeCAvIE1hdGguYWJzKGR4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHkpIHtcbiAgICAgICAgICAgIGR5ID0gZHkgLyBNYXRoLmFicyhkeSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG54ID0gZHk7XG4gICAgICAgIGxldCBueSA9IC1keDtcbiAgICAgICAgcHJpb3JpdHlXYWxsQ2FsbGJhY2sodGhpcy5fZW5kWCArIGR4LCB0aGlzLl9lbmRZICsgZHkpO1xuICAgICAgICBwcmlvcml0eVdhbGxDYWxsYmFjayh0aGlzLl9lbmRYICsgbngsIHRoaXMuX2VuZFkgKyBueSk7XG4gICAgICAgIHByaW9yaXR5V2FsbENhbGxiYWNrKHRoaXMuX2VuZFggLSBueCwgdGhpcy5fZW5kWSAtIG55KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcC5qc1wiO1xuaW1wb3J0IFJORyBmcm9tIFwiLi4vcm5nLmpzXCI7XG4vKipcbiAqIEljZXkncyBNYXplIGdlbmVyYXRvclxuICogU2VlIGh0dHA6Ly93d3cucm9ndWViYXNpbi5yb2d1ZWxpa2VkZXZlbG9wbWVudC5vcmcvaW5kZXgucGhwP3RpdGxlPVNpbXBsZV9tYXplIGZvciBleHBsYW5hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY2V5TWF6ZSBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgcmVndWxhcml0eSA9IDApIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuX3JlZ3VsYXJpdHkgPSByZWd1bGFyaXR5O1xuICAgICAgICB0aGlzLl9tYXAgPSBbXTtcbiAgICB9XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xuICAgICAgICBsZXQgbWFwID0gdGhpcy5fZmlsbE1hcCgxKTtcbiAgICAgICAgd2lkdGggLT0gKHdpZHRoICUgMiA/IDEgOiAyKTtcbiAgICAgICAgaGVpZ2h0IC09IChoZWlnaHQgJSAyID8gMSA6IDIpO1xuICAgICAgICBsZXQgY3ggPSAwO1xuICAgICAgICBsZXQgY3kgPSAwO1xuICAgICAgICBsZXQgbnggPSAwO1xuICAgICAgICBsZXQgbnkgPSAwO1xuICAgICAgICBsZXQgZG9uZSA9IDA7XG4gICAgICAgIGxldCBibG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBkaXJzID0gW1xuICAgICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgICAgWzAsIDBdXG4gICAgICAgIF07XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN4ID0gMSArIDIgKiBNYXRoLmZsb29yKFJORy5nZXRVbmlmb3JtKCkgKiAod2lkdGggLSAxKSAvIDIpO1xuICAgICAgICAgICAgY3kgPSAxICsgMiAqIE1hdGguZmxvb3IoUk5HLmdldFVuaWZvcm0oKSAqIChoZWlnaHQgLSAxKSAvIDIpO1xuICAgICAgICAgICAgaWYgKCFkb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2N4XVtjeV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtYXBbY3hdW2N5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmRvbWl6ZShkaXJzKTtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKFJORy5nZXRVbmlmb3JtKCkgKiAodGhpcy5fcmVndWxhcml0eSArIDEpKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYW5kb21pemUoZGlycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBueCA9IGN4ICsgZGlyc1tpXVswXSAqIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBueSA9IGN5ICsgZGlyc1tpXVsxXSAqIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNGcmVlKG1hcCwgbngsIG55LCB3aWR0aCwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtueF1bbnldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbY3ggKyBkaXJzW2ldWzBdXVtjeSArIGRpcnNbaV1bMV1dID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeCA9IG54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5ID0gbnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKCFibG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoZG9uZSArIDEgPCB3aWR0aCAqIGhlaWdodCAvIDQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5faGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpLCBqLCBtYXBbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hcCA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX3JhbmRvbWl6ZShkaXJzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJzW2ldWzBdID0gMDtcbiAgICAgICAgICAgIGRpcnNbaV1bMV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihSTkcuZ2V0VW5pZm9ybSgpICogNCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkaXJzWzBdWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgZGlyc1sxXVswXSA9IDE7XG4gICAgICAgICAgICAgICAgZGlyc1syXVsxXSA9IC0xO1xuICAgICAgICAgICAgICAgIGRpcnNbM11bMV0gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRpcnNbM11bMF0gPSAtMTtcbiAgICAgICAgICAgICAgICBkaXJzWzJdWzBdID0gMTtcbiAgICAgICAgICAgICAgICBkaXJzWzFdWzFdID0gLTE7XG4gICAgICAgICAgICAgICAgZGlyc1swXVsxXSA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGlyc1syXVswXSA9IC0xO1xuICAgICAgICAgICAgICAgIGRpcnNbM11bMF0gPSAxO1xuICAgICAgICAgICAgICAgIGRpcnNbMF1bMV0gPSAtMTtcbiAgICAgICAgICAgICAgICBkaXJzWzFdWzFdID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBkaXJzWzFdWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgZGlyc1swXVswXSA9IDE7XG4gICAgICAgICAgICAgICAgZGlyc1szXVsxXSA9IC0xO1xuICAgICAgICAgICAgICAgIGRpcnNbMl1bMV0gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pc0ZyZWUobWFwLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh4IDwgMSB8fCB5IDwgMSB8fCB4ID49IHdpZHRoIHx8IHkgPj0gaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcFt4XVt5XTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQXJlbmEgZnJvbSBcIi4vYXJlbmEuanNcIjtcbmltcG9ydCBVbmlmb3JtIGZyb20gXCIuL3VuaWZvcm0uanNcIjtcbmltcG9ydCBDZWxsdWxhciBmcm9tIFwiLi9jZWxsdWxhci5qc1wiO1xuaW1wb3J0IERpZ2dlciBmcm9tIFwiLi9kaWdnZXIuanNcIjtcbmltcG9ydCBFbGxlck1hemUgZnJvbSBcIi4vZWxsZXJtYXplLmpzXCI7XG5pbXBvcnQgRGl2aWRlZE1hemUgZnJvbSBcIi4vZGl2aWRlZG1hemUuanNcIjtcbmltcG9ydCBJY2V5TWF6ZSBmcm9tIFwiLi9pY2V5bWF6ZS5qc1wiO1xuaW1wb3J0IFJvZ3VlIGZyb20gXCIuL3JvZ3VlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7IEFyZW5hLCBVbmlmb3JtLCBDZWxsdWxhciwgRGlnZ2VyLCBFbGxlck1hemUsIERpdmlkZWRNYXplLCBJY2V5TWF6ZSwgUm9ndWUgfTtcbiIsImltcG9ydCB7IERFRkFVTFRfV0lEVEgsIERFRkFVTFRfSEVJR0hUIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICAvKipcbiAgICAgKiBAY2xhc3MgQmFzZSBtYXAgZ2VuZXJhdG9yXG4gICAgICogQHBhcmFtIHtpbnR9IFt3aWR0aD1ST1QuREVGQVVMVF9XSURUSF1cbiAgICAgKiBAcGFyYW0ge2ludH0gW2hlaWdodD1ST1QuREVGQVVMVF9IRUlHSFRdXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iod2lkdGggPSBERUZBVUxUX1dJRFRILCBoZWlnaHQgPSBERUZBVUxUX0hFSUdIVCkge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIDtcbiAgICBfZmlsbE1hcCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWFwID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbWFwLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgIG1hcFtpXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cbn1cbiIsImltcG9ydCBNYXAgZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQgUk5HIGZyb20gXCIuLi9ybmcuanNcIjtcbmltcG9ydCB7IERJUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG4vKipcbiAqIER1bmdlb24gZ2VuZXJhdG9yIHdoaWNoIHVzZXMgdGhlIFwib3JnaW5hbFwiIFJvZ3VlIGR1bmdlb24gZ2VuZXJhdGlvbiBhbGdvcml0aG0uIFNlZSBodHRwOi8va3VvaS5jb20vfmthbWlrYXplL0dhbWVEZXNpZ24vYXJ0MDdfcm9ndWVfZHVuZ2Vvbi5waHBcbiAqIEBhdXRob3IgaHlha3VnZWlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9ndWUgZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMubWFwID0gW107XG4gICAgICAgIHRoaXMucm9vbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDZWxscyA9IFtdO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBjZWxsV2lkdGg6IDMsXG4gICAgICAgICAgICBjZWxsSGVpZ2h0OiAzIC8vICAgICBpZS4gYXMgYW4gYXJyYXkgd2l0aCBtaW4tbWF4IHZhbHVlcyBmb3IgZWFjaCBkaXJlY3Rpb24uLi4uXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICAvKlxuICAgICAgICBTZXQgdGhlIHJvb20gc2l6ZXMgYWNjb3JkaW5nIHRvIHRoZSBvdmVyLWFsbCB3aWR0aCBvZiB0aGUgbWFwLFxuICAgICAgICBhbmQgdGhlIGNlbGwgc2l6ZXMuXG4gICAgICAgICovXG4gICAgICAgIGlmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcInJvb21XaWR0aFwiKSkge1xuICAgICAgICAgICAgb3B0aW9uc1tcInJvb21XaWR0aFwiXSA9IHRoaXMuX2NhbGN1bGF0ZVJvb21TaXplKHRoaXMuX3dpZHRoLCBvcHRpb25zW1wiY2VsbFdpZHRoXCJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJyb29tSGVpZ2h0XCIpKSB7XG4gICAgICAgICAgICBvcHRpb25zW1wicm9vbUhlaWdodFwiXSA9IHRoaXMuX2NhbGN1bGF0ZVJvb21TaXplKHRoaXMuX2hlaWdodCwgb3B0aW9uc1tcImNlbGxIZWlnaHRcIl0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjcmVhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLl9maWxsTWFwKDEpO1xuICAgICAgICB0aGlzLnJvb21zID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2VsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5faW5pdFJvb21zKCk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RSb29tcygpO1xuICAgICAgICB0aGlzLl9jb25uZWN0VW5jb25uZWN0ZWRSb29tcygpO1xuICAgICAgICB0aGlzLl9jcmVhdGVSYW5kb21Sb29tQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlUm9vbXMoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ29ycmlkb3JzKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpLCBqLCB0aGlzLm1hcFtpXVtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBfY2FsY3VsYXRlUm9vbVNpemUoc2l6ZSwgY2VsbCkge1xuICAgICAgICBsZXQgbWF4ID0gTWF0aC5mbG9vcigoc2l6ZSAvIGNlbGwpICogMC44KTtcbiAgICAgICAgbGV0IG1pbiA9IE1hdGguZmxvb3IoKHNpemUgLyBjZWxsKSAqIDAuMjUpO1xuICAgICAgICBpZiAobWluIDwgMikge1xuICAgICAgICAgICAgbWluID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4IDwgMikge1xuICAgICAgICAgICAgbWF4ID0gMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgICB9XG4gICAgX2luaXRSb29tcygpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJvb21zIGFycmF5LiBUaGlzIGlzIHRoZSBcImdyaWRcIiBsaXN0IGZyb20gdGhlIGFsZ28uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9ucy5jZWxsV2lkdGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yb29tcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fb3B0aW9ucy5jZWxsSGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21zW2ldLnB1c2goeyBcInhcIjogMCwgXCJ5XCI6IDAsIFwid2lkdGhcIjogMCwgXCJoZWlnaHRcIjogMCwgXCJjb25uZWN0aW9uc1wiOiBbXSwgXCJjZWxseFwiOiBpLCBcImNlbGx5XCI6IGogfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nvbm5lY3RSb29tcygpIHtcbiAgICAgICAgLy9waWNrIHJhbmRvbSBzdGFydGluZyBncmlkXG4gICAgICAgIGxldCBjZ3ggPSBSTkcuZ2V0VW5pZm9ybUludCgwLCB0aGlzLl9vcHRpb25zLmNlbGxXaWR0aCAtIDEpO1xuICAgICAgICBsZXQgY2d5ID0gUk5HLmdldFVuaWZvcm1JbnQoMCwgdGhpcy5fb3B0aW9ucy5jZWxsSGVpZ2h0IC0gMSk7XG4gICAgICAgIGxldCBpZHg7XG4gICAgICAgIGxldCBuY2d4O1xuICAgICAgICBsZXQgbmNneTtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGxldCByb29tO1xuICAgICAgICBsZXQgb3RoZXJSb29tO1xuICAgICAgICBsZXQgZGlyVG9DaGVjaztcbiAgICAgICAgLy8gZmluZCAgdW5jb25uZWN0ZWQgbmVpZ2hib3VyIGNlbGxzXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vZGlyVG9DaGVjayA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XTtcbiAgICAgICAgICAgIGRpclRvQ2hlY2sgPSBbMCwgMiwgNCwgNl07XG4gICAgICAgICAgICBkaXJUb0NoZWNrID0gUk5HLnNodWZmbGUoZGlyVG9DaGVjayk7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHggPSBkaXJUb0NoZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIG5jZ3ggPSBjZ3ggKyBESVJTWzhdW2lkeF1bMF07XG4gICAgICAgICAgICAgICAgbmNneSA9IGNneSArIERJUlNbOF1baWR4XVsxXTtcbiAgICAgICAgICAgICAgICBpZiAobmNneCA8IDAgfHwgbmNneCA+PSB0aGlzLl9vcHRpb25zLmNlbGxXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5jZ3kgPCAwIHx8IG5jZ3kgPj0gdGhpcy5fb3B0aW9ucy5jZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb29tID0gdGhpcy5yb29tc1tjZ3hdW2NneV07XG4gICAgICAgICAgICAgICAgaWYgKHJvb21bXCJjb25uZWN0aW9uc1wiXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGxvbmcgYXMgdGhpcyByb29tIGRvZXNuJ3QgYWxyZWFkeSBjb29uZWN0IHRvIG1lLCB3ZSBhcmUgb2sgd2l0aCBpdC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb21bXCJjb25uZWN0aW9uc1wiXVswXVswXSA9PSBuY2d4ICYmIHJvb21bXCJjb25uZWN0aW9uc1wiXVswXVsxXSA9PSBuY2d5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdGhlclJvb20gPSB0aGlzLnJvb21zW25jZ3hdW25jZ3ldO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclJvb21bXCJjb25uZWN0aW9uc1wiXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclJvb21bXCJjb25uZWN0aW9uc1wiXS5wdXNoKFtjZ3gsIGNneV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENlbGxzLnB1c2goW25jZ3gsIG5jZ3ldKTtcbiAgICAgICAgICAgICAgICAgICAgY2d4ID0gbmNneDtcbiAgICAgICAgICAgICAgICAgICAgY2d5ID0gbmNneTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKGRpclRvQ2hlY2subGVuZ3RoID4gMCAmJiBmb3VuZCA9PSBmYWxzZSk7XG4gICAgICAgIH0gd2hpbGUgKGRpclRvQ2hlY2subGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIF9jb25uZWN0VW5jb25uZWN0ZWRSb29tcygpIHtcbiAgICAgICAgLy9XaGlsZSB0aGVyZSBhcmUgdW5jb25uZWN0ZWQgcm9vbXMsIHRyeSB0byBjb25uZWN0IHRoZW0gdG8gYSByYW5kb20gY29ubmVjdGVkIG5laWdoYm9yXG4gICAgICAgIC8vKGlmIGEgcm9vbSBoYXMgbm8gY29ubmVjdGVkIG5laWdoYm9ycyB5ZXQsIGp1c3Qga2VlcCBjeWNsaW5nLCB5b3UnbGwgZmlsbCBvdXQgdG8gaXQgZXZlbnR1YWxseSkuXG4gICAgICAgIGxldCBjdyA9IHRoaXMuX29wdGlvbnMuY2VsbFdpZHRoO1xuICAgICAgICBsZXQgY2ggPSB0aGlzLl9vcHRpb25zLmNlbGxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2VsbHMgPSBSTkcuc2h1ZmZsZSh0aGlzLmNvbm5lY3RlZENlbGxzKTtcbiAgICAgICAgbGV0IHJvb207XG4gICAgICAgIGxldCBvdGhlclJvb207XG4gICAgICAgIGxldCB2YWxpZFJvb207XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9ucy5jZWxsV2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9vcHRpb25zLmNlbGxIZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgIHJvb20gPSB0aGlzLnJvb21zW2ldW2pdO1xuICAgICAgICAgICAgICAgIGlmIChyb29tW1wiY29ubmVjdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbMCwgMiwgNCwgNl07XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBSTkcuc2h1ZmZsZShkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRSb29tID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJJZHggPSBkaXJlY3Rpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0kgPSBpICsgRElSU1s4XVtkaXJJZHhdWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ogPSBqICsgRElSU1s4XVtkaXJJZHhdWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0kgPCAwIHx8IG5ld0kgPj0gY3cgfHwgbmV3SiA8IDAgfHwgbmV3SiA+PSBjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJSb29tID0gdGhpcy5yb29tc1tuZXdJXVtuZXdKXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUm9vbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJSb29tW1wiY29ubmVjdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgb3RoZXJSb29tW1wiY29ubmVjdGlvbnNcIl0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJSb29tW1wiY29ubmVjdGlvbnNcIl1ba11bMF0gPT0gaSAmJiBvdGhlclJvb21bXCJjb25uZWN0aW9uc1wiXVtrXVsxXSA9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUm9vbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRSb29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKGRpcmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkUm9vbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbVtcImNvbm5lY3Rpb25zXCJdLnB1c2goW290aGVyUm9vbVtcImNlbGx4XCJdLCBvdGhlclJvb21bXCJjZWxseVwiXV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBVbmFibGUgdG8gY29ubmVjdCByb29tLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY3JlYXRlUmFuZG9tUm9vbUNvbm5lY3Rpb25zKCkge1xuICAgICAgICAvLyBFbXB0eSBmb3Igbm93LlxuICAgIH1cbiAgICBfY3JlYXRlUm9vbXMoKSB7XG4gICAgICAgIGxldCB3ID0gdGhpcy5fd2lkdGg7XG4gICAgICAgIGxldCBoID0gdGhpcy5faGVpZ2h0O1xuICAgICAgICBsZXQgY3cgPSB0aGlzLl9vcHRpb25zLmNlbGxXaWR0aDtcbiAgICAgICAgbGV0IGNoID0gdGhpcy5fb3B0aW9ucy5jZWxsSGVpZ2h0O1xuICAgICAgICBsZXQgY3dwID0gTWF0aC5mbG9vcih0aGlzLl93aWR0aCAvIGN3KTtcbiAgICAgICAgbGV0IGNocCA9IE1hdGguZmxvb3IodGhpcy5faGVpZ2h0IC8gY2gpO1xuICAgICAgICBsZXQgcm9vbXc7XG4gICAgICAgIGxldCByb29taDtcbiAgICAgICAgbGV0IHJvb21XaWR0aCA9IHRoaXMuX29wdGlvbnNbXCJyb29tV2lkdGhcIl07XG4gICAgICAgIGxldCByb29tSGVpZ2h0ID0gdGhpcy5fb3B0aW9uc1tcInJvb21IZWlnaHRcIl07XG4gICAgICAgIGxldCBzeDtcbiAgICAgICAgbGV0IHN5O1xuICAgICAgICBsZXQgb3RoZXJSb29tO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN3OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2g7IGorKykge1xuICAgICAgICAgICAgICAgIHN4ID0gY3dwICogaTtcbiAgICAgICAgICAgICAgICBzeSA9IGNocCAqIGo7XG4gICAgICAgICAgICAgICAgaWYgKHN4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3kgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzeSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvb213ID0gUk5HLmdldFVuaWZvcm1JbnQocm9vbVdpZHRoWzBdLCByb29tV2lkdGhbMV0pO1xuICAgICAgICAgICAgICAgIHJvb21oID0gUk5HLmdldFVuaWZvcm1JbnQocm9vbUhlaWdodFswXSwgcm9vbUhlaWdodFsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUm9vbSA9IHRoaXMucm9vbXNbaV1baiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3kgLSAob3RoZXJSb29tW1wieVwiXSArIG90aGVyUm9vbVtcImhlaWdodFwiXSkgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclJvb20gPSB0aGlzLnJvb21zW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN4IC0gKG90aGVyUm9vbVtcInhcIl0gKyBvdGhlclJvb21bXCJ3aWR0aFwiXSkgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzeE9mZnNldCA9IE1hdGgucm91bmQoUk5HLmdldFVuaWZvcm1JbnQoMCwgY3dwIC0gcm9vbXcpIC8gMik7XG4gICAgICAgICAgICAgICAgbGV0IHN5T2Zmc2V0ID0gTWF0aC5yb3VuZChSTkcuZ2V0VW5pZm9ybUludCgwLCBjaHAgLSByb29taCkgLyAyKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3ggKyBzeE9mZnNldCArIHJvb213ID49IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeE9mZnNldC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbXctLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoc3kgKyBzeU9mZnNldCArIHJvb21oID49IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeU9mZnNldC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbWgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzeCA9IHN4ICsgc3hPZmZzZXQ7XG4gICAgICAgICAgICAgICAgc3kgPSBzeSArIHN5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMucm9vbXNbaV1bal1bXCJ4XCJdID0gc3g7XG4gICAgICAgICAgICAgICAgdGhpcy5yb29tc1tpXVtqXVtcInlcIl0gPSBzeTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21zW2ldW2pdW1wid2lkdGhcIl0gPSByb29tdztcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21zW2ldW2pdW1wiaGVpZ2h0XCJdID0gcm9vbWg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBzeDsgaWkgPCBzeCArIHJvb213OyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGpqID0gc3k7IGpqIDwgc3kgKyByb29taDsgamorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBbaWldW2pqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldFdhbGxQb3NpdGlvbihhUm9vbSwgYURpcmVjdGlvbikge1xuICAgICAgICBsZXQgcng7XG4gICAgICAgIGxldCByeTtcbiAgICAgICAgbGV0IGRvb3I7XG4gICAgICAgIGlmIChhRGlyZWN0aW9uID09IDEgfHwgYURpcmVjdGlvbiA9PSAzKSB7XG4gICAgICAgICAgICByeCA9IFJORy5nZXRVbmlmb3JtSW50KGFSb29tW1wieFwiXSArIDEsIGFSb29tW1wieFwiXSArIGFSb29tW1wid2lkdGhcIl0gLSAyKTtcbiAgICAgICAgICAgIGlmIChhRGlyZWN0aW9uID09IDEpIHtcbiAgICAgICAgICAgICAgICByeSA9IGFSb29tW1wieVwiXSAtIDI7XG4gICAgICAgICAgICAgICAgZG9vciA9IHJ5ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJ5ID0gYVJvb21bXCJ5XCJdICsgYVJvb21bXCJoZWlnaHRcIl0gKyAxO1xuICAgICAgICAgICAgICAgIGRvb3IgPSByeSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcFtyeF1bZG9vcl0gPSAwOyAvLyBpJ20gbm90IHNldHRpbmcgYSBzcGVjaWZpYyAnZG9vcicgdGlsZSB2YWx1ZSByaWdodCBub3csIGp1c3QgZW1wdHkgc3BhY2UuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByeSA9IFJORy5nZXRVbmlmb3JtSW50KGFSb29tW1wieVwiXSArIDEsIGFSb29tW1wieVwiXSArIGFSb29tW1wiaGVpZ2h0XCJdIC0gMik7XG4gICAgICAgICAgICBpZiAoYURpcmVjdGlvbiA9PSAyKSB7XG4gICAgICAgICAgICAgICAgcnggPSBhUm9vbVtcInhcIl0gKyBhUm9vbVtcIndpZHRoXCJdICsgMTtcbiAgICAgICAgICAgICAgICBkb29yID0gcnggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcnggPSBhUm9vbVtcInhcIl0gLSAyO1xuICAgICAgICAgICAgICAgIGRvb3IgPSByeCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcFtkb29yXVtyeV0gPSAwOyAvLyBpJ20gbm90IHNldHRpbmcgYSBzcGVjaWZpYyAnZG9vcicgdGlsZSB2YWx1ZSByaWdodCBub3csIGp1c3QgZW1wdHkgc3BhY2UuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyeCwgcnldO1xuICAgIH1cbiAgICBfZHJhd0NvcnJpZG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCB4T2Zmc2V0ID0gZW5kUG9zaXRpb25bMF0gLSBzdGFydFBvc2l0aW9uWzBdO1xuICAgICAgICBsZXQgeU9mZnNldCA9IGVuZFBvc2l0aW9uWzFdIC0gc3RhcnRQb3NpdGlvblsxXTtcbiAgICAgICAgbGV0IHhwb3MgPSBzdGFydFBvc2l0aW9uWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IHN0YXJ0UG9zaXRpb25bMV07XG4gICAgICAgIGxldCB0ZW1wRGlzdDtcbiAgICAgICAgbGV0IHhEaXI7XG4gICAgICAgIGxldCB5RGlyO1xuICAgICAgICBsZXQgbW92ZTsgLy8gMiBlbGVtZW50IGFycmF5LCBlbGVtZW50IDAgaXMgdGhlIGRpcmVjdGlvbiwgZWxlbWVudCAxIGlzIHRoZSB0b3RhbCB2YWx1ZSB0byBtb3ZlLlxuICAgICAgICBsZXQgbW92ZXMgPSBbXTsgLy8gYSBsaXN0IG9mIDIgZWxlbWVudCBhcnJheXNcbiAgICAgICAgbGV0IHhBYnMgPSBNYXRoLmFicyh4T2Zmc2V0KTtcbiAgICAgICAgbGV0IHlBYnMgPSBNYXRoLmFicyh5T2Zmc2V0KTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBSTkcuZ2V0VW5pZm9ybSgpOyAvLyB1c2VkIHRvIHNwbGl0IHRoZSBtb3ZlIGF0IGRpZmZlcmVudCBwbGFjZXMgYWxvbmcgdGhlIGxvbmcgYXhpc1xuICAgICAgICBsZXQgZmlyc3RIYWxmID0gcGVyY2VudDtcbiAgICAgICAgbGV0IHNlY29uZEhhbGYgPSAxIC0gcGVyY2VudDtcbiAgICAgICAgeERpciA9IHhPZmZzZXQgPiAwID8gMiA6IDY7XG4gICAgICAgIHlEaXIgPSB5T2Zmc2V0ID4gMCA/IDQgOiAwO1xuICAgICAgICBpZiAoeEFicyA8IHlBYnMpIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZmlyc3RIYWxmIG9mIHRoZSB5IG9mZnNldFxuICAgICAgICAgICAgdGVtcERpc3QgPSBNYXRoLmNlaWwoeUFicyAqIGZpcnN0SGFsZik7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5RGlyLCB0ZW1wRGlzdF0pO1xuICAgICAgICAgICAgLy8gbW92ZSBhbGwgdGhlIHggb2Zmc2V0XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4RGlyLCB4QWJzXSk7XG4gICAgICAgICAgICAvLyBtb3ZlIHNlbmRIYWxmIG9mIHRoZSAgeSBvZmZzZXRcbiAgICAgICAgICAgIHRlbXBEaXN0ID0gTWF0aC5mbG9vcih5QWJzICogc2Vjb25kSGFsZik7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5RGlyLCB0ZW1wRGlzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gIG1vdmUgZmlyc3RIYWxmIG9mIHRoZSB4IG9mZnNldFxuICAgICAgICAgICAgdGVtcERpc3QgPSBNYXRoLmNlaWwoeEFicyAqIGZpcnN0SGFsZik7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4RGlyLCB0ZW1wRGlzdF0pO1xuICAgICAgICAgICAgLy8gbW92ZSBhbGwgdGhlIHkgb2Zmc2V0XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5RGlyLCB5QWJzXSk7XG4gICAgICAgICAgICAvLyBtb3ZlIHNlY29uZEhhbGYgb2YgdGhlIHggb2Zmc2V0LlxuICAgICAgICAgICAgdGVtcERpc3QgPSBNYXRoLmZsb29yKHhBYnMgKiBzZWNvbmRIYWxmKTtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3hEaXIsIHRlbXBEaXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXBbeHBvc11beXBvc10gPSAwO1xuICAgICAgICB3aGlsZSAobW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbW92ZSA9IG1vdmVzLnBvcCgpO1xuICAgICAgICAgICAgd2hpbGUgKG1vdmVbMV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgeHBvcyArPSBESVJTWzhdW21vdmVbMF1dWzBdO1xuICAgICAgICAgICAgICAgIHlwb3MgKz0gRElSU1s4XVttb3ZlWzBdXVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFt4cG9zXVt5cG9zXSA9IDA7XG4gICAgICAgICAgICAgICAgbW92ZVsxXSA9IG1vdmVbMV0gLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jcmVhdGVDb3JyaWRvcnMoKSB7XG4gICAgICAgIC8vIERyYXcgQ29ycmlkb3JzIGJldHdlZW4gY29ubmVjdGVkIHJvb21zXG4gICAgICAgIGxldCBjdyA9IHRoaXMuX29wdGlvbnMuY2VsbFdpZHRoO1xuICAgICAgICBsZXQgY2ggPSB0aGlzLl9vcHRpb25zLmNlbGxIZWlnaHQ7XG4gICAgICAgIGxldCByb29tO1xuICAgICAgICBsZXQgY29ubmVjdGlvbjtcbiAgICAgICAgbGV0IG90aGVyUm9vbTtcbiAgICAgICAgbGV0IHdhbGw7XG4gICAgICAgIGxldCBvdGhlcldhbGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm9vbSA9IHRoaXMucm9vbXNbaV1bal07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByb29tW1wiY29ubmVjdGlvbnNcIl0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHJvb21bXCJjb25uZWN0aW9uc1wiXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJSb29tID0gdGhpcy5yb29tc1tjb25uZWN0aW9uWzBdXVtjb25uZWN0aW9uWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlndXJlIG91dCB3aGF0IHdhbGwgb3VyIGNvcnJpZG9yIHdpbGwgc3RhcnQgb25lLlxuICAgICAgICAgICAgICAgICAgICAvLyBmaWd1cmUgb3V0IHdoYXQgd2FsbCBvdXIgY29ycmlkb3Igd2lsbCBlbmQgb24uXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlclJvb21bXCJjZWxseFwiXSA+IHJvb21bXCJjZWxseFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcldhbGwgPSA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG90aGVyUm9vbVtcImNlbGx4XCJdIDwgcm9vbVtcImNlbGx4XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyV2FsbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3RoZXJSb29tW1wiY2VsbHlcIl0gPiByb29tW1wiY2VsbHlcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGwgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJXYWxsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJXYWxsID0gMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3Q29ycmlkb3IodGhpcy5fZ2V0V2FsbFBvc2l0aW9uKHJvb20sIHdhbGwpLCB0aGlzLl9nZXRXYWxsUG9zaXRpb24ob3RoZXJSb29tLCBvdGhlcldhbGwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRHVuZ2VvbiBmcm9tIFwiLi9kdW5nZW9uLmpzXCI7XG5pbXBvcnQgeyBSb29tLCBDb3JyaWRvciB9IGZyb20gXCIuL2ZlYXR1cmVzLmpzXCI7XG5pbXBvcnQgUk5HIGZyb20gXCIuLi9ybmcuanNcIjtcbjtcbi8qKlxuICogQGNsYXNzIER1bmdlb24gZ2VuZXJhdG9yIHdoaWNoIHRyaWVzIHRvIGZpbGwgdGhlIHNwYWNlIGV2ZW5seS4gR2VuZXJhdGVzIGluZGVwZW5kZW50IHJvb21zIGFuZCB0cmllcyB0byBjb25uZWN0IHRoZW0uXG4gKiBAYXVnbWVudHMgUk9ULk1hcC5EdW5nZW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm0gZXh0ZW5kcyBEdW5nZW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vbVdpZHRoOiBbMywgOV0sXG4gICAgICAgICAgICByb29tSGVpZ2h0OiBbMywgNV0sXG4gICAgICAgICAgICByb29tRHVnUGVyY2VudGFnZTogMC4xLFxuICAgICAgICAgICAgdGltZUxpbWl0OiAxMDAwIC8qIHdlIHN0b3AgYWZ0ZXIgdGhpcyBtdWNoIHRpbWUgaGFzIHBhc3NlZCAobXNlYykgKi9cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fbWFwID0gW107XG4gICAgICAgIHRoaXMuX2R1ZyA9IDA7XG4gICAgICAgIHRoaXMuX3Jvb21BdHRlbXB0cyA9IDIwOyAvKiBuZXcgcm9vbSBpcyBjcmVhdGVkIE4tdGltZXMgdW50aWwgaXMgY29uc2lkZXJlZCBhcyBpbXBvc3NpYmxlIHRvIGdlbmVyYXRlICovXG4gICAgICAgIHRoaXMuX2NvcnJpZG9yQXR0ZW1wdHMgPSAyMDsgLyogY29ycmlkb3JzIGFyZSB0cmllZCBOLXRpbWVzIHVudGlsIHRoZSBsZXZlbCBpcyBjb25zaWRlcmVkIGFzIGltcG9zc2libGUgdG8gY29ubmVjdCAqL1xuICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBbXTsgLyogbGlzdCBvZiBhbHJlYWR5IGNvbm5lY3RlZCByb29tcyAqL1xuICAgICAgICB0aGlzLl91bmNvbm5lY3RlZCA9IFtdOyAvKiBsaXN0IG9mIHJlbWFpbmluZyB1bmNvbm5lY3RlZCByb29tcyAqL1xuICAgICAgICB0aGlzLl9kaWdDYWxsYmFjayA9IHRoaXMuX2RpZ0NhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NhbkJlRHVnQ2FsbGJhY2sgPSB0aGlzLl9jYW5CZUR1Z0NhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2lzV2FsbENhbGxiYWNrID0gdGhpcy5faXNXYWxsQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbWFwLiBJZiB0aGUgdGltZSBsaW1pdCBoYXMgYmVlbiBoaXQsIHJldHVybnMgbnVsbC5cbiAgICAgKiBAc2VlIFJPVC5NYXAjY3JlYXRlXG4gICAgICovXG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0MSA9IERhdGUubm93KCk7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBsZXQgdDIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHQyIC0gdDEgPiB0aGlzLl9vcHRpb25zLnRpbWVMaW1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSAvKiB0aW1lIGxpbWl0ISAqL1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gdGhpcy5fZmlsbE1hcCgxKTtcbiAgICAgICAgICAgIHRoaXMuX2R1ZyA9IDA7XG4gICAgICAgICAgICB0aGlzLl9yb29tcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fdW5jb25uZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlUm9vbXMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb29tcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fZ2VuZXJhdGVDb3JyaWRvcnMoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpLCBqLCB0aGlzLl9tYXBbaV1bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgc3VpdGFibGUgYW1vdW50IG9mIHJvb21zXG4gICAgICovXG4gICAgX2dlbmVyYXRlUm9vbXMoKSB7XG4gICAgICAgIGxldCB3ID0gdGhpcy5fd2lkdGggLSAyO1xuICAgICAgICBsZXQgaCA9IHRoaXMuX2hlaWdodCAtIDI7XG4gICAgICAgIGxldCByb29tO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICByb29tID0gdGhpcy5fZ2VuZXJhdGVSb29tKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHVnIC8gKHcgKiBoKSA+IHRoaXMuX29wdGlvbnMucm9vbUR1Z1BlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gLyogYWNoaWV2ZWQgcmVxdWVzdGVkIGFtb3VudCBvZiBmcmVlIHNwYWNlICovXG4gICAgICAgIH0gd2hpbGUgKHJvb20pO1xuICAgICAgICAvKiBlaXRoZXIgZW5vdWdoIHJvb21zLCBvciBub3QgYWJsZSB0byBnZW5lcmF0ZSBtb3JlIG9mIHRoZW0gOikgKi9cbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJ5IHRvIGdlbmVyYXRlIG9uZSByb29tXG4gICAgICovXG4gICAgX2dlbmVyYXRlUm9vbSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKGNvdW50IDwgdGhpcy5fcm9vbUF0dGVtcHRzKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgbGV0IHJvb20gPSBSb29tLmNyZWF0ZVJhbmRvbSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgICAgIGlmICghcm9vbS5pc1ZhbGlkKHRoaXMuX2lzV2FsbENhbGxiYWNrLCB0aGlzLl9jYW5CZUR1Z0NhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm9vbS5jcmVhdGUodGhpcy5fZGlnQ2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5fcm9vbXMucHVzaChyb29tKTtcbiAgICAgICAgICAgIHJldHVybiByb29tO1xuICAgICAgICB9XG4gICAgICAgIC8qIG5vIHJvb20gd2FzIGdlbmVyYXRlZCBpbiBhIGdpdmVuIG51bWJlciBvZiBhdHRlbXB0cyAqL1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGNvbm5lY3RvcnMgYmV3ZWVuIHJvb21zXG4gICAgICogQHJldHVybnMge2Jvb2x9IHN1Y2Nlc3MgV2FzIHRoaXMgYXR0ZW1wdCBzdWNjZXNzZnVsbD9cbiAgICAgKi9cbiAgICBfZ2VuZXJhdGVDb3JyaWRvcnMoKSB7XG4gICAgICAgIGxldCBjbnQgPSAwO1xuICAgICAgICB3aGlsZSAoY250IDwgdGhpcy5fY29ycmlkb3JBdHRlbXB0cykge1xuICAgICAgICAgICAgY250Kys7XG4gICAgICAgICAgICB0aGlzLl9jb3JyaWRvcnMgPSBbXTtcbiAgICAgICAgICAgIC8qIGRpZyByb29tcyBpbnRvIGEgY2xlYXIgbWFwICovXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSB0aGlzLl9maWxsTWFwKDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yb29tcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb29tID0gdGhpcy5fcm9vbXNbaV07XG4gICAgICAgICAgICAgICAgcm9vbS5jbGVhckRvb3JzKCk7XG4gICAgICAgICAgICAgICAgcm9vbS5jcmVhdGUodGhpcy5fZGlnQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdW5jb25uZWN0ZWQgPSBSTkcuc2h1ZmZsZSh0aGlzLl9yb29tcy5zbGljZSgpKTtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3VuY29ubmVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZC5wdXNoKHRoaXMuX3VuY29ubmVjdGVkLnBvcCgpKTtcbiAgICAgICAgICAgIH0gLyogZmlyc3Qgb25lIGlzIGFsd2F5cyBjb25uZWN0ZWQgKi9cbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgLyogMS4gcGljayByYW5kb20gY29ubmVjdGVkIHJvb20gKi9cbiAgICAgICAgICAgICAgICBsZXQgY29ubmVjdGVkID0gUk5HLmdldEl0ZW0odGhpcy5fY29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogMi4gZmluZCBjbG9zZXN0IHVuY29ubmVjdGVkICovXG4gICAgICAgICAgICAgICAgbGV0IHJvb20xID0gdGhpcy5fY2xvc2VzdFJvb20odGhpcy5fdW5jb25uZWN0ZWQsIGNvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb29tMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogMy4gY29ubmVjdCBpdCB0byBjbG9zZXN0IGNvbm5lY3RlZCAqL1xuICAgICAgICAgICAgICAgIGxldCByb29tMiA9IHRoaXMuX2Nsb3Nlc3RSb29tKHRoaXMuX2Nvbm5lY3RlZCwgcm9vbTEpO1xuICAgICAgICAgICAgICAgIGlmICghcm9vbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvayA9IHRoaXMuX2Nvbm5lY3RSb29tcyhyb29tMSwgcm9vbTIpO1xuICAgICAgICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSAvKiBzdG9wIGNvbm5lY3RpbmcsIHJlLXNodWZmbGUgKi9cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3VuY29ubmVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IC8qIGRvbmU7IG5vIHJvb21zIHJlbWFpbiAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqIEZvciBhIGdpdmVuIHJvb20sIGZpbmQgdGhlIGNsb3Nlc3Qgb25lIGZyb20gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBfY2xvc2VzdFJvb20ocm9vbXMsIHJvb20pIHtcbiAgICAgICAgbGV0IGRpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IGNlbnRlciA9IHJvb20uZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb21zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgciA9IHJvb21zW2ldO1xuICAgICAgICAgICAgbGV0IGMgPSByLmdldENlbnRlcigpO1xuICAgICAgICAgICAgbGV0IGR4ID0gY1swXSAtIGNlbnRlclswXTtcbiAgICAgICAgICAgIGxldCBkeSA9IGNbMV0gLSBjZW50ZXJbMV07XG4gICAgICAgICAgICBsZXQgZCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICAgICAgaWYgKGQgPCBkaXN0KSB7XG4gICAgICAgICAgICAgICAgZGlzdCA9IGQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfY29ubmVjdFJvb21zKHJvb20xLCByb29tMikge1xuICAgICAgICAvKlxuICAgICAgICAgICAgcm9vbTEuZGVidWcoKTtcbiAgICAgICAgICAgIHJvb20yLmRlYnVnKCk7XG4gICAgICAgICovXG4gICAgICAgIGxldCBjZW50ZXIxID0gcm9vbTEuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCBjZW50ZXIyID0gcm9vbTIuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCBkaWZmWCA9IGNlbnRlcjJbMF0gLSBjZW50ZXIxWzBdO1xuICAgICAgICBsZXQgZGlmZlkgPSBjZW50ZXIyWzFdIC0gY2VudGVyMVsxXTtcbiAgICAgICAgbGV0IHN0YXJ0O1xuICAgICAgICBsZXQgZW5kO1xuICAgICAgICBsZXQgZGlySW5kZXgxLCBkaXJJbmRleDIsIG1pbiwgbWF4LCBpbmRleDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA8IE1hdGguYWJzKGRpZmZZKSkgeyAvKiBmaXJzdCB0cnkgY29ubmVjdGluZyBub3J0aC1zb3V0aCB3YWxscyAqL1xuICAgICAgICAgICAgZGlySW5kZXgxID0gKGRpZmZZID4gMCA/IDIgOiAwKTtcbiAgICAgICAgICAgIGRpckluZGV4MiA9IChkaXJJbmRleDEgKyAyKSAlIDQ7XG4gICAgICAgICAgICBtaW4gPSByb29tMi5nZXRMZWZ0KCk7XG4gICAgICAgICAgICBtYXggPSByb29tMi5nZXRSaWdodCgpO1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvKiBmaXJzdCB0cnkgY29ubmVjdGluZyBlYXN0LXdlc3Qgd2FsbHMgKi9cbiAgICAgICAgICAgIGRpckluZGV4MSA9IChkaWZmWCA+IDAgPyAxIDogMyk7XG4gICAgICAgICAgICBkaXJJbmRleDIgPSAoZGlySW5kZXgxICsgMikgJSA0O1xuICAgICAgICAgICAgbWluID0gcm9vbTIuZ2V0VG9wKCk7XG4gICAgICAgICAgICBtYXggPSByb29tMi5nZXRCb3R0b20oKTtcbiAgICAgICAgICAgIGluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydCA9IHRoaXMuX3BsYWNlSW5XYWxsKHJvb20xLCBkaXJJbmRleDEpOyAvKiBjb3JyaWRvciB3aWxsIHN0YXJ0IGhlcmUgKi9cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydFtpbmRleF0gPj0gbWluICYmIHN0YXJ0W2luZGV4XSA8PSBtYXgpIHsgLyogcG9zc2libGUgdG8gY29ubmVjdCB3aXRoIHN0cmFpZ2h0IGxpbmUgKEktbGlrZSkgKi9cbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0LnNsaWNlKCk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgc3dpdGNoIChkaXJJbmRleDIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm9vbTIuZ2V0VG9wKCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm9vbTIuZ2V0UmlnaHQoKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb29tMi5nZXRCb3R0b20oKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb29tMi5nZXRMZWZ0KCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZFsoaW5kZXggKyAxKSAlIDJdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9kaWdMaW5lKFtzdGFydCwgZW5kXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRbaW5kZXhdIDwgbWluIC0gMSB8fCBzdGFydFtpbmRleF0gPiBtYXggKyAxKSB7IC8qIG5lZWQgdG8gc3dpdGNoIHRhcmdldCB3YWxsIChMLWxpa2UpICovXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHN0YXJ0W2luZGV4XSAtIGNlbnRlcjJbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIHN3aXRjaCAoZGlySW5kZXgyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb24gPSAoZGlmZiA8IDAgPyAzIDogMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gKGRpZmYgPCAwID8gMSA6IDMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpckluZGV4MiA9IChkaXJJbmRleDIgKyByb3RhdGlvbikgJSA0O1xuICAgICAgICAgICAgZW5kID0gdGhpcy5fcGxhY2VJbldhbGwocm9vbTIsIGRpckluZGV4Mik7XG4gICAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtaWQgPSBbMCwgMF07XG4gICAgICAgICAgICBtaWRbaW5kZXhdID0gc3RhcnRbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGluZGV4MiA9IChpbmRleCArIDEpICUgMjtcbiAgICAgICAgICAgIG1pZFtpbmRleDJdID0gZW5kW2luZGV4Ml07XG4gICAgICAgICAgICB0aGlzLl9kaWdMaW5lKFtzdGFydCwgbWlkLCBlbmRdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLyogdXNlIGN1cnJlbnQgd2FsbCBwYWlyLCBidXQgYWRqdXN0IHRoZSBsaW5lIGluIHRoZSBtaWRkbGUgKFMtbGlrZSkgKi9cbiAgICAgICAgICAgIGxldCBpbmRleDIgPSAoaW5kZXggKyAxKSAlIDI7XG4gICAgICAgICAgICBlbmQgPSB0aGlzLl9wbGFjZUluV2FsbChyb29tMiwgZGlySW5kZXgyKTtcbiAgICAgICAgICAgIGlmICghZW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1pZCA9IE1hdGgucm91bmQoKGVuZFtpbmRleDJdICsgc3RhcnRbaW5kZXgyXSkgLyAyKTtcbiAgICAgICAgICAgIGxldCBtaWQxID0gWzAsIDBdO1xuICAgICAgICAgICAgbGV0IG1pZDIgPSBbMCwgMF07XG4gICAgICAgICAgICBtaWQxW2luZGV4XSA9IHN0YXJ0W2luZGV4XTtcbiAgICAgICAgICAgIG1pZDFbaW5kZXgyXSA9IG1pZDtcbiAgICAgICAgICAgIG1pZDJbaW5kZXhdID0gZW5kW2luZGV4XTtcbiAgICAgICAgICAgIG1pZDJbaW5kZXgyXSA9IG1pZDtcbiAgICAgICAgICAgIHRoaXMuX2RpZ0xpbmUoW3N0YXJ0LCBtaWQxLCBtaWQyLCBlbmRdKTtcbiAgICAgICAgfVxuICAgICAgICByb29tMS5hZGREb29yKHN0YXJ0WzBdLCBzdGFydFsxXSk7XG4gICAgICAgIHJvb20yLmFkZERvb3IoZW5kWzBdLCBlbmRbMV0pO1xuICAgICAgICBpbmRleCA9IHRoaXMuX3VuY29ubmVjdGVkLmluZGV4T2Yocm9vbTEpO1xuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3VuY29ubmVjdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQucHVzaChyb29tMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSB0aGlzLl91bmNvbm5lY3RlZC5pbmRleE9mKHJvb20yKTtcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl91bmNvbm5lY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkLnB1c2gocm9vbTIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfcGxhY2VJbldhbGwocm9vbSwgZGlySW5kZXgpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gWzAsIDBdO1xuICAgICAgICBsZXQgZGlyID0gWzAsIDBdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICAgICAgc3dpdGNoIChkaXJJbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRpciA9IFsxLCAwXTtcbiAgICAgICAgICAgICAgICBzdGFydCA9IFtyb29tLmdldExlZnQoKSwgcm9vbS5nZXRUb3AoKSAtIDFdO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJvb20uZ2V0UmlnaHQoKSAtIHJvb20uZ2V0TGVmdCgpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkaXIgPSBbMCwgMV07XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBbcm9vbS5nZXRSaWdodCgpICsgMSwgcm9vbS5nZXRUb3AoKV07XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcm9vbS5nZXRCb3R0b20oKSAtIHJvb20uZ2V0VG9wKCkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGRpciA9IFsxLCAwXTtcbiAgICAgICAgICAgICAgICBzdGFydCA9IFtyb29tLmdldExlZnQoKSwgcm9vbS5nZXRCb3R0b20oKSArIDFdO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJvb20uZ2V0UmlnaHQoKSAtIHJvb20uZ2V0TGVmdCgpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBkaXIgPSBbMCwgMV07XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBbcm9vbS5nZXRMZWZ0KCkgLSAxLCByb29tLmdldFRvcCgpXTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByb29tLmdldEJvdHRvbSgpIC0gcm9vbS5nZXRUb3AoKSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF2YWlsID0gW107XG4gICAgICAgIGxldCBsYXN0QmFkSW5kZXggPSAtMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBzdGFydFswXSArIGkgKiBkaXJbMF07XG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0WzFdICsgaSAqIGRpclsxXTtcbiAgICAgICAgICAgIGF2YWlsLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBsZXQgaXNXYWxsID0gKHRoaXMuX21hcFt4XVt5XSA9PSAxKTtcbiAgICAgICAgICAgIGlmIChpc1dhbGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEJhZEluZGV4ICE9IGkgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsW2ldID0gW3gsIHldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhc3RCYWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxbaSAtIDFdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IGF2YWlsLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoIWF2YWlsW2ldKSB7XG4gICAgICAgICAgICAgICAgYXZhaWwuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXZhaWwubGVuZ3RoID8gUk5HLmdldEl0ZW0oYXZhaWwpIDogbnVsbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpZyBhIHBvbHlsaW5lLlxuICAgICAqL1xuICAgIF9kaWdMaW5lKHBvaW50cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcG9pbnRzW2kgLSAxXTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBwb2ludHNbaV07XG4gICAgICAgICAgICBsZXQgY29ycmlkb3IgPSBuZXcgQ29ycmlkb3Ioc3RhcnRbMF0sIHN0YXJ0WzFdLCBlbmRbMF0sIGVuZFsxXSk7XG4gICAgICAgICAgICBjb3JyaWRvci5jcmVhdGUodGhpcy5fZGlnQ2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5fY29ycmlkb3JzLnB1c2goY29ycmlkb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9kaWdDYWxsYmFjayh4LCB5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXBbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2R1ZysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pc1dhbGxDYWxsYmFjayh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID49IHRoaXMuX3dpZHRoIHx8IHkgPj0gdGhpcy5faGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9tYXBbeF1beV0gPT0gMSk7XG4gICAgfVxuICAgIF9jYW5CZUR1Z0NhbGxiYWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCAxIHx8IHkgPCAxIHx8IHggKyAxID49IHRoaXMuX3dpZHRoIHx8IHkgKyAxID49IHRoaXMuX2hlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fbWFwW3hdW3ldID09IDEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW1wbGV4IGZyb20gXCIuL3NpbXBsZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IHsgU2ltcGxleCB9O1xuIiwiLyoqXG4gKiBCYXNlIG5vaXNlIGdlbmVyYXRvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2lzZSB7XG59XG4iLCJpbXBvcnQgTm9pc2UgZnJvbSBcIi4vbm9pc2UuanNcIjtcbmltcG9ydCBSTkcgZnJvbSBcIi4uL3JuZy5qc1wiO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSBcIi4uL3V0aWwuanNcIjtcbmNvbnN0IEYyID0gMC41ICogKE1hdGguc3FydCgzKSAtIDEpO1xuY29uc3QgRzIgPSAoMyAtIE1hdGguc3FydCgzKSkgLyA2O1xuLyoqXG4gKiBBIHNpbXBsZSAyZCBpbXBsZW1lbnRhdGlvbiBvZiBzaW1wbGV4IG5vaXNlIGJ5IE9uZHJlaiBaYXJhXG4gKlxuICogQmFzZWQgb24gYSBzcGVlZC1pbXByb3ZlZCBzaW1wbGV4IG5vaXNlIGFsZ29yaXRobSBmb3IgMkQsIDNEIGFuZCA0RCBpbiBKYXZhLlxuICogV2hpY2ggaXMgYmFzZWQgb24gZXhhbXBsZSBjb2RlIGJ5IFN0ZWZhbiBHdXN0YXZzb24gKHN0ZWd1QGl0bi5saXUuc2UpLlxuICogV2l0aCBPcHRpbWlzYXRpb25zIGJ5IFBldGVyIEVhc3RtYW4gKHBlYXN0bWFuQGRyaXp6bGUuc3RhbmZvcmQuZWR1KS5cbiAqIEJldHRlciByYW5rIG9yZGVyaW5nIG1ldGhvZCBieSBTdGVmYW4gR3VzdGF2c29uIGluIDIwMTIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZXggZXh0ZW5kcyBOb2lzZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGdyYWRpZW50cyBSYW5kb20gZ3JhZGllbnRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhZGllbnRzID0gMjU2KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2dyYWRpZW50cyA9IFtcbiAgICAgICAgICAgIFswLCAtMV0sXG4gICAgICAgICAgICBbMSwgLTFdLFxuICAgICAgICAgICAgWzEsIDBdLFxuICAgICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgICAgWzAsIDFdLFxuICAgICAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgICAgIFstMSwgMF0sXG4gICAgICAgICAgICBbLTEsIC0xXVxuICAgICAgICBdO1xuICAgICAgICBsZXQgcGVybXV0YXRpb25zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JhZGllbnRzOyBpKyspIHtcbiAgICAgICAgICAgIHBlcm11dGF0aW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHBlcm11dGF0aW9ucyA9IFJORy5zaHVmZmxlKHBlcm11dGF0aW9ucyk7XG4gICAgICAgIHRoaXMuX3Blcm1zID0gW107XG4gICAgICAgIHRoaXMuX2luZGV4ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICogZ3JhZGllbnRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1zLnB1c2gocGVybXV0YXRpb25zW2kgJSBncmFkaWVudHNdKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ZXMucHVzaCh0aGlzLl9wZXJtc1tpXSAlIHRoaXMuX2dyYWRpZW50cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCh4aW4sIHlpbikge1xuICAgICAgICBsZXQgcGVybXMgPSB0aGlzLl9wZXJtcztcbiAgICAgICAgbGV0IGluZGV4ZXMgPSB0aGlzLl9pbmRleGVzO1xuICAgICAgICBsZXQgY291bnQgPSBwZXJtcy5sZW5ndGggLyAyO1xuICAgICAgICBsZXQgbjAgPSAwLCBuMSA9IDAsIG4yID0gMCwgZ2k7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgICAvLyBTa2V3IHRoZSBpbnB1dCBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggc2ltcGxleCBjZWxsIHdlJ3JlIGluXG4gICAgICAgIGxldCBzID0gKHhpbiArIHlpbikgKiBGMjsgLy8gSGFpcnkgZmFjdG9yIGZvciAyRFxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoeGluICsgcyk7XG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcih5aW4gKyBzKTtcbiAgICAgICAgbGV0IHQgPSAoaSArIGopICogRzI7XG4gICAgICAgIGxldCBYMCA9IGkgLSB0OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSkgc3BhY2VcbiAgICAgICAgbGV0IFkwID0gaiAtIHQ7XG4gICAgICAgIGxldCB4MCA9IHhpbiAtIFgwOyAvLyBUaGUgeCx5IGRpc3RhbmNlcyBmcm9tIHRoZSBjZWxsIG9yaWdpblxuICAgICAgICBsZXQgeTAgPSB5aW4gLSBZMDtcbiAgICAgICAgLy8gRm9yIHRoZSAyRCBjYXNlLCB0aGUgc2ltcGxleCBzaGFwZSBpcyBhbiBlcXVpbGF0ZXJhbCB0cmlhbmdsZS5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggd2UgYXJlIGluLlxuICAgICAgICBsZXQgaTEsIGoxOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgKG1pZGRsZSkgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaikgY29vcmRzXG4gICAgICAgIGlmICh4MCA+IHkwKSB7XG4gICAgICAgICAgICBpMSA9IDE7XG4gICAgICAgICAgICBqMSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIGxvd2VyIHRyaWFuZ2xlLCBYWSBvcmRlcjogKDAsMCktPigxLDApLT4oMSwxKVxuICAgICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgICAgajEgPSAxO1xuICAgICAgICB9IC8vIHVwcGVyIHRyaWFuZ2xlLCBZWCBvcmRlcjogKDAsMCktPigwLDEpLT4oMSwxKVxuICAgICAgICAvLyBBIHN0ZXAgb2YgKDEsMCkgaW4gKGksaikgbWVhbnMgYSBzdGVwIG9mICgxLWMsLWMpIGluICh4LHkpLCBhbmRcbiAgICAgICAgLy8gYSBzdGVwIG9mICgwLDEpIGluIChpLGopIG1lYW5zIGEgc3RlcCBvZiAoLWMsMS1jKSBpbiAoeCx5KSwgd2hlcmVcbiAgICAgICAgLy8gYyA9ICgzLXNxcnQoMykpLzZcbiAgICAgICAgbGV0IHgxID0geDAgLSBpMSArIEcyOyAvLyBPZmZzZXRzIGZvciBtaWRkbGUgY29ybmVyIGluICh4LHkpIHVuc2tld2VkIGNvb3Jkc1xuICAgICAgICBsZXQgeTEgPSB5MCAtIGoxICsgRzI7XG4gICAgICAgIGxldCB4MiA9IHgwIC0gMSArIDIgKiBHMjsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSkgdW5za2V3ZWQgY29vcmRzXG4gICAgICAgIGxldCB5MiA9IHkwIC0gMSArIDIgKiBHMjtcbiAgICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSB0aHJlZSBzaW1wbGV4IGNvcm5lcnNcbiAgICAgICAgbGV0IGlpID0gbW9kKGksIGNvdW50KTtcbiAgICAgICAgbGV0IGpqID0gbW9kKGosIGNvdW50KTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb250cmlidXRpb24gZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgICBsZXQgdDAgPSAwLjUgLSB4MCAqIHgwIC0geTAgKiB5MDtcbiAgICAgICAgaWYgKHQwID49IDApIHtcbiAgICAgICAgICAgIHQwICo9IHQwO1xuICAgICAgICAgICAgZ2kgPSBpbmRleGVzW2lpICsgcGVybXNbampdXTtcbiAgICAgICAgICAgIGxldCBncmFkID0gdGhpcy5fZ3JhZGllbnRzW2dpXTtcbiAgICAgICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkWzBdICogeDAgKyBncmFkWzFdICogeTApO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0MSA9IDAuNSAtIHgxICogeDEgLSB5MSAqIHkxO1xuICAgICAgICBpZiAodDEgPj0gMCkge1xuICAgICAgICAgICAgdDEgKj0gdDE7XG4gICAgICAgICAgICBnaSA9IGluZGV4ZXNbaWkgKyBpMSArIHBlcm1zW2pqICsgajFdXTtcbiAgICAgICAgICAgIGxldCBncmFkID0gdGhpcy5fZ3JhZGllbnRzW2dpXTtcbiAgICAgICAgICAgIG4xID0gdDEgKiB0MSAqIChncmFkWzBdICogeDEgKyBncmFkWzFdICogeTEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0MiA9IDAuNSAtIHgyICogeDIgLSB5MiAqIHkyO1xuICAgICAgICBpZiAodDIgPj0gMCkge1xuICAgICAgICAgICAgdDIgKj0gdDI7XG4gICAgICAgICAgICBnaSA9IGluZGV4ZXNbaWkgKyAxICsgcGVybXNbamogKyAxXV07XG4gICAgICAgICAgICBsZXQgZ3JhZCA9IHRoaXMuX2dyYWRpZW50c1tnaV07XG4gICAgICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZFswXSAqIHgyICsgZ3JhZFsxXSAqIHkyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY29udHJpYnV0aW9ucyBmcm9tIGVhY2ggY29ybmVyIHRvIGdldCB0aGUgZmluYWwgbm9pc2UgdmFsdWUuXG4gICAgICAgIC8vIFRoZSByZXN1bHQgaXMgc2NhbGVkIHRvIHJldHVybiB2YWx1ZXMgaW4gdGhlIGludGVydmFsIFstMSwxXS5cbiAgICAgICAgcmV0dXJuIDcwICogKG4wICsgbjEgKyBuMik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhdGggZnJvbSBcIi4vcGF0aC5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgU2ltcGxpZmllZCBBKiBhbGdvcml0aG06IGFsbCBlZGdlcyBoYXZlIGEgdmFsdWUgb2YgMVxuICogQGF1Z21lbnRzIFJPVC5QYXRoXG4gKiBAc2VlIFJPVC5QYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTdGFyIGV4dGVuZHMgUGF0aCB7XG4gICAgY29uc3RydWN0b3IodG9YLCB0b1ksIHBhc3NhYmxlQ2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcih0b1gsIHRvWSwgcGFzc2FibGVDYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3RvZG8gPSBbXTtcbiAgICAgICAgdGhpcy5fZG9uZSA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIGEgcGF0aCBmcm9tIGEgZ2l2ZW4gcG9pbnRcbiAgICAgKiBAc2VlIFJPVC5QYXRoI2NvbXB1dGVcbiAgICAgKi9cbiAgICBjb21wdXRlKGZyb21YLCBmcm9tWSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fdG9kbyA9IFtdO1xuICAgICAgICB0aGlzLl9kb25lID0ge307XG4gICAgICAgIHRoaXMuX2Zyb21YID0gZnJvbVg7XG4gICAgICAgIHRoaXMuX2Zyb21ZID0gZnJvbVk7XG4gICAgICAgIHRoaXMuX2FkZCh0aGlzLl90b1gsIHRoaXMuX3RvWSwgbnVsbCk7XG4gICAgICAgIHdoaWxlICh0aGlzLl90b2RvLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl90b2RvLnNoaWZ0KCk7XG4gICAgICAgICAgICBsZXQgaWQgPSBpdGVtLnggKyBcIixcIiArIGl0ZW0ueTtcbiAgICAgICAgICAgIGlmIChpZCBpbiB0aGlzLl9kb25lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kb25lW2lkXSA9IGl0ZW07XG4gICAgICAgICAgICBpZiAoaXRlbS54ID09IGZyb21YICYmIGl0ZW0ueSA9PSBmcm9tWSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5laWdoYm9ycyA9IHRoaXMuX2dldE5laWdoYm9ycyhpdGVtLngsIGl0ZW0ueSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG5laWdoYm9yWzBdO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gbmVpZ2hib3JbMV07XG4gICAgICAgICAgICAgICAgbGV0IGlkID0geCArIFwiLFwiICsgeTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgaW4gdGhpcy5fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkKHgsIHksIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fZG9uZVtmcm9tWCArIFwiLFwiICsgZnJvbVldO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbS54LCBpdGVtLnkpO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucHJldjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfYWRkKHgsIHksIHByZXYpIHtcbiAgICAgICAgbGV0IGggPSB0aGlzLl9kaXN0YW5jZSh4LCB5KTtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgICAgIGc6IChwcmV2ID8gcHJldi5nICsgMSA6IDApLFxuICAgICAgICAgICAgaDogaFxuICAgICAgICB9O1xuICAgICAgICAvKiBpbnNlcnQgaW50byBwcmlvcml0eSBxdWV1ZSAqL1xuICAgICAgICBsZXQgZiA9IG9iai5nICsgb2JqLmg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdG9kby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl90b2RvW2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW1GID0gaXRlbS5nICsgaXRlbS5oO1xuICAgICAgICAgICAgaWYgKGYgPCBpdGVtRiB8fCAoZiA9PSBpdGVtRiAmJiBoIDwgaXRlbS5oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZG8uc3BsaWNlKGksIDAsIG9iaik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RvZG8ucHVzaChvYmopO1xuICAgIH1cbiAgICBfZGlzdGFuY2UoeCwgeSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kpIHtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKE1hdGguYWJzKHggLSB0aGlzLl9mcm9tWCkgKyBNYXRoLmFicyh5IC0gdGhpcy5fZnJvbVkpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBsZXQgZHggPSBNYXRoLmFicyh4IC0gdGhpcy5fZnJvbVgpO1xuICAgICAgICAgICAgICAgIGxldCBkeSA9IE1hdGguYWJzKHkgLSB0aGlzLl9mcm9tWSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR5ICsgTWF0aC5tYXgoMCwgKGR4IC0gZHkpIC8gMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGguYWJzKHggLSB0aGlzLl9mcm9tWCksIE1hdGguYWJzKHkgLSB0aGlzLl9mcm9tWSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhdGggZnJvbSBcIi4vcGF0aC5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgU2ltcGxpZmllZCBEaWprc3RyYSdzIGFsZ29yaXRobTogYWxsIGVkZ2VzIGhhdmUgYSB2YWx1ZSBvZiAxXG4gKiBAYXVnbWVudHMgUk9ULlBhdGhcbiAqIEBzZWUgUk9ULlBhdGhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlqa3N0cmEgZXh0ZW5kcyBQYXRoIHtcbiAgICBjb25zdHJ1Y3Rvcih0b1gsIHRvWSwgcGFzc2FibGVDYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcih0b1gsIHRvWSwgcGFzc2FibGVDYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2NvbXB1dGVkID0ge307XG4gICAgICAgIHRoaXMuX3RvZG8gPSBbXTtcbiAgICAgICAgdGhpcy5fYWRkKHRvWCwgdG9ZLCBudWxsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBhIHBhdGggZnJvbSBhIGdpdmVuIHBvaW50XG4gICAgICogQHNlZSBST1QuUGF0aCNjb21wdXRlXG4gICAgICovXG4gICAgY29tcHV0ZShmcm9tWCwgZnJvbVksIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBrZXkgPSBmcm9tWCArIFwiLFwiICsgZnJvbVk7XG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLl9jb21wdXRlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGUoZnJvbVgsIGZyb21ZKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy5fY29tcHV0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9jb21wdXRlZFtrZXldO1xuICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbS54LCBpdGVtLnkpO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucHJldjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIGEgbm9uLWNhY2hlZCB2YWx1ZVxuICAgICAqL1xuICAgIF9jb21wdXRlKGZyb21YLCBmcm9tWSkge1xuICAgICAgICB3aGlsZSAodGhpcy5fdG9kby5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5fdG9kby5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ueCA9PSBmcm9tWCAmJiBpdGVtLnkgPT0gZnJvbVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmVpZ2hib3JzID0gdGhpcy5fZ2V0TmVpZ2hib3JzKGl0ZW0ueCwgaXRlbS55KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gbmVpZ2hib3JbMF07XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBuZWlnaGJvclsxXTtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB4ICsgXCIsXCIgKyB5O1xuICAgICAgICAgICAgICAgIGlmIChpZCBpbiB0aGlzLl9jb21wdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IC8qIGFscmVhZHkgZG9uZSAqL1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZCh4LCB5LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfYWRkKHgsIHksIHByZXYpIHtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgcHJldjogcHJldlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jb21wdXRlZFt4ICsgXCIsXCIgKyB5XSA9IG9iajtcbiAgICAgICAgdGhpcy5fdG9kby5wdXNoKG9iaik7XG4gICAgfVxufVxuIiwiaW1wb3J0IERpamtzdHJhIGZyb20gXCIuL2RpamtzdHJhLmpzXCI7XG5pbXBvcnQgQVN0YXIgZnJvbSBcIi4vYXN0YXIuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHsgRGlqa3N0cmEsIEFTdGFyIH07XG4iLCJpbXBvcnQgeyBESVJTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgQWJzdHJhY3QgcGF0aGZpbmRlclxuICogQHBhcmFtIHtpbnR9IHRvWCBUYXJnZXQgWCBjb29yZFxuICogQHBhcmFtIHtpbnR9IHRvWSBUYXJnZXQgWSBjb29yZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGFzc2FibGVDYWxsYmFjayBDYWxsYmFjayB0byBkZXRlcm1pbmUgbWFwIHBhc3NhYmlsaXR5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2ludH0gW29wdGlvbnMudG9wb2xvZ3k9OF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aCB7XG4gICAgY29uc3RydWN0b3IodG9YLCB0b1ksIHBhc3NhYmxlQ2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl90b1ggPSB0b1g7XG4gICAgICAgIHRoaXMuX3RvWSA9IHRvWTtcbiAgICAgICAgdGhpcy5fcGFzc2FibGVDYWxsYmFjayA9IHBhc3NhYmxlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRvcG9sb2d5OiA4XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kaXJzID0gRElSU1t0aGlzLl9vcHRpb25zLnRvcG9sb2d5XTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudG9wb2xvZ3kgPT0gOCkgeyAvKiByZW9yZGVyIGRpcnMgZm9yIG1vcmUgYWVzdGhldGljIHJlc3VsdCAodmVydGljYWwvaG9yaXpvbnRhbCBmaXJzdCkgKi9cbiAgICAgICAgICAgIHRoaXMuX2RpcnMgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyc1swXSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJzWzJdLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnNbNF0sXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyc1s2XSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJzWzFdLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnNbM10sXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyc1s1XSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJzWzddXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXROZWlnaGJvcnMoY3gsIGN5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5fZGlyc1tpXTtcbiAgICAgICAgICAgIGxldCB4ID0gY3ggKyBkaXJbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGN5ICsgZGlyWzFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wYXNzYWJsZUNhbGxiYWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNvZGUgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgQWxlYSBhbGdvcml0aG07IChDKSAyMDEwIEpvaGFubmVzIEJhYWfDuGUuXG4gKiBBbGVhIGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS5cbiAqL1xuY29uc3QgRlJBQyA9IDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8qIDJeLTMyICovXG5jbGFzcyBSTkcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zZWVkID0gMDtcbiAgICAgICAgdGhpcy5fczAgPSAwO1xuICAgICAgICB0aGlzLl9zMSA9IDA7XG4gICAgICAgIHRoaXMuX3MyID0gMDtcbiAgICAgICAgdGhpcy5fYyA9IDA7XG4gICAgfVxuICAgIGdldFNlZWQoKSB7IHJldHVybiB0aGlzLl9zZWVkOyB9XG4gICAgLyoqXG4gICAgICogU2VlZCB0aGUgbnVtYmVyIGdlbmVyYXRvclxuICAgICAqL1xuICAgIHNldFNlZWQoc2VlZCkge1xuICAgICAgICBzZWVkID0gKHNlZWQgPCAxID8gMSAvIHNlZWQgOiBzZWVkKTtcbiAgICAgICAgdGhpcy5fc2VlZCA9IHNlZWQ7XG4gICAgICAgIHRoaXMuX3MwID0gKHNlZWQgPj4+IDApICogRlJBQztcbiAgICAgICAgc2VlZCA9IChzZWVkICogNjkwNjkgKyAxKSA+Pj4gMDtcbiAgICAgICAgdGhpcy5fczEgPSBzZWVkICogRlJBQztcbiAgICAgICAgc2VlZCA9IChzZWVkICogNjkwNjkgKyAxKSA+Pj4gMDtcbiAgICAgICAgdGhpcy5fczIgPSBzZWVkICogRlJBQztcbiAgICAgICAgdGhpcy5fYyA9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBQc2V1ZG9yYW5kb20gdmFsdWUgWzAsMSksIHVuaWZvcm1seSBkaXN0cmlidXRlZFxuICAgICAqL1xuICAgIGdldFVuaWZvcm0oKSB7XG4gICAgICAgIGxldCB0ID0gMjA5MTYzOSAqIHRoaXMuX3MwICsgdGhpcy5fYyAqIEZSQUM7XG4gICAgICAgIHRoaXMuX3MwID0gdGhpcy5fczE7XG4gICAgICAgIHRoaXMuX3MxID0gdGhpcy5fczI7XG4gICAgICAgIHRoaXMuX2MgPSB0IHwgMDtcbiAgICAgICAgdGhpcy5fczIgPSB0IC0gdGhpcy5fYztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3MyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbG93ZXJCb3VuZCBUaGUgbG93ZXIgZW5kIG9mIHRoZSByYW5nZSB0byByZXR1cm4gYSB2YWx1ZSBmcm9tLCBpbmNsdXNpdmVcbiAgICAgKiBAcGFyYW0gdXBwZXJCb3VuZCBUaGUgdXBwZXIgZW5kIG9mIHRoZSByYW5nZSB0byByZXR1cm4gYSB2YWx1ZSBmcm9tLCBpbmNsdXNpdmVcbiAgICAgKiBAcmV0dXJucyBQc2V1ZG9yYW5kb20gdmFsdWUgW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdLCB1c2luZyBST1QuUk5HLmdldFVuaWZvcm0oKSB0byBkaXN0cmlidXRlIHRoZSB2YWx1ZVxuICAgICAqL1xuICAgIGdldFVuaWZvcm1JbnQobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXgobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCk7XG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRVbmlmb3JtKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbWVhbiBNZWFuIHZhbHVlXG4gICAgICogQHBhcmFtIHN0ZGRldiBTdGFuZGFyZCBkZXZpYXRpb24uIH45NSUgb2YgdGhlIGFic29sdXRlIHZhbHVlcyB3aWxsIGJlIGxvd2VyIHRoYW4gMipzdGRkZXYuXG4gICAgICogQHJldHVybnMgQSBub3JtYWxseSBkaXN0cmlidXRlZCBwc2V1ZG9yYW5kb20gdmFsdWVcbiAgICAgKi9cbiAgICBnZXROb3JtYWwobWVhbiA9IDAsIHN0ZGRldiA9IDEpIHtcbiAgICAgICAgbGV0IHUsIHYsIHI7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHUgPSAyICogdGhpcy5nZXRVbmlmb3JtKCkgLSAxO1xuICAgICAgICAgICAgdiA9IDIgKiB0aGlzLmdldFVuaWZvcm0oKSAtIDE7XG4gICAgICAgICAgICByID0gdSAqIHUgKyB2ICogdjtcbiAgICAgICAgfSB3aGlsZSAociA+IDEgfHwgciA9PSAwKTtcbiAgICAgICAgbGV0IGdhdXNzID0gdSAqIE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHIpIC8gcik7XG4gICAgICAgIHJldHVybiBtZWFuICsgZ2F1c3MgKiBzdGRkZXY7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIFBzZXVkb3JhbmRvbSB2YWx1ZSBbMSwxMDBdIGluY2x1c2l2ZSwgdW5pZm9ybWx5IGRpc3RyaWJ1dGVkXG4gICAgICovXG4gICAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIDEgKyBNYXRoLmZsb29yKHRoaXMuZ2V0VW5pZm9ybSgpICogMTAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgUmFuZG9tbHkgcGlja2VkIGl0ZW0sIG51bGwgd2hlbiBsZW5ndGg9MFxuICAgICAqL1xuICAgIGdldEl0ZW0oYXJyYXkpIHtcbiAgICAgICAgaWYgKCFhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKHRoaXMuZ2V0VW5pZm9ybSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIE5ldyBhcnJheSB3aXRoIHJhbmRvbWl6ZWQgaXRlbXNcbiAgICAgKi9cbiAgICBzaHVmZmxlKGFycmF5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGNsb25lID0gYXJyYXkuc2xpY2UoKTtcbiAgICAgICAgd2hpbGUgKGNsb25lLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gY2xvbmUuaW5kZXhPZih0aGlzLmdldEl0ZW0oY2xvbmUpKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNsb25lLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIGtleT13aGF0ZXZlciwgdmFsdWU9d2VpZ2h0IChyZWxhdGl2ZSBwcm9iYWJpbGl0eSlcbiAgICAgKiBAcmV0dXJucyB3aGF0ZXZlclxuICAgICAqL1xuICAgIGdldFdlaWdodGVkVmFsdWUoZGF0YSkge1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICB0b3RhbCArPSBkYXRhW2lkXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tID0gdGhpcy5nZXRVbmlmb3JtKCkgKiB0b3RhbDtcbiAgICAgICAgbGV0IGlkLCBwYXJ0ID0gMDtcbiAgICAgICAgZm9yIChpZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICBwYXJ0ICs9IGRhdGFbaWRdO1xuICAgICAgICAgICAgaWYgKHJhbmRvbSA8IHBhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYnkgc29tZSBmbG9hdGluZy1wb2ludCBhbm5veWFuY2Ugd2UgaGF2ZVxuICAgICAgICAvLyByYW5kb20gPj0gdG90YWwsIGp1c3QgcmV0dXJuIHRoZSBsYXN0IGlkLlxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBSTkcgc3RhdGUuIFVzZWZ1bCBmb3Igc3RvcmluZyB0aGUgc3RhdGUgYW5kIHJlLXNldHRpbmcgaXQgdmlhIHNldFN0YXRlLlxuICAgICAqIEByZXR1cm5zIEludGVybmFsIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RhdGUoKSB7IHJldHVybiBbdGhpcy5fczAsIHRoaXMuX3MxLCB0aGlzLl9zMiwgdGhpcy5fY107IH1cbiAgICAvKipcbiAgICAgKiBTZXQgYSBwcmV2aW91c2x5IHJldHJpZXZlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLl9zMCA9IHN0YXRlWzBdO1xuICAgICAgICB0aGlzLl9zMSA9IHN0YXRlWzFdO1xuICAgICAgICB0aGlzLl9zMiA9IHN0YXRlWzJdO1xuICAgICAgICB0aGlzLl9jID0gc3RhdGVbM107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY2xvbmVkIFJOR1xuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICBsZXQgY2xvbmUgPSBuZXcgUk5HKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBSTkcoKS5zZXRTZWVkKERhdGUubm93KCkpO1xuIiwiaW1wb3J0IFNjaGVkdWxlciBmcm9tIFwiLi9zY2hlZHVsZXIuanNcIjtcbi8qKlxuICogQGNsYXNzIEFjdGlvbi1iYXNlZCBzY2hlZHVsZXJcbiAqIEBhdWdtZW50cyBST1QuU2NoZWR1bGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFNjaGVkdWxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHREdXJhdGlvbiA9IDE7IC8qIGZvciBuZXdseSBhZGRlZCAqL1xuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX2RlZmF1bHREdXJhdGlvbjsgLyogZm9yIHRoaXMuX2N1cnJlbnQgKi9cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHJlcGVhdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0xXVxuICAgICAqIEBzZWUgUk9ULlNjaGVkdWxlciNhZGRcbiAgICAgKi9cbiAgICBhZGQoaXRlbSwgcmVwZWF0LCB0aW1lKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlLmFkZChpdGVtLCB0aW1lIHx8IHRoaXMuX2RlZmF1bHREdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBzdXBlci5hZGQoaXRlbSwgcmVwZWF0KTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fZGVmYXVsdER1cmF0aW9uO1xuICAgICAgICByZXR1cm4gc3VwZXIuY2xlYXIoKTtcbiAgICB9XG4gICAgcmVtb3ZlKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT0gdGhpcy5fY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSB0aGlzLl9kZWZhdWx0RHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbW92ZShpdGVtKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHNlZSBST1QuU2NoZWR1bGVyI25leHRcbiAgICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudCAhPT0gbnVsbCAmJiB0aGlzLl9yZXBlYXQuaW5kZXhPZih0aGlzLl9jdXJyZW50KSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcXVldWUuYWRkKHRoaXMuX2N1cnJlbnQsIHRoaXMuX2R1cmF0aW9uIHx8IHRoaXMuX2RlZmF1bHREdXJhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX2RlZmF1bHREdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIubmV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgZHVyYXRpb24gZm9yIHRoZSBhY3RpdmUgaXRlbVxuICAgICAqL1xuICAgIHNldER1cmF0aW9uKHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgU2ltcGxlIGZyb20gXCIuL3NpbXBsZS5qc1wiO1xuaW1wb3J0IFNwZWVkIGZyb20gXCIuL3NwZWVkLmpzXCI7XG5pbXBvcnQgQWN0aW9uIGZyb20gXCIuL2FjdGlvbi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgeyBTaW1wbGUsIFNwZWVkLCBBY3Rpb24gfTtcbiIsImltcG9ydCBFdmVudFF1ZXVlIGZyb20gXCIuLi9ldmVudHF1ZXVlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZXIge1xuICAgIC8qKlxuICAgICAqIEBjbGFzcyBBYnN0cmFjdCBzY2hlZHVsZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBuZXcgRXZlbnRRdWV1ZSgpO1xuICAgICAgICB0aGlzLl9yZXBlYXQgPSBbXTtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUgUk9ULkV2ZW50UXVldWUjZ2V0VGltZVxuICAgICAqL1xuICAgIGdldFRpbWUoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5nZXRUaW1lKCk7IH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGl0ZW1cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHJlcGVhdFxuICAgICAqL1xuICAgIGFkZChpdGVtLCByZXBlYXQpIHtcbiAgICAgICAgaWYgKHJlcGVhdCkge1xuICAgICAgICAgICAgdGhpcy5fcmVwZWF0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdGltZSB0aGUgZ2l2ZW4gaXRlbSBpcyBzY2hlZHVsZWQgZm9yXG4gICAgICogQHBhcmFtIHs/fSBpdGVtXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIGdldFRpbWVPZihpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZS5nZXRFdmVudFRpbWUoaXRlbSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBpdGVtc1xuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5jbGVhcigpO1xuICAgICAgICB0aGlzLl9yZXBlYXQgPSBbXTtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGl0ZW1cbiAgICAgKiBAcGFyYW0gez99IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbH0gc3VjY2Vzc2Z1bD9cbiAgICAgKi9cbiAgICByZW1vdmUoaXRlbSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fcXVldWUucmVtb3ZlKGl0ZW0pO1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9yZXBlYXQuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBlYXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PSBpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZSBuZXh0IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7P31cbiAgICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fcXVldWUuZ2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBTY2hlZHVsZXIgZnJvbSBcIi4vc2NoZWR1bGVyLmpzXCI7XG4vKipcbiAqIEBjbGFzcyBTaW1wbGUgZmFpciBzY2hlZHVsZXIgKHJvdW5kLXJvYmluIHN0eWxlKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGUgZXh0ZW5kcyBTY2hlZHVsZXIge1xuICAgIGFkZChpdGVtLCByZXBlYXQpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuYWRkKGl0ZW0sIDApO1xuICAgICAgICByZXR1cm4gc3VwZXIuYWRkKGl0ZW0sIHJlcGVhdCk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ICE9PSBudWxsICYmIHRoaXMuX3JlcGVhdC5pbmRleE9mKHRoaXMuX2N1cnJlbnQpICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5hZGQodGhpcy5fY3VycmVudCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLm5leHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2NoZWR1bGVyIGZyb20gXCIuL3NjaGVkdWxlci5qc1wiO1xuLyoqXG4gKiBAY2xhc3MgU3BlZWQtYmFzZWQgc2NoZWR1bGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVkIGV4dGVuZHMgU2NoZWR1bGVyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBhbnl0aGluZyB3aXRoIFwiZ2V0U3BlZWRcIiBtZXRob2RcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHJlcGVhdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0xL2l0ZW0uZ2V0U3BlZWQoKV1cbiAgICAgKiBAc2VlIFJPVC5TY2hlZHVsZXIjYWRkXG4gICAgICovXG4gICAgYWRkKGl0ZW0sIHJlcGVhdCwgdGltZSkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5hZGQoaXRlbSwgdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IDEgLyBpdGVtLmdldFNwZWVkKCkpO1xuICAgICAgICByZXR1cm4gc3VwZXIuYWRkKGl0ZW0sIHJlcGVhdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUgUk9ULlNjaGVkdWxlciNuZXh0XG4gICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgJiYgdGhpcy5fcmVwZWF0LmluZGV4T2YodGhpcy5fY3VycmVudCkgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLmFkZCh0aGlzLl9jdXJyZW50LCAxIC8gdGhpcy5fY3VycmVudC5nZXRTcGVlZCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIubmV4dCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSTkcgZnJvbSBcIi4vcm5nLmpzXCI7XG4vKipcbiAqIEBjbGFzcyAoTWFya292IHByb2Nlc3MpLWJhc2VkIHN0cmluZyBnZW5lcmF0b3IuXG4gKiBDb3BpZWQgZnJvbSBhIDxhIGhyZWY9XCJodHRwOi8vd3d3LnJvZ3VlYmFzaW4ucm9ndWVsaWtlZGV2ZWxvcG1lbnQub3JnL2luZGV4LnBocD90aXRsZT1OYW1lc19mcm9tX2FfaGlnaF9vcmRlcl9NYXJrb3ZfUHJvY2Vzc19hbmRfYV9zaW1wbGlmaWVkX0thdHpfYmFjay1vZmZfc2NoZW1lXCI+Um9ndWVCYXNpbiBhcnRpY2xlPC9hPi5cbiAqIE9mZmVycyBjb25maWd1cmFibGUgb3JkZXIgYW5kIHByaW9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdvcmRzOiBmYWxzZSxcbiAgICAgICAgICAgIG9yZGVyOiAzLFxuICAgICAgICAgICAgcHJpb3I6IDAuMDAxXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2JvdW5kYXJ5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgwKTtcbiAgICAgICAgdGhpcy5fc3VmZml4ID0gdGhpcy5fYm91bmRhcnk7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29wdGlvbnMub3JkZXI7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcHJlZml4LnB1c2godGhpcy5fYm91bmRhcnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByaW9yVmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX3ByaW9yVmFsdWVzW3RoaXMuX2JvdW5kYXJ5XSA9IHRoaXMuX29wdGlvbnMucHJpb3I7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBsZWFybmluZyBkYXRhXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fcHJpb3JWYWx1ZXMgPSB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gR2VuZXJhdGVkIHN0cmluZ1xuICAgICAqL1xuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW3RoaXMuX3NhbXBsZSh0aGlzLl9wcmVmaXgpXTtcbiAgICAgICAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gIT0gdGhpcy5fYm91bmRhcnkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuX3NhbXBsZShyZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fam9pbihyZXN1bHQuc2xpY2UoMCwgLTEpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSAobGVhcm4pIGEgc3RyaW5nIGZyb20gYSB0cmFpbmluZyBzZXRcbiAgICAgKi9cbiAgICBvYnNlcnZlKHN0cmluZykge1xuICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5fc3BsaXQoc3RyaW5nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3ByaW9yVmFsdWVzW3Rva2Vuc1tpXV0gPSB0aGlzLl9vcHRpb25zLnByaW9yO1xuICAgICAgICB9XG4gICAgICAgIHRva2VucyA9IHRoaXMuX3ByZWZpeC5jb25jYXQodG9rZW5zKS5jb25jYXQodGhpcy5fc3VmZml4KTsgLyogYWRkIGJvdW5kYXJ5IHN5bWJvbHMgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX29wdGlvbnMub3JkZXI7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gdG9rZW5zLnNsaWNlKGkgLSB0aGlzLl9vcHRpb25zLm9yZGVyLCBpKTtcbiAgICAgICAgICAgIGxldCBldmVudCA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzdWJjb250ZXh0ID0gY29udGV4dC5zbGljZShqKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlRXZlbnQoc3ViY29udGV4dCwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFN0YXRzKCkge1xuICAgICAgICBsZXQgcGFydHMgPSBbXTtcbiAgICAgICAgbGV0IHByaW9yQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLl9wcmlvclZhbHVlcykubGVuZ3RoO1xuICAgICAgICBwcmlvckNvdW50LS07IC8vIGJvdW5kYXJ5XG4gICAgICAgIHBhcnRzLnB1c2goXCJkaXN0aW5jdCBzYW1wbGVzOiBcIiArIHByaW9yQ291bnQpO1xuICAgICAgICBsZXQgZGF0YUNvdW50ID0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoO1xuICAgICAgICBsZXQgZXZlbnRDb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgZXZlbnRDb3VudCArPSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhW3BdKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChcImRpY3Rpb25hcnkgc2l6ZSAoY29udGV4dHMpOiBcIiArIGRhdGFDb3VudCk7XG4gICAgICAgIHBhcnRzLnB1c2goXCJkaWN0aW9uYXJ5IHNpemUgKGV2ZW50cyk6IFwiICsgZXZlbnRDb3VudCk7XG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLCBcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBfc3BsaXQoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQodGhpcy5fb3B0aW9ucy53b3JkcyA/IC9cXHMrLyA6IFwiXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgX2pvaW4oYXJyKSB7XG4gICAgICAgIHJldHVybiBhcnIuam9pbih0aGlzLl9vcHRpb25zLndvcmRzID8gXCIgXCIgOiBcIlwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgICAqL1xuICAgIF9vYnNlcnZlRXZlbnQoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuX2pvaW4oY29udGV4dCk7XG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLl9kYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YVtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhW2tleV07XG4gICAgICAgIGlmICghKGV2ZW50IGluIGRhdGEpKSB7XG4gICAgICAgICAgICBkYXRhW2V2ZW50XSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtldmVudF0rKztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX1cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIF9zYW1wbGUoY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5fYmFja29mZihjb250ZXh0KTtcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuX2pvaW4oY29udGV4dCk7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVtrZXldO1xuICAgICAgICBsZXQgYXZhaWxhYmxlID0ge307XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnByaW9yKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBldmVudCBpbiB0aGlzLl9wcmlvclZhbHVlcykge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVtldmVudF0gPSB0aGlzLl9wcmlvclZhbHVlc1tldmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBldmVudCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlW2V2ZW50XSArPSBkYXRhW2V2ZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJORy5nZXRXZWlnaHRlZFZhbHVlKGF2YWlsYWJsZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119XG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIF9iYWNrb2ZmKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gdGhpcy5fb3B0aW9ucy5vcmRlcikge1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQuc2xpY2UoLXRoaXMuX29wdGlvbnMub3JkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQubGVuZ3RoIDwgdGhpcy5fb3B0aW9ucy5vcmRlcikge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMuX3ByZWZpeC5zbGljZSgwLCB0aGlzLl9vcHRpb25zLm9yZGVyIC0gY29udGV4dC5sZW5ndGgpLmNvbmNhdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoISh0aGlzLl9qb2luKGNvbnRleHQpIGluIHRoaXMuX2RhdGEpICYmIGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAbmFtZXNwYWNlXG4gKiBDb250YWlucyB0ZXh0IHRva2VuaXphdGlvbiBhbmQgYnJlYWtpbmcgcm91dGluZXNcbiAqL1xuY29uc3QgUkVfQ09MT1JTID0gLyUoW2JjXSl7KFtefV0qKX0vZztcbi8vIHRva2VuIHR5cGVzXG5leHBvcnQgY29uc3QgVFlQRV9URVhUID0gMDtcbmV4cG9ydCBjb25zdCBUWVBFX05FV0xJTkUgPSAxO1xuZXhwb3J0IGNvbnN0IFRZUEVfRkcgPSAyO1xuZXhwb3J0IGNvbnN0IFRZUEVfQkcgPSAzO1xuLyoqXG4gKiBNZWFzdXJlIHNpemUgb2YgYSByZXN1bHRpbmcgdGV4dCBibG9ja1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZShzdHIsIG1heFdpZHRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHsgd2lkdGg6IDAsIGhlaWdodDogMSB9O1xuICAgIGxldCB0b2tlbnMgPSB0b2tlbml6ZShzdHIsIG1heFdpZHRoKTtcbiAgICBsZXQgbGluZVdpZHRoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUWVBFX1RFWFQ6XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoICs9IHRva2VuLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRV9ORVdMSU5FOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQrKztcbiAgICAgICAgICAgICAgICByZXN1bHQud2lkdGggPSBNYXRoLm1heChyZXN1bHQud2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQud2lkdGggPSBNYXRoLm1heChyZXN1bHQud2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ29udmVydCBzdHJpbmcgdG8gYSBzZXJpZXMgb2YgYSBmb3JtYXR0aW5nIGNvbW1hbmRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzdHIsIG1heFdpZHRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIC8qIGZpcnN0IHRva2VuaXphdGlvbiBwYXNzIC0gc3BsaXQgdGV4dHMgYW5kIGNvbG9yIGZvcm1hdHRpbmcgY29tbWFuZHMgKi9cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBzdHIucmVwbGFjZShSRV9DT0xPUlMsIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgbmFtZSwgaW5kZXgpIHtcbiAgICAgICAgLyogc3RyaW5nIGJlZm9yZSAqL1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zdWJzdHJpbmcob2Zmc2V0LCBpbmRleCk7XG4gICAgICAgIGlmIChwYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFRZUEVfVEVYVCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFydFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogY29sb3IgY29tbWFuZCAqL1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAodHlwZSA9PSBcImNcIiA/IFRZUEVfRkcgOiBUWVBFX0JHKSxcbiAgICAgICAgICAgIHZhbHVlOiBuYW1lLnRyaW0oKVxuICAgICAgICB9KTtcbiAgICAgICAgb2Zmc2V0ID0gaW5kZXggKyBtYXRjaC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICAgIC8qIGxhc3QgcmVtYWluaW5nIHBhcnQgKi9cbiAgICBsZXQgcGFydCA9IHN0ci5zdWJzdHJpbmcob2Zmc2V0KTtcbiAgICBpZiAocGFydC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogVFlQRV9URVhULFxuICAgICAgICAgICAgdmFsdWU6IHBhcnRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBicmVha0xpbmVzKHJlc3VsdCwgbWF4V2lkdGgpO1xufVxuLyogaW5zZXJ0IGxpbmUgYnJlYWtzIGludG8gZmlyc3QtcGFzcyB0b2tlbml6ZWQgZGF0YSAqL1xuZnVuY3Rpb24gYnJlYWtMaW5lcyh0b2tlbnMsIG1heFdpZHRoKSB7XG4gICAgaWYgKCFtYXhXaWR0aCkge1xuICAgICAgICBtYXhXaWR0aCA9IEluZmluaXR5O1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGxpbmVMZW5ndGggPSAwO1xuICAgIGxldCBsYXN0VG9rZW5XaXRoU3BhY2UgPSAtMTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHsgLyogdGFrZSBhbGwgdGV4dCB0b2tlbnMsIHJlbW92ZSBzcGFjZSwgYXBwbHkgbGluZWJyZWFrcyAqL1xuICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIGlmICh0b2tlbi50eXBlID09IFRZUEVfTkVXTElORSkgeyAvKiByZXNldCAqL1xuICAgICAgICAgICAgbGluZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICBsYXN0VG9rZW5XaXRoU3BhY2UgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4udHlwZSAhPSBUWVBFX1RFWFQpIHsgLyogc2tpcCBub24tdGV4dCB0b2tlbnMgKi9cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIHJlbW92ZSBzcGFjZXMgYXQgdGhlIGJlZ2lubmluZyBvZiBsaW5lICovXG4gICAgICAgIHdoaWxlIChsaW5lTGVuZ3RoID09IDAgJiYgdG9rZW4udmFsdWUuY2hhckF0KDApID09IFwiIFwiKSB7XG4gICAgICAgICAgICB0b2tlbi52YWx1ZSA9IHRva2VuLnZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBmb3JjZWQgbmV3bGluZT8gaW5zZXJ0IHR3byBuZXcgdG9rZW5zIGFmdGVyIHRoaXMgb25lICovXG4gICAgICAgIGxldCBpbmRleCA9IHRva2VuLnZhbHVlLmluZGV4T2YoXCJcXG5cIik7XG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdG9rZW4udmFsdWUgPSBicmVha0luc2lkZVRva2VuKHRva2VucywgaSwgaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgLyogaWYgdGhlcmUgYXJlIHNwYWNlcyBhdCB0aGUgZW5kLCB3ZSBtdXN0IHJlbW92ZSB0aGVtICh3ZSBkbyBub3Qgd2FudCB0aGUgbGluZSB0b28gbG9uZykgKi9cbiAgICAgICAgICAgIGxldCBhcnIgPSB0b2tlbi52YWx1ZS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIHdoaWxlIChhcnIubGVuZ3RoICYmIGFyclthcnIubGVuZ3RoIC0gMV0gPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbi52YWx1ZSA9IGFyci5qb2luKFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8qIHRva2VuIGRlZ2VuZXJhdGVkPyAqL1xuICAgICAgICBpZiAoIXRva2VuLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lTGVuZ3RoICsgdG9rZW4udmFsdWUubGVuZ3RoID4gbWF4V2lkdGgpIHsgLyogbGluZSB0b28gbG9uZywgZmluZCBhIHN1aXRhYmxlIGJyZWFraW5nIHNwb3QgKi9cbiAgICAgICAgICAgIC8qIGlzIGl0IHBvc3NpYmxlIHRvIGJyZWFrIHdpdGhpbiB0aGlzIHRva2VuPyAqL1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSB0b2tlbi52YWx1ZS5pbmRleE9mKFwiIFwiLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaW5lTGVuZ3RoICsgbmV4dEluZGV4ID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7IC8qIGJyZWFrIGF0IHNwYWNlIHdpdGhpbiB0aGlzIG9uZSAqL1xuICAgICAgICAgICAgICAgIHRva2VuLnZhbHVlID0gYnJlYWtJbnNpZGVUb2tlbih0b2tlbnMsIGksIGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RUb2tlbldpdGhTcGFjZSAhPSAtMSkgeyAvKiBpcyB0aGVyZSBhIHByZXZpb3VzIHRva2VuIHdoZXJlIGEgYnJlYWsgY2FuIG9jY3VyPyAqL1xuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1tsYXN0VG9rZW5XaXRoU3BhY2VdO1xuICAgICAgICAgICAgICAgIGxldCBicmVha0luZGV4ID0gdG9rZW4udmFsdWUubGFzdEluZGV4T2YoXCIgXCIpO1xuICAgICAgICAgICAgICAgIHRva2VuLnZhbHVlID0gYnJlYWtJbnNpZGVUb2tlbih0b2tlbnMsIGxhc3RUb2tlbldpdGhTcGFjZSwgYnJlYWtJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaSA9IGxhc3RUb2tlbldpdGhTcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvKiBmb3JjZSBicmVhayBpbiB0aGlzIHRva2VuICovXG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSBicmVha0luc2lkZVRva2VuKHRva2VucywgaSwgbWF4V2lkdGggLSBsaW5lTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8qIGxpbmUgbm90IGxvbmcsIGNvbnRpbnVlICovXG4gICAgICAgICAgICBsaW5lTGVuZ3RoICs9IHRva2VuLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZS5pbmRleE9mKFwiIFwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGxhc3RUb2tlbldpdGhTcGFjZSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrOyAvKiBhZHZhbmNlIHRvIG5leHQgdG9rZW4gKi9cbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUWVBFX05FV0xJTkUgfSk7IC8qIGluc2VydCBmYWtlIG5ld2xpbmUgdG8gZml4IHRoZSBsYXN0IHRleHQgbGluZSAqL1xuICAgIC8qIHJlbW92ZSB0cmFpbGluZyBzcGFjZSBmcm9tIHRleHQgdG9rZW5zIGJlZm9yZSBuZXdsaW5lcyAqL1xuICAgIGxldCBsYXN0VGV4dFRva2VuID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUWVBFX1RFWFQ6XG4gICAgICAgICAgICAgICAgbGFzdFRleHRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFX05FV0xJTkU6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RUZXh0VG9rZW4pIHsgLyogcmVtb3ZlIHRyYWlsaW5nIHNwYWNlICovXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnIgPSBsYXN0VGV4dFRva2VuLnZhbHVlLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCAmJiBhcnJbYXJyLmxlbmd0aCAtIDFdID09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdFRleHRUb2tlbi52YWx1ZSA9IGFyci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0VGV4dFRva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2tlbnMucG9wKCk7IC8qIHJlbW92ZSBmYWtlIHRva2VuICovXG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogQ3JlYXRlIG5ldyB0b2tlbnMgYW5kIGluc2VydCB0aGVtIGludG8gdGhlIHN0cmVhbVxuICogQHBhcmFtIHtvYmplY3RbXX0gdG9rZW5zXG4gKiBAcGFyYW0ge2ludH0gdG9rZW5JbmRleCBUb2tlbiBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7aW50fSBicmVha0luZGV4IEluZGV4IHdpdGhpbiBjdXJyZW50IHRva2VuJ3MgdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbH0gcmVtb3ZlQnJlYWtDaGFyIERvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBicmVha2luZyBjaGFyYWN0ZXI/XG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZW1haW5pbmcgdW5icm9rZW4gdG9rZW4gdmFsdWVcbiAqL1xuZnVuY3Rpb24gYnJlYWtJbnNpZGVUb2tlbih0b2tlbnMsIHRva2VuSW5kZXgsIGJyZWFrSW5kZXgsIHJlbW92ZUJyZWFrQ2hhcikge1xuICAgIGxldCBuZXdCcmVha1Rva2VuID0ge1xuICAgICAgICB0eXBlOiBUWVBFX05FV0xJTkVcbiAgICB9O1xuICAgIGxldCBuZXdUZXh0VG9rZW4gPSB7XG4gICAgICAgIHR5cGU6IFRZUEVfVEVYVCxcbiAgICAgICAgdmFsdWU6IHRva2Vuc1t0b2tlbkluZGV4XS52YWx1ZS5zdWJzdHJpbmcoYnJlYWtJbmRleCArIChyZW1vdmVCcmVha0NoYXIgPyAxIDogMCkpXG4gICAgfTtcbiAgICB0b2tlbnMuc3BsaWNlKHRva2VuSW5kZXggKyAxLCAwLCBuZXdCcmVha1Rva2VuLCBuZXdUZXh0VG9rZW4pO1xuICAgIHJldHVybiB0b2tlbnNbdG9rZW5JbmRleF0udmFsdWUuc3Vic3RyaW5nKDAsIGJyZWFrSW5kZXgpO1xufVxuIiwiLyoqXG4gKiBBbHdheXMgcG9zaXRpdmUgbW9kdWx1c1xuICogQHBhcmFtIHggT3BlcmFuZFxuICogQHBhcmFtIG4gTW9kdWx1c1xuICogQHJldHVybnMgeCBtb2R1bG8gblxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kKHgsIG4pIHtcbiAgICByZXR1cm4gKHggJSBuICsgbikgJSBuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluID0gMCwgbWF4ID0gMSkge1xuICAgIGlmICh2YWwgPCBtaW4pXG4gICAgICAgIHJldHVybiBtaW47XG4gICAgaWYgKHZhbCA+IG1heClcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICByZXR1cm4gdmFsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zdWJzdHJpbmcoMSk7XG59XG4vKipcbiAqIEZvcm1hdCBhIHN0cmluZyBpbiBhIGZsZXhpYmxlIHdheS4gU2NhbnMgZm9yICVzIHN0cmluZ3MgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBhcmd1bWVudHMuIExpc3Qgb2YgcGF0dGVybnMgaXMgbW9kaWZpYWJsZSB2aWEgU3RyaW5nLmZvcm1hdC5tYXAuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEBwYXJhbSB7YW55fSBbYXJndl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0ZW1wbGF0ZSwgLi4uYXJncykge1xuICAgIGxldCBtYXAgPSBmb3JtYXQubWFwO1xuICAgIGxldCByZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXAxLCBncm91cDIsIGluZGV4KSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5jaGFyQXQoaW5kZXggLSAxKSA9PSBcIiVcIikge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iaiA9IGFyZ3NbMF07XG4gICAgICAgIGxldCBncm91cCA9IGdyb3VwMSB8fCBncm91cDI7XG4gICAgICAgIGxldCBwYXJ0cyA9IGdyb3VwLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGV0IG5hbWUgPSBwYXJ0cy5zaGlmdCgpIHx8IFwiXCI7XG4gICAgICAgIGxldCBtZXRob2QgPSBtYXBbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBvYmogPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCByZXBsYWNlZCA9IG9ialttZXRob2RdLmFwcGx5KG9iaiwgcGFydHMpO1xuICAgICAgICBsZXQgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKTtcbiAgICAgICAgaWYgKGZpcnN0ICE9IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gY2FwaXRhbGl6ZShyZXBsYWNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkO1xuICAgIH07XG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoLyUoPzooW2Etel0rKXwoPzp7KFtefV0rKX0pKS9naSwgcmVwbGFjZXIpO1xufVxuZm9ybWF0Lm1hcCA9IHtcbiAgICBcInNcIjogXCJ0b1N0cmluZ1wiXG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gQ0VMTCBDTEFTU1xyXG4vLyBCYXNpYyBjbGFzcyBmb3IgdGhlIGdyaWQgY2VsbHNcclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gXCIuL1BvaW50ZXJcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsSW50ZXJmYWNlIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIGVsZW1lbnQ6IHN0cmluZztcclxuICByb3RhdGlvbjogbnVtYmVyO1xyXG4gIGZyb3plbjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwgZXh0ZW5kcyBDb29yZCB7XHJcbiAgY29vcmQ6IENvb3JkOyAvLyByZXF1aXJlZFxyXG4gIGVsZW1lbnQ6IEVsZW1lbnQ7IC8vIG9wdGlvbmFsXHJcbiAgcm90YXRpb246IG51bWJlcjsgLy8gZGVmYXVsdDogdm9pZFxyXG4gIGZyb3plbjogYm9vbGVhbjsgLy8gZGVmYXVsdDogZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IoY29vcmQ6IENvb3JkLCBlbGVtZW50OiBFbGVtZW50LCByb3RhdGlvbiA9IDAsIGZyb3plbiA9IGZhbHNlKSB7XHJcbiAgICBzdXBlcihjb29yZC54LCBjb29yZC55KTtcclxuICAgIHRoaXMuY29vcmQgPSBjb29yZDtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZSBmcm96ZW4gc3RhdHVzIG9mIGNlbGxcclxuICBnZXQgYXNjaWkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuYXNjaWlbdGhpcy5yb3RhdGlvbiAvIHRoaXMuZWxlbWVudC5yb3RhdGlvbkFuZ2xlXTtcclxuICB9XHJcbiAgZ2V0IGZvcmVncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5mb3JlZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuYmFja2dyb3VuZENvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy8gUm90YXRlIGNlbGwgLSBDb3JyZWN0aW5nIHRoZSBqYXZhc2NyaXB0IG1vZHVsbyBidWcgZm9yIG5lZ2F0aXZlIHZhbHVlczogaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMDkwNzE3MDM1MTQwaWZfL2phdmFzY3JpcHQuYWJvdXQuY29tL29kL3Byb2JsZW1zb2x2aW5nL2EvbW9kdWxvYnVnLmh0bVxyXG4gIHJvdGF0ZShhbmdsZTogbnVtYmVyID0gdGhpcy5lbGVtZW50LnJvdGF0aW9uQW5nbGUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcclxuICAgICAgaWYgKE1hdGguYWJzKGFuZ2xlKSAlIHRoaXMuZWxlbWVudC5yb3RhdGlvbkFuZ2xlICE9PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCJFcnJvciBpbiB0aGUgc3VwcGxpZWQgYW5nbGUgY29tcGFyZWQgdG8gdGhlIGVsZW1lbnQgcm90YXRpb24gYW5nbGUuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAoKCh0aGlzLnJvdGF0aW9uICsgYW5nbGUpICUgMzYwKSArIDM2MCkgJSAzNjA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBjZWxsIGlzIGZyb3plbiwgeW91IGNhbid0IHJvdGF0ZSBpdC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGcmVlemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZyb3plbiA9ICF0aGlzLmZyb3plbjtcclxuICB9XHJcblxyXG4gIC8vIEZpcmUgdGhlIGw0ejByNVxyXG4gIGZpcmUoKTogUG9pbnRlciB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hbWUgPT09IFwibGFzZXJcIikge1xyXG4gICAgICByZXR1cm4gbmV3IFBvaW50ZXIodGhpcy5jb29yZCwgdGhpcy5yb3RhdGlvbiwgMSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGxhc2VycyBjYW4gZmlyZSBhIHBhcnRpY2xlLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERJU1BMQVkgTUVUSE9EU1xyXG4gIGRyYXcoZ2FtZTogR2FtZSk6IHZvaWQge1xyXG4gICAgZ2FtZS5kcmF3KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gT3ZlcnJpZGUgdG9TdHJpbmcoKSBtZXRob2RcclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBDZWxsIEAgJHt0aGlzLmNvb3JkLnRvU3RyaW5nKCl9IGlzICR7XHJcbiAgICAgIHRoaXMuZnJvemVuID8gXCJmcm96ZW5cIiA6IFwidW5mcm96ZW5cIlxyXG4gICAgfSAke3RoaXMuZWxlbWVudC50b1N0cmluZygpfSByb3RhdGVkICR7dGhpcy5yb3RhdGlvbn3CsGA7XHJcbiAgfVxyXG5cclxuICAvLyBFeHBvcnQgdG8gSlNPTiBmb3JtYXRcclxuICBleHBvcnRDZWxsSlNPTigpOiBDZWxsSW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHk6IHRoaXMuY29vcmQueSxcclxuICAgICAgeDogdGhpcy5jb29yZC54LFxyXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQubmFtZSxcclxuICAgICAgcm90YXRpb246IHRoaXMucm90YXRpb24sXHJcbiAgICAgIGZyb3plbjogdGhpcy5mcm96ZW5cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBJbXBvcnQgZnJvbSBKU09OXHJcbiAgc3RhdGljIGltcG9ydEpTT04oanNvbjogQ2VsbEludGVyZmFjZSk6IENlbGwge1xyXG4gICAgY29uc3QgY29vcmQgPSBuZXcgQ29vcmQoanNvbi55LCBqc29uLngpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUoanNvbi5lbGVtZW50KTtcclxuICAgIHJldHVybiBuZXcgQ2VsbChjb29yZCwgZWxlbWVudCwganNvbi5yb3RhdGlvbiwganNvbi5mcm96ZW4pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDT09SRElOQVRFUyBDTEFTU1xyXG4vLyBMb3cgbGV2ZWwgY29vcmRpbmF0ZSBmdW5jdGlvbnNcclxuLy8gQ29vcmQgaXMgYSBbeCwgeSwgej9dIGNvbnZlbmllbnQgd2F5IHRvIGRlYWwgd2l0aCBjb29yZGluYXRlcy5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRJbnRlcmZhY2Uge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih5OiBudW1iZXIsIHg6IG51bWJlcikge1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJzaW9uOiBjb29yZCAtPiB1aWRcclxuICBpZChyb3dzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMueSAqIHJvd3MgKyB0aGlzLng7XHJcbiAgfVxyXG5cclxuICAvLyBTVkcgY29vcmRpbmF0ZSBzeXN0ZW06IHRvcC1sZWZ0IHBvaW50IG9mIGNlbGxcclxuICBwb3Moc3BhY2luZzogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCB5ID0gdGhpcy55ICogc3BhY2luZztcclxuICAgIGNvbnN0IHggPSB0aGlzLnggKiBzcGFjaW5nO1xyXG4gICAgcmV0dXJuIFt5LCB4XTtcclxuICB9XHJcblxyXG4gIC8vIERpc3RhbmNlIHRvIGV4aXRpbmcgZ3JpZFxyXG4gIC8vIEFycmF5IG9mZnNldCBjb3JyZWN0ZWRcclxuICBkaXN0YW5jZVRvRXhpdChkaXJlY3Rpb24gPSAwLCByb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbiAlIDM2MCkge1xyXG4gICAgICBjYXNlIDA6IC8vIFRPUFxyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgIGNhc2UgOTA6IC8vIFJJR0hUXHJcbiAgICAgICAgcmV0dXJuIGNvbHMgLSB0aGlzLnggLSAxO1xyXG4gICAgICBjYXNlIDE4MDogLy8gQk9UVE9NXHJcbiAgICAgICAgcmV0dXJuIHJvd3MgLSB0aGlzLnkgLSAxO1xyXG4gICAgICBjYXNlIDI3MDogLy8gTEVGVFxyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBkaXJlY3Rpb25zLi4uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRqYWNlbnQgY2VsbHNcclxuICBnZXQgdG9wKCk6IENvb3JkIHtcclxuICAgIHJldHVybiBuZXcgQ29vcmQodGhpcy55LCB0aGlzLnggLSAxKTtcclxuICB9XHJcbiAgZ2V0IGJvdHRvbSgpOiBDb29yZCB7XHJcbiAgICByZXR1cm4gbmV3IENvb3JkKHRoaXMueSwgdGhpcy54ICsgMSk7XHJcbiAgfVxyXG4gIGdldCBsZWZ0KCk6IENvb3JkIHtcclxuICAgIHJldHVybiBuZXcgQ29vcmQodGhpcy55IC0gMSwgdGhpcy54KTtcclxuICB9XHJcbiAgZ2V0IHJpZ2h0KCk6IENvb3JkIHtcclxuICAgIHJldHVybiBuZXcgQ29vcmQodGhpcy55ICsgMSwgdGhpcy54KTtcclxuICB9XHJcbiAgZ2V0IGFkamFjZW50KCk6IENvb3JkW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLnRvcCwgdGhpcy5yaWdodCwgdGhpcy5ib3R0b20sIHRoaXMubGVmdF07XHJcbiAgfVxyXG4gIGdldCBhcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMueSwgdGhpcy54XTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHR3byBjb29yZGluYXRlcyBhcmUgYWRqYWNlbnRcclxuICBpc0FkamFjZW50KGNvb3JkOiBDb29yZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNvb3JkLmlzSW5jbHVkZWRJbih0aGlzLmFkamFjZW50KTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGZvciBlcXVhbGl0eVxyXG4gIGVxdWFsKGNvb3JkOiBDb29yZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMueCA9PT0gY29vcmQueCAmJiB0aGlzLnkgPT09IGNvb3JkLnk7XHJcbiAgfVxyXG5cclxuICAvLyBUZXN0IGluY2x1c2lvbiBpbiBhcnJheSBvZiBjb29yZHNcclxuICBpc0luY2x1ZGVkSW4oY29vcmRzOiBDb29yZFtdKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBjb29yZHMuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbChjb29yZCk7XHJcbiAgICAgIH0pLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBvdmVycmlkZSBvZiB0b1N0cmluZyBtZXRob2QgZm9yIGRlYnVnZ2luZ1xyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFtZOiR7dGhpcy55fSwgWDoke3RoaXMueH1dYDtcclxuICB9XHJcblxyXG4gIC8vIEV4cG9ydCBKU09OXHJcbiAgZXhwb3J0SlNPTigpOiBDb29yZEludGVyZmFjZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHg6IHRoaXMueFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEV4cG9ydCBKU09OXHJcbiAgc3RhdGljIGltcG9ydEpTT04oanNvbjogQ29vcmRJbnRlcmZhY2UpOiBDb29yZCB7XHJcbiAgICByZXR1cm4gbmV3IENvb3JkKGpzb24ueSwganNvbi54KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnNpb246IHVpZCAtPiBjb29yZFxyXG4gIHN0YXRpYyBmcm9tSWQoaW5kZXg6IG51bWJlciwgY29sczogbnVtYmVyKTogQ29vcmQge1xyXG4gICAgY29uc3QgeCA9IGluZGV4ICUgY29scztcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gY29scyk7XHJcbiAgICByZXR1cm4gbmV3IENvb3JkKHgsIHkpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXHJcbi8vIEVMRU1FTlQgQ0xBU1NcclxuLy8gQmFzaWMgY2xhc3MgcmVsYXRlZCB0byBnYW1lIGVsZW1lbnRzXHJcbi8vIEZJWE1FOiBUaGlzIGNsYXNzIG5lZWRzIHJld3JpdGUgd2l0aCBnbHlwaHMgYW5kIGZ1bmNcclxuXHJcbmltcG9ydCB7IGpzb25FbGVtZW50cyB9IGZyb20gXCIuLi9lbGVtZW50cy9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBHbHlwaCB9IGZyb20gXCIuL0dseXBoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGdyb3VwOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG4gIGFic29ycHRpb246IG51bWJlcjtcclxuICBwaGFzZTogbnVtYmVyO1xyXG4gIG1hdHJpeDogbnVtYmVyW11bXTtcclxuICBmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBhc2NpaTogc3RyaW5nW107XHJcbiAgdGlsZXM6IG51bWJlcltdW107XHJcbiAgZ2x5cGg6IEdseXBoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBncm91cDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBhYnNvcnB0aW9uOiBudW1iZXI7XHJcbiAgcGhhc2U6IG51bWJlcjtcclxuICBtYXRyaXg6IG51bWJlcltdW107XHJcbiAgZm9yZWdyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgYXNjaWk6IHN0cmluZ1tdO1xyXG4gIHRpbGVzOiBudW1iZXJbXVtdO1xyXG4gIGdseXBoOiBHbHlwaDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZ3JvdXAgPSBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gICAgbGluayA9IFwiXCIsXHJcbiAgICBhY3RpdmUgPSBmYWxzZSxcclxuICAgIGFic29ycHRpb24gPSAwLFxyXG4gICAgcGhhc2UgPSAwLFxyXG4gICAgbWF0cml4OiBudW1iZXJbXVtdID0gW1swLCAwXSwgWzAsIDBdXSxcclxuICAgIGZvcmVncm91bmRDb2xvciA9IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIixcclxuICAgIGFzY2lpOiBzdHJpbmdbXSA9IFtcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCJdLFxyXG4gICAgdGlsZXM6IG51bWJlcltdW10gPSBbXHJcbiAgICAgIFswLCAwXSxcclxuICAgICAgWzAsIDBdLFxyXG4gICAgICBbMCwgMF0sXHJcbiAgICAgIFswLCAwXSxcclxuICAgICAgWzAsIDBdLFxyXG4gICAgICBbMCwgMF0sXHJcbiAgICAgIFswLCAwXSxcclxuICAgICAgWzAsIDBdXHJcbiAgICBdLFxyXG4gICAgZ2x5cGg6IEdseXBoID0gbmV3IEdseXBoKFwiIFwiLCBbMCwgMF0pXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5saW5rID0gbGluaztcclxuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgdGhpcy5hYnNvcnB0aW9uID0gYWJzb3JwdGlvbjtcclxuICAgIHRoaXMucGhhc2UgPSBwaGFzZTtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgdGhpcy5mb3JlZ3JvdW5kQ29sb3IgPSBmb3JlZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuYXNjaWkgPSBhc2NpaTtcclxuICAgIHRoaXMudGlsZXMgPSB0aWxlcztcclxuICAgIHRoaXMuZ2x5cGggPSBnbHlwaDtcclxuICB9XHJcblxyXG4gIC8vIENvbXB1dGUgdGhlIHJvdGF0aW9uIGFuZ2xlIGZyb20gdGhlIG51bWJlciBvZiBzcHJpdGVzXHJcbiAgZ2V0IHJvdGF0aW9uQW5nbGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAzNjAgLyB0aGlzLmFzY2lpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vIE92ZXJyaWRlIG9mIHRvU3RyaW5nKCkgbWV0aG9kXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IChQaGFzZTogJHt0aGlzLnBoYXNlfSwgQWJzb3JwdGlvbjogJHt0aGlzLmFic29ycHRpb24gKlxyXG4gICAgICAxMDB9JSlgO1xyXG4gIH1cclxuXHJcbiAgLy8gRXhwb3J0IEpTT05cclxuICBleHBvcnRKU09OKCk6IEVsZW1lbnRJbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBsaW5rOiB0aGlzLmxpbmssXHJcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXHJcbiAgICAgIGFic29ycHRpb246IHRoaXMuYWJzb3JwdGlvbixcclxuICAgICAgcGhhc2U6IHRoaXMucGhhc2UsXHJcbiAgICAgIG1hdHJpeDogdGhpcy5tYXRyaXgsXHJcbiAgICAgIGZvcmVncm91bmRDb2xvcjogdGhpcy5mb3JlZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGFzY2lpOiB0aGlzLmFzY2lpLFxyXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcclxuICAgICAgZ2x5cGg6IHRoaXMuZ2x5cGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBVc2UgdGhlIGVsZW1lbnQgaWQgdG8gZ2V0IHRoZWlyIHJvdyBpbiB0aGUgdGlsZW1hcCBmaWxlIG11bHRpcGxpZWQgYnUgdGhlIHRpbGUgc2l6ZVxyXG4gIC8vIHN0YXRpYyBwcm9jZXNzVGlsZU1hcCh0aWxlc2l6ZSA9IDY0KTogeyBbeDogbnVtYmVyOyB5OiBudW1iZXJdOiBzdHJpbmcgfSB7XHJcbiAgc3RhdGljIHByb2Nlc3NUaWxlTWFwKHRpbGVzaXplID0gNjQpOiB7IFtzeW1ib2w6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSB7XHJcbiAgICBjb25zdCB0aWxlTWFwOiB7IFtzeW1ib2w6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSA9IHt9O1xyXG4gICAganNvbkVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgIGVsZW0udGlsZXMuZm9yRWFjaCgoX3RpbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeSA9IGVsZW0uaWQgKiB0aWxlc2l6ZTtcclxuICAgICAgICBjb25zdCB4ID0gaW5kZXggKiB0aWxlc2l6ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGBQcm9jZXNzaW5nICR7ZWxlbS5uYW1lfTogUG9zaXRpb246ICR7ZWxlbS5hc2NpaVtpbmRleF19IC0gW1g6JHt4fSwgWToke3l9XWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRpbGVNYXBbZWxlbS5hc2NpaVtpbmRleF1dID0gW3gsIHldO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRpbGVNYXA7XHJcbiAgfVxyXG5cclxuICAvLyBTdGF0aWMgSlNPTiBsb2FkXHJcbiAgLy8gRklYTUU6IEl0J3MgZ29kZGFtbiB1Z2x5XHJcbiAgc3RhdGljIGZyb21OYW1lKG5hbWU6IHN0cmluZywgdmVyc2lvbiA9IDIpOiBFbGVtZW50IHtcclxuICAgIGlmICh2ZXJzaW9uID09PSAyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBqc29uRWxlbWVudHMuZmluZChcclxuICAgICAgICAoZWxlbTogeyBuYW1lOiBzdHJpbmc7IHRpbGVzOiBudW1iZXJbXVtdIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiBlbGVtLm5hbWUgPT09IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gbmV3IEVsZW1lbnQoXHJcbiAgICAgICAgZWxlbSEuaWQsXHJcbiAgICAgICAgZWxlbSEubmFtZSxcclxuICAgICAgICBlbGVtIS5ncm91cCxcclxuICAgICAgICBlbGVtIS5kZXNjcmlwdGlvbixcclxuICAgICAgICBlbGVtIS5saW5rLFxyXG4gICAgICAgIGVsZW0hLmFjdGl2ZSxcclxuICAgICAgICBlbGVtIS5hYnNvcnB0aW9uLFxyXG4gICAgICAgIGVsZW0hLnBoYXNlLFxyXG4gICAgICAgIGVsZW0hLm1hdHJpeCxcclxuICAgICAgICBlbGVtIS5mb3JlZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgZWxlbSEuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGVsZW0hLmFzY2lpLFxyXG4gICAgICAgIGVsZW0hLnRpbGVzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtID0ganNvbkVsZW1lbnRzLmZpbmQoXHJcbiAgICAgICAgKGVsZW06IHsgbmFtZXYxOiBzdHJpbmc7IHRpbGVzOiBudW1iZXJbXVtdIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiBlbGVtLm5hbWV2MSA9PT0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBuZXcgRWxlbWVudChcclxuICAgICAgICBlbGVtIS5pZCxcclxuICAgICAgICBlbGVtIS5uYW1lLFxyXG4gICAgICAgIGVsZW0hLmdyb3VwLFxyXG4gICAgICAgIGVsZW0hLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGVsZW0hLmxpbmssXHJcbiAgICAgICAgZWxlbSEuYWN0aXZlLFxyXG4gICAgICAgIGVsZW0hLmFic29ycHRpb24sXHJcbiAgICAgICAgZWxlbSEucGhhc2UsXHJcbiAgICAgICAgZWxlbSEubWF0cml4LFxyXG4gICAgICAgIGVsZW0hLmZvcmVncm91bmRDb2xvcixcclxuICAgICAgICBlbGVtIS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgZWxlbSEuYXNjaWksXHJcbiAgICAgICAgZWxlbSEudGlsZXNcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVElNRSBGUkFNRSBDTEFTU1xyXG4vLyBBbGxvdyB0aW1lLXRyYXZlbCBkZWJ1Z2dpbmcgd2l0aCBzdGVwIGJ5IHN0ZXAgaW5jL2RlYyBvZiB0aW1lXHJcbi8vIEdlbmVyYXRlIGEgbmV3IGZyYW1lIGZvciBldmVyeSBtb3ZlIG9mIHRoZSBwYXJ0aWNsZVxyXG4vLyBQb2ludGVycyBhcmUgW2Nvb3JkLCBkaXJlY3Rpb25dXHJcblxyXG4vLyBFeGl0IGNvbmRpdGlvbnNcclxuLy8gLSBBbGwgZ29hbHMgZG9uZVxyXG4vLyAtIE5vdCBlbm91Z2ggaW50ZW5zaXR5XHJcbi8vIC0gTm8gbW9yZSBwYXJ0aWNsZXNcclxuXHJcbi8vIFRPRE86IENoZWNrIHRoYXQgdGhlIHJlcXVpcmVkIGNvbmRpdGlvbnMgYXJlIG1ldCBmb3Igc3RhcnRpbmcgdGhlIHNpbSAoYmVnaW4gLSBlbmQpXHJcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9DZWxsXCI7XHJcbmltcG9ydCB7IEdvYWwgfSBmcm9tIFwiLi9Hb2FsXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IExldmVsIGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tIFwiLi9Qb2ludGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSB7XHJcbiAgbGV2ZWw6IExldmVsO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBwb2ludGVyczogUG9pbnRlcltdO1xyXG4gIGVuZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobGV2ZWw6IExldmVsLCBzdGVwID0gMCwgcG9pbnRlcnM6IFBvaW50ZXJbXSA9IFtdLCBlbmQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zdGVwID0gc3RlcDtcclxuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgIHRoaXMucG9pbnRlcnMgPSBwb2ludGVycztcclxuICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgLy8gSW5pdGlhdGUgc2ltdWxhdGlvbiB3aXRoIGZyYW1lICMwIGFuZCBleHRyYWN0IGVtaXR0ZXJzXHJcbiAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxhc2Vycy5mb3JFYWNoKGxhc2VyID0+IHtcclxuICAgICAgICB0aGlzLnBvaW50ZXJzLnB1c2gobGFzZXIuZmlyZSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZW5pZW50IGdldHRlcnNcclxuICBnZXQgZ3JpZCgpOiBHcmlkIHtcclxuICAgIHJldHVybiB0aGlzLmxldmVsLmdyaWQ7XHJcbiAgfVxyXG4gIGdldCBjZWxscygpOiBDZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWwuZ3JpZC5jZWxscztcclxuICB9XHJcbiAgZ2V0IGxhc2VycygpOiBDZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWwuZ3JpZC5sYXNlcnM7XHJcbiAgfVxyXG4gIGdldCBnb2FscygpOiBHb2FsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWwuZ29hbHM7XHJcbiAgfVxyXG4gIGdldCBjb21wbGV0ZWRHb2FscygpOiBHb2FsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWwuZ29hbHMuZmlsdGVyKGdvYWwgPT4ge1xyXG4gICAgICByZXR1cm4gZ29hbC5jb21wbGV0ZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0IHZpY3RvcnkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWRHb2Fscy5sZW5ndGggPT09IHRoaXMuZ29hbHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29tcHV0ZSB0aGUgbmV4dCBmcmFtZSBieSBjb21wdXRpbmcgdGhlIG5leHQgcG9zaXRpb25zIG9mIGRpZmZlcmVudCBwb2ludGVyc1xyXG4gIG5leHQoKTogRnJhbWUge1xyXG4gICAgLy8gQWJzb3JiZXJzXHJcbiAgICBjb25zdCBkZXRlY3RvcnMgPSB0aGlzLmdyaWQuZGV0ZWN0b3JzO1xyXG4gICAgY29uc3Qgcm9ja3MgPSB0aGlzLmdyaWQucm9ja3M7XHJcbiAgICBjb25zdCBtaW5lcyA9IHRoaXMuZ3JpZC5taW5lcztcclxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmdyaWQuYWJzb3JiZXJzO1xyXG4gICAgY29uc3QgYWJzb3JiZXJzOiBDZWxsW10gPSBkZXRlY3RvcnMuY29uY2F0KHJvY2tzLCBtaW5lcywgZmlsdGVycyk7XHJcbiAgICAvLyBSZWZsZWN0b3JzXHJcbiAgICBjb25zdCBtaXJyb3JzID0gdGhpcy5ncmlkLm1pcnJvcnM7XHJcbiAgICBjb25zdCBiZWFtc3BsaXR0ZXJzID0gdGhpcy5ncmlkLmJlYW1zcGxpdHRlcnM7XHJcbiAgICAvLyBQaGFzZSBzaGlmdGVyc1xyXG4gICAgY29uc3QgcGhhc2VpbmNzID0gdGhpcy5ncmlkLnBoYXNlaW5jcztcclxuICAgIGNvbnN0IHBoYXNlZGVjcyA9IHRoaXMuZ3JpZC5waGFzZWRlY3M7XHJcbiAgICBjb25zdCBwaGFzZXNoaWZ0ZXJzOiBDZWxsW10gPSBwaGFzZWluY3MuY29uY2F0KHBoYXNlZGVjcyk7XHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHBvaW50ZXJzXHJcbiAgICB0aGlzLnBvaW50ZXJzLmZvckVhY2gocG9pbnRlciA9PiB7XHJcbiAgICAgIHBvaW50ZXIubmV4dCgpO1xyXG4gICAgICBpZiAoIXRoaXMuZ3JpZC5pbmNsdWRlcyhwb2ludGVyLmNvb3JkKSkge1xyXG4gICAgICAgIHBvaW50ZXIuaW50ZW5zaXR5ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWJzb3JwdGlvblxyXG4gICAgICBhYnNvcmJlcnMuZm9yRWFjaCgoYWJzb3JiZXI6IENlbGwpID0+IHtcclxuICAgICAgICBpZiAocG9pbnRlci5vbihhYnNvcmJlcikpIHtcclxuICAgICAgICAgIHBvaW50ZXIuaW50ZW5zaXR5ICo9IGFic29yYmVyLmVsZW1lbnQuYWJzb3JwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gUmVmbGVjdGlvblxyXG4gICAgICBtaXJyb3JzLmZvckVhY2goKG1pcnJvcjogQ2VsbCkgPT4ge1xyXG4gICAgICAgIGlmIChwb2ludGVyLm9uKG1pcnJvcikpIHtcclxuICAgICAgICAgIHBvaW50ZXIuZGlyZWN0aW9uID1cclxuICAgICAgICAgICAgKDIgKiBtaXJyb3Iucm90YXRpb24gLSBwb2ludGVyLmRpcmVjdGlvbiArIDM2MCkgJSAzNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgYmVhbXNwbGl0dGVycy5mb3JFYWNoKChiZWFtc3BsaXR0ZXI6IENlbGwpID0+IHtcclxuICAgICAgICBpZiAocG9pbnRlci5vbihiZWFtc3BsaXR0ZXIpKSB7XHJcbiAgICAgICAgICAvLyBEaW0gdGhlIGN1cnJlbnQgcG9pbnRlciBpbnRlbnNpdHlcclxuICAgICAgICAgIHBvaW50ZXIuaW50ZW5zaXR5IC89IDI7XHJcbiAgICAgICAgICAvLyBSZWZsZWN0aW5nIHBvaW50ZXIgKGNyZWF0ZSBuZXcgcmVmbGVjdGVkIGZhZGVkIHBvaW50ZXIpXHJcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICAoMiAqIGJlYW1zcGxpdHRlci5yb3RhdGlvbiAtIHBvaW50ZXIuZGlyZWN0aW9uICsgMzYwKSAlIDM2MDtcclxuICAgICAgICAgIHRoaXMucG9pbnRlcnMucHVzaChcclxuICAgICAgICAgICAgbmV3IFBvaW50ZXIocG9pbnRlci5jb29yZCwgZGlyZWN0aW9uLCBwb2ludGVyLmludGVuc2l0eSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFBoYXNlIHNoaWZ0ZXJzXHJcbiAgICAgIHBoYXNlc2hpZnRlcnMuZm9yRWFjaCgocGhhc2VzaGlmdGVyOiBDZWxsKSA9PiB7XHJcbiAgICAgICAgaWYgKHBvaW50ZXIub24ocGhhc2VzaGlmdGVyKSkge1xyXG4gICAgICAgICAgcG9pbnRlci5waGFzZSA9IChwb2ludGVyLnBoYXNlICsgcGhhc2VzaGlmdGVyLmVsZW1lbnQucGhhc2UpICUgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ29sbGlzaW9uIGdvYWxzXHJcbiAgICAgIC8vIEZJWE1FOiBNYWtlIGEgc2hvcnRoYW5kIGZvciBnb2Fsc1xyXG4gICAgICB0aGlzLmdvYWxzLmZvckVhY2goZ29hbCA9PiB7XHJcbiAgICAgICAgaWYgKGdvYWwuY29vcmQuZXF1YWwocG9pbnRlci5jb29yZCkpIHtcclxuICAgICAgICAgIGdvYWwudmFsdWUgKz0gcG9pbnRlci5pbnRlbnNpdHkgKiAxMDA7XHJcbiAgICAgICAgICBwb2ludGVyLmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEVyYXNlIG51bGwgaW50ZW5zaXR5IHBvaW50ZXJzXHJcbiAgICB0aGlzLnBvaW50ZXJzID0gdGhpcy5wb2ludGVycy5maWx0ZXIocG9pbnRlciA9PiB7XHJcbiAgICAgIHJldHVybiBwb2ludGVyLmludGVuc2l0eSA+IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWaWN0b3J5IGNvbmRpdGlvbnNcclxuICAgIGlmICh0aGlzLnZpY3RvcnkpIHtcclxuICAgICAgdGhpcy5sZXZlbC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVuZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBEZWZlYXQgY29uZGl0aW9uc1xyXG4gICAgaWYgKHRoaXMucG9pbnRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGV2ZWwuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEZyYW1lKHRoaXMubGV2ZWwsIHRoaXMuc3RlcCArIDEsIHRoaXMucG9pbnRlcnMsIHRoaXMuZW5kKTtcclxuICB9XHJcblxyXG4gIC8vIE92ZXJyaWRlbiBtZXRob2RcclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9IGBcXG4tLS0gJHt0aGlzLnZpY3RvcnkgPyBcIlZJQ1RPUllcIiA6IFwiSU4gUFJPR1JFU1NcIn0gLS0tIFN0ZXAgIyR7XHJcbiAgICAgIHRoaXMuc3RlcFxyXG4gICAgfSB3aXRoICR7dGhpcy5wb2ludGVycy5sZW5ndGh9IGFjdGl2ZSBwb2ludGVycy5cXG5gO1xyXG4gICAgcmVzdWx0ICs9IFwiXFxuXCI7XHJcbiAgICByZXN1bHQgKz0gUG9pbnRlci5tYW55VG9TdHJpbmcodGhpcy5wb2ludGVycyk7XHJcbiAgICByZXN1bHQgKz0gXCJcXG5cIjtcclxuICAgIHJlc3VsdCArPSBHb2FsLm1hbnlUb1N0cmluZyh0aGlzLmxldmVsLmdvYWxzKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpc3BsYXksIFNjaGVkdWxlciwgS0VZUyB9IGZyb20gXCJyb3QtanMvbGliL2luZGV4XCI7XHJcbmltcG9ydCBTaW1wbGUgZnJvbSBcInJvdC1qcy9saWIvc2NoZWR1bGVyL3NpbXBsZVwiO1xyXG5cclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vR3JpZFwiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vTGV2ZWxcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IFN0YXR1c0xpbmUgZnJvbSBcIi4vU3RhdHVzTGluZVwiO1xyXG5pbXBvcnQgSW5wdXRVdGlsaXR5IGZyb20gXCIuL0lucHV0VXRpbGl0eVwiO1xyXG5pbXBvcnQgTWVzc2FnZUxvZyBmcm9tIFwiLi9NZXNzYWdlTG9nXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9GcmFtZVwiO1xyXG5pbXBvcnQgeyBBY3RvciwgQWN0b3JUeXBlIH0gZnJvbSBcIi4vQWN0b3JcIjtcclxuaW1wb3J0IHsgUGF0aFBvaW50ZXIgfSBmcm9tIFwiLi9Qb2ludGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICBwcml2YXRlIGRpc3BsYXk6IERpc3BsYXk7XHJcbiAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNpbXBsZTtcclxuICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gIHByaXZhdGUgc3RhdHVzTGluZTogU3RhdHVzTGluZTtcclxuICBwcml2YXRlIG1lc3NhZ2VMb2c6IE1lc3NhZ2VMb2c7XHJcbiAgcHJpdmF0ZSBnYW1lU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xyXG4gIHByaXZhdGUgbWFwU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xyXG4gIHByaXZhdGUgc3RhdHVzTGluZVBvc2l0aW9uOiBDb29yZDtcclxuICBwcml2YXRlIGFjdGlvbkxvZ1Bvc2l0aW9uOiBDb29yZDtcclxuICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gIHByaXZhdGUgdGlsZXNpemUgPSA2NDtcclxuICBwdWJsaWMgbGV2ZWw6IExldmVsO1xyXG4gIHB1YmxpYyBncmlkOiBHcmlkO1xyXG4gIHB1YmxpYyBmcmFtZXM6IEZyYW1lW107XHJcbiAgcHVibGljIGxhc2VyczogUGF0aFBvaW50ZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobGV2ZWw6IExldmVsKSB7XHJcbiAgICB0aGlzLm1hcFNpemUgPSB7IHdpZHRoOiBsZXZlbC5ncmlkLmNvbHMsIGhlaWdodDogbGV2ZWwuZ3JpZC5yb3dzIH07XHJcbiAgICB0aGlzLmdhbWVTaXplID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5tYXBTaXplLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMubWFwU2l6ZS5oZWlnaHRcclxuICAgIH07XHJcbiAgICB0aGlzLnN0YXR1c0xpbmVQb3NpdGlvbiA9IG5ldyBDb29yZCh0aGlzLmdhbWVTaXplLmhlaWdodCAtIDQsIDApO1xyXG4gICAgdGhpcy5hY3Rpb25Mb2dQb3NpdGlvbiA9IG5ldyBDb29yZCh0aGlzLmdhbWVTaXplLmhlaWdodCAtIDMsIDApO1xyXG4gICAgdGhpcy5mcmFtZXMgPSBbXTtcclxuXHJcbiAgICBjb25zdCB0aWxlU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHRpbGVTZXQuc3JjID0gYC4vdGlsZXMvdGlsZW1hcF8ke3RoaXMudGlsZXNpemV9LnBuZ2A7XHJcbiAgICBjb25zdCB0aWxlcyA9IEVsZW1lbnQucHJvY2Vzc1RpbGVNYXAodGhpcy50aWxlc2l6ZSk7XHJcbiAgICB0aWxlc1tcIkBcIl0gPSBbMCwgMjkgKiB0aGlzLnRpbGVzaXplXTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRpbGVzKSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gbmV3IERpc3BsYXkoe1xyXG4gICAgICBsYXlvdXQ6IFwidGlsZS1nbFwiLFxyXG4gICAgICBiZzogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICB3aWR0aDogdGhpcy5nYW1lU2l6ZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmdhbWVTaXplLmhlaWdodCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZXNpemUsXHJcbiAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZXNpemUsXHJcbiAgICAgIHRpbGVTZXQsXHJcbiAgICAgIHRpbGVNYXA6IHRpbGVzXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXkuZ2V0Q29udGFpbmVyKCkhKTtcclxuXHJcbiAgICAvLyBHYW1lIG1lY2hhbmljc1xyXG4gICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XHJcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmxldmVsLmdyaWQ7XHJcbiAgICB0aGlzLmZyYW1lcy5wdXNoKG5ldyBGcmFtZShsZXZlbCkpO1xyXG4gICAgdGhpcy5zdGF0dXNMaW5lID0gbmV3IFN0YXR1c0xpbmUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMuc3RhdHVzTGluZVBvc2l0aW9uLFxyXG4gICAgICB0aGlzLmdhbWVTaXplLndpZHRoLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICAgIHRoaXMubWVzc2FnZUxvZyA9IG5ldyBNZXNzYWdlTG9nKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLmFjdGlvbkxvZ1Bvc2l0aW9uLFxyXG4gICAgICB0aGlzLmdhbWVTaXplLndpZHRoLFxyXG4gICAgICAzXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWUoKTtcclxuICAgIHRoaXMuZ3JpZC5kcmF3KHRoaXMpO1xyXG4gICAgdGhpcy5tYWluTG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0dGVycyBhbmQgc2V0dGVyc1xyXG4gIGdldCBwbGF5ZXJDZWxsKCk6IENlbGwge1xyXG4gICAgcmV0dXJuIHRoaXMucGxheWVyLmNlbGw7XHJcbiAgfVxyXG4gIGdldCBwbGF5ZXJDb29yZCgpOiBDb29yZCB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY29vcmQ7XHJcbiAgfVxyXG5cclxuICBkcmF3KFxyXG4gICAgY2VsbDogQ2VsbCxcclxuICAgIGZvcmVncm91bmRDb2xvciA9IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRDb2xvciA9IFwiIzJlMDA2YVwiXHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGFyTGlzdDogc3RyaW5nW10gPSBbY2VsbC5hc2NpaV07XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuY29vcmQuZXF1YWwoY2VsbC5jb29yZCkpIHtcclxuICAgICAgY2hhckxpc3QucHVzaChcIkBcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BsYXkuZHJhdyhcclxuICAgICAgY2VsbC5jb29yZC55LFxyXG4gICAgICBjZWxsLmNvb3JkLngsXHJcbiAgICAgIGNoYXJMaXN0LFxyXG4gICAgICBmb3JlZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIExvZyBzdGF0ZSB0byBjb25zb2xlXHJcbiAgZHJhd1RleHQoY29vcmQ6IENvb3JkLCB0ZXh0OiBzdHJpbmcsIG1heFdpZHRoPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhjb29yZC55LCBjb29yZC54LCB0ZXh0LCBtYXhXaWR0aCk7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0IGdhbWVcclxuICBwcml2YXRlIGluaXRpYWxpemVHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5LmNsZWFyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2VMb2cuY2xlYXIoKTtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhdGUuaXNHYW1lT3ZlcigpIHx8IHRoaXMuZ2FtZVN0YXRlLmRvUmVzdGFydEdhbWUoKSkge1xyXG4gICAgICB0aGlzLnJlc2V0U3RhdHVzTGluZSgpO1xyXG4gICAgICB0aGlzLndyaXRlSGVscE1lc3NhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzTGluZS5ib3hlcyA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWVTdGF0ZS5yZXNldCgpO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIHRoaXMuZ3JpZC5jZW50ZXIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyLlNpbXBsZSgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZXIuYWRkKHRoaXMucGxheWVyLCB0cnVlKTtcclxuICAgIHRoaXMuZHJhd1BhbmVsKCk7XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gIHByaXZhdGUgYXN5bmMgbWFpbkxvb3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGxldCBhY3RvcjogQWN0b3I7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBhY3RvciA9IHRoaXMuc2NoZWR1bGVyLm5leHQoKTtcclxuICAgICAgaWYgKCFhY3Rvcikge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCBhY3Rvci5hY3QoKTtcclxuICAgICAgaWYgKGFjdG9yLnR5cGUgPT09IEFjdG9yVHlwZS5QbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0xpbmUudHVybnMgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmF3UGFuZWwoKTtcclxuICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlLmlzR2FtZU92ZXIoKSkge1xyXG4gICAgICAgIGF3YWl0IElucHV0VXRpbGl0eS53YWl0Rm9ySW5wdXQodGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVHYW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd1BhbmVsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5LmNsZWFyKCk7XHJcbiAgICB0aGlzLnN0YXR1c0xpbmUuZHJhdygpO1xyXG4gICAgdGhpcy5tZXNzYWdlTG9nLmRyYXcoKTtcclxuICAgIHRoaXMubGFzZXJzID0gdGhpcy5ncmlkLmxhc2VyQ29vcmRzKCk7XHJcbiAgICB0aGlzLmdyaWQuZHJhdyh0aGlzKTtcclxuICAgIC8vIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xyXG4gICAgLy8gICAgIHRoaXMuZHJhdyhlbmVteS5wb3NpdGlvbiwgZW5lbXkuZ2x5cGgpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICByZXR1cm4gY29kZSA9PT0gS0VZUy5WS19TUEFDRSB8fCBjb2RlID09PSBLRVlTLlZLX1JFVFVSTjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRTdGF0dXNMaW5lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0dXNMaW5lLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdyaXRlSGVscE1lc3NhZ2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCBoZWxwTWVzc2FnZSA9IFtcclxuICAgICAgYEkgLSAke3RoaXMubGV2ZWwubmFtZX1gLFxyXG4gICAgICBgTW92ZTogWlFTRCwgQWRkOiAxMjMuLi4sIFJvdGF0ZTogQUVgLFxyXG4gICAgICBgRmlyZSB0aGUgbGF6MHI1OiBTcGFjZSBTdGVwczogUkZgXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSBoZWxwTWVzc2FnZS5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyAtLWluZGV4KSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUxvZy5hcHBlbmRUZXh0KGhlbHBNZXNzYWdlW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBURVJNSU5BTCBTVFlMRVxyXG4vLyB0aGlzLmRpc3BsYXkgPSBuZXcgRGlzcGxheSh7XHJcbi8vICAgICB3aWR0aDogdGhpcy5nYW1lU2l6ZS53aWR0aCxcclxuLy8gICAgIGhlaWdodDogdGhpcy5nYW1lU2l6ZS5oZWlnaHQsXHJcbi8vICAgICB0aWxlQ29sb3JpemU6IHRydWUsXHJcbi8vICAgICBmb250U2l6ZTogMzAsXHJcbi8vICAgICBmb3JjZVNxdWFyZVJhdGlvOnRydWVcclxuLy8gfSlcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIHtcclxuICBhY2hpZXZlZEdvYWxzOiBib29sZWFuO1xyXG4gIG5vUG9pbnRlcnM6IGJvb2xlYW47XHJcbiAgbm90RW5vdWdoSW50ZW5zaXR5OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY2hpZXZlZEdvYWxzID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vUG9pbnRlcnMgPSBmYWxzZTtcclxuICAgIHRoaXMubm90RW5vdWdoSW50ZW5zaXR5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkb1N0YXJ0TmV4dFJvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm5vUG9pbnRlcnM7XHJcbiAgfVxyXG5cclxuICBkb1Jlc3RhcnRHYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubm9Qb2ludGVycyB8fCB0aGlzLm5vdEVub3VnaEludGVuc2l0eTtcclxuICB9XHJcblxyXG4gIGlzR2FtZU92ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY2hpZXZlZEdvYWxzIHx8IHRoaXMubm9Qb2ludGVycyB8fCB0aGlzLm5vdEVub3VnaEludGVuc2l0eTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdseXBoIHtcclxuICBwdWJsaWMgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdGlsZTogW251bWJlciwgbnVtYmVyXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjaGFyYWN0ZXI6IHN0cmluZyxcclxuICAgIHRpbGU6IFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCIsXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcclxuICApIHtcclxuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmZvcmVncm91bmRDb2xvciA9IGZvcmVncm91bmRDb2xvcjtcclxuICAgIHRoaXMudGlsZSA9IHRpbGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEdPQUwgQ0xBU1NcclxuLy8gRWFjaCBkZXRlY3RvciBzaG91bGQgaGF2ZSBhIHJlbGF0ZWQgdGhyZXNob2xkIGxldmVsIGluIG9yZGVyIHRvIGFjaGlldmUgdGhlIGxldmVsLlxyXG4vLyBHb2FsIHNob3VsZCBleHRlbmQgQ2VsbCBvciBzaG91bGQgZXh0ZW5kIENvb3JkXHJcbi8vIEZJWE1FOiBFeHRlbmQgQ29vcmQgaW4gYSBuaWNlIHdheVxyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR29hbEludGVyZmFjZSB7XHJcbiAgY29vcmQ6IENvb3JkO1xyXG4gIHRocmVzaG9sZDogbnVtYmVyO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2FsIHtcclxuICBjb29yZDogQ29vcmQ7XHJcbiAgdGhyZXNob2xkOiBudW1iZXI7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29vcmQ6IENvb3JkLCB0aHJlc2hvbGQ6IG51bWJlciwgdmFsdWUgPSAwKSB7XHJcbiAgICAvLyBzdXBlcihjb29yZC55LCBjb29yZC54KTtcclxuICAgIHRoaXMuY29vcmQgPSBjb29yZDtcclxuICAgIHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID49IHRoaXMudGhyZXNob2xkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBlcmNlbnRhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGhpcy52YWx1ZSAvIHRoaXMudGhyZXNob2xkKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYHsjR29hbCAke1xyXG4gICAgICB0aGlzLmNvbXBsZXRlZCA/IFwiY29tcGxldGVkIFwiIDogXCIgXCJcclxuICAgIH1AICR7dGhpcy5jb29yZC50b1N0cmluZygpfSBpcyAke3RoaXMudmFsdWV9IC8gJHt0aGlzLnRocmVzaG9sZH19ICgke1xyXG4gICAgICB0aGlzLnBlcmNlbnRhZ2VcclxuICAgIH0lKWA7XHJcbiAgfVxyXG5cclxuICAvLyBGb3JtYXQgYWN0aXZlIHBhcnRpY2xlIGxpc3RcclxuICBzdGF0aWMgbWFueVRvU3RyaW5nKGdvYWxzOiBHb2FsW10pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9IGAke2dvYWxzLmxlbmd0aH0gYWN0aXZlIGdvYWxzLi4uXFxuYDtcclxuICAgIGdvYWxzLmZvckVhY2goZ29hbCA9PiB7XHJcbiAgICAgIHJlc3VsdCArPSBgLSAke2dvYWwudG9TdHJpbmcoKX1cXG5gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wb3J0IEpTT05cclxuICBzdGF0aWMgaW1wb3J0SlNPTihqc29uR29hbHM6IEdvYWxJbnRlcmZhY2VbXSk6IEdvYWxbXSB7XHJcbiAgICBjb25zdCBnb2FsczogR29hbFtdID0gW107XHJcbiAgICBqc29uR29hbHMuZm9yRWFjaChnb2FsID0+IHtcclxuICAgICAgY29uc3QgY29vcmQgPSBnb2FsLmNvb3JkO1xyXG4gICAgICBnb2Fscy5wdXNoKG5ldyBHb2FsKGNvb3JkLCBnb2FsLnRocmVzaG9sZCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ29hbHM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEdSSUQgQ0xBU1NcclxuLy8gRklYTUU6IEZpZ3VyZSBhIHdheSB0byBoYXZlIHVpZCBhbmQgY29vcmQgYWNjZXNzIHRvIGNlbGxzXHJcbi8vIEZJWE1FOiBGaWd1cmUgb3V0IGJsYW5rIGNlbGxzIGluIGNvbnN0cnVjdG9yXHJcbmltcG9ydCB7IENlbGwsIENlbGxJbnRlcmZhY2UgfSBmcm9tIFwiLi9DZWxsXCI7XHJcbmltcG9ydCBDbHVzdGVyIGZyb20gXCIuL0NsdXN0ZXJcIjtcclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQb2ludGVyLCBQYXRoUG9pbnRlciB9IGZyb20gXCIuL1BvaW50ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xyXG4gIHB1YmxpYyBjb2xzOiBudW1iZXI7XHJcbiAgcHVibGljIHJvd3M6IG51bWJlcjtcclxuICBwdWJsaWMgbWF0cml4OiBDZWxsW11bXTtcclxuICBwdWJsaWMgY2x1c3RlcnM6IENsdXN0ZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIsIG1hdHJpeD86IENlbGxbXVtdKSB7XHJcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgdGhpcy5jb2xzID0gY29scztcclxuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcclxuXHJcbiAgICAvLyBJZiBtYXRyaXggc3BlY2lmaWVkIGV4dHJhY3QgY2VsbHNcclxuICAgIGlmIChtYXRyaXgpIHtcclxuICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbHNlIGNyZWF0ZSBibGFuayBjZWxsc1xyXG4gICAgICB0aGlzLm1hdHJpeCA9IG5ldyBBcnJheSh0aGlzLnJvd3MpXHJcbiAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sczsgeCsrKSB7XHJcbiAgICAgICAgICB0aGlzLnNldChuZXcgQ2VsbChuZXcgQ29vcmQoeSwgeCksIEVsZW1lbnQuZnJvbU5hbWUoXCJ2b2lkXCIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIEdldCBjZW50ZXIgY29vcmRpbmF0ZXMgb2YgZ3JpZFxyXG4gIGdldCBjZW50ZXIoKTogQ29vcmQge1xyXG4gICAgcmV0dXJuIG5ldyBDb29yZChNYXRoLmZsb29yKHRoaXMuY29scyAvIDIpLCBNYXRoLmZsb29yKHRoaXMucm93cyAvIDIpKTtcclxuICB9XHJcblxyXG4gIC8vIENlbGxzIGdldHRlcnNcclxuICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLm1hdHJpeC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcclxuICB9XHJcbiAgZ2V0IGNvb3JkcygpOiBDb29yZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxzLmZsYXRNYXAoY2VsbCA9PiBjZWxsLmNvb3JkKTtcclxuICB9XHJcbiAgZ2V0IHZvaWQoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJ2b2lkXCIpO1xyXG4gIH1cclxuICBnZXQgdW52b2lkKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEJ5Tm90KFwidm9pZFwiKTtcclxuICB9XHJcbiAgLy8gRW1pdHRlcnNcclxuICBnZXQgbGFzZXJzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwibGFzZXJcIik7XHJcbiAgfVxyXG4gIC8vIFJlZmxlY3RvcnNcclxuICBnZXQgbWlycm9ycygpOiBDZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcIm1pcnJvclwiKTtcclxuICB9XHJcbiAgZ2V0IGJlYW1zcGxpdHRlcnMoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJiZWFtc3BsaXR0ZXJcIik7XHJcbiAgfVxyXG4gIGdldCByZWZsZWN0b3JzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5taXJyb3JzLmNvbmNhdCh0aGlzLmJlYW1zcGxpdHRlcnMpO1xyXG4gIH1cclxuICAvLyBBYnNvcmJlcnNcclxuICBnZXQgbWluZXMoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJtaW5lXCIpO1xyXG4gIH1cclxuICBnZXQgZGV0ZWN0b3JzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwiZGV0ZWN0b3JcIik7XHJcbiAgfVxyXG4gIGdldCByb2NrcygpOiBDZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRCeShcInJvY2tcIik7XHJcbiAgfVxyXG4gIGdldCBmaWx0ZXJzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwiZmlsdGVyXCIpO1xyXG4gIH1cclxuICBnZXQgYWJzb3JiZXJzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5taW5lcy5jb25jYXQodGhpcy5kZXRlY3RvcnMsIHRoaXMucm9ja3MsIHRoaXMuZmlsdGVycyk7XHJcbiAgfVxyXG4gIC8vIFBoYXNlcnNcclxuICBnZXQgcGhhc2VpbmNzKCk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEJ5KFwicGhhc2VpbmNcIik7XHJcbiAgfVxyXG4gIGdldCBwaGFzZWRlY3MoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQnkoXCJwaGFzZWRlY1wiKTtcclxuICB9XHJcbiAgZ2V0IHBoYXNlc2hpZnRlcnMoKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLnBoYXNlZGVjcy5jb25jYXQodGhpcy5waGFzZWluY3MpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2VsZWN0IGNlbGxzIGJ5IHR5cGVcclxuICBwdWJsaWMgZmlsdGVyZWRCeShuYW1lOiBzdHJpbmcpOiBDZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4ge1xyXG4gICAgICByZXR1cm4gY2VsbC5lbGVtZW50Lm5hbWUgPT09IG5hbWU7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gU2VsZWN0IGNlbGxzIGJ5IG5vdCB0eXBlXHJcbiAgcHVibGljIGZpbHRlcmVkQnlOb3QobmFtZTogc3RyaW5nKTogQ2VsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IHtcclxuICAgICAgcmV0dXJuIGNlbGwuZWxlbWVudC5uYW1lICE9PSBuYW1lO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUZXN0IGlmIGNvb3JkIGlzIGluc2lkZSBib3VuZGFyaWVzXHJcbiAgcHVibGljIGluY2x1ZGVzKGNvb3JkOiBDb29yZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgY29vcmQueSA+PSAwICYmXHJcbiAgICAgIGNvb3JkLnkgPCB0aGlzLnJvd3MgJiZcclxuICAgICAgKGNvb3JkLnggPj0gMCAmJiBjb29yZC54IDwgdGhpcy5jb2xzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFNldCBvbmUgY2VsbFxyXG4gIHB1YmxpYyBzZXQoY2VsbDogQ2VsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaW5jbHVkZXMoY2VsbC5jb29yZCkpIHtcclxuICAgICAgdGhpcy5tYXRyaXhbY2VsbC5jb29yZC55XVtjZWxsLmNvb3JkLnhdID0gY2VsbDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgQ29vcmRpbmF0ZSBvdXQgb2YgYm91bmRzLiBDZWxsOiBbJHtjZWxsLmNvb3JkLnh9LCAke2NlbGwuY29vcmQueX1dYClcclxuICAgICAgLy8gY29uc29sZS5lcnJvcihgQ29vcmRpbmF0ZSBvdXQgb2YgYm91bmRzLiAke2NlbGwuY29vcmQudG9TdHJpbmcoKX1gKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgb25lIGNlbGxcclxuICBwdWJsaWMgZ2V0KGNvb3JkOiBDb29yZCk6IENlbGwge1xyXG4gICAgcmV0dXJuIHRoaXMubWF0cml4W2Nvb3JkLnldW2Nvb3JkLnhdO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IG1hbnkgY2VsbHNcclxuICBwdWJsaWMgc2V0TWFueSguLi5jZWxsczogQ2VsbFtdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZXJyb3JUb2dnbGUgPSB0cnVlO1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbDogQ2VsbCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaW5jbHVkZXMoY2VsbC5jb29yZCkpIHtcclxuICAgICAgICBlcnJvclRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0KGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZXJyb3JUb2dnbGU7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgbWFueSBjZWxsc1xyXG4gIHB1YmxpYyBnZXRNYW55KC4uLmNvb3JkczogQ29vcmRbXSk6IENlbGxbXSB7XHJcbiAgICByZXR1cm4gY29vcmRzLm1hcChjb29yZCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldChjb29yZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1vdmUgZnJvbSBhIGNvb3JkIHRvIGFub3RoZXJcclxuICBwdWJsaWMgbW92ZShzcmM6IENvb3JkLCBkc3Q6IENvb3JkKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjZWxsU3JjID0gdGhpcy5nZXQoc3JjKTtcclxuICAgIGNvbnN0IGNlbGxEc3QgPSB0aGlzLmdldChkc3QpO1xyXG4gICAgaWYgKCFjZWxsU3JjLmZyb3plbiAmJiAhY2VsbERzdC5mcm96ZW4pIHtcclxuICAgICAgdGhpcy5zZXQobmV3IENlbGwoc3JjLCBjZWxsRHN0LmVsZW1lbnQsIGNlbGxEc3Qucm90YXRpb24pKTtcclxuICAgICAgdGhpcy5zZXQobmV3IENlbGwoZHN0LCBjZWxsU3JjLmVsZW1lbnQsIGNlbGxTcmMucm90YXRpb24pKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYE1vdmVkICR7Y2VsbFNyYy5lbGVtZW50fSBmcm9tICR7c3JjLnRvU3RyaW5nKCl9IHRvICR7ZHN0LnRvU3RyaW5nKCl9YClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmVycm9yKGBDb3VsZG4ndCBtb3ZlICR7Y2VsbFNyYy5lbGVtZW50fSBiZWNhdXNlIG9mIGZyb3plbiAke2RzdC50b1N0cmluZygpfWApXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERpc3RhbmNlIHRvIGV4aXRpbmcgZ3JpZFxyXG4gIHB1YmxpYyBkaXN0YW5jZVRvRXNjYXBlKHBvaW50ZXI6IFBvaW50ZXIpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoIChwb2ludGVyLmRpcmVjdGlvbiAlIDM2MCkge1xyXG4gICAgICBjYXNlIDA6IC8vIFRPUFxyXG4gICAgICAgIHJldHVybiBwb2ludGVyLnk7XHJcbiAgICAgIGNhc2UgOTA6IC8vIFJJR0hUXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29scyAtIHBvaW50ZXIueCAtIDE7XHJcbiAgICAgIGNhc2UgMTgwOiAvLyBCT1RUT01cclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dzIC0gcG9pbnRlci55IC0gMTtcclxuICAgICAgY2FzZSAyNzA6IC8vIExFRlRcclxuICAgICAgICByZXR1cm4gcG9pbnRlci54O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZGlyZWN0aW9ucy4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEJhc2ljIGRpc3BsYXlcclxuICBwdWJsaWMgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubWF0cml4LnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBEcmF3XHJcbiAgcHVibGljIGRyYXcoZ2FtZTogR2FtZSk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBuZXcgQ29vcmQoeSwgeCk7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0KGNvb3JkKTtcclxuICAgICAgICBpZiAoY29vcmQuaXNJbmNsdWRlZEluKGdhbWUubGFzZXJzLm1hcChwb2ludGVyID0+IHBvaW50ZXIuY29vcmQpKSkge1xyXG4gICAgICAgICAgZ2FtZS5kcmF3KGNlbGwsIFwid2hpdGVcIiwgXCJwdXJwbGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdhbWUuZHJhdyhjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExhc2VyIGxpbmVzXHJcbiAgbGFzZXJDb29yZHMoKTogUGF0aFBvaW50ZXJbXSB7XHJcbiAgICBjb25zdCBsYXNlckNvb3JkczogUGF0aFBvaW50ZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgcG9pbnRlcnMgPSB0aGlzLmxhc2Vycy5tYXAobGFzZXIgPT4gbGFzZXIuZmlyZSgpKTtcclxuICAgIHBvaW50ZXJzLmZvckVhY2gocG9pbnRlciA9PiB7XHJcbiAgICAgIHBvaW50ZXIubGFzZXJQYXRoKHRoaXMsIDMwKS5mb3JFYWNoKChsYXNlclBvaW50OiBQYXRoUG9pbnRlcikgPT4ge1xyXG4gICAgICAgIGxhc2VyQ29vcmRzLnB1c2gobGFzZXJQb2ludCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGFzZXJDb29yZHM7XHJcbiAgfVxyXG5cclxuICAvLyBJbmNsdWRlIHBhcnRpY2xlIGRpc3BsYXkgaW4gYXNjaWkgcmVuZGVyXHJcbiAgcHVibGljIGFzY2lpUmVuZGVyKHBvaW50ZXJzOiBQb2ludGVyW10gPSBbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCIjI1wiLnJlcGVhdCh0aGlzLmNvbHMgKyAxKSArIFwiXFxuXCI7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XHJcbiAgICAgIGxldCBhc2NpaUxpbmUgPSBcIiNcIjtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xyXG4gICAgICAgIC8vIEFkZCBzb21lIHNvcnQgb2YgYXNjaWkgei1pbmRleFxyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gbmV3IENvb3JkKHksIHgpO1xyXG4gICAgICAgIGlmIChjb29yZC5pc0luY2x1ZGVkSW4oUG9pbnRlci5tYW55VG9Db29yZHMocG9pbnRlcnMpKSkge1xyXG4gICAgICAgICAgYXNjaWlMaW5lICs9IFwiKiBcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLmdldChjb29yZCkucm90YXRpb24gLyA0NTtcclxuICAgICAgICAgIGFzY2lpTGluZSArPSB0aGlzLmdldChuZXcgQ29vcmQoeSwgeCkpLmVsZW1lbnQuYXNjaWlbcm90YXRpb25dICsgXCIgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCArPSBhc2NpaUxpbmUgKyBcIiNcXG5cIjtcclxuICAgIH1cclxuICAgIHJlc3VsdCArPSBcIiMjXCIucmVwZWF0KHRoaXMuY29scyArIDEpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IGJhc2ljID0gXCJcIjtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcclxuICAgICAgbGV0IGFzY2lpTGluZSA9IFwiXCI7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzOyB4KyspIHtcclxuICAgICAgICBhc2NpaUxpbmUgKz0gdGhpcy5nZXQobmV3IENvb3JkKHksIHgpKS5lbGVtZW50LmlkO1xyXG4gICAgICB9XHJcbiAgICAgIGJhc2ljICs9IGFzY2lpTGluZSArIFwiXFxuXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzaWM7XHJcbiAgfVxyXG5cclxuICAvLyBpbXBvcnQgY2VsbHNcclxuICBwdWJsaWMgaW1wb3J0SlNPTihjZWxsczogQ2VsbEludGVyZmFjZVtdKTogdm9pZCB7XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjb25zdCBjb29yZCA9IG5ldyBDb29yZChjZWxsLnksIGNlbGwueCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBFbGVtZW50LmZyb21OYW1lKGNlbGwuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuc2V0KG5ldyBDZWxsKGNvb3JkLCBlbGVtZW50LCBjZWxsLnJvdGF0aW9uLCBjZWxsLmZyb3plbikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBleHBvcnQgSlNPTiBmaWxlIHRvIHNhdmUgc3RhdGUgb2kgdGhlIGdhbWVcclxuICBwdWJsaWMgZXhwb3J0SlNPTigpOiBDZWxsSW50ZXJmYWNlW10ge1xyXG4gICAgY29uc3QgY2VsbHM6IENlbGxJbnRlcmZhY2VbXSA9IFtdO1xyXG4gICAgdGhpcy51bnZvaWQuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbHMucHVzaChjZWxsLmV4cG9ydENlbGxKU09OKCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbnZlcnQgYW5nbGVzIHRvIHVuaWNvZGUgc3ltYm9sc1xyXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UZW1wbGF0ZTpVbmljb2RlX2NoYXJ0X0Fycm93c1xyXG5leHBvcnQgZnVuY3Rpb24gYW5nbGVUb1N5bWJvbChhbmdsZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICBhbmdsZSA9IGFuZ2xlICUgMzYwO1xyXG4gIHN3aXRjaCAoYW5nbGUpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIFwi4oaRXCI7XHJcbiAgICBjYXNlIDQ1OlxyXG4gICAgICByZXR1cm4gXCLihpdcIjtcclxuICAgIGNhc2UgOTA6XHJcbiAgICAgIHJldHVybiBcIuKGklwiO1xyXG4gICAgY2FzZSAxMzU6XHJcbiAgICAgIHJldHVybiBcIuKGmFwiO1xyXG4gICAgY2FzZSAxODA6XHJcbiAgICAgIHJldHVybiBcIuKGk1wiO1xyXG4gICAgY2FzZSAyMjU6XHJcbiAgICAgIHJldHVybiBcIuKGmVwiO1xyXG4gICAgY2FzZSAyNzA6XHJcbiAgICAgIHJldHVybiBcIuKGkFwiO1xyXG4gICAgY2FzZSAzMTU6XHJcbiAgICAgIHJldHVybiBcIuKGllwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIGlzIHdyb25nIHdpdGggcHJvdmlkZWQgYW5nbGUuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bWJvbFRvQW5nbGUoZGlyZWN0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlIFwi4oaRXCI6XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgY2FzZSBcIuKGl1wiOlxyXG4gICAgICByZXR1cm4gNDU7XHJcbiAgICBjYXNlIFwi4oaSXCI6XHJcbiAgICAgIHJldHVybiA5MDtcclxuICAgIGNhc2UgXCLihphcIjpcclxuICAgICAgcmV0dXJuIDEzNTtcclxuICAgIGNhc2UgXCLihpNcIjpcclxuICAgICAgcmV0dXJuIDE4MDtcclxuICAgIGNhc2UgXCLihplcIjpcclxuICAgICAgcmV0dXJuIDIyNTtcclxuICAgIGNhc2UgXCLihpBcIjpcclxuICAgICAgcmV0dXJuIDI3MDtcclxuICAgIGNhc2UgXCLihpZcIjpcclxuICAgICAgcmV0dXJuIDMxNTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyBpcyB3cm9uZyB3aXRoIHByb3ZpZGVkIGRpcmVjdGlvbiBzdHJpbmcuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZExlZnQoXHJcbiAgdGV4dDogc3RyaW5nLFxyXG4gIGxlbmd0aDogbnVtYmVyLFxyXG4gIGNoYXJhY3Rlcj86IHN0cmluZ1xyXG4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGNoYXIgPSBjaGFyYWN0ZXIgfHwgXCIgXCI7XHJcbiAgd2hpbGUgKHRleHQubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICB0ZXh0ID0gY2hhciArIHRleHQ7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFkUmlnaHQoXHJcbiAgdGV4dDogc3RyaW5nLFxyXG4gIGxlbmd0aDogbnVtYmVyLFxyXG4gIGNoYXJhY3Rlcj86IHN0cmluZ1xyXG4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGNoYXIgPSBjaGFyYWN0ZXIgfHwgXCIgXCI7XHJcbiAgd2hpbGUgKHRleHQubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICB0ZXh0ICs9IGNoYXI7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRVdGlsaXR5IHtcclxuICBwcml2YXRlIHN0YXRpYyBwcm9jZXNzSW5wdXRDYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBhbnk7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xyXG5cclxuICBzdGF0aWMgd2FpdEZvcklucHV0KFxyXG4gICAgaGFuZGxlSW5wdXQ6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gYm9vbGVhblxyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmIChJbnB1dFV0aWxpdHkucHJvY2Vzc0lucHV0Q2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIElucHV0VXRpbGl0eS5zdG9wUHJvY2Vzc2luZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBJbnB1dFV0aWxpdHkucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGVcclxuICAgICAgSW5wdXRVdGlsaXR5LnByb2Nlc3NJbnB1dENhbGxiYWNrID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PlxyXG4gICAgICAgIElucHV0VXRpbGl0eS5wcm9jZXNzSW5wdXQoZXZlbnQsIGhhbmRsZUlucHV0KTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIElucHV0VXRpbGl0eS5wcm9jZXNzSW5wdXRDYWxsYmFjayk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHByb2Nlc3NJbnB1dChcclxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50LFxyXG4gICAgaGFuZGxlSW5wdXQ6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gYm9vbGVhblxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKGhhbmRsZUlucHV0KGV2ZW50KSkge1xyXG4gICAgICBJbnB1dFV0aWxpdHkuc3RvcFByb2Nlc3NpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHN0b3BQcm9jZXNzaW5nKCk6IHZvaWQge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIElucHV0VXRpbGl0eS5wcm9jZXNzSW5wdXRDYWxsYmFjayk7XHJcbiAgICAvLyBJbnB1dFV0aWxpdHkucHJvY2Vzc0lucHV0Q2FsbGJhY2sgPSB1bmRlZmluZWRcclxuICAgIElucHV0VXRpbGl0eS5wcm9jZXNzSW5wdXRDYWxsYmFjayA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICBJbnB1dFV0aWxpdHkucmVzb2x2ZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBMRVZFTCBDTEFTU1xyXG4vLyBMZXZlbHMgYXJlIGxvYWRlZCBhcyB3b3JraW5nIHNvbHV0aW9ucyB0byB0aGUgcHV6emxlXHJcbi8vIFRoZW4gdGhlIGZyb3plbiBlbGVtZW50cyBhcmUgcmVtb3ZlZCBhbmQgcHV0IGluIHRoZSB0b29sYm94XHJcblxyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9HcmlkXCI7XHJcbmltcG9ydCBIaW50IGZyb20gXCIuL0hpbnRcIjtcclxuaW1wb3J0IHsgR29hbCB9IGZyb20gXCIuL0dvYWxcIjtcclxuaW1wb3J0IEludmVudG9yeSBmcm9tIFwiLi9JbnZlbnRvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBncm91cDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZ3JpZDogR3JpZDtcclxuICBnb2FsczogR29hbFtdO1xyXG4gIGhpbnRzOiBIaW50W107XHJcbiAgdG9vbGJveDogSW52ZW50b3J5O1xyXG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZ3JvdXA6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBncmlkOiBHcmlkID0gbmV3IEdyaWQoOCwgOCksXHJcbiAgICBnb2FsczogR29hbFtdLFxyXG4gICAgaGludHM6IEhpbnRbXSxcclxuICAgIGNvbXBsZXRlZDogYm9vbGVhblxyXG4gICkge1xyXG4gICAgLy8gQmFzaWMgaW5mb3NcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAvLyBCYXNpYyBncmlkIGRlZmluaXRpb25cclxuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XHJcbiAgICB0aGlzLmdvYWxzID0gZ29hbHM7XHJcbiAgICB0aGlzLmhpbnRzID0gaGludHM7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuXHJcbiAgICAvLyBFeHRyYWN0IG5vbiBmcm96ZW4gZWxlbWVudHMgYW5kIHB1dCB0aGVtIGluIHRoZSB0b29sYm94XHJcbiAgICAvLyBjb25zdCB1bmZyb3plbkNlbGxzID0gdGhpcy5ncmlkLmNlbGxzLmZpbHRlcigoY2VsbCkgPT4gIWNlbGwuZnJvemVuKS5tYXAoKGNlbGwpID0+IGNlbGwuZWxlbWVudC5uYW1lKVxyXG4gIH1cclxuXHJcbiAgLy8gT3ZlcnJpZGUgdG9TdHJpbmcgbWV0aG9kIGluIG9yZGVyIHRvIGRpc3BsYXkgYXNjaWkgbGV2ZWxcclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcXFxyXG5MRVZFTDogJHt0aGlzLm5hbWV9IFske3RoaXMuZ3JpZC5jb2xzfXgke3RoaXMuZ3JpZC5yb3dzfV1cXG5cXFxyXG5ERVNDOiAke3RoaXMuZGVzY3JpcHRpb259XFxuXFxcclxuR1JPVVA6ICR7dGhpcy5ncm91cH1cXG5cXFxyXG4ke3RoaXMuZ3JpZC5hc2NpaVJlbmRlcigpfVxcblxcXHJcbkdPQUxTOiAke3RoaXMuZ29hbHMubWFwKGkgPT4gaS50b1N0cmluZygpKX1cXG5cXFxyXG5HT0FMUzogJHt0aGlzLmNvbXBsZXRlZCA/IFwiQ09NUExFVEVcIiA6IFwiSU4gUFJPR1JFU1NcIn1cXG5cXFxyXG5ISU5UUzogJHt0aGlzLmhpbnRzLm1hcChpID0+IGkudG9TdHJpbmcoKSl9XFxuXHJcblRPT0xCT1g6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy50b29sYm94KX1cXG5cclxuYDtcclxuICB9XHJcblxyXG4gIC8vIGV4cG9ydCBKU09OIGZpbGUgdG8gc2F2ZSBzdGF0ZSBvaSB0aGUgZ2FtZVxyXG4gIGV4cG9ydEpTT04oKToge30ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBjb2xzOiB0aGlzLmdyaWQuY29scyxcclxuICAgICAgcm93czogdGhpcy5ncmlkLnJvd3MsXHJcbiAgICAgIGNlbGxzOiB0aGlzLmdyaWQuZXhwb3J0SlNPTigpLFxyXG4gICAgICBoaW50czogdGhpcy5oaW50cy5mbGF0TWFwKGhpbnQgPT4gSlNPTi5zdHJpbmdpZnkoaGludCkpLFxyXG4gICAgICBnb2FsczogdGhpcy5nb2Fscy5mbGF0TWFwKGdvYWwgPT4gSlNPTi5zdHJpbmdpZnkoZ29hbCkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gaW1wb3J0IEpTT04gZmlsZVxyXG4gIHN0YXRpYyBpbXBvcnRKU09OKGpzb246IHtcclxuICAgIGNvbHM6IG51bWJlcjtcclxuICAgIHJvd3M6IG51bWJlcjtcclxuICAgIGNlbGxzOiB7XHJcbiAgICAgIHk6IG51bWJlcjtcclxuICAgICAgeDogbnVtYmVyO1xyXG4gICAgICBlbGVtZW50OiBzdHJpbmc7XHJcbiAgICAgIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgICAgIGZyb3plbjogYm9vbGVhbjtcclxuICAgIH1bXTtcclxuICAgIGdvYWxzOiB7IHk6IG51bWJlcjsgeDogbnVtYmVyOyB0aHJlc2hvbGQ6IG51bWJlciB9W107XHJcbiAgICBoaW50czogeyB5OiBudW1iZXI7IHg6IG51bWJlcjsgbWVzc2FnZTogc3RyaW5nIH1bXTtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncm91cDogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB9KTogTGV2ZWwge1xyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKGpzb24ucm93cywganNvbi5jb2xzKTtcclxuICAgIGdyaWQuaW1wb3J0SlNPTihqc29uLmNlbGxzKTtcclxuICAgIC8vIGNvbnN0IGdvYWxzID0gR29hbC5pbXBvcnRKU09OKGpzb24uZ29hbHMpO1xyXG4gICAgLy8gY29uc3QgaGludHMgPSBIaW50LmltcG9ydEpTT04oanNvbi5oaW50cyk7XHJcbiAgICBjb25zdCBnb2FsczogR29hbFtdID0gW107XHJcbiAgICBjb25zdCBoaW50czogSGludFtdID0gW107XHJcbiAgICByZXR1cm4gbmV3IExldmVsKFxyXG4gICAgICBqc29uLmlkLFxyXG4gICAgICBqc29uLm5hbWUsXHJcbiAgICAgIGpzb24uZ3JvdXAsXHJcbiAgICAgIGpzb24uZGVzY3JpcHRpb24sXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIGdvYWxzLFxyXG4gICAgICBoaW50cyxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBpbXBvcnQgSlNPTiBmaWxlXHJcbiAgc3RhdGljIGltcG9ydFYxSlNPTihqc29uOiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncm91cDogc3RyaW5nO1xyXG4gICAgdGlsZXM6IHt9W107XHJcbiAgfSk6IExldmVsIHtcclxuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZChqc29uLndpZHRoLCBqc29uLmhlaWdodCk7XHJcbiAgICBjb25zdCBjZWxsczogQ2VsbFtdID0gW107XHJcbiAgICBqc29uLnRpbGVzLmZvckVhY2goXHJcbiAgICAgICh0aWxlOiB7XHJcbiAgICAgICAgaTogbnVtYmVyO1xyXG4gICAgICAgIGo6IG51bWJlcjtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcm90YXRpb246IG51bWJlcjtcclxuICAgICAgICBmcm96ZW46IGJvb2xlYW47XHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IG5ldyBDb29yZCh0aWxlLmksIHRpbGUuaik7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUodGlsZS5uYW1lLCAxKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IGVsZW1lbnQucm90YXRpb25BbmdsZSAqIHRpbGUucm90YXRpb247XHJcbiAgICAgICAgY2VsbHMucHVzaChuZXcgQ2VsbChjb29yZCwgZWxlbWVudCwgcm90YXRpb24sIHRpbGUuZnJvemVuKSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBncmlkLnNldE1hbnkoLi4uY2VsbHMpO1xyXG4gICAgY29uc3QgZ29hbHM6IEdvYWxbXSA9IFtdO1xyXG4gICAgZ3JpZC5kZXRlY3RvcnMuZm9yRWFjaChkZXRlY3RvciA9PiB7XHJcbiAgICAgIGdvYWxzLnB1c2gobmV3IEdvYWwoZGV0ZWN0b3IuY29vcmQsIDEpKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGludHM6IEhpbnRbXSA9IFtdO1xyXG4gICAgcmV0dXJuIG5ldyBMZXZlbChcclxuICAgICAgMCxcclxuICAgICAganNvbi5uYW1lLFxyXG4gICAgICBqc29uLmdyb3VwLFxyXG4gICAgICBcIlYxIGxldmVsIGltcG9ydGVkXCIsXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIGdvYWxzLFxyXG4gICAgICBoaW50cyxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IENvb3JkIGZyb20gXCIuL0Nvb3JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTG9nIHtcclxuICBwcml2YXRlIGxpbmVzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGdhbWU6IEdhbWUsXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDb29yZCxcclxuICAgIHByaXZhdGUgbWF4V2lkdGg6IG51bWJlcixcclxuICAgIHByaXZhdGUgbWF4TGluZXM6IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5saW5lcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmVzID0gW107XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5lcy5zcGxpY2UoMCwgMCwgdGV4dCk7XHJcbiAgICBpZiAodGhpcy5saW5lcy5sZW5ndGggPiB0aGlzLm1heExpbmVzKSB7XHJcbiAgICAgIHRoaXMubGluZXMuc3BsaWNlKHRoaXMubWF4TGluZXMsIHRoaXMubGluZXMubGVuZ3RoIC0gdGhpcy5tYXhMaW5lcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbmV3IENvb3JkKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgIGluZGV4IDwgdGhpcy5tYXhMaW5lcyAmJiBpbmRleCA8IHRoaXMubGluZXMubGVuZ3RoO1xyXG4gICAgICArK2luZGV4XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5nYW1lLmRyYXdUZXh0KGxpbmVQb3NpdGlvbiwgdGhpcy5saW5lc1tpbmRleF0sIHRoaXMubWF4V2lkdGgpO1xyXG4gICAgICArK2xpbmVQb3NpdGlvbi55O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBLRVlTIH0gZnJvbSBcInJvdC1qc1wiO1xyXG5pbXBvcnQgeyBHbHlwaCB9IGZyb20gXCIuL0dseXBoXCI7XHJcbmltcG9ydCB7IEFjdG9yLCBBY3RvclR5cGUgfSBmcm9tIFwiLi9BY3RvclwiO1xyXG5pbXBvcnQgSW5wdXRVdGlsaXR5IGZyb20gXCIuL0lucHV0VXRpbGl0eVwiO1xyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XHJcbmltcG9ydCBGaWxlU2F2ZXIgPSByZXF1aXJlKFwiZmlsZS1zYXZlclwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIEFjdG9yIHtcclxuICBnbHlwaDogR2x5cGg7XHJcbiAgdHlwZTogQWN0b3JUeXBlO1xyXG4gIHByaXZhdGUgZ2FtZTogR2FtZTtcclxuICBwdWJsaWMgY29vcmQ6IENvb3JkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBjb29yZDogQ29vcmQpIHtcclxuICAgIHRoaXMuZ2x5cGggPSBuZXcgR2x5cGgoXCJAXCIsIFswLCAwXSk7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3RvclR5cGUuUGxheWVyO1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuY29vcmQgPSBjb29yZDtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnMgYW5kIHNldHRlcnNcclxuICBnZXQgY2VsbCgpOiBDZWxsIHtcclxuICAgIHJldHVybiB0aGlzLmdhbWUuZ3JpZC5nZXQodGhpcy5jb29yZCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIGFjdCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIElucHV0VXRpbGl0eS53YWl0Rm9ySW5wdXQodGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vIE9mZnNldCBvZiBtb3ZlbWVudFxyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcclxuICAgIGxldCB2YWxpZElucHV0ID0gZmFsc2U7XHJcbiAgICBsZXQgbmV3Q29vcmQ6IENvb3JkID0gdGhpcy5jb29yZDtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAvLyBNb3ZlbWVudFxyXG4gICAgICBjYXNlIEtFWVMuVktfWjpcclxuICAgICAgY2FzZSBLRVlTLlZLX1VQOlxyXG4gICAgICAgIG5ld0Nvb3JkID0gdGhpcy5jb29yZC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZUy5WS19EOlxyXG4gICAgICBjYXNlIEtFWVMuVktfUklHSFQ6XHJcbiAgICAgICAgbmV3Q29vcmQgPSB0aGlzLmNvb3JkLnJpZ2h0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVMuVktfUzpcclxuICAgICAgY2FzZSBLRVlTLlZLX0RPV046XHJcbiAgICAgICAgbmV3Q29vcmQgPSB0aGlzLmNvb3JkLmJvdHRvbTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTLlZLX1E6XHJcbiAgICAgIGNhc2UgS0VZUy5WS19MRUZUOlxyXG4gICAgICAgIG5ld0Nvb3JkID0gdGhpcy5jb29yZC5sZWZ0O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gUm90YXRpb25zLCBmcmVlemluZ1xyXG4gICAgICBjYXNlIEtFWVMuVktfQTpcclxuICAgICAgICB0aGlzLmNlbGwucm90YXRlKC10aGlzLmNlbGwuZWxlbWVudC5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTLlZLX0U6XHJcbiAgICAgICAgdGhpcy5jZWxsLnJvdGF0ZSh0aGlzLmNlbGwuZWxlbWVudC5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTLlZLX0Y6XHJcbiAgICAgICAgdGhpcy5jZWxsLnRvZ2dsZUZyZWV6ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gU2F2ZSBKU09OIGZpbGUgd2l0aCBsZXZlbFxyXG4gICAgICBjYXNlIEtFWVMuVktfRjE6XHJcbiAgICAgICAgY29uc3QganNvbiA9IHRoaXMuZ2FtZS5sZXZlbC5leHBvcnRKU09OKCk7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShqc29uKV0sIHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwibGV2ZWwuanNvblwiKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIEVsZW1lbnRzXHJcbiAgICAgIGNhc2UgS0VZUy5WS19RVU9URTpcclxuICAgICAgICB0aGlzLmNlbGwuZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUoXCJ2b2lkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVMuVktfMTpcclxuICAgICAgICB0aGlzLmNlbGwuZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUoXCJtaXJyb3JcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZUy5WS18yOlxyXG4gICAgICAgIHRoaXMuY2VsbC5lbGVtZW50ID0gRWxlbWVudC5mcm9tTmFtZShcImJlYW1zcGxpdHRlclwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTLlZLXzM6XHJcbiAgICAgICAgdGhpcy5jZWxsLmVsZW1lbnQgPSBFbGVtZW50LmZyb21OYW1lKFwibGFzZXJcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZUy5WS180OlxyXG4gICAgICAgIHRoaXMuY2VsbC5lbGVtZW50ID0gRWxlbWVudC5mcm9tTmFtZShcImRldGVjdG9yXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVMuVktfNTpcclxuICAgICAgICB0aGlzLmNlbGwuZWxlbWVudCA9IEVsZW1lbnQuZnJvbU5hbWUoXCJwaGFzZWluY1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTLlZLXzY6XHJcbiAgICAgICAgdGhpcy5jZWxsLmVsZW1lbnQgPSBFbGVtZW50LmZyb21OYW1lKFwicGhhc2VkZWNcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZUy5WS183OlxyXG4gICAgICAgIHRoaXMuY2VsbC5lbGVtZW50ID0gRWxlbWVudC5mcm9tTmFtZShcInJvY2tcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZUy5WS184OlxyXG4gICAgICAgIHRoaXMuY2VsbC5lbGVtZW50ID0gRWxlbWVudC5mcm9tTmFtZShcIm1pbmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayB0aGF0IHBsYXllciBpcyBpbiBnYW1lIGdyaWQgYm9yZGVyc1xyXG4gICAgaWYgKHRoaXMuZ2FtZS5ncmlkLmluY2x1ZGVzKG5ld0Nvb3JkKSkge1xyXG4gICAgICB0aGlzLmNvb3JkID0gbmV3Q29vcmQ7XHJcbiAgICAgIHZhbGlkSW5wdXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuZ3JpZC5kcmF3KHRoaXMuZ2FtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWRJbnB1dDtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFBsYXllciAke3RoaXMuY29vcmQudG9TdHJpbmcoKX1gO1xyXG4gIH1cclxufVxyXG4iLCIvLyBQT0lOVEVSIENMQVNTXHJcbi8vIERlc2NyaWJlcyBhIHZlY3RvciB3aXRoIGFuIG9yaWdpbiwgYSBkaXJlY3Rpb24gYW5kIGFuIHVuaXQgYW1wbGl0dWRlLlxyXG4vLyBGSVhNRTogRHVwbGljYXRlIGJldHdlZW4gcGF0aCBhbmQgY29vcmRcclxuLy8gRklYTUU6IENsYXNzIG5lZWRzIHJld29ya1xyXG5pbXBvcnQgQ29vcmQgZnJvbSBcIi4vQ29vcmRcIjtcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vR3JpZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXRoUG9pbnRlciB7XHJcbiAgY29vcmQ6IENvb3JkO1xyXG4gIGRpcmVjdGlvbjogbnVtYmVyO1xyXG4gIGludGVuc2l0eTogbnVtYmVyO1xyXG4gIHBoYXNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgQ29vcmQge1xyXG4gIGNvb3JkOiBDb29yZDtcclxuICBkaXJlY3Rpb246IG51bWJlcjtcclxuICBpbnRlbnNpdHk6IG51bWJlcjtcclxuICBwaGFzZTogbnVtYmVyO1xyXG4gIHBhdGg6IFBhdGhQb2ludGVyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29vcmQ6IENvb3JkLFxyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXHJcbiAgICBpbnRlbnNpdHkgPSAxLFxyXG4gICAgcGhhc2UgPSAwLFxyXG4gICAgcGF0aDogUGF0aFBvaW50ZXJbXSA9IFtcclxuICAgICAgeyBjb29yZDogY29vcmQsIGRpcmVjdGlvbjogZGlyZWN0aW9uLCBpbnRlbnNpdHk6IGludGVuc2l0eSwgcGhhc2U6IHBoYXNlIH1cclxuICAgIF1cclxuICApIHtcclxuICAgIHN1cGVyKGNvb3JkLnksIGNvb3JkLngpO1xyXG4gICAgdGhpcy5jb29yZCA9IGNvb3JkO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eTtcclxuICAgIHRoaXMucGhhc2UgPSBwaGFzZTtcclxuICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICAvLyBPcmlnaW4gb2YgdGhlIHBvaW50ZXJcclxuICBnZXQgb3JpZ2luKCk6IENvb3JkIHtcclxuICAgIHJldHVybiB0aGlzLnBhdGhbMF0uY29vcmQ7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpcyBhIHBhcnRpY2xlIGhhcyBhbnkgaW50ZW5zaXR5XHJcbiAgZ2V0IGFsaXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZW5zaXR5ID4gMDtcclxuICB9XHJcblxyXG4gIC8vIERlZXAgY2xvbmUgb2YgdGhlIHBvaW50ZXJcclxuICBnZXQgY2xvbmUoKTogUG9pbnRlciB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50ZXIodGhpcy5jb29yZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuaW50ZW5zaXR5LCB0aGlzLnBoYXNlKTtcclxuICB9XHJcblxyXG4gIC8vIFBvaW50ZXIgaXMgb24gYSBzcGVjaWZpYyBjZWxsIHNob3J0aGFuZFxyXG4gIG9uKGNlbGw6IENlbGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvb3JkLmVxdWFsKGNlbGwuY29vcmQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29tcHV0ZSBuZXh0IHNpbXVsYXRpb24gc3RlcFxyXG4gIG5leHQocmVwZWF0ID0gMSk6IFBvaW50ZXIge1xyXG4gICAgLy8gTW92aW5nIENXIGluIGluY3JlbWVudCBvZiA5MMKwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGVhdDsgaSsrKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24gJSAzNjApIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLmNvb3JkID0gdGhpcy5jb29yZC50b3A7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDkwOlxyXG4gICAgICAgICAgdGhpcy5jb29yZCA9IHRoaXMuY29vcmQucmlnaHQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE4MDpcclxuICAgICAgICAgIHRoaXMuY29vcmQgPSB0aGlzLmNvb3JkLmJvdHRvbTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjcwOlxyXG4gICAgICAgICAgdGhpcy5jb29yZCA9IHRoaXMuY29vcmQubGVmdDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBwb2ludGVycyBhbmQgZGlyZWN0aW9uLmApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFVwZGF0ZSBjb29yZCB3aXRoIGxhdGVzdCBjb21wdXRlZCBwYXRoIGNvb3JkaW5hdGVzXHJcbiAgICAgIHRoaXMucGF0aC5wdXNoKHtcclxuICAgICAgICBjb29yZDogdGhpcy5jb29yZCxcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICAgIGludGVuc2l0eTogdGhpcy5pbnRlbnNpdHksXHJcbiAgICAgICAgcGhhc2U6IHRoaXMucGhhc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIENvbXB1dGUgbGFzZXIgcGF0aFxyXG4gIGxhc2VyUGF0aChncmlkOiBHcmlkLCBtYXhGcmFtZXMgPSA1MCk6IFBhdGhQb2ludGVyW10ge1xyXG4gICAgLy8gTWFrZSBhIGRlcHAgY2xvbmUgb2YgdGhlIHBvaW50ZXJcclxuICAgIGxldCBhbGl2ZTogUG9pbnRlcltdID0gW3RoaXMuY2xvbmVdO1xyXG4gICAgY29uc3QgZGVhZDogUG9pbnRlcltdID0gW107XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgcGF0aCB3aXRoIGEgc3BlY2lmaWMgbnVtYmVyIG9mIGZyYW1lc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhGcmFtZXM7IGkrKykge1xyXG4gICAgICAvLyBQcm9jZXNzIGVhY2ggbGl2aW5nIHBvaW50ZXJcclxuICAgICAgYWxpdmUuZm9yRWFjaChwb2ludGVyID0+IHtcclxuICAgICAgICBwb2ludGVyLm5leHQoKTtcclxuXHJcbiAgICAgICAgLy8gWmVybyB0aGUgaW50ZW5zaXR5IG9mIGVzY2FwaW5nIHBvaW50ZXJzXHJcbiAgICAgICAgaWYgKCFncmlkLmluY2x1ZGVzKHBvaW50ZXIuY29vcmQpKSB7XHJcbiAgICAgICAgICBwb2ludGVyLmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBYnNvcnB0aW9uXHJcbiAgICAgICAgZ3JpZC5hYnNvcmJlcnMuZm9yRWFjaCgoYWJzb3JiZXI6IENlbGwpID0+IHtcclxuICAgICAgICAgIGlmIChwb2ludGVyLm9uKGFic29yYmVyKSkge1xyXG4gICAgICAgICAgICBwb2ludGVyLmludGVuc2l0eSAtPVxyXG4gICAgICAgICAgICAgIHBvaW50ZXIuaW50ZW5zaXR5ICogYWJzb3JiZXIuZWxlbWVudC5hYnNvcnB0aW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWZsZWN0aW9uXHJcbiAgICAgICAgZ3JpZC5taXJyb3JzLmZvckVhY2goKG1pcnJvcjogQ2VsbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHBvaW50ZXIub24obWlycm9yKSkge1xyXG4gICAgICAgICAgICBwb2ludGVyLmRpcmVjdGlvbiA9XHJcbiAgICAgICAgICAgICAgKDIgKiBtaXJyb3Iucm90YXRpb24gLSBwb2ludGVyLmRpcmVjdGlvbiArIDM2MCkgJSAzNjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JpZC5iZWFtc3BsaXR0ZXJzLmZvckVhY2goKGJlYW1zcGxpdHRlcjogQ2VsbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHBvaW50ZXIub24oYmVhbXNwbGl0dGVyKSkge1xyXG4gICAgICAgICAgICAvLyBEaW0gdGhlIGN1cnJlbnQgcG9pbnRlciBpbnRlbnNpdHlcclxuICAgICAgICAgICAgcG9pbnRlci5pbnRlbnNpdHkgLz0gMjtcclxuICAgICAgICAgICAgLy8gUmVmbGVjdGluZyBwb2ludGVyIChjcmVhdGUgbmV3IHJlZmxlY3RlZCBmYWRlZCBwb2ludGVyKVxyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICAgICgyICogYmVhbXNwbGl0dGVyLnJvdGF0aW9uIC0gcG9pbnRlci5kaXJlY3Rpb24gKyAzNjApICUgMzYwO1xyXG4gICAgICAgICAgICBhbGl2ZS5wdXNoKFxyXG4gICAgICAgICAgICAgIG5ldyBQb2ludGVyKHBvaW50ZXIuY29vcmQsIGRpcmVjdGlvbiwgcG9pbnRlci5pbnRlbnNpdHkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBoYXNlIHNoaWZ0ZXJzXHJcbiAgICAgICAgZ3JpZC5waGFzZXNoaWZ0ZXJzLmZvckVhY2goKHBoYXNlc2hpZnRlcjogQ2VsbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHBvaW50ZXIub24ocGhhc2VzaGlmdGVyKSkge1xyXG4gICAgICAgICAgICBwb2ludGVyLnBoYXNlID0gKHBvaW50ZXIucGhhc2UgKyBwaGFzZXNoaWZ0ZXIuZWxlbWVudC5waGFzZSkgJSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEZpbHRlciB0aGUgbGl2aW5nIGZyb20gdGhlIGRlYWRcclxuICAgICAgYWxpdmUuZm9yRWFjaChwb2ludGVyID0+IHtcclxuICAgICAgICBpZiAoIXBvaW50ZXIuYWxpdmUpIHtcclxuICAgICAgICAgIGRlYWQucHVzaChwb2ludGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBhbGl2ZSA9IGFsaXZlLmZpbHRlcihwb2ludGVyID0+IHtcclxuICAgICAgICByZXR1cm4gcG9pbnRlci5hbGl2ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmxhdHRlbiBhbmQgZGVkdXBlIGxpc3Qgb2YgcG9pbnRlcnNcclxuICAgIGNvbnN0IHBhdGhQb2ludGVyczogUGF0aFBvaW50ZXJbXVtdID0gW107XHJcbiAgICBhbGl2ZSA9IGRlYWQuY29uY2F0KGFsaXZlKTtcclxuICAgIGFsaXZlLmZvckVhY2gocG9pbnRlciA9PiB7XHJcbiAgICAgIHBhdGhQb2ludGVycy5wdXNoKHBvaW50ZXIucGF0aCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbLi4ubmV3IFNldChwYXRoUG9pbnRlcnMuZmxhdCgpKV07XHJcbiAgfVxyXG5cclxuICAvLyBPdmVycmlkZSBtZXRob2QgdG8gZGlzcGxheSBuaWNlbHlcclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAjUG9pbnRlciBAICR7dGhpcy5jb29yZC50b1N0cmluZygpfSBtb3ZpbmcgJHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25cclxuICAgIH3CsCB3aXRoICR7dGhpcy5pbnRlbnNpdHl9IGludGVuc2l0eSBhbmQgJHtcclxuICAgICAgdGhpcy5waGFzZVxyXG4gICAgfSBwaGFzZSBzaGlmdC4gUEFUSDogJHt0aGlzLnBhdGgubWFwKGNvb3JkID0+IGNvb3JkLnRvU3RyaW5nKCkpfWA7XHJcbiAgfVxyXG5cclxuICAvLyBFeHBvcnQgSlNPTiBvYmplY3RcclxuICBleHBvcnRKU09OKCk6IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyO1xyXG4gICAgaW50ZW5zaXR5OiBudW1iZXI7XHJcbiAgICBwaGFzZTogbnVtYmVyO1xyXG4gICAgcGF0aDogeyBjb29yZDogQ29vcmQ7IGRpcmVjdGlvbjogbnVtYmVyOyBwaGFzZTogbnVtYmVyIH1bXTtcclxuICB9IHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGgubWFwKChwb3NpdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29vcmQ6IHBvc2l0aW9uLmNvb3JkLmV4cG9ydEpTT04oKSxcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICAgIHBoYXNlOiB0aGlzLnBoYXNlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHRoaXMuY29vcmQueCxcclxuICAgICAgeTogdGhpcy5jb29yZC55LFxyXG4gICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICBpbnRlbnNpdHk6IHRoaXMuaW50ZW5zaXR5LFxyXG4gICAgICBwaGFzZTogdGhpcy5waGFzZSxcclxuICAgICAgcGF0aDogcGF0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEltcG9ydCBKU09OIG9iamVjdFxyXG4gIHN0YXRpYyBpbXBvcnRKU09OKGpzb246IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyO1xyXG4gICAgaW50ZW5zaXR5OiBudW1iZXI7XHJcbiAgICBwaGFzZTogbnVtYmVyO1xyXG4gICAgcGF0aDogeyB5OiBudW1iZXI7IHg6IG51bWJlciB9W107XHJcbiAgfSk6IFBvaW50ZXIge1xyXG4gICAgLy8gY29uc3QgcGF0aCA9IGpzb24ucGF0aC5tYXAoanNvbkNvb3JkID0+IENvb3JkLmltcG9ydEpTT04oanNvbkNvb3JkKSk7XHJcbiAgICBjb25zdCBjb29yZCA9IG5ldyBDb29yZChqc29uLnksIGpzb24ueCk7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50ZXIoY29vcmQsIGpzb24uZGlyZWN0aW9uLCBqc29uLmludGVuc2l0eSwganNvbi5waGFzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3JtYXQgYWN0aXZlIHBhcnRpY2xlIGxpc3RcclxuICBzdGF0aWMgbWFueVRvU3RyaW5nKHBvaW50ZXJzOiBQb2ludGVyW10pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9IGAke3BvaW50ZXJzLmxlbmd0aH0gYWN0aXZlIHBhcnRpY2xlcy4uLlxcbmA7XHJcbiAgICBwb2ludGVycy5mb3JFYWNoKHBvaW50ZXIgPT4ge1xyXG4gICAgICByZXN1bHQgKz0gYC0gJHtwb2ludGVyLnRvU3RyaW5nKCl9XFxuYDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgY29vcmRpbmF0ZXMgaW4gYSBsaXN0XHJcbiAgc3RhdGljIG1hbnlUb0Nvb3Jkcyhwb2ludGVyczogUG9pbnRlcltdKTogQ29vcmRbXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IENvb3JkW10gPSBbXTtcclxuICAgIHBvaW50ZXJzLm1hcChwb2ludGVyID0+IHtcclxuICAgICAgcmVzdWx0LnB1c2gocG9pbnRlci5jb29yZCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHBhZFJpZ2h0LCBwYWRMZWZ0IH0gZnJvbSBcIi4vSGVscGVyc1wiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCBDb29yZCBmcm9tIFwiLi9Db29yZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzTGluZSB7XHJcbiAgdHVybnM6IG51bWJlcjtcclxuICBwaW5lYXBwbGVzOiBudW1iZXI7XHJcbiAgYm94ZXM6IG51bWJlcjtcclxuICBtYXhCb3hlczogbnVtYmVyO1xyXG4gIHByaXZhdGUgZ2FtZTogR2FtZTtcclxuICBwcml2YXRlIGNvb3JkOiBDb29yZDtcclxuICBwcml2YXRlIG1heFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZ2FtZTogR2FtZSxcclxuICAgIGNvb3JkOiBDb29yZCxcclxuICAgIG1heFdpZHRoOiBudW1iZXIsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgcGFyYW1zOiBhbnkgPSB7fVxyXG4gICkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuY29vcmQgPSBjb29yZDtcclxuICAgIHRoaXMubWF4V2lkdGggPSBtYXhXaWR0aDtcclxuICAgIHRoaXMudHVybnMgPSBwYXJhbXMudHVybnMgfHwgMDtcclxuICB9XHJcblxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50dXJucyA9IDA7XHJcbiAgfVxyXG5cclxuICBkcmF3KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGxheWVyQ2VsbCA9IHRoaXMuZ2FtZS5wbGF5ZXJDZWxsO1xyXG4gICAgY29uc3QgcGxheWVyVGV4dCA9IGBUdXJuczogJHtwYWRSaWdodChcclxuICAgICAgdGhpcy50dXJucy50b1N0cmluZygpLFxyXG4gICAgICA2XHJcbiAgICApfSBwbGF5ZXI6ICR7cGFkTGVmdCh0aGlzLmdhbWUucGxheWVyQ29vcmQudG9TdHJpbmcoKSwgOCl9YDtcclxuICAgIHRoaXMuZ2FtZS5kcmF3VGV4dCh0aGlzLmNvb3JkLCBwbGF5ZXJUZXh0LCB0aGlzLm1heFdpZHRoKTtcclxuICAgIGNvbnN0IGNlbGxUZXh0ID0gYENlbGw6ICR7cGxheWVyQ2VsbC5lbGVtZW50Lm5hbWV9IC0gUm90YXRpb246ICR7XHJcbiAgICAgIHBsYXllckNlbGwucm90YXRpb25cclxuICAgIH3CsCAke3BsYXllckNlbGwuZnJvemVuID8gXCJmcm96ZW5cIiA6IFwiXCJ9YDtcclxuICAgIHRoaXMuZ2FtZS5kcmF3VGV4dCh0aGlzLmNvb3JkLnJpZ2h0LCBjZWxsVGV4dCwgdGhpcy5tYXhXaWR0aCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBqc29uIGZyb20gXCIuLi9sZXZlbHMvdGlsZXRlc3QuanNvblwiO1xyXG4vLyBpbXBvcnQganNvbiBmcm9tIFwiLi4vbGV2ZWxzL2NvbnF1ZXIuanNvblwiO1xyXG5pbXBvcnQganNvbiBmcm9tIFwiLi4vbGV2ZWxzL2xldmVsLmpzb25cIjtcclxuaW1wb3J0IExldmVsIGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkub25sb2FkID0gKCk6IHZvaWQgPT4ge1xyXG4gIGNvbnN0IGxldmVsID0gTGV2ZWwuaW1wb3J0SlNPTihqc29uKTtcclxuICBuZXcgR2FtZShsZXZlbCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=