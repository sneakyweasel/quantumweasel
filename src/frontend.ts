import json from "../levels/classic/level10.json";
import Level from "./Level";
import Frame from "./Frame";
// import Particle from "./Particle";

// Load level
const level = Level.importLevel(json);
// console.log("LASERS CLUSTER:" + level.grid.cluster.filteredBy("Laser"));

// Create first frame
const frames: Frame[] = [];
const initFrame = new Frame(level);
console.log(initFrame.toString());
frames.push(initFrame);

const lasers = level.grid.computePaths();
// const lasers = level.grid.paths;
console.log("LASERS CLUSTER:" + lasers.map(part => part.toString()));