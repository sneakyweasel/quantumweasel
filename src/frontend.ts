import json from "../levels/classic/level10.json";
import Level from "./Level";
import Frame from "./Frame";

// Load level
const level = Level.importLevel(json);

// Create frame
const frames: Frame[] = [];
const initFrame = new Frame(level);
frames.push(initFrame);

// initFrame.particles;
