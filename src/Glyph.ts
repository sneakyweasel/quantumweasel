export class Glyph {
    public character: string
    public foregroundColor: string
    public backgroundColor: string

    constructor(character: string, foregroundColor: string = "white", backgroundColor: string = "black") {
        this.character = character
        this.foregroundColor = foregroundColor
        this.backgroundColor = backgroundColor
    }
}