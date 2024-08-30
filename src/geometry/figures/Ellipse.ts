import { GeometryComputing } from '../GeometryComputing.js';
import { Figure } from './figure.js';

export class Ellipse extends Figure {
  constructor(
    computing: GeometryComputing,
    protected _minorRadius: number,
    protected _majorRadius: number,
  ) {
    super(computing);
    this._type = 'ellipse';
  }

  public override draw() {
    console.log(`Ellipse with radii ${this._minorRadius} and ${this._majorRadius}`);
  }

  public override getPerimeter(): number {
    return this._computing.getEllipsePerimeter(this);
  }
  public override getSquare(): number {
    return this._computing.getEllipseSquare(this);
  }

  public get minorRadius() {
    return this._minorRadius;
  }

  public get majorRadius() {
    return this._majorRadius;
  }
}
