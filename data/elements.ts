import { ElementInterface } from "./../src/Element";
export const jsonGroups: { [symbol: string]: string[] } = {
  Basic: ["void", "wall", "gate"],
  Emitter: ["laser"],
  Direction: ["mirror", "beamsplitter", "coatedsplitter", "polarsplitter"],
  Absorption: ["detector", "mine", "rock", "omnidetector", "filter"],
  Polarization: ["absorb-polarizer", "waveplate", "sugar", "faraday"],
  Phase: ["phaseinc", "phasedec"]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const jsonElements: ElementInterface[] = [
  {
    name: "laser",
    group: "Emitter",
    description: "An on-demand single photon source.",
    active: true,
    absorption: 0,
    phase: 0,
    id: 0,
    ascii: ["^", ">", "v", "<"],
    tiles: [[0, 0], [0, 1], [0, 2], [0, 3]]
  },
  {
    name: "rock",
    group: "Absorption",
    description:
      "Dark and immersive as your sweetheart's depth of eyes. Absorbs light. And is sensitive.",
    active: false,
    absorption: 1,
    phase: 0,
    id: 1,
    ascii: ["♜"],
    tiles: [[1, 0]]
  },
  {
    name: "absorb-polarizer",
    group: "Polarization",
    description:
      "A polarization filter WE...Anisotropic polymer strands capture electric oscillations parallel to them. Used in photography.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 2,
    ascii: ["🡡", "🡥", "🡢", "🡦", "🡣", "🡧", "🡠", "🡤"],
    tiles: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7]]
  },
  {
    name: "waveplate",
    group: "Polarization",
    description:
      "It delays one polarization (with darker lines) by λ/4. When applied correctly, it can change linear polarization into circular, and vice versa.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 3,
    ascii: ["🡩", "🡭", "🡪", "🡮", "🡫", "🡯", "🡨", "🡬"],
    tiles: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7]]
  },
  {
    name: "detector",
    group: "Absorption",
    description:
      "Detects and amplifies electric signal from each single photon, from a single direction. Your goal is to get photon there!",
    active: false,
    absorption: 1,
    phase: 0,
    id: 4,
    ascii: ["⭱", "⭲", "⭳", "⭰"],
    tiles: [[4, 0], [4, 1], [4, 2], [4, 3]]
  },
  {
    name: "omnidetector",
    group: "Absorption",
    description:
      "Detects and amplifies electric signal from each single photon, from all directions. Typically, it is the goal to get the photon here.",
    active: false,
    absorption: 1,
    phase: 0,
    id: 7,
    ascii: ["O"],
    tiles: [[7, 0], [7, 1], [7, 2], [7, 3]]
  },
  {
    name: "sugar",
    group: "Polarization",
    description:
      "Table sugar is a chiral molecule – it does not look the same as its mirror reflection. We put it in an amount, so it rotates polarization by 45°.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 8,
    ascii: ["S"],
    tiles: [[8, 0]]
  },
  {
    name: "coatedsplitter",
    group: "Direction",
    description:
      "A thin slab of glass with a reflective layer - reflecting half the beam and transmitting the other half of it.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 9,
    ascii: ["⇑", "⇗", "⇒", "⇘", "⇓", "⇙", "⇐", "⇖"],
    tiles: [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7]]
  },
  {
    name: "mine",
    group: "Absorption",
    description:
      "Once it absorbs a single photon, it sets off. Old french submarine captains can sometimes disarm them.",
    active: false,
    absorption: 1,
    phase: 0,
    id: 11,
    ascii: ["!"],
    tiles: [[11, 0]]
  },
  {
    name: "polarsplitter",
    group: "Direction",
    description:
      "Reflects vertical polarization (↕), transmitts horizonal polarization (↔).",
    active: false,
    absorption: 0,
    phase: 0,
    id: 12,
    ascii: ["⬲", "⟴"],
    tiles: [[12, 0], [12, 1]]
  },
  {
    name: "mirror",
    group: "Direction",
    description: "Metallic or dielectric mirror.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 14,
    ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
    tiles: [
      [14, 0],
      [14, 1],
      [14, 2],
      [14, 3],
      [14, 4],
      [14, 5],
      [14, 6],
      [14, 7]
    ]
  },
  {
    name: "beamsplitter",
    group: "Direction",
    description:
      "A thin slab of glass reflecting half the beam, and transmitting other half of it.",
    active: false,
    absorption: 0,
    phase: 0,
    id: 15,
    ascii: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"],
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
    name: "phasedec",
    group: "Phase",
    description:
      "Higher refractive index makes light slower. We set its thickness so it retards the phase by λ/4. Useful for changing interference.",
    active: false,
    absorption: 0,
    phase: -0.25,
    id: 16,
    ascii: ["↜"],
    tiles: [[16, 0]]
  },
  {
    name: "phaseinc",
    group: "Phase",
    description:
      "Even air retards light a bit. We set the thickness of vacuum so it advances the phase by λ/4. Useful for changing interference.",
    active: false,
    absorption: 0,
    phase: 0.25,
    id: 17,
    ascii: ["↝"],
    tiles: [[17, 0]]
  },
  {
    name: "filter",
    group: "Absorption",
    description: "Filter with 50% absorption probability.",
    active: false,
    absorption: 0.5,
    phase: 0,
    id: 18,
    ascii: ["░"],
    tiles: [[18, 0]]
  },
  {
    name: "void",
    group: "Basic",
    description: "The void...",
    active: false,
    absorption: 0,
    phase: 0,
    id: 19,
    ascii: ["."],
    tiles: [[19, 0]]
  },
  {
    name: "wall",
    group: "Basic",
    description: "A standard wall.",
    active: false,
    absorption: 1,
    phase: 0,
    id: 20,
    ascii: ["▓"],
    tiles: [[20, 0], [20, 1]]
  },
  {
    name: "gate",
    group: "Basic",
    description: "A controlled gate.",
    active: false,
    absorption: 1,
    phase: 0,
    id: 21,
    ascii: ["W", "M"],
    tiles: [[21, 0], [21, 1]]
  },
  {
    name: "faraday",
    group: "Polarization",
    description:
      "Rotates polarization with magnetic field by 45°. Has different symmetries than Sugar Solution. A building block for optical diodes.",
    active: false,
    absorption: 0,
    phase: -0.25,
    id: 30,
    ascii: ["🠵", "🠶", "🠷", "🠴"],
    tiles: [[30, 0], [30, 1], [30, 2], [30, 3]]
  }
];
