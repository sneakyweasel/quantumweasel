// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const jsonElements = [
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
