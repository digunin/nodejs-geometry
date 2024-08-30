import { Figure } from './figure.js';

export class Ellipse extends Figure {
  constructor(
    protected _minorRadius: number,
    protected _majorRadius: number,
  ) {
    super('ellipse');
  }

  public draw() {
    console.log(`Ellipse with radii ${this._minorRadius} and ${this._majorRadius} has been drawn`);
  }

  public getPerimeter(): number {
    return 0;
  }
}
