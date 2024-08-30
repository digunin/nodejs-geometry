import { Figure } from './figure.js';

export class Ellipse extends Figure {
  constructor(
    protected _minorRadius: number,
    protected _majorRadius: number,
  ) {
    super();
    this._type = 'ellipse';
  }

  public override draw() {
    console.log(`Ellipse with radii ${this._minorRadius} and ${this._majorRadius}`);
  }

  public override getPerimeter(): number {
    return -1;
  }
  public override getSquare(): number {
    return -1;
  }
}
