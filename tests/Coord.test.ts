import Coord from '../Coord'

// Coordinates testing
describe('Coordinates', () => {
    it('should generate adjacency list of a coord', () => {
        const coord = new Coord(4, 4)
        expect(coord.adjacent()).toEqual([
            new Coord(3, 4),
            new Coord(4, 5),
            new Coord(5, 4),
            new Coord(4, 3)
        ])
    })

    it('should test for adjacency of two coords', () => {
        const coord1 = new Coord(4, 4)
        const coord2 = new Coord(4, 5)
        expect(coord1.isAdjacent(coord2)).toBe(true)
        expect(coord2.isAdjacent(coord1)).toBe(true)
    })

    it('should test if a coord is included in a list of coords', () => {
        const coord1 = new Coord(4, 4)
        const coord2 = new Coord(4, 4)
        const coord3 = new Coord(4, 5)
        const coord4 = new Coord(5, 5)
        const coords = [coord2, coord3, coord4]
        expect(coord1.isIncludedIn(coords)).toBe(true)
    })

    it('should give the distance to the edge of the grid from a coordinate', () => {
        const coord = new Coord(4, 6)
        const cols = 20
        const rows = 30
        expect(coord.distanceToExit(0, rows, cols)).toBe(4)
        expect(coord.distanceToExit(90, rows, cols)).toBe(6)
        expect(coord.distanceToExit(180, rows, cols)).toBe(14)
        expect(coord.distanceToExit(270, rows, cols)).toBe(36)
    })

})
