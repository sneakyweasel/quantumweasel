/**
 * TOOL INTERFACE
 * Contains number of available elements to the player
 */
export interface ToolInterface {
  element: string
  quantity: number
}

/**
 * TOOLBOX CLASS
 * Inventory contains the list of elements available to the player.
 */
export default class Toolbox {
  elements: string[]

  constructor(elements: string[]) {
    this.elements = elements
  }

  /**
   * Add an element to the inventory
   * Check if element exists in list to update its value otherzise create it
   * @param tool Element
   */
  add(element: string): void {
    this.elements.push(element)
  }

  /**
   * Remove an element from the toolbox
   * Check if element exists in list before
   * @param tool Element
   */
  remove(element: string): void {
    var index = this.elements.indexOf(element);
    if (index > -1) {
      this.elements.splice(index, 1);
    }
  }

  /**
   * Override toString() method
   * Display toolbox content
   * @returns string
   */
  toString(): string {
    let resultStr = "Toolbox contains:\n"
    this.elements.map((element: string) => {
      resultStr += JSON.stringify(element)
    })
    return resultStr
  }
}
