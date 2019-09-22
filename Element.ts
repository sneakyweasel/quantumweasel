// ELEMENT CLASS
// Basic class related to game elements

export default class Element {
    id: number                  // required
    name: string                // required
    ascii: string[]             // required
    group: string               // optional
    description: string         // optional
    link: string                // optional
    active: boolean             // default: false
    tiles: string               // default: none
    absorption: number          // default: none
    phase: number               // default: none
    matrix: number[][]          // default: zeros matrix

    constructor(
        id: number,
        name: string,
        ascii: string[] = [" ", " ", " ", " ", " ", " ", " ", " "],
        group: string = "",
        description: string = "",
        link: string = "",
        active: boolean = false,
        tiles: string = "tilemap.png",
        absorption: number = 0,
        phase: number = 0,
        matrix: number[][] = [[0, 0], [0, 0]]
    ) {
        this.id = id
        this.name = name
        this.ascii = ascii
        this.group = group
        this.description = description
        this.link = link
        this.active = active
        this.tiles = tiles
        this.absorption = absorption
        this.phase = phase
        this.matrix = matrix
    }

    get rotationAngle(): number {
        return 360 / this.ascii.length
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
    exportJSON(): Object {
        return {
            id: this.id,
            name: this.name,
            ascii: this.ascii,
            group: this.group,
            description: this.description,
            link: this.link,
            active: this.active,
            tiles: this.tiles,
            absorption: this.absorption,
            phase: this.phase,
            matrix: this.matrix
        }
    }

    // Static JSON load
    // FIXME: It's goddamn ugly
    static fromName(name: string, version: number = 2): Element {
        // const jsonElements = require(`../elements/elements.json`)
        const jsonElements = [
            {
                id: 0,
                name: "void",
                namev1: "Void",
                ascii: [
                    " "],
                group: "Basic",
                description: "The void...",
                link: "./elements/void",
                active: false,
                tiles: "",
                absorption: 0,
                phase: 0,
                matrix: []
            },
            {
                id: 1,
                name: "laser",
                namev1: "Source",
                ascii: [
                    "^",
                    ">",
                    "v",
                    "<"
                ],
                group: "Emitter",
                description: "A one-photon laser source",
                link: "./elements/laser",
                active: true,
                tiles: "",
                absorption: 0,
                phase: 0,
                matrix: []
            },
            {
                id: 2,
                name: "mirror",
                namev1: "ThinMirror",
                ascii: [
                    "|",
                    "/",
                    "-",
                    "\\",
                    "|",
                    "/",
                    "-",
                    "\\"
                ],
                group: "Direction",
                description: "A simple reflecting mirror",
                link: "./elements/mirror",
                active: false,
                tiles: "",
                absorption: 0,
                phase: 0,
                matrix: []
            },
            {
                id: 3,
                name: "detector",
                namev1: "Detector",
                ascii: [
                    "¤",
                    "¤",
                    "¤",
                    "¤"
                ],
                group: "Absorber",
                description: "A one-photon detector",
                link: "./elements/detector",
                active: false,
                tiles: "",
                absorption: 1,
                phase: 0,
                matrix: []
            },
            {
                id: 4,
                name: "rock",
                namev1: "Rock",
                ascii: [
                    "#"
                ],
                group: "Absorber",
                description: "An absorbing pet rock",
                link: "./elements/rock",
                active: false,
                tiles: "",
                absorption: 1,
                phase: 0,
                matrix: []
            },
            {
                id: 5,
                name: "mine",
                namev1: "Mine",
                ascii: [
                    "!"
                ],
                group: "Absorber",
                description: "An explosive mine (disarm Jean)",
                link: "./elements/mine",
                active: false,
                tiles: "",
                absorption: 1,
                phase: 0,
                matrix: []
            },
            {
                id: 6,
                name: "beamsplitter",
                namev1: "ThinSplitter",
                ascii: [
                    "|",
                    "/",
                    "-",
                    "\\",
                    "|",
                    "/",
                    "-",
                    "\\"
                ],
                group: "Direction",
                description: "A beamsplitter",
                link: "./elements/beamsplitter",
                active: false,
                tiles: "",
                absorption: 0,
                phase: 0,
                matrix: []
            },
            {
                id: 7,
                name: "filter",
                namev1: "Absorber",
                ascii: [
                    "-"
                ],
                group: "Absorber",
                description: "A neutral density filter",
                link: "./elements/absorber",
                active: false,
                tiles: "",
                absorption: 0.5,
                phase: 0,
                matrix: []
            },
            {
                id: 8,
                name: "phaseinc",
                namev1: "VacuumJar",
                ascii: [
                    "↝"
                ],
                group: "Phase",
                description: "A glass slab that increases phase.",
                link: "./elements/phaseinc",
                active: false,
                tiles: "",
                absorption: 0,
                phase: 0.25,
                matrix: []
            },
            {
                id: 9,
                name: "phasedec",
                namev1: "Glass",
                ascii: [
                    "↜"
                ],
                group: "Phase",
                description: "Void that decreases phase.",
                link: "./elements/phasedec",
                active: false,
                tiles: "",
                absorption: 0,
                phase: -0.25,
                matrix: []
            }
        ]

        if (version === 2) {
            const elem = jsonElements.find((elem: { name: string }) => {
                return elem.name === name
            })
            return new Element(
                elem!.id,
                elem!.name,
                elem!.ascii,
                elem!.group,
                elem!.description,
                elem!.link,
                elem!.active,
                elem!.tiles,
                elem!.absorption,
                elem!.phase,
                elem!.matrix
            )
        } else {
            const elem = jsonElements.find((elem: { namev1: string }) => {
                return elem.namev1 === name
            })
            return new Element(
                elem!.id,
                elem!.name,
                elem!.ascii,
                elem!.group,
                elem!.description,
                elem!.link,
                elem!.active,
                elem!.tiles,
                elem!.absorption,
                elem!.phase,
                elem!.matrix
            )
        }
    }
}
