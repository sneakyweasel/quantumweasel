import Element from '../Element'

describe('Elements', () => {
    it('should create a new element by its name', () => {
        const elem = Element.fromName('laser')
        expect(elem.exportJSON()).toEqual({active: true, absorption: 0, ascii: ["^", ">", "v", "<"], description: "A one-photon laser source", group: "Emitter", id: 1, link: "./elements/laser", matrix: [], phase: 0, name: "laser", tiles: ""})
    })

    it('should deduce the angle of rotation by the length of its ascii', () => {
        const mirror = Element.fromName('mirror')
        const laser = Element.fromName('laser')
        const rock = Element.fromName('rock')
        expect(mirror.rotationAngle).toEqual(45)
        expect(laser.rotationAngle).toEqual(90)
        expect(rock.rotationAngle).toEqual(360)
    })
})
