import { Color } from "rot-js";

/**
 * List of element names
 */
export const enum Elem {
  // Basic
  Void = "Void",
  Wall = "Wall",
  Gate = "Gate",
  // Source
  Laser = "Laser",
  // Direction
  Mirror = "Mirror",
  BeamSplitter = "BeamSplitter",
  PolarizingBeamSplitter = "PolarizingBeamSplitter",
  CoatedBeamSplitter = "CoatedBeamSplitter",
  CornerCube = "CornerCube",
  // Absorption
  Detector = "Detector",
  Rock = "Rock",
  Mine = "Mine",
  Absorber = "Absorber",
  DetectorFour = "DetectorFour",
  // Polarization
  PolarizerH = "PolarizerH",
  PolarizerV = "PolarizerV",
  QuarterWavePlateH = "QuarterWavePlateH",
  QuarterWavePlateV = "QuarterWavePlateV",
  SugarSolution = "SugarSolution",
  FaradayRotator = "FaradayRotator",
  // Phase
  Glass = "Glass",
  VacuumJar = "VacuumJar"
}

/**
 * List of group names
 */
export const enum Group {
  Basic = "Basic",
  Source = "Source",
  Direction = "Direction",
  Absorption = "Absorption",
  Polarization = "Polarization",
  Phase = "Phase"
}

export const ElemGroups: { [symbol: string]: Elem[] } = {
  Basic: [Elem.Void, Elem.Wall, Elem.Gate],
  Source: [Elem.Laser],
  Direction: [
    Elem.Mirror,
    Elem.BeamSplitter,
    Elem.PolarizingBeamSplitter,
    Elem.CoatedBeamSplitter,
    Elem.CornerCube
  ],
  Absorption: [
    Elem.Detector,
    Elem.Rock,
    Elem.Mine,
    Elem.Absorber,
    Elem.DetectorFour
  ],
  Polarization: [
    Elem.PolarizerH,
    Elem.PolarizerV,
    Elem.QuarterWavePlateH,
    Elem.QuarterWavePlateV,
    Elem.SugarSolution,
    Elem.FaradayRotator
  ],
  Phase: [Elem.Glass, Elem.VacuumJar]
};

// Convert angles to unicode symbols
// https://en.wikipedia.org/wiki/Template:Unicode_chart_Arrows
export function angleToSymbol(angle: number): string {
  angle = angle % 360;
  switch (angle) {
    case 0:
      return "↑";
    case 45:
      return "↗";
    case 90:
      return "→";
    case 135:
      return "↘";
    case 180:
      return "↓";
    case 225:
      return "↙";
    case 270:
      return "←";
    case 315:
      return "↖";
    default:
      throw new Error("Something is wrong with provided angle.");
  }
}

export function symbolToAngle(direction: string): number {
  switch (direction) {
    case "↑":
      return 0;
    case "↗":
      return 45;
    case "→":
      return 90;
    case "↘":
      return 135;
    case "↓":
      return 180;
    case "↙":
      return 225;
    case "←":
      return 270;
    case "↖":
      return 315;
    default:
      throw new Error("Something is wrong with provided direction string.");
  }
}

export function padLeft(
  text: string,
  length: number,
  character?: string
): string {
  const char = character || " ";
  while (text.length < length) {
    text = char + text;
  }
  return text;
}

export function padRight(
  text: string,
  length: number,
  character?: string
): string {
  const char = character || " ";
  while (text.length < length) {
    text += char;
  }
  return text;
}

export function toPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

export function hsl2hexrgb(
  hue = 0.45,
  saturation = 0,
  lightness = 0.5
): string {
  if (hue >= 1) {
    hue = 1;
  }
  if (saturation >= 1) {
    saturation = 1;
  }
  if (lightness >= 1) {
    saturation = 1;
  }
  const hsl = Color.hsl2rgb([hue, saturation, lightness]);
  return Color.toHex(hsl);
}

export function scaleOpacity(opacity: number): string {
  if (opacity >= 1) {
    opacity = 1;
  }
  const hsl = Color.hsl2rgb([0.333, 0.333, opacity]);
  return Color.toHex(hsl);
}

// Display Helpers
export function displayText(elementId: string, text: string): void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // document.getElementById(elementId)!.textContent = text;
  console.debug(`Log #${elementId}: ${text}`);
}
