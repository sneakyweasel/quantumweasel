export class Glyph {
  public character: string;
  public foregroundColor: string;
  public backgroundColor: string;

  constructor(
    character: string,
    foregroundColor = "white",
    backgroundColor = "black"
  ) {
    this.character = character;
    this.foregroundColor = foregroundColor;
    this.backgroundColor = backgroundColor;
  }
}
