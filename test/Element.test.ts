import Element from '../Element'

describe('Elements', () => {
    xit('should create a new element by its name', () => {
        const elem = Element.fromName('laser')
        expect(elem.exportJSON()).toEqual({active: true, ascii: ["^", "^", ">", ">", "v", "v", "<", "<"], description: "A one-photon laser source", group: "Emitter", id: 1, link: "./elements/laser", matrix: [], name: "laser", tiles: ""})
    })
})
