import Coord from './Coord'

// Coordinates testing
describe('Coordinates', () => {
    it('should generate adjacency list of a coord', () => {
        const coord = new Coord(4, 4)
        expect(coord.adjacent()).toEqual([
            new Coord(3, 4),
            new Coord(5, 4),
            new Coord(4, 3),
            new Coord(4, 5)
        ])
    })

    // FIXME: There seems to be a problem with comparing instances
    xit('should test for adjacency of two coords', () => {
        const coord1 = new Coord(4, 4)
        const coord2 = new Coord(4, 5)
        // console.log(coord1.adjacent())
        expect(coord1.isAdjacent(coord2)).toBe(true)
        expect(coord2.isAdjacent(coord1)).toBe(true)
    })
})
