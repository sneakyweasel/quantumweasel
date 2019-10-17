import json from "../levels/classic/level10.json";
import Level from "./Level";
import Frame from "./Frame";
// import Particle from "./Particle";

// Load level
const level = Level.importLevel(json);
console.log("LASERS CLUSTER:" + level.grid.cluster.filteredBy("Laser"));

// Create first frame
const frames: Frame[] = [];
const initFrame = new Frame(level);
frames.push(initFrame);
console.log(initFrame.toString());

const secondFrame = initFrame.next();
console.log(secondFrame.toString());
// console.log(Particle.manyToString(secondFrame.quantum));
