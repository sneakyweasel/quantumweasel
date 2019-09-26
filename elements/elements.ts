// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const jsonElements = [
  {
    id: 0,
    name: "void",
    namev1: "Void",
    group: "Basic",
    description: "The void...",
    link: "./elements/void",
    active: false,
    absorption: 0,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "#2e006a",
    ascii: [" "],
    tiles: [[0, 0]]
  },
  {
    id: 1,
    name: "laser",
    namev1: "Source",
    group: "Emitter",
    description: "A one-photon laser source",
    link: "./elements/laser",
    active: true,
    absorption: 0,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["^", ">", "v", "<"],
    tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
  },
  {
    id: 2,
    name: "mirror",
    namev1: "ThinMirror",
    group: "Direction",
    description: "A simple reflecting mirror",
    link: "./elements/mirror",
    active: false,
    absorption: 0,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
    tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
  },
  {
    id: 3,
    name: "detector",
    namev1: "Detector",
    group: "Absorber",
    description: "A one-photon detector",
    link: "./elements/detector",
    active: false,
    absorption: 1,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["⇑", "⇒", "⇓", "⇐"],
    tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
  },
  {
    id: 4,
    name: "rock",
    namev1: "Rock",
    group: "Absorber",
    description: "An absorbing pet rock",
    link: "./elements/rock",
    active: false,
    absorption: 1,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["#"],
    tiles: [[0, 0]]
  },
  {
    id: 5,
    name: "mine",
    namev1: "Mine",
    group: "Absorber",
    description: "An explosive mine (disarm Jean)",
    link: "./elements/mine",
    active: false,
    absorption: 1,
    phase: 0,
    matrix: [],

    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["!"],
    tiles: [[0, 0]]
  },
  {
    id: 6,
    name: "beamsplitter",
    namev1: "ThinSplitter",
    group: "Direction",
    description: "A beamsplitter",
    link: "./elements/beamsplitter",
    active: false,
    absorption: 0,
    phase: 0,

    matrix: [],
    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"],
    tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
  },
  {
    id: 7,
    name: "filter",
    namev1: "Absorber",
    group: "Absorber",
    description: "A neutral density filter",
    link: "./elements/absorber",
    active: false,
    absorption: 0.5,
    phase: 0,

    matrix: [],
    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["-"],
    tiles: [[0, 0]]
  },
  {
    id: 8,
    name: "phaseinc",
    namev1: "VacuumJar",
    group: "Phase",
    description: "A glass slab that increases phase.",
    link: "./elements/phaseinc",
    active: false,
    absorption: 0,
    phase: 0.25,

    matrix: [],
    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["↝"],
    tiles: [[0, 0]]
  },
  {
    id: 9,
    name: "phasedec",
    namev1: "Glass",
    group: "Phase",
    description: "Void that decreases phase.",
    link: "./elements/phasedec",
    active: false,
    absorption: 0,
    phase: -0.25,

    matrix: [],
    foregroundColor: "white",
    backgroundColor: "black",
    ascii: ["↜"],
    tiles: [[0, 0]]
  }
];
