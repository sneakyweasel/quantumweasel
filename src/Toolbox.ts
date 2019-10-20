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
  tools: ToolInterface[]

  constructor(tools: ToolInterface[] = []) {
    this.tools = tools
  }

  /**
   * Add an element to the inventory
   * Check if element exists in list to update its value otherzise create it
   * @param tool Element
   */
  add(tool: ToolInterface): void {
    this.tools.push(tool)
  }

  /**
   * Override toString() method
   */
  toString(): string {
    let resultStr = "Toolbox contains:\n"
    this.tools.map((tool: ToolInterface) => {
      resultStr += JSON.stringify(tool)
    })
    return resultStr
  }
}
