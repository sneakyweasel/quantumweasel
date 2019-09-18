// ELEMENT CLASS
// Basic class related to game elements
// TODO: Include v1 names

export default class Element {
    id: number                  // required
    name: string                // required
    ascii: string[]             // required
    group: string               // optional
    description: string         // optional
    link: string                // optional
    active: boolean             // default: false
    tiles: string               // default: none
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
        this.matrix = matrix
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
            matrix: this.matrix
        }
    }

    // Static JSON load
    static fromName(name: string): Element {
        const jsonElements = require(`../elements/elements.json`)
        const elem = jsonElements.find((elem: { name: string }) => {
            return elem.name === name
        })
        return new Element(
            elem.id,
            elem.name,
            elem.ascii,
            elem.group,
            elem.description,
            elem.link,
            elem.active,
            elem.tiles,
            elem.matrix
        )
    }
}
