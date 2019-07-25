import Pos from "./Pos.js"

export default class Corner extends Pos {
    constructor(q: number, r: number) {
        super(q, r, 'v')
    }
}
