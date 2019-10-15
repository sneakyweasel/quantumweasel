import json from "../levels/classic/level12.json";
import Level from "./Level";
// import Grid from "./Grid.js";

const level = Level.importLevel(json);
console.log(level.grid.ascii);
console.log("----LAZORS!!!1----");
const laser = level.grid.lasers[0];
laser.rotation = 0;
console.log(level.grid.fireLasers().map(particle => particle.toString()));
