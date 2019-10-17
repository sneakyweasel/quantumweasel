import json from "../levels/classic/level10.json";
import Level from "./Level";
import Frame from "./Frame";

// Load level
const level = Level.importLevel(json);

// Create first frame
const frames: Frame[] = [];
const initFrame = new Frame(level);
frames.push(initFrame);
console.log(initFrame.particles.toString());

const secondFrame = initFrame.next();
console.log(secondFrame.particles.toString());
