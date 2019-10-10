import * as qt from "quantum-tensors";
import Element from "../Element";

export default class Filter extends Element {
  rotation: number;
  element: Element;
  constructor(element: Element, rotation: number) {
    super(element.id, element.name, element.group);
    this.rotation = rotation;
  }
  transition(rotation: number): qt.Operator {
    return qt.attenuator(Math.SQRT1_2);
  }
}
