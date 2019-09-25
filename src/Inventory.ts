// TOOLBOX CLASS
// Toolbox class includes the various elements accessible to the player for a specific level.
// Sandbox mode would have infinite tools available to the player

import Element from "./Element";

export default class Inventory {
  tools: Array<[Element, number]>;

  constructor(tools: Array<[Element, number]> = []) {
    this.tools = tools;
  }

  add(element: Element, quantity = 1): void {
    // Check if element exists in list to update its value otherzise create it
    this.tools.push([element, quantity]);
  }

  toString(): string {
    let resultStr = "Toolbox contains:\n";
    this.tools.forEach((tool: [Element, number]) => {
      resultStr += JSON.stringify(tool[0]);
    });
    return resultStr;
  }
}
