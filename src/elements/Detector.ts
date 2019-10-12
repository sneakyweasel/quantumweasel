import * as qt from "quantum-tensors";
import Element from "../Element";

export default class Detector extends Element {
  rotation: number;
  element: Element;
  constructor(element: Element, rotation: number) {
    super(element.id, element.name, element.group);
    this.rotation = rotation;
  }
  transition(_rotation: number): qt.Operator {
    return qt.attenuator(1);
  }
}