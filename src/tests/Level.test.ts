import Level, { LevelInterface } from "../Level"
// import jsonFile from "../../levels/dev/jest.json";

const jsonLevelInterface: LevelInterface = {
  id: 6,
  name: "Logic gates",
  group: "Logic",
  description: "Basic NOT gate",
  grid: {
    cols: 6,
    rows: 5,
    cells: [
      {
        coord: { y: 2, x: 1 },
        element: "Laser",
        rotation: 90,
        frozen: true,
        active: false,
        energized: false
      }
    ]
  },
  hints: [],
  goals: []
}

// Coordinates testing
describe("Level", () => {
  it("should load a level from a level interface object", () => {
    const levelObj = Level.importLevel(jsonLevelInterface)
    expect(levelObj.grid.exportGrid()).toEqual({
      cells: [
        {
          active: false,
          coord: { x: 1, y: 2 },
          element: "Laser",
          energized: false,
          frozen: true,
          rotation: 90
        }
      ],
      cols: 6,
      rows: 5
    })
  })

  // it("should load a level from a json level file", () => {
  //   const levelJson = Level.importLevel(jsonFile);
  //   expect(levelJson.grid.exportGrid()).toEqual({
  //     cells: [
  //       {
  //         active: false,
  //         coord: { x: 2, y: 0 },
  //         element: "Gate",
  //         energized: false,
  //         frozen: false,
  //         rotation: 0
  //       },
  //       {
  //         active: false,
  //         coord: { x: 3, y: 0 },
  //         element: "Laser",
  //         energized: false,
  //         frozen: false,
  //         rotation: 0
  //       }
  //     ],
  //     cols: 5,
  //     rows: 5
  //   });
  // });

  // it("should compute a frame from a level", () => {
  //   const level = Level.importLevel(jsonFile);
  //   const game = new Game(level, 32);
  //   console.log(game.frames[0].exportFrame());
  // });
})
