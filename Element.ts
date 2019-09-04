import * as math from "mathjs"

export default class Element {
    id: number                  // required
    name: string                // required
    group: string               // optional
    description: string         // optional
    active: boolean             // default: false
    svg: string                 // default: none
    rotation: math.Matrix       // default: zeros matrix
    translation: math.Matrix    // default: zeros matrix

    constructor(
        id: number,
        name: string,
        description: string,
        active: boolean,
        svg: string,
        rotation: math.Matrix,
        translation: math.Matrix
    ) {
        // Basic level informations
        this.id = id
        this.name = name
        this.description = description
        this.svg = svg
        this.active = active
        // Matrices
        this.rotation = rotation
        this.translation = translation
    }

    // Display element informations
    display() {
        console.log(`Element ${this.name} (id: ${this.id}) is ${this.active ? "active" : "passive"}`)
    }

    // Export JSON
    exportJSON() {
        return JSON.stringify(this)
    }

    static blank(): Element {
        return new Element(
            0,
            "Void",
            "Basics",
            false,
            "",
            math.matrix(math.zeros(2, 2)),
            math.matrix(math.zeros(2, 2))
        )
    }
}
