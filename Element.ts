// TODO: Convey the rotation steps of element

export default class Element {
    id: number                  // required
    name: string                // required
    ascii: string[]             // required
    group: string               // optional
    description: string         // optional
    active: boolean             // default: false
    svg: string                 // default: none
    rotation: number[][]        // default: zeros matrix
    translation: number[][]     // default: zeros matrix

    constructor(
        id: number,
        name: string,
        ascii: string[],
        group: string,
        description: string,
        active: boolean,
        svg: string,
        rotation: number[][],
        translation: number[][]
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

    // Override of toString() method
    toString() {
        return `{#Element ${this.name}}`
    }

    // Display element informations
    display() {
        console.log(`Element ${this.name} (id: ${this.id}) is ${this.active ? "active" : "passive"}`)
    }

    // Export JSON
    exportJSON() {
        return JSON.stringify(this)
    }

    // TODO: Rework to load from JSON
    // Static selector
    static fromName(name: string): Element {
        switch (name) {
            case "void":
                return Element.void()
            case "mirror":
                return Element.mirror()
            case "laser":
                return Element.laser()
            case "beamsplitter":
                return Element.beamsplitter()
            case "detector":
                return Element.detector()
            case "rock":
                return Element.rock()
            case "mine":
                return Element.mine()
            default:
                throw new Error('Element name error...')
        }
    }

    // void element
    static void(): Element {
        return new Element(
            0,
            "void",
            [" "],
            "Basics",
            "Basic void cell.",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }

    // laser element
    static laser(): Element {
        return new Element(
            1,
            "laser",
            // 0, 45, 90, 135, 180, 225, 270, 315
            ["^", "^", ">", ">", "v", "v", "<", "<"],
            "Emitters",
            "Emits a directed beam...",
            true,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }

    // Mirror element
    static mirror(): Element {
        return new Element(
            2,
            "mirror",
            ["|", "/", "-", "\\", "|", "/", "-", "\\"],
            "Direction",
            "Reflects...",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }

    // Detector element
    static detector(): Element {
        return new Element(
            3,
            "detector",
            ["¤", "¤", "¤", "¤", "¤", "¤", "¤", "¤"],
            "Absorbers",
            "Absorbs and detects...",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }
    // Detector element
    static rock(): Element {
        return new Element(
            4,
            "detector",
            ["#", "#", "#", "#", "#", "#", "#", "#"],
            "Absorbers",
            "Absorbs and detects...",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }
    // Beam Splitter element
    static beamsplitter(): Element {
        return new Element(
            5,
            "beamsplitter",
            ["%", "%", "%", "%", "%", "%", "%", "%"],
            "Absorbers",
            "Absorbs and detects...",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }
    // mine element
    static mine(): Element {
        return new Element(
            5,
            "beamsplitter",
            ["%", "%", "%", "%", "%", "%", "%", "%"],
            "Absorbers",
            "Absorbs and detects...",
            false,
            "svgPath",
            [[0, 0], [0, 0]],
            [[0, 0], [0, 0]]
        )
    }
}
