import * as math from "mathjs"

export default class Element {
    id: number                  // required
    name: string                // required
    ascii: string               // required
    group: string               // optional
    description: string         // optional
    active: boolean             // default: false
    svg: string                 // default: none
    rotation: math.Matrix       // default: zeros matrix
    translation: math.Matrix    // default: zeros matrix

    constructor(
        id: number,
        name: string,
        ascii: string,
        group: string,
        description: string,
        active: boolean,
        svg: string,
        rotation: math.Matrix,
        translation: math.Matrix
    ) {
        this.id = id
        this.name = name
        this.ascii = ascii
        this.group = group
        this.description = description
        this.active = active
        this.svg = svg
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

    // Blank element
    static blank(): Element {
        return new Element(
            0,
            "Void",
            ".",
            "Basics",
            "Basic void cell.",
            false,
            "svgPath",
            math.matrix(math.zeros(2, 2)),
            math.matrix(math.zeros(2, 2))
        )
    }

    // Mirror element
    static source(): Element {
        return new Element(
            1,
            "Laser source",
            ">",
            "Emitters",
            "Emits a directed beam...",
            true,
            "svgPath",
            math.matrix(math.zeros(2, 2)),
            math.matrix(math.zeros(2, 2))
        )
    }

    // Mirror element
    static mirror(): Element {
        return new Element(
            2,
            "Mirror",
            "/",
            "Direction",
            "Reflects...",
            false,
            "svgPath",
            math.matrix(math.zeros(2, 2)),
            math.matrix(math.zeros(2, 2))
        )
    }

    // Mirror element
    static detector(): Element {
        return new Element(
            3,
            "Detector",
            "¤",
            "Absorbers",
            "Absorbs and detects...",
            false,
            "svgPath",
            math.matrix(math.zeros(2, 2)),
            math.matrix(math.zeros(2, 2))
        )
    }
}
