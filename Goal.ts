// GOAL CLASS
// Each detector should have a related threshold level in order to achieve the level.

import Cell from "./Cell"

export default class Goal {
    detector: Cell
    threshold: number
    value: number

    constructor(
        detector: Cell,
        threshold: number,
        value: number
    ) {
        this.detector = detector
        this.threshold = threshold
        this.value = value
    }

    // check if the detector has reached its threshold
    check() {
        return (this.value >= this.threshold)
    }
}