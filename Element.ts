import * as math from "mathjs"

export default class Element {
    id: number
    name: string
    group: string
    description: string
    active: boolean
    svg: string
    rotation: math.Matrix
    translation: math.Matrix

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

}
