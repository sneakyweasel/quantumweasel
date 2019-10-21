import json from "../levels/classic/level10.json";
import Level from "./Level";
import Frame from "./Frame";
// import Particle from "./Particle";

// Load level
const level = Level.importLevel(json);

// Create first frame
const frames: Frame[] = [];
const initFrame = new Frame(level);
console.log(initFrame.toString());
frames.push(initFrame);

const secondFrame = initFrame.next()
frames.push(secondFrame);
console.log(secondFrame.toString());

console.log(level.grid.lasers.cells)
// DEBUG LASER PATHS
// const lasers = level.grid.computePaths();
// console.log("LASERS CLUSTER:" + lasers.map(part => part.toString()));